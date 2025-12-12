export type BossId =
  | "dao-lord"
  | "god-of-avaric"
  | "heartseeker"
  | "lucky-seventeen"
  | "murong-yuan"
  | "qianye"
  | "the-void-king"
  | "tian-ying"
  | "ye-wanshan"
  | "zheng-e";

export type Boss = {
  id: BossId;
  name: string;
  tagline: string;
  description: string;
  encounterType: string;
  theme: string;
  backgroundVideo: string;
  titleImage: string;
};

export const bosses: Boss[] = [
  {
    id: "dao-lord",
    name: "Dao Lord",
    tagline: "Flüchtige Herrscherin des Schwarzmarkts und der Nine Mortal Ways.",
    description:
      "Agiert aus dem Schatten, lenkt den Schwarzmarkt und die Nine Mortal Ways mit ruhiger, undurchsichtiger Präsenz. Jeder Auftritt fühlt sich mehr wie ein Vertrauens- und Wahrnehmungstest an als wie eine offene Schlacht.",
    encounterType: "Schattenboss / Unterwelt-Konfrontation",
    theme: "Verträge, Informationen, verborgene Macht",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e440aa64b1cb56a20c39SXz41N4r03",
    titleImage: "/bosses/6_tit_0a00d079.png",
  },
  {
    id: "god-of-avaric",
    name: "God of Avarice",
    tagline: "Sterblicher, besessen davon, Reichtum bis zur Göttlichkeit zu horten.",
    description:
      "Jagt unendlichem Reichtum nach, trotz hoher persönlicher Kosten. Der Dienst an falschen Herren verdrehte den Ehrgeiz zu etwas Dunklerem und Gefährlicherem.",
    encounterType: "Gier-Prüfung / überlebensgroßes Duell",
    theme: "Reichtum, Ehrgeiz, falsche Loyalität",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e5cc6cd30209c0511f69xZfM5GC503",
    titleImage: "/bosses/10_tit_22cc1602.png",
  },
  {
    id: "heartseeker",
    name: "Heartseeker",
    tagline: "Gestalt aus inneren Dämonen, zugleich vertraut und verstörend.",
    description:
      "Ein Kampf gegen eigene Ängste und Erinnerungen; weniger klassischer Gegner, mehr psychologische Konfrontation.",
    encounterType: "Innere Welt / psychologische Prüfung",
    theme: "Innere Dämonen, Erinnerung, verzerrte Spiegelbilder",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e66d629ae6e2c037d5a6XMt2Twli03",
    titleImage: "/bosses/3_tit_f504b30e.png",
  },
  {
    id: "lucky-seventeen",
    name: "Lucky Seventeen",
    tagline: "Reinen Herzens, Wächter des Palace of Annals, Meister-Schmied.",
    description:
      "Verbindet Pflichtgefühl und Schmiedekunst; der Kampf wirkt wie ein Duell um Tradition und Bewahrung von Geschichte.",
    encounterType: "Wächterduell / Palastverteidigung",
    theme: "Pflicht, Handwerk, Hüter von Wissen",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e657629ae6e2c037d428oNjEcOO703",
    titleImage: "/bosses/1_tit_85fcd171.png",
  },
  {
    id: "murong-yuan",
    name: "Murong Yuan",
    tagline: "Rachsüchtiger Mechanist, der die Mohisten verriet.",
    description:
      "Genie der Mechanik, erschuf das Quintadent-Kriegsschiff. Begegnungen drehen sich um Geräte, Fallen und die Folgen, Ideale zu Waffen zu machen.",
    encounterType: "Mechanik-Boss / Geräte-Lastig",
    theme: "Technik, Verrat, Ideale als Kriegsgerät",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e5f9ec073ee12006cc49NBwJjrMe03",
    titleImage: "/bosses/7_tit_79faa323.png",
  },
  {
    id: "qianye",
    name: "Qianye",
    tagline: "Rücksichtslos, listig, immer hinter wechselnden Masken.",
    description:
      "Meister der Verkleidung und Manipulation; ein Test für Wahrnehmung und Geduld – nichts ist, wie es scheint.",
    encounterType: "Täuschungsduell / Schattenklingen",
    theme: "Maskerade, Manipulation, hinter die Fassade schauen",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e5eb5e38916dd27deaf2bqROEQRE03",
    titleImage: "/bosses/8_tit_8ae9cdaf.png",
  },
  {
    id: "the-void-king",
    name: "The Void King",
    tagline: "Krieger, der die Grenzen des Körpers sprengen will.",
    description:
      "Reine, geschliffene Kraft bis zum Äußersten; weniger Tricks, mehr Ausdauer- und Timing-Prüfung.",
    encounterType: "Hochintensives Duell / Kraftprobe",
    theme: "Grenzen, Disziplin, überwältigende Stärke",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e61aa78083738d6d492c26GNDq8t03",
    titleImage: "/bosses/4_tit_8b3e8cfc.png",
  },
  {
    id: "tian-ying",
    name: "Tian Ying",
    tagline: "Legendäre Assassinin ohne bekannte Vergangenheit oder Familie.",
    description:
      "Geistartige Killerin: überall anwesend, hinterlässt kaum Spuren. Mystery steht über Loyalität.",
    encounterType: "Assassinen-Encounter / Schatten-Duell",
    theme: "Attentat, Anonymität, Leben zwischen Missionen",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e60972bc64d11682a8dakS0hHk2g03",
    titleImage: "/bosses/5_tit_f82610c3.png",
  },
  {
    id: "ye-wanshan",
    name: "Ye Wanshan",
    tagline: "Einst Verteidiger des Nordens, jetzt gnadenloser Angreifer der Zentralebene.",
    description:
      "Gefallener General; Kämpfe tragen das Gewicht gebrochener Eide und wechselnder Loyalitäten – was treibt einen Beschützer zum Henker?",
    encounterType: "Feldherr / Großschlacht",
    theme: "Krieg, Verrat, Fall eines Helden",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e68c41a5c8a28ad3c2c07BGR5fzX03",
    titleImage: "/bosses/2_tit_6ec8679b.png",
  },
  {
    id: "zheng-e",
    name: "Zheng E",
    tagline: "Ermüdeter Schwertkämpfer, einst Retter, nun allein unterwegs.",
    description:
      "Wollte einst die Welt retten, wandte sich dann gegen die Menschheit. Tragische Figur zwischen Idealismus und Ernüchterung; geht nun allein weiter.",
    encounterType: "Story-Duell / tragischer Schwertkampf",
    theme: "Idealismus, Ernüchterung, Alleingang",
    backgroundVideo:
      "https://yysls-build-na.fp.ps.easebar.com/file/68f9e69aeb28216c8722c417KSsSJULb03",
    titleImage: "/bosses/9_tit_33d334bf.png",
  },
];
