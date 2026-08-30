import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import ItemTabs from "@/app/(en)/guides/items/ItemTabs";
import { itemCategories, itemCoverage } from "@/app/(en)/guides/items/data";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Items – verifizierte Nutzung und Quellen",
  description:
    "Quellengestützter Item-Guide für Where Winds Meet. Nur geprüfte Nutzung und Beschaffung werden veröffentlicht; offene Einträge bleiben als ausstehend markiert.",
  alternates: buildHreflangAlternates("/guides/items", { canonicalLanguage: "de" }),
};

export default function ItemsPage() {
  const categoryText: Record<
    string,
    { title: string; blurb: string }
  > = {
    materials: {
      title: "Materialien",
      blurb: "Grundressourcen aus Sammeln/Jagd – genutzt für Crafting, Einrichtung oder Kommissionen.",
    },
    development: {
      title: "Entwicklungs-Materialien",
      blurb: "Für Waffen-Durchbrüche, Innere-Kunst-Upgrades, Mechanik-Blueprints und fortgeschrittenes Crafting.",
    },
    consumables: {
      title: "Verbrauchsgüter",
      blurb: "Speisen, Weine und Köder – einmalige Items für Kampf- oder Lebens-Buffs.",
    },
    common: {
      title: "Alltags-Items",
      blurb: "Sammlerstücke, Geschenke und Deko – oft relevant für Favor, Quests oder Achievements.",
    },
  };

  const groupTitle: Record<string, string> = {
    "inner-way-passives": "Innere-Weg-Passiva",
    "martial-arts-upgrades": "Kampfkunst-Upgrades",
    miscellaneous: "Sonstiges",
    "verified-systems-and-tuning": "Verifizierte Systeme & Tuning",
    "mystic-arts-upgrades": "Mystik-Upgrades",
    "gear-tuning": "Ausrüstungs-Tuning",
  };

  const verifiedItemText: Record<string, { use: string; location: string }> = {
    "Oscillating Jade": {
      use: "Die offizielle Event-Seite Echoes Across the World nennt dieses Item als Belohnung, erklärt dort aber keine dauerhafte Spielfunktion. Dieser Eintrag leitet deshalb keine weitere Nutzung ab.",
      location: "Nur historischer Bezug: Das Event Echoes Across the World im April 2026 führte Oscillating Jade bei mehreren Resonanz-Meilensteinen sowie für den ersten Upload oder die Freigabe einer offiziellen Aufnahme. Das belegt keine aktuelle dauerhafte Farmquelle.",
    },
    "Modulating Stone": {
      use: "Laut Version 2.0 kann der Stein geeignete epische oder legendäre Tier-100-Ausrüstung auf ihre Anfangsattribute zurücksetzen, bevor sie neu getunt wird. Frühere Materialien werden nicht erstattet, der Vorgang ist unumkehrbar und unterliegt Limits und Abklingzeiten pro Item.",
      location: "Die offiziellen Hinweise vom 23. Juli 2026 nennen Recycling oder Verbrauch vollständig getunter legendärer Ausrüstung als Quelle; Archery Arts sind ausgenommen. Prüfe die aktuelle Bestätigung im Spiel, bevor du Ausrüstung einsetzt.",
    },
    "Retuning Stone: Mirage": {
      use: "Die offiziellen Korrekturen vom 7. August bezeichnen ihn als Retuning-Item für Hidden Mountain und dokumentieren eine Korrektur des Kauflimits. Preis und dauerhafte Verfügbarkeit werden dort nicht zugesichert.",
      location: "Die offiziellen Korrekturen vom 7. August 2026 führen Retuning Stone: Mirage beim Pangolin Stand in Hidden Mountain. Verfügbarkeit und Kauflimit können sich nach diesem Build ändern.",
    },
    "Horse Gallop Tactic": {
      use: "Laut Update vom 28. Mai erhöht der Verbrauch das Ausrüstungslimit für Spirit Gift Skills und erlaubt es, bereits besessene Skills eines Reittiers an- oder abzulegen. Die Zahl der Plätze unterscheidet sich je nach Reittier.",
      location: "Das offizielle Update vom 28. Mai 2026 nennt Shop und Divine Steed Level-Belohnungen als Quellen. Einen aktuellen Preis, eine Rate oder einen dauerhaften Zeitplan nennt es nicht.",
    },
  };

  const localizeItem = <T extends { name: string; use: string; location: string }>(item: T): T => {
    const text = verifiedItemText[item.name];
    return text ? { ...item, ...text } : item;
  };

  const localizedCategories = itemCategories.map((category) => ({
    ...category,
    title: categoryText[category.id]?.title ?? category.title,
    blurb: categoryText[category.id]?.blurb ?? category.blurb,
    items: category.items.map(localizeItem),
    groups: category.groups?.map((group) => ({
      ...group,
      title: groupTitle[group.id] ?? group.title,
      items: group.items.map(localizeItem),
    })),
  }));

  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg2.webp"
            alt="Where Winds Meet Items Hintergrund"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">Items & Kategorien</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Ein quellengestützter Where Winds Meet Item-Index.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Der Index trennt geprüfte Guide-Einträge von Namen, die noch redaktionell geprüft werden. Ein Item
            erscheint erst mit belastbarer Quelle und konkreter Nutzung oder Beschaffung. Medien werden nur angezeigt, wenn ihre Herkunft nachvollziehbar ist.
            Ausstehende Einträge werden gezählt, aber nicht als bestätigte Farm-Orte ausgegeben.
            Kombiniere geprüfte Einträge mit der{" "}
            <Link href="/de/guides/martial-arts-weapons" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              Waffen/Kampfkunst-Tabelle
            </Link>{" "}
            und dem{" "}
            <Link href="/de/guides/skill-theft" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              Skill-Theft-Guide
            </Link>{" "}
            für deine Planung.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-amber-500/25 bg-amber-950/20 p-6 shadow-lg shadow-slate-950/40">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">Prüfstatus</p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-50">Offene Details werden nicht geraten.</h2>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
            Doppelte Namen wurden entfernt. Datensätze ohne verifizierte Spielinformationen und Quellen bleiben
            aus dem Hauptindex ausgeblendet.
          </p>
        </div>
        <dl className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4"><dt className="text-xs uppercase tracking-wide text-slate-400">Eindeutige Namen</dt><dd className="mt-1 text-2xl font-semibold text-slate-100">{itemCoverage.catalogued}</dd></div>
          <div className="rounded-2xl border border-emerald-500/25 bg-emerald-950/20 p-4"><dt className="text-xs uppercase tracking-wide text-emerald-300">Veröffentlicht und belegt</dt><dd className="mt-1 text-2xl font-semibold text-emerald-100">{itemCoverage.published}</dd></div>
          <div className="rounded-2xl border border-amber-500/25 bg-amber-950/20 p-4"><dt className="text-xs uppercase tracking-wide text-amber-300">Prüfung ausstehend</dt><dd className="mt-1 text-2xl font-semibold text-amber-100">{itemCoverage.pending}</dd></div>
        </dl>
      </section>

      <ItemTabs
        categories={localizedCategories}
        uiText={{
          heading: "Verifizierte Item-Kategorien",
          imageUnavailable: "Kein verifiziertes Bild",
          acquisitionLabel: "Fundort:",
          verificationSourceLabel: "Prüfquelle",
          scrollToItems: "Zu den Items ↓",
          itemsSuffix: "Items",
          verifiedBadge: "Verifiziert",
          verifiedSuffix: "verifiziert",
          pendingSuffix: "ausstehend",
          cataloguedSuffix: "erfasst",
          emptyHeading: "Noch keine verifizierten, wichtigen Einträge",
          emptyBody: "Datensätze ohne zuverlässige Quelle und konkrete Spieldetails bleiben im Hauptindex verborgen.",
          pendingRetentionTemplate: "{count} {status} Datensätze bleiben für die redaktionelle Prüfung erhalten.",
        }}
      />

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Veröffentlichungsstandard</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Spielbehauptungen benötigen eine verlässliche Prüfquelle.</li>
            <li>Mindestens eine konkrete Nutzung oder Beschaffung ist erforderlich.</li>
            <li>Nur eigene Aufnahmen oder nachvollziehbare offizielle Medien werden angezeigt.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Verwandte Guides</h3>
          <ul className="space-y-2 text-sm text-emerald-200">
            <li>
              <Link href="/de/guides/new-players" className="underline underline-offset-4 hover:text-emerald-100">
                Einsteiger-Route: sinnvolle Ressourcen-Reihenfolge
              </Link>
            </li>
            <li>
              <Link href="/de/guides/weapons" className="underline underline-offset-4 hover:text-emerald-100">
                Waffen-Übersicht: Main-Waffe & Build wählen
              </Link>
            </li>
            <li>
              <Link href="/de/guides/bosses" className="underline underline-offset-4 hover:text-emerald-100">
                Boss-Guide: Vorab-Item-Checkliste
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
