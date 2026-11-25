import type { Metadata } from "next";
import CodesGuidePage from "@/components/guides/CodesGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Codes November 2026: WWM Redeem Codes & How to Redeem",
  description:
    "Where Winds Meet codes and WWM redeem codes (last code-list check 2026-11-25). Official Version 2.4 posts published no new redeem-code list. Reported codes still need in-game verification; leaked or expired codes are flagged on this page.",
  alternates: buildHreflangAlternates("/guides/codes"),
};

export default function Page() {
  return <CodesGuidePage language="en" />;
}
