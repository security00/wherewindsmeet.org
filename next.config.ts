import type { NextConfig } from "next";

// Suppress baseline-browser-mapping stale-data warnings during build.
if (!process.env.BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA) {
  process.env.BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA = "true";
}
if (!process.env.BROWSERSLIST_IGNORE_OLD_DATA) {
  process.env.BROWSERSLIST_IGNORE_OLD_DATA = "true";
}

// Final guard: drop baseline-browser-mapping console warnings to avoid noisy builds.
const originalWarn = console.warn;
console.warn = (...args) => {
  const first = args[0];
  if (typeof first === "string" && first.includes("[baseline-browser-mapping]")) {
    return;
  }
  originalWarn(...args);
};

const nextConfig: NextConfig = {
  turbopack: {
    // Force project root here to avoid Turbopack picking a parent lockfile.
    root: __dirname,
  },
  async redirects() {
    const legacyRedirects: Array<{ source: string; destination: string }> = [
      // GSC: legacy/expired URLs -> current canonical pages
      {
        source: "/guides/where-winds-meet-pvp-tier-list-best-builds",
        destination: "/guides/pvp-tier-list",
      },
      { source: "/builds/pve-dps", destination: "/guides/builds" },
      { source: "/guides/first-3-hours-guide", destination: "/guides/new-players" },
      { source: "/world-map", destination: "/tools/interactive-map" },
      { source: "/builds/pvp-duelist", destination: "/guides/builds" },
      {
        source: "/guides/where-winds-meet-heaven-quake-spear-build-guide",
        destination: "/guides/weapons/spear",
      },
      {
        source: "/database/weapons/strategic-sword",
        destination: "/guides/weapons/sword",
      },
      {
        source: "/database/weapons/vernal-umbrella",
        destination: "/guides/weapons/umbrella",
      },
      { source: "/database/weapons/panacea-fan", destination: "/guides/weapons/fan" },
      { source: "/database/weapons/nameless-spear", destination: "/guides/weapons/spear" },
      {
        source: "/database/weapons/infernal-twinblades",
        destination: "/guides/weapons/dual-blades",
      },
      { source: "/database/weapons/inkwell-fan", destination: "/guides/weapons/fan" },
      { source: "/builds/pve-tank", destination: "/guides/builds" },
      { source: "/guides/where-winds-meet-all-builds-tier-list", destination: "/guides/tier-list" },
      { source: "/guides/is-where-winds-meet-for-you", destination: "/guides" },
      { source: "/tools/xp-calculator", destination: "/tools" },
      {
        source: "/builds/dual-blades-build-guide",
        destination: "/guides/weapons/dual-blades",
      },
      { source: "/database/weapons/mortal-rope-dart", destination: "/guides/weapons/rope-dart" },
      { source: "/guides/where-winds-meet-nameless-sword-build-guide", destination: "/guides/weapons/sword" },
      { source: "/guides/where-winds-meet-bell-strike-splendor-pvp-build", destination: "/guides/pvp-tier-list" },
      { source: "/tools/build-planner", destination: "/tools" },
      { source: "/guides/where-winds-meet-dual-blades-build-guide", destination: "/guides/weapons/dual-blades" },
      { source: "/guides/where-winds-meet-strategic-sword-build-guide", destination: "/guides/weapons/sword" },
      { source: "/guides/where-winds-meet-not-mmo-wuxia-open-world", destination: "/guides" },
      { source: "/guides/beginner-guide", destination: "/guides/new-players" },
      { source: "/database/weapons/soulshade-umbrella", destination: "/guides/weapons/umbrella" },
      { source: "/database", destination: "/guides/weapons" },
      { source: "/guides/where-winds-meet-bamboo-cut-wind-pvp-build", destination: "/guides/pvp-tier-list" },
      { source: "/codes", destination: "/guides/codes" },
      { source: "/guides/where-winds-meet-best-internal-arts-routes", destination: "/guides/tier-list" },
      { source: "/guides/where-winds-meet-healer-build-guide", destination: "/guides/builds" },
      { source: "/guides/where-winds-meet-qinghe-internal-arts-guide", destination: "/guides/tier-list" },
      { source: "/builds", destination: "/guides/builds" },
      { source: "/guides/kaifeng-internal-arts-locations-route", destination: "/guides/tier-list" },
      { source: "/tools/drop-table", destination: "/tools" },
      { source: "/fast-travel-and-movement", destination: "/guides/new-players" },
      { source: "/guides/combat-guide-beginner-builds", destination: "/guides/new-players" },
      { source: "/disclaimer", destination: "/terms" },
      // Some legacy URLs contained spaces/unicode and may appear in either encoded form.
      {
        source:
          "/guides/Where%20Winds%20Meet%20Is%20Not%20an%20MMO%20%E2%80%93%20It's%20a%20Wuxia%20Red%20Dead%20Redemption%202",
        destination: "/guides",
      },
      {
        source:
          "/guides/Where%20Winds%20Meet%20Is%20Not%20an%20MMO%20%E2%80%93%20It%27s%20a%20Wuxia%20Red%20Dead%20Redemption%202",
        destination: "/guides",
      },
    ];

    return legacyRedirects.map((redirect) => ({
      ...redirect,
      permanent: true,
    }));
  },
  images: {
    // Avoid Next.js image proxy to prevent CDN fetch issues; serve images directly.
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.wherewindsmeetgame.com",
      },
      {
        protocol: "https",
        hostname: "yysls-build-na.fp.ps.easebar.com",
      },
      {
        protocol: "https",
        hostname: "www.ludens.com.tw",
      },
      {
        protocol: "https",
        hostname: "wherewindsmeet.wiki.fextralife.com",
      },
      {
        protocol: "https",
        hostname: "*.r2.dev",
      },
      {
        protocol: "https",
        hostname: "static.wherewindsmeet.org",
      },
    ],
  },
  env: {
    BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA: "true",
    BROWSERSLIST_IGNORE_OLD_DATA: "true",
  },
};

export default nextConfig;
