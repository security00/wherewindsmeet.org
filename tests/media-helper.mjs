/**
 * Test helper: Check if media is shipped (locally or via CDN)
 */

import { existsSync } from "node:fs";

const CDN_URL = "https://static.wherewindsmeet.org";

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
  
  try {
    const response = await fetch(cdnUrl, { method: "HEAD" });
    // Video files may return 403 if R2 has access controls enabled;
    // treat 403 as "shipped" for MP4 since they're on CDN but restricted
    if (response.ok) return true; // 200-299
    if (response.status === 403 && publicPath.endsWith(".mp4")) return true;
    return false;
  } catch {
    return false;
  }
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
