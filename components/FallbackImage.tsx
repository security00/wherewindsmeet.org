"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type Props = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc?: string;
};

export default function FallbackImage({ src, fallbackSrc, onError, alt, ...props }: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleError: NonNullable<ImageProps["onError"]> = (event) => {
    onError?.(event);
    if (!fallbackSrc) return;
    if (currentSrc === fallbackSrc) return;
    setCurrentSrc(fallbackSrc);
  };

  // next/image currently drops referrerPolicy from the rendered img element.
  // Use a native image only when a remote host explicitly requires this policy.
  if (props.referrerPolicy) {
    const { fill, priority, sizes, width, height, style, ...imgProps } = props;
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        {...imgProps}
        src={currentSrc}
        alt={alt}
        referrerPolicy={props.referrerPolicy}
        sizes={sizes}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        loading={priority ? "eager" : props.loading ?? "lazy"}
        fetchPriority={priority ? "high" : props.fetchPriority}
        style={
          fill
            ? { position: "absolute", height: "100%", width: "100%", inset: 0, color: "transparent", ...style }
            : style
        }
        onError={handleError}
      />
    );
  }

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      unoptimized
      onError={handleError}
    />
  );
}
