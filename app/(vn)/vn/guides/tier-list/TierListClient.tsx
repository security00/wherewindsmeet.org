'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import CdnImage from "@/components/CdnImageClient";
import Link from "next/link";
import tierListData from "@/public/tier-list.json";

type WeaponRanking = {
  name: string;
  weapon: string;
  range: string;
  type: string;
  pathGuide: string;
  sectBoost?: string;
  vetRank?: string;
  pveRank?: string;
  pvpRank?: string;
  icon?: string;
};

type PathGuide = {
  pathGuide: string;
  type: string;
  range: string;
  primaryStyle?: string;
  secondaryStyle?: string;
  description?: string;
  dps?: number;
  difficulty?: number;
  survivability?: number;
  mobility?: number;
  support?: number;
  control?: number;
  avg?: number;
  total?: number;
  rankOnStat?: string;
  internalArts?: string[];
  weaponSet?: string;
  gearSet?: string;
  icon?: string;
};

type WeaponCombination = {
  weapon1: string;
  weapon2?: string;
  type?: string;
  range?: string;
  path?: string;
  pathRank?: string;
  totalPve?: string;
  totalPvp?: string;
  note?: string;
};

type TierListData = {
  weaponRankings: WeaponRanking[];
  pathGuides: PathGuide[];
  combinations: WeaponCombination[];
  internalArts?: InternalArt[];
};

type InternalArt = {
  name: string;
  type1?: string;
  type2?: string;
  type3?: string;
  description?: string;
};

const tierTabs = [
  { id: "weaponRankings", label: "Xếp hạng vũ khí", helper: "Tổng · PvE · PvP" },
  { id: "pathGuides", label: "Hướng dẫn tuyến", helper: "Lối chơi & chỉ số" },
  { id: "combinations", label: "Build song vũ khí", helper: "Gợi ý ghép vũ khí" },
  { id: "internalArts", label: "Nội công", helper: "Danh sách thụ động (sheet 3)" },
] as const;

const rankOrder = ["S", "A", "B", "C", "D"];

const rankWeight = (value?: string) => {
  if (!value) return Number.POSITIVE_INFINITY;
  const normalized = value.trim().toUpperCase();
  const base = rankOrder.indexOf(normalized[0]);
  const modifier = normalized.includes("+") ? -0.05 : normalized.includes("-") ? 0.05 : 0;
  return (base === -1 ? rankOrder.length : base) + modifier;
};

const rankBadgeStyle = (value?: string) => {
  const grade = value?.trim().toUpperCase()[0] ?? "";
  switch (grade) {
    case "S":
      return "border-emerald-400/40 bg-emerald-500/10 text-emerald-200";
    case "A":
      return "border-cyan-400/30 bg-cyan-500/10 text-cyan-100";
    case "B":
      return "border-amber-400/30 bg-amber-500/10 text-amber-100";
    case "C":
      return "border-orange-400/30 bg-orange-500/10 text-orange-100";
    default:
      return "border-slate-700 bg-slate-800/60 text-slate-200";
  }
};

const statFields: Array<{ key: keyof PathGuide; label: string }> = [
  { key: "dps", label: "DPS" },
  { key: "difficulty", label: "Độ khó" },
  { key: "survivability", label: "Sống sót" },
  { key: "mobility", label: "Cơ động" },
  { key: "support", label: "Hỗ trợ" },
  { key: "control", label: "Khống chế" },
];

const tierList = tierListData as TierListData;

const quickTierRows = [
  {
    tier: "S",
    pve: "Nameless Sword, Spear, Mo Blade, Umbrella",
    pvp: "Umbrella (build phản đòn), Dual Blades, Rope Dart",
    notes:
      "Lựa chọn “mạnh toàn diện” cho đa số người chơi. Khi nắm route cơ bản, các vũ khí này ổn định ở gần như mọi nội dung và càng đầu tư càng lợi.",
    style: "card-tier-s",
    icon: "🐉",
  },
  {
    tier: "A",
    pve: "Fan, hybrid Sword + Spear, Umbrella/Fan hỗ trợ",
    pvp: "Spear bruiser, setup khống chế Fan/Umbrella",
    notes:
      "Rất mạnh khi chơi đúng điểm mạnh và build phù hợp. Hợp nếu bạn thích thử nghiệm nhưng vẫn muốn giữ độ ổn định.",
    style: "card-tier-a",
    icon: "🐅",
  },
  {
    tier: "B",
    pve: "Build glass-cannon (mỏng nhưng đau), hybrid ngoài meta",
    pvp: "Mix-up thử nghiệm và kèo khắc chế ngách",
    notes:
      "Dùng được nhưng đòi hỏi nhiều hơn hoặc chỉ mạnh trong kèo/nội dung nhất định. Hợp người có kinh nghiệm, thích chơi ngoài meta và kèo rủi ro cao – thưởng cao.",
    style: "card-tier-b",
    icon: "🐆",
  },
  {
    tier: "C",
    pve: "Setup chưa hoàn thiện hoặc quá kén nội dung",
    pvp: "Đường chơi phụ thuộc “chiêu trò”",
    notes:
      "Chủ yếu dành cho người thật sự đam mê hoặc chơi “dự án phụ”. Hãy chọn khi bạn thực sự thích lối chơi đó và đã nắm vững cơ chế cốt lõi bằng một vũ khí chủ lực mạnh hơn.",
    style: "card-tier-c",
    icon: "🐇",
  },
];

export default function TierListClient() {
  const [activeTab, setActiveTab] = useState<(typeof tierTabs)[number]["id"]>("weaponRankings");
  const sortedWeapons = [...tierList.weaponRankings].sort(
    (a, b) => rankWeight(a.vetRank) - rankWeight(b.vetRank)
  );
  const pathGuides = tierList.pathGuides;
  const combinations = tierList.combinations;
  const internalArts = tierList.internalArts ?? [];

  return (
    <article className="space-y-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg.webp"
            alt="Hình nền tier list Where Winds Meet"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Where Winds Meet <span className="text-ink-gold">Bảng xếp hạng (Tier list)</span>
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-wide text-emerald-400/80">
              PvE & PvP - Version 1.7 meta
            </p>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Đây là tier list dành cho <span className="text-slate-100 font-semibold">người chơi thực chiến</span>. Chúng tôi ưu tiên <span className="text-slate-100 font-semibold">dễ chơi, ổn định và đúng chất</span> hơn những con số “đẹp trên bảng tính”. Hãy chọn tuyến giúp bạn làm chủ giang hồ.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Dùng trang này như bảng xếp hạng PvP/PvE theo vũ khí, tuyến và build song vũ khí; sau đó mở các tab để xem dữ liệu chi tiết và link sang guide liên quan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tier Cards Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-slate-50 border-brush inline-block pb-1">
            Ảnh chụp tier nhanh
          </h2>
          <span className="text-xs text-slate-400">Cap nhat theo Version 1.7</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {quickTierRows.map((row, index) => (
            <motion.div
              key={row.tier}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl p-6 ${row.style} group transition-all hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950/50 text-2xl shadow-inner">
                    {row.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-100">
                      Tier {row.tier}
                    </h3>
                    <p className="text-xs text-slate-400">Sức mạnh tổng quan</p>
                  </div>
                </div>
                <div className="rounded-full bg-slate-950/30 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">
                  Gợi ý meta
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Điểm mạnh PvE</span>
                  <p className="mt-1 text-sm font-medium text-slate-200">{row.pve}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Điểm mạnh PvP</span>
                  <p className="mt-1 text-sm font-medium text-slate-200">{row.pvp}</p>
                </div>
                <div className="relative mt-4 rounded-xl bg-slate-950/40 p-3 text-xs leading-relaxed text-slate-400">
                  <span className="absolute -left-1 top-3 h-8 w-1 rounded-r-full bg-slate-700/50" />
                  {row.notes}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="grid gap-8 lg:grid-cols-3 pb-6 lg:pb-10">
        <div className="lg:col-span-2 space-y-8">
          {/* Best Builds Section */}
          <div className="card-wuxia rounded-3xl p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-ink-gold mb-6 border-brush inline-block pb-2">Gợi ý build mạnh & phong cách chơi</h2>
            <p className="mb-6 text-slate-300 leading-relaxed">
              Trong thực chiến, nhiều người chơi không nghĩ theo “tên vũ khí”, mà nghĩ theo “vai trò” hoặc “lối chơi”. Các gợi ý dưới đây chuyển tier S/A thành những mục tiêu build cụ thể để bạn dễ bắt đầu.
            </p>
            <div className="space-y-6">
              <article className="group relative rounded-xl border border-slate-800/50 bg-slate-900/20 p-6 transition-all hover:bg-slate-900/40 hover:border-emerald-500/30">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-emerald-300 transition-colors">
                    裂石·威 – Mo Blade tuyến trước (Frontline)
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">S-tier (Tank)</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Kết hợp nhát chém “nặng” của Mo Blade với khiên và khả năng sống sót tốt. Hợp nếu bạn muốn làm trụ đội hình, đứng tuyến đầu đánh boss và vẫn có sát thương đáng kể.
                </p>
                <p className="text-xs text-slate-500">
                  Tương tác mạnh: <span className="text-slate-400">Nội công/hỗ trợ hoặc công cụ của Umbrella để giữ uptime ổn định.</span>
                </p>
                <Link href="/vn/guides/builds" className="absolute inset-0" />
              </article>

              <article className="group relative rounded-xl border border-slate-800/50 bg-slate-900/20 p-6 transition-all hover:bg-slate-900/40 hover:border-red-500/30">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-red-300 transition-colors">
                    鳴金·影 – Kiếm + Thương (Bleed)
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">S-tier (DPS)</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Build dùng kỹ năng Thương để chồng Bleed và debuff, sau đó đổi sang Kiếm để kích nổ. Bản đơn giản (Nameless Sword + Nameless Spear) rất hợp người mới; biến thể nâng cao sẽ đẩy sát thương cao hơn nhiều.
                </p>
                <p className="text-xs text-slate-500">
                  Lối chơi: <span className="text-slate-400">APM cao, quản lý debuff, canh cửa sổ burst.</span>
                </p>
                <Link href="/vn/guides/builds" className="absolute inset-0" />
              </article>

              <article className="group relative rounded-xl border border-slate-800/50 bg-slate-900/20 p-6 transition-all hover:bg-slate-900/40 hover:border-cyan-500/30">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    破竹·風 – Song đao (Assassin)
                  </h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">Chuyên PvP</span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-3">
                  Rope Dart kéo mục tiêu lệch vị trí, sau đó Song đao lao vào kết liễu. Lối chơi đòi hỏi kỹ năng cơ học, nhưng rất thỏa mãn nếu bạn thích đọc tình huống, nhử chiêu và trừng phạt sai lầm của đối thủ bằng những pha hạ gục nhanh.
                </p>
                <p className="text-xs text-slate-500">
                  Trọng tâm: <span className="text-slate-400">Bắt lẻ, dồn sát thương, cơ động.</span>
                </p>
                <Link href="/vn/guides/builds" className="absolute inset-0" />
              </article>
            </div>
          </div>

          {/* How to Read Section */}
          <div className="card-wuxia rounded-3xl p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">Cách đọc tier list</h2>
            <p className="text-slate-300 leading-relaxed">
              Mỗi tier phản ánh đánh giá tổng thể, kết hợp sát thương, độ sống sót, độ dễ dùng và độ linh hoạt. Thay vì sa đà vào chênh lệch nhỏ, tier list gom vũ khí thành các “dải sức mạnh” để bạn quyết định nhanh.
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-300 marker:text-emerald-500">
              <li><span className="text-slate-100 font-medium">PvE vs PvP:</span> Xếp hạng dựa trên hiệu quả thực tế ở endgame. PvE ưu tiên ổn định/khống chế; PvP ưu tiên dồn sát thương/cơ động.</li>
              <li><span className="text-slate-100 font-medium">Tier không quyết định tất cả:</span> Người chơi hiểu vũ khí mình cầm thường mạnh hơn người chạy theo meta nhưng chưa nắm rotation.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          {/* Philosophy Section */}
          <div className="card-wuxia rounded-3xl p-6">
            <h3 className="text-lg font-bold text-slate-100 mb-4 border-b border-slate-800 pb-2">Triết lý xếp hạng</h3>
            <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
              <p>
                Tier list này ưu tiên <span className="text-slate-200">tính ổn định</span>. Một vũ khí S-tier nhưng đòi hỏi input “chuẩn khung hình” có thể chỉ đáng B-tier với người chơi casual.
              </p>
              <p>
                Chúng tôi ưu tiên lựa chọn chơi tốt trong <span className="text-slate-200">lag, giao tranh hỗn loạn và tổ đội thiếu phối hợp</span>.
              </p>
              <p>
                Xếp hạng sẽ cập nhật sau patch lớn hoặc sự kiện theo mùa. Không đổi chỉ để “cho mới”.
              </p>
            </div>
          </div>

          {/* Strategy Section */}
          <div className="card-wuxia rounded-3xl p-6">
            <h3 className="text-lg font-bold text-slate-100 mb-4 border-b border-slate-800 pb-2">Chiến lược build</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Hãy tìm tương tác giữa vũ khí – nội công – trang bị. Một vũ khí khống chế mạnh thường hợp với build thiên về hồi phục/duy trì.
            </p>
            <div className="rounded bg-slate-950/50 p-3 text-xs text-slate-500 italic border border-slate-800">
              &ldquo;Câu hỏi quan trọng nhất không phải &quot;S-tier là gì&quot;, mà là &quot;thứ gì mạnh trong tay mình&quot;.&rdquo;
            </div>
          </div>

          {/* Navigation */}
          <div className="card-wuxia rounded-3xl p-6">
            <h3 className="text-lg font-bold text-slate-100 mb-4">Xem thêm</h3>
            <div className="flex flex-col gap-2">
              <Link href="/vn/guides/pvp-tier-list" className="block rounded-lg bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors border border-transparent hover:border-slate-700">
                ⚔️ Tier list PvP (đấu hạng)
              </Link>
              <Link href="/vn/guides/weapons" className="block rounded-lg bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors border border-transparent hover:border-slate-700">
                🗡️ Bách khoa vũ khí
              </Link>
              <Link href="/vn/guides/codes" className="block rounded-lg bg-slate-800/50 px-4 py-3 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-colors border border-transparent hover:border-slate-700">
                💎 Mã quà mới nhất
              </Link>
            </div>
          </div>
        </div>

        {/* Video cộng đồng & dữ liệu tier */}
        <div className="lg:col-span-3">
          <div className="card-wuxia rounded-3xl p-5 md:p-8 space-y-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-100 border-b border-slate-800 pb-2">
                  Video cộng đồng & dữ liệu tier
                </h3>
                <div className="mt-2 space-y-1 text-sm text-slate-400 leading-relaxed">
                  <p>Bên trái là video tham khảo; bên phải là dữ liệu tier được đồng bộ từ Excel — không cần phải xem Google Sheet qua iframe nhỏ.</p>
                  <p className="text-slate-300">Nguồn dữ liệu: <span className="font-mono text-[11px] text-emerald-200">ref-page/tier_list/tier_list.xlsx</span> (chuyển tab để xem từng mục).</p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-[1.2fr,1fr] lg:grid-cols-[1.4fr,1fr]">
              <div className="space-y-2.5">
                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  Video tổng quan (YouTube, no-cookie)
                </p>
                <motion.div
                  className="relative aspect-video w-full overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/70 shadow-lg shadow-slate-950/40"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-20%" }}
                >
                  <iframe
                    title="Tổng quan vũ khí Where Winds Meet (YouTube ID: YPNX4GaUzr8)"
                    src="https://www.youtube-nocookie.com/embed/YPNX4GaUzr8?rel=0&modestbranding=1&playsinline=1"
                    className="h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    sandbox="allow-scripts allow-same-origin allow-presentation"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </motion.div>
              </div>
              <div className="space-y-2.5">
                <p className="text-xs text-slate-500 uppercase tracking-wide">
                  Dữ liệu tier (đồng bộ từ Excel)
                </p>
                <motion.div
                  className="relative h-[520px] sm:h-[640px] md:h-[760px] lg:h-[840px] w-full overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/70 shadow-lg shadow-slate-950/40"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 }}
                  viewport={{ once: true, margin: "-20%" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-950/80" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3 px-4 pt-4 sm:px-5">
                      <div>
                        <p className="text-[11px] uppercase tracking-wide text-emerald-400/80">Tier list (nguồn Excel)</p>
                        <p className="text-xs text-slate-400">Dễ lướt nhanh; đồng bộ từ file Excel trong repo này.</p>
                      </div>
                    </div>
                    <div className="flex-1 overflow-y-auto px-4 pb-5 pt-3 sm:px-5">
                      <div className="sticky top-0 z-10 -mx-4 -mt-3 mb-3 bg-slate-900/95 px-4 py-3 backdrop-blur sm:-mx-5 sm:px-5">
                        <div className="flex flex-wrap gap-2">
                          {tierTabs.map((tab) => (
                            <button
                              key={tab.id}
                              type="button"
                              onClick={() => setActiveTab(tab.id)}
                              className={`group rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                                activeTab === tab.id
                                  ? "border-emerald-400/60 bg-emerald-600/15 text-emerald-200 shadow-inner shadow-emerald-900/40"
                                  : "border-slate-700/80 bg-slate-800/50 text-slate-300 hover:border-slate-500 hover:text-white"
                              }`}
                            >
                              <span className="block text-left leading-tight">
                                {tab.label}
                                <span className="block text-[10px] font-normal text-slate-400 group-hover:text-slate-300">
                                  {tab.helper}
                                </span>
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {activeTab === "weaponRankings" && (
                        <div className="space-y-3">
                          {sortedWeapons.map((weapon) => (
                            <div
                              key={weapon.name}
                              className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-4 shadow-inner shadow-slate-950/30"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3">
                                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950/50 ring-1 ring-slate-800/80 shadow-inner">
                                    {weapon.icon ? (
                                      <CdnImage
                                        src={weapon.icon}
                                        alt={`Biểu tượng ${weapon.name}`}
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 object-contain"
                                      />
                                    ) : (
                                      <span className="text-lg font-semibold text-emerald-200">
                                        {weapon.name[0]}
                                      </span>
                                    )}
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-[11px] uppercase tracking-wide text-slate-500">
                                      {weapon.weapon} · {weapon.range} · {weapon.type}
                                    </p>
                                    <h4 className="text-base font-semibold text-slate-100">{weapon.name}</h4>
                                    <p className="text-xs text-slate-300">
                                      Tuyến: <span className="text-emerald-200">{weapon.pathGuide}</span>
                                      {weapon.sectBoost ? (
                                        <span className="text-slate-400"> · Môn phái: {weapon.sectBoost}</span>
                                      ) : null}
                                    </p>
                                  </div>
                                </div>
                                <div className="flex flex-col items-end gap-1 text-[11px]">
                                  {weapon.vetRank ? (
                                    <span className={`rounded-full border px-3 py-1 font-semibold ${rankBadgeStyle(weapon.vetRank)}`}>
                                      Tổng {weapon.vetRank}
                                    </span>
                                  ) : null}
                                  <div className="flex gap-1">
                                    {weapon.pveRank ? (
                                      <span className={`rounded-full border px-2 py-1 font-semibold ${rankBadgeStyle(weapon.pveRank)}`}>
                                        PvE {weapon.pveRank}
                                      </span>
                                    ) : null}
                                    {weapon.pvpRank ? (
                                      <span className={`rounded-full border px-2 py-1 font-semibold ${rankBadgeStyle(weapon.pvpRank)}`}>
                                        PvP {weapon.pvpRank}
                                      </span>
                                    ) : null}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTab === "pathGuides" && (
                        <div className="space-y-3">
                          {pathGuides.map((path) => (
                            <div
                              key={path.pathGuide}
                              className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-4 shadow-inner shadow-slate-950/30"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3">
                                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950/50 ring-1 ring-slate-800/80 shadow-inner">
                                    {path.icon ? (
                                      <CdnImage
                                        src={path.icon}
                                        alt={`Biểu tượng ${path.pathGuide}`}
                                        width={48}
                                        height={48}
                                        className="h-12 w-12 object-contain"
                                      />
                                    ) : (
                                      <span className="text-lg font-semibold text-emerald-200">
                                        {path.pathGuide[0]}
                                      </span>
                                    )}
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-[11px] uppercase tracking-wide text-slate-500">
                                      {path.type} · {path.range}
                                    </p>
                                    <h4 className="text-base font-semibold text-slate-100">{path.pathGuide}</h4>
                                    {(path.primaryStyle || path.secondaryStyle) && (
                                      <p className="text-xs text-slate-300">
                                        Phong cách:{" "}
                                        {[path.primaryStyle, path.secondaryStyle].filter(Boolean).join(" + ")}
                                      </p>
                                    )}
                                    {path.description ? (
                                      <p className="text-sm text-slate-300 leading-relaxed">{path.description}</p>
                                    ) : null}
                                  </div>
                                </div>
                                {path.rankOnStat ? (
                                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${rankBadgeStyle(path.rankOnStat)}`}>
                                    Hạng {path.rankOnStat}
                                  </span>
                                ) : null}
                              </div>
                              <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] sm:grid-cols-3">
                                {statFields.map(({ key, label }) => {
                                  const value = path[key];
                                  if (typeof value !== "number") return null;
                                  const percent = Math.min(Math.max(value, 0), 5) / 5 * 100;
                                  return (
                                    <div key={key} className="space-y-1">
                                      <div className="flex items-center justify-between text-slate-400">
                                        <span>{label}</span>
                                        <span className="text-slate-200">{value.toFixed(1)}</span>
                                      </div>
                                      <div className="h-1.5 w-full rounded-full bg-slate-800/70">
                                        <div
                                          className="h-full rounded-full bg-gradient-to-r from-emerald-400/70 to-emerald-300/90"
                                          style={{ width: `${percent}%` }}
                                        />
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                              {(path.internalArts?.length || path.weaponSet || path.gearSet) && (
                                <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-400">
                                  {path.internalArts?.length ? (
                                    <span className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-slate-200">
                                      Nội công: {path.internalArts.join(", ")}
                                    </span>
                                  ) : null}
                                  {path.weaponSet ? (
                                    <span className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1">
                                      Bộ vũ khí: {path.weaponSet}
                                    </span>
                                  ) : null}
                                  {path.gearSet ? (
                                    <span className="rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1">
                                      Bộ trang bị: {path.gearSet}
                                    </span>
                                  ) : null}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTab === "combinations" && (
                        <div className="space-y-3">
                          {combinations.map((combo, idx) => (
                            <div
                              key={`${combo.weapon1}-${combo.weapon2 ?? "solo"}-${idx}`}
                              className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-4 shadow-inner shadow-slate-950/30"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="space-y-1">
                                  <p className="text-[11px] uppercase tracking-wide text-slate-500">
                                    {combo.type || "Build"} · {combo.range || "Linh hoạt"}
                                  </p>
                                  <h4 className="text-base font-semibold text-slate-100">
                                    {combo.weapon1}
                                    {combo.weapon2 ? ` + ${combo.weapon2}` : ""}
                                  </h4>
                                  <p className="text-xs text-slate-300">
                                    Tuyến: <span className="text-emerald-200">{combo.path || "—"}</span>
                                    {combo.pathRank ? <span className="text-slate-400"> ({combo.pathRank})</span> : null}
                                  </p>
                                </div>
                                <div className="flex gap-1 text-[11px]">
                                  {combo.totalPve ? (
                                    <span className={`rounded-full border px-2 py-1 font-semibold ${rankBadgeStyle(combo.totalPve)}`}>
                                      PvE {combo.totalPve}
                                    </span>
                                  ) : null}
                                  {combo.totalPvp ? (
                                    <span className={`rounded-full border px-2 py-1 font-semibold ${rankBadgeStyle(combo.totalPvp)}`}>
                                      PvP {combo.totalPvp}
                                    </span>
                                  ) : null}
                                </div>
                              </div>
                              {combo.note ? (
                                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{combo.note}</p>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTab === "internalArts" && (
                        <div className="space-y-3">
                          {internalArts.map((art) => (
                            <div
                              key={art.name}
                              className="rounded-xl border border-slate-800/60 bg-slate-900/60 p-4 shadow-inner shadow-slate-950/30"
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div className="space-y-1">
                                  <p className="text-[11px] uppercase tracking-wide text-slate-500">
                                    {[art.type1, art.type2, art.type3].filter(Boolean).join(" · ") || "Thụ động"}
                                  </p>
                                  <h4 className="text-base font-semibold text-slate-100">{art.name}</h4>
                                </div>
                              </div>
                              {art.description ? (
                                <p className="mt-2 text-sm text-slate-300 leading-relaxed">{art.description}</p>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
                <div className="text-xs text-slate-500">
                  Luồng dữ liệu: <span className="font-mono text-[11px] text-slate-300">ref-page/tier_list/tier_list.xlsx</span> →{" "}
                  <span className="font-mono text-[11px] text-slate-300">ref-page/tier_list/tier-list.json</span>. Cập nhật Excel, chạy extractor, rồi deploy lại.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
