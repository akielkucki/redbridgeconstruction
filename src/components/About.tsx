"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { siteConfig } from "@/components/index";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const STATS = [
  { value: siteConfig.company.yearsExperience, suffix: "+", label: "Years in business" },
  { value: siteConfig.company.projectsCompleted, suffix: "+", label: "Projects delivered" },
  { value: siteConfig.company.awardsWon, suffix: "", label: "Industry awards" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-surface-muted overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: copy */}
          <div>
            <SectionHeading
              eyebrow="About Red Bridge"
              title={
                <>
                  Building dreams
                  <br />
                  <span className="text-accent-gradient">
                    since {siteConfig.company.foundedYear}.
                  </span>
                </>
              }
            />

            <div className="mt-8 space-y-5 font-[family-name:var(--font-inter)] text-base text-muted-foreground leading-relaxed max-w-xl">
              <p>
                Rob Kielkucki founded Red Bridge Construction with a simple
                mission: deliver exceptional construction across New Hope and
                Bucks County. {siteConfig.company.yearsExperience} years later, that
                mission hasn&apos;t changed.
              </p>
              <p>
                We&apos;re a small, hands-on team of designers, architects, and
                skilled craftsmen who treat every project — from a bathroom
                tile job to a custom estate — with the same care.
              </p>
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap gap-2"
            >
              {siteConfig.footer.certifications.map((cert) => (
                <Badge key={cert} variant="outline">
                  {cert}
                </Badge>
              ))}
            </motion.div>
          </div>

          {/* Right: image + stat overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-xl">
              <Image
                src="https://images.pexels.com/photos/7031607/pexels-photo-7031607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1575&dpr=2"
                alt="Red Bridge Construction project"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-8 -left-4 md:-left-12 right-4 md:right-auto md:w-[420px] bg-white rounded-2xl shadow-xl border border-border p-6 md:p-8"
            >
              <div className="grid grid-cols-3 gap-4">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-[family-name:var(--font-space-grotesk)] text-3xl md:text-4xl font-bold text-foreground leading-none">
                      <CountUp end={s.value} duration={2} enableScrollSpy scrollSpyOnce />
                      {s.suffix}
                    </div>
                    <div className="mt-2 text-[11px] font-medium text-muted-foreground leading-tight">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
