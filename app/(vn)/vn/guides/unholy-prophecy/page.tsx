import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/hreflang";
import UnholyProphecyEnPage from "@/app/(en)/guides/unholy-prophecy/page";

const baseUrl = "https://wherewindsmeet.org";
const cdnBase = process.env.NEXT_PUBLIC_CDN_URL || "https://static.wherewindsmeet.org";
const cdn = (path: string) => `${cdnBase}${path}`;

export const metadata: Metadata = {
  title: "An Unholy Prophecy Walkthrough – Where Winds Meet (Tiếng Việt)",
  description:
    "Hướng dẫn An Unholy Prophecy: thắp brazier trên mái, giải Meridian Touch (chuông/cửa), vượt bẫy chông, đánh Shi Zhen và xử lý các bước bị kẹt thường gặp.",
  alternates: buildHreflangAlternates("/guides/unholy-prophecy", { canonicalLanguage: "vi" }),
  openGraph: {
    title: "An Unholy Prophecy Walkthrough – Where Winds Meet (Tiếng Việt)",
    description:
      "Walkthrough đầy đủ An Unholy Prophecy: Jadewood Court → braziers trên mái → Meridian Touch → hành lang bẫy chông → boss Shi Zhen, kèm mẹo fix lỗi kẹt nhiệm vụ.",
    url: `${baseUrl}/vn/guides/unholy-prophecy`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: cdn("/guides/unholy-prophecy/header.png"),
        width: 1200,
        height: 675,
        alt: "An Unholy Prophecy quest scene from Where Winds Meet",
      },
    ],
    locale: "vi_VN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "An Unholy Prophecy Walkthrough – Where Winds Meet (Tiếng Việt)",
    description:
      "TL;DR + mẹo fix kẹt An Unholy Prophecy: braziers, Meridian Touch, hành lang bẫy chông và boss Shi Zhen.",
    images: [cdn("/guides/unholy-prophecy/header.png")],
  },
};

export default UnholyProphecyEnPage;
