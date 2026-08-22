import type { Metadata } from "next";
import HiddenMountainChapterTwoGuidePage from "@/components/guides/HiddenMountainChapterTwoGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Where Winds Meet Evershift Labyrinth Rotating Mechanism", description: "Solve the Evershift Labyrinth rotating mechanism with the lever, timed jump and golden bird sequence, plus common blocker fixes.", alternates: buildHreflangAlternates("/guides/evershift-labyrinth") };
export default function Page() { return <HiddenMountainChapterTwoGuidePage language="en" kind="labyrinth" />; }
