"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { siteConfig } from "@/components/index";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const EASE = [0.19, 1, 0.22, 1] as const;

interface ServiceFeaturesProps {
  service: (typeof siteConfig.services)[number];
  area: string;
}

export function ServiceFeatures({ service, area }: ServiceFeaturesProps) {
  return (
    <section className="relative py-28 md:py-36 bg-surface-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we offer"
          title={
            <>
              {service.title}
              <br />
              <span className="text-accent-gradient">across {area}.</span>
            </>
          }
          className="mb-16 md:mb-20"
        />

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-start">
          {/* Accent image */}
          {service.accentImage && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: EASE }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-foreground/5 shadow-sm"
            >
              <Image
                src={service.accentImage}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />
            </motion.div>
          )}

          {/* Feature list */}
          <div className="grid sm:grid-cols-2 gap-5">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: EASE }}
              >
                <Card className="p-7 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--color-accent-soft)] flex items-center justify-center text-[var(--accent)]">
                      <Check className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <p className="font-[family-name:var(--font-inter)] text-foreground leading-relaxed pt-1.5">
                      {feature}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mt-16 md:mt-20"
        >
          <Card className="p-10 md:p-14">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-foreground mb-10 max-w-2xl">
              Why choose {siteConfig.company.name} for{" "}
              {service.title.toLowerCase()} in {area}?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-accent-gradient mb-3">
                  {siteConfig.company.yearsExperience}+
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Years of experience serving {area} and surrounding areas.
                </p>
              </div>
              <div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-accent-gradient mb-3">
                  {siteConfig.company.projectsCompleted}+
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Projects completed with exceptional results.
                </p>
              </div>
              <div>
                <div className="font-[family-name:var(--font-space-grotesk)] text-5xl font-bold text-accent-gradient mb-3">
                  100%
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Satisfaction guaranteed on every project we deliver.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
