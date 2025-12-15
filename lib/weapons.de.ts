import type { Weapon } from "./weapons";

export const weapons: Weapon[] = [
  {
    id: "dual-blades",
    name: "Dual Blades",
    role: "Assassin",
    tier: "S",
    description:
      "Dual Blades sind eine blitzschnelle Nahkampfwaffe für Burst aus kurzer Distanz. Die Reichweite ist gering, dafür erlauben hohe Animationsgeschwindigkeit und viele Cancel-Fenster saubere Rein/Raus-Pattern, Lockdown und harte Punishes auf einzelne Ziele. In Where Winds Meet passen Dual Blades besonders zu Spielern, die aggressive Duelle, riskante Dash-Ins und Execution-Momente mögen, sobald ein Boss gestaggert ist.",
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
      "Sword ist die klassische Allround-Waffe für Wanderer, die Flexibilität über alles stellen. Das Moveset fließt sauber zwischen Offensive und Defensive, mit gut lesbaren Timings, zugänglichen Kombos und genug Utility, um in viele Builds zu passen. In Where Winds Meet ist es eine starke Empfehlung für neue Spieler, die Kernsysteme lernen möchten und trotzdem eine Waffe wollen, die auch im Late-Game zuverlässig bleibt.",
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
      "Spear bietet klassische Reichweite und Kontrolle und legt fest, wann Gegner in den Gefahrenbereich treten dürfen. Stöße und Sweeps decken weite Winkel ab, erlauben im PVE sicheres Poken und geben im Duell Tools, um Raum zu kontrollieren. In Where Winds Meet eignet sich Spear für stabile Frontline-Builds, die strukturierte Kämpfe, Zoning und verlässliche Antworten auf mobile Ziele bevorzugen.",
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
      "Mo Blade ist für Spieler, die möchten, dass jeder Hieb Gewicht hat. Die Waffe lädt langsam auf, aber jeder Treffer kann Gruppen auseinanderstreuen, Boss-Lebensbalken sichtbar reduzieren und mit den richtigen Sustain-Tools Chip-Schaden wegstecken. In Where Winds Meet passt Mo Blade zu geduldigen Bruiser-Builds, die das Tempo diktieren, statt jedem kleinen Opening hinterherzulaufen.",
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
      "Leitet inneres Qi nach außen: elegante Gesten werden zu Fern-Druck und Support. Der Fan chippt aus der Distanz, lockert Gruppen mit breiten Skills auf und nutzt Heil-/Utility-Talente, um sich und Verbündete stabil zu halten. Passt zu Spielern mit sicherem Spacing, teamorientierten Tools und ruhigerem Kampftempo.",
    officialArt: "/weapons/official/wq5_58ac46bd.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c68778175cef2669e231f6hiIvVK103",
    localIcon: "/weapons/fan.png",
    buildLink: "/guides/builds#umbrella-healer",
  },
  {
    id: "umbrella",
    name: "Umbrella",
    role: "Parry/Konter",
    tier: "B",
    description:
      "Wirkt zart, verbirgt aber Defense- und Konter-Potenzial: Geschosse gleiten, Blocks anwinkeln, Schirm öffnen und in fließende Schläge übergehen, die Überdehnungen bestrafen. Passt zu reaktiven Spielern, die Mobilität, Parieren und Stil in einer eleganten Defensive-DPS-Waffe verweben.",
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
      "Stilvolle Mischung aus Grapple und Execution-Tool: Aus Mid-Range Gegner aus dem Gleichgewicht reißen, Lücken sofort schließen oder Verbündete mit Pulls/Repositioning schützen. Belohnt Spieler mit gutem Movement-Reading, kreativem Positioning und dem Wunsch, Fluchtversuche konsequent zu bestrafen.",
    officialArt: "/weapons/official/wq7_d8a85874.png",
    officialVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/690c6889be134a7f3324d9f6gQMKFy6i03",
    localIcon: "/martial-arts/weapons/mortal-rope-dart.png",
    buildLink: "/guides/builds#rope-dart-hunter",
  },
];
