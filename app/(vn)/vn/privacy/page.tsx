import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/hreflang";
export const metadata: Metadata = {
  title: "Chính sách quyền riêng tư Where Winds Meet Hub",
  description:
    "Chính sách quyền riêng tư cho hub fan Where Winds Meet: dữ liệu tối thiểu thu thập, nhúng video và cách liên hệ support@wherewindsmeet.org.",
  alternates: buildHreflangAlternates("/privacy", { canonicalLanguage: "vi" }),
};

export default function PrivacyPage() {
  return (
    <article className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-sm leading-relaxed text-slate-200 shadow-lg shadow-slate-950/60 sm:p-8">
      <header className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Chính sách quyền riêng tư (fan hub Where Winds Meet)
        </h1>
        <p className="text-sm text-slate-300">
          Trang này giải thích dữ liệu tối thiểu mà hub fan thu thập khi bạn xem guide, xem video nhúng, hoặc liên hệ{" "}
          <a href="mailto:support@wherewindsmeet.org" className="text-emerald-300 hover:text-emerald-200">
            support@wherewindsmeet.org
          </a>.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">1. Ai vận hành</h2>
        <p>Trang là dự án fan, không thuộc/được bảo trợ bởi nhà phát hành. Thương hiệu, logo thuộc chủ sở hữu tương ứng.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">2. Dữ liệu thu thập</h2>
        <p>Không cần đăng ký tài khoản; bạn có thể đọc/xem mà không cung cấp tên hay thanh toán. Như các web khác, máy chủ có thể ghi lại IP, trang đã xem, thời gian truy cập, loại trình duyệt—dùng tổng hợp để bảo mật và cải thiện nội dung, không nhằm định danh cá nhân.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">3. Cookie & phân tích</h2>
        <p>Các dịch vụ tùy chọn mặc định bị tắt. Google Analytics, Microsoft Clarity và Plausible chỉ được tải sau khi bạn đồng ý rõ ràng với mục Phân tích. Google AdSense chỉ được tải sau khi bạn đồng ý rõ ràng với mục Quảng cáo. Nhà cung cấp đã bật có thể nhận IP cùng thông tin trang/thiết bị theo chính sách riêng. Các yêu cầu của Google về nền tảng quản lý đồng ý được chứng nhận và cấu hình tài khoản vẫn áp dụng tại khu vực chịu quy định.</p>
        <p>Lựa chọn danh mục, phiên bản định dạng và thời điểm cập nhật được lưu cần thiết trong <code className="rounded bg-slate-900 px-1 py-0.5 text-xs">localStorage</code> của trình duyệt. Bạn có thể dùng nút “Cài đặt quyền riêng tư” luôn hiển thị để đổi hoặc rút lại đồng ý. Việc rút lại sẽ chặn tải script tùy chọn trong tương lai và cố gắng xóa cookie bên thứ nhất đã biết, nhưng không thể hoàn tác dữ liệu đã gửi cho nhà cung cấp. Công cụ lựa chọn cục bộ này không được giới thiệu là nền tảng quản lý sự đồng ý được Google chứng nhận.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">4. Nội dung nhúng & bên thứ ba</h2>
        <p>Video nhúng (ví dụ YouTube) dùng domain <code className="rounded bg-slate-900 px-1 py-0.5 text-xs">youtube-nocookie.com</code> khi có thể. Khi bạn bấm play, nhà cung cấp có thể đặt cookie/ghi IP theo chính sách riêng của họ.</p>
        <p>Liên kết ra ngoài (trang chính thức, mạng xã hội, v.v.) có điều khoản riêng; hãy tự xem xét trước khi dùng.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">5. Liên hệ</h2>
        <p>
          Nếu có câu hỏi về quyền riêng tư, hãy email{" "}
          <a href="mailto:support@wherewindsmeet.org" className="text-emerald-300 hover:text-emerald-200">
            support@wherewindsmeet.org
          </a>.
        </p>
        <p className="text-xs text-slate-400">
          Lần cập nhật gần nhất: 2026-08-30. Nội dung có thể thay đổi khi dịch vụ thay đổi.
        </p>
      </section>
    </article>
  );
}
