import type { Metadata } from "next";
import "../globals.css";
import { LocaleRootLayout } from "@/components/LocaleRootLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://wherewindsmeet.org"),
  other: {
    "google-adsense-account": "ca-pub-1548791648803369",
  },
};

export default function VnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocaleRootLayout locale="vi">{children}</LocaleRootLayout>;
}
