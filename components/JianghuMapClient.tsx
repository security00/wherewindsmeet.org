'use client';

import dynamic from "next/dynamic";

const JianghuMap = dynamic(() => import("./JianghuMap"), {
  ssr: false,
  loading: () => (
    <div className="relative h-[480px] w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-inner shadow-slate-950/40 sm:h-[560px]">
      <div className="flex h-full items-center justify-center text-sm text-slate-400">
        Loading map...
      </div>
    </div>
  ),
});

export default function JianghuMapClient() {
  return <JianghuMap />;
}
