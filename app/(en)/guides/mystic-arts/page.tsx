import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Mystic Arts — Inkwash Splendor, Dear Sword & More",
  description:
    "Equip Mystic Arts, unlock extra slots, and find Tai Chi, Cloud Steps, Celestial Seize, Touch of Death, and Meteor Flight, including October 29 mystic skills Inkwash Splendor and Dear Sword.",
  alternates: buildHreflangAlternates("/guides/mystic-arts"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="mystic-arts" />;
}
