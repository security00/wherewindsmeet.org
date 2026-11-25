import type { Metadata } from "next";
import CodesGuidePage from "@/components/guides/CodesGuidePage";
import { buildHreflangAlternates } from "@/lib/hreflang";

export const metadata: Metadata = {
  title: "Where Winds Meet Codes November 2026: WWM Redeem-Codes & Einlösen",
  description:
    "Der Hutuo-Jubiläumscode mit offizieller Quelle, Anleitung zum Einlösen und Hinweisen zum Postfach. Dazu gemeldete Codes und Hilfe bei abgelaufenen Codes.",
  alternates: buildHreflangAlternates("/guides/codes", { canonicalLanguage: "de" }),
};

export default function Page() {
  return <CodesGuidePage language="de" />;
}
