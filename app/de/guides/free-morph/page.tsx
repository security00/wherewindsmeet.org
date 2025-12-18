import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Free Morph (2025) – Mystic-Skill freischalten",
  description:
    "So schaltest du Free Morph frei: Tian Yings Drehtritte im Challenge-Kampf parieren. Update Jan 2025: Kurzguide, Kosten, Cooldown, Tier-Boni und beste Einsätze.",
  alternates: buildHreflangAlternates("/guides/free-morph", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Free Morph Mystic-Skill (2025)",
    description:
      "Free Morph Guide (Jan 2025): Drehtritte von Challenge Tian Ying parieren, TL;DR, Tier-Boni, Kosten/Cooldown und Einsatztipps.",
    url: "https://wherewindsmeet.org/de/guides/free-morph",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://static.wherewindsmeet.org/guides/free-morph/free-morph-icon.webp",
        width: 256,
        height: 256,
        alt: "Free Morph Mystic Skill Icon",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Free Morph Mystic-Skill (2025) – Where Winds Meet",
    description:
      "Free Morph schnell freischalten, Kosten/Cooldown, Tier-Boni und PvE/PvP Einsatz.",
    images: ["https://static.wherewindsmeet.org/guides/free-morph/free-morph-icon.webp"],
  },
};

const quickFacts = [
  { label: "Typ", value: "Offensiver Mystic – Einzelziel-Kontrolle" },
  { label: "Kosten / CD", value: "35 Vitalität • 3s CD (Tier 4: -5 Vitalität)" },
  { label: "Kerneffekt", value: "Launch + Lufttritt-Salve, hält Ziel in der Luft, kleiner AoE-Abschluss" },
  { label: "Tier-Bonus", value: "Tier 3: +20% Schaden gegen Ziele mit HP‑Schild | Tier 4: -5 Vitalitätskosten" },
];

const unlockSteps = [
  {
    title: "Challenge starten: Tian Ying",
    desc: "Betritt die Challenge-Version von Tian Ying. Erreiche Phase 2, in der die Drehtritte beginnen.",
  },
  {
    title: "Drehtritte parieren",
    desc: "Pariere Tian Yings Drehtritte in Phase 2. Erfolgreiche Paraden schalten Free Morph frei.",
  },
  {
    title: "Free Morph abholen",
    desc: "Nach genug Paraden erhältst du den Mystic. Verpasst? Encounter neu starten und auf Spins fokussieren.",
  },
];

const tierBonuses = [
  {
    tier: "Grundstufe",
    effect: "Sprung nach oben, Ziel wird gelauncht, Luftcombo, kleiner AoE-Abschluss. Starker Single-Target-Juggle mit kleiner Flächenwirkung.",
  },
  {
    tier: "Tier 3",
    effect: "+20% Schaden gegen Gegner mit HP-Schild.",
  },
  {
    tier: "Tier 4",
    effect: "Vitalitätskosten -5, dadurch häufiger einsetzbar.",
  },
];

const usageTips = [
  "Nach einem Stun/Launch einsetzen, um Airtime zu verlängern und Aktionen zu unterbrechen (PvE/PvP).",
  "Mit Inspiration- oder Vitalitäts-Sustain kombinieren, um längere Strings zu fahren.",
  "In Single-Target-Bossfenstern einweben; vermeiden, wenn viele Adds unterbrechen können.",
  "Bei HP-Schilden im Schildfenster treffen, um den Tier-3-Bonus mitzunehmen.",
];

export default function FreeMorphPage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 sm:p-8 shadow-lg shadow-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg3.webp"
            alt="Wuxia-Klippen Hintergrund"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Mystic Skill</p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Update Jan 2025 · TL;DR unten
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">Free Morph – Freischalten & Nutzung</h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Lerne Free Morph, indem du Tian Yings Drehtritte im Challenge-Kampf parierst. Verstehe den Juggle-Fokus, die Tier-Boni
              und wie du den Skill in PvE/PvP-Builds einbindest.
            </p>
            <ul className="text-xs text-emerald-200 space-y-1">
              <li>• TL;DR: Challenge Tian Ying → Drehtritte in Phase 2 parieren → Free Morph erhalten.</li>
              <li>• Kosten 35 Vitalität (Tier 4: -5) · 3s CD · Bonusschaden gegen Ziele mit HP‑Schild.</li>
              <li>• Am besten für Einzelziel-Kontrolle; zwischen Mo Blade/Speer-Posturebreaks oder Dual-Blades-Flurries einweben.</li>
            </ul>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 shadow-inner shadow-slate-950/40">
            <CdnImage
              src="/guides/free-morph/free-morph-icon.webp"
              alt="Free Morph Skill Icon"
              width={72}
              height={72}
              className="rounded-xl border border-slate-700 shadow-lg"
            />
            <div className="text-xs text-slate-200">
              <p className="font-semibold text-emerald-200">Free Morph</p>
              <p>Kosten: 35 Vitalität · 3s CD</p>
              <p>Einzelziel-Juggle, kleiner AoE am Ende</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-inner shadow-slate-950/50">
        <h2 className="text-xl font-bold text-slate-50">Kurzfakten</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 shadow"
            >
              <p className="text-xs uppercase tracking-wide text-emerald-300">{fact.label}</p>
              <p className="mt-1 font-semibold text-slate-50">{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-inner shadow-slate-950/50">
        <h2 className="text-xl font-bold text-slate-50">Freischalt-Schritte</h2>
        <ol className="mt-4 space-y-3 text-sm text-slate-200">
          {unlockSteps.map((step) => (
            <li key={step.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow">
              <p className="font-semibold text-emerald-200">{step.title}</p>
              <p className="mt-1 text-slate-300">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300">
          <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1">Key: Drehtritte parieren</span>
          <span className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1">Phase 2 erreichen</span>
          <Link
            href="/de/guides/tier-list"
            className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-100 hover:border-emerald-300/70"
          >
            Aktuelle Meta ansehen
          </Link>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-inner shadow-slate-950/50">
        <h2 className="text-xl font-bold text-slate-50">Tier-Boni</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {tierBonuses.map((tier) => (
            <div key={tier.tier} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-200 shadow">
              <p className="text-xs uppercase tracking-wide text-emerald-300">{tier.tier}</p>
              <p className="mt-2 leading-relaxed text-slate-300">{tier.effect}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-inner shadow-slate-950/50 space-y-3">
        <h2 className="text-xl font-bold text-slate-50">Einsatz-Tipps</h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-slate-200">
          {usageTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-inner shadow-slate-950/50">
        <h2 className="text-xl font-bold text-slate-50">Synergien & Builds</h2>
        <p className="mt-2 text-sm text-slate-300">
          Free Morph glänzt in Single-Target-Bossen und in PvP-Kits, die Launch/Control stapeln. Kombiniere mit Waffen, die schnell
          Posture brechen (z. B. Speer, Mo-Klinge) oder mit Dual Blades für verlängerte Luftstrings. Halte Vitalität im Blick – wenn
          du auf Tier 4 bist, sinken die Kosten und du kannst öfter casten.
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-xs">
          <Link
            href="/de/guides/builds"
            className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-100 hover:border-emerald-300/70"
          >
            Empfohlene Builds
          </Link>
          <Link
            href="/de/guides/weapons"
            className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-200 hover:border-emerald-300/60"
          >
            Waffenübersicht
          </Link>
        </div>
      </section>
    </article>
  );
}
