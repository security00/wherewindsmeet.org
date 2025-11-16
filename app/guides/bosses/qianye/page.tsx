import type { Metadata } from "next";
import { BossDetail, generateBossMetadata } from "../boss-detail";

export const metadata: Metadata = generateBossMetadata("qianye");

export default function QianyePage() {
  return <BossDetail bossId="qianye" />;
}

