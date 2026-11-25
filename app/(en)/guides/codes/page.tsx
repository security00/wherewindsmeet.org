import type { Metadata } from "next";
import CodesGuidePage from "@/components/guides/CodesGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Codes November 2026: WWM Redeem Codes & How to Redeem",
  description:
    "Find the Hutuo anniversary code, check its official source and see how to redeem it. Includes reported codes, expired codes and in-game mail instructions.",
  alternates: buildHreflangAlternates("/guides/codes"),
};

export default function Page() {
  return <CodesGuidePage language="en" />;
}
