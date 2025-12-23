import type { Metadata } from "next";
import { BossDetail, generateBossMetadata } from "../boss-detail";

export const metadata: Metadata = generateBossMetadata("dao-lord");

export default function DaoLordPage() {
  return <BossDetail bossId="dao-lord" />;
}

