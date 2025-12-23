import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

const redditThreadUrl =
  "https://www.reddit.com/r/wherewindsmeet_/comments/1pj4qbn/daily_assistant_desktop_widget/";

const breadcrumbStructuredData = {
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
      name: "Desktop Widget",
      item: `${baseUrl}/vn/guides/desktop-widget`,
    },
  ],
};

export const metadata: Metadata = {
  title: "Where Winds Meet desktop widget – Thiết lập daily assistant",
  description:
    "Giải thích “Where Winds Meet desktop widget” thực chất là gì, kèm cách setup nhanh: dùng Reset Timer + Checklist làm daily assistant gọn nhẹ trên PC.",
  alternates: buildHreflangAlternates("/guides/desktop-widget", { canonicalLanguage: "vi" }),
};

export default function DesktopWidgetGuidePage() {
  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbStructuredData]),
        }}
      />

      <header className="relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-2xl shadow-slate-950/40 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg4.webp"
            alt="Where Winds Meet daily assistant (desktop widget) nền"
            fill
            className="object-cover opacity-35"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        </div>

        <div className="relative space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Guide · Tiện ích</p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Where Winds Meet <span className="text-ink-gold">desktop widget</span> (daily assistant)
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-slate-200">
            Từ khóa này tăng mạnh vì nhiều người thấy cụm “Daily Assistant Desktop Widget” nhưng không tìm được bản tải
            cho PC. Thực tế, đa số trường hợp là <strong>widget trên màn hình chính của điện thoại</strong>. Còn trên PC,
            giải pháp gọn nhất là ghim một cửa sổ đếm reset + một checklist routine.
          </p>

          <div className="flex flex-wrap gap-2 pt-2 text-sm">
            <Link
              href="/vn/tools/reset-timer"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-semibold text-emerald-100 hover:border-emerald-400/70 hover:text-emerald-50"
            >
              Reset timer →
            </Link>
            <Link
              href="/vn/tools/checklist"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
            >
              Checklist daily/weekly →
            </Link>
            <Link
              href="/vn/tools/interactive-map"
              className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 font-semibold text-slate-200 hover:border-emerald-400/60 hover:text-emerald-100"
            >
              Bản đồ tương tác →
            </Link>
          </div>
        </div>
      </header>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Tóm tắt nhanh</h2>
        <ul className="space-y-3 text-sm leading-relaxed text-slate-300">
          <li>
            <span className="font-semibold text-slate-100">Không có “desktop widget” chính thức cho Windows</span> mà ai
            cũng tải được ngay. Nhiều báo cáo cho thấy đó là widget đi kèm bản mobile.
          </li>
          <li>
            <span className="font-semibold text-slate-100">Phương án PC tốt nhất:</span> tạo cửa sổ app/shortcut cho{" "}
            <Link href="/vn/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
              Reset timer
            </Link>{" "}
            và (tuỳ chọn){" "}
            <Link href="/vn/tools/checklist" className="text-emerald-300 hover:text-emerald-200">
              Checklist
            </Link>
            .
          </li>
        </ul>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">Vì sao từ “desktop” gây hiểu nhầm?</h2>
        <p className="text-sm leading-relaxed text-slate-300">
          Trong một thread Reddit ngày 10/12/2025, người chơi nói rõ: chữ “DESKTOP” gây nhầm, thực tế là{" "}
          <strong>widget trên điện thoại</strong> (Android) và có thể cần đăng nhập bản mobile để cấu hình.{" "}
          <a
            href={redditThreadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200"
          >
            Xem thảo luận trên Reddit →
          </a>
        </p>
        <p className="text-xs leading-relaxed text-slate-400">
          Lưu ý: nội dung Reddit là thông tin cộng đồng và có thể thay đổi.
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-daily-assistant-widget.png"
              alt="Màn hình trong game hiển thị Daily Assistant / Desktop Widget và ghi chú cần tải bản mobile"
              width={1685}
              height={917}
              className="h-auto w-full"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              Ví dụ màn hình có chữ “Desktop Widget” nhưng lại hướng người chơi sang bản mobile. Ảnh được dùng với sự cho
              phép.
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-widget-screenshot.jpeg"
              alt="Danh sách widget trên Android có Where Winds Meet"
              width={1080}
              height={2340}
              className="mx-auto h-auto w-full max-w-[360px]"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              Ví dụ trong thư viện widget Android. Nếu bạn không thấy, có thể do khu vực/phiên bản app. Ảnh được dùng
              với sự cho phép.
            </figcaption>
          </figure>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
          <h3 className="text-lg font-bold text-slate-100">Lỗi thường gặp</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
            <li>
              <span className="font-semibold text-slate-100">App mobile không có ở quốc gia/khu vực của bạn:</span> không
              cài được app thì cũng sẽ không có widget.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Không thấy mục “Widgets” trên Google Play:</span> widget có
              thể phụ thuộc thiết bị/phiên bản/khu vực.
            </li>
            <li>
              <span className="font-semibold text-slate-100">Widget không cấu hình được:</span> hãy mở game mobile và
              đăng nhập 1 lần rồi thử lại.
            </li>
          </ul>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-widget-region-availability.png"
              alt="Trang Google Play hiển thị Where Winds Meet không khả dụng ở quốc gia của bạn"
              width={1080}
              height={1500}
              className="mx-auto h-auto w-full max-w-[360px]"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              Ví dụ: app mobile có thể bị giới hạn theo khu vực, kéo theo widget cũng không xuất hiện. Ảnh được dùng với
              sự cho phép.
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60">
            <CdnImage
              src="/guides/desktop-widget/reddit-mobile-launch-region.png"
              alt="Trang Google Play có thông báo về khu vực và tab Widgets"
              width={1080}
              height={2219}
              className="mx-auto h-auto w-full max-w-[360px]"
            />
            <figcaption className="p-4 text-xs leading-relaxed text-slate-400">
              Trên Android, trang Play Store có thể có tab “Widgets”. Nếu không thấy, có thể phiên bản/thiết bị/khu vực
              của bạn chưa hỗ trợ widget. Ảnh được dùng với sự cho phép.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-50">PC/Mac: dựng “daily assistant” gọn sạch</h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300">
          Nếu bạn chơi trên PC/console, mục tiêu thường là: nhìn được reset và tick routine nhanh. Chỉ cần 1–2 cửa sổ
          nhỏ là đủ.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">Windows (Edge/Chrome)</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
              <li>
                Mở{" "}
                <Link href="/vn/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
                  Reset timer
                </Link>
                .
              </li>
              <li>
                Tạo shortcut/app window (tuỳ browser): Install app hoặc Create shortcut →{" "}
                <span className="text-slate-100">Open as window</span>.
              </li>
              <li>Pin vào taskbar và giữ cửa sổ nhỏ ở góc hoặc màn hình phụ.</li>
              <li>
                (Tuỳ chọn) mở thêm{" "}
                <Link href="/vn/tools/checklist" className="text-emerald-300 hover:text-emerald-200">
                  Checklist
                </Link>{" "}
                để tick routine.
              </li>
            </ol>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
            <h3 className="text-lg font-bold text-slate-100">macOS</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-300">
              <li>
                Mở{" "}
                <Link href="/vn/tools/reset-timer" className="text-emerald-300 hover:text-emerald-200">
                  Reset timer
                </Link>
                .
              </li>
              <li>
                Dùng tính năng Add to Dock / Create shortcut → Open as window (tuỳ browser).
              </li>
              <li>Đặt cửa sổ cạnh game hoặc tách sang một Space riêng.</li>
            </ol>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-xs leading-relaxed text-emerald-100">
          Riêng tư: Reset timer và Checklist chạy trong trình duyệt và lưu cục bộ (không cần tài khoản). Nếu bạn xoá dữ
          liệu trình duyệt, checklist sẽ bị reset.
        </div>
      </section>
    </article>
  );
}
