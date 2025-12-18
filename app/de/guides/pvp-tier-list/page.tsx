import * as motion from "framer-motion/client";
import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { weapons } from "@/lib/weapons.de";

export const metadata: Metadata = {
  title: "Where Winds Meet PvP-Tierliste – Duelle & PvP-Waffen (DE)",
  description:
    "Deutsche PvP-Tierliste (Tierlist) für Where Winds Meet: Waffen-Ranking für Duelle, Small-Scale-PvP und kompetitive Kämpfe – inklusive kurzer Meta-Einordnung.",
  alternates: buildHreflangAlternates("/guides/pvp-tier-list", { canonicalLanguage: "de" }),
};

const pvpTiers = [
  {
    name: "S Tier",
    summary: "Meta-dominiert: hohe Mobilität oder starker Kontroll-Druck, der das Tempo vorgibt.",
    style: "card-tier-s",
    color: "from-red-600 to-orange-600",
    tierId: "S",
  },
  {
    name: "A Tier",
    summary: "Sehr stark und wettbewerbsfähig. Mit Skill oder Counter-Builds können S-Tier-Picks geschlagen werden.",
    style: "card-tier-a",
    color: "from-orange-500 to-yellow-500",
    tierId: "A",
  },
  {
    name: "B Tier",
    summary: "Spielbar, aber „ehrlich“. Weniger überstarke Tools – saubere Grundlagen sind wichtiger.",
    style: "card-tier-b",
    color: "from-blue-500 to-cyan-500",
    tierId: "B",
  },
];

export default function PVPTierListPage() {
  const roleLabelMap: Record<string, string> = {
    Assassin: "Assassine",
    Control: "Kontrolle",
    Tank: "Tank",
    Bleed: "Blutung",
    Balanced: "Ausgewogen",
    Support: "Support",
    "Parry/Konter": "Parade/Konter",
    "Mobile Control / Picks": "Mobile Kontrolle / Picks",
  };

  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl shadow-black/50">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg1.webp"
            alt="Where Winds Meet PvP-Tierliste Hintergrund"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl font-serif">
            PvP-Meta <span className="text-ink-red">auf einen Blick</span>
          </h1>
          <div className="max-w-3xl space-y-4 text-slate-300 leading-relaxed font-sans">
            <p>
              Die aktuelle Meta belohnt <span className="text-slate-100 font-medium">hohe Mobilität</span> und{" "}
              <span className="text-slate-100 font-medium">Burst-Schaden</span>. Starre Defensivansätze geraten gegen schnelle Top-Picks
              schnell unter Druck.
            </p>
            <p>
              Diese Tierliste ordnet Waffen nach ihrer Performance in Duellen auf hohem Niveau und in kleinen Skirmishes ein.
            </p>
          </div>
        </div>
      </section>

      {/* Tier List Grid */}
      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-slate-100 font-serif">
            Waffen-Tierliste
          </h2>
          <span className="text-xs text-slate-500 font-mono">Stand: Early Access</span>
        </div>

        <div className="grid gap-8">
          {pvpTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 ${tier.style}`}
            >
              {/* Tier Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${tier.color} text-3xl font-black text-white shadow-lg`}>
                  {tier.name.split(" ")[0]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 font-serif">{tier.name}</h3>
                  <p className="text-sm text-slate-400 font-sans">{tier.summary}</p>
                </div>
              </div>

              {/* Weapons Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {weapons
                  .filter((w) => w.tier === tier.tierId)
                  .map((weapon) => (
                    <Link
                      key={weapon.id}
                      href={`/de${weapon.buildLink}`}
                      className="group relative flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:border-white/10 hover:bg-white/10 hover:translate-x-1"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-950 border border-slate-800">
                        <CdnImage
                          src={weapon.localIcon}
                          alt={weapon.name}
                          fill
                          className="object-contain p-1 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-200 group-hover:text-ink-gold transition-colors font-serif">
                            {weapon.name}
                          </h4>
                        </div>
                        <span className={`inline-block mt-1 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${weapon.role === "Assassin" ? "bg-red-500/10 text-red-400" :
                          weapon.role === "Control" ? "bg-purple-500/10 text-purple-400" :
                            weapon.role === "Tank" ? "bg-blue-500/10 text-blue-400" :
                              weapon.role === "Bleed" ? "bg-orange-500/10 text-orange-400" :
                                "bg-emerald-500/10 text-emerald-400"
                          }`}>
                          {roleLabelMap[weapon.role] ?? weapon.role}
                        </span>
                      </div>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        <span className="text-slate-400">→</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Meta Analysis */}
      <section className="grid gap-6 md:grid-cols-2">
        <div className="card-wuxia p-6 space-y-4">
          <h3 className="text-lg font-bold text-ink-gold font-serif">Warum S-Tier?</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            <span className="text-slate-100 font-medium">Dual Blades</span> und{" "}
            <span className="text-slate-100 font-medium">Umbrella</span> bestimmen aktuell oft das Tempo.
            Dual Blades können fast jederzeit rein und wieder raus – ohne harten CC sind sie schwer festzunageln.
            Umbrella bringt verlässliche Kontrolle auf Distanz und zwingt Gegner eher in die Defensive.
          </p>
        </div>
        <div className="card-wuxia p-6 space-y-4">
          <h3 className="text-lg font-bold text-ink-gold font-serif">Geheimtipps</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            <span className="text-slate-100 font-medium">Sword + Spear</span>-Bleed-Builds können rechnerisch extrem hohen DPS liefern,
            benötigen aber nahezu perfekte Uptime. Verschiebt sich die Meta zu tankigeren Brawls, können diese Setups schnell Richtung S-Tier rutschen.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900/40 to-slate-900/40 p-8 text-center border border-emerald-500/20">
        <h2 className="text-2xl font-bold text-slate-100 mb-2 font-serif">Brauchst du einen konkreten Build?</h2>
        <p className="text-slate-400 mb-6 font-sans">
          Hier findest du Details zu Stats, Skills und Kombos – oder du springst direkt in eine Combos-Datenbank.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/de/tools/pvp-combos"
            className="inline-flex items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-6 py-3 text-sm font-bold text-emerald-100 shadow-lg shadow-emerald-900/20 transition-all hover:border-emerald-400/70 hover:text-emerald-50 hover:scale-105"
          >
            PVP Combos Tool →
          </Link>
        <Link
          href="/de/guides/builds"
          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition-all hover:bg-emerald-500 hover:scale-105"
        >
          Alle Builds ansehen
        </Link>
        </div>
      </section>
    </article>
  );
}
