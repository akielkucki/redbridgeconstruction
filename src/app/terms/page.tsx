import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/components/index";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms that govern your use of the ${siteConfig.company.fullName} website.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-32 pb-24 px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated {new Date().getFullYear()}
          </p>

          <div className="space-y-8 font-[family-name:var(--font-inter)] text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground mb-3">
                Acceptance of terms
              </h2>
              <p>
                By accessing and using this website, you agree to these terms.
                If you do not agree, please do not use the site.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground mb-3">
                Use of content
              </h2>
              <p>
                All content on this site — including text, images, project case
                studies, and branding — is the property of{" "}
                {siteConfig.company.fullName} and may not be reproduced without
                permission.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground mb-3">
                Estimates &amp; project information
              </h2>
              <p>
                Information on this website is for general informational
                purposes only and does not constitute a binding quote. Project
                scope, pricing, and timelines are confirmed in a written
                proposal and signed agreement.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground mb-3">
                Contact
              </h2>
              <p>
                Questions about these terms? Reach us at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-semibold text-foreground hover:text-[var(--accent)] transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
