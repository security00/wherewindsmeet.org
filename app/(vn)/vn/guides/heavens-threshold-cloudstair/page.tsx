import type { Metadata } from "next";
import HiddenMountainChapterTwoGuidePage from "@/components/guides/HiddenMountainChapterTwoGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Heaven's Threshold: mở Cloudstair Where Winds Meet", description: "Mở Heaven's Threshold qua Cloudtop Ascent, tiến độ toàn server, Mountain Express và cách sửa lỗi.", alternates: buildHreflangAlternates("/guides/heavens-threshold-cloudstair", { canonicalLanguage: "vi" }) };
export default function Page() { return <HiddenMountainChapterTwoGuidePage language="vi" kind="cloudtop" />; }
