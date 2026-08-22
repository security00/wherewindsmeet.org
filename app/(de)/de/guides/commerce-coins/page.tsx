import type { Metadata } from "next";
import GrowthOpportunityGuidePage from "@/components/guides/GrowthOpportunityGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Where Winds Meet Commerce Coins: verdienen & nutzen", description: "Commerce-Coins sicherer handeln und ausgeben: Live-Markt-Checks, Quellenhinweise und Video-Anleitung.", alternates: buildHreflangAlternates("/guides/commerce-coins", { canonicalLanguage: "de" }) };
export default function Page() { return <GrowthOpportunityGuidePage language="de" kind="commerce-coins" />; }
