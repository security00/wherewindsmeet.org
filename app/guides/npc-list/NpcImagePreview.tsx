"use client";

import { useEffect, useMemo, useState } from "react";

type Props = {
  src: string;
  alt: string;
  thumbnailClassName?: string;
};

export default function NpcImagePreview({ src, alt, thumbnailClassName = "h-32" }: Props) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [useLocal, setUseLocal] = useState(false);
  const cdn = process.env.NEXT_PUBLIC_CDN_URL;

  const resolvedSrc = useMemo(() => {
    const normalized = src.startsWith("/") ? src : `/${src}`;
    if (!cdn || useLocal) return normalized;
    return `${cdn}${normalized}`;
  }, [cdn, src, useLocal]);

  const adjustZoom = (delta: number) => {
    setZoom((z) => {
      const next = Math.min(4, Math.max(0.5, z + delta));
      return Number(next.toFixed(2));
    });
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    adjustZoom(e.deltaY > 0 ? -0.1 : 0.1);
  };

  return (
    <>
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 ${thumbnailClassName} cursor-zoom-in`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <img
          src={resolvedSrc}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover object-center"
          onError={() => setUseLocal(true)}
        />
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6"
          onClick={() => setOpen(false)}
          onWheel={handleWheel}
        >
          <div
            className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/95 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/70 px-4 py-2 text-[12px] text-slate-200">
              <span className="text-[11px] text-slate-400">Scroll or use buttons to zoom; click background to close</span>
              <div className="flex gap-2">
                <button
                  className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1 hover:border-emerald-400 hover:text-emerald-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    adjustZoom(0.2);
                  }}
                >
                  Zoom in
                </button>
                <button
                  className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1 hover:border-emerald-400 hover:text-emerald-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    adjustZoom(-0.2);
                  }}
                >
                  Zoom out
                </button>
                <button
                  className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1 hover:border-emerald-400 hover:text-emerald-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoom(1);
                  }}
                >
                  1x
                </button>
                <button
                  className="rounded-md border border-slate-700 bg-slate-950 px-3 py-1 hover:border-rose-400 hover:text-rose-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                >
                  Close
                </button>
              </div>
            </div>

            <div className="max-h-[80vh] overflow-auto p-3 sm:p-4" onWheel={handleWheel}>
              <div className="mx-auto w-full overflow-auto">
                <img
                  src={resolvedSrc}
                  alt={alt}
                  className="block max-w-full"
                  style={{ transform: `scale(${zoom})`, transformOrigin: "top left" }}
                  onError={() => setUseLocal(true)}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
