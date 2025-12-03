import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Điều khoản sử dụng Where Winds Meet Hub",
  description:
    "Điều khoản cho hub fan Where Winds Meet: trạng thái không chính thức, cách dùng nội dung, nhúng bên thứ ba và liên hệ hỗ trợ.",
  alternates: {
    canonical: "https://wherewindsmeet.org/vn/terms",
  },
};

export default function TermsPage() {
  return (
    <article className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-sm leading-relaxed text-slate-200 shadow-lg shadow-slate-950/60 sm:p-8">
      <header className="space-y-3">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
          Điều khoản sử dụng hub fan Where Winds Meet
        </h1>
        <p className="text-sm text-slate-300">
          Các điều khoản giữ trải nghiệm rõ ràng và tôn trọng cho người xem guide, video nhúng hoặc chia sẻ site.
        </p>
      </header>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">1. Không chính thức</h2>
        <p>Đây là dự án fan, không liên kết/bảo trợ/bảo chứng bởi nhà phát hành. Thương hiệu, tài sản game thuộc chủ sở hữu.</p>
        <p>Ý kiến/xếp hạng là của đội duy trì site, không phải phát ngôn chính thức. Thông tin chính thức hãy xem kênh nhà phát hành.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">2. Cách dùng nội dung</h2>
        <p>Được xem guide/video cho mục đích cá nhân, không thương mại. Có thể chia sẻ link miễn là không giả mạo là trang chính thức hay nhận quyền sở hữu.</p>
        <p>Sao chép nhiều nội dung để đăng lại không khuyến khích; trích dẫn nên ghi nguồn và link để người đọc xem bản đầy đủ/cập nhật.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">3. Không có tài khoản/bài đăng</h2>
        <p>Hiện không có đăng ký, bình luận hay diễn đàn. Nếu sau này bổ sung tính năng tương tác, sẽ có quy tắc bổ sung và cập nhật chính sách.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">4. Nhúng & liên kết ngoài</h2>
        <p>Video nhúng (YouTube, v.v.) tuân theo điều khoản/chính sách riêng của nhà cung cấp; site không kiểm soát được chúng.</p>
        <p>Link ra trang chính thức, mạng xã hội hoặc tài nguyên khác chỉ để tiện tham khảo; khi truy cập bạn chấp nhận điều khoản riêng của họ.</p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">5. Độ chính xác</h2>
        <p>Game thay đổi theo patch; guide/tier list/builds có thể lỗi thời. Nội dung cung cấp “nguyên trạng”, không bảo đảm tuyệt đối.</p>
        <p>Nếu phát hiện lỗi, hãy liên hệ{" "}
          <a href="mailto:support@wherewindsmeet.org" className="text-emerald-300 hover:text-emerald-200">
            support@wherewindsmeet.org
          </a>{" "}
          để sửa.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-semibold text-slate-50">6. Liên hệ</h2>
        <p>
          Mọi câu hỏi về điều khoản vui lòng email{" "}
          <a href="mailto:support@wherewindsmeet.org" className="text-emerald-300 hover:text-emerald-200">
            support@wherewindsmeet.org
          </a>.
        </p>
      </section>
    </article>
  );
}

