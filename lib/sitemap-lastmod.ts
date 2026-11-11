import { LAST_VERIFIED } from "./globalAnnouncements.ts";

/**
 * Lastmod already published for routes the 2026-11-06 English batch did not revise.
 * Fixed so an official news-item date cannot move unrelated, historical, or translated URLs.
 */
export const PRIOR_SHARED_LAST_MODIFIED = "2026-10-28";

/** English routes whose copy was revised on 2026-11-06. Not an official patch clock. */
export const ENGLISH_BATCH_REVISED_PATHS = [
  "/news",
  "/guides",
  "/guides/patch-notes",
  "/guides/bosses",
  "/guides/martial-arts-weapons",
  "/guides/free-outfits",
  "/guides/jiangnan-hangzhou",
  "/guides/mount-tai-blizzard",
  "/guides/hutuo",
  "/guides/anniversary",
] as const;

const revised = new Set<string>(ENGLISH_BATCH_REVISED_PATHS);

/** Hutuo and anniversary copy revised 2026-11-10. Other 2026-11-06 routes stay on LAST_VERIFIED. */
const V24_GUIDE_PATHS = new Set<string>(["/guides/hutuo", "/guides/anniversary"]);
const V24_PAGE_MODIFIED = "2026-11-10";

/** Calendar day for a sitemap path. Inherited dates stay put unless the path itself was revised. */
export function sitemapLastModifiedDay(path: string, inheritedDay?: string): string | undefined {
  if (V24_GUIDE_PATHS.has(path)) return V24_PAGE_MODIFIED;
  if (revised.has(path)) return LAST_VERIFIED;
  return inheritedDay;
}
