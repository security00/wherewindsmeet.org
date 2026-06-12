## Where Winds Meet – SEO Guides Hub

This is an unofficial SEO-focused hub for **Where Winds Meet**, built on the Next.js App Router.  
The goal is to provide structured English content around the core query **“where winds meet”**  
— guides, tier lists, builds, codes, news, and videos — with clean internal linking and technical SEO.

> Note: this is a **fan-made, unofficial site** and is not affiliated with the game’s publisher or developers.

---

## Tech Stack

- Framework: [Next.js 16](https://nextjs.org/) (App Router)
- Language: TypeScript + React 19
- Styling: Tailwind CSS v4 (via `app/globals.css`)
- Fonts: `next/font` + Geist

---

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

The app runs at `http://localhost:3000` by default.

Production build and local preview:

```bash
npm run build
npm start
```

---

## Key Routes & Information Architecture

Routes map directly to the `app/` directory.

### Public Pages

- `/` – Hub homepage  
  - Hero with `design/bg.jpg` game background and `design/logo.png` logo.  
  - Primary entry points: Tier List / Builds / Codes / News / Videos.  
  - Designed as a long, content-heavy page to increase dwell time.

- `/guides` – Guides overview  
  - Explains the overall guide structure and recommended reading order.  
  - Central internal link hub for Tier List / Builds / Codes.

- `/guides/tier-list` – Where Winds Meet Tier List  
  - Long-form PVE/PVP tier list aimed at real players (not just pure math).  
  - Connects to the Builds page and explains how to adapt across patches.

- `/guides/builds` – Builds & Combat Tips  
  - Focus on build philosophy: combat loops, stat spreads, Solo / Co‑op / PVP variants.

- `/guides/codes` – Codes & Rewards  
  - Explains Where Winds Meet code types, typical value, and redeem flows.

- `/news` – News & Patch Highlights  
  - Curates official and community information and ties it back into Tier List / Builds / Codes.

- `/videos` – Videos Gallery  
  - Grid layout embedding all curated Where Winds Meet YouTube videos so users can binge inside the site.  
  - Video list comes from `lib/featuredVideos.ts`.

- `/privacy` – Privacy Policy  
  - Details how the site handles data and how embedded content (YouTube, etc.) behaves.  
  - Public contact email: `support@wherewindsmeet.org`.

- `/terms` – Terms of Use  
  - Usage terms and disclaimers (unofficial status, content usage, liability).

### SEO Meta Files

- `app/robots.ts`  
  - Generates `/robots.txt`, allows crawling, and points to `sitemap.xml`.

- `app/sitemap.ts`  
  - Generates `/sitemap.xml` including `/`, `/guides`, `/guides/tier-list`, `/guides/builds`,
    `/guides/codes`, `/news`, and other key entry points.

---

## Project Structure Overview

- `app/layout.tsx`  
  Global layout, header navigation, footer, and default `<head>` metadata.  
  Uses `metadataBase` + `title.template` to standardize SEO titles.

- `app/page.tsx`  
  Hub homepage: hero, core guide cards, tools teaser, FAQ, and the primary video module.

- `app/guides/*`  
  Content-heavy guide pages (tier list, builds, codes, overview) with strong internal linking.

- `app/news/page.tsx`  
  News overview page, ready for future integration with external data sources (RSS / API).

- `app/videos/page.tsx`  
  Video gallery page; pulls all video IDs from `lib/featuredVideos.ts` and embeds them in a grid.

- `lib/featuredVideos.ts`  
  Shared configuration for homepage and `/videos`:
  - `id`: YouTube video ID  
  - `title`: short title  
  - `description`: short description used for text copy and SEO.

- `design/`  
  - `logo.png` – logo source used in the UI.  
  - `bg.jpg` – hero background.  
  - Other PNGs are design references/mockups.

- `doc/PRD.md`  
  Product requirements document (in Chinese) describing positioning, target users, and content strategy.  
  The current implementation largely follows this PRD.

---

## Updating Content

### Updating Homepage and Guides

- Homepage: edit the relevant sections in `app/page.tsx`.  
- Guide pages: edit `app/guides/*.tsx`.  
- Try to keep each page long-form (≈ 800+ words) with natural repetition of the main keyword for that page.

### Updating the Video List

1. Open `lib/featuredVideos.ts`.  
2. Add or adjust entries in the `featuredVideos` array:

```ts
export const featuredVideos: FeaturedVideo[] = [
  {
    id: "YouTubeID",
    title: "Where Winds Meet ...",
    description: "Short description...",
  },
  // ...
];
```

The homepage uses the first entry as the main video; `/videos` renders all entries.

### Updating Contact Email

- The site consistently uses `support@wherewindsmeet.org` (footer, privacy, terms).  
- To change it, search for the string across the repo and replace it.

### SEO Content Freshness (reducing manual patch work)

The `lib/contentFreshness.json` registry powers "last checked" badges, version labels, and SEO trust signals on the homepage, news, codes, patch-notes, bosses, tier lists, and several other high-traffic pages (via `getContentFreshness`).

**Primary workflow after a new official patch/fix:**

1. Update the curated news list in `lib/news.ts` (add the new row at the top of `officialNewsRows` with the official title/date/URL/summary). This is still a manual but high-value step — it also feeds the public `/news` page.

2. Run the freshness updater (dry first):

   ```bash
   npm run seo:freshness:update:dry
   # or with overrides
   npm run seo:freshness:update:dry -- --date 2026-06-10 --version "Version 1.7 / June hotfixes" --only /,/news,/guides/patch-notes
   ```

3. Review the printed diff. If happy:

   ```bash
   npm run seo:freshness:update -- --apply
   # optionally auto-run the checker afterwards
   npm run seo:freshness:update -- --apply --check-after
   ```

4. `git diff lib/contentFreshness.json`, commit, and run full checks:

   ```bash
   npm run seo:check:freshness
   # or the broader
   npm run seo:check
   ```

The updater:
- Derives `lastChecked` + a compact `gameVersion` label primarily from the latest entry you just added to `lib/news.ts` (no need to copy-paste dates/strings into the JSON by hand).
- Can optionally `--fetch` against the `sourceUrls` to discover brand new `/news/official/…update.html` links.
- Reports pages that still contain very old literal date fallbacks (e.g. `?? "2026-06-03"`) so you can clean the `??` defaults in page source.

See `scripts/update-content-freshness.cjs --help` for all options.

This eliminates most manual date/version churn in the SEO registry while keeping a human review gate.

---

## Deployment Notes

This is a standard Next.js App Router application and can be deployed to any Node.js-capable environment:

```bash
npm install
npm run build
npm start
```

For Vercel, simply connect the repository and let Vercel handle builds and hosting.
