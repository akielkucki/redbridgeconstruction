import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/components/index";
import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 pt-32 pb-20">
        <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_40%,rgba(184,70,46,0.05),transparent)] pointer-events-none" />

        <div className="relative max-w-xl text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              Page not found
            </span>
          </div>

          <h1
            className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[0.95] tracking-tight text-foreground"
            style={{ fontSize: "clamp(4rem, 14vw, 8rem)" }}
          >
            4<span className="text-accent-gradient">0</span>4
          </h1>

          <p className="mt-6 font-[family-name:var(--font-inter)] text-lg text-muted-foreground leading-relaxed">
            We couldn&apos;t find that page. It may have moved, or the link may
            be out of date. Let&apos;s get you back on track.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/">
              <Button variant="accent" size="lg">
                <ArrowLeft className="w-4 h-4" />
                Back to home
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View our work
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Or call us at{" "}
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="font-semibold text-foreground hover:text-[var(--accent)] transition-colors"
            >
              {siteConfig.contact.phone}
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
