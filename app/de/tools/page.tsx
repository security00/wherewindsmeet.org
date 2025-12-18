import type { Metadata } from "next";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Tools (Karte, Timer, Checklisten)",
  description:
    "Praktische Where Winds Meet Tools: interaktive Karten-Embeds, Reset-Timer und Checklisten für deine Daily-/Weekly-Routine.",
  alternates: buildHreflangAlternates("/tools", { canonicalLanguage: "de" }),
};

type ToolCard = {
  title: string;
  href: string;
  desc: string;
  badge: string;
};

const toolCards: ToolCard[] = [
  {
    title: "Interaktive Karte",
    href: "/de/tools/interactive-map",
    desc: "MapGenie + eine CN-Alternative (eingebettet) inklusive kurzem FAQ. Finde NPCs, Truhen, Sammelobjekte und Routen schneller.",
    badge: "Hohe Suchintention",
  },
  {
    title: "Reset Timer",
    href: "/de/tools/reset-timer",
    desc: "Live-Countdown für Daily + Weekly Reset mit Zeitzonen-Anzeige — perfekt zum Planen rund um den Reset.",
    badge: "Hohe Suchintention",
  },
  {
    title: "Daily & Weekly Checkliste",
    href: "/de/tools/checklist",
    desc: "Anpassbare Routine-Checkliste (lokal gespeichert) mit Auto-Reset rund um die Reset-Fenster.",
    badge: "Wiederkehr",
  },
  {
    title: "PVP Combos",
    href: "/de/tools/pvp-combos",
    desc: "Eingebettete Combo-Datenbank + kuratierte Duel-Videos mit Quick Links zur PVP-Tierliste und Builds.",
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
          Dieser Bereich sammelt praktische Tools für den Alltag im Spiel. Ziel: weniger Tabs, schnellere Antworten
          und klare Weiterleitungen zu ausführlichen Guides, wenn du Kontext brauchst.
        </p>
        <p className="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-xs leading-relaxed text-emerald-100">
          Hinweis: Einige Tools betten Drittanbieter-Seiten ein (z.B. interaktive Karten). Verfügbarkeit, Werbung und
          Features werden vom jeweiligen Anbieter gesteuert.
        </p>
      </section>

      <section className="space-y-5">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50">Empfohlene Tools</h2>
          <Link href="/de/guides" className="text-sm text-emerald-300 hover:text-emerald-200">
            Lieber Guides? Alle Guides →
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
                Tool öffnen →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
