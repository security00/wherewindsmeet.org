import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Zenithstride and Zenithmaze Dungeons",
  description: "Reach the Heaven's Threshold Divinecraft pair after Cloudstair, and keep them separate from Mirkvale and Phasecycle.",
  alternates: buildHreflangAlternates("/guides/zenithstride"),
};

export default function Page() {
  return <IntentGuidePage language="en" kind="zenithstride" />;
}
