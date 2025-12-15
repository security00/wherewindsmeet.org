import type { Metadata } from "next";
import Image from "next/image";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Builds Where Winds Meet – PvE & PvP",
  description:
    "Builds linh hoạt cho Where Winds Meet (PvE & PvP): phân bố chỉ số, ghép vũ khí, nhịp xoay chiêu và mẹo thực chiến.",
  alternates: buildHreflangAlternates("/guides/builds", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Builds Where Winds Meet – PvE & PvP",
    description:
      "Builds linh hoạt cho Where Winds Meet (PvE & PvP): phân bố chỉ số, ghép vũ khí, nhịp xoay chiêu và mẹo thực chiến.",
    url: `${baseUrl}/vn/guides/builds`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Builds Where Winds Meet – PvE & PvP",
    description:
      "Builds linh hoạt cho Where Winds Meet (PvE & PvP): phân bố chỉ số, ghép vũ khí, nhịp xoay chiêu và mẹo thực chiến.",
  },
};

const archetypes = [
  {
    name: "Stormblade Wanderer",
    role: "Carry cận chiến hổ báo",
    description:
      "Thiết lập tốc độ cao, vào-ra liên tục, chồng kỹ năng cơ động và burst để kết thúc trước khi địch phản ứng.",
  },
  {
    name: "Riverflow Sentinel",
    role: "Đỡ đòn duy trì áp lực",
    description:
      "Phong cách phòng thủ, hy sinh burst đỉnh để lấy tự hồi phục, khống chế ổn định trong giao tranh đông.",
  },
  {
    name: "Mistveil Archer",
    role: "Tầm xa khống chế/ép góc",
    description:
      "Cấu hình tầm xa chú trọng vị trí an toàn, sát thương găm dần và khống chế mềm để giữ địch ở khoảng cách dễ chịu.",
  },
];

export default function BuildsPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/guides/builds`,
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
          name: "Builds",
          item: `${baseUrl}/vn/guides/builds`,
        },
      ],
    },
  ];

  return (
    <article className="min-h-screen space-y-12 bg-ink-wash pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/background/bg4.webp"
            alt="Nền builds Where Winds Meet"
            fill
            className="object-cover object-top opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/60 to-slate-950" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
        </div>

        <div className="absolute right-8 top-1/4 hidden text-vertical text-4xl font-bold text-slate-50/10 lg:block font-serif select-none">
          Hướng dẫn Võ học
        </div>
        <div className="absolute left-8 top-1/3 hidden text-vertical text-3xl font-bold text-slate-50/10 lg:block font-serif select-none">
          Linh hoạt bất tận
        </div>

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 sm:px-12 lg:w-2/3">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl font-serif">
            Builds vừa <span className="text-ink-gold">mạnh</span> vừa{" "}
            <span className="text-ink-jade">hợp lối chơi</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200/90 text-shadow-sm font-sans">
            Build tốt không chỉ chạy theo con số; nó biến phong cách võ hiệp bạn theo đuổi thành nhịp combat tin cậy, phù hợp thời gian, phản xạ và mức kiên nhẫn thử nghiệm.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-slate-200/90 text-shadow-sm font-sans">
            Dùng trang này như sổ tay PvE/PvP trước khi đào sâu vũ khí, tuyến tâm pháp và vòng xoay chiêu.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
              Chơi đơn
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
              Tổ đội
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm">
              PvP
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-6 sm:px-8">
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-slate-300 font-sans">
            Các cấu hình ở đây ưu tiên tính linh hoạt và vẫn vui khi meta đổi patch. Mỗi build giải thích nguyên lý để bạn tùy biến mà không làm mất bản sắc.
          </p>
          <div className="divider-ink" />
        </section>

        <section className="bg-texture-noise relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-2xl backdrop-blur-md">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-50 border-brush inline-block pb-2 font-serif">
                Nguyên tắc cốt lõi cho build mạnh.
              </h2>
              <p className="text-slate-300 leading-relaxed font-sans">
                Build tốt thường thống nhất 3 yếu tố: nhịp combo rõ ràng, kế hoạch chỉ số nhất quán, và kỳ vọng nội dung thực tế. Thiếu một trong ba sẽ khiến build chỉ mạnh trên giấy.
              </p>
              <p className="text-slate-300 leading-relaxed font-sans">
                Các build ở đây ưu tiên sự ổn định, chọn kỹ năng che lỗi và hợp nhịp khám phá thế giới mở của Where Winds Meet.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900/50 border border-slate-700 text-2xl">
                  ⚔️
                </div>
                <div>
                  <h3 className="font-bold text-ink-gold font-serif text-lg">Nhịp combat rõ</h3>
                  <p className="mt-2 text-sm text-slate-400 font-sans">
                    Biết 5 giây đầu làm gì: tiếp cận, debuff, combo, rút ra. Luyện nhịp này cho đến khi phản xạ.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-900/50 border border-slate-700 text-2xl">
                  📊
                </div>
                <div>
                  <h3 className="font-bold text-ink-gold font-serif text-lg">Chỉ số tập trung</h3>
                  <p className="mt-2 text-sm text-slate-400 font-sans">
                    Đừng chia điểm quá loãng. Ưu tiên 2–3 chỉ số chính để biến vũ khí tầm trung thành nổi bật và tránh tụt lực.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl font-serif">
              Archetype gợi ý
            </h2>
            <p className="mt-3 text-slate-400 font-sans">
              Điểm xuất phát có thể uốn theo đồ bạn đang có.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {archetypes.map((archetype) => (
              <div
                key={archetype.name}
                className="card-tablet bg-texture-noise group relative flex flex-col justify-between rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20"
              >
                <div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-ink-jade transition-colors font-serif">
                    {archetype.name}
                  </h3>
                  <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-emerald-500/80 font-sans">
                    {archetype.role}
                  </p>
                  <div className="my-4 h-px w-12 bg-slate-700/50" />
                  <p className="text-sm leading-relaxed text-slate-300/90 font-sans">
                    {archetype.description}
                  </p>
                </div>
                <div className="mt-6">
                  <button className="btn-seal text-xs">
                    Xem chi tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider-ink" />

        <section className="bg-texture-noise rounded-3xl border border-slate-800/60 bg-slate-950/40 p-8 shadow-lg">
          <h2 className="text-xl font-bold tracking-tight text-slate-50 sm:text-2xl border-brush inline-block pb-2 mb-6 font-serif">
            Điều chỉnh cho chơi đơn, tổ đội (co-op), PvP.
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="space-y-3">
              <h3 className="font-bold text-ink-spirit font-serif">Chơi đơn</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Ưu tiên tự hồi, công cụ khẩn cấp, vòng xoay dễ tha thứ. Bạn vừa là tank vừa là healer.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-ink-spirit font-serif">Tổ đội</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Giảm thủ để tăng buff nhóm. Tập trung tương tác (synergy) và tạo cơ hội cho đồng đội.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-bold text-ink-spirit font-serif">PvP</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                Hy sinh sự thoải mái để lấy di chuyển khó đoán và burst. Thuộc map và phản xạ sắc bén là chìa khóa.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 sm:text-3xl border-brush inline-block pb-2 font-serif">
            Archetype cộng đồng ưa chuộng
          </h2>

          <div className="relative h-48 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 sm:h-64 shadow-inner">
            <Image
              src="/background/builds.webp"
              alt="Hình tổng quan builds Where Winds Meet"
              fill
              className="object-cover object-center opacity-60 hover:scale-105 transition-transform duration-700"
              sizes="(min-width: 1280px) 40vw, (min-width: 768px) 60vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="max-w-xl text-sm text-slate-200 text-shadow-sm font-sans">
                Các guide Zh phân chia rõ trường phái võ học. Hiểu mục tiêu của từng trường phái giúp bạn thích ứng khi meta đổi.
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article id="mo-blade" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Stonebreaker Might</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Tank</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Mo Blade + Thương tuyến trước
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Dựa vào siêu giáp và giảm sát thương. Giữ aggro, ổn định run cho nhóm mới học.
              </p>
            </article>

            <article id="sword-spear-bleed" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Resonant Steel Shadow</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">DPS</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Kiếm + Thương bleed
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Nhịp cao, chồng DoT rồi kích nổ. Đòi hỏi xoay chiêu chuẩn để đạt trần sát thương.
              </p>
            </article>

            <article id="sword-starter" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Resonant Steel Arc</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Hybrid</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Kiếm + Thương dễ chơi
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Hỗn hợp thân thiện tân thủ, nhấn quản lý thể lực và combo đơn giản. Tốt để học nhịp.
              </p>
            </article>

            <article id="umbrella-control" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Silkbound Jade</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Control</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Ô + Phiến tầm xa
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Sát thương tầm xa ổn định và khống chế. Quản lý tài nguyên trong khi ô tự tấn công.
              </p>
            </article>

            <article id="umbrella-healer" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Silkbound Rain</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Support</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Ô thuần hồi máu
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Hỗ trợ thuần giữ đội sống sót. Sát thương thấp nhưng thiết yếu cho nội dung khó.
              </p>
            </article>

            <article id="dual-blades" className="card-wuxia group space-y-3 rounded-2xl p-5 transition-colors hover:border-slate-600/50 scroll-mt-24">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-bold text-slate-50 font-serif">
                  <span className="text-ink-gold text-lg mr-2">Bamboo-Split Gale</span>
                </h3>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full font-sans">Assassin</span>
              </div>
              <p className="text-xs font-medium text-emerald-400 font-sans">
                Song đao + Dây móc
              </p>
              <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors font-sans">
                Cận chiến siêu cơ động. Lao vào, trừng phạt rồi thoát. Thưởng cho phản xạ sắc và thuộc map.
              </p>
            </article>
          </div>
        </section>
      </div>
    </article>
  );
}
