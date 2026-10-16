import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import { getContentFreshness } from "@/lib/contentFreshness";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";
const freshness = getContentFreshness("/guides/patch-notes");

const latestUpdateCards = [
  {
    title: "Patch notes Version 2.3 ngày 16/10",
    date: "2026-10-16",
    source: "https://www.wherewindsmeetgame.com/news/official/1016patchnotes.html",
    summary:
      "25 bản sửa lỗi chính thức, gồm số Echo Bead trên PlayStation, danh hiệu Season 4 Forge Ahead, chấm điểm Graceful Melody, độ hiếm Aureate Dominion, câu hỏi thi nhập môn Inkbound Order, hàng chờ nấu ăn Homestead và nút L3 của tay cầm.",
    playerAction:
      "Infernal Twinblades: giai đoạn hai của Greed Bane – Soul tung chiêu nhanh hơn nhiều và kích hoạt Perfect Dodge trong dungeon Online Mode.",
  },
  {
    title: "Patch notes Version 2.3 ngày 15/10",
    date: "2026-10-15",
    source: "https://www.wherewindsmeetgame.com/news/official/FriendsFromAfarPatchNotes.html",
    summary:
      "Các cải tiến của 2.3: Transdust Ruins Solo và Trio mở cả ngày, phát hiện AFK, Ready Check và yêu cầu vai trò tank trong Hero's Realm và Sword Trial, cọc gỗ nhiều người, nâng cấp avatar và nhuộm, điều chỉnh Guild War, Kho đồ và túi thú cưỡi.",
    playerAction:
      "Kho đồ mở từ Lv. 20 (tối đa 3 tab, mỗi tab 30 ô).",
  },
  {
    title: "Trang phục mới Version 2.3 ngày 15 & 18/10",
    date: "2026-10-15",
    source: "https://www.wherewindsmeetgame.com/news/official/1015appearance.html",
    summary:
      "Aureate Dominion (quay Fading Glory, đến 09/11), kiểu tóc Blazing Sands (đến 13/01/2027), Veil of Lotus (đến 28/12), Scarlet Whispers của Battle Pass (đến 14/11), thú cưỡi Eastwind Soarer (chỉ ở Qingzhou, đến 13/12) và bộ Path of Youth từ 18/10.",
    playerAction:
      "Kiểm tra ngày kết thúc trước khi chi tiêu.",
  },
  {
    title: "Tổng quan bản cập nhật Version 2.3 [Friends from Afar] ngày 15/10",
    date: "2026-10-15",
    source: "https://store.steampowered.com/news/app/3564740/view/1846651706675921",
    summary:
      "Phiên bản hiện tại. Cập nhật trực tiếp ngày 15/10 từ 5:00 đến 12:00 (UTC+8): vùng mới Qingzhou – Eastern Peak, vũ khí Waist Drum và lưu phái Silkbind – Wings, môn phái Inkbound Order, ba world boss, Gift of Gab: War of Words, trang bị Tier 100 và mùa S5: Ever Aflame.",
    playerAction:
      "Đạt Lv. 32 và hoàn thành chương chính Qinghe Heaven Has No Pier để nhận Lost Chapter Away to Qingzhou.",
  },
  {
    title: "Patch notes Version 2.2 ngày 16/09",
    date: "2026-09-16",
    source: "https://store.steampowered.com/news/app/3564740/view/1843481262704696",
    summary:
      "Bảo trì cuốn chiếu ngày 16/09 từ 5:00 đến 10:00 (UTC+8): danh sách Bang hội có thể chỉnh sửa và ghim thành viên, thống kê Guild War theo mùa, theo dõi boss talent cho cả hai boss, danh hiệu vinh dự, danh sách chặn Guild Base và hai bản sửa lỗi.",
    playerAction:
      "Lối vào Reflection Temple tạm đóng và sẽ mở lại khi Jiangnan ra mắt; tiến độ được giữ nguyên. Với Nameless Sword, chỉ phần mô tả Sword Energy được sửa.",
  },
  {
    title: "Tổng quan bản cập nhật Version 2.2 [Perilous Eminence] ngày 16/09",
    date: "2026-09-16",
    source: "https://store.steampowered.com/news/app/3564740/view/1843481262704691",
    summary:
      "Phiên bản nội dung trước: chương chính Hidden Mountain Bringer of Embers (A Bitter Winter và Sea of Sunfire), chiến dịch Skyward City Ruins, world boss Golden Colossus Taicu và Goshawk, cùng chế độ extraction Transdust Ruins từ 23/09.",
    playerAction:
      "Hoàn thành chương chính Hidden Mountain IV: Gold Crow Fall để mở các chương mới; Transdust Ruins yêu cầu Lv. 20 và nhiệm vụ khám phá Sands of Perils.",
  },
  {
    title: "Tổng quan bản cập nhật Clouded Revelation Version 2.1 ngày 27/08",
    date: "2026-08-26",
    source: "https://www.wherewindsmeetgame.com/news/official/827update.html",
    summary:
      "Tổng quan cập nhật chính thức mới nhất đã được kiểm tra. Trang chính thức ghi thời điểm phát hành là ngày 27/08 và được đăng ngày 26/08.",
    playerAction:
      "Dùng tổng quan này làm mốc phát hành hiện tại, sau đó dùng patch notes ngày 20/08 cho danh sách bản sửa lỗi đã được xác nhận.",
  },
  {
    title: "Patch notes Clouded Revelation Version 2.1 ngày 20/08",
    date: "2026-08-20",
    source: "https://www.wherewindsmeetgame.com/news/official/CloudedRevelationPatchNotes.html",
    summary:
      "Đây là mốc patch notes Version 2.1 mới nhất đã được kiểm tra. Các thẻ cũ hơn bên dưới được giữ lại như lịch sử patch có ngày.",
    playerAction:
      "Thử lại các quest bị ảnh hưởng, Arena, Vernal Umbrella, Homestead và các bản sửa lỗi hình ảnh trước khi dùng giải pháp tạm thời cũ.",
  },
  {
    title: "Lịch sử: July 17 Version 1.8 optimizations and bug fixes",
    date: "2026-07-17",
    source: "https://www.wherewindsmeetgame.com/news/official/625update.html",
    summary:
      "Lịch sử patch Version 1.8 có các mốc July 17, July 9, July 2 và June 25 trên cùng một trang chính thức.",
    playerAction:
      "Kiểm tra Arena, Taiping Mausoleum, Sleeping Daoist, Homestead và Skyward Bond trước khi dùng hướng dẫn cũ.",
  },
  {
    title: "Version 1.8 / Companions Make Home overview",
    date: "2026-06-24",
    source: "https://www.wherewindsmeetgame.com/news/official/CompanionsMakeHome.html",
    summary:
      "Tổng quan Version 1.8 Companions Make Home mang tính lịch sử, được đăng trước Version 2.0 và Version 2.1.",
    playerAction:
      "Dùng cho lịch sử Homestead và companion; các truy vấn về bản cập nhật hiện tại bắt đầu từ Version 2.1.",
  },
  {
    title: "Version 1.8 Dev Q&A: A Place to Call Home",
    date: "2026-06-23",
    source: "https://www.wherewindsmeetgame.com/news/official/623faq.html",
    summary:
      "Dev Q&A chính thức về A Place to Call Home, bản cập nhật Homestead và các câu hỏi về hệ thống companion.",
    playerAction:
      "Dùng Q&A làm bối cảnh cho câu hỏi về Homestead, companion và những điều cần theo dõi sau bản cập nhật.",
  },
  {
    title: "June 5 Version 1.7 fixes",
    date: "2026-06-05",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
    summary:
      "Bản sửa lỗi lịch sử của Version 1.7: máy chủ tại Oceania, Middle East và South America đã mở đầy đủ; lỗi nhập liệu bằng tay cầm trong Papercutting, văn bản quest tại Imperial Palace, tải trên mobile, Palace Oddities, NPC Hexi Familiar Faces, hiển thị Jade Fish, văn bản UI Skyward Bond, hình ảnh tuyết trên bản đồ Palace của PS5, quyền truy cập Skill Theft và Grand Nuo Ritual đã được sửa.",
    playerAction:
      "Thử lại việc khám phá Palace, các quest Imperial Palace, kết bạn với NPC Hexi, tải trên mobile, Papercutting, lộ trình Skill Theft, bản đồ PS5 và phần thưởng sự kiện trước khi tin vào báo cáo lỗi cũ.",
  },
  {
    title: "May 29 Version 1.7 historical fixes",
    date: "2026-05-29",
    source: "https://www.wherewindsmeetgame.com/news/official/529update.html",
    summary:
      "Cùng trang chính thức còn lưu các bản sửa lỗi May 29: phần thưởng Soaring Record, Ghost Master trong Skyward Bond, bản đồ Palace trên mobile, Guild Hero's Realm, UI Guild, mô hình Kaifeng, chọn cửa hàng bằng tay cầm, bản dịch Jadeware và phần thưởng Palace Unveiled.",
    playerAction:
      "Dùng May 29 làm mốc lịch sử cho lỗi khi Palace mới ra mắt và bắt đầu kiểm tra hiện tại từ Version 2.1.",
  },
  {
    title: "May 27 / May 28 live maintenance",
    date: "2026-05-28",
    source: "https://www.wherewindsmeetgame.com/news/official/527update.html",
    summary:
      "Bản cập nhật trực tiếp lớn dành cho Path Tutorial, Martial Art Reset, chi phí Inner Way Conversion, Arena, Hero's Realm, Sword Trial, Guild War, tính năng xem lại trên World Map và công cụ xã hội.",
    playerAction:
      "Kiểm tra lại build, chi phí reset, camera boss, Hero's Realm, Sword Trial và kế hoạch Arena sau patch này.",
  },
  {
    title: "Version 1.7 / The Imperial Palace",
    date: "2026-05-27",
    source: "https://www.wherewindsmeetgame.com/news/official/TheImperialPalace.html",
    summary:
      "Tổng quan chính thức mang tính lịch sử của Version 1.7 dành cho sự kiện Palace, roadmap cũ và người chơi quay lại.",
    playerAction:
      "Chỉ dùng Version 1.7 làm mốc Palace có ngày; patch notes, boss và build hiện tại bắt đầu từ Version 2.1.",
  },
  {
    title: "Sandstorm Tavern và các bản sửa lỗi boss cũ",
    date: "2026-05-15",
    source: "https://www.wherewindsmeetgame.com/news/official/515update.html",
    summary:
      "Sandstorm Tavern ra mắt trong thời gian sự kiện từ May 15 đến June 5 và vẫn mở vĩnh viễn sau đó. Cùng patch này đã sửa lỗi Lunar Eidolon ở Sunken City Lake không chuyển sang giai đoạn cuối.",
    playerAction:
      "Xem Sandstorm Tavern là mục guide cần làm và làm mới lời khuyên cũ về Sunken City Lake.",
  },
];

const impactChecklist = [
  "Patch notes today / new update: bắt đầu với tổng quan 27/08, sau đó dùng patch notes 20/08 cho danh sách bản sửa lỗi đã được xác nhận.",
  "Tìm kiếm boss và dungeon: nhắc đến Ghost Master, Hero's Realm, Sword Trial, Sandstorm Tavern, Sunken City Lake và Lunar Eidolon khi có liên quan.",
  "Tìm kiếm build: nhắc chi phí Martial Art Reset và Inner Way Conversion thấp hơn trước khi khuyên respec.",
  "Tìm kiếm tier list: nối khuyến nghị về vũ khí và Path với Path Balance ngày May 26 và đợt bảo trì May 27.",
  "Tìm kiếm trên mobile và tay cầm: tải bản đồ Palace và chọn Season Shop bằng tay cầm là các bản sửa lỗi chính thức ngày May 29.",
];

const upcomingNerfWatch = [
  {
    topic: "Path Balance",
    status: "Mốc chính thức",
    action:
      "Dùng thông báo Path Balance May 26 làm điểm bắt đầu trước khi gọi một build hay vũ khí là bị nerf.",
    href: "/guides/tier-list#arena-ranks",
  },
  {
    topic: "Arena và PVP ranks",
    status: "Ý định tìm kiếm cao",
    action:
      "Khi người chơi hỏi về upcoming nerfs, đưa họ tới arena ranks, PVP tier list và weapon tier list để so sánh tác động đến meta.",
    href: "/guides/pvp-tier-list",
  },
  {
    topic: "Build reset costs",
    status: "Đã chịu tác động của bảo trì",
    action:
      "Martial Art Reset rẻ hơn và Inner Way Conversion thấp hơn giúp người chơi quay lại thử build sau patch dễ hơn.",
    href: "/vn/guides/builds",
  },
  {
    topic: "Các bản sửa lỗi trải nghiệm boss và dungeon",
    status: "Đừng nhầm với nerf",
    action:
      "Các bản sửa lỗi Hero's Realm, Sword Trial, Ghost Master và Palace có thể thay đổi lời khuyên trong guide, dù không phải nerf vũ khí.",
    href: "/vn/guides/bosses",
  },
];

export const metadata: Metadata = {
  title: "Where Winds Meet Patch Notes Hôm Nay - Version 2.3 Friends from Afar",
  description:
    "Patch notes Where Winds Meet tiếng Việt cho Version 2.3 (15/10) và Version 2.2 (16/09), kèm lịch sử cập nhật có ngày từ Version 2.1.",
  alternates: buildHreflangAlternates("/guides/patch-notes", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Where Winds Meet Patch Notes Hôm Nay - Version 2.3 Friends from Afar",
    description:
      "Patch notes Version 2.3 và Version 2.2, kèm lịch sử cập nhật có ngày từ Version 2.1.",
    url: `${baseUrl}/vn/guides/patch-notes`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Where Winds Meet Patch Notes Hôm Nay - Version 2.3 Friends from Afar",
    description:
      "Patch notes Version 2.3 và Version 2.2, kèm lịch sử cập nhật có ngày từ Version 2.1.",
  },
};

export default function PatchNotesViPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/guides/patch-notes`,
      dateModified: freshness?.lastChecked ?? "2026-06-03",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/vn` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}/vn/guides` },
        { "@type": "ListItem", position: 3, name: "Patch Notes", item: `${baseUrl}/vn/guides/patch-notes` },
      ],
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
            src="/background/bg1.webp"
            alt="Phông nền patch notes Where Winds Meet"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet patch notes hôm nay: Version 2.3, Version 2.2 và lịch sử cập nhật có ngày.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Cập nhật {freshness?.lastChecked ?? "2026-10-17"}: mốc đã được kiểm tra là {freshness?.gameVersion ?? "Version 2.3 / 15/10"}. Chuỗi cập nhật hiện tại bắt đầu với tổng quan chính thức Version 2.3 ngày 15/10, tiếp theo là patch notes và tổng quan Version 2.2 ngày 16/09. Version 2.1 (tổng quan 27/08, mốc 2026-08-26, patch notes 20/08), Version 2.0, Version 1.8 và Palace được giữ lại như lịch sử có ngày.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Trang này đánh dấu các điểm cần kiểm tra lại: codes, lỗi quest, Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, boss guides, builds và tier list.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 shadow-lg shadow-amber-950/30">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-200">Danh sách cập nhật chính thức mới</p>
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Patch notes mới nhất thay đổi điều gì?
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Nếu bạn tìm Where Winds Meet patch notes hôm nay, hãy bắt đầu từ đây. Các điểm này nên được dùng để cập nhật guide và liên kết nội bộ.
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {latestUpdateCards.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-amber-400/15 px-2.5 py-1 text-[11px] font-semibold text-amber-100">
                  {item.date}
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
              <h3 className="mt-3 text-base font-semibold text-slate-50">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.summary}</p>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                <span className="font-semibold text-slate-200">Cần làm:</span> {item.playerAction}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="version-2-3" className="space-y-4 rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">Phiên bản hiện tại – 15/10/2026</p>
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Tóm tắt Version 2.3 [Friends from Afar]</h2>
        <p className="text-sm leading-relaxed text-slate-200">Cập nhật trực tiếp ngày 15/10/2026, 5:00–12:00 (UTC+8). Xem toàn bộ chi tiết trong <a href="https://store.steampowered.com/news/app/3564740/view/1846651706675921" target="_blank" rel="noreferrer" className="underline underline-offset-4">thông báo chính thức trên Steam</a> (tiếng Anh).</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200">
          <li>Vùng mới Qingzhou – Eastern Peak: từ Lv. 32, sau chương chính Qinghe [Heaven Has No Pier], qua Lost Chapter [Away to Qingzhou].</li>
          <li>Jianghu Legacy mới [Riddled Echoes] và [Sea Shepherd]; world boss Tidewatcher, Old Raftsman và Shuttlecock Champion.</li>
          <li>Vũ khí mới Waist Drum và lưu phái mới [Silkbind – Wings] với [Museflow Waist Drum] và quạt [Willowbend Fan]; thêm 4 lượt chuyển đổi Inner Way và 8 lượt chuyển đổi bộ trang bị miễn phí cho đến khi mùa mới bắt đầu.</li>
          <li>Môn phái mới Inkbound Order (gia nhập qua kỳ thi Primary Exam); Gift of Gab: War of Words tại Qingzhou.</li>
          <li>Trang bị Tier 100, Gear Enhance Lv. 66–70, Solo Mode Level Lv. 18; giới hạn cấp vẫn là Lv. 100. Nội dung Lv. 100 mới: Sword Trial [Compass &amp; Chime] và Hero&apos;s Realm [Liminal Ascension].</li>
          <li>Mùa S5: Ever Aflame (Đấu trường và Taiping Mausoleum): 15/10/2026 05:00 – 26/11/2026 04:59:59.</li>
        </ul>
        <h3 id="version-2-3-patch-notes" className="pt-2 text-base font-semibold text-slate-100">Patch notes ngày 15/10 và 16/10</h3>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200">
          <li><strong>15/10 (<a href="https://www.wherewindsmeetgame.com/news/official/FriendsFromAfarPatchNotes.html" target="_blank" rel="noreferrer" className="underline underline-offset-4">chính thức</a>):</strong> Transdust Ruins Solo và Trio mở cả ngày; Hero&apos;s Realm và Sword Trial có phát hiện AFK (đội ghép trận), Ready Check, yêu cầu vai trò tank và cài đặt độ trong suốt hiệu ứng; cọc gỗ nhiều người với thống kê sát thương đội; Kho đồ (từ Lv. 20, tối đa 3 tab, mỗi tab 30 ô) và túi thú cưỡi; Modular Download trên launcher PC; điều chỉnh Guild War; cải tiến Gallery, Photo Mode, avatar và nhuộm; tùy chọn đồ họa mới trên di động.</li>
          <li><strong>16/10 (<a href="https://www.wherewindsmeetgame.com/news/official/1016patchnotes.html" target="_blank" rel="noreferrer" className="underline underline-offset-4">chính thức</a>):</strong> 25 bản sửa lỗi, gồm số Echo Bead trên PlayStation, danh hiệu Season 4, Graceful Melody, thời hạn Relaying Stone: Mirage (Tier 96), độ hiếm Aureate Dominion, câu hỏi thi Inkbound Order, nấu ăn Homestead, Serene Breeze trong Đấu trường, Greed Bane – Soul của Infernal Twinblades nhanh hơn, Super Armor của Talon Strike và Yaksha Rush ngắn lại, công thức Frost Paper và nút L3.</li>
          <li><strong>Trang phục mới (<a href="https://www.wherewindsmeetgame.com/news/official/1015appearance.html" target="_blank" rel="noreferrer" className="underline underline-offset-4">chính thức</a>):</strong> Aureate Dominion qua Fading Glory (đến 09/11), Blazing Sands (đến 13/01/2027), Veil of Lotus (đến 28/12), Scarlet Whispers (Battle Pass, đến 14/11), Eastwind Soarer (Qingzhou, đến 13/12) và Path of Youth từ 18/10 (giảm giá đến 01/11).</li>
        </ul>
      </section>

      <section id="version-2-2" className="space-y-4 rounded-3xl border border-sky-400/30 bg-sky-500/10 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-200">Phiên bản trước – 16/09/2026</p>
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">Version 2.2 [Perilous Eminence] và patch notes ngày 16/09</h2>
        <p className="text-sm leading-relaxed text-slate-200">Bảo trì cuốn chiếu ngày 16/09/2026, 5:00–10:00 (UTC+8). Nguồn: <a href="https://store.steampowered.com/news/app/3564740/view/1843481262704696" target="_blank" rel="noreferrer" className="underline underline-offset-4">patch notes chính thức</a> và <a href="https://store.steampowered.com/news/app/3564740/view/1843481262704691" target="_blank" rel="noreferrer" className="underline underline-offset-4">tổng quan chính thức</a>.</p>
        <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200">
          <li>Trang danh sách Bang hội có thể chỉnh sửa: ban quản lý có thể ghim thành viên lên đầu; các thành viên khác được sắp xếp theo mức hoạt động tuần trước.</li>
          <li>Guild War có thống kê cá nhân và bang hội theo mùa (từ mùa mới trở đi).</li>
          <li>Theo dõi boss talent ghi nhận phần thưởng cho cả hai boss sau khi hoàn thành Guild Hero&apos;s Realm.</li>
          <li>Danh hiệu vinh dự cho người chơi nổi bật trong sự kiện Bang hội; danh sách chặn cho Guild Base (từng người chơi hoặc cả bang hội).</li>
          <li>Lối vào Reflection Temple tạm đóng và sẽ mở lại khi Jiangnan ra mắt; toàn bộ tiến độ được giữ nguyên.</li>
          <li>Sửa lỗi trang phục [Hidden Scent] hiển thị sai trong một số hoạt ảnh kết quả.</li>
          <li>[Nameless Sword]: sửa mô tả – mỗi tầng Sword Energy tăng 10% Damage Boost lên đơn vị không phải người chơi, không cần trạng thái Exhausted. Chỉ là lỗi mô tả; hiệu ứng vốn đã hoạt động đúng.</li>
          <li>Tổng quan: chương chính Hidden Mountain [Bringer of Embers] với A Bitter Winter và Sea of Sunfire, chiến dịch Skyward City Ruins, world boss Golden Colossus Taicu và Goshawk, chế độ extraction Transdust Ruins từ 23/09/2026 06:00.</li>
        </ul>
      </section>

      <section id="upcoming-nerfs" className="space-y-5 rounded-3xl border border-red-400/30 bg-red-500/10 p-6 shadow-lg shadow-red-950/30">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-red-200">Search intent: upcoming nerf wwm</p>
          <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Upcoming nerfs và theo dõi cân bằng.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-200 sm:text-base">
            Người chơi tìm upcoming nerfs thường muốn biết có nên tạm dừng nâng cấp, reset build hay đổi vũ khí trước lần đẩy Arena tiếp theo.
            Hãy dùng patch notes chính thức làm nguồn chuẩn, rồi mở các guide dưới đây để kiểm tra tác động.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {upcomingNerfWatch.map((item) => (
            <Link
              key={item.topic}
              href={item.href}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4 transition hover:border-red-300/60"
            >
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm font-semibold text-slate-50">{item.topic}</p>
                <span className="rounded-full border border-red-300/40 bg-red-500/10 px-2 py-0.5 text-[11px] font-semibold text-red-100">
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-300">{item.action}</p>
            </Link>
          ))}
        </div>
        <p className="text-xs leading-5 text-red-100/80">
          Ghi chú: danh sách của creator và bài đăng mạng xã hội có thể là cảnh báo sớm, nhưng chỉ nên gọi một thay đổi là nerf đã xác nhận khi nó xuất hiện trong patch notes chính thức hoặc thông báo bảo trì trong game.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg shadow-emerald-950/40">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Lịch sử Version 1.7 cho người chơi quay lại: nên kiểm tra gì?
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Version 1.7 ở đây chỉ là mốc Palace có ngày. Hãy bắt đầu từ Version 2.1, sau đó kiểm tra lại sự kiện Palace, Skyward Bond, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, chi phí build và khuyến nghị tier list.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <Link
            href="/vn/guides/bosses"
            className="rounded-2xl border border-emerald-400/40 bg-slate-950/60 p-4 transition hover:border-emerald-300/70"
          >
            <p className="text-sm font-semibold text-slate-50">Hàng đợi guide về boss và dungeon</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              Ghost Master, Hero&apos;s Realm, Sword Trial, Sandstorm Tavern, Sunken City Lake và các trang cần ghi chú theo patch.
            </p>
          </Link>
          <Link
            href="/vn/guides/builds"
            className="rounded-2xl border border-emerald-400/40 bg-slate-950/60 p-4 transition hover:border-emerald-300/70"
          >
            <p className="text-sm font-semibold text-slate-50">Reset build và kiểm tra meta</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              Các thay đổi reset và conversion trong lịch sử giúp giải thích build Version 1.7 cũ; khuyến nghị hiện tại cần được kiểm tra lại theo Version 2.1.
            </p>
          </Link>
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Checklist SEO cho guide từ Version 1.7 đến Version 2.1.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Trang cập nhật tốt không chỉ nói rằng nội dung mới. Trang còn phải trả lời đúng các truy vấn người chơi tìm ngay sau patch.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
          {impactChecklist.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
