'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FeaturedImagesGallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const images = [
    {
      src: '/guides/cosmetics/cosmetics-01.webp',
      alt: 'Featured cosmetics image 1'
    },
    {
      src: '/guides/cosmetics/cosmetics-02.webp',
      alt: 'Featured cosmetics image 2'
    },
    {
      src: '/guides/cosmetics/cosmetics-03.webp',
      alt: 'Featured cosmetics image 3'
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
          Featured Collection Preview
        </h2>
        <p className="text-sm text-slate-300">
          Explore the latest appearance sets and exclusive cosmetics
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
            <span className="text-white text-sm font-semibold">Click to enlarge</span>
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
              aria-label={`View image ${idx + 1}`}
            >
              <Image
                src={image.src}
                alt={`Thumbnail ${idx + 1}`}
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
              aria-label="Close lightbox"
            >
              ✕
            </button>

            {/* Zoom and Control Buttons */}
            <div className="absolute top-4 left-4 z-10 flex gap-2">
              <button
                onClick={() => handleZoom('out')}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition"
                aria-label="Zoom out"
                title="Zoom out (−)"
              >
                −
              </button>
              <button
                onClick={() => handleZoom('in')}
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition"
                aria-label="Zoom in"
                title="Zoom in (+)"
              >
                +
              </button>
              <button
                onClick={resetZoom}
                className="px-3 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-white transition text-sm"
                aria-label="Reset zoom"
                title="Reset"
              >
                重置
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
                alt="Enlarged image"
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
              <p>鼠标拖拽移动 · 按钮放大缩小 · ESC关闭</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
