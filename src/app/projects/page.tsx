"use client";

import Link from "next/link";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { ProjectCard } from "@/components/Portfolio";
import { buttonVariants } from "@/components/ui/button";
import { Rule } from "@/components/ui/rule";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const categories = [
    "All",
    ...new Set(siteConfig.portfolio.map((p) => p.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? siteConfig.portfolio
      : siteConfig.portfolio.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="shell pt-28 md:pt-40 pb-12 md:pb-16">
          <nav aria-label="Breadcrumb" className="meta text-grey animate-rise">
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <span aria-hidden> / </span>
            <span className="text-ink">Projects</span>
          </nav>

          <h1
            className="display mt-8 text-ink animate-rise"
            style={
              {
                fontSize: "clamp(3rem, 8.5vw, 7rem)",
                "--d": "100ms",
              } as React.CSSProperties
            }
          >
            All projects.
          </h1>

          <p
            className="mt-8 max-w-xl text-lg leading-relaxed text-grey animate-rise"
            style={{ "--d": "200ms" } as React.CSSProperties}
          >
            A complete look at recent renovations, custom builds, and
            restorations across New Hope, Doylestown, and Bucks County.
          </p>

          {/* Category filter */}
          <div
            className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5 animate-rise"
            style={{ "--d": "300ms" } as React.CSSProperties}
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={cn(
                  "meta transition-colors duration-200",
                  activeCategory === category
                    ? "text-red"
                    : "text-grey hover:text-ink",
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section className="shell pb-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filtered.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-grey">
              No projects in this category yet.
            </p>
          )}
        </section>

        {/* Funnel hand-off */}
        <section className="shell pb-24 md:pb-32">
          <Rule />
          <div className="pt-16 md:pt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h2 className="display text-3xl md:text-5xl text-ink max-w-xl">
              Have a project in mind?
            </h2>
            <Link
              href="/#contact"
              className={buttonVariants({ variant: "accent", size: "lg" })}
            >
              Start a conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
