# Rawdah Al Jazira T A Cleaning Services — Website

Premium marketing website for **Rawdah Al Jazira T A Cleaning Services L.L.C**,
a commercial cleaning company in Al Khabaisi, Dubai.

Built with **Next.js 16** (App Router, TypeScript), **Tailwind CSS v4**,
Framer Motion, React Hook Form + Zod, and Resend for contact-form email.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
```

The contact form works without any configuration — in development it logs
enquiries to the terminal instead of sending email. To send real email,
copy `.env.example` to `.env.local` and fill in the keys.

## Editing content

All content lives in typed data files — no code changes needed:

| What | File |
|---|---|
| Phone, email, address, hours, domain | `src/data/company.ts` |
| The 12 services (titles, descriptions, checklists) | `src/data/services.ts` |
| Sectors, stats, process steps, testimonials, nav | `src/data/site.ts` |

Items pending the owner's confirmation are listed in `CONTENT-TODO.md`.

## Deploying to Vercel

1. Push this repository to GitHub.
2. In [vercel.com](https://vercel.com), **Add New → Project**, import the repo — the defaults are correct.
3. Set environment variables (Project → Settings → Environment Variables), per `.env.example`:
   - `RESEND_API_KEY` — from [resend.com](https://resend.com) (free tier), so form submissions reach rawdahaljazira@gmail.com.
   - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` — from Cloudflare Turnstile (free), recommended for spam protection.
4. Add the custom domain (Project → Settings → Domains) and update `siteUrl` in `src/data/company.ts` to match.

## Security notes

- Strict security headers (CSP, HSTS, X-Frame-Options, etc.) are set in `next.config.ts`.
- The contact API (`src/app/api/contact/route.ts`) re-validates all input with Zod,
  checks a honeypot field, rate-limits by IP, verifies Cloudflare Turnstile when
  configured, and HTML-escapes user content in the outgoing email.
- No database and no stored user data — enquiries go straight to email.
- Secrets live only in environment variables; `.env.local` is gitignored.
