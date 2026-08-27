# Lumiva — Muhammad Salman Al Farizi

Portfolio of **Muhammad Salman Al Farizi (Lumiva)** — software engineer crafting dependable web products. Built with Next.js 16, Tailwind CSS 4, shadcn/ui (base-nova), and next-themes.

**Live:** https://lumivax.vercel.app · **Contact:** hello@ryz.dev · **GitHub:** https://github.com/ItzRyz

## Stack

- **Framework:** Next.js 16 (App Router, RSC)
- **Styling:** Tailwind CSS 4 + shadcn/tailwind
- **UI:** Base UI + lucide-react + class-variance-authority
- **Fonts:** Inter + JetBrains Mono (next/font, `display:swap`)
- **Analytics:** @vercel/analytics
- **Theme:** next-themes (system, `disableTransitionOnChange`)

## Features

- Sticky header with scroll shadow + scrollspy + accessible mobile overlay (Esc, focus trap, body lock)
- Hero with grid pattern, pulse availability, layered profile card
- Experience timeline, featured + grid projects with previews, skill levels
- Contact with mailto form + honeypot + copy email
- SEO: `metadataBase`, OG/Twitter, `sitemap.ts`, `robots.ts`, `manifest.ts`, dynamic `opengraph-image.tsx`, JSON-LD Person + WebSite
- A11y: skip-link, `scroll-padding-top`, focus rings, `aria-hidden`, `prefers-reduced-motion`, `rel="noopener noreferrer"`
- Perf: `next/image` AVIF/WebP, `optimizePackageImports: ['lucide-react']`, RSC page

## Project Structure

```
app/
  layout.tsx          # fonts, metadata, viewport, JSON-LD
  page.tsx            # server composition of sections
  globals.css         # tokens (brand separate from primary), smooth scroll
  sitemap.ts / robots.ts / manifest.ts / opengraph-image.tsx
components/
  layout/header.tsx + theme-toggle.tsx + footer.tsx
  sections/hero.tsx, about.tsx, experience.tsx, projects.tsx, skills.tsx, contact.tsx
  ui/container.tsx, section-label.tsx, badge.tsx, card.tsx, button.tsx
lib/data.ts           # typed projects/stack/experiences/siteConfig
```

## Getting Started

```bash
pnpm install
pnpm dev
# or
npm install
npm run dev
```

Open http://localhost:3000

## Scripts

- `dev` — dev server
- `build` — production build
- `start` — production start
- `typecheck` — `tsc --noEmit`
- `lint` — `next lint`

## Content Editing

Edit `lib/data.ts` for projects/stack/experience/socials. Replace `public/resume.pdf` with real CV, `public/og-image.png` is generated via `app/opengraph-image.tsx` (edge). Social URLs in `lib/data.ts` → `socials`.

## Deployment

Vercel recommended. `next.config.mjs` enables `compress`, `poweredByHeader: false`, AVIF/WebP.

## License

MIT — © 2026 Lumiva
