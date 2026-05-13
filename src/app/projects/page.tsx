"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/components/index";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { cn } from "@/lib/utils";
import {ProjectCard} from "@/components/Portfolio";

export default function ProjectsPage() {
  const categories = ["All", ...new Set(siteConfig.portfolio.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? siteConfig.portfolio
      : siteConfig.portfolio.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="pt-32 pb-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </motion.div>

            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 mb-5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                  Our Work
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-[family-name:var(--font-space-grotesk)] text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground"
              >
                All <span className="text-accent-gradient">projects.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-6 font-[family-name:var(--font-inter)] text-lg text-muted-foreground leading-relaxed max-w-xl"
              >
                A complete look at recent work — renovations, custom builds, and
                restorations across Bucks County.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2 mt-10"
            >
              {categories.map((category) => (
                <button
                  type="button"
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "px-4 py-2 rounded-full font-[family-name:var(--font-inter)] text-sm font-medium transition-all duration-200",
                    activeCategory === category
                      ? "bg-foreground text-background"
                      : "bg-surface border border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                  )}
                >
                  {category}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Grid */}
        <section className="pb-28 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="popLayout">
              <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((project, index) => (
                  <ProjectCard key={index} project={project} isMainPage={true} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-muted-foreground">No projects found in this category.</p>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="pb-28 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-foreground mb-4"
            >
              Have a project in mind?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-muted-foreground mb-8"
            >
              Tell us what you&apos;re thinking — we&apos;ll take it from there.
            </motion.p>
            <Link href="/#contact">
              <Button variant="default" size="lg">
                Start a conversation
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
