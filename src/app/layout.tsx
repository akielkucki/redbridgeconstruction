import type { Metadata } from "next";
import {Playfair_Display, DM_Sans, Brawler} from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/components/index";
import React from "react";

const playfair = Brawler({
  variable: "--font-space-grotesk",
    subsets: ["latin"],
  weight: "400"

});

const dmSans = DM_Sans({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.company.fullName} | Contemporary Renovation Specialists`,
  description: siteConfig.company.description,
  keywords: [
    "renovations",
    "home renovation",
    "kitchen remodel",
    "bathroom remodel",
    "contemporary design",
    "luxury renovations",
    siteConfig.contact.address.city,
  ],
  openGraph: {
    title: siteConfig.company.fullName,
    description: siteConfig.company.description,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
