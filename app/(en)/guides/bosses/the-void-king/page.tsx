import type { Metadata } from "next";
import { BossDetail, generateBossMetadata } from "../boss-detail";

export const metadata: Metadata = generateBossMetadata("the-void-king");

export default function TheVoidKingPage() {
  return <BossDetail bossId="the-void-king" />;
}

