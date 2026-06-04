import type { Metadata } from "next";
import CdnImage from "@/components/CdnImage";
import { HomeHubBacklink } from "@/components/HomeHubBacklink";
import Link from "next/link";
import npcPins from "@/public/guides/npc-list/pins-old-friends.json";
import NpcMapClient, { MapPin } from "@/app/(en)/guides/npc-list/NpcMapClient";
import NpcImagePreview from "@/app/(en)/guides/npc-list/NpcImagePreview";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet NPC-Liste - Old Friends Orte & Rewards",
  description:
    "Finde Where Winds Meet NPC-Orte, Old-Friends-Belohnungen, AI-Chat-Zeilen, Qin Caiwei, nicht interaktive NPCs und Karten-Pins.",
  alternates: buildHreflangAlternates("/guides/npc-list", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet NPC-Liste - Old Friends Orte & Rewards",
    description:
      "Finde Old-Friends-NPC-Orte, Belohnungen, AI-Chat-Tipps, Qin Caiwei, nicht interaktive NPCs und Karten-Pins.",
    url: `${baseUrl}/de/guides/npc-list`,
    siteName: "Where Winds Meet Hub",
    images: [
      {
        url: `${baseUrl}/guides/npc-list/hero.png`,
        width: 1200,
        height: 675,
        alt: "Old Friends NPC Collage (Where Winds Meet)",
      },
    ],
    locale: "de_DE",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Where Winds Meet NPC-Liste - Old Friends",
    description:
      "Finde Old-Friends-NPC-Orte, Rewards, AI Chat, Qin Caiwei und Karten-Pins.",
    images: [
      {
        url: `${baseUrl}/guides/npc-list/hero.png`,
        alt: "Old Friends NPC Collage",
      },
    ],
  },
};

const quickFacts = [
  { label: "Umfang", value: "Old Friends / AI-Chat-NPCs", icon: "💬" },
  { label: "Regionen", value: "Qinghe und darüber hinaus", icon: "🧭" },
  { label: "Grundmuster", value: "Zuhören, Empathie, (Klammern) Lösung, Abschied", icon: "🧩" },
  { label: "Belohnungen", value: "Wöchentliche Geschenke, Einmal-Items, Fortschritt", icon: "🎁" },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const npcHighlights = [
  {
    name: "Qin Caiwei",
    region: "Qinghe",
    rewards: "Wöchentliches Old-Friends-Geschenk + Story-Flair",
    chatTip: "Zuhören, Lösung in Klammern, höflicher Abschied",
    difficulty: "Schwer",
    href: "/de/guides/qin-caiwei",
  },
  {
    name: "Li Laizuo",
    region: "Qinghe",
    rewards: "Story-Fortschritt + kleines Geschenk",
    chatTip: "Bedauern spiegeln, dann freundlich verabschieden",
    difficulty: "Mittel",
    image: "https://static.wherewindsmeet.org/guides/npc-list/li-laizuo.png",
  },
  {
    name: "Fang Xu",
    region: "Qinghe (Umland)",
    rewards: "Münzen, Zusatzdialog",
    chatTip: "Sorge spiegeln, dann (in Klammern) lösen",
    difficulty: "Mittel",
    image: "https://static.wherewindsmeet.org/guides/npc-list/fang-xu.png",
  },
  {
    name: "Lie Buxi",
    region: "Qinghe",
    rewards: "Old-Friends-Fortschritt",
    chatTip: "Erst Empathie, dann klar abschließen",
    difficulty: "Mittel",
    image: "https://static.wherewindsmeet.org/guides/npc-list/lie-buxi.png",
  },
  {
    name: "Zhao Weiye",
    region: "Qinghe",
    rewards: "Kleines Geschenk, Listen-Eintrag",
    chatTip: "Zustimmen, höflich beenden",
    difficulty: "Leicht",
  },
  {
    name: "Liu der Holzfäller",
    region: "Wildnis",
    rewards: "Materialien, Zusatzdialog",
    chatTip: "Bitte in Klammern auflösen",
    difficulty: "Leicht",
  },
  {
    name: "Zhou Yihang",
    region: "Qinghe",
    rewards: "Münzen, Listen-Eintrag",
    chatTip: "Hinweis wiederholen, dann verabschieden",
    difficulty: "Leicht",
  },
  {
    name: "Ren Shuiliu",
    region: "Sumpf",
    rewards: "Story-Flair",
    chatTip: "Ruhiger Ton + einfache Zusage",
    difficulty: "Mittel",
  },
  {
    name: "Hong Yang",
    region: "Außenposten",
    rewards: "Materialien",
    chatTip: "Hilfe anbieten und sauber verabschieden",
    difficulty: "Leicht",
  },
  {
    name: "Jiang Yulang",
    region: "Qinghe-Wildnis",
    rewards: "Listen-Eintrag",
    chatTip: "Kurze Empathie + Ergebnis in Klammern",
    difficulty: "Leicht",
  },
  {
    name: "Yueniang",
    region: "Dorf",
    rewards: "Kleines Geschenk",
    chatTip: "Ermutigen und höflich beenden",
    difficulty: "Leicht",
  },
  {
    name: "Tian Heng",
    region: "Grenzland",
    rewards: "Story-Fortschritt",
    chatTip: "Haltung spiegeln, dann verabschieden",
    difficulty: "Mittel",
  },
];

const aiChatBasics = [
  "Den Hinweis über dem Chat lesen und einmal in eigenen Worten wiederholen.",
  "Eine Empathie-Zeile, eine Lösung in Klammern, dann ein klarer Abschied.",
  "Kurz halten (3–6 Zeilen); bei Entgleisung resetten und erneut starten.",
  "Konkrete Beats funktionieren besser als vage Trösterei; keine „Mind-Control“-Einzeiler.",
];

const copyLines = [
  "Erzähl mir deine Geschichte. Ich höre dir zu.",
  "Erzähl weiter – was belastet dich?",
  "(hilft dir, die Sache zu klären und zur Ruhe zu kommen)",
  "(wir werden Freunde und vertrauen einander)",
  "Lebewohl (verbeugt sich und geht).",
];

const searchIntentAnswers = [
  {
    title: "NPC-Orte",
    summary:
      "Nutze die Old-Friends-Karte und die Kartenliste, um NPCs nach Region, Gebiet oder Name zu finden. Starte mit Verdant Wilds, Sundara Land und Moonveil Mountain, wenn ein Completion-Zähler noch fehlt.",
  },
  {
    title: "Old-Friends-Belohnungen",
    summary:
      "Viele Old Friends bringen wöchentliche Geschenke, einmalige Kleinigkeiten, regionale Completion und kleine Story-Szenen. Früh abschließen lohnt sich, weil die Wochenbelohnungen früher starten.",
  },
  {
    title: "AI-Chat-Skript",
    summary:
      "Das schnelle Muster: Hinweis wiederholen, eine Empathie-Zeile schreiben, eine Lösung in Klammern formulieren und höflich verabschieden. Nutze die Copy-Zeilen, wenn ein NPC in der Schleife hängt.",
  },
  {
    title: "Qin Caiwei und schwere NPCs",
    summary:
      "Wenn ein NPC kurze Antworten ablehnt, wechsle zu vollem Rollenspiel. Qin Caiwei ist das wichtigste Beispiel; spring zum eigenen Guide, wenn ihr Friendship-Schritt hängt.",
  },
];

const npcFaqs = [
  {
    q: "Wo finde ich NPCs in Where Winds Meet?",
    a: "Nutze die interaktive Old-Friends-Karte auf dieser Seite und filtere nach Region oder NPC-Name. Jede Karte nennt außerdem Gebiet und kurzen Routenhinweis.",
  },
  {
    q: "Was sind Old Friends in Where Winds Meet?",
    a: "Old Friends sind interaktive NPC-Beziehungen mit Gespräch, AI Chat, kleineren Belohnungen, wöchentlichen Geschenken und regionalem Completion-Fortschritt.",
  },
  {
    q: "Wie befreunde ich NPCs per AI Chat?",
    a: "Lies den Hinweis, spiegel die Sorge des NPCs, füge eine Handlung in Klammern hinzu und beende das Gespräch höflich. Wenn es entgleist, resetten und anders formulieren.",
  },
  {
    q: "Warum ist Qin Caiwei schwieriger als andere NPCs?",
    a: "Qin Caiwei braucht oft mehr Rollenspiel als eine kurze Trostzeile. Nutze den eigenen Qin-Caiwei-Guide, wenn der Old-Friends-Schritt wiederholt scheitert.",
  },
  {
    q: "Sind Qi Sheng und Yao Yaoyao Old-Friends-NPCs?",
    a: "Nein. Sie sind in der Welt sichtbar und bieten Services, öffnen aber kein Old Friends oder AI Chat. Deshalb stehen sie separat bei den nicht interaktiven NPCs.",
  },
];

type NpcEntry = {
  name: string;
  region?: string;
  area?: string;
  hint?: string;
  image?: string;
};

const npcDetails: NpcEntry[] = [
  { name: "Li Laizuo", region: "Verdant Wilds", area: "General's Shrine", hint: "Im Lager beim General's Shrine: bei einer Gruppe Untergebener neben dem Schrein.", image: "https://static.wherewindsmeet.org/guides/npc-list/li-laizuo.png" },
  { name: "Fang Xu", region: "Verdant Wilds", area: "General's Shrine", hint: "Oben auf einem Gerüst neben der Arena. Ein paar Mal mit ihm sparren, dann ansprechen.", image: "https://static.wherewindsmeet.org/guides/npc-list/fang-xu.png" },
  { name: "Lie Buxi", region: "Verdant Wilds", area: "General's Shrine", hint: "Am Fluss südlich des General's Shrine. Sie bittet um Hilfe bei der Suche nach ihren Brüdern.", image: "https://static.wherewindsmeet.org/guides/npc-list/lie-buxi.png" },
  { name: "Zhao Dali", region: "Verdant Wilds", area: "General's Shrine", hint: "Nahe dem Hauptschrein im General's Shrine, beim Training.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhao-dali.png" },
  { name: "Chai Bakun", region: "Verdant Wilds", area: "General's Shrine", hint: "Südlich des General's Shrine beim Baumfällen.", image: "https://static.wherewindsmeet.org/guides/npc-list/chai-bakun.png" },
  { name: "Fu Lushou", region: "Verdant Wilds", area: "General's Shrine", hint: "Vom Eingang des General's Shrine ins rechte Gebäude. Je nach Tag auch draußen beim Schrein.", image: "https://static.wherewindsmeet.org/guides/npc-list/fu-lushou.png" },
  { name: "Jin Xiaobao", region: "Verdant Wilds", area: "Bamboo Abode", hint: "Auf dem Schlickfeld südlich des Verdant Wilds Wayfarer.", image: "https://static.wherewindsmeet.org/guides/npc-list/jin-xiaobao.png" },
  { name: "Fu Lubao", region: "Verdant Wilds", area: "General's Shrine", hint: "Oben links, neben einer Steinsäule.", image: "https://static.wherewindsmeet.org/guides/npc-list/fu-lubao.png" },
  { name: "Wang Duobao", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Sitzend beim Angeln am Flussrand links vom General's Shrine, nördlich des Stonewash Strand Boundary Stone.", image: "https://static.wherewindsmeet.org/guides/npc-list/wang-duobao.png" },
  { name: "Jin Chunniang", region: "Verdant Wilds", area: "Bamboo Abode", hint: "Auf dem Schlickfeld südlich des Verdant Wilds Wayfarer.", image: "https://static.wherewindsmeet.org/guides/npc-list/jin-chunniang.png" },
  { name: "Wang Duolu", region: "Verdant Wilds", area: "General's Shrine", hint: "Am See gegenüber vom General's Shrine Boundary Stone beim Angeln.", image: "https://static.wherewindsmeet.org/guides/npc-list/wang-duolu.png" },
  { name: "Daozheng", region: "Sundara Land", area: "Halo Peak", hint: "Neben einem Tisch vor einem Haus zu finden.", image: "https://static.wherewindsmeet.org/guides/npc-list/daozheng.png" },
  { name: "Miaojue", region: "Sundara Land", area: "Halo Peak", hint: "Auf einem Berg nahe eines Tempels.", image: "https://static.wherewindsmeet.org/guides/npc-list/miaojue.png" },
  { name: "Li Daniu", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Nördlich des Starfall Spring Boundary Stone, nahe der Straße bei Battlecrest Slope – beim Holzfällen.", image: "https://static.wherewindsmeet.org/guides/npc-list/li-daniu.png" },
  { name: "Li Shaokui", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Vor einer zerstörten Hütte nordöstlich des Starfall Spring Boundary Stone.", image: "https://static.wherewindsmeet.org/guides/npc-list/li-shaokui.png" },
  { name: "Zhou Yizhou", region: "Sundara Land", area: "Mercyheart Town", hint: "Ganz links an den Docks.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhou-yizhou.png" },
  { name: "Rafter Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Nahe der Brücke, hinter hohem Gras.", image: "https://static.wherewindsmeet.org/guides/npc-list/rafter-rat.png" },
  { name: "Wobbly Tang", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Am Straßenrand südlich des Tiger Fort (Battlecrest Slope).", image: "https://static.wherewindsmeet.org/guides/npc-list/tang-lubao.png" },
  { name: "Embroidered Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Haus (drinnen leicht zu sehen).", image: "https://static.wherewindsmeet.org/guides/npc-list/embroidered-rat.png" },
  { name: "Tang Lubao", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Am Straßenrand südlich des Tiger Fort (Battlecrest Slope).", image: "https://static.wherewindsmeet.org/guides/npc-list/tang-lubao.png" },
  { name: "Pan Faxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Auf den Stufen am Fluss sitzend.", image: "https://static.wherewindsmeet.org/guides/npc-list/pan-faxin.png" },
  { name: "Zhou Miaoxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Tanzend hinter einer Statue.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhou-miaoxin.png" },
  { name: "Barn Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Haus (drinnen).", image: "https://static.wherewindsmeet.org/guides/npc-list/barn-rat.png" },
  { name: "Burrowing Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Norden des Dorfes beim Hacken, nahe eines zerstörten Hauses.", image: "https://static.wherewindsmeet.org/guides/npc-list/burrowing-rat.png" },
  { name: "Small Chisel", region: "Sundara Land", area: "Mercyheart Town", hint: "Draußen vor seinem Haus.", image: "https://static.wherewindsmeet.org/guides/npc-list/small-chisel.png" },
  { name: "Pip Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Norden der Stadt am Boden spielend, nahe des Wegs zum Mercyheart Monastery.", image: "https://static.wherewindsmeet.org/guides/npc-list/pip-rat.png" },
  { name: "Chai Jiudui", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Auf Stonewash Strand südlich des Boundary Stone beim Holzfällen.", image: "https://static.wherewindsmeet.org/guides/npc-list/chai-jiudui.png" },
  { name: "Feng Rusong", region: "Sundara Land", area: "Mercyheart Monastery", hint: "Nahe dem Eingang des Divinecraft Dungeon.", image: "https://static.wherewindsmeet.org/guides/npc-list/feng-rusong.png" },
  { name: "Zhu Bawan", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Auf dem Canopy/Vordach am Stonewash Strand östlich des Moonveil Mountain Wayfarer.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhu-bawan.png" },
  { name: "Pan Xinniang", region: "Sundara Land", area: "Mercyheart Town", hint: "Beim Pflücken von Buddhist Flowers zu sehen.", image: "https://static.wherewindsmeet.org/guides/npc-list/pan-xinniang.png" },
  { name: "Jingyi", region: "Sundara Land", area: "Halo Peak", hint: "Am Weg nördlich des Halo Peak Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/jingyi.png" },
  { name: "Wu Jingming", region: "Sundara Land", area: "Halo Peak", hint: "Entlang des Wegs Richtung Halo Peak.", image: "https://static.wherewindsmeet.org/guides/npc-list/wu-jingming.png" },
  { name: "Chai Sansheng", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Beim Holzfällen nahe dem Path of Karma Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/chai-sansheng.png" },
  { name: "Bodhi", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Steht zwischen mehreren Katzen.", image: "https://static.wherewindsmeet.org/guides/npc-list/bodhi.png" },
  { name: "Shi the Boatman", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "In der Nähe des Heaven's Pier Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/shi-the-boatman.png" },
  { name: "Zhao Weiye", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Beim Trinken aus einem großen Behälter.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhao-weiye.png" },
  { name: "Lu Sheng", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Vor dem Stand von Yuan Tiantian.", image: "https://static.wherewindsmeet.org/guides/npc-list/lu-sheng.png" },
  { name: "Xiang the Greedy", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Neben mehreren großen Behältern.", image: "https://static.wherewindsmeet.org/guides/npc-list/xiang-the-greedy.png" },
  { name: "Song Wu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Im Wirtshaus beim Fegen.", image: "https://static.wherewindsmeet.org/guides/npc-list/song-wu.png" },
  { name: "Yueniang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Am Fluss beim Wäschewaschen.", image: "https://static.wherewindsmeet.org/guides/npc-list/yueniang.png" },
  { name: "Auntie Tian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Im Haus hinter Yuan Tiantians Stand.", image: "https://static.wherewindsmeet.org/guides/npc-list/auntie-tian.png" },
  { name: "Zhang Dazhuang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Vor der Feuerbrauerei (Fire-forced brewing).", image: "https://static.wherewindsmeet.org/guides/npc-list/zhang-dazhuang.png" },
  { name: "Uncle Mi", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Unter einem weißen Blütenbaum.", image: "https://static.wherewindsmeet.org/guides/npc-list/uncle-mi.png" },
  { name: "Fluffy Cat", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Hinter einem Haus, bei dem Blütenblätter zum Trocknen ausgelegt sind.", image: "https://static.wherewindsmeet.org/guides/npc-list/fluffy-cat.png" },
  { name: "Beggar Liu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Unter einem Baum am Rand des Gebiets.", image: "https://static.wherewindsmeet.org/guides/npc-list/beggar-liu.png" },
  { name: "Liu the Woodcutter", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "Vom Moonveil Peak Landmark nach rechts; er hackt Holz unterhalb des Berges.", image: "https://static.wherewindsmeet.org/guides/npc-list/liu-the-woodcutter.png" },
  { name: "Shi Jingtian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Auf dem Weg zwischen Peacebell Tower und Crimson Cliff.", image: "https://static.wherewindsmeet.org/guides/npc-list/shi-jingtian.png" },
  { name: "Chai Shipi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Ganz rechts bei Heaven Pier beim Holzfällen.", image: "https://static.wherewindsmeet.org/guides/npc-list/chai-shipi.png" },
  { name: "Yan Momo", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Nahe dem Crimson Cliff Landmark, sammelt Blätter von einem einsamen roten Baum.", image: "https://static.wherewindsmeet.org/guides/npc-list/yan-momo.png" },
  { name: "Wu Qiwan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Hinter hohem Gras nahe der Klippenkante.", image: "https://static.wherewindsmeet.org/guides/npc-list/wu-qiwan.png" },
  { name: "Mr. Qiao", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Neben Wagen, nahe den Docks.", image: "https://static.wherewindsmeet.org/guides/npc-list/mr-qiao.png" },
  { name: "Mu Laosan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Vom Stillwind Slope Landmark nach Norden; dort beim Baumfällen.", image: "https://static.wherewindsmeet.org/guides/npc-list/mu-laosan.png" },
  { name: "Niu Sanqi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Etwas nördlich der Stillwind Slope zusammen mit anderen Flüchtlingen.", image: "https://static.wherewindsmeet.org/guides/npc-list/niu-sanqi.png" },
  { name: "Zhu Jiuba", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Etwas nördlich der Stillwind Slope zusammen mit anderen Flüchtlingen.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhu-jiuba.png" },
  { name: "Ma Zhongwu", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Etwas nördlich der Stillwind Slope zusammen mit anderen Flüchtlingen.", image: "https://static.wherewindsmeet.org/guides/npc-list/ma-zhongwu.png" },
  { name: "Lan Huahua", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Vom Stillslope Landmark nach rechts; sie tanzt nahe eines Felsens.", image: "https://static.wherewindsmeet.org/guides/npc-list/lan-huahua.png" },
  { name: "Zhou Yihang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "An den Docks unten links beim Stillwind Slope Marker.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhou-yihang.png" },
  { name: "Zhang the Diviner", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Südlich vom Back Mountain Landmark, im Lager mit Boss Qian.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhang-the-diviner.png" },
  { name: "Boss Qian", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Südlich vom Back Mountain Landmark, im Lager mit Zhang the Diviner.", image: "https://static.wherewindsmeet.org/guides/npc-list/boss-qian.png" },
  { name: "Tao Wang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Vom Back Mountain Landmark nach Norden, die Felswand hochklettern; oben zu finden.", image: "https://static.wherewindsmeet.org/guides/npc-list/tao-wang.png" },
  { name: "Mountain Dweller", region: "Moonveil Mountain", area: "Sage's Knoll", hint: "In der Nähe des Deer Pond Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/mountain-dweller.png" },
  { name: "Hai Changchong", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Nahe einer Klippe zu sehen.", image: "https://static.wherewindsmeet.org/guides/npc-list/hai-changchong.png" },
  { name: "Dog", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Gräbt nahe einem Holzstapel.", image: "https://static.wherewindsmeet.org/guides/npc-list/dog.png" },
  { name: "Shui Changliu", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Steht nahe dem Fluss.", image: "https://static.wherewindsmeet.org/guides/npc-list/shui-changliu.png" },
  { name: "Hunter", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Hinter einem Bambuscluster nahe dem Fluss.", image: "https://static.wherewindsmeet.org/guides/npc-list/hunter.png" },
  { name: "Liu Heiqui", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Am Straßenrand zu finden.", image: "https://static.wherewindsmeet.org/guides/npc-list/liu-heiqui.png" },
  { name: "Feng Shishi", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Am Straßenrand zusammen mit ihrem Begleiter Xie Changgong.", image: "https://static.wherewindsmeet.org/guides/npc-list/feng-shishi.png" },
  { name: "Shan Yinjiang", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Nahe etwas Bambus zu finden.", image: "https://static.wherewindsmeet.org/guides/npc-list/shan-yinjiang.png" },
  { name: "Wu Dayong", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Nahe einem Banditenlager zu finden.", image: "https://static.wherewindsmeet.org/guides/npc-list/wu-dayong.png" },
  { name: "Wenwu", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Nahe einem einsamen Baum zu finden.", image: "https://static.wherewindsmeet.org/guides/npc-list/wenwu.png" },
  { name: "Shen Weiqing", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Entlang der Straße zusammen mit ihrem Sword Servant.", image: "https://static.wherewindsmeet.org/guides/npc-list/shen-weiqing.png" },
  { name: "Hong Yang", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Nahe einem See zusammen mit Lu Ke.", image: "https://static.wherewindsmeet.org/guides/npc-list/hong-yang.png" },
  { name: "Wen Gao", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Zwischen einem Baum und einem Wagen.", image: "https://static.wherewindsmeet.org/guides/npc-list/wen-gao.png" },
  { name: "Ya Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "An den Docks zu finden.", image: "https://static.wherewindsmeet.org/guides/npc-list/ya-zhou.png" },
  { name: "Hu Da", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Vom Encircling Lake Landmark dem Weg nach links folgen; er steht links beim Outdoor-Sitzbereich.", image: "https://static.wherewindsmeet.org/guides/npc-list/hu-da.png" },
  { name: "Elder Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "An den Docks unten rechts vom Back Mountain Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/elder-zhou.png" },
  { name: "Meng Da", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "Nordöstlich vom Harvest Village Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/meng-da.png" },
  { name: "Hao Jiu", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "Nahe dem Zaun.", image: "https://static.wherewindsmeet.org/guides/npc-list/hao-jiu.png" },
  { name: "Lu Kangge", region: "Moonveil Mountain", area: "Blissful Retreat", hint: "Südwestlich vom Source of Still Shore Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/lu-kangge.png" },
  { name: "Jin Nanshou", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "Beim Deerforage Grove Landmark starten, der Straße nach Norden bis zur Gabelung folgen, dann rechts. Er steht am Straßenrand.", image: "https://static.wherewindsmeet.org/guides/npc-list/jin-nanshou.png" },
  { name: "Jing'an", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "An der Gabelung in der Mitte der Straße. Erreichbar: südlich vom Porcelain Kiln Landmark oder nördlich vom Deerforage Grove Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/jing-an.png" },
  { name: "Lin Jin", region: "Moonveil Mountain", area: "Witherwilds", hint: "Vom Porcelain Kiln Landmark die südliche Straße nehmen; er hackt Holz am Straßenrand.", image: "https://static.wherewindsmeet.org/guides/npc-list/lin-jin.png" },
  { name: "Sun Mang", region: "Moonveil Mountain", area: "Witherwilds", hint: "Vom Porcelain Kiln Boundary Stone der südlichen Straße folgen; er steht am Rand der Weggabelung.", image: "https://static.wherewindsmeet.org/guides/npc-list/sun-mang.png" },
  { name: "Li Yueniang", region: "Moonveil Mountain", area: "Riverside Station", hint: "Zusammen mit Yu Songfeng nahe dem Eingang der Fährstation.", image: "https://static.wherewindsmeet.org/guides/npc-list/li-yueniang.png" },
  { name: "Yu Songfeng", region: "Moonveil Mountain", area: "Riverside Station", hint: "Zusammen mit Li Yueniang nahe dem Eingang der Fährstation.", image: "https://static.wherewindsmeet.org/guides/npc-list/yu-songfeng.png" },
  { name: "Wang Duoli", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Südlich des Sees nahe dem Starfall Spring Boundary Stone.", image: "https://static.wherewindsmeet.org/guides/npc-list/wang-duoli.png" },
  { name: "Ren Shuiliu", region: "Moonveil Mountain", area: "Riverside Station", hint: "Im roten Gebäude neben Meng Zhixia.", image: "https://static.wherewindsmeet.org/guides/npc-list/ren-shuiliu.png" },
  { name: "Meng Zhixia", region: "Moonveil Mountain", area: "Riverside Station", hint: "Im roten Gebäude neben Ren Shuiliu.", image: "https://static.wherewindsmeet.org/guides/npc-list/meng-zhixia.png" },
  { name: "Yu Nu", region: "Moonveil Mountain", area: "Riverside Station", hint: "Im roten Gebäude mit Blick aufs Meer.", image: "https://static.wherewindsmeet.org/guides/npc-list/yu-nu.png" },
  { name: "Jiang Nanyi", region: "Moonveil Mountain", area: "Riverside Station", hint: "Unter einem weißen Blütenbaum an den Docks, hinter einigen Damen.", image: "https://static.wherewindsmeet.org/guides/npc-list/jiang-nanyi.png" },
  { name: "Zhou Canying", region: "Moonveil Mountain", area: "Riverside Station", hint: "An einem der Tische im roten Gebäude sitzend.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhou-canying.png" },
  { name: "Tian Heng", region: "Moonveil Mountain", area: "Riverside Station", hint: "An einem der Tische im roten Gebäude sitzend.", image: "https://static.wherewindsmeet.org/guides/npc-list/tian-heng.png" },
  { name: "Wu Cezhi", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "In der linken Toilette/Latreine zu finden.", image: "https://static.wherewindsmeet.org/guides/npc-list/wu-cezhi.png" },
  { name: "Angler", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "Sitzend am Ufer im Nordosten des Dorfes.", image: "https://static.wherewindsmeet.org/guides/npc-list/angler.png" },
  { name: "Cao Jinyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Neben Tao Jingjing im Erdgeschoss der Revelry Hall, an der Nordseite des Gebaeudes.", image: "https://static.wherewindsmeet.org/guides/npc-list/cao-jinyang.png" },
  { name: "Chu Yuan", region: "Kaifeng City", area: "Velvet Shade", hint: "Oestlich des Velvet Shade Landmark, auf der Strasse stehend.", image: "https://static.wherewindsmeet.org/guides/npc-list/chu-yuan.png" },
  { name: "He Ruiyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Neben Li Yushan im Erdgeschoss der Revelry Hall, an der Suedwestseite des Gebaeudes.", image: "https://static.wherewindsmeet.org/guides/npc-list/he-ruiyang.png" },
  { name: "Jiang Li", region: "Kaifeng City", area: "Velvet Shade", hint: "Von Springwave Pavilion nach Sueden gehen, dann rechts; hinter dem Haus, in dem Yiluo (Graceful Memory) wohnt.", image: "https://static.wherewindsmeet.org/guides/npc-list/jiang-li.png" },
  { name: "Jiang Yulang", region: "Kaifeng City", area: "Velvet Shade", hint: "Noerdlich von Springwave Pavilion, im Blumenladen mit Rong Xiaoxiao.", image: "https://static.wherewindsmeet.org/guides/npc-list/jiang-yulang.png" },
  { name: "Jing Chaoyang", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall, am Fenster.", image: "https://static.wherewindsmeet.org/guides/npc-list/jing-chaoyang.png" },
  { name: "Leng Daculi", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall, beim Essen in einem Privatraum.", image: "https://static.wherewindsmeet.org/guides/npc-list/leng-daculi.png" },
  { name: "Li Youxin", region: "Kaifeng City", area: "Velvet Shade", hint: "Nahe dem Velvet Shade Landmark bei den Docks.", image: "https://static.wherewindsmeet.org/guides/npc-list/li-youxin.png" },
  { name: "Li Yuerong", region: "Kaifeng City", area: "Velvet Shade", hint: "Nahe dem Velvet Shade Landmark, vor einem Antiquitaetengeschaeft.", image: "https://static.wherewindsmeet.org/guides/npc-list/li-yuerong.png" },
  { name: "Lu Zhuo", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall neben Wu Peng, nahe der Osttreppe zum dritten Stock.", image: "https://static.wherewindsmeet.org/guides/npc-list/lu-zhuo.png" },
  { name: "Mu Huaishan", region: "Kaifeng City", area: "Velvet Shade", hint: "Suedlich von Springwave Pavilion, im Gespraech mit Huo Tinglan.", image: "https://static.wherewindsmeet.org/guides/npc-list/mu-huaishan.png" },
  { name: "Murong Chan", region: "Kaifeng City", area: "Velvet Shade", hint: "Nahe einigen Blumenarrangements.", image: "https://static.wherewindsmeet.org/guides/npc-list/murong-chan.png" },
  { name: "Qi Wuyu", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, vorne in der Mitte bei der Auffuehrung.", image: "https://static.wherewindsmeet.org/guides/npc-list/qi-wuyu.png" },
  { name: "Qin Zhu", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, an der Suedseite des Gebaeudes.", image: "https://static.wherewindsmeet.org/guides/npc-list/qin-zhu.png" },
  { name: "Qiu Fengxi", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, an der Westseite des Gebaeudes.", image: "https://static.wherewindsmeet.org/guides/npc-list/qiu-fengxi.png" },
  { name: "Ruan Sese", region: "Kaifeng City", area: "Velvet Shade", hint: "Nahe dem Velvet Shade Landmark, vor dem Laden einen Drachen betrachtend.", image: "https://static.wherewindsmeet.org/guides/npc-list/ruan-sese.png" },
  { name: "Shen Moxuan", region: "Kaifeng City", area: "Velvet Shade", hint: "Auf der anderen Seite der Bruecke oestlich des Velvet Shade Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/shen-moxuan.png" },
  { name: "Song Shiheng", region: "Kaifeng City", area: "Velvet Shade", hint: "Auf der Bruecke oestlich des Velvet Shade Landmark, im Gespraech mit Yan Chuchu.", image: "https://static.wherewindsmeet.org/guides/npc-list/song-shiheng.png" },
  { name: "Su Xinlu", region: "Kaifeng City", area: "Velvet Shade", hint: "Suedlich von Springwave Pavilion, im Gespraech mit Yang Chunnuan und drei weiteren NPCs.", image: "https://static.wherewindsmeet.org/guides/npc-list/su-xinlu.png" },
  { name: "Tan Xiangchen", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall neben Yin Yan, nahe der Westtreppe zum ersten Stock.", image: "https://static.wherewindsmeet.org/guides/npc-list/tan-xiangchen.png" },
  { name: "Tao Jingjing", region: "Kaifeng City", area: "Velvet Shade", hint: "Neben Cao Jinyang im Erdgeschoss der Revelry Hall, an der Nordseite des Gebaeudes.", image: "https://static.wherewindsmeet.org/guides/npc-list/tao-jingjing.png" },
  { name: "Tu Er", region: "Kaifeng City", area: "Velvet Shade", hint: "Noerdlich von Springwave Pavilion, im Gespraech mit Tu Dakuan.", image: "https://static.wherewindsmeet.org/guides/npc-list/tu-er.png" },
  { name: "Xu Lijun", region: "Kaifeng City", area: "Velvet Shade", hint: "Neben Ye Zhiqiu im Erdgeschoss der Revelry Hall, an der Ostseite des Gebaeudes.", image: "https://static.wherewindsmeet.org/guides/npc-list/xu-lijun.png" },
  { name: "Xu Yingyu", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, an der Westseite des Gebaeudes.", image: "https://static.wherewindsmeet.org/guides/npc-list/xu-yingyu.png" },
  { name: "Xue Li", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall, beim Essen mit Zhuang Zhengzhi.", image: "https://static.wherewindsmeet.org/guides/npc-list/xue-li.png" },
  { name: "Yan Chuchu", region: "Kaifeng City", area: "Velvet Shade", hint: "Auf der Bruecke rechts vom Velvet Shade Landmark, im Gespraech mit Song Shiheng.", image: "https://static.wherewindsmeet.org/guides/npc-list/yan-chuchu.png" },
  { name: "Yan Ziyan", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, an der Suedseite des Gebaeudes.", image: "https://static.wherewindsmeet.org/guides/npc-list/yan-ziyan.png" },
  { name: "Yang Chunnuan", region: "Kaifeng City", area: "Velvet Shade", hint: "Suedlich von Springwave Pavilion, im Gespraech mit Su Xinlu und drei weiteren NPCs.", image: "https://static.wherewindsmeet.org/guides/npc-list/yang-chunnuan.png" },
  { name: "Ye Zhiqiu", region: "Kaifeng City", area: "Velvet Shade", hint: "Neben Xu Lijun im Erdgeschoss der Revelry Hall, an der Ostseite des Gebaeudes.", image: "https://static.wherewindsmeet.org/guides/npc-list/ye-zhiqiu.png" },
  { name: "Yi Xi", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall, beim Essen mit Guo Zhixiang.", image: "https://static.wherewindsmeet.org/guides/npc-list/yi-xi.png" },
  { name: "Yu Hui", region: "Kaifeng City", area: "Velvet Shade", hint: "Am Ende der Strasse, westlich des Velvet Shade Landmark.", image: "https://static.wherewindsmeet.org/guides/npc-list/yu-hui.png" },
  { name: "Zhen Huo", region: "Kaifeng City", area: "Velvet Shade", hint: "Im Erdgeschoss der Revelry Hall, an der Suedseite des Gebaeudes.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhen-huo.png" },
  { name: "Zhuang Zhengzhi", region: "Kaifeng City", area: "Velvet Shade", hint: "Im zweiten Stock der Revelry Hall, beim Essen mit Xue Li.", image: "https://static.wherewindsmeet.org/guides/npc-list/zhuang-zhengzhi.png" },
];

const npcPinsArray = npcPins as unknown as Partial<MapPin>[];

const allPins: MapPin[] = npcPinsArray.map((p) => {
  const detail = npcDetails.find((d) => d.name === p.name);
  return {
    name: p.name ?? detail?.name ?? "Unbekannter NPC",
    x: p.x ?? 0,
    y: p.y ?? 0,
    region: detail?.region ?? p.region ?? undefined,
    area: detail?.area ?? p.area ?? undefined,
    hint: detail?.hint ?? p.hint ?? undefined,
    image: detail?.image ?? p.image ?? undefined,
  };
});

const allPinsSorted: MapPin[] = [...allPins].sort((a, b) => a.name.localeCompare(b.name));

const nonInteractableNpcs = [
  {
    name: "Qi Sheng",
    role: "Oddity Collector (kein AI-Chat)",
    region: "Verdant Wilds",
    area: "Südöstlich vom General's Shrine, westlich vom Wayfarer",
    details:
      "Oddities bei Qi Sheng tauschen, um Melodies of Peace zu verbessern. NPC ist vorhanden, löst aber kein Old Friends / AI Chat aus.",
    image: "https://static.wherewindsmeet.org/guides/npc-list/qi-sheng.png",
  },
  {
    name: "Yao Yaoyao",
    role: "Healer (kein AI-Chat)",
    region: "Qinghe",
    area: "Evercare Clinic, nördlich von Moonveil Mountain und südlich von Blissful Retreat",
    details:
      "Heilt gegen Gebühr und kann die Medizinkapazität erweitern (über Medicinal Tales). Kein Old Friends / AI Chat verfügbar.",
    image: "https://static.wherewindsmeet.org/guides/npc-list/yao-yaoyao.png",
  },
];

export default function NpcListPage() {
  const mapUiText = {
    regionLabel: "Region",
    allOption: "Alle",
    searchPlaceholder: "NPC suchen…",
    showingPrefix: "Angezeigt",
    showingSuffix: "Pins",
    mapAlt: "Old Friends Karte (Where Winds Meet)",
    closeAriaLabel: "Schließen",
    regionPrefix: "Region:",
    areaPrefix: "Gebiet:",
    unknownValue: "Unbekannt",
    portraitAltSuffix: "Porträt",
    defaultHint: "Nutze das Chat-Muster oben, sobald du diesen NPC erreicht hast.",
  } as const;

  const imagePreviewUiText = {
    instruction: "Scrollen oder Buttons zum Zoomen; Hintergrund anklicken zum Schließen",
    zoomIn: "Zoom +",
    zoomOut: "Zoom -",
    reset: "1x",
    close: "Schließen",
  } as const;

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/de/guides/npc-list`,
      dateModified: "2026-06-03",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: npcFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ];

  return (
    <article className="space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHubBacklink language="de" />
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0">
          <CdnImage
            src="/guides/npc-list/hero.png"
            alt="Old Friends NPC-Liste (Where Winds Meet) – Titelbild"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40" />
        </div>

        <div className="relative grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-50">
              Where Winds Meet NPC-Liste: Old Friends Orte, Rewards und AI Chat.
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Suchst du eine Where Winds Meet NPC-Liste? Starte hier. Dieser Guide bündelt Old-Friends-NPC-Orte, Regionen, Belohnungen, Karten-Vorschau, nicht interaktive NPCs und Copy-Paste-AI-Chat-Zeilen für schwierige Freunde wie Qin Caiwei.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#npc-map"
                className="inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 transition hover:border-emerald-300/80 hover:text-emerald-50"
              >
                🗺️ Interaktive Karte öffnen
              </Link>
              <Link
                href="/de/guides/qin-caiwei"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-500/10 px-4 py-2 text-xs font-semibold text-amber-100 transition hover:border-amber-300/80 hover:text-amber-50"
              >
                💬 Qin Caiwei Chat-Guide
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-inner shadow-black/20">
                <p className="text-xs uppercase tracking-wide text-slate-400 flex items-center gap-2">
                  <span>{fact.icon}</span>
                  {fact.label}
                </p>
                <p className="text-sm font-semibold text-slate-100 mt-1">{fact.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-6 shadow-lg">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200">
            Schnelle Antwort fur Suchende
          </p>
          <h2 className="text-2xl font-bold text-slate-50">
            Nutze diese Seite, wenn du einen NPC-Ort, Old-Friends-Reward, AI-Chat-Satz oder Karten-Pin brauchst.
          </h2>
          <p className="max-w-3xl text-sm leading-relaxed text-emerald-50/90">
            Die Seite ist auf die wichtigsten Where Winds Meet NPC-Suchen ausgerichtet: wo ein NPC steht, ob er als Old Friend zählt, welche Belohnung oder Completion er bringt und was du schreiben kannst, wenn AI Chat eine kurze Antwort ablehnt.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {searchIntentAnswers.map((item) => (
            <div key={item.title} className="rounded-2xl border border-emerald-400/30 bg-slate-950/60 p-4">
              <h3 className="text-sm font-semibold text-emerald-100">{item.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="npc-map" className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">🧭</span>
            <h2 className="text-2xl font-bold text-slate-50">NPC-Karte (Vorschau)</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Nutze die Karte, um Old-Friends-Pins nach Region oder Name zu filtern. Danach den NPC ansprechen und das Muster rechts verwenden.
        </p>
        <NpcMapClient pins={allPins} uiText={mapUiText} imagePreviewUiText={imagePreviewUiText} />
          <div className="flex flex-wrap gap-3">
            <Link
            href="#npc-map"
            className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold text-emerald-100 hover:border-emerald-300/70 hover:text-emerald-50"
            >
              Karte öffnen
            </Link>
            <Link
              href="/de/guides/gift-of-gab"
              className="rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-emerald-400 hover:text-emerald-50"
            >
              AI-Chat-Grundlagen (Gift of Gab)
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-slate-800/80 bg-slate-950/70 p-6 shadow-lg">
          <div className="flex items-center gap-2">
            <span className="text-xl">📌</span>
            <h2 className="text-2xl font-bold text-slate-50">NPC schnell befreunden (Muster)</h2>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            {aiChatBasics.map((tip) => (
              <li key={tip} className="flex gap-2">
                <span className="text-emerald-300">-</span>
                <span className="leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
            <p className="text-sm font-semibold text-slate-100">Chatzeilen zum Kopieren</p>
            <ol className="space-y-2 text-xs text-slate-200 list-decimal list-inside font-mono">
              {copyLines.map((line) => (
                <li key={line} className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 leading-relaxed">
                  {line}
                </li>
              ))}
            </ol>
            <p className="text-xs text-slate-400">
              Funktioniert bei den meisten Old Friends. Wenn ein NPC „stur“ ist: kurz resetten und dasselbe Muster mit leicht anderer Formulierung erneut nutzen.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗂️</span>
          <h2 className="text-2xl font-bold text-slate-50">Alle interaktiven NPCs (Old Friends)</h2>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          NPC-Liste aus allen aktuellen Karten-Pins. Einträge mit Portrait zeigen ein Bild; Einträge ohne Portrait bleiben als Textkarten sichtbar, damit Kaifeng City und andere Map-only NPCs nicht fehlen.
        </p>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {allPinsSorted.map((npc) => (
            <div key={npc.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-base font-semibold text-slate-100">{npc.name}</p>
                  <span className="text-[11px] uppercase tracking-wide text-slate-400">{npc.region || "Region unbekannt"}</span>
                </div>
                {npc.image ? (
                  <NpcImagePreview
                    src={npc.image}
                    alt={`${npc.name} NPC-Porträt (Where Winds Meet)`}
                    thumbnailClassName="h-32"
                    uiText={imagePreviewUiText}
                  />
                ) : null}
              <p className="text-xs text-emerald-200">Gebiet: {npc.area || "Nicht angegeben"}</p>
              <p className="text-xs text-slate-300 leading-relaxed">Hinweis: {npc.hint || "Karte prüfen und empathisch ansprechen."}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎯</span>
          <h3 className="text-2xl font-bold text-slate-50">Warum Old Friends früh abschließen?</h3>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Wöchentliche Geschenke sammeln sich an – früh fertig = maximaler Nutzen.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Old-Friends-Listen helfen bei Completion-Zielen je Region.</span>
          </li>
          <li className="flex gap-2">
            <span className="text-emerald-300">-</span>
            <span>Ein Muster einmal lernen und bei vielen NPCs wiederverwenden.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🚫</span>
          <h3 className="text-2xl font-bold text-slate-50">Nicht interaktive NPCs (kein AI-Chat)</h3>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          Diese NPCs sind in der Welt sichtbar, öffnen aber kein Old Friends / AI Chat. Trotzdem bieten sie Services – also merk sie dir.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {nonInteractableNpcs.map((npc) => (
            <div key={npc.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md space-y-3">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-base font-semibold text-slate-100">{npc.name}</p>
                  <p className="text-[11px] uppercase tracking-wide text-amber-200">{npc.role}</p>
                </div>
                <span className="rounded-full border border-amber-400/50 bg-amber-500/10 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-amber-200">
                  Kein AI-Chat
                </span>
              </div>
              {npc.image ? (
                <div className="relative h-32 w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900/80">
                  <NpcImagePreview
                    src={npc.image}
                    alt={`${npc.name} NPC-Porträt`}
                    thumbnailClassName="h-32"
                    uiText={imagePreviewUiText}
                  />
                </div>
              ) : null}
              <p className="text-xs text-emerald-200">Region: {npc.region}</p>
              <p className="text-xs text-slate-200">Gebiet: {npc.area}</p>
              <p className="text-xs text-slate-300 leading-relaxed">{npc.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧭</span>
          <h3 className="text-2xl font-bold text-slate-50">NPC-Liste FAQ</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {npcFaqs.map((faq) => (
            <div key={faq.q} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <h4 className="text-sm font-semibold text-slate-100">{faq.q}</h4>
              <p className="mt-2 text-xs leading-relaxed text-slate-300">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/70 bg-slate-950/70 p-6 shadow-lg space-y-4">
        <div className="flex items-center gap-2">
          <span className="text-xl">?</span>
          <h3 className="text-2xl font-bold text-slate-50">Mehr Guides</h3>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Freundschaft mit Qin Caiwei",
              href: "/de/guides/qin-caiwei",
              note: "Kompletter AI-Chat-Plan für den „stursten“ Old Friend.",
            },
            {
              title: "Gift of Gab",
              href: "/de/guides/gift-of-gab",
              note: "Kartensystem-Grundlagen als Ergänzung zum AI Chat.",
            },
            {
              title: "Woven with Malice",
              href: "/de/guides/woven-with-malice",
              note: "Story-Quest, wenn du mehr Story willst.",
            },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-md transition hover:-translate-y-1 hover:border-emerald-400/50"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-semibold text-slate-100 group-hover:text-emerald-200 transition">
                  {item.title}
                </p>
                <span className="text-xs text-emerald-300 group-hover:translate-x-1 transition">-&gt;</span>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">{item.note}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
