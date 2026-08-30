const missingInDeAndVi = [
  "/guides/bosses/feng-ruzhi",
  "/guides/codes",
  "/guides/imperial-decree",
  "/guides/qinchuan",
  "/guides/pvp-tier-list",
  "/guides/sunken-city-lake",
  "/guides/tier-list",
  "/guides/to-friends-to-the-end",
  "/guides/travel-permit",
  "/guides/unholy-prophecy",
  "/guides/verdant-flute",
  "/guides/weapons/tier-list",
];

const missingInVi = [
  "/guides/one-leaf-one-life",
];

export const localeFallbackRedirects = Object.freeze([
  ...missingInDeAndVi.flatMap((destination) =>
    ["de", "vn"].map((prefix) => ({
      source: `/${prefix}${destination}`,
      destination,
      permanent: true,
    })),
  ),
  ...missingInVi.map((destination) => ({
    source: `/vn${destination}`,
    destination,
    permanent: true,
  })),
]);
