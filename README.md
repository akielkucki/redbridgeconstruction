# Red Bridge Construction

Marketing site for Red Bridge Construction LLC (New Hope & Bucks County, PA), built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Required | Purpose |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes (for the contact form) | API key from [resend.com/api-keys](https://resend.com/api-keys). |
| `CONTACT_TO_EMAIL` | No | Where inquiries are delivered. Defaults to the address in `site.config.ts`. |
| `CONTACT_FROM_EMAIL` | No | The "from" address. Until you verify a domain in Resend, use `onboarding@resend.dev`. |
| `NEXT_PUBLIC_SITE_URL` | No | Canonical site URL for SEO (sitemap, robots, OG images). Defaults to the production domain. |

The contact form (`/api/contact`) degrades gracefully: if `RESEND_API_KEY` is missing it returns a friendly error telling visitors to call or email instead — it never crashes.

### Verifying a sending domain

`onboarding@resend.dev` only delivers to the Resend account owner's inbox — fine for testing.
For production, [add and verify your domain](https://resend.com/domains) in Resend, then set
`CONTACT_FROM_EMAIL` to an address on that domain.

## Editing site content

Almost all copy, services, projects, testimonials, and contact details live in
[`src/config/site.config.ts`](src/config/site.config.ts). Service detail pages and project case
studies are generated automatically from that file.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — Biome checks
- `npm run format` — Biome format
