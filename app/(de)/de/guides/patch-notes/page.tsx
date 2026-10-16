import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { getContentFreshness } from "@/lib/contentFreshness";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/guides/patch-notes");

const latestUpdateCards = [
  {
    title: "October 15 Version 2.3 [Friends from Afar] update overview",
    date: "2026-10-15",
    source: "https://store.steampowered.com/news/app/3564740/view/1846651706675921",
    summary:
      "Aktuelle Version. Live-Update am 15. Oktober von 5:00 bis 12:00 Uhr (UTC+8): neue Region Qingzhou – Eastern Peak, Waffe Waist Drum und Pfad Silkbind – Wings, Sekte Inkbound Order, drei Weltbosse, Gift of Gab: War of Words, Tier-100-Ausrüstung und Saison S5: Ever Aflame.",
    playerAction:
      "Erreiche Lv. 32 und schließe das Qinghe-Hauptkapitel Heaven Has No Pier ab, um Away to Qingzhou zu starten.",
  },
  {
    title: "September 16 Version 2.2 patch notes",
    date: "2026-09-16",
    source: "https://store.steampowered.com/news/app/3564740/view/1843481262704696",
    summary:
      "Rollende Wartung am 16. September von 5:00 bis 10:00 Uhr (UTC+8): bearbeitbare Gildenliste mit angehefteten Mitgliedern, saisonale Guild-War-Statistiken, Boss-Talent-Tracking für beide Bosse, Ehrentitel, Gildenbasis-Blacklist und zwei Fehlerbehebungen.",
    playerAction:
      "Der Eingang zum Reflection Temple ist vorübergehend geschlossen und öffnet wieder, sobald Jiangnan erscheint; der Fortschritt bleibt erhalten. Beim Nameless Sword wurde nur die Beschreibung von Sword Energy korrigiert.",
  },
  {
    title: "September 16 Version 2.2 [Perilous Eminence] update overview",
    date: "2026-09-16",
    source: "https://store.steampowered.com/news/app/3564740/view/1843481262704691",
    summary:
      "Vorherige Inhaltsversion: Hidden-Mountain-Hauptkapitel Bringer of Embers (A Bitter Winter und Sea of Sunfire), Kampagne Skyward City Ruins, Weltbosse Golden Colossus Taicu und Goshawk sowie der Extraktionsmodus Transdust Ruins ab 23. September.",
    playerAction:
      "Schließe Hidden Mountain Hauptkapitel IV: Gold Crow Fall ab, um die neuen Kapitel freizuschalten; Transdust Ruins erfordert Lv. 20 und die Erkundungsquest Sands of Perils.",
  },
  {
    title: "September 3 Version 2.1.3 Clouded Revelation overview",
    date: "2026-09-02",
    source: "https://www.wherewindsmeetgame.com/news/official/903update.html",
    summary:
      "Aktueller Official-Anker: Skystrike Gauntlets, Riven Twinblades, neue Draught-Inner-Ways und Reflection Temple.",
    playerAction:
      "Historisch: Drunken Fist zuerst öffnen. Die Hidden-Mountain-Folgekapitel sind seit Version 2.2 am 16. September live; der Reflection Temple ist seitdem geschlossen, bis Jiangnan erscheint.",
  },
  {
    title: "August 27 Clouded Revelation Version 2.1 update overview",
    date: "2026-08-26",
    source: "https://www.wherewindsmeetgame.com/news/official/827update.html",
    summary:
      "Offizielle Update-Übersicht. Die offizielle Seite nennt den 27. August als Release-Fenster und wurde am 26. August veröffentlicht.",
    playerAction:
      "Nutze die September-3-Übersicht als aktuellen Anker und die Patch Notes vom 20. August für die bestätigte Fix-Liste.",
  },
  {
    title: "August 20 Version 2.1 Clouded Revelation patch notes",
    date: "2026-08-20",
    source: "https://www.wherewindsmeetgame.com/news/official/CloudedRevelationPatchNotes.html",
    summary:
      "Aktueller überprüfter Patch-Note-Anker für Version 2.1. Ältere Karten darunter bleiben als datierte Patch-Historie erhalten.",
    playerAction:
      "Prüfe betroffene Quests, Arena-Verhalten, Vernal-Umbrella-Rolls, Homestead-Steuerung und kosmetische Fixes erneut, bevor du alte Workarounds nutzt.",
  },
  {
    title: "Historisch: July 17 Version 1.8 optimizations and bug fixes",
    date: "2026-07-17",
    source: "https://www.wherewindsmeetgame.com/news/official/625update.html",
    summary:
      "Datierter Version-1.8-Patch-Verlauf mit July-17-, July-9-, July-2- und June-25-Fixes auf derselben offiziellen Quellseite.",
    playerAction:
      "Prüfe Arena, Taiping Mausoleum, Sleeping Daoist, Homestead und Skyward Bond, bevor du ältere Hinweise weiterverwendest.",
  },
  {
    title: "Version 1.8 / Companions Make Home overview",
    date: "2026-06-24",
    source: "https://www.wherewindsmeetgame.com/news/official/CompanionsMakeHome.html",
    summary:
      "Historische Version-1.8-Übersicht für Companions Make Home, die vor Version 2.0 und Version 2.1 veröffentlicht wurde.",
    playerAction:
      "Nutze sie für Homestead- und Companion-Historie; aktuelle Update-Suchen beginnen bei Version 2.1.",
  },
  {
    title: "Version 1.8 Dev Q&A: A Place to Call Home",
    date: "2026-06-23",
    source: "https://www.wherewindsmeetgame.com/news/official/623faq.html",
    summary:
      "Offizielles Dev-Q&A zur A Place to Call Home / Homestead-Update-Phase und zu Companion-System-Fragen.",
    playerAction:
      "Nutze das Q&A als Kontext für Fragen zu Homestead, Companions und Erwartungen nach dem Update.",
  },
  {
    title: "June 5 Version 1.7 fixes",
    date: "2026-06-05",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
    summary:
      "Historische Version-1.7-Fixes: Server in Oceania, Middle East und South America sind voll verfügbar; Papercutting-Controller-Input, Imperial-Palace-Questtexte, Mobile-Loading, Palace Oddities, Hexi Familiar Faces NPCs, Jade Fish display, Skyward Bond UI text, PS5 Palace snow visuals, Skill Theft access und Grand Nuo Ritual wurden adressiert.",
    playerAction:
      "Teste Palace exploration, Imperial Palace quests, Hexi NPC befriending, mobile loading, Papercutting, Skill Theft routes, PS5 map visuals und Event-Rewards erneut, bevor du älteren Bug-Reports vertraust.",
  },
  {
    title: "May 29 Version 1.7 historical fixes",
    date: "2026-05-29",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
    summary:
      "Die gleiche offizielle Patch-Seite behält die May-29-Fixes: Soaring Record rewards, Ghost Master in Skyward Bond, Palace map on mobile, Guild Hero's Realm, Guild UI, Kaifeng model display, controller shop selection, Jadeware translation und Palace Unveiled rewards.",
    playerAction:
      "Nutze May 29 als historischen Palace-Launch-Baseline und beginne aktuelle Prüfungen bei Version 2.1.",
  },
  {
    title: "May 27 / May 28 live maintenance",
    date: "2026-05-28",
    source: "https://www.wherewindsmeetgame.com/news/official/527update.html",
    summary:
      "Large live update for Path Tutorial, Martial Art Reset, Inner Way Conversion costs, Arena, Hero's Realm, Sword Trial, Guild War, World Map replay support, and social tools.",
    playerAction:
      "Check builds, reset costs, boss camera settings, Hero's Realm, Sword Trial, and Arena plans again after this patch.",
  },
  {
    title: "Version 1.7 / The Imperial Palace",
    date: "2026-05-27",
    source: "https://www.wherewindsmeetgame.com/news/official/TheImperialPalace.html",
    summary:
      "Historische offizielle Version-1.7-Übersicht für Palace-Events, Roadmap-Rückblick und Returning-player Catch-up.",
    playerAction:
      "Nutze Version 1.7 nur als datierte Palace-Baseline; aktuelle Patch Notes, Bosse und Builds beginnen bei Version 2.1.",
  },
  {
    title: "Sandstorm Tavern and older boss fixes",
    date: "2026-05-15",
    source: "https://www.wherewindsmeetgame.com/news/official/515update.html",
    summary:
      "Sandstorm Tavern went live during the May 15 to June 5 event window and stays available afterward. The same patch fixed Sunken City Lake's Lunar Eidolon final-phase issue.",
    playerAction:
      "Treat Sandstorm Tavern as a guide target and refresh old Sunken City Lake blocker advice.",
  },
];

const impactChecklist = [
  "Patch notes today / new update: mit der Übersicht vom 27. August beginnen und danach die Patch Notes vom 20. August für die bestätigte Fix-Liste nutzen.",
  "Boss and dungeon searches: mention Ghost Master, Hero's Realm, Sword Trial, Sandstorm Tavern, Sunken City Lake, and Lunar Eidolon where relevant.",
  "Build searches: mention cheaper Martial Art Reset and lower Inner Way Conversion costs before recommending a respec.",
  "Tier-list searches: connect weapon and Path advice to the May 26 Path Balance and May 27 maintenance window.",
  "Mobile and controller searches: Palace map loading and Season Shop controller selection were official May 29 fixes.",
];

const upcomingNerfWatch = [
  {
    topic: "Path Balance",
    status: "Offizielle Basis",
    action:
      "Nimm die Path-Balance-Ankündigung vom 26. Mai als Startpunkt, bevor du ein Build oder eine Waffe als neu generft bezeichnest.",
    href: "/guides/tier-list#arena-ranks",
  },
  {
    topic: "Arena und PVP ranks",
    status: "Hohe Suchintention",
    action:
      "Wenn Spieler nach upcoming nerfs suchen, leite sie von Patch Notes zu Arena ranks, PVP-Tierliste und Waffen-Tierliste weiter.",
    href: "/guides/pvp-tier-list",
  },
  {
    topic: "Build reset costs",
    status: "Live-Maintenance-Impact",
    action:
      "Günstigerer Martial Art Reset und niedrigere Inner Way Conversion-Kosten machen Post-Patch-Tests für Rückkehrer weniger riskant.",
    href: "/de/guides/builds",
  },
  {
    topic: "Boss- und Dungeon-Komfortfixes",
    status: "Nicht als Nerf überlesen",
    action:
      "Hero's Realm, Sword Trial, Ghost Master und Palace-Fixes können Guide-Ratschläge ändern, auch wenn sie keine Waffen-Nerfs sind.",
    href: "/de/guides/bosses",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Patch Notes Heute - Version 2.3 Friends from Afar",
  description:
    "Deutscher Where Winds Meet Patch-Notes-Tracker für Version 2.3 (15. Oktober) und Version 2.2 (16. September) mit datierter Update-Historie ab Version 2.1.",
  alternates: buildHreflangAlternates("/guides/patch-notes", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Patch Notes Heute - Version 2.3 Friends from Afar",
    description:
      "Patch Notes zu Version 2.3 und Version 2.2 sowie datierte Update-Historie ab Version 2.1.",
    url: `${baseUrl}/de/guides/patch-notes`,
    locale: "de_DE",
  },
  twitter: {
    title: "Where Winds Meet Patch Notes Heute - Version 2.3 Friends from Afar",
    description:
      "Patch Notes zu Version 2.3 und Version 2.2 sowie datierte Update-Historie ab Version 2.1.",
  },
};

export default function PatchNotesDePage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/de/guides/patch-notes`,
      dateModified: freshness?.lastChecked ?? "2026-06-03",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startseite", item: `${baseUrl}/de` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/de/guides` },
        { "@type": "ListItem", position: 3, name: "Patch Notes", item: `${baseUrl}/de/guides/patch-notes` },
      ],
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="de" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg1.webp"
            alt="Where Winds Meet Patch Notes Hintergrund"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet Patch Notes heute: Version 2.3, Version 2.2 und datierte Update-Historie.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Aktualisiert {freshness?.lastChecked ?? "2026-10-17"}: Überprüfter Stand ist {freshness?.gameVersion ?? "Version 2.3 / 15. Oktober"}. Die aktuelle Update-Spur beginnt mit der offiziellen Übersicht zu Version 2.3 vom 15. Oktober, gefolgt von den Patch Notes und der Übersicht zu Version 2.2 vom 16. September. Version 2.1 (Übersicht 27. August, Stand 2026-08-26, Patch Notes 20. August), Version 2.0, Version 1.8 und Palace-Inhalte bleiben als datierte Historie erhalten.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Diese Seite markiert die Punkte, die du neu prüfen solltest: Codes, Quest-Bugs, Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, Boss-Guides, Builds und Tier-List-Annahmen.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 shadow-lg shadow-amber-950/30">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Aktuelle offizielle Update-Liste</p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Was hat sich in den neuesten Patch Notes geändert?
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Starte hier, wenn du nach Where Winds Meet Patch Notes heute gesucht hast. Diese Punkte steuern die nächsten Guide-Updates und internen Links.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {latestUpdateCards.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-100">
                  {item.date}
                </span>
                <a
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                >
                  Offizielle Quelle
                </a>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.summary}</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                <span className="font-semibold text-slate-200">Aktion:</span> {item.playerAction}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="version-2-3" className="space-y-4 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Aktuelle Version – 15. Oktober 2026</p>
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Version 2.3 [Friends from Afar] – Zusammenfassung</h2>
        <p className="text-sm leading-relaxed text-slate-200">Live-Update am 15. Oktober 2026, 5:00–12:00 Uhr (UTC+8). Alle Details stehen in der <a href="https://store.steampowered.com/news/app/3564740/view/1846651706675921" target="_blank" rel="noreferrer" className="underline underline-offset-4">offiziellen Steam-Ankündigung</a> (Englisch).</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200">
          <li>Neue Region Qingzhou – Eastern Peak: ab Lv. 32 nach dem Qinghe-Hauptkapitel [Heaven Has No Pier] über das Lost Chapter [Away to Qingzhou].</li>
          <li>Neue Jianghu Legacies [Riddled Echoes] und [Sea Shepherd]; Weltbosse Tidewatcher, Old Raftsman und Shuttlecock Champion.</li>
          <li>Neue Waffe Waist Drum und neuer Pfad [Silkbind – Wings] mit [Museflow Waist Drum] und dem Fächer [Willowbend Fan]; dazu 4 zusätzliche kostenlose Inner-Way-Umwandlungen und 8 kostenlose Set-Umwandlungen bis zum Start der neuen Saison.</li>
          <li>Neue Sekte Inkbound Order (Aufnahme über die Primary Exam); Gift of Gab: War of Words in Qingzhou.</li>
          <li>Tier-100-Ausrüstung, Gear Enhance Lv. 66–70, Solo Mode Level Lv. 18; Levelobergrenze bleibt Lv. 100. Neue Lv.-100-Inhalte: Sword Trial [Compass &amp; Chime] und Hero&apos;s Realm [Liminal Ascension].</li>
          <li>Saison S5: Ever Aflame (Arena und Taiping Mausoleum): 15. Oktober 2026, 05:00 – 26. November 2026, 04:59:59.</li>
        </ul>
      </section>

      <section id="version-2-2" className="space-y-4 rounded-3xl border border-sky-400/30 bg-sky-500/10 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">Vorherige Version – 16. September 2026</p>
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Version 2.2 [Perilous Eminence] und Patch Notes vom 16. September</h2>
        <p className="text-sm leading-relaxed text-slate-200">Rollende Wartung am 16. September 2026, 5:00–10:00 Uhr (UTC+8). Quellen: <a href="https://store.steampowered.com/news/app/3564740/view/1843481262704696" target="_blank" rel="noreferrer" className="underline underline-offset-4">offizielle Patch Notes</a> und <a href="https://store.steampowered.com/news/app/3564740/view/1843481262704691" target="_blank" rel="noreferrer" className="underline underline-offset-4">offizielle Übersicht</a>.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200">
          <li>Gildenliste bearbeitbar: Die Gildenleitung kann Mitglieder oben anheften; die übrigen werden nach der Aktivität der Vorwoche sortiert.</li>
          <li>Guild War zeigt persönliche und Gilden-Statistiken pro Saison (ab der neuen Saison).</li>
          <li>Boss-Talent-Tracking zählt Belohnungen nach dem Guild Hero&apos;s Realm jetzt für beide Bosse.</li>
          <li>Ehrentitel für herausragende Leistungen bei Gildenevents; Blacklist für die Gildenbasis (einzelne Spieler oder ganze Gilden).</li>
          <li>Der Eingang zum Reflection Temple ist vorübergehend geschlossen und öffnet wieder, sobald Jiangnan erscheint; der Fortschritt bleibt erhalten.</li>
          <li>Behoben: Anzeigefehler des Outfits [Hidden Scent] in bestimmten Ergebnis-Animationen.</li>
          <li>[Nameless Sword]: Beschreibung korrigiert – jede Stufe Sword Energy erhöht den Damage Boost gegen Nicht-Spieler-Einheiten um 10 %, ohne Exhausted-Zustand. Nur ein Textfehler; der Effekt funktionierte bereits so.</li>
          <li>Übersicht: Hidden-Mountain-Hauptkapitel [Bringer of Embers] mit A Bitter Winter und Sea of Sunfire, Kampagne Skyward City Ruins, Weltbosse Golden Colossus Taicu und Goshawk, Extraktionsmodus Transdust Ruins ab 23. September 2026, 06:00.</li>
        </ul>
      </section>

      <section id="upcoming-nerfs" className="space-y-5 rounded-3xl border border-red-400/30 bg-red-500/10 p-6 shadow-lg shadow-red-950/30">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-red-200">Search intent: upcoming nerf wwm</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Upcoming nerfs und Balance-Watch.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
            Wer nach upcoming nerfs sucht, will meist wissen, ob Upgrades warten sollten, ein Build-Reset sinnvoll ist
            oder vor dem nächsten Arena-Push ein Waffenwechsel nötig wird. Offizielle Notes bleiben die Quelle der Wahrheit.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {upcomingNerfWatch.map((item) => (
            <Link
              key={item.topic}
              href={item.href}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 transition hover:border-red-300/60"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-slate-50">{item.topic}</p>
                <span className="rounded-full border border-red-300/40 bg-red-500/10 px-2 py-0.5 text-[11px] font-semibold text-red-100">
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-300">{item.action}</p>
            </Link>
          ))}
        </div>
        <p className="text-xs leading-5 text-red-100/80">
          Hinweis: Creator-Listen und Social Posts können frühe Warnungen liefern, aber ein Nerf sollte erst als bestätigt gelten,
          wenn er in offiziellen Patch Notes oder Maintenance-Texten steht.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/40">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Historischer Version-1.7-Catch-up: was Rückkehrer erneut prüfen sollten.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Version 1.7 ist hier nur die datierte Palace-Baseline. Beginne mit Version 2.1 und prüfe Palace-Events, Skyward Bond, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, Build-Kosten und Tier-List-Empfehlungen erneut.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Link
            href="/de/guides/bosses"
            className="rounded-2xl border border-emerald-400/40 bg-slate-950/60 p-4 transition hover:border-emerald-300/70"
          >
            <p className="text-sm font-semibold text-slate-50">Boss- und Dungeon-Guide-Warteschlange</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, Sunken City Lake und weitere patch-relevante Seiten.
            </p>
          </Link>
          <Link
            href="/de/guides/builds"
            className="rounded-2xl border border-emerald-400/40 bg-slate-950/60 p-4 transition hover:border-emerald-300/70"
          >
            <p className="text-sm font-semibold text-slate-50">Build-Reset und Meta-Checks</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              Historische Reset- und Conversion-Änderungen helfen beim Einordnen alter Version-1.7-Builds; aktuelle Empfehlungen müssen gegen Version 2.1 geprüft werden.
            </p>
          </Link>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          SEO-Guide-Checkliste von Version 1.7 bis Version 2.1.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Gute Update-Seiten sagen nicht nur, dass sie aktuell sind. Sie beantworten die konkreten Suchanfragen, die direkt nach einem Patch entstehen.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
          {impactChecklist.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
