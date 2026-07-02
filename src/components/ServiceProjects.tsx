import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/Portfolio";
import { Reveal } from "@/components/ui/reveal";
import { Rule } from "@/components/ui/rule";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site.config";

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
    <section>
      <div className="shell">
        <Rule />
        <div className="pt-16 md:pt-24 pb-14 md:pb-20 flex flex-wrap items-end justify-between gap-8">
          <SectionHeading title="Delivered work." />
          <Reveal delay={150}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 meta text-ink hover:text-red transition-colors"
            >
              All projects
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 pb-24 md:pb-32">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 80}>
              <ProjectCard
                project={project}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
