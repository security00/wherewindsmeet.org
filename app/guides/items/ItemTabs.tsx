'use client';

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ItemCategory, ItemCategoryId } from "./data";

export type ItemTabsUiText = {
  heading: string;
  imagePending: string;
  acquisitionLabel: string;
  scrollToItems: string;
  itemsSuffix: string;
};

const DEFAULT_UI_TEXT: ItemTabsUiText = {
  heading: "Click to Switch Item Categories",
  imagePending: "Image Pending",
  acquisitionLabel: "Acquisition:",
  scrollToItems: "Scroll to items ↓",
  itemsSuffix: "items",
};

export default function ItemTabs({
  categories,
  uiText,
}: {
  categories: ItemCategory[];
  uiText?: Partial<ItemTabsUiText>;
}) {
  const [activeTab, setActiveTab] = useState<ItemCategoryId>("materials");
  const resolvedUiText = useMemo(() => ({ ...DEFAULT_UI_TEXT, ...uiText }), [uiText]);

  const activeCategory = useMemo(
    () => categories.find((cat) => cat.id === activeTab) ?? categories[0],
    [activeTab, categories],
  );

  const renderGrid = (items: typeof activeCategory.items) => (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.name}
          className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/50"
        >
          <div
            className={`relative h-36 w-full overflow-hidden rounded-xl border border-slate-800 ${
              item.image.includes("placeholder.svg")
                ? "bg-gradient-to-br from-slate-950 via-emerald-950/60 to-slate-900"
                : "bg-slate-900/70"
            }`}
          >
            {item.image.includes("placeholder.svg") ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <span className="sr-only">{item.name}</span>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),transparent_55%),radial-gradient(circle_at_20%_20%,rgba(148,163,184,0.12),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(5,150,105,0.18),transparent_45%)]" />
                <div className="relative rounded-lg border border-emerald-500/30 px-4 py-2 text-center shadow-inner shadow-emerald-900/70 backdrop-blur-[1px]">
                  <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/75">
                    Wuxia
                  </p>
                  <p className="text-sm font-semibold text-emerald-100">
                    {resolvedUiText.imagePending}
                  </p>
                </div>
              </div>
            ) : (
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="320px"
                className="object-contain p-4"
              />
            )}
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-50">
              {item.name}
            </h3>
            <p className="text-sm text-slate-200">{item.use}</p>
            <p className="text-xs text-slate-400">
              <span className="font-semibold text-emerald-200">{resolvedUiText.acquisitionLabel} </span>{" "}
              {item.location}
            </p>
          </div>
        </article>
      ))}
    </div>
  );

  return (
    <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          {resolvedUiText.heading}
        </h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveTab(category.id)}
              className={`rounded-full border px-3 py-1 text-sm font-semibold transition ${
                activeTab === category.id
                  ? "border-emerald-400 bg-emerald-500/15 text-emerald-100 shadow-sm shadow-emerald-800/50"
                  : "border-slate-700 bg-slate-900/70 text-slate-300 hover:border-emerald-400/60 hover:text-emerald-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/50">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">
              {activeCategory.title}
            </p>
            <p className="text-sm text-slate-200">{activeCategory.blurb}</p>
          </div>
          <Link
            href="#items-grid"
            className="text-xs font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            {resolvedUiText.scrollToItems}
          </Link>
        </div>
      </div>

      {activeCategory.groups ? (
        <div className="space-y-8" id="items-grid">
          {activeCategory.groups.map((group) => (
            <div key={group.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-50">
                  {group.title}
                </h3>
                <span className="text-xs text-slate-500">
                  {group.items.length} {resolvedUiText.itemsSuffix}
                </span>
              </div>
              {renderGrid(group.items)}
            </div>
          ))}
        </div>
      ) : (
        <div id="items-grid">{renderGrid(activeCategory.items)}</div>
      )}
    </section>
  );
}
