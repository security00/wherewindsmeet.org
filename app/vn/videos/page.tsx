import type { Metadata } from "next";
import Image from "next/image";
import { featuredVideos } from "../../../lib/featuredVideos";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Video Where Winds Meet – gameplay & highlight",
  description:
    "Xem tuyển tập video Where Winds Meet: gameplay, combat, khám phá và style cộng đồng, nhúng ngay trong hub.",
  alternates: {
    canonical: `${baseUrl}/vn/videos`,
  },
  openGraph: {
    title: "Video Where Winds Meet – gameplay & highlight",
    description:
      "Xem tuyển tập video Where Winds Meet: gameplay, combat, khám phá và style cộng đồng, nhúng ngay trong hub.",
    url: `${baseUrl}/vn/videos`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Video Where Winds Meet – gameplay & highlight",
    description:
      "Xem tuyển tập video Where Winds Meet: gameplay, combat, khám phá và style cộng đồng.",
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
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: baseUrl },
        { "@type": "ListItem", position: 2, name: "Videos", item: `${baseUrl}/vn/videos` },
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
            alt="Nền video Where Winds Meet"
            fill
            className="object-cover opacity-35"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Xem video Where Winds Meet.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Tuyển video hand-picked: combat, khám phá, boss run và style cộng đồng. Xem ngay trong hub, liên kết trực tiếp với guide/tier list bạn đang mở.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Lướt playlist bên dưới để xem nhiều góc nhìn trong một lượt, không cần rời site.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Danh sách video
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Mỗi thẻ nhúng một video; bạn có thể xem, tạm dừng hoặc tua lại tùy ý trong khi đọc guide khác.
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

