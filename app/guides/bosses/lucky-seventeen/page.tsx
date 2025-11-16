import type { Metadata } from "next";
import { BossDetail, generateBossMetadata } from "../boss-detail";

export const metadata: Metadata = generateBossMetadata("lucky-seventeen");

export default function LuckySeventeenPage() {
  return <BossDetail bossId="lucky-seventeen" />;
}

