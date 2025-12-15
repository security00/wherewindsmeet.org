'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from "next/navigation";

export default function FeaturedImagesGallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const pathname = usePathname();
  const language = pathname?.startsWith("/vn") ? "vi" : pathname?.startsWith("/de") ? "de" : "en";

  const uiText =
    language === "vi"
      ? {
          title: "Bộ sưu tập nổi bật",
          intro: "Xem nhanh các set ngoại hình và item tùy biến nổi bật",
          clickToEnlarge: "Nhấn để phóng to",
          viewImageAriaTemplate: "Xem ảnh {n}",
          closeLightboxAria: "Đóng ảnh phóng to",
          zoomOutAria: "Thu nhỏ",
          zoomInAria: "Phóng to",
          reset: "Đặt lại",
          resetAria: "Đặt lại zoom",
          instructions: "Kéo chuột để di chuyển · Nút +/- để zoom · ESC để đóng",
          enlargedAlt: "Ảnh phóng to",
        }
      : language === "de"
        ? {
            title: "Vorschau: Highlights",
            intro: "Kurzer Blick auf ausgewählte Appearance-Sets und Cosmetics",
            clickToEnlarge: "Klicken zum Vergrößern",
            viewImageAriaTemplate: "Bild {n} ansehen",
            closeLightboxAria: "Lightbox schließen",
            zoomOutAria: "Rauszoomen",
            zoomInAria: "Reinzoomen",
            reset: "Zurücksetzen",
            resetAria: "Zoom zurücksetzen",
            instructions: "Ziehen zum Verschieben · +/- zum Zoomen · ESC zum Schließen",
            enlargedAlt: "Vergrößertes Bild",
          }
        : {
            title: "Featured Collection Preview",
            intro: "Explore the latest appearance sets and exclusive cosmetics",
            clickToEnlarge: "Click to enlarge",
            viewImageAriaTemplate: "View image {n}",
            closeLightboxAria: "Close lightbox",
            zoomOutAria: "Zoom out",
            zoomInAria: "Zoom in",
            reset: "Reset",
            resetAria: "Reset zoom",
            instructions: "Drag to pan · Use +/- to zoom · ESC to close",
            enlargedAlt: "Enlarged image",
          };

  const buildImageAlt = (index: number) => {
    if (language === "vi") return `Ảnh cosmetics nổi bật ${index}`;
    if (language === "de") return `Highlight-Cosmetics Bild ${index}`;
    return `Featured cosmetics image ${index}`;
  };

  const images = [
    {
      src: '/guides/cosmetics/cosmetics-01.webp',
      alt: buildImageAlt(1),
    },
    {
      src: '/guides/cosmetics/cosmetics-02.webp',
      alt: buildImageAlt(2),
    },
    {
      src: '/guides/cosmetics/cosmetics-03.webp',
      alt: buildImageAlt(3),
    }
  ];

  const handleZoom = (direction: 'in' | 'out') => {
    setZoom((prev) => {
      const newZoom = direction === 'in' ? prev + 0.2 : prev - 0.2;
      return Math.max(1, Math.min(newZoom, 5));
    });
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  return (
    <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
      <div className="space-y-2 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
          {uiText.title}
        </h2>
        <p className="text-sm text-slate-300">
          {uiText.intro}
        </p>
      </div>

      {/* Main Image Display */}
      <div className="relative bg-slate-950/70 p-4 rounded-2xl">
        <div
          className="relative h-96 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center cursor-pointer group hover:border-emerald-500/50 transition"
          onClick={() => {
            setLightboxImage(images[selectedImageIdx].src);
            resetZoom();
          }}
        >
          <Image
            src={images[selectedImageIdx].src}
            alt={images[selectedImageIdx].alt}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
            <span className="text-white text-sm font-semibold">{uiText.clickToEnlarge}</span>
          </div>
        </div>

        {/* Thumbnail Navigation with Lazy Loading */}
        <div className="flex gap-3 mt-4 justify-center">
          {images.map((image, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImageIdx(idx)}
              className={`flex-shrink-0 h-20 w-20 rounded border-2 transition overflow-hidden ${
                selectedImageIdx === idx
                  ? 'border-emerald-400'
                  : 'border-slate-700 hover:border-slate-600'
              }`}
              aria-label={uiText.viewImageAriaTemplate.replace("{n}", String(idx + 1))}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={80}
                height={80}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Image Counter */}
        <div className="text-center mt-3 text-sm text-slate-400">
          <span className="text-emerald-300 font-semibold">{selectedImageIdx + 1}</span> / <span>{images.length}</span>
        </div>
      </div>

      {/* Lightbox Modal - Lazy loaded only when opened */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => {
            setLightboxImage(null);
            resetZoom();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              setLightboxImage(null);
              resetZoom();
            }
          }}
          tabIndex={0}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setLightboxImage(null);
                resetZoom();
              }}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition"
              aria-label={uiText.closeLightboxAria}
            >
              ✕
            </button>

            {/* Zoom and Control Buttons */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <button
                onClick={() => handleZoom('out')}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition"
                aria-label={uiText.zoomOutAria}
                title={`${uiText.zoomOutAria} (−)`}
              >
                −
              </button>
              <button
                onClick={() => handleZoom('in')}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition"
                aria-label={uiText.zoomInAria}
                title={`${uiText.zoomInAria} (+)`}
              >
                +
              </button>
              <button
                onClick={resetZoom}
                className="px-3 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition text-sm"
                aria-label={uiText.resetAria}
                title={uiText.reset}
              >
                {uiText.reset}
              </button>
            </div>

            {/* Zoom Level Display */}
            <div className="absolute bottom-4 left-4 z-10 bg-slate-800 px-3 py-1 rounded text-sm text-slate-300">
              {Math.round(zoom * 100)}%
            </div>

            {/* Image Display Container */}
            <div
              className="relative w-screen max-w-full flex items-center justify-center bg-slate-950 overflow-hidden cursor-grab active:cursor-grabbing"
              style={{ height: '90vh' }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <Image
                src={lightboxImage}
                alt={uiText.enlargedAlt}
                fill
                className="select-none pointer-events-none object-contain"
                style={{
                  transform: `scale(${zoom}) translate(${pan.x / zoom}px, ${pan.y / zoom}px)`,
                  transition: isDragging ? 'none' : 'transform 0.1s ease-out'
                }}
              />
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 right-4 z-10 bg-slate-800 px-3 py-2 rounded text-xs text-slate-400 max-w-xs">
              <p>{uiText.instructions}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
