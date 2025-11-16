import type { Metadata } from "next";
import { BossDetail, generateBossMetadata } from "../boss-detail";

export const metadata: Metadata = generateBossMetadata("murong-yuan");

export default function MurongYuanPage() {
  return <BossDetail bossId="murong-yuan" />;
}

