import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Mystic Arts Freischaltliste",
  description: "Mystic Arts ausruesten, Slots kaufen und Tai Chi, Cloud Steps, Celestial Seize, Touch of Death und Meteor Flight finden.",
  alternates: buildHreflangAlternates("/guides/mystic-arts", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="mystic-arts" />;
}
