'use client';

import dynamic from "next/dynamic";

const JianghuMap = dynamic(() => import("../components/JianghuMap"), {
  ssr: false,
  loading: () => (
    <div className="relative h-[480px] w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-inner shadow-slate-950/40 sm:h-[560px]">
      <div className="flex h-full items-center justify-center text-sm text-slate-400">
        Loading map...
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <div className="space-y-10">
      <JianghuMap />

      <section className="card-wuxia rounded-3xl p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Global Launch <span className="text-ink-gold">Preview Stream</span>
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Where Winds Meet is an open-world wuxia action RPG set in a turbulent
                era of ancient China. You roam a living Jianghu, mastering graceful
                martial arts, light-foot movement, and powerful inner cultivation
                while choosing your own path between wandering hero, court intrigue,
                and free exploration.
              </p>
              <p>
                This global launch hub collects guides, builds,
                and codes to help players on PC, console, and mobile get the most out
                of every journey.
              </p>
            </div>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border-2 border-slate-800/50 shadow-2xl shadow-black/50 group">
            <div className="absolute inset-0 border-brush opacity-50 z-10 pointer-events-none"></div>
            <iframe
              src="https://www.youtube-nocookie.com/embed/2cxhuAwDFl4?start=5&rel=0&modestbranding=1&playsinline=1"
              title="Where Winds Meet - Global Launch Preview Stream"
              className="h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
