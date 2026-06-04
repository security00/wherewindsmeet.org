import type { Metadata } from "next";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import TierListClient from "./TierListClient";
import { buildHreflangAlternates } from "@/lib/hreflang";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";

const arenaRankNotes = [
  {
    title: "Nguoi choi leo arena rank",
    detail:
      "Uu tien do co dong, cua so burst va khong che on dinh. Neu chi co thoi gian xem mot trang, so sanh tier list nay voi trang PVP truoc khi dung nguyen lieu reset.",
    href: "/vn/guides/pvp-tier-list",
    label: "PVP arena ranks",
  },
  {
    title: "Theo doi upcoming nerfs",
    detail:
      "Khi nguoi choi tim upcoming nerfs, cau tra loi an toan nhat la doi chieu Path Balance va maintenance chinh thuc truoc khi goi mot vu khi la bi nerf.",
    href: "/vn/guides/patch-notes#upcoming-nerfs",
    label: "Balance watch",
  },
  {
    title: "So sanh rieng vu khi",
    detail:
      "Dung weapon tier list neu ban chi muon xep hang ho vu khi, tach khoi path, noi cong va bo build day du.",
    href: "/vn/guides/weapons/tier-list",
    label: "Weapon tier list",
  },
];

export const metadata: Metadata = {
  title: "Tier list Where Winds Meet – PvP, PvE, đường vũ khí & nội công",
  description:
    "Tier list tương tác cho Where Winds Meet: xếp hạng PvP/PvE, đường vũ khí, kết hợp song vũ khí và nội công theo bản cập nhật mới nhất.",
  alternates: buildHreflangAlternates("/guides/tier-list", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "Tier list Where Winds Meet – PvP, PvE, đường vũ khí & nội công",
    description:
      "Tier list tương tác cho Where Winds Meet: xếp hạng PvP/PvE, đường vũ khí, kết hợp song vũ khí và nội công theo bản cập nhật mới nhất.",
    url: `${baseUrl}/vn/guides/tier-list`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Tier list Where Winds Meet – PvP, PvE, đường vũ khí & nội công",
    description:
      "Tier list tương tác cho Where Winds Meet: xếp hạng PvP/PvE, đường vũ khí, kết hợp song vũ khí và nội công theo bản cập nhật mới nhất.",
  },
};

export default function TierListPage() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/vn/guides/tier-list`,
    },
    {
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
          name: "Tier List",
          item: `${baseUrl}/vn/guides/tier-list`,
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="vi" />
      <section className="mb-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4 text-sm text-slate-200 shadow-sm shadow-slate-950/60">
        Muốn xem riêng phần vũ khí? Mở{" "}
        <Link href="/vn/guides/weapons/tier-list" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
          tier list vũ khí
        </Link>{" "}
        hoặc xem{" "}
        <Link href="/vn/guides/weapons" className="text-emerald-300 underline underline-offset-4 hover:text-emerald-200">
          bách khoa vũ khí
        </Link>
        .
      </section>
      <section id="arena-ranks" className="mb-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-sm text-slate-200 shadow-sm shadow-emerald-950/40">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-300">Search intent: wwm arena ranks</p>
            <h2 className="mt-1 text-xl font-bold text-slate-50">Arena ranks, tier-list changes va nerf watch.</h2>
          </div>
          <Link
            href="/vn/guides/patch-notes#upcoming-nerfs"
            className="rounded-full border border-emerald-400/60 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-100 hover:border-emerald-300/80"
          >
            Xem balance moi nhat
          </Link>
        </div>
        <p className="mt-3 leading-6 text-slate-300">
          Nguoi choi dang tim WWM arena ranks, PVP ranking va upcoming nerfs. Hay xem trang nay nhu buc tranh meta tong quan,
          sau do mo PVP tier list, weapon tier list va patch notes de kiem tra xep hang con hop voi Version 1.7 Path Balance hay khong.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {arenaRankNotes.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-xl border border-slate-800 bg-slate-950/70 p-4 transition hover:border-emerald-300/60"
            >
              <p className="text-sm font-semibold text-slate-50">{item.title}</p>
              <p className="mt-2 text-xs leading-5 text-slate-300">{item.detail}</p>
              <p className="mt-3 text-xs font-semibold text-emerald-300">{item.label}</p>
            </Link>
          ))}
        </div>
      </section>
      <TierListClient />
    </>
  );
}
