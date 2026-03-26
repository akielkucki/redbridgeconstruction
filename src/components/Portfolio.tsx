"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { siteConfig } from "@/components/index";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// Bento grid span config per index position
const gridSpans = [
  "md:col-span-8 md:row-span-2",   // 0 — large featured
  "md:col-span-4 md:row-span-1",   // 1 — small right top
  "md:col-span-4 md:row-span-1",   // 2 — small right bottom
  "md:col-span-4 md:row-span-2",   // 3 — tall left
  "md:col-span-4 md:row-span-2",   // 4 — tall center
  "md:col-span-4 md:row-span-2",   // 5 — tall right
];

export function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const categories = [
    "All",
    ...new Set(siteConfig.portfolio.map((p) => p.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? siteConfig.portfolio
      : siteConfig.portfolio.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="relative py-32 bg-background overflow-hidden" ref={ref}>
      {/* Background image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="https://images.pexels.com/photos/30558333/pexels-photo-30558333.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt=""
          fill
          className="object-cover opacity-[0.07]"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-foreground to-transparent" />
              <span className="font-[family-name:var(--font-inter)] text-sm font-medium tracking-[0.2em] text-muted uppercase">
                Portfolio
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
            >
              Featured
              <br />
              <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>

          {/* Category filter pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full font-[family-name:var(--font-inter)] text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-foreground text-background shadow-lg shadow-foreground/10"
                    : "bg-surface/50 text-muted border border-border/50 hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:auto-rows-[220px] gap-4">
          {filteredProjects.map((project, index) => {
            const spanClass =
              filteredProjects.length === siteConfig.portfolio.length
                ? gridSpans[index] || "md:col-span-4 md:row-span-2"
                : "md:col-span-4 md:row-span-2";

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.8,
                  delay: 0.15 + index * 0.08,
                  ease: [0.19, 1, 0.22, 1],
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${spanClass} min-h-[300px] md:min-h-0`}
              >
                {/* Image */}
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={`object-cover transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                      hoveredIndex === index
                        ? "scale-110 brightness-[0.6]"
                        : "scale-100 brightness-[0.75]"
                    }`}
                  />
                )}

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-surface/30 to-transparent transition-opacity duration-500 ${
                    hoveredIndex === index ? "opacity-60" : "opacity-0"
                  }`}
                />

                {/* Corner geometric accent */}
                <div
                  className={`absolute top-0 right-0 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${
                    hoveredIndex === index
                      ? "w-24 h-24"
                      : "w-16 h-16"
                  }`}
                >
                  <div className="absolute top-4 right-4 w-full h-full border-t border-r border-foreground/20 rounded-tr-2xl" />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Category tag */}
                  <motion.div
                    animate={{ y: hoveredIndex === index ? -6 : 0 }}
                    transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    className="mb-3"
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-foreground/10 backdrop-blur-sm border border-foreground/10 font-[family-name:var(--font-inter)] text-[11px] font-medium tracking-[0.15em] text-foreground/80 uppercase">
                      {project.category}
                    </span>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    animate={{ y: hoveredIndex === index ? -6 : 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.03,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-bold text-foreground mb-2 leading-tight"
                  >
                    {project.title}
                  </motion.h3>

                  {/* Description — revealed on hover */}
                  <motion.p
                    initial={false}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 16,
                      height: hoveredIndex === index ? "auto" : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.06,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="font-[family-name:var(--font-inter)] text-sm text-muted leading-relaxed overflow-hidden"
                  >
                    {project.description}
                  </motion.p>

                  {/* View button */}
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      x: hoveredIndex === index ? 0 : -16,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.1,
                      ease: [0.19, 1, 0.22, 1],
                    }}
                    className="mt-4 flex items-center gap-2"
                  >
                    <span className="font-[family-name:var(--font-inter)] text-sm font-semibold text-foreground tracking-wide">
                      View Project
                    </span>
                    <div className="w-7 h-7 rounded-full bg-foreground/10 backdrop-blur-sm flex items-center justify-center border border-foreground/10">
                      <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
                    </div>
                  </motion.div>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-foreground/0 via-foreground/40 to-foreground/0"
                  initial={false}
                  animate={{
                    scaleX: hoveredIndex === index ? 1 : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border/50 bg-surface/30 backdrop-blur-sm text-foreground font-[family-name:var(--font-inter)] font-semibold text-sm tracking-wide uppercase transition-all duration-500 hover:bg-foreground hover:text-background hover:border-foreground hover:shadow-lg hover:shadow-foreground/10"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
