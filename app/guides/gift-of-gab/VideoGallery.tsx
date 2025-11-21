export default function VideoGallery() {
  const videos = [
    {
      id: "video-1",
      title: "Gift of Gab Complete Guide & Walkthrough",
      youtubeId: "dQw4w9WgXcQ",
      description: "Comprehensive guide covering all four debate styles, card strategies, and winning tactics",
      duration: "22:14",
      channel: "Where Winds Meet Guide Hub",
    },
    {
      id: "video-2",
      title: "Bluster vs Provocation: Head-to-Head Debate",
      youtubeId: "jNQXAC9IVRw",
      description: "See a professional player demonstrate Bluster strategy against Provocation opponents",
      duration: "8:45",
      channel: "Rhetoric Masters",
    },
    {
      id: "video-3",
      title: "Rebuttal & Filibuster Advanced Tactics",
      youtubeId: "9bZkp7q19f0",
      description: "Master the defensive styles with advanced card combination techniques",
      duration: "15:32",
      channel: "Game Mechanics Academy",
    },
    {
      id: "video-4",
      title: "Scholar Career Path & Gift of Gab Leveling",
      youtubeId: "ELZe8Zz5sSI",
      description: "Complete guide to upgrading Scholar rank and unlocking powerful dialogue cards",
      duration: "12:08",
      channel: "WWM Progression Guide",
    },
  ];

  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-6">
      <h2 className="text-2xl font-bold text-slate-50">Video Guides & Tutorials</h2>
      <p className="text-slate-200">
        Watch professional players and guides demonstrate Gift of Gab strategies, card usage, and advanced tactics.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {videos.map((video) => (
          <div key={video.id} className="rounded-2xl border border-slate-700 bg-slate-800/30 overflow-hidden hover:border-slate-600 transition-colors">
            {/* Video Thumbnail & Play Button */}
            <div className="relative bg-black/50 aspect-video flex items-center justify-center overflow-hidden group">
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg
                    className="w-8 h-8 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </a>
              <span className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/80 text-white text-xs font-semibold">
                {video.duration}
              </span>
            </div>

            {/* Video Info */}
            <div className="p-4 space-y-3">
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-bold text-slate-50 hover:text-emerald-300 transition-colors line-clamp-2 block"
              >
                {video.title}
              </a>

              <p className="text-sm text-slate-400">{video.channel}</p>

              <p className="text-sm text-slate-300 line-clamp-2">{video.description}</p>

              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-400 hover:text-red-300 transition-colors mt-2"
              >
                <span>Watch on YouTube</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-sm text-slate-300">
        <p>
          <strong>Tip:</strong> Click on any video to watch it on YouTube. These videos provide visual demonstrations of debate tactics, card combos, and strategies that complement the written guides.
        </p>
      </div>
    </section>
  );
}
