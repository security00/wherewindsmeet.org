/**
 * Test helper: Check if media is shipped (locally or via CDN)
 */

import { existsSync } from "node:fs";

const CDN_URL = "https://static.wherewindsmeet.org";
const SITE_REFERRER = "https://wherewindsmeet.org/";

/**
 * static.wherewindsmeet.org returns 200 for an empty Referer and for
 * https://wherewindsmeet.org/. Any other Referer (GitHub Actions, workers.dev)
 * is Cloudflare 1010/1011 and HTTP 403. Same rule as lib/cdn-referrer-policy.mjs.
 * HEAD is tried first; a rejected probe retries with the allowed site Referer,
 * then a one-byte GET, so a single hotlink or challenge response is not a miss.
 */
const CDN_PROBES = [
  { method: "HEAD", referrerPolicy: "no-referrer" },
  { method: "HEAD", referrer: SITE_REFERRER, referrerPolicy: "unsafe-url" },
  { method: "GET", referrerPolicy: "no-referrer", headers: { Range: "bytes=0-0" } },
  {
    method: "GET",
    referrer: SITE_REFERRER,
    referrerPolicy: "unsafe-url",
    headers: { Range: "bytes=0-0" },
  },
];

async function cdnProbeIsShipped(cdnUrl, publicPath) {
  for (const init of CDN_PROBES) {
    try {
      const response = await fetch(cdnUrl, init);
      const status = response.status;
      try {
        await response.body?.cancel?.();
      } catch {
        // Closing the body must not turn a successful probe into a miss.
      }
      if (response.ok || status === 206) return true;
      if (response.status === 404) return false;
      // Restricted publisher clips are on the CDN but not anonymously readable.
      if (response.status === 403 && publicPath.endsWith(".mp4")) return true;
    } catch {
      // Try the next probe. A thrown request is not proof the object is absent.
    }
  }
  return false;
}

/**
 * Check if a media file is shipped with the app.
 * A file is considered shipped if it exists locally in public/ OR is available on CDN.
 * 
 * @param {string} publicPath - Path starting with "public/", e.g. "public/background/1.webp"
 * @returns {Promise<boolean>} True if file exists locally or on CDN
 */
export async function isMediaShipped(publicPath) {
  // Check local file first (fast path)
  if (existsSync(new URL(`../${publicPath}`, import.meta.url))) {
    return true;
  }
  
  // Not local - check CDN
  // Convert public/path/file.ext -> path/file.ext for CDN
  const cdnPath = publicPath.replace(/^public\//, "");
  const cdnUrl = `${CDN_URL}/${cdnPath}`;
  return cdnProbeIsShipped(cdnUrl, publicPath);
}

/**
 * Synchronous check - only checks local files.
 * Use isMediaShipped() for tests that can be async.
 * 
 * @param {string} publicPath - Path starting with "public/"
 * @returns {boolean} True if file exists locally
 */
export function isMediaShippedSync(publicPath) {
  return existsSync(new URL(`../${publicPath}`, import.meta.url));
}

/**
 * Check multiple media files in parallel.
 * 
 * @param {string[]} publicPaths - Array of paths starting with "public/"
 * @returns {Promise<Map<string, boolean>>} Map of path -> isShipped
 */
export async function checkMediaShipped(publicPaths) {
  const results = await Promise.all(
    publicPaths.map(async (path) => [path, await isMediaShipped(path)])
  );
  return new Map(results);
}

/**
 * Assert that a media file is shipped (local or CDN).
 * Throws with descriptive message if not shipped.
 * 
 * @param {string} publicPath - Path starting with "public/"
 * @param {string} [message] - Optional custom error message
 */
export async function assertMediaShipped(publicPath, message) {
  const shipped = await isMediaShipped(publicPath);
  if (!shipped) {
    const defaultMessage = `${publicPath} should be shipped (local or CDN)`;
    throw new Error(message || defaultMessage);
  }
}
