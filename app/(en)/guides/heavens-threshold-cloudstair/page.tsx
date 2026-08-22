import type { Metadata } from "next";
import HiddenMountainChapterTwoGuidePage from "@/components/guides/HiddenMountainChapterTwoGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Where Winds Meet Heaven's Threshold & Cloudstair Guide", description: "Unlock Heaven's Threshold through Cloudtop Ascent: Foundation, Cloudstair server progress, Mountain Express, Work Merit, and blocker fixes.", alternates: buildHreflangAlternates("/guides/heavens-threshold-cloudstair") };
export default function Page() { return <HiddenMountainChapterTwoGuidePage language="en" kind="cloudtop" />; }
