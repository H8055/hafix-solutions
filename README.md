# Hafix Solution — Website

Bilingual (English / Arabic, full RTL) marketing site for **Hafix Solution**, a technology &
creative studio in **Dammam, Saudi Arabia**.

Built with **Next.js 15 (App Router)** + hand-written CSS. No UI framework, no page builder —
the design system is in one stylesheet so a developer can restyle it in minutes.

---

## 1. Run it

```bash
cd hafix
npm install
npm run dev        # http://localhost:3000
```

Production:

```bash
npm run build
npm start          # serves the optimised build on port 3000
```

Deploys as-is to Vercel, Netlify, Render, Railway, or any Node host.
Every page is statically generated (19 routes) — no database, no server required.

---

## 2. What's in it

| Route | Content |
|---|---|
| `/` | Hero with rotating headline, client marquee, story, all 14 services (hover-preview list), process, featured work, priorities, industries, testimonials, FAQ, contact form, CTA |
| `/services` | 14 detailed service cards, process, 3 engagement models, FAQ, CTA |
| `/works` | Filterable portfolio (All / Branding / Web / Software / Marketing) |
| `/works/[slug]` | 9 individual case studies with challenge, approach, outcome + metrics |
| `/about` | Story, timeline 2018→2026, values, stats, process |
| `/contact` | Contact details, enquiry form, map panel, FAQ |

Design language — **light, restrained, editorial, enterprise-grade**

- **White** page (`#FFFFFF`) with warm off-white panels (`#F7F5F2`, `#F1EFEB`) for rhythm
- Near-black graphite text (`#14161A`, secondary `#5F636A`) — all text passes **WCAG AA**
- Brand red **#C0392F** used as a *precise accent only*: hairlines, small numbers, one accent
  word, active states, the primary button. Measured coverage: **0.6–1.5%** of any screen.
  No glows, no red gradients
- Structure comes from **hairline rules and a strict grid**, not from colour
- Two logo files: `logo-dark.png` (black wordmark — used on this light theme) and
  `logo-light.png` (ivory wordmark — for a future dark theme)
- **Source Serif 4** (Latin headings, 500/600) + **Inter** (Latin body) + **IBM Plex Sans Arabic**
  (all Arabic, 600 for headings)
- Fonts are self-hosted by `next/font` and declared on `<html>` in `app/layout.jsx` — **the
  variable classes must stay on `<html>`, not `<body>`**, otherwise the `:root` aliases in
  `globals.css` resolve to their fallbacks and the webfonts silently never load
- Square corners (2px radius), quiet hover states, fade-and-rise reveals (16px, 0.7s)
- Quiet preloader (first visit only), scroll-progress hairline, subtle grain, mobile drawer menu,
  floating WhatsApp + back-to-top
- SEO: metadata, Open Graph, JSON-LD `ProfessionalService` schema, `sitemap.xml`, `robots.txt`

> Deliberately **not** included, to keep it professional rather than flashy: custom cursor,
> cursor-following image panels, neon glows, bouncing/scale animations, scrolling logo marquee,
> oversized outline type.

---

## 3. Editing content (no code needed)

**All text lives in `lib/content.js`** — one file, every string as `{ en, ar }`.
Example: to change the hero headline, edit `hero.titleA`. To change a service, edit the
matching entry in the `services` array. Arabic text sits next to the English — update both.

Most common edits:

| What | Where |
|---|---|
| Phone / WhatsApp / email / address / hours | `contact` object — top of `lib/content.js` |
| Company name, tagline, city, founded year | `company` object |
| Services (add / remove / reorder) | `services` array (also drives footer links + form dropdown) |
| Portfolio projects | `works` array + `workDetails` (case-study text) + an image in `public/works/` |
| Client logos in the marquee | `clients` array (names now — swap for `<img>` logos later) |
| Testimonials, FAQ, process, industries, stats | matching arrays in `lib/content.js` |
| Page meta / SEO titles | `metadata` export in `app/*/page.jsx`, plus `app/layout.jsx` |

---

## 4. Changing the look

- **Colours & type scale** — CSS variables at the top of `app/globals.css`
  (`--ink`, `--cream`, `--red`, `--line`, fonts, max width).
- **Fonts** — `app/layout.jsx` (`next/font/google`). They are self-hosted at build time.
- **Logo** — `public/brand/`:
  - `logo-light.png` (ivory wordmark, used on dark backgrounds — the default)
  - `logo-dark.png` (black wordmark for light backgrounds)
  - `mark-light.png` / `mark-dark.png` (icon/monogram, used in the preloader)
  - `favicon.png` + `public/favicon.ico`
- Replace the files, keep the names, nothing else changes.

---

## 5. Before you go live — checklist

1. **Contact details** — `lib/content.js` → `contact`: real phone, WhatsApp, email, street address.
2. **Domain** — replace `https://www.hafixsolution.com` in `app/layout.jsx` (metadataBase,
   JSON-LD), `app/sitemap.js`, `app/robots.js`.
3. **Form** — the form currently validates and shows a success message client-side. To receive
   real enquiries, point it at Formspree / EmailJS / your own API in
   `components/Interactions.jsx` (`submit()`), or connect a Next.js route handler.
4. **Images** — portfolio covers in `public/works/*.svg` are generated placeholders. Swap in real
   photography (keep the same filenames, or update `works[].slug`).
5. **Legal** — add commercial registration / VAT number in the footer, and privacy & terms pages.
6. **Analytics** — add GA4 / Clarity / GTM in `app/layout.jsx`.
7. **Arabic review** — copy is professional MSA; have a native reviewer read it once before launch.
