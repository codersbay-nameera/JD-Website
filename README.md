# jd-website

SEO-first Next.js foundation for incremental page development.

## Stack

- Next.js (App Router)
- React
- JavaScript / JSX
- Tailwind CSS v4
- ESLint

## Getting Started

1. Copy environment variables:

```bash
cp .env.example .env.local
```

2. Update `NEXT_PUBLIC_SITE_URL` in `.env.local` before deploying.

3. Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint

## Project Structure

```text
app/              # Routes, layouts, sitemap, robots
components/
  ui/             # Reusable UI primitives (.jsx)
  layout/         # Header, Footer, Navbar
  common/         # Breadcrumb, JsonLd
  sections/       # Reusable page sections
config/           # Site and navigation configuration
lib/
  seo/            # Metadata, canonical URLs, sitemap, robots
  schema/         # JSON-LD schema builders
  utils/          # Shared helpers
styles/           # Global styles
public/           # Static assets
```

## SEO Foundation

- Centralized metadata via `createPageMetadata()` in `lib/seo/metadata.js`
- Canonical URLs via `lib/seo/canonical.js`
- Native `/sitemap.xml` via `app/sitemap.js`
- Native `/robots.txt` via `app/robots.js`
- JSON-LD helpers in `lib/schema/`
- Site-wide Organization and WebSite schemas in root layout

## Configuration

Update placeholder values in `config/site.js` when real business information is available.

Add new routes to:

- `config/navigation.js` — navigation links
- `lib/seo/sitemap.js` — sitemap entries

## Requirements

- Node.js >= 20.9.0 (required by Next.js 16)

## Foundation Phase

This repository contains architecture and reusable components only. Actual website pages and content will be added incrementally in later phases.
