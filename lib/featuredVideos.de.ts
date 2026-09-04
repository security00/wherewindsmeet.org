export type FeaturedVideo = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
};

// German-localized descriptions for the user-curated embedded video list.
// Video IDs stay identical to the English list for parity.
export const featuredVideos: FeaturedVideo[] = [
  {
    id: "8MHyHYcJzJo",
    title: "Hidden Mountain Chapter 2: Heaven's Threshold Announcement Trailer",
    description:
      "Offizieller Heaven's-Threshold-Trailer fuer Version 2.1, passend zu Cloudstair, Drunken Fist, Reflection Temple und Hidden Mountain.",
    publishedAt: "2026-08-12",
  },
  {
    id: "3_OMV6jjJtM",
    title: "How to Get Drunken Fist Martial Arts and Inner Ways",
    description:
      "Freischaltroute fuer Skystrike Gauntlets, Riven Twinblades und die vier Draught-Inner-Ways vom 3. September.",
    publishedAt: "2026-08-22",
  },
  {
    id: "xQqbepOOLrE",
    title: "Hidden Mountain Expansion Launch Trailer",
    description:
      "Offizieller Version-2.0-Launch-Trailer zu Hidden Mountain, Mohist Hill und Gauntlets.",
    publishedAt: "2026-07-23",
  },
  {
    id: "pNjmMRlOXG4",
    title: "Hidden Mountain Expansion Gameplay Trailer",
    description:
      "Offizielles Gameplay zu vertikaler Erkundung und Leichtkoerper, nuetzlich fuer How-to-fly-Suchen.",
    publishedAt: "2026-07-17",
  },
  {
    id: "5_FI471ah5A",
    title: "Where Winds Meet - Hidden Mountain - Official Announce Trailer",
    description:
      "Offizieller Xbox Games Showcase 2026 Trailer zur Hidden-Mountain-Erweiterung, passend fuer Roadmap-, Xbox- und Upcoming-Update-Suchen.",
    publishedAt: "2026-06-08",
  },
  {
    id: "ozHJ-Pd_mBo",
    title: "Where Winds Meet",
    description:
      "Breit erkennbare Commentary-Perspektive fuer allgemeine Where-Winds-Meet-Discovery-Suchen und Mainstream-Neugier.",
    publishedAt: "2025-12-01",
  },
];
