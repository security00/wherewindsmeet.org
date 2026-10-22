import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import type { NewsType } from "@/lib/news";
import { getContentFreshness } from "@/lib/contentFreshness";
import { latestNewsDate, newsItems } from "@/lib/news.vi";
import { OfficialNewsCard } from "@/components/news/OfficialNewsCard";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/news");

export const metadata: Metadata = {
  title: "Tin tức Where Winds Meet, roadmap & patch notes",
  description:
    "Danh mục tin Where Winds Meet có ngày, loại tin và liên kết nguồn; tiêu đề tiếng Anh chính thức được giữ nguyên và ghi nhãn rõ ràng.",
  alternates: buildHreflangAlternates("/news", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Tin tức Where Winds Meet, roadmap & patch notes",
    description:
      "Danh mục roadmap, cân bằng và patch notes với tiêu đề tiếng Anh chính thức, ngày đăng và liên kết nguồn rõ ràng.",
    url: `${baseUrl}/vn/news`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Tin tức Where Winds Meet, roadmap & patch notes",
    description:
      "Danh mục tin Where Winds Meet với tiêu đề tiếng Anh chính thức, ngày đăng và liên kết nguồn rõ ràng.",
  },
};

const searchIntentWatchlist = [
  {
    title: "Xem trước lượt quay và phần thưởng sắp tới",
    query: "wwm future draw preview",
    action:
      "Kiểm tra tin chính thức trước, sau đó dẫn người chơi tới mỹ phẩm, trang phục miễn phí, code và phần thưởng sự kiện khi lượt quay được xác nhận.",
    href: "/vn/guides/cosmetics",
    cta: "Trung tâm mỹ phẩm",
  },
  {
    title: "Xếp hạng Đấu trường và kiểm tra tier list",
    query: "wwm arena ranks",
    action:
      "Liên kết tier list chính, PvP tier list, weapon tier list và patch notes để người leo hạng đưa ra quyết định nhanh.",
    href: "/guides/tier-list#arena-ranks",
    cta: "Ghi chú xếp hạng Đấu trường",
  },
  {
    title: "Theo dõi cân bằng và các đợt giảm sức mạnh sắp tới",
    query: "upcoming nerf wwm",
    action:
      "Dùng ghi chú chính thức làm nguồn chuẩn. Phần này dẫn người chơi tới Path Balance, bảo trì mới và các thẻ tác động trong patch notes.",
    href: "/vn/guides/patch-notes#upcoming-nerfs",
    cta: "Theo dõi cân bằng",
  },
  {
    title: "Tên gọi Mistveil / Mist-Shrouded Prison",
    query: "mistveil prison",
    action:
      "Xem Mistveil Prison là một ý định tìm kiếm của Mist-Shrouded Prison và dẫn người chơi tới lộ trình 6 rương, điểm vòng lặp và kho báu cuối.",
    href: "/vn/guides/mist-shrouded-prison#mistveil-prison",
    cta: "Lộ trình nhà ngục",
  },
];

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

  const sortedNews = newsItems;

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
      <HomeHubBacklink language="vi" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-md bg-texture-noise">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
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
              Đây là danh mục thông báo chính thức, roadmap, hướng dẫn ra mắt, patch notes và ghi chú beta. Tiêu đề tiếng Anh gốc được giữ nguyên và mỗi thẻ liên kết về nguồn chính thức.
            </p>
            <p>
              Phần mô tả tiếng Việt chỉ nêu ngôn ngữ và nguồn của bài, không giả định là bản dịch đầy đủ. Hãy mở nguồn gốc để kiểm tra chi tiết về{" "}
              <span className="font-semibold text-emerald-400">patch notes</span> hoặc <span className="font-semibold text-emerald-400">roadmap</span>.
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
              <p className="font-semibold">HIỆN TẠI: Version 2.3 / Friends from Afar (15/10/2026)</p>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-emerald-100">
                {lastUpdatedLabel}
              </span>
            </div>
            <p className="mt-2 text-emerald-100/90">
              Đã rà soát theo {freshness?.gameVersion ?? "Version 2.3 / 15/10"}:{' '}
              <a href="https://store.steampowered.com/news/app/3564740/view/1846651706675921" target="_blank" rel="noopener noreferrer" className="underline">tổng quan chính thức Version 2.3 ngày 15/10</a>
              {' '}(cập nhật trực tiếp 5:00–12:00 UTC+8) thêm vùng mới Qingzhou – Eastern Peak, vũ khí Waist Drum với lưu phái Silkbind – Wings,
              môn phái Inkbound Order, ba world boss và mùa S5: Ever Aflame (15/10 đến 26/11).
            </p>
            <p className="mt-2 text-emerald-100/90">
              Phiên bản trước:{' '}
              <a href="https://store.steampowered.com/news/app/3564740/view/1843481262704696" target="_blank" rel="noopener noreferrer" className="underline">patch notes Version 2.2 ngày 16/09</a>
              {' '}(cải tiến Bang hội, sửa lỗi; lối vào Reflection Temple tạm đóng và sẽ mở lại khi Jiangnan ra mắt, tiến độ được giữ nguyên) và{' '}
              <a href="https://store.steampowered.com/news/app/3564740/view/1843481262704691" target="_blank" rel="noopener noreferrer" className="underline">tổng quan Version 2.2 [Perilous Eminence]</a>
              {' '}với chương chính Hidden Mountain Bringer of Embers và chế độ extraction Transdust Ruins từ 23/09.
              Version 2.1 với{' '}
              <a href="https://www.wherewindsmeetgame.com/news/official/CloudedRevelationPatchNotes.html" target="_blank" rel="noopener noreferrer" className="underline">patch notes 05/09</a>
              {' '}và{' '}
              <a href="https://www.wherewindsmeetgame.com/news/official/903update.html" target="_blank" rel="noopener noreferrer" className="underline">tổng quan 03/09</a>
              {' '}cùng các phiên bản cũ hơn vẫn nằm bên dưới dưới dạng nội dung lịch sử có ngày.
            </p>
            <p className="mt-2 text-emerald-100/90">
              Mới trong Version 2.3:{' '}
              <a href="https://www.wherewindsmeetgame.com/news/official/FriendsFromAfarPatchNotes.html" target="_blank" rel="noopener noreferrer" className="underline">patch notes 15/10</a>
              {' '}(Transdust Ruins mở cả ngày, phát hiện AFK, Kho đồ từ Lv. 20),{' '}
              <a href="https://www.wherewindsmeetgame.com/news/official/1016patchnotes.html" target="_blank" rel="noopener noreferrer" className="underline">patch notes 16/10</a>
              {' '}(25 bản sửa lỗi) và{' '}
              <a href="https://www.wherewindsmeetgame.com/news/official/1015appearance.html" target="_blank" rel="noopener noreferrer" className="underline">tổng quan trang phục mới</a>
              {' '}(Aureate Dominion đến 09/11, Path of Youth từ 18/10).
            </p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <Link
                href="/guides/tier-list"
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
                href="/guides/codes"
                className="rounded-full border border-emerald-400/60 px-3 py-1 font-semibold text-emerald-50 hover:border-emerald-300/80"
              >
                Code mới nhất
              </Link>
            </div>
          </div>

          <div
            id="organic-search-watch"
            className="rounded-2xl border border-blue-400/30 bg-blue-500/10 p-4 text-sm text-blue-50 shadow-inner shadow-blue-950/40"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="font-semibold">Câu hỏi người chơi đang tìm</p>
              <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-blue-100">
                Đang theo dõi
              </span>
            </div>
            <p className="mt-2 text-blue-100/90">
              Người chơi đang tìm thông tin về lượt quay sắp tới, xếp hạng Đấu trường, giảm sức mạnh trong patch notes, code, lộ trình Qinchuan, NPC, trợ giúp bản đồ và lời giải Mist-Shrouded Prison.
              Dùng phần này như lối tắt trước khi đọc toàn bộ kho tin.
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
              <OfficialNewsCard
                key={item.id}
                item={{ ...item, date: formatDateVi(item.date) }}
                typeLabel={typeLabel[item.type] ?? item.type}
                titleNote="Tiêu đề tiếng Anh chính thức"
                officialCta="Đọc nguồn"
              />
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
            Mục tiêu của trang là giúp bạn tìm đúng thông báo chính thức theo ngày và loại tin. Mỗi thẻ giữ nguyên tiêu đề tiếng Anh để tránh biến một bản diễn giải ngắn thành bản dịch không được kiểm chứng.
          </p>
          <p>
            Phần mô tả cho biết bài gốc dùng tiếng Anh và dẫn thẳng tới nguồn. Nội dung, phạm vi thay đổi và điều kiện sự kiện phải được kiểm tra trên trang chính thức.
          </p>
          <p>
            Các trang hướng dẫn liên quan chỉ được cập nhật sau khi thông tin có thể đối chiếu với nguồn chính thức; mốc hiện tại của trang tin là Version 2.3 (15/10), phiên bản trước là Version 2.2 (16/09); Version 2.1 với patch notes 05/09 và tổng quan 03/09 là lịch sử.
          </p>
        </div>
      </section>
    </article>
  );
}
