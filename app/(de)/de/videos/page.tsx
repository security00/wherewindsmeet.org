import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { featuredVideos } from "@/lib/featuredVideos.de";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Videos - 2026 Updates, Tierlisten & Xbox",
  description:
    "Frische Where Winds Meet Videos fuer Version 1.7, Imperial Palace, Xbox Gameplay, PvP Tierlisten, Events, Builds und Guide-Checks.",
  alternates: buildHreflangAlternates("/videos", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Videos - 2026 Updates, Tierlisten & Xbox",
    description:
      "Frische Where Winds Meet Videos fuer Version 1.7, Imperial Palace, Xbox Gameplay, PvP Tierlisten, Events, Builds und Guide-Checks.",
    url: `${baseUrl}/de/videos`,
  },
  twitter: {
    title: "Where Winds Meet Videos - 2026 Updates, Tierlisten & Xbox",
    description:
      "Frische Where Winds Meet Videos fuer Version 1.7, Imperial Palace, Xbox Gameplay, PvP Tierlisten, Events, Builds und Guide-Checks.",
  },
};

export default function VideosPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/de/videos`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Start", item: `${baseUrl}/de` },
        { "@type": "ListItem", position: 2, name: "Videos", item: `${baseUrl}/de/videos` },
      ],
    },
    ...featuredVideos.map((video) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: video.title,
      description: video.description,
      thumbnailUrl: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
      uploadDate: video.publishedAt,
      embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
      contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    })),
  ];

  return (
    <div className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Where Winds Meet video background"
            fill
            className="object-cover opacity-35"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Frische Where Winds Meet Videos, Updates, Tierlisten und Xbox Gameplay.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Diese Auswahl wurde fuer Version 1.7 aktualisiert: Imperial Palace, Xbox Launch, PvP Tierlisten,
            Event-Guides, Builds und Rueckkehrer-Checks.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Sie hilft bei breiten Suchen wie where winds meet und where the winds meet, bevor Besucher zu Codes,
            Karte, Tierlisten und Patch Notes weitergehen.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Frisch kuratierte Where Winds Meet Videos
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Jede Karte bettet ein aktuelles oder update-relevantes Video direkt hier ein.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredVideos.map((video) => (
            <article
              key={video.id}
              className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60"
            >
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
                <div className="aspect-video bg-slate-950/80">
                  <iframe
                    title={video.title}
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
              <p className="text-sm font-medium text-slate-100">{video.title}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                Refreshed pick - {video.publishedAt}
              </p>
              <p className="text-xs leading-relaxed text-slate-300">{video.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
