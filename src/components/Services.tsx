import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { Rule } from "@/components/ui/rule";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/config/site.config";

function getServiceUrl(serviceSlug: string): string {
  return `/${serviceSlug}-${siteConfig.contact.serviceAreaSlug}`;
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-20">
      <div className="shell">
        <Rule />
        <div className="pt-16 md:pt-24 pb-14 md:pb-20">
          <SectionHeading
            title={
              <>
                Three disciplines.
                <br />
                One standard.
              </>
            }
            description="From kitchen remodels to ground-up custom homes and historic restoration across Bucks County, every project gets the same attention to detail."
          />
        </div>

        <div className="pb-24 md:pb-32">
          {siteConfig.services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 80}>
              <Link
                href={getServiceUrl(service.slug)}
                className="group grid grid-cols-1 md:grid-cols-12 items-center gap-x-8 gap-y-6 border-t border-line py-10 md:py-12 last:border-b"
              >
                <div className="md:col-span-4">
                  <h3 className="display text-3xl md:text-4xl text-ink transition-colors duration-300 group-hover:text-red">
                    {service.title}
                  </h3>
                </div>

                <div className="md:col-span-4">
                  <p className="text-grey leading-relaxed">
                    {service.description}
                  </p>
                  <p className="meta mt-4 text-grey/80">
                    {service.features.slice(0, 3).join("  ·  ")}
                  </p>
                </div>

                <div className="md:col-span-3">
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
                    <Image
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                </div>

                <div className="hidden md:flex md:col-span-1 justify-end">
                  <ArrowUpRight
                    className="h-6 w-6 text-grey transition-all duration-300 group-hover:text-red group-hover:translate-x-1 group-hover:-translate-y-1"
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
