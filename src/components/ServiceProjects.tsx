"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/components/index";
import { ProjectCard } from "@/components/Portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

const EASE = [0.19, 1, 0.22, 1] as const;

interface ServiceProjectsProps {
  service: (typeof siteConfig.services)[number];
}

export function ServiceProjects({ service }: ServiceProjectsProps) {
  const slugs = service.relatedProjectSlugs ?? [];
  const projects = siteConfig.portfolio.filter((p) =>
    (slugs as readonly string[]).includes(p.slug),
  );

  if (projects.length === 0) return null;

  return (
    <section className="relative py-28 md:py-36 bg-surface-muted overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <SectionHeading
            eyebrow="Recent work"
            title={
              <>
                {service.title} projects
                <br />
                <span className="text-accent-gradient">we&apos;ve delivered.</span>
              </>
            }
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View all projects
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
            >
              <ProjectCard project={project} isMainPage={true} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
