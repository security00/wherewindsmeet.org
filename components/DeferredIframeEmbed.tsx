"use client";

import { useState, type IframeHTMLAttributes } from "react";
import FallbackImage from "@/components/FallbackImage";
import { resolveCdnAssetSrc } from "@/lib/image-utils";

type DeferredIframeEmbedProps = {
  src: string;
  title: string;
  loadLabel: string;
  privacyNote: string;
  className?: string;
  poster?: string;
  allow?: string;
  sandbox?: string;
  referrerPolicy?: IframeHTMLAttributes<HTMLIFrameElement>["referrerPolicy"];
};

export function DeferredIframeEmbed({
  src,
  title,
  loadLabel,
  privacyNote,
  className = "aspect-video",
  poster = "/background/bg4.webp",
  allow,
  sandbox,
  referrerPolicy = "strict-origin-when-cross-origin",
}: DeferredIframeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const resolvedPoster = resolveCdnAssetSrc(poster);

  return (
    <div className={`relative w-full overflow-hidden bg-slate-900/60 ${className}`}>
      {isLoaded ? (
        <iframe
          src={src}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow={allow}
          sandbox={sandbox}
          referrerPolicy={referrerPolicy}
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0">
          <FallbackImage
            src={resolvedPoster.src}
            fallbackSrc={resolvedPoster.fallbackSrc}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-35"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950/95" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="max-w-xl text-sm font-semibold text-slate-100 sm:text-base">{title}</p>
            <p className="max-w-xl text-xs leading-relaxed text-slate-300 sm:text-sm">{privacyNote}</p>
            <button
              type="button"
              onClick={() => setIsLoaded(true)}
              className="rounded-full border border-emerald-400/60 bg-emerald-500/15 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300 hover:bg-emerald-500/25"
            >
              {loadLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
