import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";
import { JsonLd } from "@/components/ui/json-ld";
import { siteConfig } from "@/config/site.config";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  axes: ["wdth"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://www.redbridgeconstructionllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${siteConfig.company.name} | Remodeling, Custom Homes & Restoration in Bucks County, PA`,
    template: `%s | ${siteConfig.company.name}`,
  },
  description: `Red Bridge Construction has built, remodeled, and restored homes across New Hope and Bucks County since ${siteConfig.company.foundedYear}. Licensed & insured. Free consultations.`,
  keywords: [
    "general contractor Bucks County",
    "home remodeling New Hope PA",
    "custom home builder Bucks County",
    "historic restoration Pennsylvania",
    "kitchen remodel",
    "bathroom remodel",
    siteConfig.contact.address.city,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteConfig.company.fullName,
    description: siteConfig.company.tagline,
    url: SITE_URL,
    siteName: siteConfig.company.name,
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fafaf8",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: siteConfig.company.fullName,
  url: SITE_URL,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  foundingDate: String(siteConfig.company.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.contact.address.street,
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.state,
    postalCode: siteConfig.contact.address.zip,
    addressCountry: "US",
  },
  areaServed: "Bucks County, PA",
  openingHours: "Mo-Fr 08:00-17:00",
  sameAs: [siteConfig.social.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased bg-paper text-ink">
        {children}
        <JsonLd data={jsonLd} />
      </body>
    </html>
  );
}
