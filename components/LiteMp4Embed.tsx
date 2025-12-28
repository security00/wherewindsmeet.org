"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import FallbackImage from "@/components/FallbackImage";
import { resolveCdnAssetSrc } from "@/lib/image-utils";

type LiteMp4EmbedProps = {
  src: string;
  title: string;
  poster: string;
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

export default function LiteMp4Embed({ src, title, poster, analytics }: LiteMp4EmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const pathname = usePathname();
  const language = pathname?.startsWith("/vn") ? "vi" : pathname?.startsWith("/de") ? "de" : "en";
  const uiText =
    language === "vi"
      ? {
          playAriaTemplate: "Phát clip: {title}",
          clickToPlay: "Nhấn để phát bản xem trước",
          deferred: "Chỉ tải khi bạn nhấn (tiết kiệm dữ liệu)",
        }
      : language === "de"
        ? {
            playAriaTemplate: "Clip abspielen: {title}",
            clickToPlay: "Vorschau abspielen",
            deferred: "Lädt erst beim Klick (spart Daten)",
          }
        : {
            playAriaTemplate: "Play clip: {title}",
            clickToPlay: "Click to play preview",
            deferred: "Loads only on click (saves data)",
          };

  const resolvedPoster = resolveCdnAssetSrc(poster);
  const resolvedVideo = resolveCdnAssetSrc(src);

  if (isPlaying) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
        <video
          className="h-full w-full object-cover"
          controls
          autoPlay
          muted
          playsInline
          preload="metadata"
          aria-label={title}
        >
          <source src={resolvedVideo.src} type="video/mp4" />
          {resolvedVideo.fallbackSrc ? (
            <source src={resolvedVideo.fallbackSrc} type="video/mp4" />
          ) : null}
        </video>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        if (analytics?.eventName) {
          safeTrack(analytics.eventName, {
            video_src: src,
            video_title: title,
            ...(analytics.params || {}),
          });
        }
        setIsPlaying(true);
      }}
      className="group relative block w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 text-left"
      aria-label={uiText.playAriaTemplate.replace("{title}", title)}
    >
      <div className="relative aspect-video w-full">
        <FallbackImage
          src={resolvedPoster.src}
          fallbackSrc={resolvedPoster.fallbackSrc}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 560px"
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/30 to-slate-950/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/90 text-slate-950 text-xl font-semibold shadow-lg shadow-emerald-900/50 transition group-hover:scale-105 group-hover:bg-emerald-400">
            ▶
          </span>
          <span className="px-3 text-center text-xs font-semibold text-slate-100 sm:text-sm">{title}</span>
          <span className="text-xs font-semibold text-slate-100">{uiText.clickToPlay}</span>
          <span className="text-xs text-slate-200/80">{uiText.deferred}</span>
        </div>
      </div>
    </button>
  );
}
