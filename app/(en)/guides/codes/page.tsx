import type { Metadata } from "next";
import CodesGuidePage from "@/components/guides/CodesGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Codes October 2026: WWM Redeem Codes & How to Redeem",
  description:
    "Where Winds Meet codes for October 2026 (checked 2026-10-17, Version 2.3): reported WWM redeem codes to verify in-game, how to redeem, expired and leaked-code warnings, plus outfit and character code links.",
  alternates: buildHreflangAlternates("/guides/codes"),
};

export default function Page() {
  return <CodesGuidePage language="en" />;
}
