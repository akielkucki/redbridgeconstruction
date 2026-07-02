import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Rule } from "@/components/ui/rule";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

type Project = (typeof siteConfig.portfolio)[number];

export function ProjectCard({
  project,
  className,
  sizes = "(max-width: 768px) 100vw, 50vw",

}: {
  project: Project;
  className?: string;
  sizes?: string;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group block", className)}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
        <Image
          src={project.image}
          alt={project.caseStudy.images[0]?.alt ?? project.title}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-4 border-t border-line pt-3 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <h3 className="text-base md:text-lg font-medium tracking-tight text-ink transition-colors duration-300 group-hover:text-red">
          {project.title}
        </h3>
        <p className="meta text-grey">
          {project.category}, {project.caseStudy.location.split(",")[0]}
        </p>
      </div>
    </Link>
  );
}

/* Asymmetric editorial grid: wide/narrow pairs, then an even row */
const SPANS = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-6",
  "md:col-span-6",
];

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20">
      <div className="shell">
        <Rule />
        <div className="pt-16 md:pt-24 pb-14 md:pb-20 flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            title="Selected work."
            description="Recent builds across New Hope, Doylestown, and Bucks County, including bathrooms, kitchens, restorations, and ground-up homes."
          />
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-14 pb-24 md:pb-32">
          {siteConfig.portfolio.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={(index % 2) * 100}
              className={SPANS[index % SPANS.length]}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
