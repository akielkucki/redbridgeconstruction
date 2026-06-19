import { siteConfig } from "@/config/site.config";

const url = siteConfig.url;

/** GeneralContractor / LocalBusiness schema — rendered site-wide. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${url}/#organization`,
    name: siteConfig.company.name,
    legalName: siteConfig.company.fullName,
    description: siteConfig.company.description,
    url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    image: `${url}/portfolio/bob_house.jpg`,
    logo: `${url}/portfolio/bob_house.jpg`,
    foundingDate: String(siteConfig.company.foundedYear),
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.5462,
      longitude: -75.2186,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${siteConfig.contact.serviceArea}, ${siteConfig.contact.address.state}`,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    sameAs: Object.values(siteConfig.social),
    makesOffer: siteConfig.services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${url}/${s.slug}-${siteConfig.contact.serviceAreaSlug}`,
      },
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(siteConfig.testimonials.length),
      bestRating: "5",
    },
    review: siteConfig.testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating),
        bestRating: "5",
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
    })),
  };
}

/** WebSite schema. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    url,
    name: siteConfig.company.fullName,
    publisher: { "@id": `${url}/#organization` },
  };
}

type Service = (typeof siteConfig.services)[number];

/** Service schema for an individual service page. */
export function serviceSchema(service: Service, area: string) {
  const serviceUrl = `${url}/${service.slug}-${siteConfig.contact.serviceAreaSlug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}/#service`,
    name: `${service.title} in ${area}`,
    serviceType: service.title,
    description: service.longDescription,
    url: serviceUrl,
    image: `${url}${service.heroImage}`,
    provider: { "@id": `${url}/#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${area}, ${siteConfig.contact.address.state}`,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.title} services`,
      itemListElement: service.features.map((f) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: f },
      })),
    },
  };
}

/** FAQPage schema built from a service's FAQs. */
export function faqSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** Article schema for a project case study. */
export function caseStudySchema(
  project: (typeof siteConfig.portfolio)[number],
) {
  const projectUrl = `${url}/projects/${project.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.caseStudy.h1,
    description: project.caseStudy.metaDescription,
    url: projectUrl,
    image: project.caseStudy.images.map((img) => `${url}${img.src}`),
    author: { "@id": `${url}/#organization` },
    publisher: { "@id": `${url}/#organization` },
    about: project.caseStudy.projectType,
    locationCreated: project.caseStudy.location,
  };
}

/** BreadcrumbList schema. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${url}${item.path}`,
    })),
  };
}
