import type { Metadata } from "next";
import GrowthOpportunityGuidePage from "@/components/guides/GrowthOpportunityGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = { title: "Where Winds Meet Character-Creation-Codes & QR", description: "Character-Creation-Codes als Text oder QR importieren: bebilderte Schritte, Kosmetikgrenzen und Fehlerhilfe.", alternates: buildHreflangAlternates("/guides/character-creation-codes", { canonicalLanguage: "de" }) };
export default function Page() { return <GrowthOpportunityGuidePage language="de" kind="character-codes" />; }
