import type { Metadata } from "next";
import Link from "next/link";
import CdnImage from "@/components/CdnImage";
import { LiteYouTubeEmbed } from "@/components/LiteYouTubeEmbed";
import LiteMp4Embed from "@/components/LiteMp4Embed";
import { buildHreflangAlternates } from "@/lib/hreflang";
import { getImageUrl } from "@/lib/image-utils";

const baseUrl = "https://wherewindsmeet.org";
const base = "/vn";
const routePath = "/guides/bosses/feng-ruzhi";

const heroPath = "/guides/bosses/feng-ruzhi/hero.webp";
const mapPath = "/guides/bosses/feng-ruzhi/map.webp";
const heavenfallPath = "/guides/bosses/feng-ruzhi/heavenfall.webp";

const game8VideoBase = "/guides/bosses/feng-ruzhi/game8";
const game8PosterBase = "/guides/bosses/feng-ruzhi/game8/posters";
const rubyVideo = "/guides/bosses/feng-ruzhi/preview.mp4";

const heroOgImage = getImageUrl(heroPath);

export const metadata: Metadata = {
  title: "Feng Ruzhi – vị trí & hướng dẫn boss | Where Winds Meet",
  description:
    "Hướng dẫn Feng Ruzhi (Where Winds Meet): cách mở (Heavenfall), vị trí ở Roaring Sands / Verdant Hill Village, Silk Ball bị cướp (≈15 giây để lấy lại) và mẹo thắng an toàn.",
  keywords: [
    "where winds meet feng ruzhi",
    "vị trí feng ruzhi",
    "mở feng ruzhi",
    "feng ruzhi world boss",
    "roaring sands",
    "verdant hill village",
    "heavenfall",
    "silk ball",
    "hướng dẫn boss where winds meet",
  ],
  alternates: buildHreflangAlternates(routePath, { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Feng Ruzhi – vị trí & hướng dẫn boss | Where Winds Meet",
    description:
      "Mở Feng Ruzhi bằng Heavenfall, tìm boss ở Roaring Sands / Verdant Hill Village và hiểu cơ chế Silk Ball để không bị thua “instant”.",
    url: `${baseUrl}${base}${routePath}`,
    siteName: "Where Winds Meet Hub",
    images: [
      { url: heroOgImage, width: 728, height: 370, alt: "Feng Ruzhi boss guide cover" },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feng Ruzhi – vị trí & hướng dẫn boss | Where Winds Meet",
    description:
      "Feng Ruzhi: mở bằng Heavenfall, vị trí tại Roaring Sands / Verdant Hill Village và cách hoạt động của cơ chế cướp Silk Ball.",
    images: [heroOgImage],
  },
};

const quickFacts = [
  { label: "Loại boss", value: "World Boss (cũng xuất hiện trong chiến dịch Heavenfall)" },
  { label: "Khu vực", value: "Kaifeng → Roaring Sands → Verdant Hill Village" },
  { label: "Điều kiện mở", value: "Hoàn thành chiến dịch Heavenfall (thời kỳ Update 1.1)" },
  { label: "Điều kiện thua", value: "Nếu Silk Ball bị cướp và bạn không lấy lại trong ~15 giây" },
  { label: "Cần chú ý", value: "Yellow-glint cướp/grab + đòn kết combo có thể parry" },
];

const faq = [
  {
    q: "Mở (unlock) boss Feng Ruzhi trong Where Winds Meet như thế nào?",
    a: "Bạn gặp Feng Ruzhi lần đầu trong chiến dịch Heavenfall ở Roaring Sands (Kaifeng). Sau khi hoàn thành Heavenfall, cô ấy sẽ xuất hiện như một world boss tại Verdant Hill Village.",
  },
  {
    q: "Feng Ruzhi ở đâu (vị trí)?",
    a: "Feng Ruzhi spawn world boss tại Verdant Hill Village (Roaring Sands) thuộc khu Kaifeng, nhưng chỉ sau khi bạn hoàn thành Heavenfall.",
  },
  {
    q: "Bạn có bao nhiêu thời gian để lấy lại Silk Ball?",
    a: "Nhiều guide và báo cáo từ người chơi mô tả cửa sổ rất ngắn — khoảng 15 giây. Nếu quá thời gian, game vẫn tính là thua dù bạn còn nhiều HP.",
  },
  {
    q: "Vì sao mình thua “instant” dù máu vẫn còn?",
    a: "Feng Ruzhi có thể cướp Silk Ball của bạn ở một số đòn có hiệu ứng yellow-glint. Nếu không giành lại thật nhanh (thường được mô tả là ~15 giây), game sẽ tính là thua dù HP vẫn ổn.",
  },
  {
    q: "Làm gì khi Silk Ball bị cướp?",
    a: "Xem đây là mục tiêu phụ: dừng trao đổi đòn với boss, chạy tới bóng bị cướp và burst lính đang giữ bóng trước khi hết giờ.",
  },
  {
    q: "Grab của Feng Ruzhi có unblockable không?",
    a: "Một đòn grab yellow-glint được xem là unblockable và rất nhanh. Hãy ưu tiên né/thoát thay vì cố block hoặc đứng chịu đòn.",
  },
];

export default function FengRuzhiBossGuideViPage() {
  const tipClips = [
    {
      title: "Lấy lại Silk Ball thật nhanh (≈15 giây)",
      description:
        "Khi bóng bị cướp, đừng tiếp tục “đấu tay đôi”. Hãy chạy thẳng tới bóng, hạ lính đang giữ bóng, rồi reset lại nhịp và đánh an toàn.",
      video: `${game8VideoBase}/retrieve-silk-ball.mp4`,
      poster: `${game8PosterBase}/retrieve-silk-ball.jpg`,
    },
    {
      title: "Né grab yellow-glint bằng cách dash lên phía trước",
      description:
        "Một tình huống wipe phổ biến là grab yellow-glint rất nhanh (cảm giác không block được). Nhiều người thấy dash thẳng lên/đi xuyên hướng lao của boss ổn định hơn là lùi lại.",
      video: `${game8VideoBase}/dash-forward-grab.mp4`,
      poster: `${game8PosterBase}/dash-forward-grab.jpg`,
    },
    {
      title: "Thắng nhờ parry để bào Qi (không chỉ né)",
      description:
        "Nhiều chuỗi đòn có ender rõ ràng. Parry đúng nhịp sẽ bào Qi/stance và mở cơ hội execute nhanh hơn.",
      video: `${game8VideoBase}/parry-pressure.mp4`,
      poster: `${game8PosterBase}/parry-pressure.jpg`,
    },
  ] as const;

  const moveClips = [
    {
      name: "Rapid Strikes",
      response: "Chuỗi cận chiến rất nhanh. Né ngang/né xuyên rồi punish sau khi kết thúc chuỗi.",
      video: `${game8VideoBase}/move-rapid-strikes.mp4`,
      poster: `${game8PosterBase}/move-rapid-strikes.jpg`,
    },
    {
      name: "Javelin Throw",
      response: "Ném vũ khí tầm xa. Canh né hoặc parry nếu bạn tự tin timing.",
      video: `${game8VideoBase}/move-javelin-throw.mp4`,
      poster: `${game8PosterBase}/move-javelin-throw.jpg`,
    },
    {
      name: "Falcon Strike",
      response: "Lao nhanh áp sát. Giữ stamina để né cú mở đầu, rồi phản công khi boss hạ xuống.",
      video: `${game8VideoBase}/move-falcon-strike.mp4`,
      poster: `${game8PosterBase}/move-falcon-strike.jpg`,
    },
    {
      name: "Omnislash",
      response: "Chuỗi nhiều hit. Đừng panic-roll sớm — né theo nhịp hoặc parry ender rõ ràng nếu thấy.",
      video: `${game8VideoBase}/move-omnislash.mp4`,
      poster: `${game8PosterBase}/move-omnislash.jpg`,
    },
    {
      name: "Aerial Takedown",
      response: "Nhảy lên rồi slam dễ hất ngã. Né ngang muộn, sau đó punish lúc boss hồi chiêu.",
      video: `${game8VideoBase}/move-aerial-takedown.mp4`,
      poster: `${game8PosterBase}/move-aerial-takedown.jpg`,
    },
    {
      name: "Wind Slashes",
      response: "Chém gió tầm xa. Thường có thể né hoặc parry; giữ camera ổn định để không bị rối.",
      video: `${game8VideoBase}/move-wind-slashes.mp4`,
      poster: `${game8PosterBase}/move-wind-slashes.jpg`,
    },
    {
      name: "Bloody Boomerang",
      response: "Ném vũ khí rồi quay lại rất nhanh. Chú ý timing hit thứ 2 (đường quay về).",
      video: `${game8VideoBase}/move-bloody-boomerang.mp4`,
      poster: `${game8PosterBase}/move-bloody-boomerang.jpg`,
    },
    {
      name: "Falcon Kicks",
      response: "Combo đá liên hoàn. Né một nhịp, rồi đọc ender (có thể parry) hoặc reset khoảng cách.",
      video: `${game8VideoBase}/move-falcon-kicks.mp4`,
      poster: `${game8PosterBase}/move-falcon-kicks.jpg`,
    },
  ] as const;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}${base}${routePath}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}${base}` },
        { "@type": "ListItem", position: 2, name: "Guides", item: `${baseUrl}${base}/guides` },
        { "@type": "ListItem", position: 3, name: "Boss", item: `${baseUrl}${base}/guides/bosses` },
        { "@type": "ListItem", position: 4, name: "Feng Ruzhi", item: `${baseUrl}${base}${routePath}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
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
            src={heroPath}
            alt="Ảnh bìa hướng dẫn boss Feng Ruzhi"
            fill
            className="object-cover opacity-35"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Boss guide · Vị trí · Cơ chế Silk Ball
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet Feng Ruzhi: vị trí, cách mở và cách đánh an toàn để thắng.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Feng Ruzhi nổi lên như một truy vấn hot vì trận đánh có điều kiện thua rất “khó chịu”: bạn mang theo{" "}
            <span className="font-semibold">Silk Ball</span>, và nếu bị cướp thì phải giành lại nhanh, nếu không trận sẽ kết thúc ngay.
            Trang này tập trung vào đúng thứ người tìm kiếm cần: vị trí spawn, đường mở boss và cách xử lý áp lực Silk Ball.
          </p>
          <p className="text-xs text-slate-400">
            Lưu ý: cơ chế/reward có thể khác nhau theo patch/server. Nếu trải nghiệm trong game khác bài viết, hãy ưu tiên in-game trước.
          </p>
        </div>
      </section>

      <section className="grid gap-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50">Tóm tắt nhanh</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-200">
            {quickFacts.map((item) => (
              <li key={item.label} className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span>
                  <span className="font-semibold text-slate-100">{item.label}:</span>{" "}
                  <span className="text-slate-200">{item.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
          <CdnImage
            src={mapPath}
            alt="Bản đồ vị trí Feng Ruzhi ở Verdant Hill Village (Roaring Sands, Kaifeng)"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 560px"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
            Verdant Hill Village (Roaring Sands) là nơi world boss xuất hiện sau Heavenfall.
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Vị trí Feng Ruzhi: Roaring Sands (Heavenfall) → Verdant Hill Village (world boss).
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Nếu bạn đang tìm “where winds meet feng ruzhi location”, thì đây là bản tóm gọn: bạn gặp Feng Ruzhi trong{" "}
          <span className="font-semibold">Heavenfall</span> ở <span className="font-semibold">Roaring Sands</span> (Kaifeng). Sau khi hoàn thành
          Heavenfall, boss sẽ xuất hiện như world boss tại <span className="font-semibold">Verdant Hill Village</span>.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Các bước mở boss (nhanh)</h3>
            <ol className="mt-3 space-y-2 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Chạy chiến dịch <span className="font-semibold">Heavenfall</span> ở Roaring Sands (Kaifeng).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Đánh bại boss trong encounter của campaign (lần đầu).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Sau khi xong, tới <span className="font-semibold">Verdant Hill Village</span> để đánh world boss.
                </span>
              </li>
            </ol>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
            <CdnImage
              src={heavenfallPath}
              alt="Khu vực Heavenfall trong Roaring Sands (Kaifeng)"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 560px"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-xs text-slate-100">
              Lần đầu gặp boss trong Heavenfall (Roaring Sands).
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-100">
          Nếu Feng Ruzhi chưa spawn ở Verdant Hill Village, thường là vì Heavenfall chưa hoàn thành trên nhân vật đó. Hãy kiểm tra tiến độ campaign trước.
        </div>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Cách đánh Feng Ruzhi: áp lực Silk Ball + cửa sổ punish.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Nhiều clip “no hit” khiến trận trông như chỉ cần tay to, nhưng lý do thua phổ biến nhất lại là mục tiêu phụ. Trong trận Feng Ruzhi, bạn gần như có{" "}
          <span className="font-semibold">hai thứ cần giữ</span>: HP và khả năng giữ (hoặc giành lại) Silk Ball trước khi hết timer.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-50">Cơ chế Silk Ball (dễ hiểu)</h3>
            <ul className="space-y-2 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Một số đòn có hiệu ứng <span className="font-semibold">yellow-glint</span> có thể cướp Silk Ball của bạn.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Khi bóng bị cướp, bạn có một khoảng thời gian rất ngắn (thường được mô tả khoảng <span className="font-semibold">15 giây</span>) để lấy lại; hết giờ là thua.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Cách xử lý đơn giản nhất: chạy tới bóng, burst lính giữ bóng, rồi reset lại nhịp.
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-2">
            <h3 className="text-sm font-semibold text-slate-50">Sai lầm dễ gặp</h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              Đừng tiếp tục “đấu tay đôi” với boss khi bóng đã bị cướp. Dù bạn đang hơn DPS, bạn vẫn thua nếu timer lấy bóng hết. Hãy coi đây là khoảnh khắc “capture-the-flag”: disengage, lấy bóng trước, rồi mới quay lại đánh.
            </p>
            <p className="text-xs text-slate-400">
              Khi đang học fight, luyện đường lấy bóng hiệu quả hơn tối ưu rotation.
            </p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {tipClips.map((tip) => (
            <div key={tip.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
              <h3 className="text-sm font-semibold text-slate-50">{tip.title}</h3>
              <LiteMp4Embed
                src={tip.video}
                poster={tip.poster}
                title={tip.title}
                analytics={{ eventName: "play_clip", params: { page: "feng-ruzhi", lang: "vi", section: "tips" } }}
              />
              <p className="text-sm text-slate-200 leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
            <h3 className="text-sm font-semibold text-slate-50">Companion khuyên dùng: Ruby (revive an toàn)</h3>
            <LiteMp4Embed
              src={rubyVideo}
              poster={`${game8PosterBase}/ruby.jpg`}
              title="Ruby companion clip"
              analytics={{ eventName: "play_clip", params: { page: "feng-ruzhi", lang: "vi", section: "companion" } }}
            />
            <p className="text-sm text-slate-200 leading-relaxed">
              Nếu bạn đang học clear Legend/Abyss, một companion có revive như <span className="font-semibold">Ruby</span> giúp biến một sai lầm thành cơ hội hồi lại thay vì phải reset run.
              Nếu companion hoạt động lạ ở phiên bản của bạn, hãy coi đây là mẹo tiện lợi (có thể phụ thuộc patch).
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Thói quen để clear an toàn</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Giữ stamina cho <span className="font-semibold">reposition</span>. Sprint lấy bóng quan trọng hơn thêm một combo “tham”.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Co-op: phân công 1 người “ball duty” để cả team không bị chậm nhịp khi bóng bị cướp.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Nếu bạn chưa tự tin parry, cứ ưu tiên né trước, punish đúng cửa sổ rõ nhất.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Nếu bị kẹt, đổi sang build “dễ thở” (sustain + i-frame) để học pattern. Xem{" "}
                  <Link href={`${base}/guides/builds`} className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                    hướng dẫn build
                  </Link>{" "}
                  để chọn setup ưu tiên ổn định.
                </span>
              </li>
            </ul>

            <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
              <h4 className="text-sm font-semibold text-slate-50">Chọn vũ khí (không cần math, ưu tiên thoải mái)</h4>
              <p className="mt-2 text-sm text-slate-200 leading-relaxed">
                Feng Ruzhi phạt tunnel vision rất mạnh. Hãy chọn cặp vũ khí giúp bạn giữ bình tĩnh: một vũ khí có mobility để reset nhịp, và một vũ khí có sustain/utility để xử lý lúc lấy bóng.
                Nếu cần gợi ý, mở{" "}
                <Link href={`${base}/guides/weapons`} className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
                  tổng quan vũ khí
                </Link>{" "}
                và chọn theo mức execution của bạn (đừng chỉ nhìn tier list).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Clip moveset (nhận diện đòn đánh).
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Bạn không cần học thuộc mọi thứ. Hãy nhận diện <span className="font-semibold">tell</span>, chọn phản ứng (né hoặc parry) rồi reset về neutral.
          Các clip ngắn này giúp bạn ghép tên đòn với animation.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {moveClips.map((move) => (
            <div key={move.name} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-3">
              <h3 className="text-sm font-semibold text-slate-50">{move.name}</h3>
              <LiteMp4Embed
                src={move.video}
                poster={move.poster}
                title={move.name}
                analytics={{ eventName: "play_clip", params: { page: "feng-ruzhi", lang: "vi", section: "moveset" } }}
              />
              <p className="text-sm text-slate-200 leading-relaxed">{move.response}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          Nếu timing/tên đòn ở phiên bản của bạn khác, đó có thể là khác biệt patch/region. Hãy tin vào animation và màu glint làm cue chính.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Rewards: vì sao nhiều người farm Feng Ruzhi.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Feng Ruzhi gắn với tiến độ Heavenfall và cũng có drop riêng khi là world boss. Reward có thể thay đổi theo patch/độ khó, nhưng thường gồm material (ví dụ <span className="font-semibold">Crimson Silk</span>) cùng gói currency/XP.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Hoàn thành Heavenfall (campaign)</h3>
            <ul className="mt-3 space-y-1 text-sm text-slate-200">
              <li>Medicinal Tales</li>
              <li>Oscillating Jade × 5</li>
              <li>Echo Jade × 60</li>
              <li>Kaifeng Exploration × 110</li>
              <li>Enlightenment Point × 100</li>
              <li>Character EXP × 50.000</li>
              <li>Coin × 50.000</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <h3 className="text-sm font-semibold text-slate-50">World boss drops (farm)</h3>
            <ul className="mt-3 space-y-1 text-sm text-slate-200">
              <li>Custom Note Chest × 5</li>
              <li>Medical Tales × 3</li>
              <li>Crimson Silk</li>
              <li>Echo Jade × 20</li>
              <li>Kaifeng Exploration × 50</li>
              <li>Character EXP × 8.000</li>
              <li>Coin × 8.000</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-400">
          Nếu reward của bạn khác, có thể do region/server balancing hoặc thay đổi ở patch mới hơn.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Video: Feng Ruzhi (Legend/Abyss) – các run “no hit” tham khảo.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Xem một run sạch là cách nhanh nhất để phân biệt “neutral an toàn” và “cửa sổ punish”. Hãy chú ý cách người chơi reset khoảng cách sau khi né, và cách họ chuyển ưu tiên khi cơ chế lấy bóng kích hoạt.
        </p>
        <LiteYouTubeEmbed
          videoId="ImGcZ7vtI_g"
          title="Feng Ruzhi guide (Legend/Abyss) – Where Winds Meet"
          poster={heroPath}
          analytics={{ eventName: "play_video", params: { page: "feng-ruzhi", lang: "vi" } }}
        />
        <p className="text-xs text-slate-400">
          Embed dùng chế độ riêng tư của YouTube (<span className="font-semibold">youtube-nocookie.com</span>). Video có thể thay đổi nếu creator xóa hoặc region-lock.
        </p>
      </section>

      <section id="faq" className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">FAQ</h2>
        <div className="space-y-3">
          {faq.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 space-y-1">
              <p className="text-sm font-semibold text-slate-100">{item.q}</p>
              <p className="text-sm text-slate-300 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Trang liên quan (giữ bạn ở lại hub)
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href={`${base}/guides/bosses`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Danh sách boss</p>
            <p className="mt-1 text-xs text-slate-400">Xem tất cả boss và tổng quan nhanh.</p>
          </Link>
          <Link
            href={`${base}/guides/patch-notes`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Patch notes</p>
            <p className="mt-1 text-xs text-slate-400">Nếu cơ chế thay đổi, hãy kiểm tra tại đây.</p>
          </Link>
          <Link
            href={`${base}/guides/weapons`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Vũ khí</p>
            <p className="mt-1 text-xs text-slate-400">Chọn vũ khí “thoải mái” cho các trận áp lực.</p>
          </Link>
          <Link
            href={`${base}/guides/builds`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Builds</p>
            <p className="mt-1 text-xs text-slate-400">Ưu tiên sustain khi đang học pattern.</p>
          </Link>
          <Link
            href={`${base}/news`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Tin tức</p>
            <p className="mt-1 text-xs text-slate-400">Update, boss mới và sự kiện.</p>
          </Link>
          <Link
            href={`${base}/videos`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60 transition hover:border-slate-700 hover:bg-slate-900/70"
          >
            <p className="text-sm font-semibold text-slate-50 group-hover:text-ink-gold transition-colors">Video</p>
            <p className="mt-1 text-xs text-slate-400">Tuyển tập video trong hub.</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
