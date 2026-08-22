import type { Metadata } from "next";
import HiddenMountainChapterTwoGuidePage from "@/components/guides/HiddenMountainChapterTwoGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Evershift Labyrinth: Drehmechanismus lösen", description: "Evershift-Labyrinth-Drehmechanismus mit Hebel, zeitigem Sprung und goldenem Vogel lösen.", alternates: buildHreflangAlternates("/guides/evershift-labyrinth", { canonicalLanguage: "de" }) };
export default function Page() { return <HiddenMountainChapterTwoGuidePage language="de" kind="labyrinth" />; }
