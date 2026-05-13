"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/components/index";
import { Marquee } from "@/components/ui/marquee";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

type Project = (typeof siteConfig.portfolio)[number];

export function ProjectCard({ project, isMainPage = false }: { project: Project, isMainPage?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group/card relative block ${isMainPage ? '' : 'w-[320px] md:w-[380px]'} aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-surface shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]`}
    >
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 320px, 380px"
          className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/card:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      <div className="absolute top-5 left-5">
        <Badge variant="outline" className="bg-white/90 rounded-4xl px-2 text-gray-500 backdrop-blur-sm">
          {project.category}
        </Badge>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl md:text-2xl font-bold text-white leading-tight">
          {project.title}
        </h3>
        <p className="font-[family-name:var(--font-inter)] text-sm text-white/75 line-clamp-2 max-w-sm">
          {project.description}
        </p>
        <div className="mt-3 inline-flex items-center gap-2 text-white font-[family-name:var(--font-inter)] text-xs font-semibold tracking-wider uppercase opacity-0 -translate-x-2 group-hover/card:opacity-100 group-hover/card:translate-x-0 transition-all duration-500">
          View Project
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}

export function Portfolio() {
  // Split portfolio evenly across 3 columns
  const projects = siteConfig.portfolio;
  const perRow = Math.ceil(projects.length / 3);
  const firstRow = projects.slice(0, perRow);
  const secondRow = projects.slice(perRow, perRow * 2);
  const thirdRow = projects.slice(perRow * 2);

  return (
    <section id="portfolio" className="relative py-28 md:py-36 bg-surface-muted overflow-hidden">
      {/* Top edge fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Projects we&apos;re
                <br />
                <span className="text-accent-gradient">proud to build.</span>
              </>
            }
            description="Six recent builds across Bucks County — bathrooms, kitchens, restorations, and ground-up homes. Hover to pause the marquee."
          />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View all projects
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Marquee columns — middle reversed for visual rhythm */}
      <div className="relative flex flex-row justify-center gap-6 h-[640px] md:h-[760px] [mask-image:linear-gradient(to_bottom,transparent,black_8%,black_92%,transparent)]">
        <Marquee pauseOnHover vertical className="[--duration:30s]">
          {firstRow.map((p) => (
            <ProjectCard key={p.title} project={p}  />
          ))}
        </Marquee>

        <Marquee pauseOnHover reverse vertical className="[--duration:36s] hidden md:flex">
          {secondRow.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </Marquee>

        <Marquee pauseOnHover vertical className="[--duration:42s] hidden lg:flex">
          {thirdRow.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </Marquee>
      </div>

      {/* Bottom edge fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
}
