import type { Metadata } from "next";
import Image from "next/image";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Code Where Winds Meet, quà tặng và cách nhập",
  description:
    "Theo dõi code Where Winds Meet còn hạn, cách nhập trên PC/PS5, và mẹo ưu tiên phần thưởng cho người chơi mới lẫn quay lại.",
  alternates: buildHreflangAlternates("/guides/codes", { canonicalLanguage: "vi" }),
};

const exampleCodes = [
  {
    label: "Gói mừng ra mắt",
    status: "Ví dụ code còn hạn",
    notes:
      "Một code dịp ra mắt thường tặng cosmetics, buff tạm thời và ít nguyên liệu nâng cấp.",
  },
  {
    label: "Thưởng creator",
    status: "Ví dụ code giới hạn",
    notes:
      "Chiến dịch hợp tác streamer thường có code ngắn hạn với vật phẩm trang trí hoặc đồ chơi xã giao.",
  },
  {
    label: "Đền bù/hotfix",
    status: "Ví dụ code đền bù",
    notes:
      "Khi server lỗi hoặc bug lớn, nhà phát triển đôi khi phát code tặng tiền tệ hay vật phẩm tiêu hao.",
  },
];

const liveCodes = [
  {
    code: "WWMGLtiktok",
    label: "Chiến dịch TikTok ra mắt toàn cầu",
    notes:
      "Chia sẻ qua kênh TikTok; thường tặng gói quà nhỏ gồm ngoại hình (cosmetics) và vật phẩm tiến độ. Xuất hiện trong tổng hợp cộng đồng (Zh) ngày 2025-11-17, nên hãy nhập sớm.",
  },
  {
    code: "WWMGLyoutube",
    label: "Chiến dịch YouTube ra mắt",
    notes:
      "Code song sinh với TikTok, phần thưởng tương tự và có thời hạn ngắn.",
  },
  {
    code: "WWMGO1114",
    label: "Mừng ngày ra mắt",
    notes:
      "Kỷ niệm mốc 2025-11-14. Nếu game báo hết hạn nghĩa là sự kiện đã kết thúc.",
  },
  {
    code: "WWM251115",
    label: "Quà giai đoạn ra mắt sớm",
    notes:
      "Xuất hiện trong hướng dẫn cộng đồng Zh. Phần thưởng có thể khác nhau theo vùng nhưng thường là vật phẩm hữu ích đầu game.",
  },
  {
    code: "WWMGO1115",
    label: "Quà tặng sau ngày ra mắt",
    notes:
      "Phát ngay sau mốc chính. Mỗi tài khoản chỉ nhập một lần và có thời hạn.",
  },
];

export default function CodesPage() {
  return (
    <article className="space-y-10 bg-ink-wash min-h-screen">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-2xl shadow-black/50">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/background/bg5.webp"
            alt="Hình nền code Where Winds Meet"
            fill
            className="object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
        </div>

        <div className="relative z-10 space-y-6">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Code Where Winds Meet <span className="text-ink-gold">&amp; Quà tặng</span>
          </h1>
          <div className="max-w-3xl space-y-4 text-slate-300 leading-relaxed">
            <p>
              Trang này gom tất cả code Where Winds Meet để bạn không phải lục tìm giữa mạng xã hội, ảnh chụp màn hình hay liên kết hết hạn. Danh sách tách rõ code còn dùng được và code đã hết hạn.
            </p>
            <p>
              Mục tiêu là tiết kiệm thời gian và biến mỗi lần ghé thăm thành phần thưởng hoặc một món đồ trang trí vui vẻ.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          Code đang hoạt động <span className="text-sm font-normal text-slate-400 ml-2">(báo cáo)</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {liveCodes.map((entry) => (
            <div
              key={entry.code}
              className="card-jade-token group relative flex flex-col justify-between rounded-2xl p-6 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-100 bg-emerald-900/60 px-2 py-1 rounded border border-emerald-700/50 shadow-sm shadow-emerald-900/50">
                    Đang hoạt động
                  </span>
                  <span className="text-lg filter drop-shadow-md">🎁</span>
                </div>
                <div>
                  <code className="block text-xl font-mono font-bold text-emerald-50 bg-black/40 p-2 rounded text-center border border-emerald-900/50 group-hover:border-emerald-500/50 transition-colors select-all shadow-inner">
                    {entry.code}
                  </code>
                  <p className="mt-2 text-sm font-medium text-emerald-200/80">
                    {entry.label}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-emerald-100/60 border-t border-emerald-900/30 pt-3">
                {entry.notes}
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-500 italic">
          * Code phụ thuộc khu vực và có hạn dùng. Luôn kiểm tra trong game.
        </p>
      </section>

      <section className="card-wuxia rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          Code thường phát thế nào?
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">📢 Sự kiện chính thức</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Hé lộ trong trailer/livestream, thường chỉ dùng trong khung thời gian sự kiện (ví dụ Tuần ra mắt).
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">🔧 Đền bù</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Phát sau bảo trì hoặc khi có lỗi. Hạn dùng rộng rãi nhưng chỉ nhập một lần.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ink-gold">🤝 Creator/Streamer</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Code riêng do streamer chia sẻ; thường tặng cosmetics hoặc đồ chơi giao lưu.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          Loại phần thưởng
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {exampleCodes.map((code) => (
            <div
              key={code.label}
              className="card-inactive rounded-2xl p-5"
            >
              <h3 className="text-sm font-bold text-slate-300 mb-1">
                {code.label}
              </h3>
              <p className="text-[10px] uppercase tracking-wide text-slate-500 mb-2">
                {code.status}
              </p>
              <p className="text-xs leading-relaxed text-slate-400">
                {code.notes}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="card-wuxia rounded-3xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-slate-100 border-brush inline-block pb-2">
          Cách nhập code
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink-spirit">PC & Mobile</h3>
            <ol className="space-y-3 text-sm text-slate-300">
              <li className="step-manual">Mở <span className="text-slate-100 font-medium">Menu hệ thống</span> (Esc).</li>
              <li className="step-manual">Chọn <span className="text-slate-100 font-medium">Cài đặt {'>'} Tài khoản</span>.</li>
              <li className="step-manual">Chọn <span className="text-slate-100 font-medium">Nhập code</span>.</li>
              <li className="step-manual">Dán code và kiểm tra Hộp thư trong game.</li>
            </ol>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-ink-spirit">PlayStation 5</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Hầu hết code có thể nhập trực tiếp trong game giống trên PC. Một số gói độc quyền nền tảng cần nhập qua <span className="text-slate-100 font-medium">PlayStation Store</span>.
            </p>
            <div className="rounded bg-slate-950/50 p-3 text-xs text-slate-400 border border-slate-800">
              Mẹo: dùng ứng dụng PlayStation trên điện thoại để gõ code nhanh hơn.
            </div>
          </div>
        </div>
      </section>

      <section className="card-wuxia rounded-3xl p-8">
        <h2 className="text-xl font-bold text-slate-100 mb-4">
          Chiến lược nhập code
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed mb-4">
          Người mới thường thấy rất nhiều mã. Đừng hoảng: hãy chia chúng thành <span className="text-slate-100">Tiến độ</span> (nhập ngay) và <span className="text-slate-100">Ngoại hình</span> (nhập sau).
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          Khi có thứ tự ưu tiên, code sẽ là làn gió nhẹ hỗ trợ thay vì gây áp lực “sợ bỏ lỡ” (FOMO).
        </p>
      </section>
    </article>
  );
}
