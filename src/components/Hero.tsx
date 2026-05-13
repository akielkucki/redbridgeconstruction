"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/components/index";
import { ArrowRight, Star, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const staggerContainer = {
  initial: {},
  animate: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.19, 1, 0.22, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background pt-28 pb-20">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/8830259/pexels-photo-8830259.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.10]"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(184,70,46,0.05),transparent)]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* @ts-ignore */}
        <motion.div variants={fadeUp} className="mb-8">
          <Badge variant="soft">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            Est. {siteConfig.company.foundedYear} · {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
          </Badge>
        </motion.div>

        {/* @ts-ignore */}
        <motion.h1
          variants={fadeUp}
          className="font-[family-name:var(--font-space-grotesk)] font-bold text-foreground leading-[0.95] tracking-tight"
          style={{ fontSize: "clamp(2.75rem, 9vw, 6rem)" }}
        >
          <span className="block">Built with care.</span>
          <span className="block mt-2">
            <span className="italic font-light text-muted-foreground">Finished </span>
            <span className="text-accent-gradient">on time.</span>
          </span>
        </motion.h1>

        {/* @ts-ignore */}
        <motion.p
          variants={fadeUp}
          className="mt-8 font-[family-name:var(--font-inter)] text-muted-foreground leading-relaxed max-w-xl"
          style={{ fontSize: "clamp(1.05rem, 1.3vw, 1.2rem)" }}
        >
          Red Bridge Construction has been the trusted partner for homeowners
          across New Hope and Bucks County for {siteConfig.company.yearsExperience}+ years —
          delivering renovations, custom builds, and historic restorations with
          uncompromising craftsmanship.
        </motion.p>

        {/* @ts-ignore */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <a href="#contact">
            <Button variant="accent" size="lg">
              Start your project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#portfolio">
            <Button variant="outline" size="lg">
              View our work
            </Button>
          </a>
        </motion.div>

        {/* Social proof */}
        {/* @ts-ignore */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5 text-[var(--accent)]">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} fill="currentColor" />
              ))}
            </div>
            <span className="font-[family-name:var(--font-inter)] text-xs font-medium">
              Five-star rated
            </span>
          </div>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-foreground" />
            <span className="font-[family-name:var(--font-inter)] text-xs font-medium">
              Licensed & insured
            </span>
          </div>
          <div className="h-4 w-px bg-border hidden sm:block" />
          <p className="font-[family-name:var(--font-inter)] text-xs">
            <strong className="text-foreground font-semibold">
              {siteConfig.company.projectsCompleted}+
            </strong>{" "}
            projects delivered
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
