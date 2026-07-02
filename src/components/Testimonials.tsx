import { Reveal } from "@/components/ui/reveal";
import { Rule } from "@/components/ui/rule";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site.config";

export function Testimonials() {
  return (
    <section>
      <div className="shell">
        <Rule />
        <div className="pt-16 md:pt-24 pb-14 md:pb-20">
          <SectionHeading title="What clients say." />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-line border-t border-line pb-24 md:pb-32">
          {siteConfig.testimonials.map((t, index) => (
            <Reveal key={t.name} delay={index * 100}>
              <figure className="flex h-full flex-col border-b border-line md:border-b-0 py-10 md:py-12 md:px-10 md:first:pl-0 md:last:pr-0">
                <div
                  role="img"
                  aria-label={`${t.rating} out of 5 stars`}
                  className="font-sans text-sm tracking-[0.25em] text-red"
                >
                  {"★".repeat(t.rating)}
                </div>
                <blockquote className="mt-6 flex-1 text-lg leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="meta mt-8 text-grey">
                  {t.name}, {t.role}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
