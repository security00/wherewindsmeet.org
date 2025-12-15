"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export type LightboxItem = {
  src: string;
  fallbackSrc?: string;
  alt: string;
  caption?: string;
};

const MIN_SCALE = 0.5;
const MAX_SCALE = 8;

type Props = {
  items: LightboxItem[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
};

type LightboxUiText = {
  zoomOutAria: string;
  zoomInAria: string;
  reset: string;
  close: string;
  prev: string;
  next: string;
};

export default function LightboxGallery({ items, columns = 2, className }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);
  const pathname = usePathname();
  const language = pathname?.startsWith("/vn") ? "vi" : pathname?.startsWith("/de") ? "de" : "en";

  const uiText: LightboxUiText =
    language === "vi"
      ? {
          zoomOutAria: "Thu nhỏ",
          zoomInAria: "Phóng to",
          reset: "Đặt lại",
          close: "Đóng",
          prev: "Trước",
          next: "Tiếp",
        }
      : language === "de"
        ? {
            zoomOutAria: "Rauszoomen",
            zoomInAria: "Reinzoomen",
            reset: "Zurücksetzen",
            close: "Schließen",
            prev: "Zurück",
            next: "Weiter",
          }
        : {
            zoomOutAria: "Zoom out",
            zoomInAria: "Zoom in",
            reset: "Reset",
            close: "Close",
            prev: "Prev",
            next: "Next",
          };

  // Prevent background scroll when lightbox is open.
  useEffect(() => {
    if (activeIndex === null) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [activeIndex]);

  const gridCols = useMemo(() => {
    switch (columns) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-2";
      case 3:
        return "grid-cols-3";
      default:
        return "grid-cols-4";
    }
  }, [columns]);

  if (!items?.length) return null;

  return (
    <>
      <div className={clsx("grid gap-3 sm:gap-4", gridCols, className)}>
        {items.map((item, idx) => (
          <button
            key={`${item.src}-${idx}`}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className="group text-left"
          >
            <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 50vw, 33vw"
                priority={idx < 2}
                unoptimized
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!item.fallbackSrc) return;
                  if (img.dataset.fallbackApplied === "true") return;
                  img.dataset.fallbackApplied = "true";
                  img.src = item.fallbackSrc;
                }}
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
            </div>
            {item.caption ? (
              <p className="mt-2 text-xs text-slate-400 leading-snug">{item.caption}</p>
            ) : null}
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null ? (
          <Lightbox
            items={items}
            index={activeIndex}
            onClose={close}
            setIndex={setActiveIndex}
            uiText={uiText}
          />
        ) : null}
      </AnimatePresence>
    </>
  );
}

function Lightbox({
  items,
  index,
  onClose,
  setIndex,
  uiText,
}: {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
  uiText: LightboxUiText;
}) {
  const item = items[index];

  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);

  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const dragRef = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);
  const pinchRef = useRef<{
    startDist: number;
    startScale: number;
    startMidX: number;
    startMidY: number;
    startOffsetX: number;
    startOffsetY: number;
  } | null>(null);

  // Keep latest values available to pointer-event handlers without re-subscribing listeners.
  const scaleRef = useRef(scale);
  const offsetRef = useRef(offset);

  useEffect(() => {
    scaleRef.current = scale;
    offsetRef.current = offset;
  }, [scale, offset]);

  const clampScale = (s: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s));

  const zoomIn = () => setScale((s) => clampScale(s * 1.2));
  const zoomOut = () => setScale((s) => clampScale(s / 1.2));
  const resetView = useCallback(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
    pointersRef.current.clear();
    dragRef.current = null;
    pinchRef.current = null;
    setIsInteracting(false);
  }, []);

  const goToIndex = useCallback(
    (nextIndex: number) => {
      resetView();
      setIndex(nextIndex);
    },
    [resetView, setIndex]
  );

  const next = useCallback(
    () => goToIndex((index + 1) % items.length),
    [goToIndex, index, items.length]
  );
  const prev = useCallback(
    () => goToIndex((index - 1 + items.length) % items.length),
    [goToIndex, index, items.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        next();
      }
      if (e.key === "ArrowLeft") {
        prev();
      }
      if (e.key === "0") {
        resetView();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, onClose, prev, resetView]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const factor = e.deltaY > 0 ? 0.9 : 1.1;
    setScale((s) => clampScale(s * factor));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    setIsInteracting(true);

    if (pointersRef.current.size === 1) {
      dragRef.current = {
        startX: e.clientX,
        startY: e.clientY,
        baseX: offsetRef.current.x,
        baseY: offsetRef.current.y,
      };
    } else if (pointersRef.current.size === 2) {
      const pts = Array.from(pointersRef.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const midX = (pts[0].x + pts[1].x) / 2;
      const midY = (pts[0].y + pts[1].y) / 2;
      dragRef.current = null;
      pinchRef.current = {
        startDist: dist || 1,
        startScale: scaleRef.current,
        startMidX: midX,
        startMidY: midY,
        startOffsetX: offsetRef.current.x,
        startOffsetY: offsetRef.current.y,
      };
    }
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointersRef.current.has(e.pointerId)) return;
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointersRef.current.size === 1 && dragRef.current) {
      const dx = e.clientX - dragRef.current.startX;
      const dy = e.clientY - dragRef.current.startY;
      setOffset({
        x: dragRef.current.baseX + dx,
        y: dragRef.current.baseY + dy,
      });
      return;
    }

    if (pointersRef.current.size === 2 && pinchRef.current) {
      const pts = Array.from(pointersRef.current.values());
      const dist = Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
      const midX = (pts[0].x + pts[1].x) / 2;
      const midY = (pts[0].y + pts[1].y) / 2;
      setScale(clampScale(pinchRef.current.startScale * (dist / pinchRef.current.startDist)));
      setOffset({
        x: pinchRef.current.startOffsetX + (midX - pinchRef.current.startMidX),
        y: pinchRef.current.startOffsetY + (midY - pinchRef.current.startMidY),
      });
    }
  };

  const endPointer = (e: React.PointerEvent) => {
    pointersRef.current.delete(e.pointerId);
    if (pointersRef.current.size < 2) pinchRef.current = null;
    if (pointersRef.current.size === 1) {
      const remaining = Array.from(pointersRef.current.values())[0];
      dragRef.current = {
        startX: remaining.x,
        startY: remaining.y,
        baseX: offsetRef.current.x,
        baseY: offsetRef.current.y,
      };
    }
    if (pointersRef.current.size === 0) {
      dragRef.current = null;
      setIsInteracting(false);
    }
  };

  const onDoubleClick = () => {
    if (scale > 1.01) resetView();
    else setScale(2);
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        className="relative w-full max-w-6xl h-[85vh] rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls */}
        <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
          <button
            type="button"
            onClick={zoomOut}
            className="rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-xs text-slate-100 hover:border-emerald-400/60"
            aria-label={uiText.zoomOutAria}
          >
            −
          </button>
          <button
            type="button"
            onClick={zoomIn}
            className="rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-xs text-slate-100 hover:border-emerald-400/60"
            aria-label={uiText.zoomInAria}
          >
            +
          </button>
          <button
            type="button"
            onClick={resetView}
            className="rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-xs text-slate-100 hover:border-emerald-400/60"
          >
            {uiText.reset}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-xs text-slate-100 hover:border-emerald-400/60"
          >
            {uiText.close}
          </button>
        </div>

        <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
          <button
            type="button"
            onClick={prev}
            className="rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-xs text-slate-100 hover:border-emerald-400/60"
          >
            {uiText.prev}
          </button>
          <button
            type="button"
            onClick={next}
            className="rounded-md border border-slate-700 bg-slate-900/80 px-2 py-1 text-xs text-slate-100 hover:border-emerald-400/60"
          >
            {uiText.next}
          </button>
        </div>

        {/* Viewport */}
        <div
          className={clsx(
            "relative h-full w-full overflow-hidden touch-none",
            scale > 1 ? "cursor-grab" : "cursor-default",
            isInteracting && "cursor-grabbing"
          )}
          onWheel={onWheel}
          onDoubleClick={onDoubleClick}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endPointer}
          onPointerCancel={endPointer}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                draggable={false}
                className="max-h-full max-w-full select-none"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!item.fallbackSrc) return;
                  if (img.dataset.fallbackApplied === "true") return;
                  img.dataset.fallbackApplied = "true";
                  img.src = item.fallbackSrc;
                }}
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "center center",
                  transition: isInteracting ? "none" : "transform 120ms ease-out",
                  willChange: "transform",
                }}
              />
            </div>
          </div>
        </div>

        {item.caption ? (
          <div className="absolute bottom-0 left-0 right-0 p-3 text-sm text-slate-200 bg-gradient-to-t from-black/70 to-transparent">
            {item.caption}
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
