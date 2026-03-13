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
  output: 'export',
  images: {
    unoptimized: true,
  },
  env: {
    BASELINE_BROWSER_MAPPING_IGNORE_OLD_DATA: "true",
    BROWSERSLIST_IGNORE_OLD_DATA: "true",
  },
};

export default nextConfig;
