"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  HomeIcon,
  Building2,
  Landmark,
  ArrowRight,
  ArrowLeft,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/components/index";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, LucideIcon> = {
  home: HomeIcon,
  business: Building2,
  architecture: Landmark,
  home_repair_service: HomeIcon,
};

const EASE = [0.19, 1, 0.22, 1] as const;

interface ServiceHeroProps {
  service: (typeof siteConfig.services)[number];
  area: string;
}

export function ServiceHero({ service, area }: ServiceHeroProps) {
  const Icon = iconMap[service.icon] ?? HomeIcon;
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[88vh] flex items-end overflow-hidden bg-foreground pt-32 pb-16 md:pb-24"
    >
      {/* Hero image with parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 -top-[10%] -bottom-[10%]"
      >
        {service.heroImage && (
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            sizes="100vw"
            priority
            className="object-cover"
          />
        )}
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/55 to-foreground"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_70%,rgba(184,70,46,0.18),transparent)]" />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="relative w-full max-w-7xl mx-auto px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-8"
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All services
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-end">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">
                {area}, {siteConfig.contact.address.state}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
              className="font-[family-name:var(--font-space-grotesk)] font-bold text-white leading-[0.98] tracking-tight"
              style={{ fontSize: "clamp(2.75rem, 7.5vw, 5.5rem)" }}
            >
              {service.title}
              <br />
              <span className="italic font-light text-white/55">in </span>
              <span className="text-accent-gradient">{area}.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: EASE }}
              className="mt-8 max-w-2xl font-[family-name:var(--font-inter)] text-lg text-white/75 leading-relaxed"
            >
              {service.longDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-3"
            >
              <a href="/#contact">
                <Button variant="accent" size="lg">
                  Get a free quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
              <a href="/#portfolio">
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white hover:bg-white/10"
                >
                  View our work
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Icon plate */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            className="hidden lg:flex flex-col items-end gap-4"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/15 flex items-center justify-center text-white">
              <Icon className="w-9 h-9" strokeWidth={1.5} />
            </div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-white/55 max-w-[220px] text-right leading-relaxed">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
