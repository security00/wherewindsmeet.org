import type { Metadata } from "next";
import { BossDetail, generateBossMetadata } from "../boss-detail";

export const metadata: Metadata = generateBossMetadata("zheng-e");

export default function ZhengEViPage() {
  return <BossDetail bossId="zheng-e" />;
}
