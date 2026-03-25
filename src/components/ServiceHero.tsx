"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";
import { BathIcon, CookingPot, HouseIcon, TreesIcon } from "lucide-react";
import { siteConfig } from "@/components/index";

const iconMap: Record<string, ReactNode> = {
  kitchen: <CookingPot className="w-12 h-12" />,
  bathroom: <BathIcon className="w-12 h-12" />,
  home: <HouseIcon className="w-12 h-12" />,
  outdoor: <TreesIcon className="w-12 h-12" />,
};

interface ServiceHeroProps {
  service: (typeof siteConfig.services)[number];
  city: string;
}

export function ServiceHero({ service, city }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex flex-col w-full items-center justify-center overflow-hidden bg-background pt-24">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 2, ease: [0.19, 1, 0.22, 1] }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-muted mb-8"
          >
            {iconMap[service.icon]}
          </motion.div>

          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gradient-to-r from-foreground to-foreground" />
            <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-[0.2em] text-muted uppercase">
              {city}, {siteConfig.contact.address.state}
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-foreground to-foreground" />
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
              className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground"
            >
              {service.title}
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
              className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.9] tracking-tight text-gradient"
            >
              in {city}
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-2xl mx-auto font-[family-name:var(--font-inter)] text-lg md:text-xl text-muted leading-relaxed"
          >
            {service.longDescription}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12"
          >
            <a href="/#contact" className="btn-primary">
              <span>Get a Free Quote</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
