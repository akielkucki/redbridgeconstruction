import { notFound } from "next/navigation";
import { Metadata } from "next";
import { siteConfig } from "@/components/index";
import { Navigation, Footer, CTA, Contact } from "@/components";
import { ServiceHero } from "@/components/ServiceHero";
import { ServiceFeatures } from "@/components/ServiceFeatures";
import { ServiceProcess } from "@/components/ServiceProcess";
import { ServiceProjects } from "@/components/ServiceProjects";
import { ServiceFAQ } from "@/components/ServiceFAQ";

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
    title: `${service.title} in ${area} | ${siteConfig.company.fullName}`,
    description: `${service.description} Professional ${service.title.toLowerCase()} services across ${area}, ${siteConfig.contact.address.state}.`,
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

  return (
    <>
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
