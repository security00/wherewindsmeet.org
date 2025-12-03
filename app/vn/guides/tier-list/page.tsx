import type { Metadata } from "next";
import TierListClient from "../../../guides/tier-list/TierListClient";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Tier List Where Winds Meet – PVP, PVE, đường vũ khí & nội công",
  description:
    "Tier list tương tác cho Where Winds Meet: xếp hạng PVP/PVE, đường vũ khí, kết hợp song vũ khí và nội công theo bản cập nhật mới nhất.",
  alternates: {
    canonical: `${baseUrl}/vn/guides/tier-list`,
  },
  openGraph: {
    title: "Tier List Where Winds Meet – PVP, PVE, đường vũ khí & nội công",
    description:
      "Tier list tương tác cho Where Winds Meet: xếp hạng PVP/PVE, đường vũ khí, kết hợp song vũ khí và nội công theo bản cập nhật mới nhất.",
    url: `${baseUrl}/vn/guides/tier-list`,
    locale: "vi_VN",
  },
  twitter: {
    title: "Tier List Where Winds Meet – PVP, PVE, đường vũ khí & nội công",
    description:
      "Tier list tương tác cho Where Winds Meet: xếp hạng PVP/PVE, đường vũ khí, kết hợp song vũ khí và nội công theo bản cập nhật mới nhất.",
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
          item: baseUrl,
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
      <TierListClient />
    </>
  );
}

