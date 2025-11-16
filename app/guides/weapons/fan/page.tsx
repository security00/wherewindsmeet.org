import type { Metadata } from "next";
import { WeaponDetail, generateWeaponMetadata } from "../weapon-detail";

export const metadata: Metadata = generateWeaponMetadata("fan");

export default function FanPage() {
  return <WeaponDetail weaponId="fan" />;
}

