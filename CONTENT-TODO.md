# Content to confirm before launch

Everything on the site is written as final copy, except the items below,
which need the owner's confirmation. Each is marked `[CONFIRM]` in the code.

| Item | Where | Current placeholder |
|---|---|---|
| Office hours | `src/data/company.ts` | Saturday – Thursday · 8:00 AM – 6:00 PM |
| Website domain | `src/data/company.ts` (`siteUrl`) | https://rawdahaljazira.com — update once the domain is purchased |
| Trained cleaners count | `src/data/site.ts` (`stats`) | 100+ |
| Client retention % | `src/data/site.ts` (`stats`) | 98% |
| Sectors served count | `src/data/site.ts` (`stats`) | 8+ |
| Testimonials | `src/data/site.ts` (`testimonials`) | Three unattributed placeholders — replace with real client quotes (with permission) |

## Real photography (optional but recommended)

The site is designed to work without photos. When real photos of the team
and completed work are available, they can be added to service pages and
the About page — put them in `public/images/` and ask the developer (or
Claude) to wire them in.

## Before go-live checklist

1. Purchase domain and update `siteUrl` in `src/data/company.ts`.
2. Create a free Resend account, get an API key, set `RESEND_API_KEY` in Vercel.
3. (Recommended) Create a free Cloudflare Turnstile widget, set both keys in Vercel.
4. Confirm the items in the table above.
5. Verify the Google Maps pin points to the correct building on `/contact`.
