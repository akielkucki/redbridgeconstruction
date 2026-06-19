import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/components/index";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.company.fullName} collects, uses, and protects the information you share with us.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-12">
            Last updated {new Date().getFullYear()}
          </p>

          <div className="space-y-8 font-[family-name:var(--font-inter)] text-muted-foreground leading-relaxed">
            <section>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground mb-3">
                Information we collect
              </h2>
              <p>
                When you submit an inquiry through our contact form, we collect
                the details you provide — your name, email address, phone number
                (if given), and a description of your project. We use this
                information solely to respond to your request and discuss
                potential work.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground mb-3">
                How we use your information
              </h2>
              <p>
                We use the information you share to contact you about your
                project, prepare estimates, and provide our services. We do not
                sell, rent, or trade your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground mb-3">
                Email delivery
              </h2>
              <p>
                Contact form submissions are delivered to us using a third-party
                email provider. Your information is transmitted securely and
                retained only as long as needed to serve you.
              </p>
            </section>

            <section>
              <h2 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-foreground mb-3">
                Contact us
              </h2>
              <p>
                Questions about this policy? Reach us at{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-semibold text-foreground hover:text-[var(--accent)] transition-colors break-all"
                >
                  {siteConfig.contact.email}
                </a>{" "}
                or{" "}
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="font-semibold text-foreground hover:text-[var(--accent)] transition-colors"
                >
                  {siteConfig.contact.phone}
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
