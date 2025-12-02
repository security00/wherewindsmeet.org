/**
 * 图片路径辅助函数
 * 根据环境变量自动切换本地路径和 CDN 路径
 */

const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL;

/**
 * 获取图片的完整 URL
 * @param path - 相对路径，如 "/sect/tianquan.png"
 * @returns 完整的图片 URL
 */
export function getImageUrl(path: string): string {
  // 确保路径以 / 开头
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  // 如果配置了 CDN，使用 CDN URL，否则使用本地路径
  return CDN_URL ? `${CDN_URL}${normalizedPath}` : normalizedPath;
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
  return !!CDN_URL;
}
