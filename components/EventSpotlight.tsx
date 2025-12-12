import Link from "next/link";
import FallbackImage from "@/components/FallbackImage";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  imageSrc: string;
  imageFallbackSrc: string;
  imageAlt: string;
};

export default function EventSpotlight({
  eyebrow,
  title,
  description,
  bullets,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  imageSrc,
  imageFallbackSrc,
  imageAlt,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-amber-500/25 bg-gradient-to-br from-amber-500/10 via-slate-950/80 to-slate-950 p-6 sm:p-8 shadow-2xl shadow-amber-900/20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute -left-24 -bottom-28 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(245,158,11,0.12),transparent_45%)]" />
      </div>

      <div className="relative grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-amber-200">{eyebrow}</p>
          <h2 className="text-3xl font-bold text-slate-50 sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-slate-200/90">
            {description}
          </p>
          <ul className="space-y-1 text-xs text-amber-100/90">
            {bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/60 bg-amber-500/10 px-4 py-2 text-sm font-semibold text-amber-200 transition hover:border-amber-300/80 hover:text-amber-100"
            >
              {primaryLabel}
              <span aria-hidden>→</span>
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-amber-300/50 hover:text-slate-50"
              >
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 shadow-inner shadow-black/40">
          <FallbackImage
            src={imageSrc}
            fallbackSrc={imageFallbackSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}

