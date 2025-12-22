'use client';

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import FallbackImage from "@/components/FallbackImage";
import { resolveCdnAssetSrc } from "@/lib/image-utils";

type LiteYouTubeEmbedProps = {
  videoId: string;
  title: string;
  start?: number;
  poster?: string;
  analytics?: {
    eventName: string;
    params?: Record<string, string | number | boolean>;
  };
};

type GtagFunction = (...args: unknown[]) => void;

function safeTrack(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFunction }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", eventName, params || {});
}

export function LiteYouTubeEmbed({
  videoId,
  title,
  start = 0,
  poster = "/background/bg.webp",
  analytics,
}: LiteYouTubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const pathname = usePathname();
  const language = pathname?.startsWith("/vn") ? "vi" : pathname?.startsWith("/de") ? "de" : "en";

  const uiText =
    language === "vi"
      ? {
          playAriaTemplate: "Phát video: {title}",
          clickToPlay: "Nhấn để phát bản xem trước",
          deferred: "Chỉ tải khi bạn nhấn (tiết kiệm dữ liệu di động)",
        }
      : language === "de"
        ? {
            playAriaTemplate: "Video abspielen: {title}",
            clickToPlay: "Vorschau abspielen",
            deferred: "Lädt erst beim Klick (spart mobile Daten)",
          }
        : {
            playAriaTemplate: "Play {title}",
            clickToPlay: "Click to play preview",
            deferred: "Deferred load to save mobile data",
          };
  const iframeSrc = useMemo(
    () =>
      `https://www.youtube-nocookie.com/embed/${videoId}?start=${start}&rel=0&modestbranding=1&playsinline=1&autoplay=1`,
    [videoId, start]
  );

  const resolvedPoster = useMemo(() => resolveCdnAssetSrc(poster), [poster]);

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
          onClick={() => {
            if (analytics?.eventName) {
              safeTrack(analytics.eventName, {
                video_id: videoId,
                video_title: title,
                ...(analytics.params || {}),
              });
            }
            setIsPlaying(true);
          }}
          className="relative h-full w-full overflow-hidden text-left"
          aria-label={uiText.playAriaTemplate.replace("{title}", title)}
        >
          <FallbackImage
            src={resolvedPoster.src}
            fallbackSrc={resolvedPoster.fallbackSrc}
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
            <p className="text-sm font-semibold text-slate-100">{uiText.clickToPlay}</p>
            <p className="text-xs text-slate-200/80">{uiText.deferred}</p>
          </div>
        </button>
      )}
    </div>
  );
}
