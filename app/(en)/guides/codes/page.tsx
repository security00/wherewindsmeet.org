import type { Metadata } from "next";
import CodesGuidePage from "@/components/guides/CodesGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "WWM Codes September 2026: Where Winds Meet Codes (checked 2026-09-13)",
  description:
    "WWM codes checked 2026-09-13 (September 2026): reported Where Winds Meet redeem codes labeled verify in-game, redemption steps, expired-code warnings, and links for outfit or character codes.",
  alternates: buildHreflangAlternates("/guides/codes"),
};

export default function Page() {
  return <CodesGuidePage language="en" />;
}
