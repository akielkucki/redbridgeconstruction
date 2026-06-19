import type { Metadata } from "next";
import {
  Brawler,
  DM_Sans,
  Noto_Sans,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import type React from "react";
import { siteConfig } from "@/components/index";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/jsonLd";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Brawler({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.company.fullName} | New Hope & Bucks County Builder`,
    template: `%s | ${siteConfig.company.name}`,
  },
  description: siteConfig.company.description,
  applicationName: siteConfig.company.fullName,
  keywords: [
    "construction Bucks County",
    "home remodeling New Hope",
    "custom home builder Bucks County",
    "kitchen remodel",
    "bathroom remodel",
    "historic restoration",
    "general contractor",
    siteConfig.contact.address.city,
    siteConfig.contact.serviceArea,
  ],
  authors: [{ name: siteConfig.company.fullName }],
  creator: siteConfig.company.fullName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.company.fullName} | New Hope & Bucks County Builder`,
    description: siteConfig.company.description,
    url: siteConfig.url,
    siteName: siteConfig.company.fullName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/portfolio/bob_house.jpg",
        width: 1200,
        height: 800,
        alt: `${siteConfig.company.fullName} — custom home in ${siteConfig.contact.serviceArea}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.company.fullName} | New Hope & Bucks County Builder`,
    description: siteConfig.company.tagline,
    images: ["/portfolio/bob_house.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "scroll-smooth",
        "font-sans",
        notoSans.variable,
        playfairDisplayHeading.variable,
      )}
    >
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
      >
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
