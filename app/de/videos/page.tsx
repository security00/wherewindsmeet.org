import type { Metadata } from "next";
import Image from "next/image";
import { featuredVideos } from "@/lib/featuredVideos.de";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Videos & Highlights (DE)",
  description:
    "Kuratiertes Where Winds Meet Video-Archiv: Builds in Aktion, Boss-Runs, Erkundung und Community-Style – ohne den Hub zu verlassen.",
  alternates: buildHreflangAlternates("/videos", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Videos & Highlights (DE)",
    description:
      "Ausgewählte Where Winds Meet Videos: Kampf-Highlights, Erkundung, Boss-Runs und Community-Clips – eingebettet im Guide-Hub.",
    url: `${baseUrl}/de/videos`,
  },
  twitter: {
    title: "Where Winds Meet Videos & Highlights (DE)",
    description:
      "Schau Builds, Tierlisten-Picks und Routen in Bewegung, ohne den Hub zu verlassen.",
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
      uploadDate: "2024-01-01",
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
          <Image
            src="/background/bg4.webp"
            alt="Where Winds Meet Gameplay Hintergrund"
            fill
            className="object-cover opacity-35"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Sieh dir Where Winds Meet Gameplay & Highlights an.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Eine ruhige Sammlung handverlesener Videos: So fühlen sich Builds, Tierlisten-Picks und Erkundungsrouten in Bewegung an – ohne den Hub zu verlassen.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Blättere durch die Playlist und sieh Combat-Showcases, Erkundungs-Clips, Boss-Runs und Community-Style-Videos, während du weiter in den Guides liest.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Alle kuratierten Where Winds Meet Videos
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Jede Karte bettet ein Video direkt hier ein. Spiele sie nacheinander ab und bleib im Hub, während du Builds, Tierlisten und Guides parallel offen hast.
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
