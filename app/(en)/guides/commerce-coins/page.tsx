import type { Metadata } from "next";
import GrowthOpportunityGuidePage from "@/components/guides/GrowthOpportunityGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Commerce Coins: Earn, Trade & Spend",
  description: "A practical Where Winds Meet Commerce Coins guide with a safer trading loop, current-market checks, uses, source notes, and a video walkthrough.",
  alternates: buildHreflangAlternates("/guides/commerce-coins"),
};
export default function Page() { return <GrowthOpportunityGuidePage language="en" kind="commerce-coins" />; }
