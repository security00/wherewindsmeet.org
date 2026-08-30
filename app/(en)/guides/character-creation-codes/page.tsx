import type { Metadata } from "next";
import GrowthOpportunityGuidePage from "@/components/guides/GrowthOpportunityGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Character Creation Codes & QR Import",
  description: "Use Where Winds Meet text or QR character presets with a version-aware PC workflow, clear UI verification limits, and troubleshooting.",
  alternates: buildHreflangAlternates("/guides/character-creation-codes"),
};
export default function Page() { return <GrowthOpportunityGuidePage language="en" kind="character-codes" />; }
