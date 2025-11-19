import * as motion from "framer-motion/client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Where Winds Meet PVP Tier List - Dueling & PvP Weapons",
  description:
    "Where Winds Meet PVP tier list ranking weapons for dueling, small-scale PVP, and competitive combat. Learn which weapons dominate in PVP and how to build for player-vs-player success.",
  alternates: {
    canonical: "https://wherewindsmeet.org/guides/pvp-tier-list",
  },
};

const pvpTiers = [
  {
    name: "S Tier",
    summary:
      "Dominant in most PVP matchups. High burst, superior mobility, or oppressive control.",
    style: "card-tier-s",
    icon: "⚔️",
  },
  {
    name: "A Tier",
    summary:
      "Consistently viable in duels. Excel in specific scenarios or against unprepared opponents.",
    style: "card-tier-a",
    icon: "🗡️",
  },
  {
    name: "B Tier",
    summary:
      "Situationally strong. Require smart play and matchup knowledge to succeed.",
    style: "card-tier-b",
    icon: "🛡️",
  },
  {
    name: "C Tier",
    summary:
      "Niche or high-skill ceiling options. Playable with dedication but face uphill battles.",
    style: "card-tier-c",
    icon: "🥋",
  },
];

export default function PVPTierListPage() {
  return (
    <article className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl shadow-black/50">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg1.png"
            alt="Where Winds Meet PVP tier list background"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Where Winds Meet <span className="text-ink-red">PVP Tier List</span>
          </h1>
          <div className="max-w-3xl space-y-4 text-slate-300 leading-relaxed">
            <p>
              PVP in Where Winds Meet is fundamentally different from PVE. You are no
              longer fighting predictable AI; you are competing against real players
              with unpredictable decision-making, counter-strategies, and skill-based
              plays.
            </p>
            <p>
              A weapon that dominates story bosses might struggle against
              seasoned PVP opponents. This list focuses exclusively on competitive viability,
              helping you choose weapons that have favorable matchups and a clear path to victory.
            </p>
          </div>
        </div>
      </section>

      {/* PVP vs PVE Section */}
      <section className="card-wuxia rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          How PVP differs from PVE
        </h2>
        <p className="text-slate-300 leading-relaxed">
          In PVE, bosses follow scripts. In PVP, opponents improvise. This tier list emphasizes <span className="text-ink-red font-medium">burst potential</span>, <span className="text-ink-red font-medium">mix-ups</span>, and <span className="text-ink-red font-medium">defensive utility</span>.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Commitment Kills</h3>
            <p className="text-sm text-slate-400">
              Long animations get punished. PVP favors weapons that can cancel animations or strike quickly.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Utility is King</h3>
            <p className="text-sm text-slate-400">
              Gap closers, interrupts, and anti-heal tools are often more valuable than raw DPS numbers.
            </p>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5">
            <h3 className="text-lg font-semibold text-slate-100 mb-2">Matchups Matter</h3>
            <p className="text-sm text-slate-400">
              Some weapons hard-counter others. Flexibility and side-decking skills are essential.
            </p>
          </div>
        </div>
      </section>

      {/* Tier Overview Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          PVP Tier Overview
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {pvpTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl p-6 ${tier.style} group transition-all hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-2xl font-bold text-slate-100">{tier.name}</h3>
                <span className="text-3xl filter drop-shadow-lg">{tier.icon}</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm">
                {tier.summary}
              </p>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-slate-400 italic text-center mt-4">
          "A master with a bamboo stick defeats a novice with a legendary sword." — Jianghu Proverb
        </p>
      </section>

      {/* Weapon Categories */}
      <section className="card-wuxia rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          Weapon Archetypes
        </h2>
        <div className="space-y-4">
          <div className="group rounded-xl border border-slate-800 bg-slate-950/40 p-5 transition-colors hover:border-red-500/30 hover:bg-slate-900/60">
            <h3 className="text-lg font-semibold text-red-400 mb-2">Burst Assassins</h3>
            <p className="text-sm text-slate-300">
              Designed to delete opponents quickly. Excel at catching enemies out of position but vulnerable between cooldowns.
            </p>
          </div>
          <div className="group rounded-xl border border-slate-800 bg-slate-950/40 p-5 transition-colors hover:border-emerald-500/30 hover:bg-slate-900/60">
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Control Specialists</h3>
            <p className="text-sm text-slate-300">
              Dominate through spacing and denial. They win by making opponents uncomfortable and forcing mistakes.
            </p>
          </div>
          <div className="group rounded-xl border border-slate-800 bg-slate-950/40 p-5 transition-colors hover:border-yellow-500/30 hover:bg-slate-900/60">
            <h3 className="text-lg font-semibold text-yellow-400 mb-2">Balanced Duelists</h3>
            <p className="text-sm text-slate-300">
              Strong neutral game and reliable damage. They win through solid fundamentals rather than gimmicks.
            </p>
          </div>
        </div>
      </section>

      {/* Build Guide CTA */}
      <section className="card-wuxia rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-slate-100">
            Ready to build your character?
          </h2>
          <p className="text-slate-400 text-sm">
            Choosing a weapon is just the first step. Optimize your stats and skills for the arena.
          </p>
        </div>
        <Link
          href="/guides/builds"
          className="shrink-0 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition-all hover:scale-105 hover:shadow-emerald-900/40"
        >
          View PVP Builds
        </Link>
      </section>

      {/* Skill Development */}
      <section className="card-wuxia rounded-3xl p-8 space-y-4">
        <h2 className="text-xl font-bold text-slate-100 border-brush inline-block pb-2">
          The Path to Mastery
        </h2>
        <p className="text-slate-300 leading-relaxed text-sm">
          Early PVP matches will feel chaotic. You are simultaneously learning your weapon, your opponent, and the game mechanics.
          Give yourself permission to lose. Every loss teaches something. Eventually, the chaos slows down, and you start seeing the matrix.
        </p>
      </section>
    </article>
  );
}
