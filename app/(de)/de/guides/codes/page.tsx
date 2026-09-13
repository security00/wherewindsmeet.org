import type { Metadata } from "next";
import CodesGuidePage from "@/components/guides/CodesGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "WWM Codes September 2026: Where Winds Meet Codes (geprueft 2026-09-13)",
  description:
    "WWM Codes geprueft am 2026-09-13 (September 2026): gemeldete Where-Winds-Meet-Redeem-Codes mit Verify-in-Game, Einloese-Schritten, Expired-Warnungen und Links zu Outfit- oder Character-Codes.",
  alternates: buildHreflangAlternates("/guides/codes", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <CodesGuidePage language="de" />;
}
