import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Rule } from "@/components/ui/rule";
import { SectionHeading } from "@/components/ui/section-heading";
import type { siteConfig } from "@/config/site.config";

interface ServiceFAQProps {
  service: (typeof siteConfig.services)[number];
  area: string;
}

export function ServiceFAQ({ service, area }: ServiceFAQProps) {
  return (
    <section>
      <div className="shell">
        <Rule />
        <div className="pt-16 md:pt-24 pb-14 md:pb-16">
          <SectionHeading
            title="Common questions."
            description={`What homeowners ask us most about ${service.title.toLowerCase()} in ${area}. Don't see yours? We're a phone call away.`}
          />
        </div>

        <Reveal className="pb-24 md:pb-32">
          <div className="max-w-4xl">
            {service.faqs.map((item, index) => (
              <details
                key={item.q}
                className="group border-t border-line last:border-b"
                name="faq"
              >
                <summary className="flex cursor-pointer items-baseline gap-6 py-6 list-none [&::-webkit-details-marker]:hidden">
                  <span className="meta text-grey min-w-8">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-lg md:text-xl font-medium tracking-tight text-ink">
                    {item.q}
                  </span>
                  <Plus
                    aria-hidden
                    className="h-5 w-5 shrink-0 self-center text-grey transition-transform duration-300 group-open:rotate-45 group-open:text-red"
                    strokeWidth={1.5}
                  />
                </summary>
                <p className="pb-8 pl-14 pr-11 max-w-2xl text-grey leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
