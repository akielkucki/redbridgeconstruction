"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Phone, ShieldCheck, Star } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { siteConfig } from "@/components/index";
import { Button } from "@/components/ui/button";

const ease = [0.19, 1, 0.22, 1] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { company, contact, cta } = siteConfig;

  // Parallax: the background photo drifts slower than the page as it scrolls away.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen flex flex-col items-start justify-end overflow-hidden bg-background pt-28 pb-20"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 will-change-transform"
      >
        <div className="absolute inset-0 scale-[1.3]">
          <Image
            src="/portfolio/shed_remodel.jpg"
            alt="Shed remodel by Red Bridge Construction"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            onLoad={() => setLoaded(true)}
          />
        </div>
        {!loaded && <div className="absolute inset-0 bg-foreground" />}
      </motion.div>

      {/* Dark scrims — darken the photo so the bright bottom-left text pops */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/55 to-foreground/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/35 to-transparent" />

      {/* Bottom-left content */}
      <div className="relative m-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="flex items-center gap-2.5 mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          <span className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.18em] text-white/75 uppercase">
            New Hope &amp; {contact.serviceArea} · Est. {company.foundedYear}
          </span>
        </motion.div>

        {/* Headline — accent panel wipes away to reveal each line */}
        <h1
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-white leading-[0.95] tracking-tight"
          style={{
            fontSize: "clamp(2.75rem, 9vw, 6rem)",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          <span className="block relative w-fit after:absolute after:inset-0 after:bg-accent after:animate-wipe-left">
            Built with care.
          </span>
          <span className="block relative mt-2 w-fit after:absolute after:inset-0 after:bg-accent after:animate-wipe-right after:[animation-delay:0.18s]">
            <span className="italic font-light text-white/70">Finished </span>
            <span className="text-accent-gradient">on time.</span>
          </span>
        </h1>

        {/* Value proposition — what we do, for whom, why us */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.5 }}
          className="font-[family-name:var(--font-inter)] text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mt-6"
        >
          Custom homes, remodels, and historic restorations across{" "}
          {contact.serviceArea} — {company.yearsExperience} years of licensed
          craftsmanship, delivered on schedule and inspection-ready.
        </motion.p>

        {/* Calls to action */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.62 }}
          className="flex flex-col sm:flex-row gap-3 mt-8"
        >
          <a href={cta.buttonLink}>
            <Button variant="accent" size="lg" className="w-full sm:w-auto">
              {cta.buttonText}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Button>
          </a>
          <a href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/30 bg-transparent text-white hover:border-white/50 hover:bg-white/10"
            >
              <Phone className="w-4 h-4" />
              {contact.phone}
            </Button>
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.74 }}
          className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-8 font-[family-name:var(--font-inter)] text-sm text-white/70"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5 text-[var(--accent)]">
              {["s1", "s2", "s3", "s4", "s5"].map((id) => (
                <Star key={id} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="font-semibold text-white">5.0</span>
          </div>

          <span className="hidden sm:block w-px h-4 bg-white/25" />

          <span>
            <span className="font-semibold text-white">
              {company.projectsCompleted}+
            </span>{" "}
            projects
          </span>

          <span className="hidden sm:block w-px h-4 bg-white/25" />

          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[var(--accent)]" />
            Licensed &amp; Insured
          </span>
        </motion.div>
      </div>
    </section>
  );
}
