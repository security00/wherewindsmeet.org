'use client';

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

function JianghuMapLoading() {
  const pathname = usePathname();
  const language = pathname?.startsWith("/vn") ? "vi" : pathname?.startsWith("/de") ? "de" : "en";
  const label =
    language === "vi" ? "Đang tải bản đồ…" : language === "de" ? "Karte wird geladen…" : "Loading map...";

  return (
    <div className="relative h-[620px] w-full overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-inner shadow-slate-950/40 sm:h-[700px]">
      <div className="flex h-full items-center justify-center text-sm text-slate-400">
        {label}
      </div>
    </div>
  );
}

const JianghuMap = dynamic(() => import("./JianghuMap"), {
  loading: () => <JianghuMapLoading />,
});

export default function JianghuMapClient() {
  // 固定容器高度，减少首页首屏因延迟加载带来的布局抖动（CLS）。
  return (
    <div className="relative min-h-[620px] sm:min-h-[700px]">
      <JianghuMap />
    </div>
  );
}
