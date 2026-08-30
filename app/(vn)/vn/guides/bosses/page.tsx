import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import LiteMp4Embed from "@/components/LiteMp4Embed";
import Link from "next/link";
import { bosses } from "@/lib/bosses.vi";
import { buildLocalizedPath } from "@/i18n/routing.mjs";
import { getContentFreshness } from "@/lib/contentFreshness";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/guides/bosses");

const bossHref = (id: string) => {
  const bossPath = `/guides/bosses/${id}`;
  return buildLocalizedPath(bossPath, "vi") ?? bossPath;
};

const versionBossWatch = [
  {
    label: "Ghost Master",
    status: "Bản sửa lỗi May 29",
    searchIntent: "where winds meet ghost master / skyward bond boss",
    detail:
      "Patch notes May 29 đã sửa lỗi Skyward Bond khiến Ghost Master có thể xuất hiện trong khu chuẩn bị. Các báo cáo lỗi cũ sau mốc này cần được xem lại.",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
  },
  {
    label: "Hero's Realm bosses",
    status: "Điều chỉnh May 27",
    searchIntent: "where winds meet hero's realm boss guide",
    detail:
      "Bản cập nhật trực tiếp May 27 thêm dấu chỉ dẫn boss, cải thiện camera khóa mục tiêu, hỗ trợ chiến đấu thông minh hơn, quy tắc rơi vật phẩm và lời nhắc đòn tấn công lóe sáng của địch cho Hero's Realm.",
    source: "https://www.wherewindsmeetgame.com/news/official/527update.html",
  },
  {
    label: "Sword Trial bosses",
    status: "Điều chỉnh May 27",
    searchIntent: "where winds meet sword trial boss guide",
    detail:
      "Sword Trial cũng nhận dấu chỉ dẫn boss, cải thiện khóa mục tiêu và camera, cùng hỗ trợ chiến đấu tốt hơn. Người chơi quay lại nên thử lại trước khi tin vào nhận xét độ khó cũ.",
    source: "https://www.wherewindsmeetgame.com/news/official/527update.html",
  },
  {
    label: "Sandstorm Tavern",
    status: "Phát hành May 15",
    searchIntent: "where winds meet sandstorm tavern guide",
    detail:
      "Sandstorm Tavern ra mắt trong bản cập nhật May 15, ở thời gian sự kiện từ May 15 đến June 5, và vẫn mở vĩnh viễn sau đó. Đây là một chủ đề guide đáng làm hơn là chỉ để trong mục tin tức.",
    source: "https://www.wherewindsmeetgame.com/news/official/515update.html",
  },
  {
    label: "Sunken City Lake / Lunar Eidolon",
    status: "Bản sửa lỗi May 15",
    searchIntent: "where winds meet sunken city lake boss lunar eidolon",
    detail:
      "Patch May 15 sửa lỗi Lunar Eidolon ở Sunken City Lake đôi khi không chuyển sang giai đoạn cuối. Lời khuyên cũ về lỗi chặn tiến trình này nên được làm mới.",
    source: "https://www.wherewindsmeetgame.com/news/official/515update.html",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Bosses - Ghost Master, Dungeon Boss & Boss List",
  description:
    "Hub boss Where Winds Meet Version 2.1 tiếng Việt: danh sách boss được tuyển chọn, lịch sử patch đã kiểm tra, build và chuẩn bị vũ khí.",
  alternates: buildHreflangAlternates("/guides/bosses", { canonicalLanguage: "vi" }),
};

export default function BossesPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/guides/bosses`,
      dateModified: freshness?.lastChecked ?? "2026-06-03",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/vn` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/vn/guides` },
        { "@type": "ListItem", position: 3, name: "Bosses", item: `${baseUrl}/vn/guides/bosses` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Where Winds Meet bosses",
      itemListOrder: "Unordered",
      numberOfItems: bosses.length,
      itemListElement: bosses.map((boss, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: boss.name,
        url: `${baseUrl}${bossHref(boss.id)}`,
      })),
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="vi" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Phông nền boss Where Winds Meet"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Đánh giá boss và dungeon Version 2.1
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Boss trong Where Winds Meet: Ghost Master, boss dungeon và các trận quan trọng.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Cập nhật {freshness?.lastChecked ?? "2026-08-26"} cho {freshness?.gameVersion ?? "Version 2.1 / August 27"}: trang này kết nối danh sách boss được tuyển chọn với ghi chú patch lịch sử đã kiểm tra và hướng dẫn chuẩn bị vũ khí, build. Trang không tự nhận là danh sách đầy đủ boss Hidden Mountain.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Bắt đầu từ Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern và Sunken City Lake trước khi dùng lời khuyên boss cũ. Kết hợp với{" "}
            <Link href="/vn/guides/weapons" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              guide vũ khí
            </Link>{" "}
            và{" "}
            <Link href="/vn/guides/builds" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
              guide build
            </Link>
            .
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/vn/guides/bosses#faq"
              className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300/70"
            >
              Boss FAQ
            </Link>
            <Link
              href="/vn/guides/patch-notes"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Patch notes mới
            </Link>
            <Link
              href="/guides/tier-list"
              className="rounded-full border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-100 hover:border-emerald-300/60"
            >
              Tier list
            </Link>
          </div>
          <p className="mt-3 text-xs text-slate-400 sm:text-sm">
            Thông tin boss có thể thay đổi nhanh sau patch live-service. Patch notes chính thức và phần xem trước phần thưởng trong game nên được ưu tiên.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 shadow-lg shadow-amber-950/30">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Lịch sử patch đã xác minh</p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Các tìm kiếm về boss và dungeon nên được cập nhật trước.
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Không phải mục nào cũng đã có trang boss riêng. Đây là các ứng viên guide ưu tiên khi có cơ chế, ảnh chụp màn hình và phần thưởng ổn định.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {versionBossWatch.map((item) => (
            <article key={item.label} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-100">
                  {item.status}
                </span>
                <a
                  href={item.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
                >
                  Nguồn chính thức
                </a>
              </div>
              <h3 className="mt-3 text-base font-semibold text-slate-50">{item.label}</h3>
              <p className="mt-1 text-xs text-slate-400">Search intent: {item.searchIntent}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Thư viện boss và chủ đề nhanh.
        </h2>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {bosses.map((boss) => (
            <article
              key={boss.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60 transition hover:border-emerald-400/80 hover:shadow-emerald-500/30"
            >
              {boss.backgroundVideo ? <LiteMp4Embed src={boss.backgroundVideo} title={`${boss.name} clip giới thiệu từ nhà phát hành`} poster="/background/bg4.webp" analytics={{ eventName: "boss_gallery_video_play", params: { boss: boss.id, locale: "vi" } }} /> : <div className="relative aspect-video bg-slate-900"><CdnImage src={boss.titleImage} alt={`Ảnh nhận diện chính thức của ${boss.name}`} fill className="object-contain p-4" /></div>}
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-50">{boss.name}</h3>
                  <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                    {boss.encounterType}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{boss.tagline}</p>
                <p className="text-[11px] text-slate-400">Chủ đề: {boss.theme}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  <Link
                    href={bossHref(boss.id)}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-emerald-300 ring-1 ring-emerald-400/60 hover:bg-emerald-500/10"
                  >
                    Xem trận đấu
                  </Link>
                  <Link
                    href="/vn/guides/builds"
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 hover:ring-emerald-400/60"
                  >
                    Xem build
                  </Link>
                  {boss.backgroundVideo ? <a href={boss.backgroundVideo} target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-200 ring-1 ring-slate-700/70 hover:ring-emerald-400/60">Mở nguồn CDN của nhà phát hành</a> : <span className="rounded-full bg-slate-900/80 px-3 py-1 text-slate-400 ring-1 ring-slate-700/70">Chưa đăng clip có quyền sử dụng rõ ràng</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="faq"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-900/50"
      >
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Hỏi đáp nhanh về boss.
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-slate-200">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">Nên bắt đầu với boss nào?</p>
            <p className="mt-1 text-slate-300">
              Bắt đầu với boss cốt truyện ở khu vực hiện tại. Sau đó thử Hero&apos;s Realm, Sword Trial và Bloodbath khi bạn đã có cặp vũ khí ổn định.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="font-semibold text-slate-50">Cần theo dõi boss nào sau bản cập nhật?</p>
            <p className="mt-1 text-slate-300">
              Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern và Sunken City Lake là các tìm kiếm boss, dungeon đang được ưu tiên.
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
