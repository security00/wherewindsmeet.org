'use client';
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import CdnImage from "@/components/CdnImageClient";
import type { WalkthroughStep } from "./page";
import { resolveCdnAssetSrc } from "@/lib/image-utils";

type LightboxState = {
  src: string;
  alt: string;
};

export default function WalkthroughGallery({ steps }: { steps: WalkthroughStep[] }) {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const resolvedLightbox = lightbox ? resolveCdnAssetSrc(lightbox.src) : null;

  const open = (src: string, alt: string) => {
    setLightbox({ src, alt: alt && alt.trim().length > 0 ? alt : "Sợi Định Mệnh – ảnh minh họa nhiệm vụ" });
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const close = () => {
    setLightbox(null);
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const zoomIn = () => setZoom((z) => Math.min(5, z + 0.25));
  const zoomOut = () => setZoom((z) => Math.max(1, z - 0.25));
  const resetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const delta = event.deltaY;
    setZoom((current) => {
      const next = Math.min(5, Math.max(1, delta > 0 ? current - 0.2 : current + 0.2));
      return next;
    });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStart) return;
    const deltaX = event.clientX - dragStart.x;
    const deltaY = event.clientY - dragStart.y;
    setPan((prev) => ({ x: prev.x + deltaX / zoom, y: prev.y + deltaY / zoom }));
    setDragStart({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStart(null);
  };

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-2">
        {steps.map((step, idx) => (
          <div
            key={step.title}
            className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-sm shadow-slate-900/60"
          >
            {step.image && (
              <button
                type="button"
                onClick={() => open(step.image!.src, step.image!.alt)}
                className="relative aspect-[16/9] w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <CdnImage
                  src={step.image.src}
                  alt={step.image.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                <div
                  className="absolute bottom-2 right-2 rounded-full bg-slate-900/70 p-2 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-400/40"
                  aria-hidden="true"
                >
                  🔍
                </div>
              </button>
            )}
            <div className="flex flex-1 flex-col gap-2 p-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-emerald-300">
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold ring-1 ring-emerald-400/40">
                  Bước {idx + 1}
                </span>
                <span className="text-slate-400">Cốt truyện / Encounter</span>
              </div>
              <h3 className="text-lg font-semibold text-slate-50">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate-200">{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            onClick={close}
            className="absolute inset-0 h-full w-full cursor-zoom-out"
            aria-label="Đóng ảnh phóng to"
          />
          <div className="relative z-10 w-full max-w-6xl space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl bg-slate-900/80 p-3">
              <div className="text-sm font-semibold text-slate-100 line-clamp-2">{lightbox.alt}</div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={zoomOut}
                  className="rounded-lg bg-slate-800 px-3 py-1 text-sm text-slate-100 hover:bg-slate-700"
                  aria-label="Thu nhỏ"
                >
                  −
                </button>
                <span className="min-w-[64px] text-center text-xs font-semibold text-emerald-200">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={zoomIn}
                  className="rounded-lg bg-slate-800 px-3 py-1 text-sm text-slate-100 hover:bg-slate-700"
                  aria-label="Phóng to"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={resetZoom}
                  className="rounded-lg bg-slate-800 px-3 py-1 text-sm text-slate-100 hover:bg-slate-700"
                >
                  Đặt lại
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-lg bg-emerald-600 px-3 py-1 text-sm font-semibold text-white hover:bg-emerald-500"
                >
                  Đóng
                </button>
              </div>
            </div>
            <div
              className="relative h-[75vh] overflow-hidden rounded-xl border border-slate-800 bg-slate-950"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
                <div className="flex min-h-full justify-center p-4">
                  <img
                  src={resolvedLightbox?.src ?? lightbox.src}
                  {...(resolvedLightbox?.fallbackSrc ? { "data-fallback-src": resolvedLightbox.fallbackSrc } : {})}
                  alt={lightbox.alt || "Sợi Định Mệnh – ảnh minh họa nhiệm vụ"}
                  className="max-w-none select-none cursor-grab active:cursor-grabbing"
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                    transformOrigin: "center top",
                  }}
                  draggable={false}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
