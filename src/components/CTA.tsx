"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/components/index";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-surface-muted">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-foreground">
          {/* Background image */}
          <div className="absolute inset-0 opacity-[0.18]">
            <Image
              src="/ctabackground.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/30" />

          {/* Content */}
          <div className="relative px-8 md:px-16 lg:px-24 py-20 md:py-28 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">
                Ready to build?
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-6"
            >
              {siteConfig.cta.headline}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-[family-name:var(--font-inter)] text-lg text-white/70 leading-relaxed max-w-xl mb-10"
            >
              {siteConfig.cta.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <a href={siteConfig.cta.buttonLink}>
                <Button variant="accent" size="lg">
                  {siteConfig.cta.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href={`tel:${siteConfig.contact.phone}`}>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  Or call {siteConfig.contact.phone}
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
