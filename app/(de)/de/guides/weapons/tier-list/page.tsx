import type { Metadata } from "next";
import WeaponTierListGuidePage from "@/components/guides/WeaponTierListGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "WWM Waffen-Tierliste | Where Winds Meet Weapon Tier List (Version 2.1)",
  description:
    "WWM Waffen-Tierliste und Where Winds Meet Weapon Tier List fuer Version 2.1: alle 8 Waffen inkl. Gauntlets, getrennter PvE/PvP-Review-Status, Methodik, Daten und offizielle Quellen—keine erfundenen S/A/B-Ranks.",
  alternates: buildHreflangAlternates("/guides/weapons/tier-list", { canonicalLanguage: "de" }),
  openGraph: {
    title: "WWM Waffen-Tierliste | Where Winds Meet Weapon Tier List (Version 2.1)",
    description:
      "Ein belegtes Roster und mode-spezifische Evidenzmatrix ohne erfundene Waffen-Tiers.",
    url: `${baseUrl}/de/guides/weapons/tier-list`,
  },
};

export default function Page() {
  return <WeaponTierListGuidePage language="de" />;
}
