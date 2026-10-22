import Link from "next/link";

import CdnImage from "@/components/CdnImage";
import type { OfficialMediaItem } from "@/lib/officialQingzhouMedia";

type Props = {
  item: OfficialMediaItem;
  priority?: boolean;
  className?: string;
  aspectClassName?: string;
};

/**
 * Publisher / Steam screenshot figure with visible attribution.
 * News-derived stills point at our internal /news cards; Steam library art
 * may still cite the Steam store page.
 */
export function OfficialMediaFigure({
  item,
  priority = false,
  className = "",
  aspectClassName = "aspect-video",
}: Props) {
  const isInternal = item.sourceHref.startsWith("/");
  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-lg shadow-slate-950/40 ${className}`}
    >
      <div className={`relative ${aspectClassName} bg-slate-900`}>
        <CdnImage
          src={item.src}
          alt={item.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 48vw, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="space-y-1 border-t border-slate-800 px-4 py-3 text-xs leading-5 text-slate-400">
        <span className="block text-slate-300">{item.caption}</span>
        {isInternal ? (
          <Link
            href={item.sourceHref}
            className="inline-flex font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            {item.sourceLabel} →
          </Link>
        ) : (
          <a
            href={item.sourceHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            {item.sourceLabel} ↗
          </a>
        )}
      </figcaption>
    </figure>
  );
}
