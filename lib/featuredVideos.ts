export type FeaturedVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
};

// User-curated video set for broad "where winds meet" searches.
// Keep the list short so every embed has a clear reason to be on the videos page.
export const featuredVideos: FeaturedVideo[] = [
  {
    id: "S7u9JuVHIyM",
    title: "Now's a Great Time to Jump into Where Winds Meet (Huge Updates)",
    description:
      "Returner-friendly overview tied to the current update cycle, useful for broad searches like where winds meet, where the winds meet, and whether the game is worth starting now.",
    publishedAt: "2026-06-10",
  },
  {
    id: "5_FI471ah5A",
    title: "Where Winds Meet - Hidden Mountain - Official Announce Trailer",
    description:
      "Official Xbox Games Showcase 2026 trailer for the Hidden Mountain expansion, useful for roadmap, Xbox, and upcoming update searches.",
    publishedAt: "2026-06-08",
  },
  {
    id: "Dmp0G0JFPGA",
    title: "This Where Winds Meet Update Is WILD (HUGE New Map!)",
    description:
      "Recent creator coverage of the new map and Imperial Palace update, matching users who want to see whether the latest Where Winds Meet content is worth returning for.",
    publishedAt: "2026-05-28",
  },
  {
    id: "0xhVPMCk5H0",
    title: "Where Winds Meet Had A HUGE Expansion",
    description:
      "Long-form expansion impressions from a high-recognition MMO creator, useful for players comparing major updates and deciding whether to come back.",
    publishedAt: "2026-04-02",
  },
  {
    id: "ozHJ-Pd_mBo",
    title: "Where Winds Meet",
    description:
      "Broad-audience commentary video with strong recognition value for general Where Winds Meet discovery traffic and mainstream curiosity.",
    publishedAt: "2025-12-01",
  },
];
