import * as motion from "framer-motion/client";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { weapons } from "@/lib/weapons.vi";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Tier List PVP Where Winds Meet - Vũ khí đấu tay đôi",
  description:
    "Tier list PVP cho Where Winds Meet: xếp hạng vũ khí trong đấu tay đôi, giao tranh nhỏ và lối chơi cạnh tranh. Nắm vũ khí nào đang thống trị meta và cách build để thắng PVP.",
  alternates: buildHreflangAlternates("/guides/pvp-tier-list", { canonicalLanguage: "vi" }),
};

const pvpTiers = [
  {
    name: "S Tier",
    summary: "Meta áp đảo: cơ động cao hoặc khống chế khó chịu, quyết định nhịp trận.",
    style: "card-tier-s",
    color: "from-red-600 to-orange-600",
    tierId: "S",
  },
  {
    name: "A Tier",
    summary: "Cạnh tranh mạnh. Có thể thắng S-Tier nếu kỹ năng cao hoặc build khắc chế.",
    style: "card-tier-a",
    color: "from-orange-500 to-yellow-500",
    tierId: "A",
  },
  {
    name: "B Tier",
    summary: "Dùng được nhưng “fair”. Thiếu cơ chế “bất công”, cần kỹ năng nền chắc.",
    style: "card-tier-b",
    color: "from-blue-500 to-cyan-500",
    tierId: "B",
  },
];

export default function PVPTierListPage() {
  const roleLabelMap: Record<string, string> = {
    Assassin: "Sát thủ",
    Balanced: "Cân bằng",
    Bleed: "Chảy máu",
    Tank: "Chống chịu",
    Support: "Hỗ trợ",
    "Parry/Konter": "Đỡ đòn/Phản công",
    "Mobile Control / Picks": "Khống chế cơ động / Bắt lẻ",
    Control: "Khống chế",
  };

  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl shadow-black/50">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg1.webp"
            alt="Nền tier list PVP Where Winds Meet"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl font-serif">
            Ảnh chụp <span className="text-ink-red">meta PVP</span>
          </h1>
          <div className="max-w-3xl space-y-4 text-slate-300 leading-relaxed font-sans">
            <p>
              Meta hiện tại ưu tiên <span className="text-slate-100 font-medium">độ cơ động cao</span> và <span className="text-slate-100 font-medium">sát thương bùng nổ</span>.
              Phòng thủ tĩnh khó chống lại tốc độ của các sát thủ top meta.
            </p>
            <p>
              Danh sách này xếp hạng vũ khí theo hiệu quả trong đấu tay đôi cấp cao và giao tranh nhỏ.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <h2 className="text-2xl font-bold text-slate-100 font-serif">
            Tier List vũ khí
          </h2>
          <span className="text-xs text-slate-500 font-mono">Cập nhật giai đoạn Early Access</span>
        </div>

        <div className="grid gap-8">
          {pvpTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-6 ${tier.style}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${tier.color} text-3xl font-black text-white shadow-lg`}>
                  {tier.name.split(" ")[0]}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-100 font-serif">{tier.name}</h3>
                  <p className="text-sm text-slate-400 font-sans">{tier.summary}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {weapons
                  .filter((w) => w.tier === tier.tierId)
                  .map((weapon) => (
                    <Link
                      key={weapon.id}
                      href={`/vn${weapon.buildLink}`}
                      className="group relative flex items-center gap-4 rounded-xl border border-white/5 bg-white/5 p-3 transition-all hover:border-white/10 hover:bg-white/10 hover:translate-x-1"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-slate-950 border border-slate-800">
                        <Image
                          src={weapon.localIcon}
                          alt={weapon.name}
                          fill
                          className="object-contain p-1 group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-slate-200 group-hover:text-ink-gold transition-colors font-serif">
                            {weapon.name}
                          </h4>
                        </div>
                        <span className={`inline-block mt-1 rounded px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${weapon.role === "Assassin" ? "bg-red-500/10 text-red-400" :
                          weapon.role === "Control" ? "bg-purple-500/10 text-purple-400" :
                            weapon.role === "Tank" ? "bg-blue-500/10 text-blue-400" :
                              weapon.role === "Bleed" ? "bg-orange-500/10 text-orange-400" :
                                "bg-emerald-500/10 text-emerald-400"
                          }`}>
                          {roleLabelMap[weapon.role] ?? weapon.role}
                        </span>
                      </div>
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        <span className="text-slate-400">→</span>
                      </div>
                    </Link>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="card-wuxia p-6 space-y-4">
          <h3 className="text-lg font-bold text-ink-gold font-serif">Vì sao S-Tier?</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            <span className="text-slate-100 font-medium">Song Đao</span> và <span className="text-slate-100 font-medium">Ô</span> đang cầm nhịp trận.
            Song Đao vào-ra tùy ý, khó bị giữ chân nếu không có khống chế cứng.
            Ô cho khả năng khống chế tầm xa ổn định, buộc đối thủ chơi phòng thủ.
          </p>
        </div>
        <div className="card-wuxia p-6 space-y-4">
          <h3 className="text-lg font-bold text-ink-gold font-serif">Những pick tiềm năng</h3>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            Build <span className="text-slate-100 font-medium">Kiếm + Thương</span> sát thương chảy máu có DPS cực cao, nhưng yêu cầu duy trì dính đòn hoàn hảo.
            Nếu meta chuyển sang giao tranh lâu, chúng có thể lên S-Tier ngay.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-900/40 to-slate-900/40 p-8 text-center border border-emerald-500/20">
        <h2 className="text-2xl font-bold text-slate-100 mb-2 font-serif">Cần build cụ thể?</h2>
        <p className="text-slate-400 mb-6 font-sans">Xem phân tích chỉ số, kỹ năng và combo chi tiết.</p>
        <Link
          href="/vn/guides/builds"
          className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition-all hover:bg-emerald-500 hover:scale-105"
        >
          Xem tất cả build
        </Link>
      </section>
    </article>
  );
}
