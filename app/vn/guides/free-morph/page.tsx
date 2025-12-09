import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Free Morph – Cách mở và dùng Mystic Skill (Where Winds Meet)",
  description:
    "Mở Free Morph trong Where Winds Meet bằng cách đỡ cú đá xoay của Tian Ying (Challenge). Xem chi phí, hồi chiêu, thưởng tier và cách đưa Mystic khống chế đơn mục tiêu này vào build.",
  alternates: buildHreflangAlternates("/guides/free-morph", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Free Morph – Cách mở và dùng Mystic Skill (Where Winds Meet)",
    description:
      "Hướng dẫn mở Free Morph: đỡ đá xoay của Tian Ying, hiểu thưởng tier, chi phí/hồi chiêu và cách dùng trong PvE/PvP.",
    url: "https://wherewindsmeet.org/vn/guides/free-morph",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://wherewindsmeet.org/guides/free-morph/free-morph-icon.webp",
        width: 256,
        height: 256,
        alt: "Biểu tượng kỹ năng Free Morph",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Free Morph – Cách mở và dùng Mystic Skill (Where Winds Meet)",
    description:
      "Cách mở Free Morph, hiểu thưởng tier và lồng vào build PvE/PvP như một Mystic khống chế/nhấc đối thủ.",
    images: ["https://wherewindsmeet.org/guides/free-morph/free-morph-icon.webp"],
  },
};

const quickFacts = [
  { label: "Loại", value: "Mystic tấn công – Khống chế đơn mục tiêu" },
  { label: "Chi phí / Hồi chiêu", value: "35 Thể lực • 3s hồi (Tier 4: -5 Thể lực)" },
  { label: "Hiệu ứng chính", value: "Hất tung + combo đá giữa không trung, giữ mục tiêu bay, kết thúc với đòn AoE nhỏ" },
  { label: "Thưởng tier", value: "Tier 3: +20% sát thương vs HP Shield | Tier 4: -5 Thể lực" },
];

const unlockSteps = [
  {
    title: "Mở Challenge: Tian Ying",
    desc: "Vào bản Challenge của Tian Ying. Cần đến Pha 2 nơi cô bắt đầu đá xoay.",
  },
  {
    title: "Đỡ cú đá xoay",
    desc: "Canh parry/deflect các chuỗi đá xoay ở Pha 2. Đỡ đủ sẽ mở Free Morph.",
  },
  {
    title: "Nhận kỹ năng",
    desc: "Khi đủ lần deflect, bạn nhận Mystic. Nếu hụt, restart và chỉ tập trung đỡ chuỗi đá xoay.",
  },
];

const tierBonuses = [
  {
    tier: "Base",
    effect: "Nhảy lên, hất mục tiêu, combo đá trên không, kết thúc với AoE nhỏ. Khống chế/nhấc đơn mục tiêu, sát thương lan nhẹ cuối chiêu.",
  },
  {
    tier: "Tier 3",
    effect: "+20% sát thương lên kẻ có HP Shield.",
  },
  {
    tier: "Tier 4",
    effect: "Giảm 5 Thể lực tiêu hao, dễ spam hơn.",
  },
];

const usageTips = [
  "Dùng sau khi đã choáng/hất tung để kéo dài thời gian bay, khóa hành động (PvE/PvP).",
  "Kết hợp buff tiết kiệm Inspiration hoặc hồi Thể lực để xoay chiêu liên tục.",
  "Ưu tiên boss đơn mục tiêu; tránh xài giữa bầy đông dễ bị ngắt.",
  "Nếu mục tiêu có HP Shield, hãy dùng trong cửa sổ khiên để tận dụng thưởng Tier 3.",
];

export default function FreeMorphPage() {
  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-950/80 p-6 sm:p-8 shadow-lg shadow-slate-950/60">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg3.webp"
            alt="Phông vách núi wuxia"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-wide text-emerald-300">Mystic Skill</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">Free Morph – Cách mở & sử dụng</h1>
            <p className="max-w-3xl text-sm sm:text-base text-slate-300 leading-relaxed">
              Học Free Morph bằng cách đỡ chuỗi đá xoay của Tian Ying trong bản Challenge. Hiểu hiệu ứng nhấc mục tiêu, thưởng tier và cách gắn vào build PvE/PvP.
            </p>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 shadow-inner shadow-slate-950/40">
            <Image
              src="/guides/free-morph/free-morph-icon.webp"
              alt="Biểu tượng Free Morph"
              width={72}
              height={72}
              className="h-16 w-16 rounded-xl bg-slate-800/70 border border-slate-700"
            />
            <div className="text-sm text-slate-200">
              <p className="font-semibold text-slate-50">Free Morph</p>
              <p className="text-xs text-slate-400">Mystic tấn công • Khống chế đơn mục tiêu</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-slate-50">Thông tin nhanh</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {quickFacts.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.label}</p>
              <p className="text-sm text-slate-200 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h2 className="text-2xl font-bold text-slate-50">Cách mở Free Morph</h2>
          <span className="text-xs text-slate-500">Nguồn: Challenge Tian Ying (deflect đá xoay)</span>
        </div>
        <ol className="space-y-3 list-decimal list-inside text-sm text-slate-300">
          {unlockSteps.map((step) => (
            <li key={step.title}>
              <p className="font-semibold text-slate-50">{step.title}</p>
              <p className="text-slate-300">{step.desc}</p>
            </li>
          ))}
        </ol>
        <div className="rounded-2xl border border-amber-500/30 bg-amber-900/20 p-4 text-xs text-amber-100">
          Mẹo: nếu trượt thời điểm parry, hãy restart và chỉ tập trung đỡ chuỗi đá xoay. Kỹ năng mở khi bạn deflect đủ số lần ở Pha 2.
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Chi tiết & thưởng tier</h2>
        <div className="space-y-3">
          {tierBonuses.map((item) => (
            <div key={item.tier} className="rounded-xl border border-slate-800/80 bg-slate-900/70 p-4">
              <p className="text-xs uppercase tracking-wide text-slate-500">{item.tier}</p>
              <p className="text-sm text-slate-200">{item.effect}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">
          Chi phí/hồi chiêu dựa trên dữ liệu Tier 4 từ Game8, allthings.how. Các tier trước có cùng hồi chiêu nhưng tốn Thể lực cao hơn cho đến khi đạt Tier 4.
        </p>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Cách dùng Free Morph trong build</h2>
        <ul className="space-y-2 text-sm text-slate-300">
          {usageTips.map((tip) => (
            <li key={tip}>• {tip}</li>
          ))}
        </ul>
        <div className="rounded-2xl border border-emerald-600/30 bg-emerald-950/30 p-4 text-sm text-emerald-100">
          Kết hợp với công cụ nhấc/giữ mục tiêu khác (Talon Strike, Yaksha Rush) trong PvE boss; hoặc dùng như khống chế bất ngờ trong PvP sau khi dụ đối thủ whiff. Tier 4 giảm Thể lực giúp kẹp giữa kỹ năng cơ động an toàn hơn.
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-slate-50">Tài nguyên liên quan</h2>
        <ul className="space-y-2 text-sm text-emerald-200">
          <li>
            <Link href="/vn/guides/gift-of-gab" className="underline underline-offset-4 hover:text-emerald-100">
              Gift of Gab – farm điểm Scholar & kỹ năng đối thoại
            </Link>
          </li>
          <li>
            <Link href="/vn/guides/weapons" className="underline underline-offset-4 hover:text-emerald-100">
              Bách khoa vũ khí – tìm combo khống chế đơn mục tiêu
            </Link>
          </li>
          <li>
            <Link href="/vn/guides/builds" className="underline underline-offset-4 hover:text-emerald-100">
              Builds – archetype PvE/PvP cập nhật theo patch
            </Link>
          </li>
        </ul>
      </section>
    </article>
  );
}
