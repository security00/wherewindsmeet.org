import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ItemTabs from "../../../guides/items/ItemTabs";
import { itemCategories } from "../../../guides/items/data";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Chỉ mục vật phẩm Where Winds Meet – nguyên liệu, tiêu hao, hiếm",
  description:
    "Chỉ mục vật phẩm Where Winds Meet với tab danh mục, hình ảnh, công dụng và cách kiếm nhanh, bám theo bố cục wiki.",
  alternates: buildHreflangAlternates("/guides/items", { canonicalLanguage: "vi" }),
};

export default function ItemsPage() {
  return (
    <article className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg2.webp"
            alt="Nền vật phẩm Where Winds Meet"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/30" />
        </div>

        <div className="relative space-y-3">
          <p className="text-xs uppercase tracking-wide text-emerald-300">
            Vật phẩm & danh mục
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Chỉ mục vật phẩm Where Winds Meet với tab tra nhanh.
          </h1>
          <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
            Theo bố cục wiki, vật phẩm được chia theo tab bấm nhanh. Mỗi tab hiển thị vật phẩm tiêu biểu, công dụng và cách lấy. Kết hợp với{" "}
            <Link
              href="/vn/guides/martial-arts-weapons"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              bảng Vũ khí/Võ học
            </Link>{" "}
            và{" "}
            <Link
              href="/vn/guides/skill-theft"
              className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
            >
              hướng dẫn Trộm chiêu
            </Link>{" "}
            để lên lộ trình farm tài nguyên.
          </p>
        </div>
      </section>

      <ItemTabs categories={itemCategories} />

      <section className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 md:grid-cols-2">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Mẹo dùng</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Ưu tiên gom nguyên liệu và nguyên liệu phát triển trước—chúng khóa tiến độ vũ khí và tâm pháp.</li>
            <li>Chuẩn bị 2-3 món ăn nhóm; ăn trước khi party để tăng độ “tha thứ” khi sai sót.</li>
            <li>Dùng vật phẩm thường làm quà/thiện cảm để mở encounter bất ngờ và giảm giá.</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-50">Hướng dẫn liên quan</h3>
          <ul className="space-y-2 text-sm text-emerald-200">
            <li>
              <Link
                href="/vn/guides/new-players"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Lộ trình tân thủ: khám phá khôn ngoan & thứ tự tài nguyên
              </Link>
            </li>
            <li>
              <Link
                href="/vn/guides/weapons"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Tổng quan vũ khí: chọn vũ khí chính & build
              </Link>
            </li>
            <li>
              <Link
                href="/vn/guides/bosses"
                className="underline underline-offset-4 hover:text-emerald-100"
              >
                Boss: checklist vật phẩm trước trận
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </article>
  );
}
