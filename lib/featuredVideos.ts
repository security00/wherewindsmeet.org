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
    id: "8MHyHYcJzJo",
    title: "Hidden Mountain Chapter 2: Heaven's Threshold Announcement Trailer",
    description:
      "Official Heaven's Threshold trailer for Version 2.1, useful for Cloudstair, Drunken Fist, Reflection Temple, and current Hidden Mountain searches.",
    publishedAt: "2026-08-12",
  },
  {
    id: "3_OMV6jjJtM",
    title: "How to Get Drunken Fist Martial Arts and Inner Ways",
    description:
      "Unlock route for Skystrike Gauntlets, Riven Twinblades, and the four Draught Inner Ways that landed on Global on September 3.",
    publishedAt: "2026-08-22",
  },
  {
    id: "xQqbepOOLrE",
    title: "Hidden Mountain Expansion Launch Trailer",
    description:
      "Official Version 2.0 launch trailer for Hidden Mountain, Mohist Hill, and the gauntlets era that still underpins current region searches.",
    publishedAt: "2026-07-23",
  },
  {
    id: "pNjmMRlOXG4",
    title: "Hidden Mountain Expansion Gameplay Trailer",
    description:
      "Official gameplay of vertical exploration and lightness movement, useful for how-to-fly and Hidden Mountain traversal searches.",
    publishedAt: "2026-07-17",
  },
  {
    id: "5_FI471ah5A",
    title: "Where Winds Meet - Hidden Mountain - Official Announce Trailer",
    description:
      "Official Xbox Games Showcase 2026 trailer for the Hidden Mountain expansion, useful for roadmap, Xbox, and upcoming update searches.",
    publishedAt: "2026-06-08",
  },
  {
    id: "ozHJ-Pd_mBo",
    title: "Where Winds Meet",
    description:
      "Broad-audience commentary video with strong recognition value for general Where Winds Meet discovery traffic and mainstream curiosity.",
    publishedAt: "2025-12-01",
  },
];
