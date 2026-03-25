"use client";

import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, type ReactNode, useState, useEffect, useCallback, type MouseEvent } from "react";
import Link from "next/link";
import { HomeIcon, Building2, Landmark, ArrowRight } from "lucide-react";
import { siteConfig } from "@/components/index";

function getServiceUrl(serviceSlug: string): string {
  const city = siteConfig.contact.address.city.toLowerCase().replace(/\s+/g, "-");
  return `/${serviceSlug}-${city}`;
}

const iconMap: Record<string, ReactNode> = {
  home: <HomeIcon className="w-8 h-8" strokeWidth={1.5} />,
  business: <Building2 className="w-8 h-8" strokeWidth={1.5} />,
  architecture: <Landmark className="w-8 h-8" strokeWidth={1.5} />,
};

/* ─── Interactive Card with Mouse Tracking ─── */

interface InteractiveCardProps {
  service: { title: string; slug: string; icon: string; description: string };
  index: number;
  isInView: boolean;
}

function InteractiveCard({ service, index, isInView }: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse position relative to card center (normalized -0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Sprung values for smooth follow
  const springConfig = { stiffness: 200, damping: 20, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // 3D tilt rotation (subtle, max ~6deg)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  // Glow position (percentage for radial gradient)
  const glowX = useTransform(smoothX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(smoothY, [-0.5, 0.5], [0, 100]);

  // Border highlight angle
  const borderX = useTransform(smoothX, [-0.5, 0.5], [0, 100]);
  const borderY = useTransform(smoothY, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = useCallback(
      (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
      },
      [mouseX, mouseY]
  );

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
      <Link key={service.title} href={getServiceUrl(service.slug)} className="block h-full [perspective:800px]">
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
            style={{
              rotateX: isHovered ? rotateX : 0,
              rotateY: isHovered ? rotateY : 0,
              transformStyle: "preserve-3d",
            }}
            className="group relative flex flex-col h-full p-8 md:p-10 bg-surface/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transition-shadow duration-500 hover:shadow-2xl will-change-transform"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
          {/* ── Cursor-tracking radial glow ── */}
          <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: useTransform(
                    [glowX, glowY],
                    ([x, y]) =>
                        `radial-gradient(600px circle at ${x}% ${y}%, hsl(var(--foreground) / 0.06), transparent 60%)`
                ),
              }}
          />

          {/* ── Cursor-tracking border highlight ── */}
          <motion.div
              className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: useTransform(
                    [borderX, borderY],
                    ([x, y]) =>
                        `radial-gradient(400px circle at ${x}% ${y}%, hsl(var(--foreground) / 0.15), transparent 60%)`
                ),
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
                padding: "1px",
              }}
          />

            {/* ── Floating icon with parallax shift ── */}
            <motion.div
                className="text-muted mb-8 transition-colors duration-500 group-hover:text-foreground origin-left drop-shadow-sm drop-shadow-black"
                animate={{
                    scale: isHovered ? 1.1 : 1,
                }}
                style={{
                    x: useTransform(smoothX, [-0.5, 0.5], [-8, 8]),
                    y: useTransform(smoothY, [-0.5, 0.5], [-6, 6]),
                }}
            >
                {iconMap[service.icon]}
            </motion.div>

          {/* ── Content ── */}
          <div className="flex-grow" style={{ transform: "translateZ(20px)" }}>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-foreground mb-4">
              {service.title}
            </h3>
            <p className="font-[family-name:var(--font-inter)] text-muted-foreground leading-relaxed text-sm md:text-base">
              {service.description}
            </p>
          </div>

          {/* ── Animated footer ── */}
          <div className="mt-10 flex items-center gap-3 text-foreground/70 group-hover:text-foreground transition-colors duration-300">
          <span className="font-[family-name:var(--font-inter)] text-sm font-semibold tracking-wide tabular-nums">
            0{index + 1}
          </span>

            <div className="overflow-hidden">
              {"Click to Explore".split("").map((char, i) => (
                  <ScrambledLetter key={i} char={char} isHovered={isHovered} index={i} />
              ))}
            </div>

            <motion.div
                animate={isHovered ? { x: 0, opacity: 1 } : { x: -16, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </div>

          {/* ── Bottom accent line that scales on hover ── */}
          <motion.div
              className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-foreground/40 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </Link>
  );
}

/* ─── Services Section ─── */

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
      <section id="services" className="relative py-32 bg-background overflow-hidden" ref={ref}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Section header */}
          <div className="max-w-2xl mb-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-foreground to-transparent" />
              <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-[0.2em] text-muted uppercase">
              Our Expertise
            </span>
            </motion.div>

            <motion.h2
                initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
                animate={isInView ? { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" } : {}}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
            >
              <span className="text-foreground">Services</span>
            </motion.h2>
          </div>

          {/* Interactive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {siteConfig.services.map((service, index) => (
                <InteractiveCard key={service.title} service={service} index={index} isInView={isInView} />
            ))}
          </div>
        </div>
      </section>
  );
}

/* ─── Scrambled Letter Effect ─── */

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

interface ScrambledLetterProps {
  char: string;
  isHovered: boolean;
  index: number;
}

function ScrambledLetter({ char, isHovered, index }: ScrambledLetterProps) {
  const [displayChar, setDisplayChar] = useState(char);

  useEffect(() => {
    if (char === " " || !isHovered) {
      setDisplayChar(char);
      return;
    }

    let iterations = 0;
    const maxIterations = 8;

    const delayTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (iterations >= maxIterations) {
          clearInterval(interval);
          setDisplayChar(char);
        } else {
          setDisplayChar(ALPHABET[Math.floor(Math.random() * ALPHABET.length)]);
          iterations++;
        }
      }, 25);

      return () => clearInterval(interval);
    }, index * 40);

    return () => {
      clearTimeout(delayTimeout);
      setDisplayChar(char);
    };
  }, [isHovered, char, index]);

  if (char === " ") return <span>&nbsp;</span>;

  return (
      <motion.span
          initial={{ opacity: 0 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
          transition={{ duration: 0.15, delay: index * 0.03 }}
          className="inline-block"
      >
        {displayChar}
      </motion.span>
  );
}