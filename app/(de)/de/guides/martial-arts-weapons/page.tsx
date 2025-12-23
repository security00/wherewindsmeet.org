import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Kampfkunst-Waffen Liste & Freischalt-Guide | Where Winds Meet (DE)",
  description:
    "Vergleichstabelle aller 12 Kampfkunst-Waffen in Where Winds Meet: Bilder, Pfad-Fokus, Signature-Skills und Freischaltwege via Skill Theft oder Sekten.",
  alternates: buildHreflangAlternates("/guides/martial-arts-weapons", { canonicalLanguage: "de" }),
};

const martialArtPaths = [
  {
    id: "bellstrike-splendor",
    name: "Bellstrike - Splendor",
    focus: "Hohe Mobilität, geladene Single-Target-Schläge, stark gegen Bosse.",
    flavor: "Für Spieler, die hineinstechen, Charge-Ketten spielen und vor Kontern wieder raus sind.",
    relatedWeapons: ["Nameless Sword", "Nameless Spear"],
  },
  {
    id: "bellstrike-umbra",
    name: "Bellstrike - Umbra",
    focus: "Beweglicher Blut-/Wund-Druck mit schnellen Treffern und Ausweichfenstern.",
    flavor: "Setzt Wunden, lässt Gegner ausbluten, während du dich ständig neu positionierst.",
    relatedWeapons: ["Strategic Sword", "Heavenquaker Spear"],
  },
  {
    id: "silkbind-jade",
    name: "Silkbind - Jade",
    focus: "Fernkampf-, Luft- und Zoning-Kontrolle mit hoher Eleganz und Mobilität.",
    flavor: "Belohnt präzises Timing und Spacing – ideal für Duelle und stilvolles Keep-Away.",
    relatedWeapons: ["Inkwell Fan", "Vernal Umbrella"],
  },
  {
    id: "silkbind-deluge",
    name: "Silkbind - Deluge",
    focus: "Support-Kit mit Heilungen, Revives und Gruppen-Schadensbuffs.",
    flavor: "Hält das Team am Leben und bufft Schaden, während du aus sicherer Position wirkst.",
    relatedWeapons: ["Panacea Fan", "Soulshade Umbrella"],
  },
  {
    id: "bamboocut-wind",
    name: "Bamboocut - Wind",
    focus: "Unbarmherziger DPS-Druck und extreme Mobilität, wenig Eigen-Defense.",
    flavor: "Spielgefühl wie Glas-Kanone: nonstop Druck, Ausweichen statt Tanken.",
    relatedWeapons: ["Infernal Twinblades", "Mortal Rope Dart"],
  },
  {
    id: "stonesplit-might",
    name: "Stonesplit - Might",
    focus: "Standhafte Haltung, Crowd-Control-Resistenz, einfache Flächenabdeckung.",
    flavor: "Hält die Linie, steckt Kontrolle weg, cleavt Gruppen ohne einzuknicken.",
    relatedWeapons: ["Stormbreaker Spear", "Thundercry Blade"],
  },
];

const martialArtWeapons = [
  {
    id: "heavenquaker-spear",
    name: "Heavenquaker Spear",
    pathId: "bellstrike-umbra",
    image: "/martial-arts/weapons/heavenquaker-spear.png",
    mainSkills: ["Sweep All", "Sober Sorrow", "Spear - Conversion"],
    basicSkills: ["Spear - Light Attack"],
    chargedSkills: ["Drifting Thrust / Spear - Heavy Attack"],
    unlockMethods: [
      "Im Heavenquaker-Spear-Heiligtum via Skill Theft stehlen.",
      "Der Raging-Tides-Sekte beitreten.",
    ],
  },
  {
    id: "infernal-twinblades",
    name: "Infernal Twinblades",
    pathId: "bamboocut-wind",
    image: "/martial-arts/weapons/infernal-twinblades.png",
    mainSkills: ["Calamity's Greed", "Addled Mind", "Dual Blades - Dual-Weapon Skill"],
    basicSkills: ["Dual Blades - Light Attack / Heaven's Wrath"],
    chargedSkills: ["Flamelash"],
    unlockMethods: [
      "Im Midnight-Mercy-Heiligtum via Skill Theft stehlen.",
      "Der Midnight-Mercy-Sekte beitreten.",
      "Von Qi Sheng nach Abgabe deiner ersten Kuriosität (Oddity).",
    ],
  },
  {
    id: "inkwell-fan",
    name: "Inkwell Fan",
    pathId: "silkbind-jade",
    image: "/martial-arts/weapons/inkwell-fan.png",
    mainSkills: ["Mountain Sky", "Jadewind Shield", "Fan - Conversion"],
    basicSkills: ["Fan - Light Attack / Forsaken Fame"],
    chargedSkills: ["Fan - Heavy Attack / Moonlit Spring"],
    unlockMethods: [
      "Im Inkwell-Fan-Heiligtum via Skill Theft stehlen.",
      "Der Silver-Needle-Sekte beitreten.",
    ],
  },
  {
    id: "mortal-rope-dart",
    name: "Mortal Rope Dart",
    pathId: "bamboocut-wind",
    image: "/martial-arts/weapons/mortal-rope-dart.png",
    mainSkills: ["Rodent Rampage", "Bladebound Thread", "Rope Dart - Conversion"],
    basicSkills: ["Rope Dart - Light Attack / Coiled Loong"],
    chargedSkills: ["Rodent's Resilience"],
    unlockMethods: [
      "Der Nine-Mortal-Ways-Sekte beitreten.",
      "Als Schüler verkleiden, um Nine Mortal Ways zu infiltrieren.",
    ],
  },
  {
    id: "nameless-spear",
    name: "Nameless Spear",
    pathId: "bellstrike-splendor",
    image: "/martial-arts/weapons/nameless-spear.png",
    mainSkills: ["Legion Breaker", "Qiankun's Lock", "Spear - Conversion"],
    basicSkills: ["Spear - Light Attack"],
    chargedSkills: ["Storm Dance / Spear - Heavy Attack"],
    unlockMethods: ["Standardmäßig freigeschaltet."],
  },
  {
    id: "nameless-sword",
    name: "Nameless Sword",
    pathId: "bellstrike-splendor",
    image: "/martial-arts/weapons/nameless-sword.png",
    mainSkills: ["Shadow Step", "Fearless Lunge", "Sword - Conversion"],
    basicSkills: ["Sword - Light Attack"],
    chargedSkills: ["Homeless Charge"],
    unlockMethods: ["Standardmäßig freigeschaltet."],
  },
  {
    id: "vernal-umbrella",
    name: "Vernal Umbrella",
    pathId: "silkbind-jade",
    image: "/martial-arts/weapons/vernal-umbrella.png",
    mainSkills: ["Unfaded Flower", "Spring Sorrow", "Umbrella - Conversion"],
    basicSkills: ["Umbrella - Light Attack / Spring Away"],
    chargedSkills: ["Apricot Heaven / Colorful Phoenix"],
    unlockMethods: [
      "Im Time Tower via Skill Theft stehlen.",
      "Von Qi Sheng nach Abgabe deiner ersten Kuriosität (Oddity).",
    ],
  },
  {
    id: "panacea-fan",
    name: "Panacea Fan",
    pathId: "silkbind-deluge",
    image: "/martial-arts/weapons/panacea-fan.png",
    mainSkills: [
      "Light Dust After Morning Rain / Resurrection",
      "Mistbound Aid / Endless Cloud",
      "Fan - Conversion",
    ],
    basicSkills: ["Fourfold Inquiry"],
    chargedSkills: ["Emerald Dewtouch"],
    unlockMethods: [
      "Der Silver-Needle-Sekte beitreten.",
      "Von Qi Sheng nach Abgabe deiner ersten Kuriosität (Oddity).",
    ],
  },
  {
    id: "soulshade-umbrella",
    name: "Soulshade Umbrella",
    pathId: "silkbind-deluge",
    image: "/martial-arts/weapons/soulshade-umbrella.png",
    mainSkills: ["Echoes of a Thousand Plants", "Floating Grace", "Umbrella - Conversion"],
    basicSkills: ["Umbrella - Light Attack"],
    chargedSkills: ["Pale Petal / Umbrella Heavy Attack"],
    unlockMethods: [
      "In der Soulshade-Umbrella-Poststation via Skill Theft stehlen.",
      "Der Hollow-Vale-Sekte beitreten.",
    ],
  },
  {
    id: "stormbreaker-spear",
    name: "Stormbreaker Spear",
    pathId: "stonesplit-might",
    image: "/martial-arts/weapons/stormbreaker-spear.png",
    mainSkills: ["Thunder Shock", "Storm Roar", "Spear - Conversion"],
    basicSkills: ["Spear - Light Attack"],
    chargedSkills: ["Fury Spear / Spear - Heavy Attack"],
    unlockMethods: [
      "Im Silver-Needle-Heiligtum via Skill Theft stehlen.",
      "Per Ingame-Post erhalten.",
    ],
  },
  {
    id: "strategic-sword",
    name: "Strategic Sword",
    pathId: "bellstrike-umbra",
    image: "/martial-arts/weapons/strategic-sword.png",
    mainSkills: ["Third Track Recoil", "Inner Track Slash", "Sword - Conversion"],
    basicSkills: ["Sword - Light Attack"],
    chargedSkills: ["Second Track Slash / Sword - Heavy Attack"],
    unlockMethods: ["Im Strategic-Sword-Heiligtum via Skill Theft stehlen."],
  },
  {
    id: "thundercry-blade",
    name: "Thundercry Blade",
    pathId: "stonesplit-might",
    image: "/martial-arts/weapons/thundercry-blade.png",
    mainSkills: ["Sunrush Gale", "Predator's Shield / Shifting Heaven", "Mo Blade - Conversion"],
    basicSkills: ["Mo Blade - Light Attack / Galecloud Cleave"],
    chargedSkills: ["Avalanche"],
    unlockMethods: [
      "Im Well-of-Heaven-Martial-Camp via Skill Theft stehlen.",
      "Der Well-of-Heaven-Sekte beitreten.",
      "Von Qi Sheng nach Abgabe deiner ersten Kuriosität (Oddity).",
    ],
  },
];

const pathLookup = Object.fromEntries(martialArtPaths.map((path) => [path.id, path]));

export default function MartialArtsWeaponsDePage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg5.webp"
            alt="Where Winds Meet Kampfkünste Hintergrund"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">Schnellüberblick Kampfkünste</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Alle Kampfkunst-Waffen mit Bildern, Skills und Freischaltwegen.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Jede Kampfkunst ist an eine Waffe gebunden. Die Tabelle spiegelt die Wiki-Struktur: Icons, Pfad-Tags, Signature-Skills und die exakten Freischalt-Schritte.
            Kombiniere sie mit dem{" "}
            <Link
              href="/de/guides/skill-theft"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Skill-Theft-Guide
            </Link>{" "}
            für Stealth-Routen und mit den{" "}
            <Link
              href="/de/guides/sects"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Sekten-Überblick
            </Link>{" "}
            wenn du lieber beitrittst statt zu stehlen, sowie mit den{" "}
            <Link
              href="/de/guides/builds"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              Build-Empfehlungen
            </Link>{" "}
            falls du deine Rolle vorher planen willst.
          </p>
          <p className="text-xs text-slate-400 sm:text-sm">
            Tipp: Du kannst zwei Kampfkünste gleichzeitig ausrüsten. Kombiniere z. B. Support + DPS (Silkbind - Deluge + Stonesplit - Might), um Überleben und Gruppenschaden abzudecken.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Kampfkünste-Pfade im Überblick.
          </h2>
          <p className="text-xs text-slate-400">6 Pfade · 12 Waffen · Offense, Defense, Support</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {martialArtPaths.map((path) => (
            <div
              key={path.id}
              className="flex h-full flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">Pfad</p>
                  <h3 className="text-lg font-semibold text-slate-50">{path.name}</h3>
                </div>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-500/40">
                  {path.relatedWeapons.length} Waffen
                </span>
              </div>
              <p className="text-sm text-slate-200">{path.focus}</p>
              <p className="text-xs text-slate-400">{path.flavor}</p>
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-emerald-200">Kombos:</span> {path.relatedWeapons.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Alle Kampfkunst-Waffen (mit Freischalt-Schritten).
          </h2>
          <p className="text-xs text-slate-400">Bild + Pfad + Signature-Skills + wie du sie bekommst</p>
        </div>
        <p className="text-sm text-slate-300">
          Die meisten Freischaltungen kommen über Skill Theft (Stealth- & Beobachtungs-Minigame) oder über den Beitritt zu einer Sekte.
          Qi Sheng verschickt einige Waffen, sobald du deine erste Kuriosität (Oddity) abgibst. Pack Loong Keys ein, falls ein Heiligtum versiegelt ist.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] border-separate border-spacing-y-3 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-300">
                <th className="px-4">Waffe</th>
                <th className="px-4">Pfad</th>
                <th className="px-4">Signature-Skills</th>
                <th className="px-4">Freischaltwege</th>
              </tr>
            </thead>
            <tbody>
              {martialArtWeapons.map((weapon) => {
                const path = pathLookup[weapon.pathId];
                return (
                  <tr key={weapon.id} className="align-top">
                    <td className="rounded-l-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-20 w-28 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                          <CdnImage
                            src={weapon.image}
                            alt={weapon.name}
                            fill
                            sizes="112px"
                            className="object-contain p-2"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-50">{weapon.name}</p>
                          <p className="text-xs text-emerald-200">{path?.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <p className="text-sm text-slate-200">{path?.focus}</p>
                      <p className="text-xs text-slate-400">{path?.flavor}</p>
                    </td>
                    <td className="border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <div className="space-y-1 text-slate-200">
                        <div>
                          <span className="font-semibold text-emerald-200">Main:</span>{" "}
                          {weapon.mainSkills.join(", ")}
                        </div>
                        <div>
                          <span className="font-semibold text-emerald-200">Basic:</span>{" "}
                          {weapon.basicSkills.join(", ")}
                        </div>
                        <div>
                          <span className="font-semibold text-emerald-200">Charged:</span>{" "}
                          {weapon.chargedSkills.join(", ")}
                        </div>
                      </div>
                    </td>
                    <td className="rounded-r-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <ul className="list-disc space-y-1 pl-4 text-slate-200">
                        {weapon.unlockMethods.map((method) => (
                          <li key={method}>{method}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-50">So schaltest du sie praktisch frei</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-emerald-200">Skill Theft:</span>{" "}
              Anschleichen, ggf. Loong Key investieren, Meister beobachten und das Ring-Timing-Minispiel perfekt treffen.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">Sekten beitreten & verlassen:</span>{" "}
              Du kannst einer Sekte kurzzeitig beitreten, die Waffe holen und später wechseln. Prüfe die Sekten-Hinweise im Menü.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">Kuriositäten & Post:</span>{" "}
              Deine erste eingereichte Kuriosität (Oddity) bei Qi Sheng oder Postbelohnungen können Schlüsselwaffen liefern.
            </li>
          </ul>
          <Link
            href="/de/guides/skill-theft"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Zum Skill-Theft-Walkthrough →
          </Link>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-50">Kampfkünste aufwerten</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Zhou Coins + Trainingsitems investieren; Level kann deinen Charakterlevel nicht überholen.</li>
            <li>Durchbrüche alle 10 Level brauchen Custom Tips (Jade Fish im Activity Shop) plus Coins/Items.</li>
            <li>Upgrades erhöhen Schaden und Nebeneffekte (Schilde, Heals), daher lohnen auch Support-Waffen früh.</li>
          </ul>
          <p className="text-xs text-slate-400">
            Farm Trainingsitems während Queue-Zeiten für Skill Theft/Sekten, damit du nicht auf Level-Caps sitzen bleibst.
          </p>
        </div>
      </section>
    </article>
  );
}
