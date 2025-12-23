import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WeaponDetail, generateWeaponMetadata } from "../weapon-detail";
import type { WeaponId } from "@/lib/weapons";

type Params = { params: { id: WeaponId } };

const ids: WeaponId[] = ["dual-blades", "sword", "spear", "mo-blade", "fan", "umbrella", "rope-dart"];

export function generateMetadata({ params }: Params): Metadata {
  if (!ids.includes(params.id)) return {};
  return generateWeaponMetadata(params.id);
}

export default function WeaponDetailDePage({ params }: Params) {
  if (!ids.includes(params.id)) return notFound();
  return <WeaponDetail weaponId={params.id} />;
}
