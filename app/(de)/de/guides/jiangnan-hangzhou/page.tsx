import type { Metadata } from "next";
import { JiangnanHangzhouGuidePage } from "@/components/guides/JiangnanHangzhouGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Jiangnan & Hangzhou: CN-/Global-Status",
  description: "Jiangnan- und Hangzhou-Guide: CN-Release, Global-Status, offizielle Bilder und Videos, künftige Gebiete und Prüfung der Interaktivkarte.",
  alternates: buildHreflangAlternates("/guides/jiangnan-hangzhou", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <JiangnanHangzhouGuidePage locale="de" />;
}
