import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { weapons } from "@/lib/weapons.vi";
import { weaponDetails } from "@/lib/weaponDetails.vi";
import { buildHreflangAlternates } from "@/lib/hreflang";
import type { WeaponId } from "@/lib/weapons";

export function generateWeaponMetadata(id: WeaponId): Metadata {
  const weapon = weapons.find((w) => w.id === id);
  if (!weapon) return {};

  return {
    title: `${weapon.name} – hướng dẫn vũ khí | Where Winds Meet`,
    description: `Tổng quan cảm giác chơi, điểm mạnh/yếu và cách liên kết ${weapon.name} với build/tier list (Tiếng Việt).`,
    alternates: buildHreflangAlternates(`/guides/weapons/${weapon.id}`, { canonicalLanguage: "vi" }),
  };
}

export function WeaponDetail({ weaponId }: { weaponId: WeaponId }) {
  const weapon = weapons.find((w) => w.id === weaponId);
  if (!weapon) return null;

  const detail = weaponDetails[weapon.id];

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

  const difficultyLabel =
    detail?.difficulty === "Easy"
      ? "Dễ"
      : detail?.difficulty === "Moderate"
        ? "Trung bình"
        : detail?.difficulty === "Advanced"
          ? "Nâng cao"
          : "";

  return (
    <article className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:p-8">
        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {weapon.name} trong Where Winds Meet.
          </h1>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">
            Vai trò: {roleLabelMap[weapon.role] ?? weapon.role}
          </p>
          {detail ? (
            <>
              <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
                {detail.slogan}
              </p>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                Độ khó: {difficultyLabel} · Phù hợp với: {detail.recommendedFor}
              </p>
            </>
          ) : null}
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            {weapon.description}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Hãy dùng trang này như “tài liệu thực chiến” đi kèm{" "}
            <Link
              href="/vn/guides/tier-list"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              tier list tổng
            </Link>{" "}
            và{" "}
            <Link
              href="/vn/guides/builds"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              hướng dẫn build
            </Link>
            . Khi patch làm số liệu thay đổi, “nhịp” và cảm giác của {weapon.name} thường vẫn giữ nguyên—quan trọng là bạn có hợp nhịp đó hay không.
          </p>
          <p className="text-xs text-slate-400">
            Ghi chú: nội dung dựa trên showcase chính thức và kinh nghiệm ARPG, tập trung mô tả cảm giác chơi/vai trò thay vì con số chính xác. Luôn ưu tiên trải nghiệm trong game và patch notes.
          </p>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <Image
              src={weapon.officialArt}
              alt={weapon.name}
              fill
              className="object-contain object-center"
              sizes="(min-width: 1280px) 32rem, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          <p className="text-xs text-slate-400">
            Artwork/chuyển động dựa trên showcase chính thức. Hình ảnh có thể thay đổi theo patch hoặc cosmetics.
          </p>
        </div>
      </section>

      {detail ? (
        <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Cách {weapon.name} thường được vận hành.
          </h2>
          {detail.positioning.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-slate-200 sm:text-base">
              {paragraph}
            </p>
          ))}
        </section>
      ) : null}

      {detail ? (
        <section className="grid gap-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Điểm mạnh
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              {detail.pros.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
              Hạn chế / trade-off
            </h2>
            <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
              {detail.cons.map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-rose-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {detail ? (
        <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Bài tập luyện nhanh cho {weapon.name}
          </h2>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Các bài tập nhỏ cho nội dung “ít áp lực” để bạn quen nhịp, sau đó mang sang boss/endgame.
          </p>
          <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
            {detail.practiceTips.map((tip, index) => (
              <li key={index} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}

