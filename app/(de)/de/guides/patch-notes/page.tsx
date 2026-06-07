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
    title: "June 5 Version 1.7 fixes",
    date: "2026-06-05",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
    summary:
      "Neueste Version-1.7-Fixes: Server in Oceania, Middle East und South America sind voll verfuegbar; Papercutting-Controller-Input, Imperial-Palace-Questtexte, Mobile-Loading, Palace Oddities, Hexi Familiar Faces NPCs, Jade Fish display, Skyward Bond UI text, PS5 Palace snow visuals, Skill Theft access und Grand Nuo Ritual wurden adressiert.",
    playerAction:
      "Teste Palace exploration, Imperial Palace quests, Hexi NPC befriending, mobile loading, Papercutting, Skill Theft routes, PS5 map visuals und Event-Rewards erneut, bevor du aelteren Bug-Reports vertraust.",
  },
  {
    title: "May 29 Version 1.7 historical fixes",
    date: "2026-05-29",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
    summary:
      "Die gleiche offizielle Patch-Seite behaelt die May-29-Fixes: Soaring Record rewards, Ghost Master in Skyward Bond, Palace map on mobile, Guild Hero's Realm, Guild UI, Kaifeng model display, controller shop selection, Jadeware translation und Palace Unveiled rewards.",
    playerAction:
      "Nutze May 29 als historischen Palace-Launch-Baseline, aber behandle June 5 als neuesten Live-Stand.",
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
      "Official Version 1.7 overview and current Palace context for events, roadmap searches, returning-player catch-up, and guide freshness.",
    playerAction:
      "Use Version 1.7 as the baseline for patch notes, codes, bosses, tier lists, and builds.",
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
  "Patch notes today / new update: lead with June 5, then May 29 and May 27 instead of older May summaries.",
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
      "Nimm die Path-Balance-Ankuendigung vom 26. Mai als Startpunkt, bevor du ein Build oder eine Waffe als neu generft bezeichnest.",
    href: "/de/guides/tier-list#arena-ranks",
  },
  {
    topic: "Arena und PVP ranks",
    status: "Hohe Suchintention",
    action:
      "Wenn Spieler nach upcoming nerfs suchen, leite sie von Patch Notes zu Arena ranks, PVP-Tierliste und Waffen-Tierliste weiter.",
    href: "/de/guides/pvp-tier-list",
  },
  {
    topic: "Build reset costs",
    status: "Live-Maintenance-Impact",
    action:
      "Guenstigerer Martial Art Reset und niedrigere Inner Way Conversion-Kosten machen Post-Patch-Tests fuer Rueckkehrer weniger riskant.",
    href: "/de/guides/builds",
  },
  {
    topic: "Boss- und Dungeon-Komfortfixes",
    status: "Nicht als Nerf ueberlesen",
    action:
      "Hero's Realm, Sword Trial, Ghost Master und Palace-Fixes koennen Guide-Ratschlaege aendern, auch wenn sie keine Waffen-Nerfs sind.",
    href: "/de/guides/bosses",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Patch Notes Heute - June 5 Version 1.7",
  description:
    "Deutscher Where Winds Meet Patch-Notes-Tracker fuer Version 1.7: June 5 fixes, regional servers, Imperial Palace quests, mobile loading, Skill Theft, Bosse, Builds und Roadmap.",
  alternates: buildHreflangAlternates("/guides/patch-notes", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Patch Notes Heute - June 5 Version 1.7",
    description:
      "Version 1.7 Patch Notes: June 5 fixes, regional servers, Imperial Palace quests, mobile loading, Skill Theft, Bosse, Builds und Roadmap.",
    url: `${baseUrl}/de/guides/patch-notes`,
    locale: "de_DE",
  },
  twitter: {
    title: "Where Winds Meet Patch Notes Heute - June 5 Version 1.7",
    description:
      "Version 1.7 Patch Notes: June 5 fixes, regional servers, Imperial Palace quests, mobile loading, Skill Theft, Bosse und Builds.",
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
            Where Winds Meet Patch Notes heute: Version 1.7, Bosse, Dungeons und Roadmap.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Aktualisiert {freshness?.lastChecked ?? "2026-06-05"}: Where Winds Meet steht jetzt im Kontext von {freshness?.gameVersion ?? "Version 1.7 / June 5 fixes"}. Die aktuelle Update-Spur umfasst June 5 fixes, The Imperial Palace, May 29 historical fixes, May 27 / May 28 maintenance, Path Balance und Sandstorm Tavern.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Diese Seite markiert die Punkte, die du neu pruefen solltest: Codes, Quest-Bugs, Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, Boss-Guides, Builds und Tier-List-Annahmen.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 shadow-lg shadow-amber-950/30">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Aktuelle offizielle Update-Liste</p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Was hat sich in den neuesten Patch Notes geaendert?
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Starte hier, wenn du nach Where Winds Meet Patch Notes heute gesucht hast. Diese Punkte steuern die naechsten Guide-Updates und internen Links.
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

      <section id="upcoming-nerfs" className="space-y-5 rounded-3xl border border-red-400/30 bg-red-500/10 p-6 shadow-lg shadow-red-950/30">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-red-200">Search intent: upcoming nerf wwm</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Upcoming nerfs und Balance-Watch.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
            Wer nach upcoming nerfs sucht, will meist wissen, ob Upgrades warten sollten, ein Build-Reset sinnvoll ist
            oder vor dem naechsten Arena-Push ein Waffenwechsel noetig wird. Offizielle Notes bleiben die Quelle der Wahrheit.
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
          Hinweis: Creator-Listen und Social Posts koennen fruehe Warnungen liefern, aber ein Nerf sollte erst als bestaetigt gelten,
          wenn er in offiziellen Patch Notes oder Maintenance-Texten steht.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/40">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Version 1.7 Catch-up: was Spieler zuerst pruefen sollten.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Wenn du von aelteren Guides kommst, behandle Version 1.7 als neuen Startpunkt. Pruefe Palace-Events, Skyward Bond, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, Build-Kosten und Tier-List-Empfehlungen neu.
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
              Geringere Reset- und Conversion-Kosten machen es leichter, Version-1.7-Builds zu testen.
            </p>
          </Link>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          SEO-Guide-Checkliste nach Version 1.7.
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
