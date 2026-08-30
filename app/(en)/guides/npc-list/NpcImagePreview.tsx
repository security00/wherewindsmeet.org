"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useMemo, useRef, useState } from "react";

export type NpcImagePreviewUiText = {
  instruction: string;
  zoomIn: string;
  zoomOut: string;
  reset: string;
  close: string;
};

const DEFAULT_UI_TEXT: NpcImagePreviewUiText = {
  instruction: "Scroll or use buttons to zoom; click background to close",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out",
  reset: "1x",
  close: "Close",
};

type Props = {
  src: string;
  alt: string;
  thumbnailClassName?: string;
  uiText?: Partial<NpcImagePreviewUiText>;
};

export default function NpcImagePreview({ src, alt, thumbnailClassName = "h-32", uiText }: Props) {
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [useLocal, setUseLocal] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const cdn = process.env.NEXT_PUBLIC_CDN_URL;
  const resolvedUiText = useMemo(() => ({ ...DEFAULT_UI_TEXT, ...uiText }), [uiText]);

  const localFallbackSrc = useMemo(() => {
    if (src.startsWith("http://") || src.startsWith("https://")) {
      try {
        return new URL(src).pathname;
      } catch {
        return src;
      }
    }
    return src.startsWith("/") ? src : `/${src}`;
  }, [src]);

  const resolvedSrc = useMemo(() => {
    if (useLocal) return localFallbackSrc;
    if (src.startsWith("http://") || src.startsWith("https://")) return src;
    if (!cdn) return localFallbackSrc;
    return `${cdn}${localFallbackSrc}`;
  }, [cdn, localFallbackSrc, src, useLocal]);

  const adjustZoom = (delta: number) => {
    setZoom((z) => {
      const next = Math.min(4, Math.max(0.5, z + delta));
      return Number(next.toFixed(2));
    });
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) {
        e.preventDefault();
        dialogRef.current.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const prevOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      trigger?.focus();
    };
  }, [open]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    adjustZoom(e.deltaY > 0 ? -0.1 : 0.1);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={`${alt}. ${resolvedUiText.instruction}`}
        className={`relative w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80 ${thumbnailClassName} cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-emerald-400/60`}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <img
          src={resolvedSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
          onError={() => setUseLocal(true)}
        />
      </button>

      {open ? (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-3 sm:p-6"
          onClick={() => setOpen(false)}
          onWheel={handleWheel}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            tabIndex={-1}
            className="relative max-h-[90vh] max-w-[95vw] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/95 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 bg-slate-900/70 px-4 py-2 text-[12px] text-slate-200">
              <span className="text-[11px] text-slate-400">{resolvedUiText.instruction}</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  className="min-h-11 rounded-md border border-slate-700 bg-slate-950 px-3 py-1 hover:border-emerald-400 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                  onClick={(e) => {
                    e.stopPropagation();
                    adjustZoom(0.2);
                  }}
                >
                  {resolvedUiText.zoomIn}
                </button>
                <button
                  type="button"
                  className="min-h-11 rounded-md border border-slate-700 bg-slate-950 px-3 py-1 hover:border-emerald-400 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                  onClick={(e) => {
                    e.stopPropagation();
                    adjustZoom(-0.2);
                  }}
                >
                  {resolvedUiText.zoomOut}
                </button>
                <button
                  type="button"
                  className="min-h-11 rounded-md border border-slate-700 bg-slate-950 px-3 py-1 hover:border-emerald-400 hover:text-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/60"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoom(1);
                  }}
                >
                  {resolvedUiText.reset}
                </button>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="min-h-11 rounded-md border border-slate-700 bg-slate-950 px-3 py-1 hover:border-rose-400 hover:text-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-400/60"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpen(false);
                  }}
                >
                  {resolvedUiText.close}
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
