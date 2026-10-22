/**
 * static.wherewindsmeet.org hotlink rule (Cloudflare 1011, Vary: referer):
 * Referer https://wherewindsmeet.org/ and an empty Referer return 200;
 * any other Referer, including *.workers.dev previews, returns 403.
 * /sect/* is in that rule. Omitting Referer keeps the same CDN URL working
 * on preview hosts. Forward the result as the img referrerPolicy.
 *
 * @param {string} src Absolute asset URL (already CDN-resolved).
 * @returns {"no-referrer" | undefined}
 */
export function referrerPolicyForAssetSrc(src) {
  if (!src) return undefined;
  try {
    const normalized = src.startsWith("//") ? `https:${src}` : src;
    const isAbsolute =
      normalized.startsWith("http://") ||
      normalized.startsWith("https://") ||
      normalized.startsWith("//");
    if (!isAbsolute) return undefined;
    const url = new URL(normalized);
    if (url.hostname === "static.wherewindsmeet.org" && url.pathname.startsWith("/sect/")) {
      return "no-referrer";
    }
  } catch {
    return undefined;
  }
  return undefined;
}
