import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Free Morph (2025) – Where Winds Meet Mystic Skill",
  description:
    "How to unlock Free Morph in Where Winds Meet by deflecting Challenge Tian Ying's spinning kicks. Updated Jan 2025: quick unlock steps, cost, cooldown, tier bonuses, and best builds.",
  alternates: buildHreflangAlternates("/guides/free-morph"),
  openGraph: {
    title: "Free Morph Mystic Skill (2025) – Where Winds Meet",
    description:
      "Free Morph unlock guide (Jan 2025): deflect Challenge Tian Ying spinning kicks, quick unlock TL;DR, tier bonuses, cost/cooldown, and best use cases.",
    url: "https://wherewindsmeet.org/guides/free-morph",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://wherewindsmeet.org/guides/free-morph/free-morph-icon.webp",
        width: 256,
        height: 256,
        alt: "Free Morph Mystic Skill icon",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Free Morph Mystic Skill (2025) – Where Winds Meet",
    description:
      "How to unlock Free Morph fast, with cost/cooldown, tier bonuses, and PvE/PvP uses.",
    images: ["https://wherewindsmeet.org/guides/free-morph/free-morph-icon.webp"],
  },
};

const quickFacts = [
  { label: "Type", value: "Offensive Mystic – Single-Target Control" },
  { label: "Cost / CD", value: "35 Vitality • 3s cooldown (Tier 4: -5 Vitality)" },
  { label: "Core effect", value: "Launch + midair kick flurry, keeps target juggled, small AoE finisher" },
  { label: "Tier bonus", value: "Tier 3: +20% dmg vs HP Shield | Tier 4: -5 Vitality cost" },
];

const unlockSteps = [
  {
    title: "Start Challenge: Tian Ying",
    desc: "Enter the Challenge version of Tian Ying. You need to reach Phase 2 where the spinning kicks begin.",
  },
  {
    title: "Deflect spinning kicks",
    desc: "Time deflects on Tian Ying’s spinning kicks in Phase 2. Successful deflects unlock Free Morph.",
  },
  {
    title: "Claim Free Morph",
    desc: "After enough deflects, you receive the Mystic. If you miss, restart the encounter and focus on the spin attacks.",
  },
];

const tierBonuses = [
  {
    tier: "Base",
    effect: "Vault up, launch target, midair flurry, small AoE finisher. Single-target juggle, minor splash at the end.",
  },
  {
    tier: "Tier 3",
    effect: "+20% damage to enemies with HP Shields.",
  },
  {
    tier: "Tier 4",
    effect: "Vitality cost -5, making repeated casts cheaper.",
  },
];

const usageTips = [
  "Use after a stun/launch to extend airtime and deny enemy actions (PvE/PvP).",
  "Pair with Inspiration-saving buffs or Vitality sustain for longer strings.",
  "Weave it into single-target boss windows; avoid wasting it when multiple enemies can interrupt.",
  "If the target has an HP Shield, aim to hit during the shield window to leverage the Tier 3 bonus.",
];

export default function FreeMorphPage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 sm:p-8 shadow-lg shadow-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg3.webp"
            alt="Wuxia cliff backdrop"
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
              Updated Jan 2025 · Quick unlock TL;DR below
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">Free Morph – How to Unlock & Use</h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Learn Free Morph by deflecting Tian Ying’s spinning kicks in the Challenge encounter. Understand its juggle-focused
              effect, tier bonuses, and how to slot it into PvE/PvP builds.
            </p>
            <ul className="text-xs text-emerald-200 space-y-1">
              <li>• TL;DR: Challenge Tian Ying → parry spinning kicks in Phase 2 → claim Free Morph drop.</li>
              <li>• Cast cost 35 Vitality (Tier 4: -5) · 3s CD · bonus damage vs HP Shield.</li>
              <li>• Best for single-target control; weave between Mo Blade/Spear posture breaks or Dual Blades flurries.</li>
            </ul>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 shadow-inner shadow-slate-950/40">
            <Image
              src="/guides/free-morph/free-morph-icon.webp"
              alt="Free Morph skill icon"
              width={72}
              height={72}
              className="h-16 w-16 rounded-xl bg-slate-800/70 border border-slate-700"
            />
            <div className="text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Free Morph</p>
              <p className="text-xs text-slate-400">Offensive Mystic • Single-Target Control</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 text-xs">
            <Link
              href="/guides/bosses"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Boss list & weak points
            </Link>
            <Link
              href="/guides/tier-list"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              China tier list (weapons)
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Quick Facts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {quickFacts.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
              <p className="text-sm text-slate-200 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-2xl font-bold text-slate-50">How to Unlock Free Morph</h2>
          <span className="text-xs text-slate-500">Source: Challenge Tian Ying (spin-kick deflect)</span>
        </div>
        <ol className="space-y-3 list-decimal list-inside text-sm text-slate-300">
          {unlockSteps.map((step) => (
            <li key={step.title}>
              <p className="font-semibold text-slate-50">{step.title}</p>
              <p className="text-slate-300">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="rounded-2xl border border-amber-500/30 bg-amber-900/20 p-4 text-xs text-amber-100">
          Tip: If you miss the deflect window, restart the encounter and focus on parrying only the spinning kick strings. The skill
          unlocks once you’ve deflected enough of these attacks in Phase 2.
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Skill Details & Tier Bonuses</h2>
        <div className="space-y-3">
          {tierBonuses.map((item) => (
            <div key={item.tier} className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.tier}</p>
              <p className="text-sm text-slate-200">{item.effect}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          Costs/cooldown are based on Tier 4 data from top guides (Game8, allthings.how). Earlier tiers have the same cooldown but
          higher Vitality cost until Tier 4.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">How to Use Free Morph in Builds</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          {usageTips.map((tip) => (
            <li key={tip}>• {tip}</li>
          ))}
        </ul>
        <div className="rounded-2xl border border-emerald-600/30 bg-emerald-950/30 p-4 text-sm text-emerald-100">
          Pair with other single-target juggle tools (Talon Strike, Yaksha Rush) in PvE bossing, or use as a surprise control tool in
          PvP after forcing a whiff. Lower Vitality cost at Tier 4 makes it safer to weave between mobility skills.
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Related resources</h2>
        <ul className="space-y-2 text-sm text-emerald-200">
          <li>
            <Link href="/guides/gift-of-gab" className="underline underline-offset-4 hover:text-emerald-100">
              Gift of Gab – Scholar mastery & dialogue skill farming
            </Link>
          </li>
          <li>
            <Link href="/guides/weapons" className="underline underline-offset-4 hover:text-emerald-100">
              Weapons encyclopedia – find single-target control synergies
            </Link>
          </li>
          <li>
            <Link href="/guides/builds" className="underline underline-offset-4 hover:text-emerald-100">
              Builds – PvE/PvP archetypes updated for recent patches
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
