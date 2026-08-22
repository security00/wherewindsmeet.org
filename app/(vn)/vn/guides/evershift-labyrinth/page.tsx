import type { Metadata } from "next";
import HiddenMountainChapterTwoGuidePage from "@/components/guides/HiddenMountainChapterTwoGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Evershift Labyrinth: cách qua cơ chế xoay", description: "Giải cơ chế xoay Evershift Labyrinth bằng cần gạt, cú nhảy đúng lúc và thiết bị chim vàng.", alternates: buildHreflangAlternates("/guides/evershift-labyrinth", { canonicalLanguage: "vi" }) };
export default function Page() { return <HiddenMountainChapterTwoGuidePage language="vi" kind="labyrinth" />; }
