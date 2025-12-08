'use client';

import Image from "next/image";
import { useMemo, useState } from "react";

type LiteYouTubeEmbedProps = {
  videoId: string;
  title: string;
  start?: number;
  poster?: string;
};

export function LiteYouTubeEmbed({ videoId, title, start = 0, poster = "/background/bg.webp" }: LiteYouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const iframeSrc = useMemo(
    () =>
      `https://www.youtube-nocookie.com/embed/${videoId}?start=${start}&rel=0&modestbranding=1&playsinline=1&autoplay=1`,
    [videoId, start]
  );

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-slate-800/50 shadow-2xl shadow-black/50 group">
      <div className="absolute inset-0 border-brush opacity-50 z-10 pointer-events-none"></div>

      {isPlaying ? (
        <iframe
          src={iframeSrc}
          title={title}
          className="h-full w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="relative h-full w-full overflow-hidden text-left"
          aria-label={`Play ${title}`}
        >
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(max-width: 1024px) 100vw, 720px"
            className="object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/45 to-slate-950/80" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/90 text-slate-950 text-2xl font-semibold shadow-lg shadow-emerald-900/50 transition group-hover:scale-105 group-hover:bg-emerald-400">
              ▶
            </span>
            <p className="text-sm font-semibold text-slate-100">Click to play preview</p>
            <p className="text-xs text-slate-200/80">Deferred load to save mobile data</p>
          </div>
        </button>
      )}
    </div>
  );
}
