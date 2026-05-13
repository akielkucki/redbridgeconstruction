import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin, Hammer, Target, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/components/index";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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
    title: `${caseStudy.h1} | ${siteConfig.company.name}`,
    description: caseStudy.metaDescription,
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

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="pt-32 pb-10 px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all projects
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <Badge variant="outline">{project.category}</Badge>
              <span className="inline-flex items-center gap-1.5 text-xs font-[family-name:var(--font-inter)] text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                {caseStudy.location}
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground">
              {caseStudy.h1}
            </h1>

            <p className="mt-6 font-[family-name:var(--font-inter)] text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
        </section>

        {/* Hero image */}
        <section className="px-6 lg:px-8 pb-16">
          <div className="max-w-5xl mx-auto">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
            {heroImage.caption && (
              <p className="mt-3 font-[family-name:var(--font-inter)] text-sm text-muted-foreground">
                {heroImage.caption}
              </p>
            )}
          </div>
        </section>

        {/* Project at-a-glance */}
        <section className="px-6 lg:px-8 pb-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent-soft)] text-[var(--accent)] mb-4">
                <Hammer className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
                Project Type
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-base text-foreground">
                {caseStudy.projectType}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent-soft)] text-[var(--accent)] mb-4">
                <Target className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
                Client Goal
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-base text-foreground leading-relaxed">
                {caseStudy.clientGoal}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent-soft)] text-[var(--accent)] mb-4">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-[0.18em] uppercase text-muted-foreground mb-2">
                Location
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-base text-foreground">
                {caseStudy.location}
              </p>
            </div>
          </div>
        </section>

        {/* Narrative */}
        <section className="px-6 lg:px-8 pb-20">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
              <span className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                The Story
              </span>
            </div>
            <div className="space-y-6 font-[family-name:var(--font-inter)] text-lg leading-relaxed text-foreground/90">
              {caseStudy.narrative.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges + Solution */}
        <section className="px-6 lg:px-8 pb-20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-foreground mb-5">
                Challenges
              </h2>
              <ul className="space-y-3">
                {caseStudy.challenges.map((c, i) => (
                  <li
                    key={i}
                    className="flex gap-3 font-[family-name:var(--font-inter)] text-base text-foreground/85 leading-relaxed"
                  >
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-surface p-8">
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold text-foreground mb-5">
                Our Solution & Materials
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-base text-foreground/85 leading-relaxed">
                {caseStudy.solution}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <section className="px-6 lg:px-8 pb-20">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
                <span className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
                  Project Gallery
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                {galleryImages.map((img, i) => (
                  <figure key={i} className="flex flex-col gap-3">
                    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-surface">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    {img.caption && (
                      <figcaption className="font-[family-name:var(--font-inter)] text-sm text-muted-foreground leading-relaxed">
                        {img.caption}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Results */}
        <section className="px-6 lg:px-8 pb-24">
          <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-surface p-8 md:p-10">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-foreground mb-6">
              Final Results
            </h2>
            <ul className="space-y-4">
              {caseStudy.results.map((r, i) => (
                <li
                  key={i}
                  className="flex gap-3 font-[family-name:var(--font-inter)] text-base md:text-lg text-foreground/90 leading-relaxed"
                >
                  <CheckCircle2
                    className="w-5 h-5 mt-1 text-[var(--accent)] flex-shrink-0"
                    strokeWidth={1.75}
                  />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-28 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planning a similar project?
            </h2>
            <p className="text-muted-foreground mb-8 font-[family-name:var(--font-inter)]">
              Tell us what you&apos;re thinking — we&apos;ll bring the same craftsmanship, safety, and reliability to your build.
            </p>
            <Link href="/#contact">
              <Button variant="default" size="lg">
                Start a conversation
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
