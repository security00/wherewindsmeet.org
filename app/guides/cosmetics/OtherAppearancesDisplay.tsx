'use client';

import { useState } from 'react';
import Image from 'next/image';

type OtherAppearance = {
  id: string;
  name: string;
  chineseName: string;
  category: string;
  image?: string;
  galleryImages?: string[];
  acquisition: {
    method: string;
    cost?: string;
    regularCost?: string;
    discountedCost?: string;
    duration?: string;
    discountAvailable?: boolean;
  };
  rarity: string;
  note?: string;
};

export default function OtherAppearancesDisplay({
  appearances,
}: {
  appearances: OtherAppearance[];
}) {
  const [lightboxImage, setLightboxImage] = useState<{ id: string; image: string } | null>(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState<{ [key: string]: number }>({});
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

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
          Individual Cosmetics & Limited Items
        </h2>
        <p className="text-sm text-slate-300">
          Hairstyles, weapon skins, and special effects to personalize your character
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {appearances.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-slate-700 bg-slate-950/50 overflow-hidden hover:border-emerald-500/50 transition space-y-0"
          >
            {/* Image Section */}
            {(item.image || item.galleryImages) && (
              <div className="space-y-0">
                {/* Main Image Display */}
                {item.galleryImages && item.galleryImages.length > 0 ? (
                  <div>
                    <div
                      className="relative h-48 w-full bg-slate-900 flex items-center justify-center cursor-pointer group hover:bg-slate-800/50 transition overflow-hidden"
                      onClick={() => setLightboxImage({ id: item.id, image: item.galleryImages![selectedImageIdx[item.id] || 0] })}
                    >
                      <Image
                        src={item.galleryImages[selectedImageIdx[item.id] || 0]}
                        alt={item.name}
                        fill
                        className="object-contain p-2 group-hover:scale-105 transition-transform"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        <span className="text-white text-xs font-semibold">Click to enlarge</span>
                      </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    {item.galleryImages.length > 1 && (
                      <div className="bg-slate-900/50 px-3 py-2 flex gap-2 justify-center overflow-x-auto">
                        {item.galleryImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setSelectedImageIdx({ ...selectedImageIdx, [item.id]: idx })}
                            className={`flex-shrink-0 h-12 w-12 rounded border transition overflow-hidden ${
                              (selectedImageIdx[item.id] || 0) === idx
                                ? 'border-emerald-400'
                                : 'border-slate-600 hover:border-slate-500'
                            }`}
                            aria-label={`View image ${idx + 1}`}
                          >
                            <Image
                              src={img}
                              alt={`Thumbnail ${idx + 1}`}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <div
                    className="relative h-48 w-full bg-slate-900 flex items-center justify-center cursor-pointer group hover:bg-slate-800/50 transition overflow-hidden"
                    onClick={() => setLightboxImage({ id: item.id, image: item.image! })}
                  >
                    <Image
                      src={item.image!}
                      alt={item.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <span className="text-white text-xs font-semibold">Click to enlarge</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Content Section */}
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-50">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400">{item.chineseName}</p>
                </div>
                <span className="text-xs text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded whitespace-nowrap flex-shrink-0">
                  {item.rarity}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-700/50">
                <p className="text-xs uppercase tracking-wide text-emerald-300 mb-2">
                  {item.category}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs">
                  <p className="text-slate-400 font-semibold mb-1">
                    {item.acquisition.method}
                  </p>
                  <div className="text-slate-300 space-y-1">
                    {item.acquisition.cost && (
                      <p>
                        <span className="text-emerald-200 font-semibold">
                          {item.acquisition.cost}
                        </span>
                      </p>
                    )}
                    {item.acquisition.discountAvailable && (
                      <div className="space-y-1">
                        <p>
                          <span className="line-through text-slate-500">
                            {item.acquisition.regularCost}
                          </span>
                        </p>
                        <p className="text-emerald-300 font-semibold">
                          On Sale: {item.acquisition.discountedCost}
                        </p>
                      </div>
                    )}
                    {item.acquisition.duration && (
                      <p className="text-slate-400 italic">{item.acquisition.duration}</p>
                    )}
                  </div>
                </div>
              </div>

              {item.note && (
                <div className="rounded bg-emerald-500/10 border border-emerald-500/20 p-2 text-xs text-emerald-200">
                  ✨ {item.note}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
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
          <div className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
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
                src={lightboxImage.image}
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
