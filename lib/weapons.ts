export type WeaponId =
  | "dual-blades"
  | "sword"
  | "spear"
  | "mo-blade"
  | "fan"
  | "umbrella"
  | "rope-dart";

export type Weapon = {
  id: WeaponId;
  name: string;
  role: string;
  tier: "S" | "A" | "B";
  description: string;
  officialArt: string;
  officialVideo: string;
  localIcon: string;
  buildLink: string;
};

export const weapons: Weapon[] = [
  {
    id: "dual-blades",
    name: "Dual Blades",
    role: "Assassin",
    tier: "S",
    description:
      "Dual Blades turn you into a darting close-range menace. Their reach is short, but the animation speed and cancel windows let you slip in, lock enemies down, and delete lone targets before they can respond. In Where Winds Meet they are ideal for players who enjoy aggressive duels, risky dash-ins, and playing the executioner whenever a boss is staggered.",
    officialArt: "/weapons/official/wq1_fa52885f.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c68998175cef2669e25ccXI9UTT1R03",
    localIcon: "/weapons/dualblades.png",
    buildLink: "/guides/builds#dual-blades",
  },
  {
    id: "sword",
    name: "Sword",
    role: "Balanced",
    tier: "B",
    description:
      "Sword is the all-rounder weapon for wanderers who value flexibility above all else. Its move set flows smoothly between offense and defense with clean combos, approachable timings, and just enough utility to slot into most builds without drama. In Where Winds Meet it is a strong recommendation for new players who want to learn core systems while still having a weapon that scales comfortably into late-game content.",
    officialArt: "/weapons/official/wq2_222b1a27.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e723794543d3ce61613fY6UrRbjb03",
    localIcon: "/weapons/sword.png",
    buildLink: "/guides/builds#sword-starter",
  },
  {
    id: "spear",
    name: "Spear",
    role: "Bleed",
    tier: "A",
    description:
      "Spear offers classic reach and control, letting you decide exactly when enemies are allowed to step into danger. Its thrusts and sweeps cover generous arcs, poking safely in PVE while still giving you tools to contest space in duels. In Where Winds Meet it works well for steady frontline builds that prefer structured fights, zone control, and reliable answers to mobile targets.",
    officialArt: "/weapons/official/wq3_12c4540a.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c6866bdacee74aec95fcd9mUsWJ6p03",
    localIcon: "/weapons/spear.png",
    buildLink: "/guides/builds#sword-spear-bleed",
  },
  {
    id: "mo-blade",
    name: "Mo Blade",
    role: "Tank",
    tier: "A",
    description:
      "The Mo Blade is for players who want every swing to feel like it could decide the fight. It winds up slowly, but each strike can scatter groups, carve huge chunks off boss health bars, and shrug off chip damage when paired with the right sustain tools. In Where Winds Meet it fits patient bruiser builds that control the pace of battle instead of chasing every tiny opening.",
    officialArt: "/weapons/official/wq4_ee594198.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c682571f08da387bae062ioRsVf6s03",
    localIcon: "/weapons/moblade.png",
    buildLink: "/guides/builds#mo-blade",
  },
  {
    id: "fan",
    name: "Fan",
    role: "Support",
    tier: "B",
    description:
      "The Fan channels inner qi outward: elegant gestures become ranged pressure plus support. You chip from a safe distance, soften groups with wide skills, and use healing/utility tools to stabilize yourself and allies. It fits players with clean spacing, team-focused utility, and a calmer combat tempo.",
    officialArt: "/weapons/official/wq5_58ac46bd.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c68778175cef2669e231f6hiIvVK103",
    localIcon: "/weapons/fan.png",
    buildLink: "/guides/builds#umbrella-healer",
  },
  {
    id: "umbrella",
    name: "Umbrella",
    role: "Parry/Counter",
    tier: "B",
    description:
      "It looks delicate, but hides serious defense and counterplay: glide through projectiles, angle guards, open the umbrella, and flow into strikes that punish overextensions. It fits reactive players who want to weave mobility, parries, and style into an elegant defensive DPS weapon.",
    officialArt: "/weapons/official/wq6_f29046e1.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e7547f0a2d1e15a832beLfbRNdyu03",
    localIcon: "/weapons/umbrella.png",
    buildLink: "/guides/builds#umbrella-control",
  },
  {
    id: "rope-dart",
    name: "Rope Dart",
    role: "Mobile Control / Picks",
    tier: "S",
    description:
      "A stylish mix of grapple and execution tool: yank enemies off balance from mid-range, instantly close gaps, or protect allies with pulls and repositioning. It rewards strong movement reading, creative positioning, and the instinct to turn escape attempts into losses.",
    officialArt: "/weapons/official/wq7_d8a85874.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c6889be134a7f3324d9f6gQMKFy6i03",
    localIcon: "/martial-arts/weapons/mortal-rope-dart.png",
    buildLink: "/guides/builds#rope-dart-hunter",
  },
];
