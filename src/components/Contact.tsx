"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Check,
  ArrowRight,
  ArrowLeft,
  Hammer,
  Home,
  Landmark,
  Wrench,
  ShieldCheck,
  Clock,
  Award,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/components/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  { value: "Home Remodeling", label: "Remodel", icon: Hammer, desc: "Kitchen, bath, or full home" },
  { value: "Custom Home Building", label: "New Build", icon: Home, desc: "Ground-up construction" },
  { value: "Historic & Property Restoration", label: "Restoration", icon: Landmark, desc: "Period-accurate work" },
  { value: "Other", label: "Something else", icon: Wrench, desc: "Tell us about it" },
];

const BUDGET_RANGES = [
  "Under $50K",
  "$50K – $150K",
  "$150K – $500K",
  "$500K +",
  "Not sure yet",
];

const TIMELINES = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Just exploring",
];

const TRUST_POINTS = [
  { icon: ShieldCheck, text: "Licensed & Insured" },
  { icon: Award, text: `${siteConfig.company.yearsExperience}+ years` },
  { icon: Clock, text: "On-time delivery" },
];

type FormData = {
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  name: string;
  email: string;
  phone: string;
};

const TOTAL_STEPS = 3;

export function Contact() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
    name: "",
    email: "",
    phone: "",
  });

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setData((d) => ({ ...d, [key]: value }));

  const canAdvance = () => {
    if (step === 0) return !!data.projectType;
    if (step === 1) return !!data.budget && !!data.timeline;
    if (step === 2) return !!data.name && !!data.email;
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canAdvance()) return;
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
      return;
    }
    console.log("Contact form submission:", data);
    setSubmitted(true);
  };

  const progress = ((step + 1) / TOTAL_STEPS) * 100;

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-background overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

          {/* ─── Left: persuasive pitch ─── */}
          <div className="lg:sticky lg:top-28">
            <Badge variant="soft" className="mb-6">
              <Sparkles className="w-3 h-3" />
              Free Consultation
            </Badge>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-[family-name:var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-foreground mb-6"
            >
              Tell us about
              <br />
              your project.
            </motion.h2>

            <p className="font-[family-name:var(--font-inter)] text-lg text-muted-foreground leading-relaxed mb-10 max-w-md">
              Three quick steps. No pressure, no sales calls — just a real
              conversation about what you want to build.
            </p>

            {/* Trust strip */}
            <div className="grid grid-cols-3 gap-4 mb-10 pb-10 border-b border-border">
              {TRUST_POINTS.map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-start gap-2">
                  <Icon className="w-5 h-5 text-[var(--accent)]" />
                  <span className="font-[family-name:var(--font-inter)] text-xs font-medium text-foreground leading-tight">
                    {text}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-foreground/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-muted flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted">Call directly</div>
                  <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-foreground">
                    {siteConfig.contact.phone}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface hover:border-foreground/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-muted flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-muted">Email</div>
                  <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-foreground text-sm break-all">
                    {siteConfig.contact.email}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface">
                <div className="w-10 h-10 rounded-lg bg-surface-muted flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted">Visit</div>
                  <address className="font-[family-name:var(--font-space-grotesk)] font-semibold text-foreground text-sm not-italic">
                    {siteConfig.contact.address.full}
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Right: form card ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl bg-white border border-border shadow-[0_24px_72px_-32px_rgba(20,17,13,0.18)] p-6 md:p-10 overflow-hidden">

              {/* Progress bar */}
              {!submitted && (
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-[family-name:var(--font-inter)] text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      Step {step + 1} of {TOTAL_STEPS}
                    </span>
                    <span className="font-[family-name:var(--font-inter)] text-xs font-medium text-[var(--accent)]">
                      {step === 0 && "What you need"}
                      {step === 1 && "Scope & timing"}
                      {step === 2 && "Your details"}
                    </span>
                  </div>
                  <div className="h-1 w-full bg-surface-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[var(--accent)] rounded-full"
                      initial={false}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
                    />
                  </div>
                </div>
              )}

              <AnimatePresence mode="wait">
                {submitted ? (
                  <SuccessState key="success" name={data.name} />
                ) : (
                  <motion.form
                    key={`step-${step}`}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
                  >
                    {step === 0 && (
                      <Step1
                        value={data.projectType}
                        onChange={(v) => update("projectType", v)}
                      />
                    )}
                    {step === 1 && (
                      <Step2
                        budget={data.budget}
                        timeline={data.timeline}
                        message={data.message}
                        onBudget={(v) => update("budget", v)}
                        onTimeline={(v) => update("timeline", v)}
                        onMessage={(v) => update("message", v)}
                      />
                    )}
                    {step === 2 && (
                      <Step3
                        name={data.name}
                        email={data.email}
                        phone={data.phone}
                        onName={(v) => update("name", v)}
                        onEmail={(v) => update("email", v)}
                        onPhone={(v) => update("phone", v)}
                      />
                    )}

                    {/* Footer actions */}
                    <div className="mt-8 flex items-center justify-between gap-4">
                      {step > 0 ? (
                        <Button
                          type="button"
                          variant="ghost"
                          size="md"
                          onClick={() => setStep((s) => s - 1)}
                        >
                          <ArrowLeft className="w-4 h-4" />
                          Back
                        </Button>
                      ) : (
                        <span className="text-xs text-muted">
                          We&apos;ll never share your info.
                        </span>
                      )}

                      <Button
                        type="submit"
                        variant="accent"
                        size="lg"
                        disabled={!canAdvance()}
                        className={cn(!canAdvance() && "opacity-60")}
                      >
                        {step === TOTAL_STEPS - 1 ? "Send Inquiry" : "Continue"}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Step 1: Project type ─── */
function Step1({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-foreground mb-2">
        What are you building?
      </h3>
      <p className="text-muted-foreground text-sm mb-8">
        Pick the closest fit — we&apos;ll tailor the conversation.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PROJECT_TYPES.map(({ value: v, label, icon: Icon, desc }) => {
          const active = value === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => onChange(v)}
              className={cn(
                "group relative text-left p-5 rounded-xl border transition-all duration-300",
                active
                  ? "border-[var(--accent)] bg-[var(--color-accent-soft)] shadow-sm"
                  : "border-border bg-surface hover:border-foreground/30",
              )}
            >
              <div className="flex items-start gap-3">
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                    active
                      ? "bg-[var(--accent)] text-white"
                      : "bg-surface-muted text-foreground",
                  )}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-space-grotesk)] font-semibold text-foreground">
                    {label}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {desc}
                  </div>
                </div>
              </div>
              {active && (
                <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[var(--accent)] flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Step 2: Budget + timeline + message ─── */
function Step2({
  budget,
  timeline,
  message,
  onBudget,
  onTimeline,
  onMessage,
}: {
  budget: string;
  timeline: string;
  message: string;
  onBudget: (v: string) => void;
  onTimeline: (v: string) => void;
  onMessage: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-foreground mb-2">
        Scope & timing
      </h3>
      <p className="text-muted-foreground text-sm mb-8">
        Rough estimates are fine — this just helps us prep the right team.
      </p>

      <div className="space-y-6">
        <div>
          <Label>Budget range</Label>
          <div className="flex flex-wrap gap-2">
            {BUDGET_RANGES.map((b) => (
              <Pill key={b} active={budget === b} onClick={() => onBudget(b)}>
                {b}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <Label>Timeline</Label>
          <div className="flex flex-wrap gap-2">
            {TIMELINES.map((t) => (
              <Pill key={t} active={timeline === t} onClick={() => onTimeline(t)}>
                {t}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <Label htmlFor="message">
            Anything else <span className="normal-case font-normal text-muted">(optional)</span>
          </Label>
          <Textarea
            id="message"
            rows={4}
            value={message}
            onChange={(e) => onMessage(e.target.value)}
            placeholder="Inspiration, must-haves, constraints…"
          />
        </div>
      </div>
    </div>
  );
}

/* ─── Step 3: Contact info ─── */
function Step3({
  name,
  email,
  phone,
  onName,
  onEmail,
  onPhone,
}: {
  name: string;
  email: string;
  phone: string;
  onName: (v: string) => void;
  onEmail: (v: string) => void;
  onPhone: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl md:text-3xl font-bold text-foreground mb-2">
        Where can we reach you?
      </h3>
      <p className="text-muted-foreground text-sm mb-8">
        We respond within one business day, every time.
      </p>

      <div className="space-y-5">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            required
            value={name}
            onChange={(e) => onName(e.target.value)}
            placeholder="Jane Smith"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => onEmail(e.target.value)}
              placeholder="jane@example.com"
            />
          </div>
          <div>
            <Label htmlFor="phone">
              Phone <span className="normal-case font-normal text-muted">(optional)</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => onPhone(e.target.value)}
              placeholder="(555) 123-4567"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Pill helper ─── */
function Pill({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full font-[family-name:var(--font-inter)] text-sm font-medium transition-all duration-200",
        active
          ? "bg-foreground text-background border border-foreground"
          : "bg-surface text-foreground border border-border hover:border-foreground/30",
      )}
    >
      {children}
    </button>
  );
}

/* ─── Success state ─── */
function SuccessState({ name }: { name: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
      className="text-center py-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
        className="w-16 h-16 mx-auto mb-6 rounded-full bg-[var(--accent)] flex items-center justify-center"
      >
        <Check className="w-8 h-8 text-white" strokeWidth={3} />
      </motion.div>
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-foreground mb-3">
        Thanks{name ? `, ${name.split(" ")[0]}` : ""}.
      </h3>
      <p className="text-muted-foreground max-w-sm mx-auto mb-8">
        We&apos;ve received your inquiry and will follow up within one business
        day. Talk soon.
      </p>
      <a
        href="#portfolio"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
      >
        Browse recent projects
        <ArrowRight className="w-4 h-4" />
      </a>
    </motion.div>
  );
}
