import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { buildHreflangAlternates } from "@/lib/hreflang";

const patchUrl = "https://www.wherewindsmeetgame.com/news/official/CloudedRevelationPatchNotes.html";
const overviewUrl = "https://www.wherewindsmeetgame.com/news/official/CloudedRevelation.html";

export const metadata: Metadata = {
  title: "Where Winds Meet Clouded Revelation: Version 2.1 Guide",
  description:
    "Deutscher Guide zu Where Winds Meet Version 2.1 Clouded Revelation: Patch vom 20. August, A Flourishing Legacy, Rising Beyond, Vernal Umbrella, Arena und Homestead.",
  alternates: buildHreflangAlternates("/guides/clouded-revelation", { canonicalLanguage: "de" }),
};

const changes = [
  {
    title: "A Flourishing Legacy / Rising Beyond",
    text: "Die offiziellen Patch Notes beheben mehrere Quest-, Koop-, Gegenstands- und Trigger-Probleme der Jianghu-Legacy-Kette. Aktualisiere das Spiel und teste den blockierten Schritt zuerst in deiner eigenen Welt.",
    href: "#flourishing-legacy",
  },
  {
    title: "Vernal Umbrella ab Stufe 96",
    text: "Attunement-Affixe wurden in Frequent Projectile DMG Boost zusammengeführt; dazu kommt ein Light/Heavy/Varied-Combo-Affix. Die Änderung betrifft auch Silkbind Jade.",
    href: "/de/guides/weapons/tier-list",
  },
  {
    title: "Arena und Kampf",
    text: "Der Patch korrigiert Everspring-Umbrella-Phantompositionen am Arena-Rand, Strategic-Sword-Ladeabbrüche, Guardian Palm Rang 3 und das Aufstehen nach einem Knockdown.",
    href: "/de/guides/pvp-tier-list",
  },
  {
    title: "Homestead und Kosmetik",
    text: "Build Mode erhält bessere Kamerasteuerung, die Retainer-Entsendeliste wird klarer und der Heaven's-Plea-Makeup-Fehler nach Sweetened Summer wurde behoben.",
    href: "/de/guides/free-outfits",
  },
];

const retrySteps = [
  "Installiere das Version-2.1-Update vom 20. August und starte das Spiel neu.",
  "Verlasse den Koop-Modus, verfolge A Flourishing Legacy erneut und teste den Schritt in deiner eigenen Welt.",
  "Schließe das aktuelle Ziel ab und prüfe anschließend Questliste und Postfach auf Rising Beyond.",
  "Falls der Trigger fehlt, stelle die Spielzeit einmal vor und logge dich neu ein; dies ist ein Community-Workaround, keine offizielle Garantie.",
];

export default function CloudedRevelationDePage() {
  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <HomeHubBacklink language="de" />
      <section className="overflow-hidden rounded-3xl border border-sky-400/30 bg-slate-950/85 p-6 shadow-2xl sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Offizielle Quellen geprüft · 21.08.2026</p>
            <h1 className="mt-3 text-balance text-4xl font-bold text-slate-50 sm:text-5xl">Where Winds Meet Clouded Revelation: Version 2.1 Guide</h1>
            <p className="mt-5 max-w-3xl leading-7 text-slate-300">
              Clouded Revelation ist das aktuelle Version-2.1-Update. Dieser Guide übersetzt die offiziellen Patch Notes vom 20. August in konkrete Prüfungen für Quests, Vernal Umbrella, Arena, Homestead und Kosmetik.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={patchUrl} target="_blank" rel="noreferrer" className="rounded-full border border-sky-300/60 px-4 py-2 text-sm font-semibold text-sky-100">Offizielle Patch Notes ↗</a>
              <a href={overviewUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200">Version-2.1-Übersicht ↗</a>
            </div>
          </div>
          <div className="mx-auto rounded-3xl border border-sky-400/20 bg-sky-500/10 p-8">
            <Image src="/tier-list/icons/weapon-vernal-umbrella.png" alt="Vernal Umbrella nach dem Where Winds Meet Version 2.1 Update" width={220} height={220} priority />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {changes.map((item) => (
          <Link key={item.title} href={item.href} className="rounded-2xl border border-slate-800 bg-slate-950/75 p-5 hover:border-sky-400/60">
            <h2 className="font-semibold text-sky-100">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
          </Link>
        ))}
      </section>

      <section id="flourishing-legacy" className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-slate-50">A Flourishing Legacy oder Rising Beyond startet nicht?</h2>
        <ol className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
          {retrySteps.map((step, index) => <li key={step} className="flex gap-3"><span className="font-bold text-amber-200">{index + 1}.</span><span>{step}</span></li>)}
        </ol>
      </section>
    </article>
  );
}
