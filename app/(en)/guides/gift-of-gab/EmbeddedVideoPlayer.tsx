import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";

interface EmbeddedVideoProps {
  videoId: string;
  title: string;
  description?: string;
  sourceLabel: string;
}

export default function EmbeddedVideoPlayer({ videoId, title, description, sourceLabel }: EmbeddedVideoProps) {
  return (
    <figure className="space-y-3">
      <LiteYouTubeEmbed
        videoId={videoId}
        title={title}
        poster="/guides/gift-of-gab/gameplay.jpg"
        analytics={{ eventName: "guide_video_play", params: { guide: "gift-of-gab" } }}
      />
      <div className="space-y-1">
        <p className="font-semibold text-slate-50 text-sm">{title}</p>
        {description && <p className="text-xs text-slate-400">{description}</p>}
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex text-xs font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
        >
          {sourceLabel}
        </a>
      </div>
    </figure>
  );
}
