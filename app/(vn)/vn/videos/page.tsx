import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import { featuredVideos } from "@/lib/featuredVideos.vi";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Video Where Winds Meet - Update 2026, Tier List, Xbox",
  description:
    "Video Where Winds Meet co ngay dang tu 2025 va 2026: Hidden Mountain, Imperial Palace, Xbox gameplay, PvP tier list, event va build.",
  alternates: buildHreflangAlternates("/videos", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Video Where Winds Meet - Update 2026, Tier List, Xbox",
    description:
      "Video Where Winds Meet co ngay dang tu 2025 va 2026: Hidden Mountain, Imperial Palace, Xbox gameplay, PvP tier list, event va build.",
    url: `${baseUrl}/vn/videos`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Video Where Winds Meet - Update 2026, Tier List, Xbox",
    description:
      "Video Where Winds Meet co ngay dang tu 2025 va 2026: Hidden Mountain, Imperial Palace, Xbox gameplay, PvP tier list, event va build.",
  },
};

export default function VideosPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/videos`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chu", item: `${baseUrl}/vn` },
        { "@type": "ListItem", position: 2, name: "Video", item: `${baseUrl}/vn/videos` },
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
            Xem kho video Where Winds Meet co ngay dang, lich su update, tier list va Xbox gameplay.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Danh sach giu lai video tu thang 12/2025 den thang 6/2026 nhu boi canh hinh anh co ngay cho Imperial
            Palace, Hidden Mountain, Xbox launch, PvP tier list, event va build.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Hay xem ngay dang tren tung card va doi chieu thay doi hien tai voi tin official truoc khi dung video nhu
            huong dan cho patch hom nay.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Video duoc tuyen chon kem ngay dang
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Moi card nhung mot video lich su hoac con lien quan theo chu de; ngay dang cho biet boi canh cua video.
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
                analytics={{ eventName: "videos_gallery_play", params: { locale: "vi" } }}
              />
              <p className="text-sm font-medium text-slate-100">{video.title}</p>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-emerald-300">
                Ngay dang - {video.publishedAt}
              </p>
              <p className="text-xs leading-relaxed text-slate-300">{video.description}</p>
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-xs font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                Mo video nguon tren YouTube
              </a>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
