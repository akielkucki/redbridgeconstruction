import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { buttonVariants } from "@/components/ui/button";
import { Rule } from "@/components/ui/rule";
import { siteConfig } from "@/config/site.config";

type Project = (typeof siteConfig.portfolio)[number];

function getProject(slug: string): Project | undefined {
  return siteConfig.portfolio.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return siteConfig.portfolio.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

  const { caseStudy } = project;
  return {
    title: caseStudy.h1,
    description: caseStudy.metaDescription,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: caseStudy.h1,
      description: caseStudy.metaDescription,
      type: "article",
      images: caseStudy.images.map((img) => ({ url: img.src, alt: img.alt })),
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { caseStudy } = project;
  const [heroImage, ...galleryImages] = caseStudy.images;

  const atAGlance = [
    { label: "Project type", value: caseStudy.projectType },
    { label: "Location", value: caseStudy.location },
    { label: "Category", value: project.category },
  ] as const;

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="shell pt-28 md:pt-40 pb-12 md:pb-16">
          <nav aria-label="Breadcrumb" className="meta text-grey animate-rise">
            <Link href="/projects" className="hover:text-ink transition-colors">
              Projects
            </Link>
            <span aria-hidden> / </span>
            <span className="text-ink">{project.title}</span>
          </nav>

          <h1
            className="display mt-8 max-w-5xl text-ink animate-rise"
            style={
              {
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
                "--d": "100ms",
              } as React.CSSProperties
            }
          >
            {caseStudy.h1}
          </h1>

          <p
            className="mt-8 max-w-2xl text-lg leading-relaxed text-grey animate-rise"
            style={{ "--d": "200ms" } as React.CSSProperties}
          >
            {project.description}
          </p>
        </section>

        {/* Hero image */}
        <section
          className="shell pb-16 md:pb-20 animate-rise"
          style={{ "--d": "300ms" } as React.CSSProperties}
        >
          <div aria-hidden className="h-[2px] w-24 bg-red mb-8" />
          <figure>
            <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden bg-surface-muted">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="(max-width: 1440px) 100vw, 1440px"
                className="object-cover"
              />
            </div>
            {heroImage.caption && (
              <figcaption className="meta mt-3 text-grey">
                {heroImage.caption}
              </figcaption>
            )}
          </figure>
        </section>

        {/* At a glance */}
        <section className="shell pb-16 md:pb-24">
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-8">
            {atAGlance.map((row) => (
              <div key={row.label} className="border-t border-line py-5">
                <dt className="meta text-grey">{row.label}</dt>
                <dd className="mt-2 text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Narrative */}
        <section className="shell pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8">
            <h2 className="display text-2xl md:text-3xl text-ink lg:col-span-4 mb-8 lg:mb-0">
              The story.
            </h2>
            <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg leading-relaxed text-ink/85">
              {caseStudy.narrative.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges + Solution */}
        <section className="shell pb-16 md:pb-24">
          <Rule />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 pt-12 md:pt-16">
            <div>
              <h2 className="display text-2xl md:text-3xl text-ink mb-8">
                Challenges.
              </h2>
              <ul>
                {caseStudy.challenges.map((c, i) => (
                  <li
                    key={c}
                    className="flex gap-6 border-t border-line py-5 text-ink/85 leading-relaxed"
                  >
                    <span className="meta text-red pt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="display text-2xl md:text-3xl text-ink mb-8">
                Solution &amp; materials.
              </h2>
              <p className="border-t border-line py-5 text-ink/85 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <section className="shell pb-16 md:pb-24">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {galleryImages.map((img) => (
                <figure key={img.src}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface-muted">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  {img.caption && (
                    <figcaption className="meta mt-3 text-grey">
                      {img.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </section>
        )}

        {/* Results */}
        <section className="shell pb-24 md:pb-32">
          <Rule />
          <div className="pt-12 md:pt-16 max-w-3xl">
            <h2 className="display text-2xl md:text-3xl text-ink mb-8">
              Final results.
            </h2>
            <ul>
              {caseStudy.results.map((r, i) => (
                <li
                  key={r}
                  className="flex gap-6 border-t border-line py-5 text-lg text-ink/90 leading-relaxed last:border-b"
                >
                  <span className="meta text-red pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Funnel hand-off */}
        <section className="shell pb-24 md:pb-32">
          <Rule />
          <div className="pt-16 md:pt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <h2 className="display text-3xl md:text-5xl text-ink max-w-xl">
                Planning a similar project?
              </h2>
              <p className="mt-5 max-w-md text-grey leading-relaxed">
                Tell us what you’re thinking. We’ll bring the same craft and
                reliability to your New Hope or Bucks County build.
              </p>
            </div>
            <Link
              href="/#contact"
              className={buttonVariants({ variant: "accent", size: "lg" })}
            >
              Start a conversation
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
