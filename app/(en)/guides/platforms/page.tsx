import PlatformsGuidePage from "@/components/PlatformsGuidePage";
import type { Metadata } from "next";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android, Cross-Play",
  description:
    "Where Winds Meet platform guide for Xbox Series X|S, Xbox on PC, Xbox Cloud, PS5, PC, iOS, Android, mobile, cross-play, account-linking checks, and official download routes.",
  alternates: buildHreflangAlternates("/guides/platforms"),
  openGraph: {
    title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android, Cross-Play",
    description:
      "Official platform status and practical setup advice for Where Winds Meet on Xbox, PS5, PC, iOS, Android, and mobile.",
    url: `${baseUrl}/guides/platforms`,
  },
  twitter: {
    title: "Where Winds Meet Platforms: Xbox, PS5, PC, iOS, Android, Cross-Play",
    description:
      "Official platform status and practical setup advice for Where Winds Meet on Xbox, PS5, PC, iOS, Android, and mobile.",
  },
};

export default function PlatformsPage() {
  return <PlatformsGuidePage language="en" />;
}
