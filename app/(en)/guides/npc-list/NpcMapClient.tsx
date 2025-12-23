"use client";
/* eslint-disable @next/next/no-img-element */

import { useMemo, useState } from "react";
import NpcImagePreview from "./NpcImagePreview";
import type { NpcImagePreviewUiText } from "./NpcImagePreview";

export type MapPin = {
  name: string;
  x: number;
  y: number;
  region?: string;
  area?: string;
  hint?: string;
  image?: string;
};

type Props = {
  pins: MapPin[];
  mapSrc?: string;
  uiText?: Partial<NpcMapUiText>;
  imagePreviewUiText?: Partial<NpcImagePreviewUiText>;
};

export type NpcMapUiText = {
  regionLabel: string;
  allOption: string;
  searchPlaceholder: string;
  showingPrefix: string;
  showingSuffix: string;
  mapAlt: string;
  closeAriaLabel: string;
  regionPrefix: string;
  areaPrefix: string;
  unknownValue: string;
  portraitAltSuffix: string;
  defaultHint: string;
};

const DEFAULT_UI_TEXT: NpcMapUiText = {
  regionLabel: "Region",
  allOption: "All",
  searchPlaceholder: "Search NPC...",
  showingPrefix: "Showing",
  showingSuffix: "pins",
  mapAlt: "Where Winds Meet Old Friends map",
  closeAriaLabel: "Close",
  regionPrefix: "Region:",
  areaPrefix: "Area:",
  unknownValue: "Unknown",
  portraitAltSuffix: "portrait",
  defaultHint: "Use the chat pattern above once you reach this NPC.",
};

export default function NpcMapClient({
  pins,
  mapSrc = "/guides/npc-list/map.gif",
  uiText,
  imagePreviewUiText,
}: Props) {
  const resolvedUiText = useMemo(() => ({ ...DEFAULT_UI_TEXT, ...uiText }), [uiText]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState<string | "all">("all");
  const [selected, setSelected] = useState<MapPin | null>(null);
  const [zoom, setZoom] = useState(1);
  const [useLocalMap, setUseLocalMap] = useState(false);
  const cdn = process.env.NEXT_PUBLIC_CDN_URL;

  const { filteredPins, regions, minX, minY, spanX, spanY } = useMemo(() => {
    const uniqueRegions = Array.from(new Set(pins.map((p) => p.region).filter(Boolean))) as string[];
    const minX = Math.min(...pins.map((p) => p.x ?? 0));
    const maxX = Math.max(...pins.map((p) => p.x ?? 0));
    const minY = Math.min(...pins.map((p) => p.y ?? 0));
    const maxY = Math.max(...pins.map((p) => p.y ?? 0));
    const spanX = Math.max(maxX - minX, 1);
    const spanY = Math.max(maxY - minY, 1);
    const term = search.trim().toLowerCase();
    const filtered = pins.filter((p) => {
      const matchesRegion = region === "all" || p.region === region;
        const matchesSearch = term ? p.name.toLowerCase().includes(term) : true;
        return matchesRegion && matchesSearch;
      });
    return { filteredPins: filtered, regions: uniqueRegions, minX, minY, spanX, spanY };
  }, [pins, search, region]);

  const getPosition = (pin: MapPin) => {
    const left = ((pin.x - minX) / spanX) * 100;
    const top = ((pin.y - minY) / spanY) * 100;
    return { left, top };
  };

  const handleZoom = (delta: number) => {
    setZoom((z) => {
      const next = Math.min(2.5, Math.max(0.6, z + delta));
      return Number(next.toFixed(2));
    });
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    // Scroll up to zoom in, down to zoom out; prevent page scroll.
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    handleZoom(delta);
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <label className="text-slate-400">{resolvedUiText.regionLabel}</label>
          <select
            className="rounded border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-slate-100"
            value={region}
            onChange={(e) => setRegion(e.target.value as "all" | string)}
          >
            <option value="all">{resolvedUiText.allOption}</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
        <input
          placeholder={resolvedUiText.searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-100 focus:border-emerald-400 focus:outline-none"
        />
        <span className="text-slate-500">
          {resolvedUiText.showingPrefix} {filteredPins.length} / {pins.length} {resolvedUiText.showingSuffix}
        </span>
      </div>

      <div
        className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 shadow-lg"
        onClick={() => setSelected(null)}
        onWheel={handleWheel}
      >
        <div className="absolute right-3 top-3 z-20 flex gap-2 rounded-xl border border-slate-700 bg-slate-950/80 p-2 text-[11px] text-slate-200 shadow">
          <button
            className="rounded-lg border border-slate-700 bg-slate-900 px-2 py-1 hover:border-emerald-400 hover:text-emerald-200"
            onClick={(e) => {
              e.stopPropagation();
              handleZoom(0.2);
            }}
          >
            +
          </button>
          <button
            className="rounded-lg border border-slate-700 bg-slate-900 px-2 py-1 hover:border-emerald-400 hover:text-emerald-200"
            onClick={(e) => {
              e.stopPropagation();
              handleZoom(-0.2);
            }}
          >
            -
          </button>
          <button
            className="rounded-lg border border-slate-700 bg-slate-900 px-2 py-1 hover:border-emerald-400 hover:text-emerald-200"
            onClick={(e) => {
              e.stopPropagation();
              setZoom(1);
            }}
          >
            100%
          </button>
        </div>

        <div
          className="absolute inset-0 origin-center"
          style={{ transform: `scale(${zoom})` }}
        >
          <img
            src={!cdn || useLocalMap ? mapSrc : `${cdn}${mapSrc.startsWith("/") ? mapSrc : `/${mapSrc}`}`}
            alt={resolvedUiText.mapAlt}
            className="absolute inset-0 h-full w-full object-cover"
            onError={() => setUseLocalMap(true)}
          />

          {filteredPins.map((pin) => {
            const { left, top } = getPosition(pin);
            return (
              <button
                key={`${pin.name}-${pin.x}-${pin.y}`}
                className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-100 bg-emerald-400/90 shadow hover:scale-110 transition"
                style={{ left: `${left}%`, top: `${top}%` }}
                title={pin.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(pin);
                }}
              />
            );
          })}

          <div className="pointer-events-none absolute inset-0 border border-white/5" />

          {selected ? (
            (() => {
              const { left, top } = getPosition(selected);
              const placeAbove = top > 25;
              const horizontalShift = left > 75 ? "-80%" : left < 25 ? "-20%" : "-50%";
              const translateY = placeAbove ? "-110%" : "10%";
            return (
              <div
                className="absolute z-10 max-w-md rounded-2xl border border-slate-700 bg-slate-950/90 p-4 text-xs text-slate-200 shadow-lg"
                style={{
                  left: `${left}%`,
                    top: `${top}%`,
                    transform: `translate(${horizontalShift}, ${translateY})`,
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-slate-50">{selected.name}</p>
                    <button
                      className="pointer-events-auto text-slate-400 hover:text-emerald-200"
                      onClick={() => setSelected(null)}
                      aria-label={resolvedUiText.closeAriaLabel}
                    >
                      ✕
                    </button>
                  </div>
                  <p className="text-[11px] text-emerald-200 mt-1">
                    {resolvedUiText.regionPrefix} {selected.region || resolvedUiText.unknownValue}{" "}
                    {selected.area ? `· ${resolvedUiText.areaPrefix} ${selected.area}` : ""}
                  </p>
                  {selected.image ? (
                    <div className="mt-3 grid grid-cols-[120px_1fr] gap-3">
                      <NpcImagePreview
                        src={selected.image}
                        alt={`${selected.name} ${resolvedUiText.portraitAltSuffix}`}
                        thumbnailClassName="h-24"
                        uiText={imagePreviewUiText}
                      />
                      <p className="text-slate-300 leading-relaxed">
                        {selected.hint || resolvedUiText.defaultHint}
                      </p>
                    </div>
                  ) : (
                    <p className="mt-3 text-slate-300 leading-relaxed">
                      {selected.hint || resolvedUiText.defaultHint}
                    </p>
                  )}
                </div>
              );
            })()
          ) : null}
        </div>
      </div>
    </div>
  );
}
