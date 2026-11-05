/**
 * Sourced global-server announcements for the November 2026 Hutuo / anniversary batch.
 * Announced is not live. Do not add a version number, Hutuo boss, raid, drop,
 * entrance requirement, or a Dual Spears date of November 13.
 */

export const LAST_VERIFIED = "2026-11-06";
export const LAST_VERIFIED_LABEL = "2026-11-06 (Asia/Shanghai)";
export const PAGE_PUBLISHED = "2026-11-06";
export const PAGE_MODIFIED = "2026-11-06";

export const HUB_OG_IMAGE = {
  url: "https://static.wherewindsmeet.org/background/bg.jpg",
  width: 1200,
  height: 630,
  alt: "Where Winds Meet fan hub cover. This image is not Hutuo or anniversary key art.",
} as const;

export type SourceLink = {
  id: string;
  label: string;
  url: string;
  published: string;
};

export const HUTUO_POST: SourceLink = {
  id: "hutuo-x-2026-11-04",
  label: "Official X: Hutuo major update",
  url: "https://x.com/WhereWindsMeet_/status/2117934891497029783",
  published: "2026-11-04 19:00:02 Asia/Shanghai",
};

export const ANNIVERSARY_POST: SourceLink = {
  id: "anniversary-x-2026-11-03",
  label: "Official X: anniversary rewards",
  url: "https://x.com/WhereWindsMeet_/status/2117386268698943563",
  published: "2026-11-03 06:40:00 Asia/Shanghai",
};

export const PLAYSTATION_HUTUO_POST: SourceLink = {
  id: "playstation-blog-2026-10-27",
  label: "PlayStation Blog: Hutuo narrative arc",
  url: "https://blog.playstation.com/2026/10/27/where-winds-meets-climactic-hutuo-battlefield-narrative-arc-revealed-out-nov-13/",
  published: "2026-10-27 (page date only; time zone not stated)",
};

export const HUTUO_RIVER_POST: SourceLink = {
  id: "hutuo-river-x",
  label: "Official X: Campaign [Hutuo River] / Zhongdu Bridge",
  url: "https://x.com/WhereWindsMeet_/status/2115103980996919763",
  published: "Supporting naming for the same Hutuo anniversary beat",
};

export const ANNIVERSARY_BROADCAST_POST: SourceLink = {
  id: "anniversary-broadcast-x",
  label: "Official X: 1st Anniversary Special Broadcast",
  url: "https://x.com/WhereWindsMeet_/status/2115104986929709317",
  published: "November 2, 14:00 PT",
};

export const BATTLE_PASS_POST: SourceLink = {
  id: "battle-pass-x-2026-11-05",
  label: "Official X: Frostbound Edge and Willow Breeze",
  url: "https://x.com/WhereWindsMeet_/status/2118357684911042887",
  published: "2026-11-05 23:00:03 Asia/Shanghai",
};

export const PATCH_NOTES_1029: SourceLink = {
  id: "patch-notes-1029",
  label: "Official October 29 patch notes",
  url: "https://www.wherewindsmeetgame.com/news/official/1029patchnotes.html",
  published: "Official site page date 2026-10-30 (date only)",
};

export const STEAM_PATCH_1029: SourceLink = {
  id: "steam-patch-1029",
  label: "Steam: October 29 patch notes",
  url: "https://store.steampowered.com/news/app/3564740/view/1847920302233930",
  published: "2026-10-29 16:38:17 Asia/Shanghai",
};

export const APPEARANCES_1029: SourceLink = {
  id: "appearances-1029",
  label: "Official appearances overview",
  url: "https://www.wherewindsmeetgame.com/news/official/1029appearance.html",
  published: "Page dated 2026-10-29",
};

export const DLSS_POST: SourceLink = {
  id: "dlss-5-x",
  label: "Official X: NVIDIA DLSS 5",
  url: "https://x.com/WhereWindsMeet_/status/2117837625855987918",
  published: "2026-11-04 12:33:32 Asia/Shanghai",
};

export const UPDATE_OVERVIEW_1029: SourceLink = {
  id: "update-overview-1029",
  label: "[Friends From Afar] Version 2.3 Update Overview - October 29",
  url: "https://www.wherewindsmeetgame.com/news/official/1029update.html",
  published: "Image-led official page; no summary transcribed",
};

export const DEV_LETTER_1028: SourceLink = {
  id: "dev-letter-1028",
  label: "October 28 Dev Letter",
  url: "https://www.wherewindsmeetgame.com/news/official/1028devletter.html",
  published: "2026-10-28 (page date only)",
};

export const SWALLOWS_PACT_POST: SourceLink = {
  id: "swallows-pact-delay",
  label: "Official X: Swallow's Pact and Radiant Attire delay",
  url: "https://x.com/WhereWindsMeet_/status/2114750643663716620",
  published: "2026-10-27 00:06:58 Asia/Shanghai",
};

export const HUTUO_SOURCES: SourceLink[] = [
  HUTUO_POST,
  ANNIVERSARY_POST,
  PLAYSTATION_HUTUO_POST,
  HUTUO_RIVER_POST,
  ANNIVERSARY_BROADCAST_POST,
  DEV_LETTER_1028,
];

export const ANNIVERSARY_SOURCES: SourceLink[] = [
  ANNIVERSARY_POST,
  HUTUO_POST,
  PLAYSTATION_HUTUO_POST,
  BATTLE_PASS_POST,
  PATCH_NOTES_1029,
];
