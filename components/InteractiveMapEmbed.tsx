'use client';

import { useEffect, useMemo, useState } from "react";

export type InteractiveMapOption = {
  id: string;
  label: string;
  src: string;
  title: string;
  referrerPolicy?: React.IframeHTMLAttributes<HTMLIFrameElement>["referrerPolicy"];
};

type InteractiveMapEmbedProps = {
  options: InteractiveMapOption[];
  initialId?: string;
  deferLoad?: boolean;
  deferMs?: number;
  loadingTitle?: string;
  loadingDescription?: string;
  loadNowLabel?: string;
};

export function InteractiveMapEmbed({
  options,
  initialId,
  deferLoad = false,
  deferMs = 2500,
  loadingTitle = "Loading interactive map…",
  loadingDescription = "This embed is loaded on idle to keep the page responsive. You can also load it immediately.",
  loadNowLabel = "Load map now",
}: InteractiveMapEmbedProps) {
  const safeInitialId = initialId ?? options[0]?.id;
  const [activeId, setActiveId] = useState<string | undefined>(safeInitialId);
  const [isLoaded, setIsLoaded] = useState(() => !deferLoad);

  const active = useMemo(() => {
    if (!options.length) return undefined;
    return options.find((option) => option.id === activeId) ?? options[0];
  }, [activeId, options]);

  useEffect(() => {
    if (isLoaded) return;
    if (!deferLoad) return;

    let cancelled = false;

    const enable = () => {
      if (cancelled) return;
      setIsLoaded(true);
    };

    const timeoutId = window.setTimeout(enable, deferMs);
    const idleId =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(
            () => {
              window.clearTimeout(timeoutId);
              enable();
            },
            { timeout: deferMs + 1500 }
          )
        : null;

    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
      if (idleId && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
    };
  }, [deferLoad, deferMs, isLoaded]);

  if (!active) return null;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 shadow-2xl shadow-slate-950/40">
      <div className="flex flex-wrap gap-2 border-b border-slate-800/80 bg-slate-950/70 p-3">
        {options.map((option) => {
          const isActive = option.id === active.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setActiveId(option.id)}
              className={[
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition",
                isActive
                  ? "border border-emerald-400/60 bg-emerald-500/10 text-emerald-100 shadow-sm shadow-emerald-900/20"
                  : "border border-slate-700 bg-slate-900/60 text-slate-200 hover:border-emerald-500/40 hover:text-emerald-100",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="relative h-[70vh] min-h-[520px] w-full bg-slate-900/40 sm:min-h-[680px]">
        {isLoaded ? (
          <iframe
            key={active.id}
            src={active.src}
            title={active.title}
            className="absolute inset-0 h-full w-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
            referrerPolicy={active.referrerPolicy}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-center shadow-lg shadow-slate-950/60">
              <p className="text-sm font-semibold text-slate-100">{loadingTitle}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{loadingDescription}</p>
              <button
                type="button"
                onClick={() => setIsLoaded(true)}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-emerald-400/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                {loadNowLabel}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
