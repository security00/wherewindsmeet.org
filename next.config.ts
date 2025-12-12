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
  async rewrites() {
    const cdnUrl = process.env.NEXT_PUBLIC_CDN_URL;

    if (cdnUrl) {
      return [
        {
          source: '/vn/:path*',
          destination: '/:path*',
        },
        {
          source: '/de/:path*',
          destination: '/:path*',
        },
        {
          source: '/design/:path*',
          destination: '/design/:path*',
        },
        {
          source: '/background/:path*',
          destination: `${cdnUrl}/background/:path*`,
        },
        {
          source: '/sect/:path*',
          destination: `${cdnUrl}/sect/:path*`,
        },
        {
          source: '/bosses/:path*',
          destination: `${cdnUrl}/bosses/:path*`,
        },
        {
          source: '/guides/:path*',
          destination: `${cdnUrl}/guides/:path*`,
        },
        {
          source: '/items/:path*',
          destination: `${cdnUrl}/items/:path*`,
        },
        {
          source: '/martial-arts/:path*',
          destination: `${cdnUrl}/martial-arts/:path*`,
        },
        {
          source: '/tier-list/:path*',
          destination: `${cdnUrl}/tier-list/:path*`,
        },
        {
          source: '/weapons/:path*',
          destination: `${cdnUrl}/weapons/:path*`,
        },
        {
          source: '/free-outfits/:path*',
          destination: `${cdnUrl}/free-outfits/:path*`,
        },
        {
          source: '/illustrations/:path*',
          destination: `${cdnUrl}/illustrations/:path*`,
        },
      ];
    }

    return [
      {
        source: '/vn/:path*',
        destination: '/:path*',
      },
      {
        source: '/de/:path*',
        destination: '/:path*',
      },
      {
        source: '/design/:path*',
        destination: '/design/:path*',
      },
    ];
  },
};

export default nextConfig;
