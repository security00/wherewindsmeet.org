import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import { buildHreflangAlternates } from "@/lib/hreflang";

const patchUrl = "https://www.wherewindsmeetgame.com/news/official/CloudedRevelationPatchNotes.html";
const overviewUrl = "https://www.wherewindsmeetgame.com/news/official/CloudedRevelation.html";

export const metadata: Metadata = {
  title: "Clouded Revelation Where Winds Meet: Hướng dẫn Version 2.1",
  description:
    "Hướng dẫn Where Winds Meet Version 2.1 Clouded Revelation: bản vá 20/8, A Flourishing Legacy, Rising Beyond, Vernal Umbrella, Arena và Homestead.",
  alternates: buildHreflangAlternates("/guides/clouded-revelation", { canonicalLanguage: "vi" }),
};

const changes = [
  {
    title: "A Flourishing Legacy / Rising Beyond",
    text: "Bản vá chính thức sửa nhiều lỗi nhiệm vụ, co-op, vật phẩm và điều kiện kích hoạt trong chuỗi Jianghu Legacy. Nếu từng bị kẹt, hãy cập nhật game rồi thử lại trong thế giới của bạn.",
    href: "#flourishing-legacy",
  },
  {
    title: "Vernal Umbrella cấp 96+",
    text: "Các dòng Attunement được gộp vào Frequent Projectile DMG Boost và bổ sung dòng Light/Heavy/Varied Combo. Thay đổi cũng ảnh hưởng Silkbind Jade.",
    href: "/vn/guides/weapons/tier-list",
  },
  {
    title: "Arena và chiến đấu",
    text: "Bản vá sửa vị trí bóng Everspring Umbrella gần mép Arena, lỗi hủy tích lực Strategic Sword, Guardian Palm cấp 3 và thao tác đứng dậy sau khi bị hạ gục.",
    href: "/vn/guides/pvp-tier-list",
  },
  {
    title: "Homestead và ngoại hình",
    text: "Build Mode có điều khiển camera tốt hơn, danh sách điều phối Retainer rõ hơn và lỗi makeup Heaven's Plea sau khi nhận Sweetened Summer đã được sửa.",
    href: "/vn/guides/free-outfits",
  },
];

const retrySteps = [
  "Cài bản cập nhật Version 2.1 ngày 20/8 và khởi động lại game.",
  "Rời co-op, theo dõi lại A Flourishing Legacy và thử bước bị kẹt trong thế giới của bạn.",
  "Hoàn thành mục tiêu hiện tại rồi kiểm tra danh sách nhiệm vụ và thư để tìm Rising Beyond.",
  "Nếu chưa kích hoạt, thử chuyển thời gian trong game một lần và đăng nhập lại; đây là mẹo cộng đồng, không phải bảo đảm chính thức.",
];

export default function CloudedRevelationViPage() {
  return (
    <article className="space-y-10 bg-ink-wash min-h-screen pb-20">
      <HomeHubBacklink language="vi" />
      <section className="overflow-hidden rounded-3xl border border-sky-400/30 bg-slate-950/85 p-6 shadow-2xl sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_260px] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200">Đã kiểm tra nguồn chính thức · 21/08/2026</p>
            <h1 className="mt-3 text-balance text-4xl font-bold text-slate-50 sm:text-5xl">Where Winds Meet Clouded Revelation: hướng dẫn Version 2.1</h1>
            <p className="mt-5 max-w-3xl leading-7 text-slate-300">
              Clouded Revelation là bản cập nhật Version 2.1 hiện tại. Trang này chuyển nội dung bản vá chính thức ngày 20/8 thành checklist thực tế cho nhiệm vụ, Vernal Umbrella, Arena, Homestead và ngoại hình.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={patchUrl} target="_blank" rel="noreferrer" className="rounded-full border border-sky-300/60 px-4 py-2 text-sm font-semibold text-sky-100">Patch notes chính thức ↗</a>
              <a href={overviewUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-600 px-4 py-2 text-sm font-semibold text-slate-200">Tổng quan Version 2.1 ↗</a>
            </div>
          </div>
          <div className="mx-auto rounded-3xl border border-sky-400/20 bg-sky-500/10 p-8">
            <Image src="/tier-list/icons/weapon-vernal-umbrella.png" alt="Vernal Umbrella trong bản cập nhật Where Winds Meet Version 2.1" width={220} height={220} priority />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {changes.map((item) => (
          <Link key={item.title} href={item.href} className="rounded-2xl border border-slate-800 bg-slate-950/75 p-5 hover:border-sky-400/60">
            <h2 className="font-semibold text-sky-100">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
          </Link>
        ))}
      </section>

      <section id="flourishing-legacy" className="rounded-3xl border border-amber-400/30 bg-amber-500/10 p-6 sm:p-8">
        <h2 className="text-3xl font-bold text-slate-50">A Flourishing Legacy hoặc Rising Beyond không kích hoạt?</h2>
        <ol className="mt-5 space-y-3 text-sm leading-6 text-slate-200">
          {retrySteps.map((step, index) => <li key={step} className="flex gap-3"><span className="font-bold text-amber-200">{index + 1}.</span><span>{step}</span></li>)}
        </ol>
      </section>
    </article>
  );
}
