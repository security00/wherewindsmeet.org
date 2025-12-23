import type { Metadata } from "next";
import TierListClient from "./TierListClient";
import { buildHreflangAlternates } from "@/lib/hreflang";
import Link from "next/link";

const baseUrl = "https://wherewindsmeet.org";

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
      <TierListClient />
    </>
  );
}
