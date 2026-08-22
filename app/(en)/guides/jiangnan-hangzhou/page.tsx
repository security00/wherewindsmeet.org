import type { Metadata } from "next";
import { JiangnanHangzhouGuidePage } from "@/components/guides/JiangnanHangzhouGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Jiangnan & Hangzhou Map: Global Release Status",
  description: "Where Winds Meet Jiangnan and Hangzhou map guide: June 26 CN release, current Global status, official images and video, future areas, and interactive map checks.",
  alternates: buildHreflangAlternates("/guides/jiangnan-hangzhou"),
  openGraph: {
    title: "Where Winds Meet Jiangnan & Hangzhou Map Status",
    description: "Jiangnan is live in China with Hangzhou first. Track the unannounced Global release, official footage, future subregions, and map availability.",
    url: "https://wherewindsmeet.org/guides/jiangnan-hangzhou",
    type: "article",
  },
};

export default function Page() {
  return <JiangnanHangzhouGuidePage locale="en" />;
}
