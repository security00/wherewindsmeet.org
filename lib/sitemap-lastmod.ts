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

/** 2026-11-13 window pages moved onto the 2026-11-26 landing list below. */
const WINDOW_PAGE_PATHS = new Set<string>([]);
const WINDOW_PAGE_MODIFIED = "2026-11-13";

/**
 * Bosses and Jiangnan keep the 2026-11-06 stamp. LAST_VERIFIED is now the
 * 2026-11-26 Hutuo refresh, and those two pages were not re-dated.
 */
const NOVEMBER_06_FROZEN = new Set<string>(["/guides/bosses", "/guides/jiangnan-hangzhou"]);
const NOVEMBER_06 = "2026-11-06";

const NOVEMBER_26_PATHS = new Set([
  "/",
  "/news",
  "/guides",
  "/guides/patch-notes",
  "/guides/hutuo",
  "/guides/martial-arts-weapons",
  "/guides/inn-character-record", "/guides/npc-list", "/guides/mount-tai-blizzard",
  "/guides/free-outfits", "/guides/anniversary", "/guides/cosmetics", "/guides/flicker-of-faces",
  "/guides/codes", "/vn/guides/codes", "/de/guides/codes",
]);

/** Calendar day for a sitemap path. Inherited dates stay put unless the path itself was revised. */
export function sitemapLastModifiedDay(path: string, inheritedDay?: string): string | undefined {
  if (NOVEMBER_26_PATHS.has(path)) return "2026-11-26";
  if (NOVEMBER_06_FROZEN.has(path)) return NOVEMBER_06;
  if (WINDOW_PAGE_PATHS.has(path)) return WINDOW_PAGE_MODIFIED;
  if (revised.has(path)) return LAST_VERIFIED;
  return inheritedDay;
}
