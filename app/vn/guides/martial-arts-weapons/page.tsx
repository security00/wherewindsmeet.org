import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { martialArtPaths, martialArtWeapons } from "@/lib/martialArts";

export const metadata: Metadata = {
  title: "Danh sách vũ khí võ học Where Winds Meet & cách mở",
  description:
    "Bảng so sánh 12 vũ khí võ học với hình ảnh, đường phái, kỹ năng đặc trưng và cách mở (Trộm chiêu hoặc gia nhập môn phái).",
  alternates: {
    canonical: "https://wherewindsmeet.org/vn/guides/martial-arts-weapons",
  },
};

const pathLookup = Object.fromEntries(
  martialArtPaths.map((path) => [path.id, path]),
);

export default function MartialArtsWeaponsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg5.webp"
            alt="Nền võ học Where Winds Meet"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">
            Tham chiếu võ học
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Toàn bộ vũ khí võ học: ảnh, kỹ năng, đường mở.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Mỗi võ học gắn với một vũ khí. Bảng dưới bám bố cục wiki: icon, tag phái, kỹ năng chính và cách mở. Kết hợp với{" "}
            <Link
              href="/vn/guides/skill-theft"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              hướng dẫn Trộm chiêu
            </Link>{" "}
            để đi lén, và{" "}
            <Link
              href="/vn/guides/sects"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              giới thiệu môn phái
            </Link>{" "}
            nếu muốn gia nhập thay vì trộm.
          </p>
          <p className="text-xs text-slate-400 sm:text-sm">
            Mẹo: bạn có thể mang hai võ học cùng lúc. Phối công + hỗ trợ (ví dụ Silkbind - Deluge + Stonesplit - Might) để vừa sống vừa giúp đội.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Các đường phái (paths) tổng quan.
          </h2>
          <p className="text-xs text-slate-400">
            6 phái · 12 vũ khí · thiên hướng công/thủ/hỗ trợ
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {martialArtPaths.map((path) => (
            <div
              key={path.id}
              className="flex h-full flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 shadow-sm shadow-slate-950/60"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                    Path
                  </p>
                  <h3 className="text-lg font-semibold text-slate-50">
                    {path.name}
                  </h3>
                </div>
                <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-200 ring-1 ring-emerald-500/40">
                  {path.relatedWeapons.length} vũ khí
                </span>
              </div>
              <p className="text-sm text-slate-200">{path.focus}</p>
              <p className="text-xs text-slate-400">{path.flavor}</p>
              <div className="text-xs text-slate-300">
                <span className="font-semibold text-emerald-200">Kết hợp:</span>{" "}
                {path.relatedWeapons.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Danh sách vũ khí võ học (kèm cách mở).
          </h2>
          <p className="text-xs text-slate-400">
            Ảnh + phái + kỹ năng chính + cách nhận
          </p>
        </div>
        <p className="text-sm text-slate-300">
          Đa số mở bằng nhiệm vụ Trộm chiêu (lén, quan sát, mini-game) hoặc gia nhập môn phái đủ lâu để học. Qi Sheng cũng cho một vài vũ khí sau khi nộp Oddity đầu tiên. Mang sẵn Loong Key cho thánh địa khóa.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-[900px] border-separate border-spacing-y-3 text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-wide text-slate-300">
                <th className="px-4">Vũ khí</th>
                <th className="px-4">Path</th>
                <th className="px-4">Kỹ năng tiêu biểu</th>
                <th className="px-4">Cách mở</th>
              </tr>
            </thead>
            <tbody>
              {martialArtWeapons.map((weapon) => {
                const path = pathLookup[weapon.pathId];
                return (
                  <tr key={weapon.id} className="align-top">
                    <td className="rounded-l-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-20 w-28 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                          <Image
                            src={weapon.image}
                            alt={weapon.name}
                            fill
                            sizes="112px"
                            className="object-contain p-2"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-50">
                            {weapon.name}
                          </p>
                          <p className="text-xs text-emerald-200">
                            {path?.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <p className="text-sm text-slate-200">{path?.focus}</p>
                      <p className="text-xs text-slate-400">{path?.flavor}</p>
                    </td>
                    <td className="border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <div className="space-y-1 text-slate-200">
                        <div>
                          <span className="font-semibold text-emerald-200">
                            Chính:
                          </span>{" "}
                          {weapon.mainSkills.join(", ")}
                        </div>
                        <div>
                          <span className="font-semibold text-emerald-200">
                            Cơ bản:
                          </span>{" "}
                          {weapon.basicSkills.join(", ")}
                        </div>
                        <div>
                          <span className="font-semibold text-emerald-200">
                            Nạp:
                          </span>{" "}
                          {weapon.chargedSkills.join(", ")}
                        </div>
                      </div>
                    </td>
                    <td className="rounded-r-2xl border border-slate-800 bg-slate-950/80 px-4 py-3">
                      <ul className="list-disc space-y-1 pl-4 text-slate-200">
                        {weapon.unlockMethods.map((method) => (
                          <li key={method}>{method}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-50">
            Quy trình mở thực tế
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <span className="font-semibold text-emerald-200">Trộm chiêu:</span>{" "}
              Lén vào thánh địa, dùng Loong Key nếu cần, quan sát sư phụ và thắng mini-game vòng thời gian để sao chép võ.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">Gia nhập/rời phái:</span>{" "}
              Có thể tạm vào một phái lấy vũ khí rồi đổi phe sau. Kiểm tra mục manh mối môn phái và di chuyển nhận thư mời.
            </li>
            <li>
              <span className="font-semibold text-emerald-200">Oddity & thư:</span>{" "}
              Nộp Oddity đầu cho Qi Sheng hoặc kiểm tra hòm thư; vài vũ khí được phát miễn phí.
            </li>
          </ul>
          <Link
            href="/vn/guides/skill-theft"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Xem hướng dẫn Trộm chiêu →
          </Link>
        </div>
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-50">
            Nâng cấp võ học
          </h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              Dùng Zhou Coin và Training Item để tăng cấp; không vượt cấp nhân vật nếu chưa breakthrough.
            </li>
            <li>
              Breakthrough mỗi 10 cấp cần Custom Tips (mua bằng Jade Fish ở Activity Shop) + coin + Training Item.
            </li>
            <li>
              Nâng cấp tăng sát thương lẫn hiệu ứng phụ (khiên/hồi máu), nên vũ khí hỗ trợ cũng mạnh hơn rõ rệt.
            </li>
          </ul>
          <p className="text-xs text-slate-400">
            Lên kế hoạch: farm Training Item từ quái thường trong lúc xếp hàng phó bản Trộm chiêu/phái để tránh bị chặn cấp.
          </p>
        </div>
      </section>
    </article>
  );
}

