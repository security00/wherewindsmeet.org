import type { Metadata } from "next";
import { BossDetail, generateBossMetadata } from "../boss-detail";

export const metadata: Metadata = generateBossMetadata("heartseeker");

export default function HeartseekerPage() {
  return <BossDetail bossId="heartseeker" />;
}

