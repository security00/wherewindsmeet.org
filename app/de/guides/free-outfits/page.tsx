import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Gratis-Outfits & Sets | Where Winds Meet (DE)",
  description:
    "Null-Kosten-Routen für Outfits, Sets, Kosmetik und Frisuren: Events, Quests, Codes, Shops und Social-Belohnungen auf Deutsch.",
  alternates: buildHreflangAlternates("/guides/free-outfits", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Gratis-Outfits & Sets | Where Winds Meet (DE)",
    description:
      "Alle kostenlosen Outfits, Accessoires und Frisuren aus Events, Quests, Codes, Shops und Social-Belohnungen – Währung sparen, Style mitnehmen.",
    url: `${baseUrl}/de/guides/free-outfits`,
  },
  twitter: {
    title: "Gratis-Outfits Guide (DE) | Where Winds Meet",
    description:
      "Kostenlose Outfits/Frisuren finden: Events, Codes, Quests, Shops, Social-Belohnungen. Deutsch zusammengefasst.",
  },
};

const highlightCards = [
  {
    title: "Zeitlich begrenzte Events & Feste",
    points: [
      "Login-Ketten und Fest-Quests geben oft komplette Outfits oder Accessoires gratis – vor Eventende abholen.",
      "Event-Währungen haben meist eine 0-Kosten-Stufe: zuerst nehmen, erst danach teure Slots kaufen.",
      "Tägliche/Wöchentliche Event-Meilensteine droppen Farbstoffe oder Accessoire-Boxen – Checkliste vor Reset abschließen.",
    ],
    image: "/free-outfits/all-free-outfits.webp",
  },
  {
    title: "Story-Quests & Erfolge",
    points: [
      "Haupt-/Nebenquests geben bei Erstabschluss Outfit-Teile oder Frisuren-Gutscheine – Dialogketten nicht skippen.",
      "Exploration/Combat/Social-Erfolge verstecken Kosmetik-Belohnungen – regelmäßig offene Belohnungen einsammeln.",
      "Stadt-NPCs, Tavernen-Boards und Sektoren-Meister starten versteckte Ketten, die mit Gratis-Kosmetik enden.",
    ],
    image: "/free-outfits/free-outfits-grid.webp",
  },
  {
    title: "Codes einlösen & 0‑Kosten‑Shopplätze",
    points: [
      "Aktive Codes enthalten oft universelle Kosmetik-Gutscheine – sofort einlösen, um Verfall zu vermeiden.",
      "Event-Shops haben manchmal 0-Währung-„Trial“-Kosmetik; zuerst claimen, bevor du etwas kaufst.",
      "Achte auf 0→Rabatt-Stufen: erst kostenlos, dann entscheiden, ob das Upgrade sich lohnt.",
    ],
    image: "/free-outfits/free-sets.webp",
  },
  {
    title: "Social-Systeme & Koop-Belohnungen",
    points: [
      "Gildenbeitrag, Freundschafts-Meilensteine und Social-Aktionen tauschen sich gegen Accessoires/Emotes – Punkt-Cap nicht überlaufen lassen.",
      "Koop-Dailies und First-Clears von Gruppeninhalten droppen Kosmetik-Boxen oder Farbstoffe.",
      "Foto-/UGC-Events belohnen thematische Cosmetics; während Feiertagen offizielle Hinweise prüfen.",
    ],
    image: "/free-outfits/free-hairstyles.webp",
  },
];

const checklist = [
  "Täglich: Logins claimen, Event-Dailies abschließen, 0-Kosten-Shopslots abgreifen, bevor du Währung ausgibst.",
  "Wöchentlich: Gilden-/Koop-Missionen vollenden, Event-Währung cappen, zufällige Kosmetik-Boxen einlösen.",
  "Laufend: Offene Exploration/Combat/Social-Erfolge einsammeln – viele enthalten Farbstoffe oder Vouchers.",
  "Saisonal: Quests vor Festivals vorbereiten, damit du begrenzte Outfit-Tausche nicht verpasst.",
  "Codes: Aktive Codes früh einlösen (siehe Codes-Seite), um Ablauf und Doppelungen mit Events zu vermeiden.",
];

const freeSets = [
  { name: "Master Deceiver", source: "Open-Beta Vorregistrierungs-Mail." },
  { name: "Mountain Pine", source: "Beta-Test Belohnung." },
  { name: "Swaying Lotus", source: "Vorregistrierungs-Meilenstein-Mail." },
  { name: "First Step", source: "Schließe „Another New Wing“ in Heaven Has No Pier ab." },
  { name: "Elegy of Petals", source: "Solemn Echo Dauer-Banner (Echo-Jade Pulls sind farmbar)." },
  { name: "Return of Spring", source: "Solemn Echo Dauer-Banner." },
  { name: "Crimson Curtain", source: "Solemn Echo Dauer-Banner." },
  { name: "Blazing Passes", source: "Solemn Echo Dauer-Banner." },
  { name: "Peaceful Life", source: "Beende 7 Kapitel von A Warrior's Journey." },
  { name: "Humble Hero", source: "Erreiche Stufe 61 im Event Path of the Strong." },
  { name: "Blazing Midnight", source: "Tritt der Midnight Blades Sekte bei, kaufe im Sekt-Shop." },
  { name: "Heavenly Frost", source: "Tritt der Well of Heaven Sekte bei, kaufe im Sekt-Shop." },
  { name: "Silent Current", source: "Tritt der Silver Needle Sekte bei, kaufe im Sekt-Shop." },
  { name: "Ninefold Freedom", source: "Tritt der Nine Mortal Ways Sekte bei, kaufe im Sekt-Shop." },
  { name: "Enlightened Mind", source: "Season Shop für 520 Cosmetic Chests." },
  { name: "Chasing Red", source: "Still Shore Kampagne: 520 Cosmetic Chests oder Zufall aus Kampagnen-Truhen." },
  { name: "Bounty Hunter", source: "Kauf im Bounty Shop." },
  { name: "Sound of Valor", source: "Erreiche Erkundung Stufe 5 in Qinghe." },
  { name: "Opulent Grace", source: "Erreiche Erkundung Stufe 5 in Kaifeng." },
  { name: "Penstroke Posy", source: "Schreite im Scholar-Beruf voran." },
  { name: "Art of Healing", source: "Schreite im Healer-Beruf voran." },
  { name: "Gray Wolf", source: "Kaufe mit Adventure Slip (Social Shop: Wandering Paths)." },
  { name: "Purple Dew", source: "Kaufe mit Adventure Slip (Social Shop: Wandering Paths)." },
  { name: "Loyal Heart", source: "Kaufe mit Harmony Charm (Social Shop: Partnership)." },
  { name: "Twin Swallows", source: "Kaufe mit Harmony Charm (Social Shop: Discipleship)." },
  { name: "Still Moonlight", source: "Kaufe mit Harmony Charm (Social Shop: Sworn Cohort)." },
  { name: "Flawed Harmony", source: "Erreiche Partnership Stufe 3." },
  { name: "Yaksha", source: "Sammle Sin Leaf in Perception Forest, kaufe im Sin Leaf Exchange." },
  { name: "Orchid Dew", source: "Guide Red Gold Boutique." },
  { name: "Alms Pilgrim", source: "Begegnung „Hero & Beauty“ nahe Bloomveil Monastery Outpost (Qinghe)." },
  { name: "Forgotten", source: "Abschließen von Lifetime Lockup + Behind Bard Blues (≈200h Gefängnis)." },
];

const freeOutfits = [
  { name: "Novice Wanderer", source: "Starter-Outfit." },
  { name: "Taming Storms", source: "Schließe „A Horse Neighs in the Forest“ (Heaven Has No Pier Kapitel)." },
  { name: "Jianghu: Wanderer", source: "Solemn Echo Dauer-Banner (Echo Jade farmbar)." },
  { name: "Blue Clouds", source: "Season Shop für 360 Cosmetic Chests." },
  { name: "Autumn Orchid", source: "Season Shop für 360 Cosmetic Chests." },
  { name: "Bathrobe: Golden Threads", source: "Abschluss Achievement „Golden Guest“." },
];

const freeHairstyles = [
  {
    name: "Starter-Frisuren (1–12)",
    source: "Zweimal täglich den Bronzespiegel in Blissful Retreat benutzen, bis alle Starter-Stile frei sind.",
  },
  { name: "Unbound: Hair", source: "Solemn Echo Dauer-Banner." },
  {
    name: "Täglicher Kamm-Tipp",
    source: "Haus südlich des Blissful Retreat Waypoints: zweimal täglich interagieren, um verpasste Starter-Stile zu holen.",
  },
];

export default function FreeOutfitsDePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/de/guides/free-outfits`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${baseUrl}/de` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/de/guides` },
        { "@type": "ListItem", position: 3, name: "Gratis-Outfits", item: `${baseUrl}/de/guides/free-outfits` },
      ],
    },
  ];

  return (
    <article className="space-y-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Gratis-Outfits Hintergrund"
            fill
            className="object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>
        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">Kostenlose Kosmetik</p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Gratis-Outfits, Accessoires & Frisuren.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Alle bekannten Null-Kosten-Routen gesammelt: Events, Quests, Codes, Shops, Social-Belohnungen. Spare Premiumwährung und hol dir trotzdem den Look.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <Link href="/de/guides/cosmetics" className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 font-semibold text-emerald-100 hover:border-emerald-300/80">
              Kosmetik-Guide
            </Link>
            <Link href="/de/guides/codes" className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60">
              Aktive Codes
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {highlightCards.map((card) => (
          <div key={card.title} className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-slate-950/60">
            <CdnImage
              src={card.image}
              alt={card.title}
              width={640}
              height={360}
              className="mb-3 h-36 w-full rounded-xl object-cover opacity-80"
            />
            <h2 className="text-sm font-semibold text-slate-50">{card.title}</h2>
            <ul className="mt-2 list-disc list-inside space-y-1 text-xs text-slate-200">
              {card.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-3">
        <h2 className="text-lg font-semibold text-slate-50">Tägliche/Wöchentliche Checkliste</h2>
        <ul className="list-disc list-inside text-sm text-slate-200 space-y-1">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section id="free-sets" className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-50">Kostenlose Sets</h2>
          <span className="text-xs text-slate-400">{freeSets.length} Sets</span>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {freeSets.map((item) => (
            <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-200">
              <p className="font-semibold text-emerald-200">{item.name}</p>
              <p className="text-xs text-slate-400">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="free-outfits" className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-50">Kostenlose Einzel-Outfits</h2>
          <span className="text-xs text-slate-400">{freeOutfits.length} Items</span>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {freeOutfits.map((item) => (
            <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-200">
              <p className="font-semibold text-emerald-200">{item.name}</p>
              <p className="text-xs text-slate-400">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="free-hairstyles" className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-slate-50">Kostenlose Frisuren</h2>
          <span className="text-xs text-slate-400">{freeHairstyles.length} Tipps</span>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {freeHairstyles.map((item) => (
            <div key={item.name} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-3 text-sm text-slate-200">
              <p className="font-semibold text-emerald-200">{item.name}</p>
              <p className="text-xs text-slate-400">{item.source}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}
