import type { Metadata } from "next";
import { JiangnanHangzhouGuidePage } from "@/components/guides/JiangnanHangzhouGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Jiangnan & Hangzhou: CN và Global",
  description: "Hướng dẫn Jiangnan và Hangzhou: ngày mở máy chủ Trung Quốc, trạng thái Global, ảnh và video chính thức, khu vực tương lai và bản đồ tương tác.",
  alternates: buildHreflangAlternates("/guides/jiangnan-hangzhou", { canonicalLanguage: "vi" }),
};

export default function Page() {
  return <JiangnanHangzhouGuidePage locale="vi" />;
}
