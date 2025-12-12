"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc?: string;
};

export default function FallbackImage({ src, fallbackSrc, onError, alt, ...props }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      unoptimized
      onError={(e) => {
        onError?.(e);
        if (!fallbackSrc) return;
        if (currentSrc === fallbackSrc) return;
        setCurrentSrc(fallbackSrc);
      }}
    />
  );
}
