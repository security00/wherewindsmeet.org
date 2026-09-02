/**
 * 图片路径辅助函数
 * 统一管理 CDN 资源地址，并提供「CDN 优先、失败回退到本地」所需的解析能力。
 */

export const DEFAULT_CDN_URL = "https://static.wherewindsmeet.org";

const normalizeCdnBase = (value: string) => value.replace(/\/+$/, "");

const getConfiguredCdnBase = () => {
  const raw = process.env.NEXT_PUBLIC_CDN_URL?.trim();
  if (!raw) return DEFAULT_CDN_URL;
  return raw;
};

export function getCdnBaseUrl(): string {
  return normalizeCdnBase(getConfiguredCdnBase());
}

const isAbsoluteUrl = (value: string) =>
  value.startsWith("http://") || value.startsWith("https://") || value.startsWith("//");

const ensureLeadingSlash = (value: string) => (value.startsWith("/") ? value : `/${value}`);

const stripCdnBaseToLocalPath = (src: string, cdnBaseUrl: string): string | null => {
  try {
    const normalizedSrc = src.startsWith("//") ? `https:${src}` : src;
    const srcUrl = new URL(normalizedSrc);
    const baseUrl = new URL(cdnBaseUrl);

    if (srcUrl.hostname !== baseUrl.hostname) return null;
    return srcUrl.pathname || "/";
  } catch {
    return null;
  }
};

export type ResolvedAssetSrc = {
  src: string;
  fallbackSrc?: string;
};

/**
 * 获取图片的完整 URL
 * @param path - 相对路径，如 "/sect/tianquan.png"
 * @returns 完整的图片 URL
 */
export function getImageUrl(path: string): string {
  const normalizedPath = ensureLeadingSlash(path);
  return `${getCdnBaseUrl()}${normalizedPath}`;
}

/**
 * 获取优化后的图片 URL（用于 Next.js Image 组件）
 * @param path - 相对路径
 * @returns 图片 URL
 */
export function getOptimizedImageUrl(path: string): string {
  return getImageUrl(path);
}

/**
 * 检查是否使用 CDN
 */
export function isUsingCDN(): boolean {
  return !!process.env.NEXT_PUBLIC_CDN_URL?.trim();
}

/**
 * 将图片/资源 URL 解析为「CDN 地址」。
 * - 传入本地路径（/foo/bar.webp）→ src 使用 CDN，无本地回退
 * - 传入 CDN 绝对地址（https://static.wherewindsmeet.org/foo/bar.webp）→ 保持原样，无本地回退
 * - 传入第三方绝对地址（YouTube、NetEase 等）→ 保持原样
 */
export function resolveCdnAssetSrc(src: string, fallbackSrc?: string): ResolvedAssetSrc {
  const cdnBaseUrl = getCdnBaseUrl();

  // Only preserve explicitly provided absolute third-party fallback URLs
  const normalizedFallbackSrc =
    fallbackSrc && isAbsoluteUrl(fallbackSrc) && !fallbackSrc.includes(new URL(cdnBaseUrl).hostname)
      ? fallbackSrc
      : undefined;

  if (!src) return { src, fallbackSrc: normalizedFallbackSrc };

  if (!isAbsoluteUrl(src) && !src.startsWith("data:") && !src.startsWith("blob:")) {
    const localPath = ensureLeadingSlash(src);
    return {
      src: `${cdnBaseUrl}${localPath}`,
      fallbackSrc: normalizedFallbackSrc,
    };
  }

  // For absolute URLs (CDN or third-party), keep src as-is, no local fallback
  return {
    src,
    fallbackSrc: normalizedFallbackSrc,
  };
}
