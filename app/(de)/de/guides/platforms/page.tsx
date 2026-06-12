import PlatformsGuidePage from "@/components/PlatformsGuidePage";
import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android",
  description:
    "Where Winds Meet Plattform-Guide fuer Xbox, PS5, PC, iOS, Android, Mobile, Cross-Play und offizielle Download-Routen.",
  alternates: buildHreflangAlternates("/guides/platforms", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android",
    description:
      "Offizieller Plattformstatus und praktische Setup-Hilfe fuer Where Winds Meet auf Xbox, PS5, PC, iOS, Android und Mobile.",
    url: `${baseUrl}/de/guides/platforms`,
  },
  twitter: {
    title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android",
    description:
      "Offizieller Plattformstatus und praktische Setup-Hilfe fuer Where Winds Meet auf Xbox, PS5, PC, iOS, Android und Mobile.",
  },
};

export default function PlatformsPage() {
  return <PlatformsGuidePage language="de" />;
}
