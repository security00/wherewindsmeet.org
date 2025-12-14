import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { BossId } from "@/lib/bosses";
import { bosses } from "@/lib/bosses.vi";
import { buildHreflangAlternates } from "@/lib/hreflang";

export function generateBossMetadata(id: BossId): Metadata {
  const boss = bosses.find((b) => b.id === id);
  if (!boss) return {};

  return {
    title: `${boss.name} – tổng quan trận boss | Where Winds Meet`,
    description: `Tóm tắt trận ${boss.name}: bối cảnh, nhịp giao tranh và gợi ý chuẩn bị vũ khí/build (Tiếng Việt).`,
    alternates: buildHreflangAlternates(`/guides/bosses/${boss.id}`, { canonicalLanguage: "vi" }),
  };
}

export function BossDetail({ bossId }: { bossId: BossId }) {
  const boss = bosses.find((b) => b.id === bossId);
  if (!boss) return null;

  const base = "/vn";

  return (
    <article className="space-y-10">
      <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] sm:p-8">
        <div className="space-y-4">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            {boss.name} trong Where Winds Meet.
          </h1>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-300">
            Loại trận: {boss.encounterType}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            {boss.tagline}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            {boss.description}
          </p>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Đây là trang tổng quan “ít spoiler”, dùng để đặt kỳ vọng về tông truyện và cảm giác giao tranh. Khi cần chuẩn bị build, hãy dùng kèm{" "}
            <Link
              href={`${base}/guides/weapons`}
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              tổng quan vũ khí
            </Link>{" "}
            và{" "}
            <Link
              href={`${base}/guides/builds`}
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              hướng dẫn build
            </Link>
            . Patch notes có thể thay đổi cơ chế/độ khó, nhưng “nhịp” và chủ đề của {boss.name} thường vẫn nhận ra.
          </p>
          <p className="text-xs text-slate-400">
            Ghi chú: nội dung dựa trên tư liệu chính thức và kinh nghiệm ARPG, ưu tiên mô tả cảm giác & bối cảnh thay vì số liệu/khung hình.
          </p>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
            <video
              src={boss.backgroundVideo}
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover opacity-75"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="pointer-events-none absolute bottom-3 left-3 h-10 w-40 sm:h-12 sm:w-48">
              <Image
                src={boss.titleImage}
                alt={boss.name}
                fill
                sizes="192px"
                className="object-contain object-left"
              />
            </div>
          </div>
          <p className="text-xs text-slate-400">
            Ảnh/clip minh họa dựa trên showcase chính thức của Where Winds Meet. Hình ảnh có thể thay đổi theo patch hoặc cosmetics.
          </p>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Cảm giác trận đấu.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Hãy xem {boss.name} như một “bài test về tông”: arena, nhạc, nhịp camera và lời thoại NPC thường báo trước đây là duel áp lực cao, trận nhiều cơ chế, hay một thử thách mang màu sắc nội tâm. Nắm đúng kỳ vọng sẽ giúp bạn chọn vũ khí và nhịp chơi phù hợp.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Chuẩn bị: vũ khí & build.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Đây là trang tham chiếu, không phải “kịch bản bắt buộc”. Trước khi vào {boss.name}, hãy nghĩ xem bạn chơi tốt hơn trong tình huống nào: kèo cần burst, kèo cần giữ khoảng cách, hay kèo cần sống sót dài hơi.
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200 sm:text-base">
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Mở{" "}
              <Link
                href={`${base}/guides/weapons`}
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                tổng quan vũ khí
              </Link>{" "}
              để chọn vũ khí hợp nhịp: an toàn/đỡ đòn, cơ động áp sát, hay kiểm soát tầm.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Xem{" "}
              <Link
                href={`${base}/guides/builds`}
                className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
              >
                hướng dẫn build
              </Link>{" "}
              và ưu tiên build có đủ “độ thoải mái” để học pattern: sustain, i-frame, hoặc công cụ reset nhịp.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>
              Lần clear đầu là để trinh sát: ghi lại điều làm bạn mất nhịp nhất (camera, adds, cửa sổ burst) rồi tinh chỉnh build theo đúng điểm đó.
            </span>
          </li>
        </ul>
        <p className="text-xs text-slate-400">
          Nếu trải nghiệm thực tế khác với mô tả, hãy tin quan sát của bạn trước. Trang này nhằm giúp bạn “đỡ bỡ ngỡ” khi vào trận.
        </p>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Xem {boss.name} chuyển động.
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Clip chính thức giúp bạn nắm nhịp và “khí chất” của boss mà không cần xem một full clear dài. Đừng cố học thuộc từng đòn; hãy quan sát tốc độ chain, khoảng cách camera và mức độ trừng phạt khi bạn đứng sai vị trí.
        </p>
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
          <video
            src={boss.backgroundVideo}
            controls
            muted
            loop
            className="h-full w-full"
          />
        </div>
        <div className="space-y-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
          <p>
            Khi xem, bạn có thể để ý: boss mở giao tranh từ đâu, có bao nhiêu cửa sổ an toàn để phản công, và khi nào nên reset thay vì cố “tham đòn”.
          </p>
          <p>
            Nếu video không tải, có thể URL hosting đã thay đổi kể từ lần trang được cập nhật gần nhất.
          </p>
        </div>
      </section>
    </article>
  );
}

