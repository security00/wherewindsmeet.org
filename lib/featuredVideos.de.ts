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
    id: "S7u9JuVHIyM",
    title: "Now's a Great Time to Jump into Where Winds Meet (Huge Updates)",
    description:
      "Rueckkehrer-freundlicher Ueberblick fuer breite Suchanfragen wie where winds meet, where the winds meet und ob sich der Einstieg in Version 1.7 lohnt.",
    publishedAt: "2026-06-10",
  },
  {
    id: "5_FI471ah5A",
    title: "Where Winds Meet - Hidden Mountain - Official Announce Trailer",
    description:
      "Offizieller Xbox Games Showcase 2026 Trailer zur Hidden-Mountain-Erweiterung, passend fuer Roadmap-, Xbox- und Upcoming-Update-Suchen.",
    publishedAt: "2026-06-08",
  },
  {
    id: "Dmp0G0JFPGA",
    title: "This Where Winds Meet Update Is WILD (HUGE New Map!)",
    description:
      "Creator-Coverage zur neuen Karte und zum Imperial-Palace-Update, ideal fuer Spieler, die wissen wollen, ob sich die Rueckkehr lohnt.",
    publishedAt: "2026-05-28",
  },
  {
    id: "0xhVPMCk5H0",
    title: "Where Winds Meet Had A HUGE Expansion",
    description:
      "Expansion-Eindruck eines bekannten MMO-Creators, nuetzlich fuer Spieler, die grosse Updates vergleichen und eine Rueckkehr abwaegen.",
    publishedAt: "2026-04-02",
  },
  {
    id: "ozHJ-Pd_mBo",
    title: "Where Winds Meet",
    description:
      "Breit erkennbare Commentary-Perspektive fuer allgemeine Where-Winds-Meet-Discovery-Suchen und Mainstream-Neugier.",
    publishedAt: "2025-12-01",
  },
];
