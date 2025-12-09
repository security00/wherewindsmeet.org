import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  metadataBase: new URL("https://wherewindsmeet.org"),
  title: {
    default: "Where Winds Meet - Trung tâm hướng dẫn Tiếng Việt",
    template: "%s | WWM Hub (VN)",
  },
  description:
    "Tổng hợp hướng dẫn Where Winds Meet bằng Tiếng Việt: tier list, builds, code đổi quà, tin tức và mẹo chơi để bạn khám phá giang hồ thuận lợi hơn.",
  openGraph: {
    title: "Where Winds Meet - Trang hướng dẫn Tiếng Việt",
    description:
      "Tổng hợp hướng dẫn Where Winds Meet bằng Tiếng Việt: tier list, builds, code đổi quà, tin tức và mẹo chơi để bạn khám phá giang hồ thuận lợi hơn.",
    url: "https://wherewindsmeet.org/vn",
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: "https://wherewindsmeet.org/background/bg.jpg",
        width: 1200,
        height: 630,
        alt: "Where Winds Meet fan hub cover",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet - Hướng dẫn Tiếng Việt",
    description:
      "Hướng dẫn Where Winds Meet bằng Tiếng Việt: builds, tier list, code đổi quà và tin tức mới nhất.",
    images: ["https://wherewindsmeet.org/background/bg.jpg"],
  },
  alternates: buildHreflangAlternates("/", { canonicalLanguage: "vi" }),
  other: {
    "google-adsense-account": "ca-pub-1548791648803369",
  },
};

export default function VnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
