'use client';

import { useMemo, useState } from "react";

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
};

export function InteractiveMapEmbed({ options, initialId }: InteractiveMapEmbedProps) {
  const safeInitialId = initialId ?? options[0]?.id;
  const [activeId, setActiveId] = useState<string | undefined>(safeInitialId);

  const active = useMemo(() => {
    if (!options.length) return undefined;
    return options.find((option) => option.id === activeId) ?? options[0];
  }, [activeId, options]);

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
        <iframe
          key={active.id}
          src={active.src}
          title={active.title}
          className="absolute inset-0 h-full w-full border-0"
          sandbox="allow-scripts allow-same-origin allow-forms allow-modals"
          referrerPolicy={active.referrerPolicy}
        />
      </div>
    </div>
  );
}

