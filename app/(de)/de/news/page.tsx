import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import type { NewsType } from "@/lib/news";
import { getContentFreshness } from "@/lib/contentFreshness";
import { latestNewsDate, newsItems } from "@/lib/news.de";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/news");

export const metadata: Metadata = {
  title: "Where Winds Meet Nachrichten, Roadmap & Patch Notes (DE)",
  description:
    "Kuratiertes Where Winds Meet News-Feed mit Datum, Typ und Quellenlink. Offizielle englische Titel bleiben unverändert gekennzeichnet.",
  alternates: buildHreflangAlternates("/news", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Nachrichten & Updates (DE)",
    description:
      "Roadmap, Balance-Patches, Bugfixes und Events mit klarer Kennzeichnung der offiziellen englischen Titel und Quellen.",
    url: `${baseUrl}/de/news`,
    locale: "de_DE",
  },
  twitter: {
    title: "Where Winds Meet News (DE)",
    description:
      "Deutscher Überblick über aktuelle Where Winds Meet Ankündigungen, Patch Notes und die Roadmap.",
  },
};

export default function NewsPage() {
  const typeLabel: Record<NewsType, string> = {
    announcement: "Ankündigung",
    event: "Event",
    guide: "Guide",
    beta: "Beta",
  };

  const formatDateDe = (iso: string) => {
    const parts = iso.split("-");
    if (parts.length !== 3) return iso;
    const [year, month, day] = parts;
    if (!year || !month || !day) return iso;
    return `${day}.${month}.${year}`;
  };

  const sortedNews = newsItems;

  const lastUpdatedLabel = `Aktualisiert: ${formatDateDe(latestNewsDate)}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/de/news`,
      dateModified: latestNewsDate,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${baseUrl}/de` },
        { "@type": "ListItem", position: 2, name: "News", item: `${baseUrl}/de/news` },
      ],
    },
  ];

  const roadmapBlock = {
    title: "Roadmap / Nächste Updates (Beobachtungsliste)",
    summary:
      "Letzter geprüfter Stand: Version 2.1. Die offizielle Übersicht zum 27. August und die Patch Notes vom 20. August stehen vor den datierten Version-2.0-, Version-1.8-, Palace-, Xbox-, Hexi- und Qinchuan-Notizen.",
    updated: lastUpdatedLabel,
    links: [
      { href: "/guides/tier-list", label: "China-Tierliste & Balance-Notizen" },
      { href: "/de/guides/bosses", label: "Bossliste & Änderungen" },
      { href: "/guides/unholy-prophecy", label: "An Unholy Prophecy (Quest-Fixes)" },
      { href: "/de/guides/woven-with-malice", label: "Woven with Malice (Zeitschranken)" },
    ],
  };

  const searchIntentWatchlist = [
    {
      title: "Vorschau auf kommende Ziehungen und Belohnungen",
      query: "wwm future draw preview",
      action:
        "Zuerst die offizielle News-Liste prüfen, dann Spieler zu Kosmetik, Gratis-Outfits, Codes und Event-Belohnungen führen, sobald die Ziehung bestätigt ist.",
      href: "/de/guides/cosmetics",
      cta: "Kosmetik-Hub",
    },
    {
      title: "Arena-Ränge und Tierlisten-Prüfung",
      query: "wwm arena ranks",
      action:
        "Haupt-Tierliste, PVP-Tierliste, Waffen-Tierliste und Patch Notes eng verlinken, damit Rank-Climber schnell von Suche zu Build-Entscheidung kommen.",
      href: "/guides/tier-list#arena-ranks",
      cta: "Hinweise zu Arena-Rängen",
    },
    {
      title: "Kommende Abschwächungen und Balance-Beobachtung",
      query: "upcoming nerf wwm",
      action:
        "Keine Änderung als bestätigt markieren, bis sie in den offiziellen Hinweisen steht. Danach zu Path Balance, Wartung und Karten zu Patch-Auswirkungen weiterleiten.",
      href: "/de/guides/patch-notes#upcoming-nerfs",
      cta: "Balance-Beobachtung",
    },
    {
      title: "Namensvarianten von Mistveil / Mist-Shrouded Prison",
      query: "mistveil prison",
      action:
        "Mistveil Prison als Suchvariante von Mist-Shrouded Prison behandeln und zur Truhenroute, den Schleifenmarkierungen und den Schritten zum Endschatz führen.",
      href: "/de/guides/mist-shrouded-prison#mistveil-prison",
      cta: "Gefängnisroute",
    },
  ];

  return (
    <article className="space-y-12 bg-ink-wash min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="de" />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-md bg-texture-noise">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/6.webp"
            alt="Where Winds Meet News Hintergrund"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />
        </div>

        <div className="absolute right-8 top-8 hidden text-vertical text-3xl font-bold text-slate-50/10 lg:block font-serif select-none">
          江湖风云
        </div>

        <div className="relative space-y-6 z-10 max-w-3xl">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl font-serif">
            Aktuelle <span className="text-ink-gold">Where Winds Meet</span> News & Artikel.
          </h1>
          <div className="space-y-4 text-slate-200/90 font-sans text-lg leading-relaxed">
            <p>
              Hier listen wir offizielle Ankündigungen, Roadmap-Beiträge, Launch-Guides, Systemhinweise und Beta-Notizen.
              Die englischen Originaltitel bleiben sichtbar; jede Karte kennzeichnet die Quellsprache und verlinkt zur offiziellen Meldung.
            </p>
            <p>
              Wenn du nur schnell <span className="font-semibold text-emerald-400">Patch Notes</span> überfliegen oder die
              <span className="font-semibold text-emerald-400"> Roadmap</span> prüfen willst, findest du hier Datum, Typ und Quelle auf einen Blick.
            </p>
          </div>

          <div
            id="next-update"
            className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-50 shadow-inner shadow-emerald-900/40"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold">Version 2.1 / Clouded Revelation (letzter geprüfter Stand)</p>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
                {lastUpdatedLabel}
              </span>
            </div>
            <p className="mt-2 text-emerald-100/90">
              Geprüft für {freshness?.gameVersion ?? "Version 2.1 / August 27"}: Die offizielle Übersicht zum
              27. August und die Patch Notes vom 20. August bilden den aktuellen Anker. Version 2.0, Version 1.8,
              Palace, Xbox, Hexi und Qinchuan bleiben darunter als datierter Rückblick.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Link href="/guides/tier-list" className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80">
                Tierliste (China-Perspektive)
              </Link>
              <Link href="/de/guides/bosses" className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80">
                Boss-Änderungen
              </Link>
              <Link href="/guides/codes" className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80">
                Neueste Codes
              </Link>
            </div>
          </div>

          <div
            id="roadmap"
            className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-100 shadow-inner shadow-slate-900/40"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold">{roadmapBlock.title}</p>
              <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
                {roadmapBlock.updated}
              </span>
            </div>
            <p className="mt-2 text-slate-300">{roadmapBlock.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {roadmapBlock.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 font-semibold text-slate-100 hover:border-emerald-300/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div
            id="organic-search-watch"
            className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-4 text-sm text-blue-50 shadow-inner shadow-blue-950/40"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">Aktuelle Spielerfragen</p>
              <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-blue-100">
                Beobachtung
              </span>
            </div>
            <p className="mt-2 text-blue-100/90">
              Spieler suchen nach Future Draw Previews, Arena ranks, Patch-Note-Nerfs, Codes, Qinchuan-Routen, NPCs,
              Kartenhilfe und Mist-Shrouded-Prison-Antworten. Dieser Block führt schnell zur passenden Seite.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {searchIntentWatchlist.map((item) => (
                <Link
                  key={item.query}
                  href={item.href}
                  className="rounded-xl border border-blue-300/30 bg-slate-950/70 p-3 transition hover:border-blue-200/70"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-200">{item.query}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-50">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">{item.action}</p>
                  <p className="mt-2 text-xs font-semibold text-emerald-300">{item.cta}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            {sortedNews.map((item) => (
              <div
                key={item.id}
                className="card-tablet deferred-news-card group flex flex-col gap-4 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="w-full text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      Offizieller englischer Titel
                    </span>
                    <h2 className="text-lg font-bold text-slate-50 group-hover:text-ink-jade transition-colors font-serif">
                      {item.title}
                    </h2>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      {typeLabel[item.type] ?? item.type}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 font-mono">
                    {formatDateDe(item.date)}
                    {item.tags && item.tags.length > 0 && (
                      <>
                        <span className="mx-2 text-slate-700">|</span>
                        {item.tags.join(" · ")}
                      </>
                    )}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-300/90 font-sans max-w-2xl">
                    {item.summary}
                  </p>
                </div>
                {item.officialUrl && (
                  <div className="mt-2 flex shrink-0 sm:mt-0 sm:pl-4 self-start">
                    <Link
                      href={item.officialUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-seal text-[10px] py-1 px-3"
                    >
                      Offizielle Quelle
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-lg backdrop-blur-sm bg-texture-noise">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl font-serif border-brush inline-block pb-2 mb-4">
          Wie diese News-Seite in den Hub passt.
        </h2>
        <div className="space-y-4 text-slate-300 font-sans leading-relaxed">
          <p>
            Wir sammeln offizielle Where Winds Meet Meldungen in einem ruhigen, lesbaren Stream. Die Karten nennen Datum, Typ und Quelle, erheben aber keinen Anspruch auf eine vollständige deutsche Übersetzung des englischen Artikels.
          </p>
          <p>
            Schwerpunkt sind Updates, die dein tägliches Spielgefühl ändern — etwa Steuerung, Performance, Events und Balance. Für die inhaltlichen Einzelheiten ist die verlinkte offizielle Quelle maßgeblich.
          </p>
          <p>
            Relevante Meldungen verknüpfen wir mit passenden Guides, etwa Boss-Änderungen → Boss-Guide oder Codes → Belohnungs-Guide, damit du direkt weiterklicken kannst.
          </p>
        </div>
      </section>
    </article>
  );
}
