import EmbeddedVideoPlayer from "./EmbeddedVideoPlayer";

export type EmbeddedVideo = {
  id: string;
  videoId: string;
  title: string;
  description: string;
};

export type EmbeddedVideoGalleryUiText = {
  title: string;
  intro: string;
  privacyTitle: string;
  privacyText: string;
};

const DEFAULT_VIDEOS: EmbeddedVideo[] = [
  {
    id: "video-1",
    videoId: "CZrZCx9vGyU",
    title: "Gift of Gab Complete Guide",
    description: "Learn all debate styles, card strategies, and how to win every persuasion battle",
  },
  {
    id: "video-2",
    videoId: "Jd315KSy9-w",
    title: "Debate Strategies & Card Combos",
    description: "Master advanced tactics and card combination techniques for each debate style",
  },
  {
    id: "video-3",
    videoId: "Rv26cKdKqCE",
    title: "Scholar Career & Gift of Gab Leveling",
    description: "Complete guide to unlocking and upgrading the Scholar career for powerful advantages",
  },
];

const DEFAULT_UI_TEXT: EmbeddedVideoGalleryUiText = {
  title: "Video Guides",
  intro: "Watch these embedded tutorials to see Gift of Gab gameplay, strategies, and progression in action.",
  privacyTitle: "Privacy Notice",
  privacyText:
    "These videos use YouTube's privacy-enhanced mode (nocookie), which doesn't set cookies or store your watch history unless you click \"Watch on YouTube.\"",
};

type Props = {
  videos?: EmbeddedVideo[];
  uiText?: Partial<EmbeddedVideoGalleryUiText>;
};

export default function EmbeddedVideoGallery({ videos, uiText }: Props) {
  const resolvedUiText: EmbeddedVideoGalleryUiText = { ...DEFAULT_UI_TEXT, ...uiText };
  const resolvedVideos = videos ?? DEFAULT_VIDEOS;

  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-50 mb-2">{resolvedUiText.title}</h2>
        <p className="text-sm text-slate-300">{resolvedUiText.intro}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {resolvedVideos.map((video) => (
          <EmbeddedVideoPlayer
            key={video.id}
            videoId={video.videoId}
            title={video.title}
            description={video.description}
          />
        ))}
      </div>

      <div className="rounded-2xl border border-slate-700 bg-slate-800/30 p-4 text-sm text-slate-300">
        <p>
          <strong>{resolvedUiText.privacyTitle}:</strong> {resolvedUiText.privacyText}
        </p>
      </div>
    </section>
  );
}
