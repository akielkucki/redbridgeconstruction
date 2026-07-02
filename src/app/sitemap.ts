import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

const SITE_URL = "https://www.redbridgeconstructionllc.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    {
      url: `${SITE_URL}/projects`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...siteConfig.services.map((service) => ({
      url: `${SITE_URL}/${service.slug}-${siteConfig.contact.serviceAreaSlug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...siteConfig.portfolio.map((project) => ({
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ];
}
