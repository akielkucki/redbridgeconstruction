"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

const META_ROWS = [
  { label: "Established", value: String(siteConfig.company.foundedYear) },
  {
    label: "Base",
    value: `${siteConfig.contact.address.city}, ${siteConfig.contact.address.state}`,
  },
  { label: "Range", value: `${siteConfig.contact.serviceArea} & New Hope` },
  { label: "Status", value: "Licensed & insured, PA" },
] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 600], ["0%", "8%"]);
  const y = reduce ? "0%" : parallax;

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink"
    >
      {/* Full-bleed background photo with a subtle parallax drift */}
      <motion.div
        aria-hidden
        style={{ y }}
        className="absolute inset-x-0 -inset-y-[16%]"
      >
        <Image
          src="/portfolio/shed_remodel.jpg"
          alt="A detached garage built by Red Bridge Construction in Bucks County, PA, lit at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Readability scrims: darken the lower-left where the copy sits */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent"
      />

      <div className="shell relative pt-36 md:pt-48 pb-14 md:pb-20">
        <h1
          className="display text-paper animate-rise"
          style={{ fontSize: "clamp(3rem, 9.5vw, 8.25rem)" }}
        >
          Building
          <br />
          Bucks County
          <br />
          <span className="text-paper/55">
            since {siteConfig.company.foundedYear}.
          </span>
        </h1>

        <div
          aria-hidden
          className="mt-10 h-[2px] w-24 bg-red animate-draw"
          style={{ "--d": "500ms" } as CSSProperties}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div
            className="lg:col-span-6 animate-rise"
            style={{ "--d": "250ms" } as CSSProperties}
          >
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-paper/80">
              Remodels, custom homes, and historic restorations across New Hope
              and Bucks County. A small Kintnersville team has treated craft and
              schedule as the same promise for{" "}
              {siteConfig.company.yearsExperience} years.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className={buttonVariants({ variant: "accent", size: "lg" })}
              >
                Start your project
              </a>
              <a
                href="#portfolio"
                className={buttonVariants({
                  variant: "outline-dark",
                  size: "lg",
                })}
              >
                See the work
                <ArrowDown />
              </a>
            </div>
          </div>

          {/* Title block: drawing-sheet meta */}
          <dl
            className="lg:col-span-4 lg:col-start-9 self-end animate-rise"
            style={{ "--d": "400ms" } as CSSProperties}
          >
            {META_ROWS.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-6 border-t border-white/15 py-3"
              >
                <dt className="meta text-paper/50">{row.label}</dt>
                <dd className="meta text-paper">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
