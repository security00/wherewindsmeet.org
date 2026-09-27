import PlatformsGuidePage from "@/components/PlatformsGuidePage";
import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Platforms: PC, PS5, Xbox, Mobile, Steam & Cross-Play",
  description:
    "Where Winds Meet platforms guide for Steam/PC, PlayStation 5, Xbox, iOS, and Android—plus cross-play, cross-progression, account linking, and region checks before you download.",
  alternates: buildHreflangAlternates("/guides/platforms"),
  openGraph: {
    title: "Where Winds Meet Platforms: PC, PS5, Xbox, Mobile, Steam & Cross-Play",
    description:
      "Official platform status and practical setup advice for Where Winds Meet on Steam, PS5, Xbox, PC, iOS, Android, and mobile with cross-play details.",
    url: `${baseUrl}/guides/platforms`,
  },
  twitter: {
    title: "Where Winds Meet Platforms: PC, PS5, Xbox, Mobile, Steam & Cross-Play",
    description:
      "Platform guide for Steam, PS5, Xbox, mobile, cross-play, and account linking.",
  },
};

export default function PlatformsPage() {
  return <PlatformsGuidePage language="en" />;
}
