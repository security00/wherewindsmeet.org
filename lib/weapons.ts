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
    officialArt:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/wq1_fa52885f.png",
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
    officialArt:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/wq2_222b1a27.png",
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
    officialArt:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/wq3_12c4540a.png",
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
    officialArt:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/wq4_ee594198.png",
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
      "Fan focuses on channeling inner qi outward, turning graceful gestures into waves of ranged pressure and support. You chip away from a distance, soften groups with wide skills, and use healing or utility talents to keep yourself and allies standing. In Where Winds Meet it is a natural fit for players who like safer spacing, team-focused tools, and a calmer, more deliberate combat tempo.",
    officialArt:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/wq5_58ac46bd.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c68778175cef2669e231f6hiIvVK103",
    localIcon: "/weapons/fan.png",
    buildLink: "/guides/builds#umbrella-healer",
  },
  {
    id: "umbrella",
    name: "Umbrella",
    role: "Control",
    tier: "S",
    description:
      "Umbrella looks delicate, but hides layers of defense and counter-attack potential. You can glide through projectiles, angle blocks, then snap the canopy open into sharp, flowing strikes that punish anyone who overextends. In Where Winds Meet it suits players who enjoy reactive play, weaving mobility, parries, and style into one elegant defensive-DPS weapon.",
    officialArt:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/wq6_f29046e1.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e7547f0a2d1e15a832beLfbRNdyu03",
    localIcon: "/weapons/umbrella.png",
    buildLink: "/guides/builds#umbrella-control",
  },
  {
    id: "rope-dart",
    name: "Rope Dart",
    role: "Mobile control and picks",
    tier: "S",
    description:
      "Rope Dart plays like a stylish mix of grappling hook and execution tool. From mid-range you can yank enemies off balance, close gaps in an instant, or peel for allies with disruptive pulls and repositioning. In Where Winds Meet it rewards players who read movement patterns well, enjoy creative positioning, and like turning an enemy’s escape attempt into their downfall.",
    officialArt:
      "https://www.wherewindsmeetgame.com/pc/gw/20251024112521/img/wq7_d8a85874.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c6889be134a7f3324d9f6gQMKFy6i03",
    localIcon: "/weapons/dualblades.png",
    buildLink: "/guides/builds#dual-blades",
  },
];

