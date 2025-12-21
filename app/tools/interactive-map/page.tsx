import type { Metadata } from "next";
import Link from "next/link";
import { InteractiveMapEmbed } from "@/components/InteractiveMapEmbed";
import { buildHreflangAlternates } from "@/lib/hreflang";

const mapgenieUrl = "https://mapgenie.io/where-winds-meet/maps/world";
const sixFastUrl = "https://yysls-map.6fast.com/yysls/maps/qinghe?lang=en";

export const metadata: Metadata = {
  title: "Where Winds Meet Interactive Map (MapGenie + CN Alternative)",
  description:
    "Use a Where Winds Meet interactive map to find NPCs, chests, collectibles, teleport points, and farming routes. Includes MapGenie plus a CN alternative and a quick FAQ.",
  alternates: buildHreflangAlternates("/tools/interactive-map"),
};

export default function InteractiveMapPage() {
  return (
    <article className="space-y-10">
      <header className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Tools</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Interactive Map</span>
        </h1>
        <div className="mt-4 max-w-3xl space-y-3 text-sm leading-relaxed text-slate-300">
          <p>
            If you are trying to locate a specific NPC, chest, collectible, teleport point, or activity quickly, an
            interactive map is usually faster than reading a long walkthrough.
          </p>
          <p>
            This page embeds two popular map options and adds a practical FAQ so the page stays useful even if you are
            visiting from Google for the first time.
          </p>
        </div>
      </header>

      <section className="space-y-4">
        <InteractiveMapEmbed
          deferLoad
          deferMs={2500}
          options={[
            {
              id: "mapgenie",
              label: "MapGenie (Global)",
              src: mapgenieUrl,
              title: "Where Winds Meet Interactive Map - MapGenie",
            },
            {
              id: "6fast",
              label: "6Fast (CN alt)",
              src: sixFastUrl,
              title: "Where Winds Meet Interactive Map - 6Fast",
              referrerPolicy: "no-referrer",
            },
          ]}
        />

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-5 text-xs leading-relaxed text-slate-300">
          <p>
            These maps are embedded from third-party providers. If an embed fails to load (blocked region, cookies, or
            provider downtime), open the map directly:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>
              <a
                href={mapgenieUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200"
              >
                MapGenie map (opens in a new tab)
              </a>
            </li>
            <li>
              <a
                href={sixFastUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:text-emerald-200"
              >
                6Fast map (opens in a new tab)
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-50">FAQ</h2>

        <div className="space-y-3">
          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              Which map should I use: MapGenie or 6Fast?
            </summary>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <p>
                Start with MapGenie if you want an English-first experience and a familiar interface. Try 6Fast if you
                are cross-checking CN routes or if MapGenie is slow in your region.
              </p>
              <p className="text-xs text-slate-400">
                Coverage and pin accuracy change over time — treat the map as a helper and verify important locations
                in-game.
              </p>
            </div>
          </details>

          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              Can these maps sync my in-game progress?
            </summary>
            <p className="mt-3 text-sm text-slate-300">
              Usually no. Most Where Winds Meet interactive maps are community tools: they can help you plan routes and
              track collectibles manually, but they do not automatically read your character progress.
            </p>
          </details>

          <details className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
            <summary className="cursor-pointer font-semibold text-slate-100">
              Why does the embedded map show ads or popups?
            </summary>
            <p className="mt-3 text-sm text-slate-300">
              The embedded content is controlled by the provider. This page does not inject ads, but it also cannot
              remove ads that appear inside the third-party map.
            </p>
          </details>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8 md:grid-cols-3">
        <div className="space-y-2 md:col-span-2">
          <h2 className="text-xl font-bold text-slate-50">Next: use the map with these guides</h2>
          <p className="text-sm leading-relaxed text-slate-300">
            Interactive maps are best when paired with a short checklist. Use the map to find the location fast, then
            use a guide to understand triggers, requirements, and common bugs.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <Link
            href="/tools/reset-timer"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Reset timer →
          </Link>
          <Link
            href="/tools/checklist"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Daily & weekly checklist →
          </Link>
          <Link
            href="/guides/npc-list"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            NPC list & Old Friends →
          </Link>
          <Link
            href="/guides/bosses"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Bosses guide hub →
          </Link>
          <Link
            href="/guides/items"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-3 font-semibold text-slate-100 hover:border-emerald-500/40 hover:text-emerald-100"
          >
            Items & materials →
          </Link>
        </div>
      </section>
    </article>
  );
}
