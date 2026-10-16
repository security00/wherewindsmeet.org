import type { Metadata } from "next";
import GrowthOpportunityGuidePage from "@/components/guides/GrowthOpportunityGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Hidden Mountain: How to Unlock, Route & Version 2.2 Chapters",
  description: "How to unlock Hidden Mountain in Where Winds Meet: step-by-step route, the official trailer, and the Version 2.2 Bringer of Embers chapters, Skyward City Ruins, and world bosses.",
  alternates: buildHreflangAlternates("/guides/hidden-mountain"),
};
export default function Page() { return <GrowthOpportunityGuidePage language="en" kind="hidden-mountain" />; }
