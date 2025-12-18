"use client";

import Image, { type ImageProps } from "next/image";

import { resolveCdnAssetSrc } from "@/lib/image-utils";

type Props = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc?: string;
};

export default function CdnImageClient({ src, fallbackSrc, alt, ...props }: Props) {
  const resolved = resolveCdnAssetSrc(src, fallbackSrc);

  return (
    <Image
      {...props}
      src={resolved.src}
      alt={alt}
      unoptimized
      {...(resolved.fallbackSrc ? { "data-fallback-src": resolved.fallbackSrc } : {})}
    />
  );
}
