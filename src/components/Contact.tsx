"use client";

import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

const PROJECT_TYPES = [
  {
    value: "Home Remodeling",
    label: "Remodel",
    desc: "Kitchen, bath, or full home",
  },
  {
    value: "Custom Home Building",
    label: "New build",
    desc: "Ground-up construction",
  },
  {
    value: "Historic & Property Restoration",
    label: "Restoration",
    desc: "Period-accurate work",
  },
  { value: "Other", label: "Something else", desc: "Tell us about it" },
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

const CONTACT_ROWS = [
  {
    label: "Call",
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phone}`,
  },
  {
    label: "Email",
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
  },
  { label: "Visit", value: siteConfig.contact.address.full },
  { label: "Hours", value: siteConfig.contact.hours },
] as const;

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
const STEP_NAMES = ["What you need", "Scope & timing", "Your details"];

type Status = "idle" | "sending" | "error";

export function Contact() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canAdvance() || status === "sending") return;
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
      return;
    }

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const payload = await res.json().catch(() => null);
        throw new Error(
          payload?.error ?? "Something went wrong. Please try again.",
        );
      }
      setSubmitted(true);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 bg-panel text-paper">
      {/* The red line runs full-width at the funnel's end */}
      <div aria-hidden className="h-[2px] w-full bg-red" />

      <div className="shell py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-16">
          {/* Left: pitch + contact table */}
          <div className="lg:col-span-5">
            <h2 className="display text-4xl md:text-5xl lg:text-6xl text-paper">
              Tell us what
              <br />
              you’re building.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/60">
              Three quick steps and no pressure. This is a real conversation
              about your New Hope or Bucks County project, answered within one
              business day.
            </p>

            <dl className="mt-12">
              {CONTACT_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-baseline justify-between gap-6 border-t border-white/12 py-4"
                >
                  <dt className="meta text-paper/50">{row.label}</dt>
                  <dd className="text-right text-sm text-paper">
                    {"href" in row && row.href ? (
                      <a
                        href={row.href}
                        className="hover:text-red transition-colors break-all"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="meta mt-8 text-paper/40">
              Licensed &amp; insured · {siteConfig.company.yearsExperience}+
              years · On-time delivery
            </p>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6 lg:col-start-7">
            {submitted ? (
              <SuccessState name={data.name} />
            ) : (
              <>
                {/* Step meta + progress */}
                <div className="flex items-baseline justify-between gap-4">
                  <span className="meta text-paper/50">
                    0{step + 1} / 0{TOTAL_STEPS}
                  </span>
                  <span className="meta text-red">{STEP_NAMES[step]}</span>
                </div>
                <div className="mt-3 h-px w-full bg-white/12">
                  <div
                    className="h-[2px] -translate-y-px bg-red transition-[width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
                  />
                </div>

                <form onSubmit={handleSubmit} className="mt-10">
                  <div key={step} className="animate-step">
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
                  </div>

                  {status === "error" && errorMsg && (
                    <p
                      role="alert"
                      className="mt-8 border-l-2 border-red pl-4 text-sm text-paper/80"
                    >
                      {errorMsg}
                    </p>
                  )}

                  <div className="mt-10 flex items-center justify-between gap-4">
                    {step > 0 ? (
                      <Button
                        type="button"
                        variant="ghost-dark"
                        size="md"
                        onClick={() => setStep((s) => s - 1)}
                        disabled={status === "sending"}
                      >
                        Back
                      </Button>
                    ) : (
                      <span className="meta text-paper/40">
                        We never share your info
                      </span>
                    )}

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      disabled={!canAdvance() || status === "sending"}
                    >
                      {step === TOTAL_STEPS - 1
                        ? status === "sending"
                          ? "Sending"
                          : "Send inquiry"
                        : "Continue"}
                    </Button>
                  </div>
                </form>
              </>
            )}
          </div>
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
    <fieldset>
      <legend className="text-2xl font-medium tracking-tight text-paper">
        What are you building?
      </legend>
      <p className="mt-2 text-sm text-paper/50">
        Pick the closest fit and we’ll tailor the conversation.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {PROJECT_TYPES.map(({ value: v, label, desc }) => {
          const active = value === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => onChange(v)}
              aria-pressed={active}
              className={cn(
                "relative border p-5 text-left transition-colors duration-300",
                active
                  ? "border-red bg-red/10"
                  : "border-white/15 hover:border-white/40",
              )}
            >
              <span className="block font-medium text-paper">{label}</span>
              <span className="mt-1 block text-xs text-paper/50">{desc}</span>
              {active && (
                <span className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center bg-red">
                  <Check className="h-3 w-3 text-white" strokeWidth={3} />
                </span>
              )}
            </button>
          );
        })}
      </div>
    </fieldset>
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
      <h3 className="text-2xl font-medium tracking-tight text-paper">
        Scope &amp; timing
      </h3>
      <p className="mt-2 text-sm text-paper/50">
        Rough estimates are fine. This just helps us prep the right team.
      </p>

      <div className="mt-8 space-y-8">
        <div>
          <span className="meta block text-paper/50 mb-3">Budget range</span>
          <div className="flex flex-wrap gap-2">
            {BUDGET_RANGES.map((b) => (
              <Pill key={b} active={budget === b} onClick={() => onBudget(b)}>
                {b}
              </Pill>
            ))}
          </div>
        </div>

        <div>
          <span className="meta block text-paper/50 mb-3">Timeline</span>
          <div className="flex flex-wrap gap-2">
            {TIMELINES.map((t) => (
              <Pill
                key={t}
                active={timeline === t}
                onClick={() => onTimeline(t)}
              >
                {t}
              </Pill>
            ))}
          </div>
        </div>

        <Field label="Anything else (optional)" htmlFor="message">
          <textarea
            id="message"
            rows={3}
            value={message}
            onChange={(e) => onMessage(e.target.value)}
            placeholder="Inspiration, must-haves, constraints…"
            className={fieldClass}
          />
        </Field>
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
      <h3 className="text-2xl font-medium tracking-tight text-paper">
        Where can we reach you?
      </h3>
      <p className="mt-2 text-sm text-paper/50">
        We respond within one business day, every time.
      </p>

      <div className="mt-8 space-y-7">
        <Field label="Name" htmlFor="name">
          <input
            id="name"
            required
            value={name}
            onChange={(e) => onName(e.target.value)}
            placeholder="Jane Smith"
            className={fieldClass}
          />
        </Field>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
          <Field label="Email" htmlFor="email">
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => onEmail(e.target.value)}
              placeholder="jane@example.com"
              className={fieldClass}
            />
          </Field>
          <Field label="Phone (optional)" htmlFor="phone">
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => onPhone(e.target.value)}
              placeholder="(555) 123-4567"
              className={fieldClass}
            />
          </Field>
        </div>
      </div>
    </div>
  );
}

const fieldClass =
  "w-full resize-none border-b border-white/25 bg-transparent py-2.5 text-base text-paper placeholder:text-paper/30 outline-none transition-colors focus:border-red";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="meta block text-paper/50 mb-1">
        {label}
      </label>
      {children}
    </div>
  );
}

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
      aria-pressed={active}
      className={cn(
        "border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-200",
        active
          ? "border-red bg-red text-white"
          : "border-white/15 text-paper/80 hover:border-white/40",
      )}
    >
      {children}
    </button>
  );
}

function SuccessState({ name }: { name: string }) {
  return (
    <div className="animate-step flex h-full flex-col justify-center py-10">
      <span className="flex h-12 w-12 items-center justify-center bg-red">
        <Check className="h-6 w-6 text-white" strokeWidth={2.5} />
      </span>
      <h3 className="display mt-8 text-3xl md:text-4xl text-paper">
        Thanks{name ? `, ${name.split(" ")[0]}` : ""}.
      </h3>
      <p className="mt-4 max-w-sm text-paper/60 leading-relaxed">
        We’ve received your inquiry and sent a copy to your inbox. A member of
        the Red Bridge team here in Bucks County will follow up within one
        business day. Talk soon.
      </p>
      <a
        href="#portfolio"
        className="meta mt-8 inline-flex w-fit items-center gap-2 text-red hover:text-paper transition-colors"
      >
        Browse recent projects →
      </a>
    </div>
  );
}
