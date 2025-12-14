import type { Metadata } from "next";
import { BossDetail, generateBossMetadata } from "../boss-detail";

export const metadata: Metadata = generateBossMetadata("tian-ying");

export default function TianYingViPage() {
  return <BossDetail bossId="tian-ying" />;
}
