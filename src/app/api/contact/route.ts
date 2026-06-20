import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/config/site.config";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  projectType?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  name?: string;
  email?: string;
  phone?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value?: string): string {
  if (!value) return "";
  return `<tr>
    <td style="padding:8px 16px;color:#6b6760;font-size:13px;white-space:nowrap;vertical-align:top;">${esc(label)}</td>
    <td style="padding:8px 16px;color:#14110d;font-size:14px;font-weight:600;">${esc(value)}</td>
  </tr>`;
}

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";
  const timeline = body.timeline?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || name.length > 120) {
    return NextResponse.json(
      { error: "Please enter your name." },
      { status: 422 },
    );
  }
  if (!email || !EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 422 },
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set — cannot send email.");
    return NextResponse.json(
      {
        error:
          "Our inquiry form isn't connected yet. Please call or email us directly.",
      },
      { status: 503 },
    );
  }

  const to = (process.env.CONTACT_TO_EMAIL || siteConfig.contact.email)
    .split(",")
    .map((addr) => addr.trim())
    .filter(Boolean);
  const from =
    process.env.CONTACT_FROM_EMAIL ||
    `${siteConfig.company.name} <onboarding@resend.dev>`;

  const subject = `New project inquiry — ${name}${projectType ? ` (${projectType})` : ""}`;

  const html = `<!doctype html><html><body style="margin:0;background:#f8f6f0;font-family:Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
      <div style="background:#ffffff;border:1px solid #e3ddd0;border-radius:16px;overflow:hidden;">
        <div style="background:#14110d;padding:24px 28px;">
          <div style="color:#ffffff;font-size:18px;font-weight:700;">New project inquiry</div>
          <div style="color:#b8462e;font-size:13px;margin-top:4px;">${esc(siteConfig.company.fullName)}</div>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          ${row("Name", name)}
          ${row("Email", email)}
          ${row("Phone", phone)}
          ${row("Project", projectType)}
          ${row("Budget", budget)}
          ${row("Timeline", timeline)}
        </table>
        ${
          message
            ? `<div style="padding:16px 28px 28px;">
                <div style="color:#6b6760;font-size:13px;margin-bottom:8px;">Message</div>
                <div style="color:#14110d;font-size:14px;line-height:1.6;white-space:pre-wrap;">${esc(message)}</div>
              </div>`
            : ""
        }
      </div>
      <div style="color:#6b6760;font-size:12px;text-align:center;margin-top:16px;">
        Reply directly to this email to respond to ${esc(name)}.
      </div>
    </div>
  </body></html>`;

  const text = [
    `New project inquiry — ${siteConfig.company.fullName}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    projectType ? `Project: ${projectType}` : null,
    budget ? `Budget: ${budget}` : null,
    timeline ? `Timeline: ${timeline}` : null,
    message ? `\nMessage:\n${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend returned an error:", error);
      return NextResponse.json(
        {
          error: "We couldn't send your message. Please try again or call us.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Unexpected error sending email:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again in a moment." },
      { status: 500 },
    );
  }
}
