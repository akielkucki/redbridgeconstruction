"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { siteConfig } from "@/components/index";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const EASE = [0.19, 1, 0.22, 1] as const;

interface ServiceFAQProps {
  service: (typeof siteConfig.services)[number];
  area: string;
}

export function ServiceFAQ({ service, area }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              {service.title} in {area},
              <br />
              <span className="text-accent-gradient">answered.</span>
            </>
          }
          description="Quick answers to the questions homeowners ask us most. Don't see yours? We're a phone call away."
          className="mb-14 md:mb-16"
        />

        <ul className="divide-y divide-border border-y border-border">
          {service.faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <li key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-start gap-6 py-7 text-left group"
                  aria-expanded={isOpen}
                >
                  <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium tabular-nums tracking-[0.22em] text-muted-foreground pt-1 min-w-[42px]">
                    0{index + 1}
                  </span>
                  <span
                    className={cn(
                      "flex-1 font-[family-name:var(--font-space-grotesk)] text-lg md:text-xl font-semibold leading-snug transition-colors duration-300",
                      isOpen
                        ? "text-foreground"
                        : "text-foreground/85 group-hover:text-foreground",
                    )}
                  >
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className={cn(
                      "mt-1 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300",
                      isOpen
                        ? "bg-[var(--accent)] text-white"
                        : "bg-surface-muted text-foreground group-hover:bg-foreground group-hover:text-background",
                    )}
                  >
                    <Plus className="w-4 h-4" strokeWidth={2.25} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pl-[66px] pr-14 pb-8 font-[family-name:var(--font-inter)] text-muted-foreground leading-relaxed max-w-2xl">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
