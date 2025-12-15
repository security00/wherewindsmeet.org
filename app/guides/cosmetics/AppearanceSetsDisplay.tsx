'use client';

import { useState } from 'react';
import Image from 'next/image';
import { usePathname } from "next/navigation";

type AppearanceSet = {
  id: string;
  name: string;
  chineseName: string;
  tagline: string;
  inspiration?: string;
  character?: string;
  characterDescription?: string;
  theme: string;
  image: string;
  galleryImages?: string[];
  designHighlights: string[];
  contents: string[];
  features: string[];
  acquisition: {
    method: string;
    cost: string;
    availableDate?: string;
  };
  rarity: string;
  theme_category: string;
};

export default function AppearanceSetsDisplay({
  sets,
}: {
  sets: AppearanceSet[];
}) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedImageIdx, setSelectedImageIdx] = useState<{ [key: string]: number }>({});
  const [lightboxImage, setLightboxImage] = useState<{ setId: string; imageIdx: number } | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const pathname = usePathname();
  const language = pathname?.startsWith("/vn") ? "vi" : pathname?.startsWith("/de") ? "de" : "en";

  const uiText =
    language === "vi"
      ? {
          sectionTitle: "Các set ngoại hình nổi bật",
          sectionIntro: "Danh sách set được tuyển chọn — kèm chủ đề, thành phần, cách sở hữu và ảnh phóng to",
          clickToEnlarge: "Nhấn để phóng to",
          availablePrefix: "Có từ:",
          inspiration: "Cảm hứng",
          featuredCharacter: "Nhân vật đại diện",
          themeDesign: "Chủ đề & thiết kế",
          setContents: "Trong set có",
          features: "Tính năng",
          closeLightboxAria: "Đóng ảnh phóng to",
          zoomOutAria: "Thu nhỏ",
          zoomInAria: "Phóng to",
          reset: "Đặt lại",
          resetAria: "Đặt lại zoom",
          instructions: "Kéo chuột để di chuyển · Nút +/- để zoom · ESC để đóng",
          imageCounterPrefix: "Ảnh",
          imageCounterOf: "trên",
          imageCounterMain: "Chính",
          prevImageAria: "Ảnh trước",
          nextImageAria: "Ảnh tiếp theo",
          altSetFallback: "Set ngoại hình",
          altMainImage: "Ảnh chính",
          altGalleryImage: "Ảnh {n}",
          thumbMainSuffix: "thumbnail ảnh chính",
        }
      : language === "de"
        ? {
            sectionTitle: "Ausgewählte Appearance-Sets",
            sectionIntro: "Kuratiert: Thema, Inhalt, Features, Beschaffung und zoomfähige Screenshots",
            clickToEnlarge: "Klicken zum Vergrößern",
            availablePrefix: "Verfügbar:",
            inspiration: "Inspiration",
            featuredCharacter: "Vorgestellter Charakter",
            themeDesign: "Thema & Design",
            setContents: "Set-Inhalt",
            features: "Features",
            closeLightboxAria: "Lightbox schließen",
            zoomOutAria: "Rauszoomen",
            zoomInAria: "Reinzoomen",
            reset: "Zurücksetzen",
            resetAria: "Zoom zurücksetzen",
            instructions: "Ziehen zum Verschieben · +/- zum Zoomen · ESC zum Schließen",
            imageCounterPrefix: "Bild",
            imageCounterOf: "von",
            imageCounterMain: "Hauptbild",
            prevImageAria: "Vorheriges Bild",
            nextImageAria: "Nächstes Bild",
            altSetFallback: "Appearance-Set",
            altMainImage: "Hauptbild",
            altGalleryImage: "Galeriebild {n}",
            thumbMainSuffix: "Hauptbild-Thumbnail",
          }
        : {
            sectionTitle: "Featured Appearance Sets",
            sectionIntro: "Curated cosmetic sets inspired by Mohist legends and jianghu culture",
            clickToEnlarge: "Click to enlarge",
            availablePrefix: "Available:",
            inspiration: "Inspiration",
            featuredCharacter: "Featured Character",
            themeDesign: "Theme & Design",
            setContents: "Set Contents",
            features: "Features",
            closeLightboxAria: "Close lightbox",
            zoomOutAria: "Zoom out",
            zoomInAria: "Zoom in",
            reset: "Reset",
            resetAria: "Reset zoom",
            instructions: "Drag to pan · Use buttons to zoom · ESC to close",
            imageCounterPrefix: "Image",
            imageCounterOf: "of",
            imageCounterMain: "Main",
            prevImageAria: "Previous image",
            nextImageAria: "Next image",
            altSetFallback: "Appearance set",
            altMainImage: "Main image",
            altGalleryImage: "Gallery image {n}",
            thumbMainSuffix: "main image thumbnail",
          };

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

  const activeLightboxSet = lightboxImage ? sets.find((s) => s.id === lightboxImage.setId) : null;
  const activeLightboxIsMain = lightboxImage ? lightboxImage.imageIdx === -1 : true;
  const activeLightboxSrc = lightboxImage
    ? activeLightboxIsMain
      ? activeLightboxSet?.image ?? ""
      : activeLightboxSet?.galleryImages?.[lightboxImage.imageIdx] ?? activeLightboxSet?.image ?? ""
    : "";
  const activeLightboxName = activeLightboxSet?.name ?? uiText.altSetFallback;
  const activeLightboxAlt = lightboxImage
    ? `${activeLightboxName} - ${
        activeLightboxIsMain
          ? uiText.altMainImage
          : uiText.altGalleryImage.replace("{n}", String(lightboxImage.imageIdx + 1))
      }`
    : activeLightboxName;
  const activeLightboxThumbAlt = `${activeLightboxName} ${uiText.thumbMainSuffix}`;

  return (
    <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
      <div className="space-y-2 mb-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-50">
          {uiText.sectionTitle}
        </h2>
        <p className="text-sm text-slate-300">
          {uiText.sectionIntro}
        </p>
      </div>

      <div className="space-y-4">
        {sets.map((set) => (
          <div
            key={set.id}
            className="rounded-2xl border border-slate-700 bg-slate-950/50 overflow-hidden hover:border-emerald-500/50 transition"
          >
            {/* Header - Always visible */}
            <button
              onClick={() =>
                setExpandedId(expandedId === set.id ? null : set.id)
              }
              className="w-full p-4 flex items-start justify-between gap-4 hover:bg-slate-900/50 transition text-left"
            >
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg font-semibold text-slate-50">
                    {set.name}
                  </h3>
                  <span className="text-xs text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded">
                    {set.rarity}
                  </span>
                  <span className="text-xs text-slate-400">
                    {set.chineseName}
                  </span>
                </div>
                <p className="text-sm text-slate-300 italic">{set.tagline}</p>
                <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
                  <div>
                    <span className="text-emerald-200 font-semibold">
                      {set.acquisition.cost}
                    </span>
                  </div>
                  <div>
                    <span className="text-emerald-200 font-semibold">
                      {set.acquisition.method}
                    </span>
                  </div>
                  {set.acquisition.availableDate && (
                    <div>
                      {uiText.availablePrefix} {set.acquisition.availableDate}
                    </div>
                  )}
                </div>
              </div>
              <div className="text-slate-400 flex-shrink-0">
                {expandedId === set.id ? '▼' : '▶'}
              </div>
            </button>

            {/* Expanded Details */}
            {expandedId === set.id && (
              <div className="border-t border-slate-700 bg-slate-900/30 space-y-4">
                {/* Image Gallery */}
                <div className="relative bg-slate-950/70 p-4">
                  <div className="relative h-64 md:h-96 rounded-lg overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center cursor-pointer group hover:border-emerald-500/50 transition" onClick={() => setLightboxImage({ setId: set.id, imageIdx: selectedImageIdx[set.id] || 0 })}>
                    <Image
                      src={set.galleryImages?.[selectedImageIdx[set.id] || 0] || set.image}
                      alt={`${set.name} - ${uiText.imageCounterPrefix} ${(selectedImageIdx[set.id] || 0) + 1}`}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                      <span className="text-white text-sm font-semibold">{uiText.clickToEnlarge}</span>
                    </div>
                  </div>

                  {/* Image Navigation */}
                  {set.galleryImages && set.galleryImages.length > 0 && (
                    <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
                      <button
                        onClick={() => setSelectedImageIdx({...selectedImageIdx, [set.id]: -1})}
                        className={`flex-shrink-0 h-16 w-16 rounded border-2 transition overflow-hidden ${
                          (selectedImageIdx[set.id] ?? -1) === -1
                            ? 'border-emerald-400'
                            : 'border-slate-700 hover:border-slate-600'
                        }`}
                      >
                        <Image
                          src={set.image}
                          alt={`${set.name} main`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </button>
                      {set.galleryImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImageIdx({...selectedImageIdx, [set.id]: idx})}
                          className={`flex-shrink-0 h-16 w-16 rounded border-2 transition overflow-hidden ${
                            (selectedImageIdx[set.id] ?? 0) === idx
                              ? 'border-emerald-400'
                              : 'border-slate-700 hover:border-slate-600'
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${set.name} - ${idx + 1}`}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-4 space-y-4">
                {set.inspiration && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-300 mb-2">
                      {uiText.inspiration}
                    </p>
                    <p className="text-sm text-slate-200">{set.inspiration}</p>
                  </div>
                )}

                {set.character && (
                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-300 mb-2">
                      {uiText.featuredCharacter}
                    </p>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-slate-50">
                        {set.character}
                      </p>
                      <p className="text-sm text-slate-300">
                        {set.characterDescription}
                      </p>
                    </div>
                  </div>
                )}

                <div>
                  <p className="text-xs uppercase tracking-wide text-emerald-300 mb-2">
                    {uiText.themeDesign}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-slate-50">
                      {set.theme}
                    </p>
                    <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
                      {set.designHighlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-300 mb-2">
                      {uiText.setContents}
                    </p>
                    <ul className="text-sm text-slate-300 space-y-1">
                      {set.contents.map((content, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          {content}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wide text-emerald-300 mb-2">
                      {uiText.features}
                    </p>
                    <ul className="text-sm text-slate-300 space-y-1">
                      {set.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && activeLightboxSet && (
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
                src={activeLightboxSrc}
                alt={activeLightboxAlt || `${activeLightboxSet.name} zoomed image`}
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

            {/* Navigation Info */}
            <div className="bg-slate-800 px-6 py-3 text-center text-sm text-slate-300">
              <p>
                {uiText.imageCounterPrefix}{" "}
                <span className="text-emerald-300 font-semibold">
                  {lightboxImage.imageIdx === -1 ? uiText.imageCounterMain : lightboxImage.imageIdx + 1}
                </span>
                {" "}{uiText.imageCounterOf}{" "}
                <span className="text-emerald-300 font-semibold">
                  {(sets.find((s) => s.id === lightboxImage.setId)?.galleryImages?.length || 0) + 1}
                </span>
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute bottom-20 left-0 right-0 flex justify-center gap-4 px-4">
              <button
                onClick={() => {
                  const set = sets.find((s) => s.id === lightboxImage.setId);
                  const totalImages = (set?.galleryImages?.length || 0) + 1;
                  const newIdx = lightboxImage.imageIdx === -1 ? totalImages - 2 : lightboxImage.imageIdx - 1;
                  setLightboxImage({ ...lightboxImage, imageIdx: newIdx });
                  resetZoom();
                }}
                className="w-12 h-12 rounded-full bg-emerald-500/20 hover:bg-emerald-500/40 flex items-center justify-center text-white transition border border-emerald-500/30 hover:border-emerald-500/60"
                aria-label={uiText.prevImageAria}
              >
                ←
              </button>
              <button
                onClick={() => {
                  const set = sets.find((s) => s.id === lightboxImage.setId);
                  const totalImages = (set?.galleryImages?.length || 0) + 1;
                  const newIdx = lightboxImage.imageIdx === totalImages - 2 ? -1 : lightboxImage.imageIdx + 1;
                  setLightboxImage({ ...lightboxImage, imageIdx: newIdx });
                  resetZoom();
                }}
                className="w-12 h-12 rounded-full bg-emerald-500/20 hover:bg-emerald-500/40 flex items-center justify-center text-white transition border border-emerald-500/30 hover:border-emerald-500/60"
                aria-label={uiText.nextImageAria}
              >
                →
              </button>
            </div>

            {/* Thumbnail Navigation */}
            <div className="bg-slate-900 p-4 max-h-24 overflow-x-auto">
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => {
                    setLightboxImage({ ...lightboxImage, imageIdx: -1 });
                    resetZoom();
                  }}
                  className={`flex-shrink-0 h-16 w-16 rounded border-2 transition overflow-hidden ${
                    lightboxImage.imageIdx === -1
                      ? 'border-emerald-400'
                      : 'border-slate-700 hover:border-slate-600'
                  }`}
                  aria-label={uiText.altMainImage}
                >
                  <Image
                    src={activeLightboxSet?.image ?? activeLightboxSrc}
                    alt={activeLightboxThumbAlt || `${activeLightboxSet.name} ${uiText.thumbMainSuffix}`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </button>
                {sets
                  .find((s) => s.id === lightboxImage.setId)
                  ?.galleryImages?.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setLightboxImage({ ...lightboxImage, imageIdx: idx });
                        resetZoom();
                      }}
                      className={`flex-shrink-0 h-16 w-16 rounded border-2 transition overflow-hidden ${
                        lightboxImage.imageIdx === idx
                          ? 'border-emerald-400'
                          : 'border-slate-700 hover:border-slate-600'
                      }`}
                      aria-label={`${uiText.imageCounterPrefix} ${idx + 1}`}
                    >
                      <Image
                        src={img}
                        alt={uiText.altGalleryImage.replace("{n}", String(idx + 1))}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
