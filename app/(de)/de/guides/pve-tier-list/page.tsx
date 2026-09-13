import type { Metadata } from "next";
import PveTierListGuidePage from "@/components/guides/PveTierListGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet PvE-Tierliste: Version-2.1-Evidenz-Review",
  description:
    "Where Winds Meet PvE-Tierliste fuer Version 2.1: alle 8 Waffenfamilien, Gauntlets-Abdeckung, Boss/Dungeon-Review-Status und offizielle Quellen—keine erfundenen S/A/B-Ranks.",
  alternates: buildHreflangAlternates("/guides/pve-tier-list", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet PvE-Tierliste: Version-2.1-Evidenz-Review",
    description:
      "Ein PvE-fokussiertes Evidenz-Review, das bestaetigte Roster-Fakten von ungestuetzten Buchstaben-Noten trennt.",
    url: `${baseUrl}/de/guides/pve-tier-list`,
  },
};

export default function Page() {
  return <PveTierListGuidePage language="de" />;
}
