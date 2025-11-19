'use client';

import JianghuMap from "../components/JianghuMap";

export default function Home() {
  return (
    <div className="space-y-10">
      <JianghuMap />

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              Global Launch Preview Stream
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Where Winds Meet is an open-world wuxia action RPG set in a turbulent
              era of ancient China. You roam a living Jianghu, mastering graceful
              martial arts, light-foot movement, and powerful inner cultivation
              while choosing your own path between wandering hero, court intrigue,
              and free exploration. This global launch hub collects guides, builds,
              and codes to help players on PC, console, and mobile get the most out
              of every journey.
            </p>
          </div>

          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-emerald-700/70 bg-black/80">
            <iframe
              src="https://www.youtube-nocookie.com/embed/2cxhuAwDFl4?start=5"
              title="Where Winds Meet - Global Launch Preview Stream"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
