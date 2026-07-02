import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/config/site.config";

export const runtime = "nodejs";

/**
 * Contact form handler. Sends two emails through Resend:
 *  1. A lead notification to the owner with every field the visitor submitted.
 *  2. A confirmation to the visitor so they know the inquiry landed.
 *
 * Required env vars (see .env.example):
 *  - RESEND_API_KEY:      API key from resend.com
 *  - CONTACT_FROM_EMAIL:  A verified sender on your Resend domain,
 *                         e.g. "Red Bridge Construction <hello@redbridgeconstructionllc.com>"
 *  - CONTACT_TO_EMAIL:    Optional. Where lead notifications go.
 *                         Defaults to the address in site.config.ts.
 */

type ContactPayload = {
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  name: string;
  email: string;
  phone: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 2000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const data: ContactPayload = {
    projectType: clean(body.projectType, 120),
    budget: clean(body.budget, 60),
    timeline: clean(body.timeline, 60),
    message: clean(body.message),
    name: clean(body.name, 120),
    email: clean(body.email, 160),
    phone: clean(body.phone, 40),
  };

  if (!data.name || !data.email || !data.projectType) {
    return NextResponse.json(
      { error: "Please add your name, email, and project type." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(data.email)) {
    return NextResponse.json(
      { error: "That email address does not look right." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.contact.email;

  if (!apiKey || !fromEmail) {
    console.error(
      "Contact form is missing RESEND_API_KEY or CONTACT_FROM_EMAIL.",
    );
    return NextResponse.json(
      {
        error:
          "The form is not fully set up yet. Please call or email us directly.",
      },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const company = siteConfig.company.name;

  const fields: Array<[string, string]> = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "Not provided"],
    ["Project type", data.projectType],
    ["Budget", data.budget || "Not provided"],
    ["Timeline", data.timeline || "Not provided"],
    ["Message", data.message || "None"],
  ];

  const ownerRows = fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px 8px 0;color:#6f6b64;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:8px 0;color:#141312;font-size:15px;vertical-align:top">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const ownerHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#141312">
      <div style="height:3px;width:64px;background:#c2371f;margin-bottom:20px"></div>
      <h1 style="font-size:20px;margin:0 0 4px">New project inquiry</h1>
      <p style="margin:0 0 20px;color:#6f6b64;font-size:14px">A new lead came in through the ${company} website.</p>
      <table style="border-collapse:collapse;width:100%">${ownerRows}</table>
      <p style="margin:24px 0 0;color:#6f6b64;font-size:13px">Reply straight to this email to reach ${escapeHtml(data.name)} in New Hope and Bucks County, PA.</p>
    </div>`;

  const ownerText = fields
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  const leadHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;color:#141312">
      <div style="height:3px;width:64px;background:#c2371f;margin-bottom:20px"></div>
      <h1 style="font-size:20px;margin:0 0 12px">Thanks, ${escapeHtml(data.name.split(" ")[0])}.</h1>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6">
        We received your inquiry about ${escapeHtml(data.projectType.toLowerCase())} and will follow up within one business day.
        Red Bridge Construction has built, remodeled, and restored homes across New Hope and Bucks County since ${siteConfig.company.foundedYear}.
      </p>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.6">Here is what you sent us:</p>
      <table style="border-collapse:collapse;width:100%">${ownerRows}</table>
      <p style="margin:24px 0 4px;font-size:15px;line-height:1.6">If anything changed, just reply to this email.</p>
      <p style="margin:0;font-size:15px;line-height:1.6">
        ${company}<br>
        ${siteConfig.contact.phone}<br>
        ${siteConfig.contact.address.full}
      </p>
    </div>`;

  const leadText =
    `Thanks, ${data.name.split(" ")[0]}.\n\n` +
    `We received your inquiry about ${data.projectType.toLowerCase()} and will follow up within one business day. ` +
    `Red Bridge Construction has built, remodeled, and restored homes across New Hope and Bucks County since ${siteConfig.company.foundedYear}.\n\n` +
    `Here is what you sent us:\n${ownerText}\n\n` +
    `${company}\n${siteConfig.contact.phone}\n${siteConfig.contact.address.full}`;

  try {
    const owner = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: data.email,
      subject: `New inquiry: ${data.projectType} from ${data.name}`,
      html: ownerHtml,
      text: ownerText,
    });

    if (owner.error) {
      console.error("Resend owner email failed:", owner.error);
      return NextResponse.json(
        {
          error:
            "We could not send your inquiry. Please call or email us directly.",
        },
        { status: 502 },
      );
    }

    // Confirmation to the lead is best-effort. If it fails, the lead is still captured.
    const lead = await resend.emails.send({
      from: fromEmail,
      to: data.email,
      replyTo: toEmail,
      subject: `We received your inquiry at ${company}`,
      html: leadHtml,
      text: leadText,
    });

    if (lead.error) {
      console.error("Resend confirmation email failed:", lead.error);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please call or email us directly." },
      { status: 500 },
    );
  }
}
