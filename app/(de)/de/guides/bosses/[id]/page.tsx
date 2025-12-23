import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BossDetail, generateBossMetadata } from "../boss-detail";
import type { BossId } from "@/lib/bosses";

type Params = { params: { id: BossId } | Promise<{ id: BossId }> };

const ids: BossId[] = [
  "dao-lord",
  "god-of-avaric",
  "heartseeker",
  "lucky-seventeen",
  "murong-yuan",
  "qianye",
  "the-void-king",
  "tian-ying",
  "ye-wanshan",
  "zheng-e",
];

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  if (!ids.includes(id)) return {};
  return generateBossMetadata(id);
}

export default async function BossDetailDePage({ params }: Params) {
  const { id } = await params;
  if (!ids.includes(id)) notFound();
  return <BossDetail bossId={id} />;
}
