'use client';

import CdnImage from "@/components/CdnImageClient";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ItemCategory, ItemCategoryId } from "./data";

export type ItemTabsUiText = {
  heading: string;
  imageUnavailable: string;
  acquisitionLabel: string;
  verificationSourceLabel: string;
  scrollToItems: string;
  itemsSuffix: string;
  verifiedBadge: string;
  verifiedSuffix: string;
  pendingSuffix: string;
  cataloguedSuffix: string;
  emptyHeading: string;
  emptyBody: string;
  pendingRetentionTemplate: string;
};

const DEFAULT_UI_TEXT: ItemTabsUiText = {
  heading: "Verified item categories",
  imageUnavailable: "No verified image",
  acquisitionLabel: "Acquisition:",
  verificationSourceLabel: "Verification source",
  scrollToItems: "Scroll to items ↓",
  itemsSuffix: "items",
  verifiedBadge: "Verified",
  verifiedSuffix: "verified",
  pendingSuffix: "pending",
  cataloguedSuffix: "catalogued",
  emptyHeading: "No verified high-value entries yet",
  emptyBody:
    "Catalog records without a reliable source and concrete gameplay details remain hidden from the main index.",
  pendingRetentionTemplate: "{count} {status} records are retained for editorial verification.",
};

export default function ItemTabs({
  categories,
  uiText,
}: {
  categories: ItemCategory[];
  uiText?: Partial<ItemTabsUiText>;
}) {
  const [activeTab, setActiveTab] = useState<ItemCategoryId>(
    () => categories.find((category) => category.coverage.published > 0)?.id ?? categories[0]?.id ?? "materials",
  );
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
          <div className="relative h-36 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
            {"src" in item.media ? (
              <CdnImage
                src={item.media.src}
                alt={item.name}
                fill
                sizes="320px"
                className="object-contain p-4"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                <span className="sr-only">{item.name}</span>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,185,129,0.16),transparent_55%),radial-gradient(circle_at_20%_20%,rgba(148,163,184,0.12),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(5,150,105,0.18),transparent_45%)]" />
                <div className="relative rounded-lg border border-emerald-500/30 px-4 py-2 text-center shadow-inner shadow-emerald-900/70 backdrop-blur-[1px]">
                  <p className="text-xs uppercase tracking-[0.35em] text-emerald-200/75">
                    Wuxia
                  </p>
                  <p className="text-sm font-semibold text-emerald-100">
                    {resolvedUiText.imageUnavailable}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-50">{item.name}</h3>
              <span className="shrink-0 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-200">
                {resolvedUiText.verifiedBadge}
              </span>
            </div>
            {item.use ? <p className="text-sm text-slate-200">{item.use}</p> : null}
            {item.location ? (
              <p className="text-xs text-slate-400">
                <span className="font-semibold text-emerald-200">
                  {resolvedUiText.acquisitionLabel}{" "}
                </span>
                {item.location}
              </p>
            ) : null}
            <a
              href={item.sourceUrl}
              target="_blank"
              rel="noreferrer nofollow"
              className="inline-flex text-xs font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              {resolvedUiText.verificationSourceLabel}
            </a>
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
            <p className="mt-2 text-xs text-slate-400">
              {activeCategory.coverage.published} {resolvedUiText.verifiedSuffix} ·{" "}
              {activeCategory.coverage.pending} {resolvedUiText.pendingSuffix} ·{" "}
              {activeCategory.coverage.catalogued} {resolvedUiText.cataloguedSuffix}
            </p>
          </div>
          <Link
            href="#items-grid"
            className="text-xs font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            {resolvedUiText.scrollToItems}
          </Link>
        </div>
      </div>

      {activeCategory.groups && activeCategory.groups.length > 0 ? (
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
        <div id="items-grid">
          {activeCategory.items.length > 0 ? (
            renderGrid(activeCategory.items)
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 p-8 text-center">
              <h3 className="text-base font-semibold text-slate-100">
                {resolvedUiText.emptyHeading}
              </h3>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
                {resolvedUiText.emptyBody}{" "}
                {resolvedUiText.pendingRetentionTemplate
                  .replace("{count}", String(activeCategory.coverage.pending))
                  .replace("{status}", resolvedUiText.pendingSuffix)}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
