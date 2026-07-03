import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { company } from "@/data/company";
import { contactSchema } from "@/lib/contact-schema";
import { isRateLimited } from "@/lib/rate-limit";

export const runtime = "nodejs";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

async function verifyTurnstile(
  token: string | undefined,
  ip: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  // Turnstile is optional — the form only renders the widget when the
  // public site key is configured, so skip verification when unset.
  if (!secret) return true;
  if (!token) return false;

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret, response: token, remoteip: ip }),
      },
    );
    const data: { success?: boolean } = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const raw = body as Record<string, unknown>;

  // Honeypot: real users never fill this field. Pretend success so bots
  // don't learn they were filtered.
  if (typeof raw.website === "string" && raw.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Please check the highlighted fields." },
      { status: 400 },
    );
  }

  const turnstileOk = await verifyTurnstile(
    typeof raw.turnstileToken === "string" ? raw.turnstileToken : undefined,
    ip,
  );
  if (!turnstileOk) {
    return NextResponse.json(
      { ok: false, error: "Spam verification failed. Please try again." },
      { status: 403 },
    );
  }

  const data = parsed.data;
  const subject = `Quote request — ${data.service} — ${data.name}`;

  const rows: Array<[string, string]> = [
    ["Name", data.name],
    ["Company", data.company || "—"],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Service", data.service],
    ["Facility", data.facility || "—"],
    ["Message", data.message],
  ];

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:600px">
      <h2 style="color:#0a3a25">New quote request from the website</h2>
      <table cellpadding="8" style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="border:1px solid #e9e1ce;background:#faf7f0;font-weight:bold;width:120px;vertical-align:top">${label}</td>
            <td style="border:1px solid #e9e1ce;white-space:pre-wrap">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <p style="color:#5c6b64;font-size:12px">Sent from the contact form · IP ${escapeHtml(ip)}</p>
    </div>`;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Local development fallback: log instead of sending.
    console.log("[contact] RESEND_API_KEY not set — enquiry logged only:", {
      ...data,
      subject,
    });
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from:
        process.env.CONTACT_FROM_EMAIL ??
        "Rawdah Al Jazira Website <onboarding@resend.dev>",
      to: company.email,
      replyTo: data.email,
      subject,
      html,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("[contact] Failed to send email:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your message right now. Please call or WhatsApp us instead.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
