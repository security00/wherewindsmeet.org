import PlatformsGuidePage from "@/components/PlatformsGuidePage";
import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Is Where Winds Meet Cross-Platform? Yes: Crossplay on PC, PS5, Xbox & Mobile",
  description:
    "Yes, Where Winds Meet is cross-platform: Steam lists full cross-play and cross-progression across Xbox, PS5, PC, and mobile. Platform list, account binding, and setup checks.",
  alternates: buildHreflangAlternates("/guides/platforms"),
  openGraph: {
    title: "Is Where Winds Meet Cross-Platform? Yes: Crossplay on PC, PS5, Xbox & Mobile",
    description:
      "Official platform status and practical setup advice for Where Winds Meet on Steam, PS5, Xbox, PC, iOS, Android, and mobile with cross-play details.",
    url: `${baseUrl}/guides/platforms`,
  },
  twitter: {
    title: "Is Where Winds Meet Cross-Platform? Yes: Crossplay on PC, PS5, Xbox & Mobile",
    description:
      "Platform guide for Steam, PS5, Xbox, mobile, cross-play, and account linking.",
  },
};

export default function PlatformsPage() {
  return <PlatformsGuidePage language="en" />;
}
