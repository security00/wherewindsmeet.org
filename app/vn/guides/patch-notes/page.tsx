import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import Link from "next/link";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Patch notes Where Winds Meet, roadmap & cân bằng",
  description:
    "Patch notes Where Winds Meet mới nhất: roadmap, cân bằng, chỉnh vũ khí và nội dung mới. Theo dõi thay đổi để giữ build phù hợp meta.",
  alternates: buildHreflangAlternates("/guides/patch-notes", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Patch notes Where Winds Meet, roadmap & cân bằng",
    description:
      "Patch notes Where Winds Meet: mốc roadmap, chỉnh vũ khí, cập nhật nội dung và cách đọc để điều chỉnh build.",
    url: `${baseUrl}/vn/guides/patch-notes`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Patch notes Where Winds Meet, roadmap & cân bằng",
    description:
      "Patch notes Where Winds Meet: mốc roadmap, chỉnh vũ khí, cập nhật nội dung và cách đọc để điều chỉnh build.",
  },
};

export default function PatchNotesPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/guides/patch-notes`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Trang chủ", item: `${baseUrl}/vn` },
        { "@type": "ListItem", position: 2, name: "Hướng dẫn", item: `${baseUrl}/vn/guides` },
        { "@type": "ListItem", position: 3, name: "Patch Notes", item: `${baseUrl}/vn/guides/patch-notes` },
      ],
    },
  ];

  return (
    <article className="space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60 sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/background/bg1.webp"
            alt="Nền patch notes Where Winds Meet"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30" />
        </div>

        <div className="relative">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
            Patch notes và cập nhật cân bằng Where Winds Meet.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Cập nhật patch notes giúp giữ build đúng meta và hiểu đường phát triển. Mỗi chỉnh cân bằng, thay đổi vũ khí hay hệ thống mới đều ảnh hưởng tới lối chơi PvE, tổ đội (co-op), PvP.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Trang này cũng đánh dấu mốc roadmap và cửa sổ cập nhật để bạn chủ động lên kế hoạch respec (tẩy điểm) hoặc thử build mới.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
            Thay vì hoảng khi vũ khí bị chỉnh, hãy đọc patch notes như la bàn tinh chỉnh. Phần lớn thay đổi nhằm mở thêm lựa chọn, không phải phá build của bạn.
          </p>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Nhịp patch Where Winds Meet
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Game thường có nhịp patch rõ: patch lớn vài tuần một lần (cân bằng + nội dung), hotfix xen giữa, cập nhật mùa thêm khu vực/vũ khí/hệ thống. Biết nhịp này để không bị động.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Nếu patch lớn sắp tới, có thể hoãn respec (tẩy điểm) đến khi xem đủ chi tiết. Hotfix sửa bug vũ khí bạn thích là tin vui—hãy thử lại.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Đọc thay đổi cân bằng thế nào?
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Chú ý ngôn ngữ patch: buff nhỏ đôi khi bùng nổ khi cộng dồn với build; nerf có thể chỉ áp dụng PvP. Hãy xem chỉ số nào bị động tới và thử thực tế trước khi bỏ vũ khí.
        </p>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Buff</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Tăng sát thương hợp lối chơi dồn sát thương; giảm hồi chiêu lại tạo khác biệt lớn với build xoay kỹ năng. Điều chỉnh tỉ lệ theo chỉ số (scaling) sẽ phát huy ở endgame khi chỉ số cao.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Nerf</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Thường nhắm ngữ cảnh. Nếu nerf chỉ cho PvP, PvE có thể không ảnh hưởng. Thử xoay sang build/chỉ số gần giống để giữ cảm giác chơi.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900/40 p-4">
            <h3 className="text-sm font-semibold text-slate-50">Hệ thống mới</h3>
            <p className="mt-2 text-xs leading-relaxed text-slate-200">
              Cơ chế mới thường chưa rõ meta—người thử sớm sẽ tìm tương tác (synergy) trước khi cộng đồng ổn định. Đây là cơ hội sáng tạo.
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Lướt nhanh để xem vũ khí/kỹ năng bạn dùng bị ảnh hưởng, rồi tự test. Nhiều thay đổi đọc có vẻ xấu nhưng chơi thực tế vẫn ổn.
        </p>
      </section>

      <section className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Điều chỉnh build sau patch
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Không phải patch nào cũng cần respec (tẩy điểm). Thường chỉ cần chỉnh vài điểm chỉ số hoặc đổi một kỹ năng, giữ nguyên bản sắc build.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          So sánh thay đổi với tier list/builds: buff có đẩy vũ khí lên hạng? nerf có khiến vũ khí tương tự trở thành lựa chọn tốt hơn? Đôi khi nerf này lại là buff cho lựa chọn khác cùng phong cách.
        </p>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          PvE/tổ đội (co-op) thường chỉ là QoL (chất lượng trải nghiệm); build vẫn dùng được. PvP có thể phải xoay nhiều hơn nếu kèo (matchup) đổi hẳn.
        </p>
      </section>

      <section className="space-y-5 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-lg shadow-slate-950/60">
        <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          Liên kết patch notes với guide và tier list
        </h2>
        <p className="text-sm leading-relaxed text-slate-200 sm:text-base">
          Tier list và builds trên site sẽ được cập nhật theo patch lớn. Sau mỗi đợt, hãy kiểm tra lại:
        </p>
        <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Xem vũ khí của bạn đứng ở đâu trong <Link href="/vn/guides/tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">tier list</Link>.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Đối chiếu với <Link href="/vn/guides/pvp-tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">tier list PvP</Link> nếu chơi đối kháng.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span>Điều chỉnh theo <Link href="/vn/guides/builds" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">builds</Link> mới nếu vũ khí được buff/nerf.</span>
          </li>
        </ul>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-xs text-slate-300">
          Mẹo: bookmark trang patch notes chính thức và kiểm tra khi có thông báo bảo trì/đẩy bản mới.
        </div>
      </section>
    </article>
  );
}
