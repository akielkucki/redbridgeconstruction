import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Contact, Footer, Navigation } from "@/components";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { ServiceFeatures } from "@/components/ServiceFeatures";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceProcess } from "@/components/ServiceProcess";
import { ServiceProjects } from "@/components/ServiceProjects";
import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/config/site.config";

function getServiceSlug(serviceSlug: string): string {
  return `${serviceSlug}-${siteConfig.contact.serviceAreaSlug}`;
}

function getServiceBySlug(slug: string) {
  for (const service of siteConfig.services) {
    if (getServiceSlug(service.slug) === slug) {
      return service;
    }
  }
  return null;
}

export async function generateStaticParams() {
  return siteConfig.services.map((service) => ({
    slug: getServiceSlug(service.slug),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const area = siteConfig.contact.serviceArea;

  return {
    title: `${service.title} in ${area}`,
    description: `${service.description} Professional ${service.title.toLowerCase()} services across ${area}, ${siteConfig.contact.address.state}.`,
    alternates: { canonical: `/${slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const area = siteConfig.contact.serviceArea;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <Navigation />
      <main>
        <ServiceHero service={service} area={area} />
        <ServiceFeatures service={service} area={area} />
        <ServiceProcess service={service} />
        <ServiceProjects service={service} />
        <ServiceFAQ service={service} area={area} />
        <Contact />
      </main>
      <Footer />
      <JsonLd data={faqJsonLd} />
    </>
  );
}
