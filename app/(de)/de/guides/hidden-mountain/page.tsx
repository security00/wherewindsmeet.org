import type { Metadata } from "next";
import GrowthOpportunityGuidePage from "@/components/guides/GrowthOpportunityGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Where Winds Meet Hidden Mountain: Freischaltung", description: "Hidden-Mountain-Freischaltung, offizieller Trailer und die neuesten Änderungen aus Version 2.1.", alternates: buildHreflangAlternates("/guides/hidden-mountain", { canonicalLanguage: "de" }) };
export default function Page() { return <GrowthOpportunityGuidePage language="de" kind="hidden-mountain" />; }
