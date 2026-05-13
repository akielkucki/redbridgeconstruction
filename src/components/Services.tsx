"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  Building2,
  Landmark,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/components/index";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type Service = (typeof siteConfig.services)[number];

function getServiceUrl(serviceSlug: string): string {
  return `/${serviceSlug}-${siteConfig.contact.serviceAreaSlug}`;
}

const iconMap: Record<string, LucideIcon> = {
  home: HomeIcon,
  business: Building2,
  architecture: Landmark,
  home_repair_service: HomeIcon,
};

const EASE = [0.19, 1, 0.22, 1] as const;

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = iconMap[service.icon] ?? HomeIcon;
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 180,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 180,
    damping: 22,
  });

  const spotlightX = useTransform(mouseX, (v) => `${(v + 0.5) * 100}%`);
  const spotlightY = useTransform(mouseY, (v) => `${(v + 0.5) * 100}%`);
  const spotlight = useTransform(
    [spotlightX, spotlightY],
    ([x, y]: string[]) =>
      `radial-gradient(380px circle at ${x} ${y}, rgba(184,70,46,0.12), transparent 70%)`,
  );

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setIsHovered(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.9,
        delay: index * 0.12,
        ease: EASE,
      }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <Link
        ref={cardRef}
        href={getServiceUrl(service.slug)}
        onMouseMove={handleMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleLeave}
        className="group relative block h-full overflow-hidden rounded-2xl bg-surface ring-1 ring-foreground/5 shadow-sm transition-shadow duration-500 hover:shadow-2xl"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative h-full"
        >
          {/* Hero image */}
          <div className="relative aspect-[16/11] overflow-hidden bg-surface-muted">
            {service.heroImage && (
              <motion.div
                animate={{ scale: isHovered ? 1.08 : 1 }}
                transition={{ duration: 1.2, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </motion.div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/65 via-foreground/10 to-transparent" />

            {/* Index */}
            <div className="absolute top-5 left-5 flex items-center gap-2 text-white/85">
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              <span className="font-[family-name:var(--font-space-grotesk)] text-xs font-medium tabular-nums tracking-[0.22em]">
                0{index + 1} / 0{siteConfig.services.length}
              </span>
            </div>

            {/* Icon plate */}
            <motion.div
              animate={{
                y: isHovered ? -4 : 0,
                backgroundColor: isHovered
                  ? "rgba(184,70,46,1)"
                  : "rgba(255,255,255,0.95)",
                color: isHovered ? "#ffffff" : "#14110d",
              }}
              transition={{ duration: 0.45, ease: EASE }}
              className="absolute top-5 right-5 w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-md"
            >
              <Icon className="w-5 h-5" strokeWidth={1.75} />
            </motion.div>

            {/* Title overlay on image */}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-[1.7rem] font-bold text-white leading-tight">
                {service.title}
              </h3>
            </div>
          </div>

          {/* Body */}
          <div className="relative p-7 md:p-8">
            <p className="font-[family-name:var(--font-inter)] text-[0.95rem] text-muted-foreground leading-relaxed mb-6">
              {service.description}
            </p>

            <ul className="space-y-2.5 mb-7 pb-7 border-b border-border">
              {service.features.slice(0, 3).map((f, i) => (
                <motion.li
                  key={f}
                  initial={false}
                  animate={{ x: isHovered ? 4 : 0 }}
                  transition={{
                    duration: 0.45,
                    ease: EASE,
                    delay: isHovered ? i * 0.05 : 0,
                  }}
                  className="flex items-start gap-2.5 text-sm text-foreground/85"
                >
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-[var(--accent)] flex-shrink-0" />
                  {f}
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center justify-between">
              <span className="font-[family-name:var(--font-inter)] text-sm font-semibold text-foreground group-hover:text-[var(--accent)] transition-colors duration-300">
                Explore service
              </span>
              <motion.div
                animate={{
                  x: isHovered ? 4 : 0,
                  y: isHovered ? -4 : 0,
                  backgroundColor: isHovered
                    ? "rgba(184,70,46,1)"
                    : "rgba(20,17,13,0.04)",
                  color: isHovered ? "#ffffff" : "#14110d",
                }}
                transition={{ duration: 0.4, ease: EASE }}
                className="w-9 h-9 rounded-full flex items-center justify-center"
              >
                <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
              </motion.div>
            </div>
          </div>

          {/* Spotlight overlay */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ background: spotlight }}
          />

          {/* Accent border that draws on hover */}
          <motion.span
            aria-hidden
            initial={false}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-[var(--accent)] via-[#d8674d] to-transparent"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function Services() {
  return (
    <section
      id="services"
      className="relative py-28 md:py-36 bg-background overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-border"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
          <SectionHeading
            eyebrow={`Serving ${siteConfig.contact.serviceArea}`}
            title={
              <>
                Three disciplines.
                <br />
                <span className="text-accent-gradient">One standard.</span>
              </>
            }
            description="From kitchen remodels to ground-up custom homes and historic restoration — every project gets the same uncompromising attention to detail."
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className={cn(
              "hidden lg:flex items-center gap-2 text-sm text-muted-foreground",
            )}
          >
            <span className="w-8 h-px bg-border" />
            Hover to explore each service
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
