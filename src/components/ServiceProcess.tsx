import { Reveal } from "@/components/ui/reveal";
import { Rule } from "@/components/ui/rule";
import { SectionHeading } from "@/components/ui/section-heading";
import type { siteConfig } from "@/config/site.config";

interface ServiceProcessProps {
  service: (typeof siteConfig.services)[number];
}

export function ServiceProcess({ service }: ServiceProcessProps) {
  return (
    <section>
      <div className="shell">
        <Rule />
        <div className="pt-16 md:pt-24 pb-14 md:pb-20">
          <SectionHeading
            title={
              <>
                From first call
                <br />
                to keys.
              </>
            }
            description="Five steps. One project lead. Written updates every week, so the next move is never a surprise."
          />
        </div>

        <ol className="pb-24 md:pb-32">
          {service.processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 60}>
              <li className="grid grid-cols-[3rem_1fr] md:grid-cols-12 items-baseline gap-x-8 gap-y-2 border-t border-line py-8 md:py-10 last:border-b">
                <span className="meta text-red md:col-span-1">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="display text-2xl md:text-3xl text-ink md:col-span-4">
                  {step.title}
                </h3>
                <p className="col-start-2 md:col-span-6 md:col-start-6 max-w-xl text-grey leading-relaxed">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
