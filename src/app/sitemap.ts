import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site.config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${base}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = siteConfig.services.map((s) => ({
    url: `${base}/${s.slug}-${siteConfig.contact.serviceAreaSlug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const projectRoutes: MetadataRoute.Sitemap = siteConfig.portfolio.map(
    (p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    }),
  );

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
