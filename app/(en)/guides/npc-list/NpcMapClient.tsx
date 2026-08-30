"use client";
/* eslint-disable @next/next/no-img-element */

import { useId, useMemo, useState } from "react";
import NpcImagePreview from "./NpcImagePreview";
import type { NpcImagePreviewUiText } from "./NpcImagePreview";

export type MapPin = {
  name: string;
  x?: number;
  y?: number;
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
  searchLabel: string;
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
  loadMap: string;
  hideMap: string;
  mapDisclosure: string;
  selectPrompt: string;
  resultLimitSuffix: string;
};

const DEFAULT_UI_TEXT: NpcMapUiText = {
  regionLabel: "Region",
  allOption: "All",
  searchLabel: "Search NPC names",
  searchPlaceholder: "Search NPC…",
  showingPrefix: "Showing",
  showingSuffix: "records",
  mapAlt: "Dated Where Winds Meet Old Friends map reference",
  closeAriaLabel: "Clear selected NPC",
  regionPrefix: "Region:",
  areaPrefix: "Area:",
  unknownValue: "Unknown",
  portraitAltSuffix: "dated NPC reference image",
  defaultHint: "Verify this record in the current client.",
  loadMap: "Load 2.5 MB map reference",
  hideMap: "Hide map reference",
  mapDisclosure: "The composite map is a dated visual reference. NPC records are not plotted because the imported coordinates have not been calibrated to this image.",
  selectPrompt: "Choose a result to load one portrait.",
  resultLimitSuffix: "The first 24 matches are shown; narrow the search to find another NPC.",
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
  const [showMap, setShowMap] = useState(false);
  const [useLocalMap, setUseLocalMap] = useState(false);
  const controlId = useId();
  const regionId = `${controlId}-region`;
  const searchId = `${controlId}-search`;
  const cdn = process.env.NEXT_PUBLIC_CDN_URL;

  const { filteredPins, regions } = useMemo(() => {
    const uniqueRegions = Array.from(new Set(pins.map((pin) => pin.region).filter(Boolean))) as string[];
    const term = search.trim().toLocaleLowerCase();
    const filtered = pins.filter((pin) => {
      const matchesRegion = region === "all" || pin.region === region;
      const haystack = `${pin.name} ${pin.region ?? ""} ${pin.area ?? ""}`.toLocaleLowerCase();
      return matchesRegion && (!term || haystack.includes(term));
    });
    return { filteredPins: filtered, regions: uniqueRegions.sort() };
  }, [pins, region, search]);

  const visiblePins = filteredPins.slice(0, 24);
  const resolvedMapSrc = !cdn || useLocalMap
    ? mapSrc
    : `${cdn}${mapSrc.startsWith("/") ? mapSrc : `/${mapSrc}`}`;

  return (
    <div className="space-y-5">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor={regionId} className="block text-xs font-semibold text-slate-300">
            {resolvedUiText.regionLabel}
          </label>
          <select
            id={regionId}
            className="min-h-11 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
            value={region}
            onChange={(event) => {
              setRegion(event.target.value);
              setSelected(null);
            }}
          >
            <option value="all">{resolvedUiText.allOption}</option>
            {regions.map((item) => (
              <option key={item} value={item}>{item}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor={searchId} className="block text-xs font-semibold text-slate-300">
            {resolvedUiText.searchLabel}
          </label>
          <input
            id={searchId}
            type="search"
            placeholder={resolvedUiText.searchPlaceholder}
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setSelected(null);
            }}
            className="min-h-11 w-full rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
          />
        </div>
      </div>

      <p aria-live="polite" className="text-xs text-slate-400">
        {resolvedUiText.showingPrefix} {filteredPins.length} / {pins.length} {resolvedUiText.showingSuffix}. {resolvedUiText.selectPrompt}
      </p>

      <div className="grid max-h-72 gap-2 overflow-y-auto pr-1 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePins.map((pin) => (
          <button
            key={pin.name}
            type="button"
            aria-pressed={selected?.name === pin.name}
            onClick={() => setSelected(pin)}
            className="min-h-11 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-left text-sm text-slate-100 transition hover:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 aria-pressed:border-emerald-400 aria-pressed:bg-emerald-500/10"
          >
            <span className="block font-semibold">{pin.name}</span>
            <span className="mt-1 block text-xs text-slate-400">{pin.region || resolvedUiText.unknownValue}{pin.area ? ` · ${pin.area}` : ""}</span>
          </button>
        ))}
      </div>
      {filteredPins.length > visiblePins.length ? (
        <p className="text-xs text-slate-500">{resolvedUiText.resultLimitSuffix}</p>
      ) : null}

      <div aria-live="polite">
        {selected ? (
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-slate-200">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-50">{selected.name}</h3>
                <p className="mt-1 text-xs text-emerald-100">
                  {resolvedUiText.regionPrefix} {selected.region || resolvedUiText.unknownValue}{" "}
                  {selected.area ? `· ${resolvedUiText.areaPrefix} ${selected.area}` : ""}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label={resolvedUiText.closeAriaLabel}
                className="min-h-11 min-w-11 rounded-lg border border-slate-700 text-slate-300 hover:border-rose-400 hover:text-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-400/60"
              >
                ×
              </button>
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-[minmax(0,280px)_1fr] sm:items-start">
              {selected.image ? (
                <NpcImagePreview
                  src={selected.image}
                  alt={`${selected.name} ${resolvedUiText.portraitAltSuffix}`}
                  thumbnailClassName="h-48"
                  uiText={imagePreviewUiText}
                />
              ) : null}
              <p className="leading-relaxed text-slate-300">{selected.hint || resolvedUiText.defaultHint}</p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-4">
        <p className="text-xs leading-relaxed text-slate-400">{resolvedUiText.mapDisclosure}</p>
        <button
          type="button"
          onClick={() => setShowMap((current) => !current)}
          aria-expanded={showMap}
          className="mt-3 min-h-11 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-100 hover:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/60"
        >
          {showMap ? resolvedUiText.hideMap : resolvedUiText.loadMap}
        </button>
        {showMap ? (
          <div className="mt-4 max-h-[75vh] overflow-auto rounded-xl border border-slate-700 bg-slate-950">
            <img
              src={resolvedMapSrc}
              alt={resolvedUiText.mapAlt}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-contain"
              onError={() => setUseLocalMap(true)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
