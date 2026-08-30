import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";

type DeferredYouTubeGalleryProps = {
  videos: Array<{
    id: string;
    title: string;
    caption: string;
  }>;
  locale: "en" | "de" | "vi";
  sourceLabel: string;
  analyticsContext: string;
};

export function DeferredYouTubeGallery({
  videos,
  locale,
  sourceLabel,
  analyticsContext,
}: DeferredYouTubeGalleryProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {videos.map((video) => (
        <article
          key={video.id}
          className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60"
        >
          <LiteYouTubeEmbed
            videoId={video.id}
            title={video.title}
            poster="/background/bg4.webp"
            analytics={{
              eventName: "guide_video_play",
              params: { guide: analyticsContext, locale },
            }}
          />
          <p className="text-sm font-medium text-slate-100">{video.title}</p>
          <p className="text-xs leading-relaxed text-slate-300">{video.caption}</p>
          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-xs font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            {sourceLabel}
          </a>
        </article>
      ))}
    </div>
  );
}
