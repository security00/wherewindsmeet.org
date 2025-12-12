import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BossDetail, generateBossMetadata } from "@/app/guides/bosses/boss-detail";
import type { BossId } from "@/lib/bosses";

type Params = { params: { id: BossId } };

export function generateMetadata({ params }: Params): Metadata {
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
  if (!ids.includes(params.id)) return {};
  return generateBossMetadata(params.id, "de");
}

export default function BossDetailDePage({ params }: Params) {
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
  if (!ids.includes(params.id)) return notFound();
  return <BossDetail bossId={params.id} localePrefix="/de" />;
}
