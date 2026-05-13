"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { siteConfig } from "@/components/index";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow="Client Stories"
          title={
            <>
              What clients
              <br />
              <span className="text-accent-gradient">say about us.</span>
            </>
          }
          className="mb-16 md:mb-20"
        />

        <div className="grid md:grid-cols-3 gap-5">
          {siteConfig.testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full p-8 hover:shadow-lg transition-shadow">
                <Quote className="w-8 h-8 text-[var(--accent)]/30 mb-4" />

                <div className="flex gap-0.5 mb-5 text-[var(--accent)]">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                <blockquote className="font-[family-name:var(--font-inter)] text-foreground leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3 pt-6 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-surface-muted flex items-center justify-center font-[family-name:var(--font-space-grotesk)] font-bold text-foreground">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-foreground text-sm">
                      {t.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
