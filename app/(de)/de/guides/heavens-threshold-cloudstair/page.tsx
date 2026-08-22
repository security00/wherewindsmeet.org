import type { Metadata } from "next";
import HiddenMountainChapterTwoGuidePage from "@/components/guides/HiddenMountainChapterTwoGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Heaven's Threshold & Cloudstair freischalten", description: "Heaven's Threshold über Cloudtop Ascent, Serverfortschritt, Mountain Express und Work Merit freischalten.", alternates: buildHreflangAlternates("/guides/heavens-threshold-cloudstair", { canonicalLanguage: "de" }) };
export default function Page() { return <HiddenMountainChapterTwoGuidePage language="de" kind="cloudtop" />; }
