"use client";

import Image from "next/image";
import type { PointerEvent, WheelEvent } from "react";
import { useCallback, useEffect, useRef, useState } from "react";

type ZoomableGuideImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

const MIN_ZOOM = 1;
const MAX_ZOOM = 5;

function clampZoom(value: number) {
  return Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, value));
}

export default function ZoomableGuideImage({
  src,
  alt,
  width,
  height,
  sizes,
  priority,
  className = "h-auto w-full",
}: ZoomableGuideImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const pointersRef = useRef<Map<number, { x: number; y: number }>>(new Map());
  const dragRef = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);
  const pinchRef = useRef<{ startDistance: number; startZoom: number } | null>(null);
  const zoomRef = useRef(zoom);
  const offsetRef = useRef(offset);

  useEffect(() => {
    zoomRef.current = zoom;
    offsetRef.current = offset;
  }, [offset, zoom]);

  const resetView = useCallback(() => {
    setZoom(1);
    setOffset({ x: 0, y: 0 });
    pointersRef.current.clear();
    dragRef.current = null;
    pinchRef.current = null;
    setIsDragging(false);
  }, []);

  const closeViewer = useCallback(() => {
    setIsOpen(false);
    resetView();
  }, [resetView]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeViewer();
      }
      if (event.key === "+" || event.key === "=") {
        setZoom((current) => clampZoom(current + 0.25));
      }
      if (event.key === "-") {
        setZoom((current) => clampZoom(current - 0.25));
      }
      if (event.key === "0") {
        resetView();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeViewer, isOpen, resetView]);

  const zoomIn = () => setZoom((current) => clampZoom(current + 0.25));
  const zoomOut = () => setZoom((current) => clampZoom(current - 0.25));

  const onWheel = (event: WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    const delta = event.deltaY > 0 ? -0.15 : 0.15;
    setZoom((current) => clampZoom(Number((current + delta).toFixed(2))));
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });
    setIsDragging(true);

    if (pointersRef.current.size === 1) {
      dragRef.current = {
        startX: event.clientX,
        startY: event.clientY,
        baseX: offsetRef.current.x,
        baseY: offsetRef.current.y,
      };
      return;
    }

    if (pointersRef.current.size === 2) {
      const points = Array.from(pointersRef.current.values());
      pinchRef.current = {
        startDistance: Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y) || 1,
        startZoom: zoomRef.current,
      };
      dragRef.current = null;
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!pointersRef.current.has(event.pointerId)) return;

    pointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (pointersRef.current.size === 1 && dragRef.current) {
      setOffset({
        x: dragRef.current.baseX + event.clientX - dragRef.current.startX,
        y: dragRef.current.baseY + event.clientY - dragRef.current.startY,
      });
      return;
    }

    if (pointersRef.current.size === 2 && pinchRef.current) {
      const points = Array.from(pointersRef.current.values());
      const distance = Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y) || 1;
      setZoom(clampZoom(Number((pinchRef.current.startZoom * (distance / pinchRef.current.startDistance)).toFixed(2))));
    }
  };

  const endPointer = (event: PointerEvent<HTMLDivElement>) => {
    pointersRef.current.delete(event.pointerId);

    if (pointersRef.current.size === 1) {
      const remaining = Array.from(pointersRef.current.values())[0];
      dragRef.current = {
        startX: remaining.x,
        startY: remaining.y,
        baseX: offsetRef.current.x,
        baseY: offsetRef.current.y,
      };
      pinchRef.current = null;
      return;
    }

    if (pointersRef.current.size === 0) {
      dragRef.current = null;
      pinchRef.current = null;
      setIsDragging(false);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
        aria-label={`Open enlarged view of ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className={`${className} transition duration-200 group-hover:brightness-110`}
        />
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-5"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={closeViewer}
        >
          <div
            className="relative h-[88vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="absolute right-3 top-3 z-10 flex items-center gap-2">
              <button
                type="button"
                onClick={zoomOut}
                className="h-9 min-w-9 rounded-md border border-slate-700 bg-slate-900/90 px-3 text-sm font-semibold text-slate-100 hover:border-amber-300/70"
                aria-label="Zoom out"
              >
                -
              </button>
              <span className="rounded-md border border-slate-700 bg-slate-900/90 px-3 py-2 text-xs font-semibold text-slate-100">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={zoomIn}
                className="h-9 min-w-9 rounded-md border border-slate-700 bg-slate-900/90 px-3 text-sm font-semibold text-slate-100 hover:border-amber-300/70"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={resetView}
                className="h-9 rounded-md border border-slate-700 bg-slate-900/90 px-3 text-xs font-semibold text-slate-100 hover:border-amber-300/70"
              >
                Reset
              </button>
              <button
                type="button"
                onClick={closeViewer}
                className="h-9 min-w-9 rounded-md border border-slate-700 bg-slate-900/90 px-3 text-sm font-semibold text-slate-100 hover:border-amber-300/70"
                aria-label="Close enlarged view"
              >
                X
              </button>
            </div>

            <div
              className={`relative h-full w-full touch-none overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
              onWheel={onWheel}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endPointer}
              onPointerCancel={endPointer}
              onDoubleClick={() => {
                if (zoom > 1.01) resetView();
                else setZoom(2);
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  draggable={false}
                  className="max-h-full max-w-full select-none rounded-lg"
                  style={{
                    transform: `translate3d(${offset.x}px, ${offset.y}px, 0) scale(${zoom})`,
                    transformOrigin: "center center",
                    transition: isDragging ? "none" : "transform 140ms ease-out",
                    willChange: "transform",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
