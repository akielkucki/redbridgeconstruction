import type { Metadata } from "next";
import { siteConfig } from "@/components/index";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/jsonLd";
import { ProjectsClient } from "./ProjectsClient";

const title = "Our Projects";
const description = `A complete look at recent renovations, custom builds, and historic restorations by ${siteConfig.company.fullName} across ${siteConfig.contact.serviceArea}, ${siteConfig.contact.address.state}.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${title} | ${siteConfig.company.fullName}`,
    description,
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <ProjectsClient />
    </>
  );
}
