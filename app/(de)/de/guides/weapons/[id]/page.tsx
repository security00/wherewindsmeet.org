import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WeaponDetail, generateWeaponMetadata } from "../weapon-detail";
import type { WeaponId } from "@/lib/weapons";

type Params = { params: { id: WeaponId } | Promise<{ id: WeaponId }> };

const ids: WeaponId[] = ["dual-blades", "sword", "spear", "mo-blade", "fan", "umbrella", "rope-dart"];

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params;
  if (!ids.includes(id)) return {};
  return generateWeaponMetadata(id);
}

export default async function WeaponDetailDePage({ params }: Params) {
  const { id } = await params;
  if (!ids.includes(id)) notFound();
  return <WeaponDetail weaponId={id} />;
}
