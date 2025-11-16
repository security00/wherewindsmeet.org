import type { Metadata } from "next";
import { BossDetail, generateBossMetadata } from "../boss-detail";

export const metadata: Metadata = generateBossMetadata("ye-wanshan");

export default function YeWanshanPage() {
  return <BossDetail bossId="ye-wanshan" />;
}

