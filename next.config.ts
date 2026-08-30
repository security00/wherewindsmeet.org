import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { localeFallbackRedirects } from "./i18n/locale-fallbacks.mjs";

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

const redirectConfig: Partial<NextConfig> =
  process.env.NEXT_STATIC_EXPORT === "1"
    ? {}
    : {
        async redirects() {
          return [
            {
              source: "/:path*",
              has: [{ type: "host", value: "www.wherewindsmeet.org" }],
              destination: "https://wherewindsmeet.org/:path*",
              permanent: true,
            },
            ...localeFallbackRedirects,
          ];
        },
      };

const nextConfig: NextConfig = {
  // Production runs through OpenNext on Cloudflare Workers. Keep a static-export
  // mode solely for the generated-site SEO regression crawler.
  output: process.env.NEXT_STATIC_EXPORT === "1" ? "export" : undefined,
  images: {
    unoptimized: true,
  },
  env: {
    BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA: "true",
    BROWSERSLIST_IGNORE_OLD_DATA: "true",
  },
  experimental: {
    // Next 16's CLI path occasionally receives a truncated `tsc --showConfig`
    // stream in this build environment. The compiler API performs the same
    // validation without the flaky subprocess capture.
    useTypeScriptCli: false,
  },
  // Static-export SEO checks use public/_redirects. The Worker runtime keeps
  // native redirects as a fallback behind the canonical-host wrapper.
  ...redirectConfig,
};

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
