import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { NewsType } from "@/lib/news";
import { latestNewsDate, newsItems } from "@/lib/news.vi";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Tin tức Where Winds Meet, roadmap & patch notes",
  description:
    "Tin tức Where Winds Meet chọn lọc: roadmap, cân bằng, patch notes để bạn nắm nhanh thay đổi quan trọng.",
  alternates: buildHreflangAlternates("/news", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Tin tức Where Winds Meet, roadmap & patch notes",
    description:
      "Tin tức Where Winds Meet chọn lọc: roadmap, cân bằng, patch notes để bạn nắm nhanh thay đổi quan trọng.",
    url: `${baseUrl}/vn/news`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Tin tức Where Winds Meet, roadmap & patch notes",
    description:
      "Tin tức Where Winds Meet chọn lọc: roadmap, cân bằng, patch notes để bạn nắm nhanh thay đổi quan trọng.",
  },
};

export default function NewsPage() {
  const typeLabel: Record<NewsType, string> = {
    announcement: "Thông báo",
    event: "Sự kiện",
    guide: "Hướng dẫn",
    beta: "Beta",
  };

  const formatDateVi = (iso: string) => {
    const parts = iso.split("-");
    if (parts.length !== 3) return iso;
    const [year, month, day] = parts;
    if (!year || !month || !day) return iso;
    return `${day}/${month}/${year}`;
  };

  const sortedNews = [...newsItems].sort((a, b) =>
    a.date < b.date ? 1 : a.date > b.date ? -1 : 0,
  );

  const lastUpdatedLabel = `Cập nhật: ${formatDateVi(latestNewsDate)}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/news`,
      dateModified: latestNewsDate,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/vn` },
        { "@type": "ListItem", position: 2, name: "Tin tức", item: `${baseUrl}/vn/news` },
      ],
    },
  ];

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
            alt="Nền tin tức Where Winds Meet"
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
            Tin tức <span className="text-ink-gold">Where Winds Meet</span> mới nhất.
          </h1>
          <div className="space-y-4 text-slate-200/90 font-sans text-lg leading-relaxed">
            <p>
              Tóm tắt thông báo chính thức, roadmap, hướng dẫn launch, patch notes và ghi chú beta. Mỗi thẻ liên kết về nguồn gốc để bạn kiểm chứng chi tiết khi cần.
            </p>
            <p>
              Muốn lướt nhanh <span className="font-semibold text-emerald-400">patch notes</span> hoặc cập nhật{" "}
              <span className="font-semibold text-emerald-400">roadmap</span> mà không phải đọc mọi dòng? Bắt đầu tại đây.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-emerald-100">
              {lastUpdatedLabel}
            </span>
          </div>

          <div
            id="next-update"
            className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-50 shadow-inner shadow-emerald-900/40"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="font-semibold">Theo dõi “update tiếp theo” (tự cập nhật khi có tin mới)</p>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
                {lastUpdatedLabel}
              </span>
            </div>
            <p className="mt-2 text-emerald-100/90">
              Tổng hợp nhanh các thông tin liên quan “bản cập nhật tiếp theo”: cân bằng, boss/Bloodbath, sự kiện và code. Khi có thông báo mới, phần tóm tắt sẽ được cập nhật ngắn gọn trong 2–3 gạch đầu dòng.
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Link
                href="/vn/guides/tier-list"
                className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80"
              >
                Tier list (góc nhìn CN)
              </Link>
              <Link
                href="/vn/guides/bosses"
                className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80"
              >
                Thay đổi boss
              </Link>
              <Link
                href="/vn/guides/codes"
                className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80"
              >
                Code mới nhất
              </Link>
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
                      {typeLabel[item.type] ?? item.type}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-500 font-mono">
                    {formatDateVi(item.date)}
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
                      Đọc nguồn
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
          Trang này kết nối với phần còn lại của hub
        </h2>
        <div className="space-y-4 text-slate-300 font-sans leading-relaxed">
          <p>
            Mục tiêu: tập trung tin quan trọng ảnh hưởng trải nghiệm. Nếu patch chỉnh camera/aim/UI hay thêm hoạt động giới hạn, bạn sẽ thấy tóm tắt rõ ràng kèm nhắc lịch.
          </p>
          <p>
            Tin nào ảnh hưởng build sẽ được phản ánh ở trang builds/tier list. Sự kiện có code hay lợi ích lâu dài sẽ được gắn nhãn và liên kết sang trang rewards/codes.
          </p>
          <p>
            Nếu có thay đổi lớn mà bạn muốn cập nhật cụ thể (PvP, boss, chất lượng sống), hãy nhắn — chúng tôi sẽ ưu tiên cập nhật sớm.
          </p>
        </div>
      </section>
    </article>
  );
}
