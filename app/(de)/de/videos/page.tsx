import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { featuredVideos } from "@/lib/featuredVideos.de";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Videos - 2026 Updates, Tierlisten & Xbox",
  description:
    "Frische Where Winds Meet Videos fuer Version 2.1.3, Heaven's Threshold, Drunken Fist, Hidden Mountain und aktuelle Guides.",
  alternates: buildHreflangAlternates("/videos", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Videos - 2026 Updates, Tierlisten & Xbox",
    description:
      "Frische Where Winds Meet Videos fuer Version 2.1.3, Heaven's Threshold, Drunken Fist, Hidden Mountain und aktuelle Guides.",
    url: `${baseUrl}/de/videos`,
  },
  twitter: {
    title: "Where Winds Meet Videos - 2026 Updates, Tierlisten & Xbox",
    description:
      "Frische Where Winds Meet Videos fuer Version 2.1.3, Heaven's Threshold, Drunken Fist, Hidden Mountain und aktuelle Guides.",
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
            Datierte Where Winds Meet Videos, Update-Historie, Tierlisten und Xbox Gameplay.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Diese Auswahl bewahrt Videos aus Dezember 2025 bis Juni 2026 als datierten visuellen Kontext fuer
            Imperial Palace, Hidden Mountain, Xbox Launch, PvP Tierlisten, Events und Builds.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Nutze das Veroeffentlichungsdatum jeder Karte und pruefe aktuelle Aenderungen in den offiziellen News,
            bevor du ein Video als heutige Anleitung verwendest.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Kuratierte Where Winds Meet Videos mit Veroeffentlichungsdatum
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Jede Karte bettet ein historisch oder thematisch relevantes Video ein; das Datum ordnet den Stand ein.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {featuredVideos.map((video) => (
            <article
              key={video.id}
              className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-4 shadow-sm shadow-slate-950/60"
            >
              <LiteYouTubeEmbed
                videoId={video.id}
                title={video.title}
                poster="/background/bg4.webp"
                analytics={{ eventName: "videos_gallery_play", params: { locale: "de" } }}
              />
              <p className="text-sm font-medium text-slate-100">{video.title}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                Veroeffentlicht - {video.publishedAt}
              </p>
              <p className="text-xs leading-relaxed text-slate-300">{video.description}</p>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-xs font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                Quellvideo auf YouTube oeffnen
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
