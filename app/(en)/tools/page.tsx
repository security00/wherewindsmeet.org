import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Tools (Map, Timers, Checklists)",
  description:
    "Player-focused Where Winds Meet tools: interactive map embeds, reset timers, and practical checklists to plan your daily and weekly routine.",
  alternates: buildHreflangAlternates("/tools"),
};

type ToolCard = {
  title: string;
  href: string;
  desc: string;
  badge: string;
};

const toolCards: ToolCard[] = [
  {
    title: "Interactive Map",
    href: "/tools/interactive-map",
    desc: "MapGenie + a CN alternative embedded with a quick FAQ. Find NPCs, chests, collectibles, and routes faster.",
    badge: "High intent",
  },
  {
    title: "Reset Timer",
    href: "/tools/reset-timer",
    desc: "Live daily + weekly reset countdown with a time zone display option so you can plan your session.",
    badge: "High intent",
  },
  {
    title: "Daily & Weekly Checklist",
    href: "/tools/checklist",
    desc: "Customizable routine tracker stored locally in your browser, with auto-clearing around reset windows.",
    badge: "Return visits",
  },
  {
    title: "PVP Combos",
    href: "/tools/pvp-combos",
    desc: "Embedded combo database + curated duel videos with quick links back into the PVP tier list and builds.",
    badge: "PVP",
  },
];

export default function ToolsPage() {
  return (
    <article className="space-y-10">
      <section className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Where Winds Meet <span className="text-ink-gold">Tools</span>
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300">
          This section collects practical, player-first tools you can use while you play. The goal is simple:
          fewer tabs, faster answers, and more internal links back into detailed guides when you need context.
        </p>
        <p className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-xs leading-relaxed text-emerald-100">
          Note: some tools embed third-party sites (e.g., interactive maps). Availability, ads, and features are
          controlled by the original providers.
        </p>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50">Featured tools</h2>
          <Link href="/guides" className="text-sm text-emerald-300 hover:text-emerald-200">
            Prefer guides? Browse all guides →
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {toolCards.map((tool) => (
            <Link
              key={tool.href}
              href={tool.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-6 shadow-lg transition hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-emerald-900/20"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-slate-50 group-hover:text-emerald-200 transition">
                  {tool.title}
                </h3>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-200/90">
                  {tool.badge}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{tool.desc}</p>
              <span className="mt-4 text-xs text-emerald-300 group-hover:text-emerald-200">
                Open tool →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
