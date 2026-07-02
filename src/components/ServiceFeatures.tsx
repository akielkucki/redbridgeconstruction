import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Rule } from "@/components/ui/rule";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site.config";

interface ServiceFeaturesProps {
  service: (typeof siteConfig.services)[number];
  area: string;
}

export function ServiceFeatures({ service, area }: ServiceFeaturesProps) {
  return (
    <section>
      <div className="shell">
        <Rule />
        <div className="pt-16 md:pt-24 pb-14 md:pb-20">
          <SectionHeading title="What’s included." />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-12 pb-16 md:pb-24">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-surface-muted">
              <Image
                src={service.accentImage}
                alt={`${service.title} detail by ${siteConfig.company.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:col-start-7 self-center">
            {service.features.map((feature, index) => (
              <Reveal key={feature} delay={index * 80}>
                <div className="border-t border-line py-6 last:border-b">
                  <p className="text-xl md:text-2xl font-medium tracking-tight text-ink">
                    {feature}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={350}>
              <p className="mt-8 max-w-md text-grey leading-relaxed">
                Every {service.title.toLowerCase()} project across {area} runs
                through the same team, the same standard, and a one-year
                workmanship warranty.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Stat row */}
        <Reveal className="pb-24 md:pb-32">
          <div className="grid grid-cols-3 gap-x-8">
            {[
              {
                value: `${siteConfig.company.yearsExperience}+`,
                label: `Years serving ${area}`,
              },
              {
                value: `${siteConfig.company.projectsCompleted}+`,
                label: "Projects completed",
              },
              { value: "100%", label: "Satisfaction guaranteed" },
            ].map((stat) => (
              <div key={stat.label} className="border-t border-line pt-5">
                <div className="display text-3xl md:text-5xl text-ink">
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
