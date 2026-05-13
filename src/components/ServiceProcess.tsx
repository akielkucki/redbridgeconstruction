"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { siteConfig } from "@/components/index";
import { SectionHeading } from "@/components/ui/section-heading";

const EASE = [0.19, 1, 0.22, 1] as const;

interface ServiceProcessProps {
  service: (typeof siteConfig.services)[number];
}

export function ServiceProcess({ service }: ServiceProcessProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 25%"],
  });
  const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A clear path from
              <br />
              <span className="text-accent-gradient">first call to keys.</span>
            </>
          }
          description="Five steps. One project lead. Written updates every week — so the next move is never a surprise."
          className="mb-16 md:mb-20"
        />

        <div ref={containerRef} className="relative max-w-4xl mx-auto">
          {/* Vertical rail */}
          <div className="absolute left-[18px] md:left-1/2 top-2 bottom-2 w-[2px] -translate-x-1/2 bg-border" />
          <motion.div
            style={{ height: railHeight }}
            className="absolute left-[18px] md:left-1/2 top-2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[var(--accent)] via-[#d8674d] to-transparent"
          />

          <ol className="space-y-12 md:space-y-16">
            {service.processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.08,
                    ease: EASE,
                  }}
                  className="relative grid md:grid-cols-2 items-start gap-y-3 md:gap-x-12"
                >
                  {/* Node */}
                  <span
                    aria-hidden
                    className="absolute left-[18px] md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-background"
                  />

                  <div
                    className={
                      isEven
                        ? "pl-12 md:pl-0 md:pr-10 md:text-right"
                        : "pl-12 md:pl-0 md:col-start-2 md:pl-10"
                    }
                  >
                    <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium tracking-[0.22em] text-muted-foreground tabular-nums mb-2">
                      STEP {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-foreground leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-3 font-[family-name:var(--font-inter)] text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Empty cell to balance grid on alternating rows */}
                  <div className="hidden md:block" />
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
