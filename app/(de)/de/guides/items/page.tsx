import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import ItemTabs from "@/app/(en)/guides/items/ItemTabs";
import { itemCategories } from "@/app/(en)/guides/items/data";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Item-Index | Where Winds Meet (DE)",
  description:
    "Reiterbasierter Item-Index: Materialien, Verbrauchsgüter und Kuriositäten mit Nutzen und Fundorten, angelehnt an das Wiki-Layout.",
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
    "mystic-arts-upgrades": "Mystik-Upgrades",
    "gear-tuning": "Ausrüstungs-Tuning",
  };

  const localizeUse = (value: string) => {
    switch (value) {
      case "Crafting/Breakthrough material (details pending)":
        return "Handwerk-/Durchbruchmaterial (Details folgen)";
      case "Weapon/Martial Arts/Mechanism development material (details pending)":
        return "Entwicklungsmaterial für Waffen/Kampfkünste/Mechanik (Details folgen)";
      case "Consumable: effect details pending":
        return "Verbrauchsitem: Effekt-Details folgen";
      case "Common item: effect details pending":
        return "Alltagsitem: Effekt-Details folgen";
      default:
        return value;
    }
  };

  const localizeLocation = (value: string) => {
    switch (value) {
      case "Gathering/Hunting/Merchant/Commission (details pending)":
        return "Sammeln/Jagd/Händler/Kommission (Details folgen)";
      case "Secret Realm/Commission/Merchant/Task Drop (details pending)":
        return "Geheimes Reich/Kommission/Händler/Quest-Drops (Details folgen)";
      case "Acquisition method pending":
        return "Beschaffung folgt";
      default:
        return value;
    }
  };

  const localizedCategories = itemCategories.map((category) => ({
    ...category,
    title: categoryText[category.id]?.title ?? category.title,
    blurb: categoryText[category.id]?.blurb ?? category.blurb,
    items: category.items.map((item) => ({
      ...item,
      use: localizeUse(item.use),
      location: localizeLocation(item.location),
    })),
    groups: category.groups?.map((group) => ({
      ...group,
      title: groupTitle[group.id] ?? group.title,
      items: group.items.map((item) => ({
        ...item,
        use: localizeUse(item.use),
        location: localizeLocation(item.location),
      })),
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
            Where Winds Meet Item-Index mit Schnell-Tabs.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Angelehnt an das Wiki-Layout: Items nach Kategorien klickbar sortiert. Jede Kategorie zeigt Beispiele, Nutzung und Beschaffung.
            Kombiniere dies mit der{" "}
            <Link href="/de/guides/martial-arts-weapons" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              Waffen/Kampfkunst-Tabelle
            </Link>{" "}
            und dem{" "}
            <Link href="/de/guides/skill-theft" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              Skill-Theft-Guide
            </Link>{" "}
            für schnelle Farm-Routen.
          </p>
        </div>
      </section>

      <ItemTabs
        categories={localizedCategories}
        uiText={{
          heading: "Item-Kategorien wechseln",
          imagePending: "Bild folgt",
          acquisitionLabel: "Fundort:",
          scrollToItems: "Zu den Items ↓",
          itemsSuffix: "Items",
        }}
      />

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Nutzungstipps</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Materialien und Entwicklungs-Materialien priorisieren – sie sind die Engpässe für Waffen- und Innere‑Kunst‑Durchbrüche.</li>
            <li>2–3 Gruppengerichte vorbereiten; vor Teamplay essen für mehr Fehlertoleranz.</li>
            <li>Alltags-Items als Geschenke/Favor nutzen, um Begegnungen und Rabatte freizuschalten.</li>
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
