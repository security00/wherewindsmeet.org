import type { Metadata } from "next";
import GrowthOpportunityGuidePage from "@/components/guides/GrowthOpportunityGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Hidden Mountain Guide & Unlock Route",
  description: "Reach Hidden Mountain in Where Winds Meet, follow the unlock route, watch the official trailer, and understand the latest Version 2.1 changes.",
  alternates: buildHreflangAlternates("/guides/hidden-mountain"),
};
export default function Page() { return <GrowthOpportunityGuidePage language="en" kind="hidden-mountain" />; }
