import type { Metadata } from "next";
import { WeaponDetail, generateWeaponMetadata } from "../weapon-detail";

export const metadata: Metadata = generateWeaponMetadata("umbrella");

export default function UmbrellaPage() {
  return <WeaponDetail weaponId="umbrella" />;
}

