import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const combosUrl = "https://www.wwmcombos.com/?hasVideo=true";

type Video = {
  id: string;
  title: string;
  description: string;
};

const videos: Video[] = [
  {
    id: "4UFzw-Q39pQ",
    title: "Combat fundamentals",
    description: "A clean primer on spacing, tempo, and how to stop feeding free punishes in duels.",
  },
  {
    id: "DhhUnD1wmX4",
    title: "Movement & positioning",
    description: "Footwork and camera discipline: how to keep pressure without overcommitting.",
  },
  {
    id: "TCLlK21RVw0",
    title: "Countering & parry basics",
    description: "A practical countering/parry overview for players trying to stabilize their defense.",
  },
  {
    id: "DMR8UN4gEaY",
    title: "Animation cancelling guide",
    description: "Advanced technique focus. Learn where cancels create real advantage, not just flash.",
  },
  {
    id: "d9WyWI6RRL4",
    title: "Advanced combo strings",
    description: "Longer strings and conversion ideas once you can reliably win neutral exchanges.",
  },
  {
    id: "Xh_xT8Aduu8",
    title: "High level PVP strategy",
    description: "Decision-making under pressure: when to disengage, when to commit, and why.",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet PVP Combos (Database + Videos)",
  description:
    "Open a Where Winds Meet PVP combos database (embedded) and watch curated duel videos in one page. Includes quick links to the PVP tier list and builds.",
  alternates: buildHreflangAlternates("/tools/pvp-combos"),
};

export default function PvpCombosPage() {
  return (
    <article className="space-y-10">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Tools</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">PVP Combos</span>
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            This page is designed for one common situation: you are about to queue duels, but you only need two things
            fast — a combo reference and a few solid examples of real fights.
          </p>
          <p>
            The combo database below is embedded from a third-party site. If it fails to load, open it directly in a new
            tab and keep this page for the curated video list and internal links.
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-2 text-sm">
          <Link
            href="/guides/pvp-tier-list"
            className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
          >
            PVP tier list →
          </Link>
          <Link
            href="/guides/builds"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
          >
            Builds →
          </Link>
          <Link
            href="/guides/weapons"
            className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
          >
            Weapons →
          </Link>
        </div>
      </header>

      <section className="space-y-4">
        <div className="overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 shadow-2xl shadow-slate-950/40">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 bg-slate-950/70 p-3">
            <p className="text-sm font-semibold text-slate-100">Combos database (embedded)</p>
            <a
              href={combosUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
            >
              Open in new tab →
            </a>
          </div>

          <div className="relative h-[70vh] min-h-[560px] w-full bg-slate-900/40 sm:min-h-[720px]">
            <iframe
              src={combosUrl}
              title="Where Winds Meet combos database"
              className="absolute inset-0 h-full w-full border-0"
              sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-popups"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        <p className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 text-xs leading-relaxed text-slate-300">
          Third-party embed note: ads, accounts, and feature availability are controlled by the provider. This site does
          not store your combo history.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50">Curated PVP videos</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          Use these as reference clips: watch one, copy one small idea, then go back to the combo database and practice
          just that conversion. Small, repeatable wins beat memorizing a dozen flashy strings.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.id}
              className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
                <div className="aspect-video bg-slate-950/80">
                  <iframe
                    title={video.title}
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
              <p className="text-sm font-semibold text-slate-100">{video.title}</p>
              <p className="text-xs leading-relaxed text-slate-300">{video.description}</p>
            </article>
          ))}
        </div>
      </section>
    </article>
  );
}

