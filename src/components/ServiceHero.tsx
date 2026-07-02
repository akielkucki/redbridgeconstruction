import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

interface ServiceHeroProps {
  service: (typeof siteConfig.services)[number];
  area: string;
}

export function ServiceHero({ service, area }: ServiceHeroProps) {
  return (
    <section>
      <div className="shell pt-28 md:pt-40 pb-12 md:pb-16">
        <nav aria-label="Breadcrumb" className="meta text-grey animate-rise">
          <Link href="/#services" className="hover:text-ink transition-colors">
            Services
          </Link>
          <span aria-hidden> / </span>
          <span className="text-ink">{service.title}</span>
        </nav>

        <h1
          className="display mt-8 text-ink animate-rise"
          style={
            {
              fontSize: "clamp(2.75rem, 7.5vw, 6.5rem)",
              "--d": "100ms",
            } as React.CSSProperties
          }
        >
          {service.title}
          <br />
          <span className="text-grey">
            in {area}, {siteConfig.contact.address.state}.
          </span>
        </h1>

        <div
          className="mt-10 grid gap-10 lg:grid-cols-12 animate-rise"
          style={{ "--d": "250ms" } as React.CSSProperties}
        >
          <p className="lg:col-span-6 max-w-2xl text-lg leading-relaxed text-grey">
            {service.longDescription}
          </p>
          <div className="lg:col-span-4 lg:col-start-9 flex flex-wrap items-start gap-4 lg:justify-end">
            <a
              href="#contact"
              className={buttonVariants({ variant: "accent", size: "lg" })}
            >
              Start your project
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className="shell pb-20 md:pb-28 animate-rise"
        style={{ "--d": "400ms" } as React.CSSProperties}
      >
        <div
          aria-hidden
          className="h-[2px] w-24 bg-red mb-8 animate-draw"
          style={{ "--d": "550ms" } as React.CSSProperties}
        />
        <div className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-surface-muted">
          <Image
            src={service.heroImage}
            alt={`${service.title} by ${siteConfig.company.name} in ${area}, PA`}
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover"
          />
        </div>
        <p className="meta mt-3 text-grey">{service.tagline}</p>
      </div>
    </section>
  );
}
