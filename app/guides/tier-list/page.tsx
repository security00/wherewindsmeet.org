'use client';

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const quickTierRows = [
  {
    tier: "S",
    pve: "Nameless Sword, Spear, Mo Blade, Umbrella",
    pvp: "Umbrella counter builds, Dual Blades, Rope Dart",
    notes:
      "Best-in-slot options for most players. These weapons feel strong in nearly all content once you learn basic routes and reward long-term investment.",
    style: "card-tier-s",
    icon: "🐉",
  },
  {
    tier: "A",
    pve: "Fan, hybrid Sword + Spear, supportive Umbrella/Fan",
    pvp: "Spear bruisers, Fan / Umbrella control setups",
    notes:
      "Very strong when played to their strengths and paired with the right builds. Great if you like experimenting without giving up too much consistency.",
    style: "card-tier-a",
    icon: "🐅",
  },
  {
    tier: "B",
    pve: "Greedy glass-cannon builds, off-meta hybrids",
    pvp: "Experimental mix-ups and niche counters",
    notes:
      "Viable but more demanding or narrow in focus. Ideal for experienced players who enjoy matchup practice, off-meta styles, and high risk–high reward setups.",
    style: "card-tier-b",
    icon: "🐆",
  },
  {
    tier: "C",
    pve: "Unfinished or overly narrow setups",
    pvp: "Gimmick-only routes",
    notes:
      "Mostly for dedicated enthusiasts or side projects. Best picked when you love the fantasy and already understand core systems from a stronger main weapon.",
    style: "card-tier-c",
    icon: "🐇",
  },
];

export default function TierListPage() {
  const sheetContainerRef = useRef<HTMLDivElement | null>(null);
  const [isSheetFullscreen, setIsSheetFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsSheetFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const toggleSheetFullscreen = () => {
    const container = sheetContainerRef.current;
    if (!container) return;
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      container.requestFullscreen?.();
    }
  };

  return (
    <article className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl shadow-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/design/bg.jpg"
            alt="Where Winds Meet tier list background art"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Where Winds Meet <span className="text-ink-gold">Tier List</span>
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-wide text-emerald-400/80">
              PVE & PVP · Global Launch 1.0
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              A practical guide for real players. We prioritize <span className="text-slate-100 font-semibold">comfort, consistency, and style</span> over theoretical spreadsheet numbers. Find the path that lets you master the Jianghu.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tier Cards Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 border-brush inline-block pb-1">
            Quick Tier Snapshot
          </h2>
          <span className="text-xs text-slate-400">Updated for Patch 1.0</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {quickTierRows.map((row, index) => (
            <motion.div
              key={row.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl p-6 ${row.style} group transition-all hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950/50 text-2xl shadow-inner">
                    {row.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {row.tier} Tier
                    </h3>
                    <p className="text-xs text-slate-400">Overall Power</p>
                  </div>
                </div>
                <div className="rounded-full bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">
                  Meta Pick
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">PVE Highlights</span>
                  <p className="mt-1 text-sm font-medium text-slate-200">{row.pve}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">PVP Highlights</span>
                  <p className="mt-1 text-sm font-medium text-slate-200">{row.pvp}</p>
                </div>
                <div className="relative mt-4 rounded-xl bg-slate-950/40 p-3 text-xs leading-relaxed text-slate-400">
                  <span className="absolute -left-1 top-3 h-8 w-1 rounded-r-full bg-slate-700/50" />
                  {row.notes}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="grid gap-8 lg:grid-cols-3 pb-6 lg:pb-10">
        <div className="lg:col-span-2 space-y-8">
          {/* Best Builds Section */}
          <div className="card-wuxia rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-ink-gold mb-6 border-brush inline-block pb-2">Best Builds & Class Styles</h2>
            <p className="mb-6 text-slate-300 leading-relaxed">
              In practice, most players do not think in pure weapon names—they think in “classes” or build fantasies. The setups below translate S and A tier tools into concrete builds you can aim for.
            </p>
            <div className="space-y-6">
              <article className="group relative rounded-xl border border-slate-800/50 bg-slate-900/20 p-6 transition-all hover:bg-slate-900/40 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                    裂石·威 – Mo Blade Frontline
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">S Tier Tank</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Combines Mo Blade's heavy hits with strong shields and survivability. Ideal if you want to anchor groups, face bosses head-on, and still deal meaningful damage.
                </p>
                <p className="text-xs text-slate-500">
                  Key Synergy: <span className="text-slate-400">Supportive arts or Umbrella tools for constant uptime.</span>
                </p>
                <Link href="/guides/builds" className="absolute inset-0" />
              </article>

              <article className="group relative rounded-xl border border-slate-800/50 bg-slate-900/20 p-6 transition-all hover:bg-slate-900/40 hover:border-red-500/30">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-red-300 transition-colors">
                    鳴金·影 – Sword + Spear Bleed
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">S Tier DPS</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  These builds use spear skills to stack bleed and other debuffs, then swap to sword to detonate them. Simpler Nameless Sword + Nameless Spear routes work great for beginners; advanced variants push damage much higher.
                </p>
                <p className="text-xs text-slate-500">
                  Playstyle: <span className="text-slate-400">High APM, debuff management, burst windows.</span>
                </p>
                <Link href="/guides/builds" className="absolute inset-0" />
              </article>

              <article className="group relative rounded-xl border border-slate-800/50 bg-slate-900/20 p-6 transition-all hover:bg-slate-900/40 hover:border-cyan-500/30">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    破竹·風 – Dual Blades Assassin
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">PVP Specialist</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Rope Dart drags targets out of position, then Dual Blades dive in to finish the job. It is mechanically demanding but extremely satisfying if you enjoy reads, feints, and turning enemy mistakes into instant deletes.
                </p>
                <p className="text-xs text-slate-500">
                  Focus: <span className="text-slate-400">Isolation, burst damage, mobility.</span>
                </p>
                <Link href="/guides/builds" className="absolute inset-0" />
              </article>
            </div>
          </div>

          {/* How to Read Section */}
          <div className="card-wuxia rounded-3xl p-8 space-y-4">
            <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">How to Read This Tier List</h2>
            <p className="text-slate-300 leading-relaxed">
              Each tier reflects an overall impression that blends damage, survivability, ease of use, and flexibility. Instead of obsessing over micro differences, we group weapons into bands of power.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 marker:text-emerald-500">
              <li><span className="text-slate-100 font-medium">PVE vs PVP:</span> Weapons are grouped by real endgame performance. PVE favors consistency and control; PVP favors burst and mobility.</li>
              <li><span className="text-slate-100 font-medium">Tiers are not destiny:</span> A dedicated player with a C-tier favorite can often outperform a meta-chaser who doesn't know their rotation.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {/* Philosophy Section */}
          <div className="card-wuxia rounded-3xl p-6">
            <h3 className="text-lg font-bold text-slate-100 mb-4 border-b border-slate-800 pb-2">Tier List Philosophy</h3>
            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <p>
                This list is built for <span className="text-slate-200">consistency</span>. An S-tier weapon that requires frame-perfect inputs might be B-tier for a casual player.
              </p>
              <p>
                We prioritize options that perform well in <span className="text-slate-200">lag, chaos, and uncoordinated groups</span>.
              </p>
              <p>
                Updates will happen after large patches or seasonal events. We won't shift rankings just for novelty.
              </p>
            </div>
          </div>

          {/* Strategy Section */}
          <div className="card-wuxia rounded-3xl p-6">
            <h3 className="text-lg font-bold text-slate-100 mb-4 border-b border-slate-800 pb-2">Build Strategy</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Look for synergies. A strong crowd control weapon might pair best with a sustain-focused build.
            </p>
            <div className="rounded bg-slate-950/50 p-3 text-xs text-slate-500 italic border border-slate-800">
              "The most important question is not 'what is S tier', but 'what feels powerful in my hands'."
            </div>
          </div>

          {/* Navigation */}
          <div className="card-wuxia rounded-3xl p-6">
            <h3 className="text-lg font-bold text-slate-100 mb-4">More Guides</h3>
            <div className="flex flex-col gap-2">
              <Link href="/guides/pvp-tier-list" className="block rounded-lg bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors border border-transparent hover:border-slate-700">
                ⚔️ PVP Specific Tier List
              </Link>
              <Link href="/guides/weapons" className="block rounded-lg bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors border border-transparent hover:border-slate-700">
                🗡️ All Weapon Guides
              </Link>
              <Link href="/guides/codes" className="block rounded-lg bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors border border-transparent hover:border-slate-700">
                💎 Latest Codes
              </Link>
            </div>
          </div>
        </div>

        {/* Community Video and Spreadsheet Reference */}
        <div className="lg:col-span-3">
          <div className="card-wuxia rounded-3xl p-6 md:p-8 space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-100 border-b border-slate-800 pb-2">
                  Community Video & Sheet
                </h3>
                <div className="mt-2 space-y-1 text-sm text-slate-400 leading-relaxed">
                  <p>The video and sheet sit side by side so you can absorb context without jumping away.</p>
                  <p className="text-slate-300">Sheet is community-maintained and read-only here; open it in Google Sheets if you need more room.</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.2fr,1fr] lg:grid-cols-[1.4fr,1fr]">
              <div className="space-y-2.5">
                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  Video overview (YouTube, no cookies)
                </p>
                <motion.div
                  className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/70 shadow-lg shadow-slate-950/40"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-20%" }}
                >
                  <iframe
                    title="Where Winds Meet weapons overview (YouTube ID: YPNX4GaUzr8)"
                    src="https://www.youtube-nocookie.com/embed/YPNX4GaUzr8"
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </motion.div>
              </div>
              <div className="space-y-2.5">
                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  Community-maintained weapon sheet
                </p>
                <motion.div
                  className="relative h-[640px] sm:h-[700px] md:h-[760px] lg:h-[840px] w-full overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/70 shadow-lg shadow-slate-950/40"
                  ref={sheetContainerRef}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  viewport={{ once: true, margin: "-20%" }}
                >
                  <iframe
                    title="Where Winds Meet weapons spreadsheet"
                    src="https://docs.google.com/spreadsheets/d/1Ke0X96XtUmqrzVriYfByz7FeM2wTFYjzDMIPtNUF0bo/preview?gid=991882874"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <button
                    type="button"
                    onClick={toggleSheetFullscreen}
                    className="absolute bottom-3 right-3 z-10 rounded-full border border-emerald-500/40 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-emerald-200 shadow-lg shadow-emerald-900/30 backdrop-blur hover:-translate-y-[1px] hover:border-emerald-400/70 hover:text-emerald-100 transition"
                    aria-label={isSheetFullscreen ? "Exit full screen" : "View sheet in full screen"}
                  >
                    {isSheetFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                  </button>
                </motion.div>
                <div className="text-xs text-slate-500">
                  Scroll to view fields. Want a wider view?{" "}
                  <a
                    className="text-emerald-300 hover:text-emerald-200 underline decoration-dashed decoration-emerald-500/70"
                    href="https://docs.google.com/spreadsheets/d/1Ke0X96XtUmqrzVriYfByz7FeM2wTFYjzDMIPtNUF0bo/edit?gid=991882874"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View full sheet
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
