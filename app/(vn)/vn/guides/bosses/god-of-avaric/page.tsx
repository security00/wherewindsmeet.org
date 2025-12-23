import type { Metadata } from "next";
import { BossDetail, generateBossMetadata } from "../boss-detail";

export const metadata: Metadata = generateBossMetadata("god-of-avaric");

export default function GodOfAvariceViPage() {
  return <BossDetail bossId="god-of-avaric" />;
}
