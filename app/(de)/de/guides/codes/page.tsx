import type { Metadata } from "next";
import CodesGuidePage from "@/components/guides/CodesGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Codes Oktober 2026: WWM Redeem-Codes & Einlösen",
  description:
    "Where Winds Meet Codes für Oktober 2026 (geprüft am 2026-10-29, Version 2.3): gemeldete WWM-Redeem-Codes zum Prüfen im Spiel, Einlöse-Schritte, Hinweise zu abgelaufenen Codes und Links zu Outfit- und Charakter-Codes.",
  alternates: buildHreflangAlternates("/guides/codes", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <CodesGuidePage language="de" />;
}
