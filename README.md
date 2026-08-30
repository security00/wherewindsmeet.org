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
- Fonts: local CSS system stack (`Inter` fallback); no remote font loader
- i18n: `next-intl` with shared JSON UI packs for English, German, and Vietnamese
- Runtime: OpenNext on Cloudflare Workers

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

Cloudflare runtime preview (after installing dependencies):

```bash
npm run cf:build
npm run cf:smoke
```

---

## Key Routes & Information Architecture

Routes map directly to the `app/` directory.

### Public Pages

- `/` – Hub homepage  
  - Hero with local background media and the site logo from `public/design/`.
  - Primary entry points: Tier List / Builds / Codes / News / Videos.  
  - Designed as a long, content-heavy page to increase dwell time.

- `/guides` – Guides overview  
  - Explains the overall guide structure and recommended reading order.  
  - Central internal link hub for Tier List / Builds / Codes.

- `/guides/tier-list` – Where Winds Meet Tier List  
  - Versioned PVE/PVP evidence review with mode and sample-quality boundaries.
  - Connects to Builds and does not publish universal letter ranks without reproducible evidence.

- `/guides/builds` – Builds & Combat Tips  
  - Focus on build philosophy: combat loops, stat spreads, Solo / Co‑op / PVP variants.

- `/guides/codes` – Codes & Rewards  
  - Explains Where Winds Meet code types, typical value, and redeem flows.

- `/news` – News & Patch Highlights  
  - Curates official and community information and ties it back into Tier List / Builds / Codes.

- `/videos` – Videos Gallery  
  - Click-to-load gallery for curated Where Winds Meet videos; no third-party player loads before interaction.
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

- `components/LocaleRootLayout.tsx` and `app/(en|de|vn)/layout.tsx`
  Shared locale provider, consent UI, header, footer, and locale-specific metadata.

- `app/(en)/page.tsx`
  Hub homepage: hero, current-version entry points, guide cards, tools, and FAQ.

- `app/(en)/guides/**`
  English guide owners; reviewed German and Vietnamese pages retain their indexed `/de` and `/vn` routes.

- `app/(en)/news/page.tsx`
  News overview backed by the manually reviewed official rows in `lib/news.ts`.

- `app/(en)/videos/page.tsx`
  Click-to-load video gallery backed by `lib/featuredVideos.ts`.

- `lib/featuredVideos.ts`  
  Shared configuration for homepage and `/videos`:
  - `id`: YouTube video ID  
  - `title`: short title  
  - `description`: short description used for text copy and SEO.

- `public/design/` and `public/background/`
  Local site identity and decorative background assets.

- `doc/PRD.md`  
  Product requirements document (in Chinese) describing positioning, target users, and content strategy.  
  The current implementation largely follows this PRD.

---

## Updating Content

### Updating Homepage and Guides

- English homepage: edit the relevant sections in `app/(en)/page.tsx`.
- Guide pages: edit the matching owner below `app/(en)/guides/`; update a DE/VI page only after a real translation review.
- Shared UI strings: update all three `i18n/messages/{en,de,vi}.json` packs together.
- Prefer complete intent coverage, dated primary sources, accurate media captions, and useful decision paths; do not pad pages or repeat keywords mechanically.

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

`/videos` renders these entries as click-to-load cards. German and Vietnamese
catalog copy lives in the corresponding `lib/featuredVideos.*.ts` files.

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

Production uses OpenNext on Cloudflare Workers. A release runs behavior tests,
lint, a static-export SEO regression build, the OpenNext build, and a local
runtime smoke test before deploying the already-tested artifact.

```bash
npm ci
npm test
npm run lint
npm run seo:check
npm run cf:build
npm run cf:smoke
npm run cf:deploy:artifact
```

For a manual release, prefer `npm run cf:deploy`, which rebuilds before deploy.
`cf:deploy:artifact` must only be used immediately after a successful `cf:build`.
The static export remains available via `npm run build:static` for SEO checks and
an emergency hosting rollback. See `doc/architecture-i18n-workers.md` for the
locale contract, cutover checklist, privacy boundary, and rollback procedure.
