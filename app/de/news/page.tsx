import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { latestNewsDate, newsItems } from "@/lib/news";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Nachrichten, Roadmap & Patch Notes (DE)",
  description:
    "Kuratiertes Where Winds Meet News-Feed: Roadmap-Updates, Balance-Patches, Bugfixes und Events – schnell verständlich auf Deutsch.",
  alternates: buildHreflangAlternates("/news", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Nachrichten & Updates (DE)",
    description:
      "Roadmap, Balance-Patches, Bugfixes und Events – kompakt zusammengefasst, mit Link zur offiziellen Quelle.",
    url: `${baseUrl}/de/news`,
    locale: "de_DE",
  },
  twitter: {
    title: "Where Winds Meet News (DE)",
    description:
      "Deutscher Überblick zu aktuellen Where Winds Meet Ankündigungen, Patch Notes und Roadmap.",
  },
};

export default function NewsPage() {
  const sortedNews = [...newsItems].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
  );

  const lastUpdatedLabel = `Aktualisiert ${latestNewsDate}`;
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
    title: "Roadmap / Nächste Updates (Watchlist)",
    summary:
      "Beobachtet kommende Where Winds Meet Updates: Balance-Patches, Boss/Bloodbath-Tweaks, Anti-Cheat, Events und Quest-Fixes. Wir aktualisieren nach jedem offiziellen Post.",
    updated: lastUpdatedLabel,
    links: [
      { href: "/de/guides/tier-list", label: "China-Tierlist & Balance-Notizen" },
      { href: "/de/guides/bosses", label: "Bossliste & Änderungen" },
      { href: "/de/guides/unholy-prophecy", label: "An Unholy Prophecy (Quest-Fixes)" },
      { href: "/de/guides/woven-with-malice", label: "Woven with Malice (Zeitschranken)" },
    ],
  };

  return (
    <article className="space-y-12 bg-ink-wash min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-md bg-texture-noise">
        <div className="pointer-events-none absolute inset-0">
          <Image
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
              Hier fassen wir offizielle Ankündigungen, Roadmap-Beiträge, Launch-Guides, Systemhinweise und Beta-Notizen kompakt auf Deutsch zusammen.
              Jede Karte verlinkt zur Originalquelle, damit du Details bei Bedarf nachlesen kannst.
            </p>
            <p>
              Wenn du nur schnell <span className="font-semibold text-emerald-400">Patch Notes</span> überfliegen oder die
              <span className="font-semibold text-emerald-400"> Roadmap</span> checken willst, bekommst du hier die Kernpunkte auf einen Blick.
            </p>
          </div>

          <div
            id="next-update"
            className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-50 shadow-inner shadow-emerald-900/40"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold">Nächstes Update (wird laufend aktualisiert)</p>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
                {lastUpdatedLabel}
              </span>
            </div>
            <p className="mt-2 text-emerald-100/90">
              Beobachten offizielle „Next Update“-Beats: Balance-Notizen, neue Bosse/Bloodbath-Varianten, Event-Codes. Nach Ankündigungen fassen wir die wichtigsten Punkte in 2–3 Bullet-Points zusammen.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Link href="/de/guides/tier-list" className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80">
                Tierlist (China-Perspektive)
              </Link>
              <Link href="/de/guides/bosses" className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80">
                Boss-Änderungen
              </Link>
              <Link href="/de/guides/codes" className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80">
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

          <div className="mt-8 space-y-4">
            {sortedNews.map((item) => (
              <div
                key={item.id}
                className="card-tablet group flex flex-col gap-4 rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-900/10 sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-lg font-bold text-slate-50 group-hover:text-ink-jade transition-colors font-serif">
                      {item.title}
                    </h2>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-950/30 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                      {item.type}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 font-mono">
                    {item.date}
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
            Wir sammeln die wichtigsten Where Winds Meet Meldungen in einem ruhigen, lesbaren Stream. Statt jede Patch Note zu wühlen oder Social Feeds zu durchsuchen, bekommst du kurze Zusammenfassungen, warum die Änderung wichtig ist und wen sie betrifft.
          </p>
          <p>
            Schwerpunkt sind Updates, die dein tägliches Spielgefühl ändern – Steuerung, Performance, Events, Balance. Saison-Events mit Ablaufdatum werden deutlich markiert.
          </p>
          <p>
            Jede News verknüpfen wir mit relevanten Guides (z. B. Boss-Änderungen → Boss-Guide, Codes → Rewards-Guide), damit du direkt weiterklicken kannst.
          </p>
        </div>
      </section>
    </article>
  );
}
