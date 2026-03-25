"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/components/index";

function SocialIcon({ platform }: { platform: string }) {
  switch (platform) {
    case "instagram":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      );
    case "facebook":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
    case "houzz":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.518 12.375v6.281h-5.569v-10.594l2.784-1.406v-3.188l-7.733 3.938v15.594h15.532v-10.625h-5zm2.482-12.375l-7.733 3.906v3.188l7.733-3.906v-3.188z" />
        </svg>
      );
    case "googleBusiness":
      return (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
      );
    default:
      return null;
  }
}

const platformLabels: Record<string, string> = {
  instagram: "Instagram",
  facebook: "Facebook",
  houzz: "Houzz",
  googleBusiness: "Google",
};

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="relative bg-background overflow-hidden" ref={ref}>

      {/* Top divider with glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">

        {/* Top row: Big brand + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16"
        >
          <div>
            <a href="/" className="inline-block mb-4">
              <span className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {siteConfig.company.name}
              </span>
              <span className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-light tracking-tight text-muted ml-2">
                {siteConfig.company.tagline}
              </span>
            </a>
            <p className="font-[family-name:var(--font-inter)] text-muted leading-relaxed max-w-md">
              {siteConfig.footer.tagline}
            </p>
          </div>
          <a
            href="/#contact"
            className="group flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-background font-[family-name:var(--font-inter)] font-semibold tracking-wide transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-accent-muted hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(245,239,224,0.15)] flex-shrink-0"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

        {/* Grid: Nav + Services + Contact + Social */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 mb-16">

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-foreground mb-5 uppercase tracking-widest">
              Navigate
            </h4>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-[family-name:var(--font-inter)] text-sm text-muted hover:text-foreground transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-foreground mb-5 uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3">
              {siteConfig.services.map((service) => (
                <li key={service.title}>
                  <span className="font-[family-name:var(--font-inter)] text-sm text-muted">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-foreground mb-5 uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-muted flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="font-[family-name:var(--font-inter)] text-sm text-muted hover:text-foreground transition-colors duration-300">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-muted flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="font-[family-name:var(--font-inter)] text-sm text-muted hover:text-foreground transition-colors duration-300 break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-muted flex-shrink-0 mt-0.5" />
                <address className="font-[family-name:var(--font-inter)] text-sm text-muted not-italic leading-relaxed">
                  {siteConfig.contact.address.street}<br />
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.state} {siteConfig.contact.address.zip}
                </address>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-foreground mb-5 uppercase tracking-widest">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <li key={platform}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 font-[family-name:var(--font-inter)] text-sm text-muted hover:text-foreground transition-colors duration-300"
                  >
                    <SocialIcon platform={platform} />
                    <span>{platformLabels[platform] || platform}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {siteConfig.footer.certifications.map((cert) => (
            <span
              key={cert}
              className="inline-flex items-center rounded-full border border-border-subtle bg-surface/40 px-4 py-1.5 font-[family-name:var(--font-inter)] text-xs text-muted tracking-wide"
            >
              {cert}
            </span>
          ))}
        </motion.div>

        {/* Bottom bar */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-[family-name:var(--font-inter)] text-xs text-muted"
          >
            {siteConfig.footer.copyright}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-6"
          >
            <a href="#" className="font-[family-name:var(--font-inter)] text-xs text-muted hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-[family-name:var(--font-inter)] text-xs text-muted hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
