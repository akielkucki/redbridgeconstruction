import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/components/index";
import { Navigation, Footer, CTA, Contact } from "@/components";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceFeatures } from "@/components/ServiceFeatures";
import { ServiceProcess } from "@/components/ServiceProcess";
import { ServiceProjects } from "@/components/ServiceProjects";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { JsonLd } from "@/components/JsonLd";
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/jsonLd";

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
  const path = `/${slug}`;
  const title = `${service.title} in ${area}`;
  const description = `${service.description} Professional ${service.title.toLowerCase()} services across ${area}, ${siteConfig.contact.address.state}.`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.company.fullName}`,
      description,
      url: path,
      type: "website",
      images: [{ url: service.heroImage, alt: `${service.title} in ${area}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.company.name}`,
      description,
      images: [service.heroImage],
    },
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
  const path = `/${slug}`;

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service, area),
          faqSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/#services" },
            { name: service.title, path },
          ]),
        ]}
      />
      <Navigation />
      <main>
        <ServiceHero service={service} area={area} />
        <ServiceFeatures service={service} area={area} />
        <ServiceProcess service={service} />
        <ServiceProjects service={service} />
        <ServiceFAQ service={service} area={area} />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
