'use client';

import { useEffect, useState } from "react";
import CdnImage from "@/components/CdnImageClient";
type ZoomableImageProps = {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  uiText?: Partial<ZoomableImageUiText>;
};

export type ZoomableImageUiText = {
  openAriaLabelTemplate: string; // supports {alt}
  closeLabel: string;
  hintTemplate: string; // supports {pct}
};

const DEFAULT_UI_TEXT: ZoomableImageUiText = {
  openAriaLabelTemplate: "Open full view of {alt}",
  closeLabel: "Close",
  hintTemplate: "Scroll or use +/- to zoom, drag/scroll to pan. Current: {pct}%",
};

export function ZoomableImage({
  src,
  alt,
  caption,
  width = 1650,
  height = 928,
  sizes,
  priority,
  className,
  uiText,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const resolvedUiText = { ...DEFAULT_UI_TEXT, ...uiText };

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
    }
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="w-full focus:outline-none"
        aria-label={resolvedUiText.openAriaLabelTemplate.replace("{alt}", alt)}
      >
        <CdnImage
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={className ?? "h-auto w-full object-cover"}
          priority={priority}
        />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-[95vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-semibold text-slate-100 shadow"
            >
              {resolvedUiText.closeLabel}
            </button>
            <div className="absolute left-3 top-2 flex gap-2 text-xs">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(3, +(z + 0.25).toFixed(2)))}
                className="rounded-full bg-slate-900/80 px-2 py-1 text-slate-100 shadow border border-slate-700/70"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))}
                className="rounded-full bg-slate-900/80 px-2 py-1 text-slate-100 shadow border border-slate-700/70"
              >
                –
              </button>
              <button
                type="button"
                onClick={() => setZoom(1)}
                className="rounded-full bg-slate-900/80 px-2 py-1 text-slate-100 shadow border border-slate-700/70"
              >
                100%
              </button>
            </div>
            <div
              className="max-h-[85vh] max-w-[95vw] overflow-auto rounded-xl bg-slate-900/40 p-2"
              onWheel={(e) => {
                e.preventDefault();
                const delta = e.deltaY > 0 ? -0.1 : 0.1;
                setZoom((z) => {
                  const next = z + delta;
                  return Math.min(3, Math.max(1, +next.toFixed(2)));
                });
                }}
              >
                <div
                  className="flex items-center justify-center"
                  style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: "center center",
                  transition: "transform 120ms ease",
                  }}
                >
                  <CdnImage
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                  className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain"
                  />
                </div>
              </div>
            {caption ? (
              <p className="mt-3 text-center text-xs text-slate-200">
                {caption} •{" "}
                {resolvedUiText.hintTemplate.replace("{pct}", (zoom * 100).toFixed(0))}
              </p>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
