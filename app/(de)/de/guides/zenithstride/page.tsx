import type { Metadata } from "next";
import IntentGuidePage from "@/components/guides/IntentGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Zenithstride und Zenithmaze",
  description: "Das Divinecraft-Paar in Heaven's Threshold nach Cloudstair erreichen, getrennt von Mirkvale und Phasecycle.",
  alternates: buildHreflangAlternates("/guides/zenithstride", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <IntentGuidePage language="de" kind="zenithstride" />;
}
