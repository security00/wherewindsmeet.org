import Image, { type ImageProps } from "next/image";

import { referrerPolicyForAssetSrc, resolveCdnAssetSrc } from "@/lib/image-utils";

type Props = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc?: string;
};

export default function CdnImage({ src, fallbackSrc, alt, referrerPolicy, ...props }: Props) {
  const resolved = resolveCdnAssetSrc(src, fallbackSrc);
  // /sect/* on static.wherewindsmeet.org returns 403 when Referer is not the
  // production origin. workers.dev previews send their own origin.
  // no-referrer matches a direct fetch, which already returns 200.
  const policy = referrerPolicy ?? referrerPolicyForAssetSrc(resolved.src);

  return (
    <Image
      {...props}
      src={resolved.src}
      alt={alt}
      referrerPolicy={policy}
      unoptimized
      {...(resolved.fallbackSrc ? { "data-fallback-src": resolved.fallbackSrc } : {})}
    />
  );
}
