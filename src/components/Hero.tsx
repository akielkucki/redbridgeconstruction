import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

const META_ROWS = [
  { label: "Established", value: String(siteConfig.company.foundedYear) },
  {
    label: "Base",
    value: `${siteConfig.contact.address.city}, ${siteConfig.contact.address.state}`,
  },
  { label: "Range", value: `${siteConfig.contact.serviceArea} & New Hope` },
  { label: "Status", value: "Licensed & insured, PA" },
] as const;

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="shell pt-32 md:pt-44 pb-14 md:pb-20">
        <h1
          className="display text-ink animate-rise"
          style={{ fontSize: "clamp(3rem, 9.5vw, 8.25rem)" }}
        >
          Building
          <br />
          Bucks County
          <br />
          <span className="text-grey">
            since {siteConfig.company.foundedYear}.
          </span>
        </h1>

        <div
          aria-hidden
          className="mt-10 h-[2px] w-24 bg-red animate-draw"
          style={{ "--d": "500ms" } as React.CSSProperties}
        />

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div
            className="lg:col-span-6 animate-rise"
            style={{ "--d": "250ms" } as React.CSSProperties}
          >
            <p className="max-w-xl text-lg md:text-xl leading-relaxed text-grey">
              Remodels, custom homes, and historic restorations across New Hope
              and Bucks County. A small Kintnersville team has treated craft and
              schedule as the same promise for{" "}
              {siteConfig.company.yearsExperience} years.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className={buttonVariants({ variant: "accent", size: "lg" })}
              >
                Start your project
              </a>
              <a
                href="#portfolio"
                className={buttonVariants({ variant: "ghost", size: "lg" })}
              >
                See the work
                <ArrowDown />
              </a>
            </div>
          </div>

          {/* Title block: drawing-sheet meta */}
          <dl
            className="lg:col-span-4 lg:col-start-9 self-end animate-rise"
            style={{ "--d": "400ms" } as React.CSSProperties}
          >
            {META_ROWS.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-6 border-t border-line py-3"
              >
                <dt className="meta text-grey">{row.label}</dt>
                <dd className="meta text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div
        className="shell pb-24 md:pb-32 animate-rise"
        style={{ "--d": "550ms" } as React.CSSProperties}
      >
        <div className="relative aspect-[4/3] md:aspect-[21/9] overflow-hidden bg-surface-muted">
          <Image
            src="/portfolio/bob_house_2.jpg"
            alt="Timber framing of a custom home built by Red Bridge Construction in New Hope, PA"
            fill
            priority
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover"
          />
        </div>
        <p className="meta mt-3 text-grey">
          Custom home framing in New Hope, PA, delivered on a 14-month schedule
        </p>
      </div>
    </section>
  );
}
