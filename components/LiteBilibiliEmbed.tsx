"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import FallbackImage from "@/components/FallbackImage";

type Props = {
  bvid: string;
  title: string;
  poster: string;
};

export default function LiteBilibiliEmbed({ bvid, title, poster }: Props) {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();
  const language = pathname?.startsWith("/vn") ? "vi" : pathname?.startsWith("/de") ? "de" : "en";
  const labels =
    language === "vi"
      ? { play: "Phát video chính thức", deferred: "Chỉ tải trình phát Bilibili khi bạn nhấn" }
      : language === "de"
        ? { play: "Offizielles Video abspielen", deferred: "Der Bilibili-Player lädt erst nach dem Klick" }
        : { play: "Play official showcase", deferred: "Bilibili loads only after you click" };
  const playerUrl = `https://player.bilibili.com/player.html?bvid=${encodeURIComponent(bvid)}&page=1&high_quality=1&danmaku=0&autoplay=1`;

  if (isLoaded) {
    return (
      <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
        <iframe
          src={playerUrl}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setIsLoaded(true)}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 text-left"
      aria-label={`${labels.play}: ${title}`}
    >
      <FallbackImage
        src={poster}
        alt={title}
        referrerPolicy="no-referrer"
        fill
        sizes="(max-width: 1024px) 100vw, 900px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/25 to-slate-950/80" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-400/95 text-2xl font-bold text-slate-950 shadow-xl transition group-hover:scale-105">▶</span>
        <span className="max-w-2xl text-base font-bold text-white sm:text-xl">{title}</span>
        <span className="text-xs font-semibold text-slate-200">{labels.play}</span>
        <span className="text-xs text-slate-300/80">{labels.deferred}</span>
      </div>
    </button>
  );
}
