import type { Metadata } from "next";
import { BossDetail, generateBossMetadata } from "../boss-detail";

export const metadata: Metadata = generateBossMetadata("zheng-e");

export default function ZhengEPage() {
  return <BossDetail bossId="zheng-e" />;
}

