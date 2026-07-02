import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Rule } from "@/components/ui/rule";
import { siteConfig } from "@/config/site.config";

const STATS = [
  {
    value: `${siteConfig.company.yearsExperience}+`,
    label: "Years in business",
  },
  {
    value: `${siteConfig.company.projectsCompleted}+`,
    label: "Projects delivered",
  },
  {
    value: String(siteConfig.company.foundedYear),
    label: "Founded in Kintnersville",
  },
  { value: "1 yr", label: "Workmanship warranty" },
] as const;

export function About() {
  return (
    <section id="about" className="scroll-mt-20">
      <div className="shell">
        <Rule />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 pt-16 md:pt-24 pb-16 md:pb-24">
          <Reveal className="lg:col-span-7">
            <h2 className="display text-3xl md:text-4xl lg:text-[2.75rem] text-ink max-w-2xl">
              Rob Kielkucki founded Red Bridge Construction in{" "}
              {siteConfig.company.foundedYear} with one mission: build for New
              Hope and Bucks County at a standard worth signing his name to.
            </h2>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-grey">
              {siteConfig.company.yearsExperience} years later, the same small
              team of designers, architects, and craftsmen carries every project
              with the same care. That holds true whether it is a bathroom tile
              job in New Hope or a custom estate in Bucks County.
            </p>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted">
              <Image
                src="/ctabackground.jpg"
                alt="Marble-topped vanity from a Red Bridge Construction bathroom remodel"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        {/* Stat table: ruled, tabular, no counters */}
        <Reveal className="pb-24 md:pb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="border-t border-line pt-5 pb-2">
                <div className="display text-4xl md:text-5xl text-ink">
                  {stat.value}
                </div>
                <div className="meta mt-3 text-grey">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
