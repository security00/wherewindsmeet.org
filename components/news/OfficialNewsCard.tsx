import Link from "next/link";

import { OfficialMediaFigure } from "@/components/guides/OfficialMediaFigure";
import type { NewsItem } from "@/lib/news";

type Props = {
  item: NewsItem;
  typeLabel?: string;
  officialCta?: string;
  titleNote?: string;
};

/**
 * /news column card: English (or locale-preserved) title + date + summary,
 * optional official/Steam CDN cover with OfficialMediaFigure attribution,
 * and link back to the publisher original.
 */
export function OfficialNewsCard({
  item,
  typeLabel,
  officialCta = "Read Official",
  titleNote,
}: Props) {
  return (
    <div
      id={item.id}
      className="card-tablet deferred-news-card group flex flex-col gap-4 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1 space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            {titleNote ? (
              <span className="w-full text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                {titleNote}
              </span>
            ) : null}
            <h2 className="text-lg font-bold text-slate-50 transition-colors group-hover:text-ink-jade font-serif">
              {item.title}
            </h2>
            <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
              {typeLabel ?? item.type}
            </span>
          </div>
          <p className="font-mono text-xs font-medium text-slate-500">
            {item.date}
            {item.tags && item.tags.length > 0 ? (
              <>
                <span className="mx-2 text-slate-700">|</span>
                {item.tags.join(" / ")}
              </>
            ) : null}
          </p>
          <p className="max-w-2xl font-sans text-sm leading-relaxed text-slate-300/90">
            {item.summary}
          </p>
        </div>
        {item.officialUrl ? (
          <div className="mt-2 flex shrink-0 self-start sm:mt-0 sm:pl-4">
            <Link
              href={item.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-seal px-3 py-1 text-[10px]"
            >
              {officialCta}
            </Link>
          </div>
        ) : null}
      </div>
      {item.image ? (
        <OfficialMediaFigure
          item={item.image}
          aspectClassName="aspect-[16/9] sm:aspect-[21/9]"
          className="max-w-3xl"
        />
      ) : null}
    </div>
  );
}
