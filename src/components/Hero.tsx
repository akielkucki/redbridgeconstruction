"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/components/index";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

// Golden ratio
const PHI = 1.618;

// Stagger children orchestrator
const staggerContainer = {
    initial: {},
    animate: {
        transition: { staggerChildren: 0.14, delayChildren: 0.4 },
    },
};

const fadeUp = {
    initial: { opacity: 0, y: 32 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.19, 1, 0.22, 1] as const },
    },
};

export function Hero() {
    return (
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-white selection:bg-zinc-900/10 selection:text-zinc-900">

            {/* --- Background --- */}
            <div className="absolute inset-0 z-0">
                {/* Construction background image */}
                <Image
                    src="https://images.pexels.com/photos/8830259/pexels-photo-8830259.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
                    alt=""
                    fill
                    className="object-cover opacity-[0.09]"
                    sizes="100vw"
                    priority
                />
                {/* White wash overlay */}
                <div className="absolute inset-0 bg-white/60" />
                {/* Warm radial glow — positioned at golden ratio from top (38.2%) */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_38%,rgba(245,239,224,0.5),transparent)]" />
                {/* Secondary soft glow for depth */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_50%_45%,rgba(26,58,42,0.03),transparent)]" />
                {/* Faint accent line at golden split */}
                <div className="absolute left-1/2 -translate-x-1/2 top-[61.8%] w-[38.2%] h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
            </div>

            {/* --- Main Content --- */}
            <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center flex flex-col items-center"
                style={{
                    paddingTop: `${(100 / (PHI + 1)) / 2}vh`,
                    paddingBottom: `${((100 * PHI) / (PHI + 1) / PHI) / 2}vh`,
                }}
            >
                {/* --- Overline --- */}
                {/* @ts-ignore */}
                <motion.div variants={fadeUp} className="mb-10 flex items-center gap-4">
                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-zinc-300" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-400 font-[family-name:var(--font-inter)]">
                        Est. {siteConfig.company.foundedYear} &mdash; {siteConfig.contact.address.city}, {siteConfig.contact.address.state}
                    </span>
                    <div className="w-12 h-px bg-gradient-to-l from-transparent to-zinc-300" />
                </motion.div>

                {/* --- Headline --- */}
                {/* @ts-ignore */}
                <motion.h1
                    variants={fadeUp}
                    className="w-full font-[family-name:var(--font-space-grotesk)] font-bold text-zinc-900 leading-[1] tracking-tight"
                    style={{
                        fontSize: "clamp(2.5rem, 10vw, 5.5rem)",
                    }}
                >
                    <span className="block">Transforming Spaces</span>
                    <span className="block mt-1 md:mt-2">
                        <span className="italic font-light text-zinc-500">Into{" "}</span>

                        <span className="relative inline-block">
                            Masterpieces
                        </span>
                    </span>
                </motion.h1>

                {/* --- Decorative divider — width is 38.2% (1/φ) of container --- */}
                {/* @ts-ignore */}
                <motion.div
                    variants={fadeUp}
                    className="mx-auto my-10 md:my-12 flex items-center gap-4"
                    style={{ width: `${(100 / PHI).toFixed(1)}%` }}
                >
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent to-zinc-200" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-zinc-300" />
                    <div className="flex-1 h-px bg-gradient-to-l from-transparent to-zinc-200" />
                </motion.div>

                {/* --- Description --- */}
                {/* @ts-ignore */}
                <motion.p
                    variants={fadeUp}
                    className="font-[family-name:var(--font-inter)] text-zinc-500 leading-relaxed"
                    style={{
                        maxWidth: `${(100 / PHI).toFixed(1)}%`,
                        fontSize: "clamp(1.05rem, 1.3vw, 1.3rem)",
                    }}
                >
                    {siteConfig.company.description || "Premier residential construction specialists delivering high-end renovations with meticulous attention to detail."}
                </motion.p>

                {/* --- CTA Buttons --- */}
                {/* @ts-ignore */}
                <motion.div
                    variants={fadeUp}
                    className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center"
                    style={{ gap: `${PHI}rem` }}
                >
                    <a
                        href="#contact"
                        className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full bg-zinc-900 px-10 text-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-zinc-800 hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] hover:scale-[1.03]"
                    >
                        <span className="font-[family-name:var(--font-inter)] font-semibold tracking-wide text-sm">Start Your Project</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                    <a
                        href="#portfolio"
                        className="group flex h-14 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-zinc-200 bg-white px-10 text-zinc-900 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-zinc-50 hover:border-zinc-300 hover:scale-[1.03]"
                    >
                        <span className="font-[family-name:var(--font-inter)] font-semibold tracking-wide text-sm">View Our Work</span>
                    </a>
                </motion.div>

                {/* --- Social Proof --- */}
                {/* @ts-ignore */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 text-zinc-400"
                    style={{ marginTop: `${PHI * 2.5}rem` }}
                >
                    <div className="flex gap-0.5 text-amber-400">
                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={13} fill="currentColor" />)}
                    </div>
                    <div className="w-px h-4 bg-zinc-200 hidden sm:block" />
                    <p className="font-[family-name:var(--font-inter)] text-xs tracking-wide text-zinc-400">
                        <strong className="text-zinc-600 font-semibold">{siteConfig.company.projectsCompleted}+</strong> projects completed
                    </p>
                    <div className="w-px h-4 bg-zinc-200 hidden sm:block" />
                    <p className="font-[family-name:var(--font-inter)] text-xs tracking-wide text-zinc-400">
                        <strong className="text-zinc-600 font-semibold">{siteConfig.company.yearsExperience}</strong> years of excellence
                    </p>
                </motion.div>

            </motion.div>

            {/* --- Wave Transition --- */}
            <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto block"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
                        fill="#1a3a2a"
                    />
                </svg>
            </div>

        </section>
    );
}
