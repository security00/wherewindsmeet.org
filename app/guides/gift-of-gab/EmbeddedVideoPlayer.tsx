import React from "react";

interface EmbeddedVideoProps {
  videoId: string;
  title: string;
  description?: string;
}

export default function EmbeddedVideoPlayer({ videoId, title, description }: EmbeddedVideoProps) {
  return (
    <figure className="space-y-3">
      <div className="relative w-full rounded-2xl border border-slate-700 overflow-hidden bg-black/40">
        {/* iframe with nocookie domain for privacy */}
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-slate-50 text-sm">{title}</p>
        {description && <p className="text-xs text-slate-400">{description}</p>}
      </div>
    </figure>
  );
}
