import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { featuredVideos } from "@/lib/featuredVideos";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Videos - 2026 Updates, Tier Lists & Xbox Gameplay",
  description:
    "Watch fresh Where Winds Meet videos for 2026 updates, Version 1.7 Imperial Palace, Xbox gameplay, PvP tier lists, events, builds, and guide checks.",
  alternates: buildHreflangAlternates("/videos"),
  openGraph: {
    title: "Where Winds Meet Videos - 2026 Updates, Tier Lists & Xbox Gameplay",
    description:
      "Fresh Where Winds Meet videos for Version 1.7, Xbox gameplay, PvP tier lists, Imperial Palace events, builds, and update checks.",
    url: `${baseUrl}/videos`,
  },
  twitter: {
    title: "Where Winds Meet Videos - 2026 Updates, Tier Lists & Xbox Gameplay",
    description:
      "Fresh Where Winds Meet videos for Version 1.7, Xbox gameplay, PvP tier lists, Imperial Palace events, builds, and update checks.",
  },
};

export default function VideosPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/videos`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: baseUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Videos",
          item: `${baseUrl}/videos`,
        },
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
            alt="Where Winds Meet gameplay background art"
            fill
            className="object-cover opacity-35"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Watch fresh Where Winds Meet videos, updates, tier lists, and Xbox gameplay.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            This page gathers recently refreshed Where Winds Meet videos in one quiet
            place: Version 1.7 Imperial Palace coverage, Xbox launch gameplay, PvP
            tier lists, event guides, build showcases, and returner-friendly update
            checks.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            It is built for broad searches like where winds meet and where the winds
            meet, then nudges visitors into the site&apos;s codes, maps, tier lists,
            builds, and patch-note pages after they see what is current.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Fresh curated Where Winds Meet videos.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Each card embeds a recent or update-relevant Where Winds Meet video directly
          on this page. Use them as freshness support for Version 1.7, Xbox launch,
          PvP tier lists, Imperial Palace events, and build research.
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
              <p className="text-sm font-medium text-slate-100">
                {video.title}
              </p>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                Refreshed pick - {video.publishedAt}
              </p>
              <p className="text-xs leading-relaxed text-slate-300">
                {video.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
