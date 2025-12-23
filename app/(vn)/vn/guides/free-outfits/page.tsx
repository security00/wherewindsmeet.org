import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Trang phục miễn phí Where Winds Meet",
  description:
    "Trang phục/set/ngoại hình (cosmetics)/kiểu tóc miễn phí trong Where Winds Meet từ sự kiện, nhiệm vụ, code, shop và thưởng xã giao—ưu tiên các lựa chọn 0-cost để tiết kiệm tiền tệ.",
  alternates: buildHreflangAlternates("/guides/free-outfits", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Trang phục miễn phí Where Winds Meet",
    description:
      "Trang phục/set/ngoại hình (cosmetics)/kiểu tóc miễn phí từ sự kiện, nhiệm vụ, code, shop và xã giao—ưu tiên 0-cost để tiết kiệm tiền tệ.",
    url: `${baseUrl}/vn/guides/free-outfits`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Trang phục miễn phí Where Winds Meet",
    description:
      "Trang phục/set/ngoại hình (cosmetics)/kiểu tóc miễn phí từ sự kiện, nhiệm vụ, code, shop và xã giao—ưu tiên 0-cost để tiết kiệm tiền tệ.",
  },
};

const highlightCards = [
  {
    title: "Sự kiện & lễ hội",
    points: [
      "Chuỗi đăng nhập/nhiệm vụ lễ hội thường tặng trọn set hoặc phụ kiện miễn phí; nhận trước khi sự kiện kết thúc.",
      "Tiền sự kiện thường có bậc 0-cost—lấy miễn phí trước rồi cân nhắc mua thêm.",
      "Mốc ngày/tuần có thể rơi thuốc nhuộm hoặc box phụ kiện; hoàn thành checklist trước reset.",
    ],
    image: "/free-outfits/all-free-outfits.webp",
  },
  {
    title: "Nhiệm vụ & thành tựu",
    points: [
      "Nhiệm vụ chính/phụ lần đầu có thể thưởng mảnh trang phục hoặc voucher kiểu tóc—đừng bỏ qua chuỗi hội thoại.",
      "Thành tựu Khám phá/Chiến đấu/Xã giao ẩn nhiều thưởng cosmetic; nhớ nhận định kỳ.",
      "NPC thị trấn, bảng rượu, trưởng lão môn phái có thể mở chuỗi ẩn kết thúc bằng cosmetics miễn phí.",
    ],
    image: "/free-outfits/free-outfits-grid.webp",
  },
  {
    title: "Code & ô shop 0-cost",
    points: [
      "Code đang hoạt động thường có voucher cosmetics—nhập sớm tránh hết hạn.",
      "Cửa hàng sự kiện đôi khi có ô 0 tiền “dùng thử”; nhận trước rồi hãy mua.",
      "Lưu ý bậc 0→discount: lấy miễn phí xong mới cân nhắc bậc trả phí.",
    ],
    image: "/free-outfits/free-sets.webp",
  },
  {
    title: "Hệ thống xã hội & tổ đội",
    points: [
      "Cống hiến bang, mốc thiện cảm và điểm xã giao đổi được phụ kiện/emote—đừng để tràn điểm.",
      "Nhiệm vụ tổ đội (co-op) hằng ngày và lần đầu vượt nội dung tổ đội có thể rơi rương ngoại hình hoặc thuốc nhuộm.",
      "Cuộc thi ảnh/UGC thường thưởng cosmetic theo chủ đề; xem thông báo chính thức dịp lễ.",
    ],
    image: "/free-outfits/free-hairstyles.webp",
  },
];

const checklist = [
  "Hàng ngày: nhận đăng nhập, làm nhiệm vụ ngày của sự kiện, kiểm tra ô shop 0-cost trước khi chi tiền.",
  "Hàng tuần: làm nhiệm vụ bang/tổ đội (co-op), đạt trần tiền sự kiện, đổi rương ngoại hình ngẫu nhiên.",
  "Liên tục: nhận thành tựu còn sót ở Khám phá/Chiến đấu/Xã giao để gom ngoại hình ẩn.",
  "Mùa/lễ: chuẩn bị nhiệm vụ yêu cầu trước lễ hội để không lỡ đổi trang phục giới hạn.",
  "Code: nhập code (xem trang Codes) sớm tránh hết hạn và cộng dồn với sự kiện.",
];

const freeSets = [
  { name: "Master Deceiver", source: "Phần thưởng qua thư khi đăng ký trước Open Beta." },
  { name: "Mountain Pine", source: "Phần thưởng tham gia beta test." },
  { name: "Swaying Lotus", source: "Thư thưởng mốc đăng ký trước (pre-registration milestone)." },
  { name: "First Step", source: "Hoàn thành “Another New Wing” tại Heaven Has No Pier." },
  {
    name: "Elegy of Petals",
    source: "Banner thường trực Solemn Echo (có thể farm lượt quay bằng Echo Jade).",
  },
  { name: "Return of Spring", source: "Banner thường trực Solemn Echo." },
  { name: "Crimson Curtain", source: "Banner thường trực Solemn Echo." },
  { name: "Blazing Passes", source: "Banner thường trực Solemn Echo." },
  { name: "Peaceful Life", source: "Hoàn thành 7 chương của A Warrior's Journey." },
  { name: "Humble Hero", source: "Đạt cấp 61 trong sự kiện Path of the Strong." },
  { name: "Blazing Midnight", source: "Gia nhập môn phái Midnight Blades, mua trong shop môn phái." },
  { name: "Heavenly Frost", source: "Gia nhập môn phái Well of Heaven, mua trong shop môn phái." },
  { name: "Silent Current", source: "Gia nhập môn phái Silver Needle, mua trong shop môn phái." },
  { name: "Ninefold Freedom", source: "Gia nhập môn phái Nine Mortal Ways, mua trong shop môn phái." },
  { name: "Enlightened Mind", source: "Season Shop (giá: 520 Cosmetic Chests)." },
  {
    name: "Chasing Red",
    source: "Chiến dịch Still Shore: 520 Cosmetic Chests hoặc ngẫu nhiên từ rương chiến dịch.",
  },
  { name: "Bounty Hunter", source: "Mua tại Bounty Shop." },
  { name: "Sound of Valor", source: "Đạt cấp Khám phá 5 tại Qinghe." },
  { name: "Opulent Grace", source: "Đạt cấp Khám phá 5 tại Kaifeng." },
  { name: "Penstroke Posy", source: "Thăng tiến trong nghề Scholar." },
  { name: "Art of Healing", source: "Thăng tiến trong nghề Healer." },
  {
    name: "Gray Wolf",
    source: "Mua bằng Adventure Slip (Social Shop: Wandering Paths).",
  },
  {
    name: "Purple Dew",
    source: "Mua bằng Adventure Slip (Social Shop: Wandering Paths).",
  },
  {
    name: "Loyal Heart",
    source: "Mua bằng Harmony Charm (Social Shop: Partnership).",
  },
  {
    name: "Twin Swallows",
    source: "Mua bằng Harmony Charm (Social Shop: Discipleship).",
  },
  {
    name: "Still Moonlight",
    source: "Mua bằng Harmony Charm (Social Shop: Sworn Cohort).",
  },
  { name: "Flawed Harmony", source: "Đạt cấp Partnership 3." },
  {
    name: "Yaksha",
    source: "Nhặt Sin Leaf ở Perception Forest, đổi tại Sin Leaf Exchange.",
  },
  { name: "Orchid Dew", source: "Red Gold Boutique (xem hướng dẫn cửa hàng)." },
  {
    name: "Alms Pilgrim",
    source: "Gặp sự kiện “Hero & Beauty” gần Bloomveil Monastery Outpost (Qinghe).",
  },
  {
    name: "Forgotten",
    source: "Hoàn thành Lifetime Lockup + Behind Bard Blues (án tù khoảng 200 giờ).",
  },
];

const freeOutfits = [
  { name: "Novice Wanderer", source: "Trang phục khởi đầu." },
  {
    name: "Taming Storms",
    source: "Hoàn thành “A Horse Neighs in the Forest” (chương Heaven Has No Pier).",
  },
  {
    name: "Jianghu: Wanderer",
    source: "Banner thường trực Solemn Echo (có thể farm lượt quay bằng Echo Jade).",
  },
  { name: "Blue Clouds", source: "Season Shop (giá: 360 Cosmetic Chests)." },
  { name: "Autumn Orchid", source: "Season Shop (giá: 360 Cosmetic Chests)." },
  { name: "Bathrobe: Golden Threads", source: "Hoàn thành thành tựu “Golden Guest”." },
];

const freeHairstyles = [
  {
    name: "Kiểu tóc mặc định (1–12)",
    source:
      "Chải tóc bằng gương đồng ở Blissful Retreat 2 lần mỗi ngày cho đến khi mở đủ các kiểu tóc mặc định.",
  },
  { name: "Unbound: Hair", source: "Banner thường trực Solemn Echo." },
  {
    name: "Mẹo chải tóc hằng ngày",
    source:
      "Ghé ngôi nhà phía nam waypoint Blissful Retreat; tương tác 2 lần mỗi ngày để nhận lại các kiểu tóc mặc định còn thiếu.",
  },
];

export default function FreeOutfitsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/guides/free-outfits`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: `${baseUrl}/vn`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Hướng dẫn",
          item: `${baseUrl}/vn/guides`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Trang phục miễn phí",
          item: `${baseUrl}/vn/guides/free-outfits`,
        },
      ],
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg5.webp"
            alt="Nền trang phục miễn phí Where Winds Meet"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Trang phục, cosmetics, kiểu tóc miễn phí.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Hub gọn cho trang phục/phụ kiện/kiểu tóc/thuốc nhuộm miễn phí hoặc giá thấp—ưu tiên sự kiện, code, nhiệm vụ, thành tựu và thưởng xã hội để không tốn tiền tệ cao cấp.
          </p>
          <p className="text-xs text-slate-400">
            Lưu ý: phần thưởng thay đổi theo patch. Luôn nhận bậc 0-cost trước rồi mới cân nhắc bậc trả phí.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-emerald-200">
            <Link
              href="/vn/guides/codes"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
            >
              Xem code mới nhất
            </Link>
            <Link
              href="/vn/guides/cosmetics"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 hover:border-emerald-400 hover:text-emerald-100"
            >
              Thư viện cosmetics
            </Link>
            <Link
              href="#free-sets"
              className="rounded-full border border-blue-500/40 bg-blue-500/10 px-3 py-1 text-blue-200 hover:border-blue-400 hover:text-blue-50"
            >
              Tới danh sách set
            </Link>
          </div>
          <div className="grid gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4 text-sm text-slate-200 sm:grid-cols-2">
            <p className="text-sm text-slate-100">
              Dưới đây là set, outfit lẻ và kiểu tóc miễn phí—sắp xếp theo độ nhanh/quan trọng.
            </p>
          </div>
        </div>
      </section>

      <section
        id="free-sets"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Set miễn phí và cách lấy
          </h2>
          <span className="text-xs text-slate-400">
            Nguồn vĩnh viễn + giới hạn; ưu tiên bậc free/gacha Echo Jade khi có.
          </span>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <h3 className="sr-only">Danh sách set miễn phí</h3>
          {freeSets.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/50"
            >
              <p className="text-sm font-semibold text-slate-50">{item.name}</p>
              <p className="mt-1 text-sm text-slate-300">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="free-outfits"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60"
      >
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Outfit lẻ miễn phí và vị trí
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          <h3 className="sr-only">Danh sách outfit</h3>
          {freeOutfits.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/50"
            >
              <p className="text-sm font-semibold text-slate-50">{item.name}</p>
              <p className="mt-1 text-sm text-slate-300">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="free-hairstyles"
        className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60"
      >
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Kiểu tóc miễn phí và cách nhận
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          <h3 className="sr-only">Danh sách kiểu tóc</h3>
          {freeHairstyles.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/50"
            >
              <p className="text-sm font-semibold text-slate-50">{item.name}</p>
              <p className="mt-1 text-sm text-slate-300">{item.source}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {highlightCards.map((card) => (
          <article
            key={card.title}
            className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-5 shadow-sm shadow-slate-950/60"
          >
            <div className="pointer-events-none absolute inset-0">
              <CdnImage
                src={card.image}
                alt={card.title}
                fill
                className="object-cover opacity-15"
              />
              <div className="absolute inset-0 bg-slate-950/80" />
            </div>
            <div className="relative space-y-3">
              <h2 className="text-lg font-semibold text-slate-50">{card.title}</h2>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
                {card.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Ví dụ trang phục miễn phí (drop sự kiện gần đây)
          </h2>
          <span className="text-xs text-slate-400">
            Ảnh lấy từ highlight cộng đồng; thời gian có thể xoay vòng.
          </span>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              src: "/free-outfits/all-free-outfits.webp",
              alt: "Tổng hợp trang phục miễn phí Where Winds Meet",
              caption: "Shop sự kiện: nhận bậc 0-cost trước.",
            },
            {
              src: "/free-outfits/free-outfits-grid.webp",
              alt: "Trang phục thưởng nhiệm vụ",
              caption: "Nhiệm vụ/thành tựu thường tặng full set.",
            },
            {
              src: "/free-outfits/free-hairstyles.webp",
              alt: "Lưới kiểu tóc miễn phí",
              caption: "Voucher tóc rơi từ code, sự kiện, mốc xã giao.",
            },
          ].map((item) => (
            <article
              key={item.src}
              className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 shadow-sm shadow-slate-950/60"
            >
              <div className="relative aspect-[16/9] w-full">
                <CdnImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  priority={false}
                />
              </div>
              <p className="px-4 py-3 text-sm text-slate-200">{item.caption}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Checklist nhanh cho cosmetics miễn phí
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          {checklist.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Lộ trình và ưu tiên
        </h2>
        <div className="space-y-3 text-sm leading-relaxed text-slate-200 sm:text-base">
          <p>
            Ưu tiên code: nhiều trang phục/kiểu tóc miễn phí đến từ code giới hạn. Nhập ở{" "}
            <Link
              href="/vn/guides/codes"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              trang Codes
            </Link>{" "}
            trước khi làm daily để tránh hết hạn.
          </p>
          <p>
            Tiền sự kiện: lấy bậc free trong shop, rồi dùng tiền dư cho outfit/thuốc nhuộm giới hạn trước khi đụng tiền hiếm.
          </p>
          <p>
            Thành tựu/nhiệm vụ ẩn: mốc khám phá, chuỗi NPC thị trấn, thử thách môn phái thường cho phụ kiện/voucher tóc—xem bảng thành tựu hàng tuần.
          </p>
          <p>
            Hệ thống xã hội: cống hiến bang, điểm thiện cảm, hoạt động tổ đội (co-op) đổi được rương ngoại hình (cosmetic) — ưu tiên tiêu trước reset tuần để tránh tràn.
          </p>
          <p>
            Nhịp patch: bản lớn và dịp lễ hay xoay/ rerun set. Chuẩn bị điều kiện trước để sẵn sàng khi shop mở.
          </p>
        </div>
      </section>
    </article>
  );
}
