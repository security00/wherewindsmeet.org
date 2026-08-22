import type { Metadata } from "next";
import GrowthOpportunityGuidePage from "@/components/guides/GrowthOpportunityGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Character Creation Codes & QR Import",
  description: "Import Where Winds Meet character creation and customization codes with text or QR presets, visual steps, cosmetic limits, and troubleshooting.",
  alternates: buildHreflangAlternates("/guides/character-creation-codes"),
};
export default function Page() { return <GrowthOpportunityGuidePage language="en" kind="character-codes" />; }
