import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import npcPins from "../../../../public/guides/npc-list/pins-old-friends.json";
import NpcMapClient, { MapPin } from "../../../guides/npc-list/NpcMapClient";
import NpcImagePreview from "../../../guides/npc-list/NpcImagePreview";
import { buildHreflangAlternates } from "@/lib/hreflang";

const baseUrl = "https://wherewindsmeet.org";

export const metadata: Metadata = {
  title: "Where Winds Meet NPC-Liste & Old-Friends-Karte (DE)",
  description:
    "Deutsche NPC-Liste für Where Winds Meet (Old Friends): Regionen, Belohnungen, AI-Chat-Tipps, Karten-Vorschau und Textbausteine zum Kopieren – für schnellen Fortschritt.",
  alternates: buildHreflangAlternates("/guides/npc-list", { canonicalLanguage: "de" }),
  openGraph: {
    title: "Where Winds Meet NPC-Liste & Old Friends (DE)",
    description:
      "Old-Friends-NPCs schnell finden: Orte, Belohnungen, AI-Chat-Tipps, Karten-Vorschau und Textbausteine zum Kopieren.",
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
    title: "Where Winds Meet NPC-Liste & Old Friends (DE)",
    description:
      "Old Friends schnell finden: NPC-Liste, Regionen, Belohnungen, AI-Chat-Tipps und Karten-Vorschau.",
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
    image: "/guides/npc-list/li-laizuo.png",
  },
  {
    name: "Fang Xu",
    region: "Qinghe (Umland)",
    rewards: "Münzen, Zusatzdialog",
    chatTip: "Sorge spiegeln, dann (in Klammern) lösen",
    difficulty: "Mittel",
    image: "/guides/npc-list/fang-xu.png",
  },
  {
    name: "Lie Buxi",
    region: "Qinghe",
    rewards: "Old-Friends-Fortschritt",
    chatTip: "Erst Empathie, dann klar abschließen",
    difficulty: "Mittel",
    image: "/guides/npc-list/lie-buxi.png",
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

type NpcEntry = {
  name: string;
  region?: string;
  area?: string;
  hint?: string;
  image?: string;
};

const npcDetails: NpcEntry[] = [
  { name: "Li Laizuo", region: "Verdant Wilds", area: "General's Shrine", hint: "Im Lager beim General's Shrine: bei einer Gruppe Untergebener neben dem Schrein.", image: "/guides/npc-list/f41bc20333ff369747d89ab7297f314f.png" },
  { name: "Fang Xu", region: "Verdant Wilds", area: "General's Shrine", hint: "Oben auf einem Gerüst neben der Arena. Ein paar Mal mit ihm sparren, dann ansprechen.", image: "/guides/npc-list/746530d86814266dcdd1ef1e983d5b1f.png" },
  { name: "Lie Buxi", region: "Verdant Wilds", area: "General's Shrine", hint: "Am Fluss südlich des General's Shrine. Sie bittet um Hilfe bei der Suche nach ihren Brüdern.", image: "/guides/npc-list/6fb9eb534a7ad1ecc3ffdcf5d5bcd048.png" },
  { name: "Zhao Dali", region: "Verdant Wilds", area: "General's Shrine", hint: "Nahe dem Hauptschrein im General's Shrine, beim Training." },
  { name: "Chai Bakun", region: "Verdant Wilds", area: "General's Shrine", hint: "Südlich des General's Shrine beim Baumfällen.", image: "/guides/npc-list/39b5f908f7dd9df2e9ab186b224af194.png" },
  { name: "Fu Lushou", region: "Verdant Wilds", area: "General's Shrine", hint: "Vom Eingang des General's Shrine ins rechte Gebäude. Je nach Tag auch draußen beim Schrein.", image: "/guides/npc-list/7a5d5758a64aa9dcb4e3c686e8ad88b9.png" },
  { name: "Jin Xiaobao", region: "Verdant Wilds", area: "Bamboo Abode", hint: "Auf dem Schlickfeld südlich des Verdant Wilds Wayfarer.", image: "/guides/npc-list/b82c6c1c9b2bc7887469754322e5a71b.png" },
  { name: "Fu Lubao", region: "Verdant Wilds", area: "General's Shrine", hint: "Oben links, neben einer Steinsäule.", image: "/guides/npc-list/c4c9f2f175acc33ec2f06b4eb58ff1be.png" },
  { name: "Wang Duobao", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Sitzend beim Angeln am Flussrand links vom General's Shrine, nördlich des Stonewash Strand Boundary Stone.", image: "/guides/npc-list/3f0c578668c299d65f021e872d1e8ff4.png" },
  { name: "Jin Chunniang", region: "Verdant Wilds", area: "Bamboo Abode", hint: "Auf dem Schlickfeld südlich des Verdant Wilds Wayfarer.", image: "/guides/npc-list/92757f0deede429ea266e133cfe51995.png" },
  { name: "Wang Duolu", region: "Verdant Wilds", area: "General's Shrine", hint: "Am See gegenüber vom General's Shrine Boundary Stone beim Angeln.", image: "/guides/npc-list/8b62b74156e15c6b073d1ffa021d4170.png" },
  { name: "Daozheng", region: "Sundara Land", area: "Halo Peak", hint: "Neben einem Tisch vor einem Haus zu finden.", image: "/guides/npc-list/6826a4bc4d34b96fd0f9009d39a2b6df.png" },
  { name: "Miaojue", region: "Sundara Land", area: "Halo Peak", hint: "Auf einem Berg nahe eines Tempels.", image: "/guides/npc-list/6166c87d7965c793cf33840ba89588c1.png" },
  { name: "Li Daniu", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Nördlich des Starfall Spring Boundary Stone, nahe der Straße bei Battlecrest Slope – beim Holzfällen.", image: "/guides/npc-list/410d1322ea60f1374181a17d0be85a13.png" },
  { name: "Li Shaokui", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Vor einer zerstörten Hütte nordöstlich des Starfall Spring Boundary Stone.", image: "/guides/npc-list/9c14f21aa4f03fa76f9ca46b7f36c437.png" },
  { name: "Zhou Yizhou", region: "Sundara Land", area: "Mercyheart Town", hint: "Ganz links an den Docks.", image: "/guides/npc-list/b65389e0ad80a39582223979fd5f61bb.png" },
  { name: "Rafter Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Nahe der Brücke, hinter hohem Gras.", image: "/guides/npc-list/b7a510b6ae5f5f07213c80fab222aec9.png" },
  { name: "Wobbly Tang", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Am Straßenrand südlich des Tiger Fort (Battlecrest Slope).", image: "/guides/npc-list/fda94aade0197ed4aef0d959564489ec.png" },
  { name: "Embroidered Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Haus (drinnen leicht zu sehen).", image: "/guides/npc-list/5808db2d83929d0c53ce4047d9e67bcf.png" },
  { name: "Tang Lubao", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Am Straßenrand südlich des Tiger Fort (Battlecrest Slope).", image: "/guides/npc-list/fda94aade0197ed4aef0d959564489ec.png" },
  { name: "Pan Faxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Auf den Stufen am Fluss sitzend.", image: "/guides/npc-list/ea696965e12feb1d390e41745d8f32e1.png" },
  { name: "Zhou Miaoxin", region: "Sundara Land", area: "Mercyheart Town", hint: "Tanzend hinter einer Statue.", image: "/guides/npc-list/315e955ca12ae1d397ba270e8e830e66.png" },
  { name: "Barn Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Haus (drinnen).", image: "/guides/npc-list/b65cae20c4a3288617d054c07c510715.png" },
  { name: "Burrowing Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Norden des Dorfes beim Hacken, nahe eines zerstörten Hauses.", image: "/guides/npc-list/0898767483d16c6443ef1d74628c77e6.png" },
  { name: "Small Chisel", region: "Sundara Land", area: "Mercyheart Town", hint: "Draußen vor seinem Haus.", image: "/guides/npc-list/bc622b8835a89cdfe668bd13862bc626.png" },
  { name: "Pip Rat", region: "Sundara Land", area: "Mercyheart Town", hint: "Im Norden der Stadt am Boden spielend, nahe des Wegs zum Mercyheart Monastery.", image: "/guides/npc-list/0e8ffcfcadc6b9d96b45a6764ee04ee0.png" },
  { name: "Chai Jiudui", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Auf Stonewash Strand südlich des Boundary Stone beim Holzfällen.", image: "/guides/npc-list/db0b486f857c2da8e3897cd43df444f7.png" },
  { name: "Feng Rusong", region: "Sundara Land", area: "Mercyheart Monastery", hint: "Nahe dem Eingang des Divinecraft Dungeon.", image: "/guides/npc-list/b6b58337f6c0371d54848dbb8a3ae4e9.png" },
  { name: "Zhu Bawan", region: "Verdant Wilds", area: "Stonewash Strand", hint: "Auf dem Canopy/Vordach am Stonewash Strand östlich des Moonveil Mountain Wayfarer.", image: "/guides/npc-list/5ed738d1ba63039e7efdd52ad15a6511.png" },
  { name: "Pan Xinniang", region: "Sundara Land", area: "Mercyheart Town", hint: "Beim Pflücken von Buddhist Flowers zu sehen.", image: "/guides/npc-list/pan-xinniang.png" },
  { name: "Jingyi", region: "Sundara Land", area: "Halo Peak", hint: "Am Weg nördlich des Halo Peak Landmark.", image: "/guides/npc-list/jingyi.png" },
  { name: "Wu Jingming", region: "Sundara Land", area: "Halo Peak", hint: "Entlang des Wegs Richtung Halo Peak.", image: "/guides/npc-list/wu-jingming.png" },
  { name: "Chai Sansheng", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Beim Holzfällen nahe dem Path of Karma Landmark.", image: "/guides/npc-list/chai-sansheng.png" },
  { name: "Bodhi", region: "Sundara Land", area: "Jadebrook Mountain", hint: "Steht zwischen mehreren Katzen.", image: "/guides/npc-list/bodhi.png" },
  { name: "Shi the Boatman", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "In der Nähe des Heaven's Pier Landmark.", image: "/guides/npc-list/shi-the-boatman.png" },
  { name: "Zhao Weiye", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Beim Trinken aus einem großen Behälter.", image: "/guides/npc-list/zhao-weiye.png" },
  { name: "Lu Sheng", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Vor dem Stand von Yuan Tiantian.", image: "/guides/npc-list/lu-sheng.png" },
  { name: "Xiang the Greedy", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Neben mehreren großen Behältern.", image: "/guides/npc-list/xiang-the-greedy.png" },
  { name: "Song Wu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Im Wirtshaus beim Fegen.", image: "/guides/npc-list/song-wu.png" },
  { name: "Yueniang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Am Fluss beim Wäschewaschen.", image: "/guides/npc-list/yueniang.png" },
  { name: "Auntie Tian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Im Haus hinter Yuan Tiantians Stand.", image: "/guides/npc-list/auntie-tian.png" },
  { name: "Zhang Dazhuang", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Vor der Feuerbrauerei (Fire-forced brewing).", image: "/guides/npc-list/zhang-dazhuang.png" },
  { name: "Uncle Mi", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Unter einem weißen Blütenbaum.", image: "/guides/npc-list/uncle-mi.png" },
  { name: "Fluffy Cat", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Hinter einem Haus, bei dem Blütenblätter zum Trocknen ausgelegt sind.", image: "/guides/npc-list/fluffy-cat.png" },
  { name: "Beggar Liu", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Unter einem Baum am Rand des Gebiets.", image: "/guides/npc-list/beggar-liu.png" },
  { name: "Liu the Woodcutter", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "Vom Moonveil Peak Landmark nach rechts; er hackt Holz unterhalb des Berges.", image: "/guides/npc-list/liu-the-woodcutter.png" },
  { name: "Shi Jingtian", region: "Moonveil Mountain", area: "Heaven's Pier", hint: "Auf dem Weg zwischen Peacebell Tower und Crimson Cliff.", image: "/guides/npc-list/shi-jingtian.png" },
  { name: "Chai Shipi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Ganz rechts bei Heaven Pier beim Holzfällen.", image: "/guides/npc-list/chai-shipi.png" },
  { name: "Yan Momo", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Nahe dem Crimson Cliff Landmark, sammelt Blätter von einem einsamen roten Baum.", image: "/guides/npc-list/yan-momo.png" },
  { name: "Wu Qiwan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Hinter hohem Gras nahe der Klippenkante.", image: "/guides/npc-list/wu-qiwan.png" },
  { name: "Mr. Qiao", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Neben Wagen, nahe den Docks.", image: "/guides/npc-list/mr-qiao.png" },
  { name: "Mu Laosan", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Vom Stillwind Slope Landmark nach Norden; dort beim Baumfällen.", image: "/guides/npc-list/mu-laosan.png" },
  { name: "Niu Sanqi", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Etwas nördlich der Stillwind Slope zusammen mit anderen Flüchtlingen.", image: "/guides/npc-list/niu-sanqi.png" },
  { name: "Zhu Jiuba", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Etwas nördlich der Stillwind Slope zusammen mit anderen Flüchtlingen.", image: "/guides/npc-list/zhu-jiuba.png" },
  { name: "Ma Zhongwu", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Etwas nördlich der Stillwind Slope zusammen mit anderen Flüchtlingen.", image: "/guides/npc-list/ma-zhongwu.png" },
  { name: "Lan Huahua", region: "Moonveil Mountain", area: "Crimson Cliff", hint: "Vom Stillslope Landmark nach rechts; sie tanzt nahe eines Felsens.", image: "/guides/npc-list/lan-huahua.png" },
  { name: "Zhou Yihang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "An den Docks unten links beim Stillwind Slope Marker.", image: "/guides/npc-list/zhou-yihang.png" },
  { name: "Zhang the Diviner", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Südlich vom Back Mountain Landmark, im Lager mit Boss Qian.", image: "/guides/npc-list/zhang-the-diviner.png" },
  { name: "Boss Qian", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Südlich vom Back Mountain Landmark, im Lager mit Zhang the Diviner.", image: "/guides/npc-list/boss-qian.png" },
  { name: "Tao Wang", region: "Moonveil Mountain", area: "Palace of Annals", hint: "Vom Back Mountain Landmark nach Norden, die Felswand hochklettern; oben zu finden.", image: "/guides/npc-list/tao-wang.png" },
  { name: "Mountain Dweller", region: "Moonveil Mountain", area: "Sage's Knoll", hint: "In der Nähe des Deer Pond Landmark.", image: "/guides/npc-list/mountain-dweller.png" },
  { name: "Hai Changchong", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Nahe einer Klippe zu sehen.", image: "/guides/npc-list/hai-changchong.png" },
  { name: "Dog", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Gräbt nahe einem Holzstapel.", image: "/guides/npc-list/dog.png" },
  { name: "Shui Changliu", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Steht nahe dem Fluss.", image: "/guides/npc-list/shui-changliu.png" },
  { name: "Hunter", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Hinter einem Bambuscluster nahe dem Fluss.", image: "/guides/npc-list/hunter.png" },
  { name: "Liu Heiqui", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Am Straßenrand zu finden.", image: "/guides/npc-list/liu-heiqui.png" },
  { name: "Feng Shishi", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Am Straßenrand zusammen mit ihrem Begleiter Xie Changgong.", image: "/guides/npc-list/feng-shishi.png" },
  { name: "Shan Yinjiang", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Nahe etwas Bambus zu finden.", image: "/guides/npc-list/shan-yinjiang.png" },
  { name: "Wu Dayong", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Nahe einem Banditenlager zu finden.", image: "/guides/npc-list/wu-dayong.png" },
  { name: "Wenwu", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Nahe einem einsamen Baum zu finden.", image: "/guides/npc-list/wenwu.png" },
  { name: "Shen Weiqing", region: "Moonveil Mountain", area: "Twinbeast Ridge", hint: "Entlang der Straße zusammen mit ihrem Sword Servant.", image: "/guides/npc-list/shen-weiqing.png" },
  { name: "Hong Yang", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Nahe einem See zusammen mit Lu Ke.", image: "/guides/npc-list/hong-yang.png" },
  { name: "Wen Gao", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Zwischen einem Baum und einem Wagen.", image: "/guides/npc-list/wen-gao.png" },
  { name: "Ya Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "An den Docks zu finden.", image: "/guides/npc-list/ya-zhou.png" },
  { name: "Hu Da", region: "Moonveil Mountain", area: "Encircling Lake", hint: "Vom Encircling Lake Landmark dem Weg nach links folgen; er steht links beim Outdoor-Sitzbereich.", image: "/guides/npc-list/hu-da.png" },
  { name: "Elder Zhou", region: "Moonveil Mountain", area: "Encircling Lake", hint: "An den Docks unten rechts vom Back Mountain Landmark.", image: "/guides/npc-list/elder-zhou.png" },
  { name: "Meng Da", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "Nordöstlich vom Harvest Village Landmark.", image: "/guides/npc-list/meng-da.png" },
  { name: "Hao Jiu", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "Nahe dem Zaun.", image: "/guides/npc-list/hao-jiu.png" },
  { name: "Lu Kangge", region: "Moonveil Mountain", area: "Blissful Retreat", hint: "Südwestlich vom Source of Still Shore Landmark.", image: "/guides/npc-list/lu-kangge.png" },
  { name: "Jin Nanshou", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "Beim Deerforage Grove Landmark starten, der Straße nach Norden bis zur Gabelung folgen, dann rechts. Er steht am Straßenrand.", image: "/guides/npc-list/jin-nanshou.png" },
  { name: "Jing'an", region: "Moonveil Mountain", area: "Peace Bell Tower", hint: "An der Gabelung in der Mitte der Straße. Erreichbar: südlich vom Porcelain Kiln Landmark oder nördlich vom Deerforage Grove Landmark.", image: "/guides/npc-list/jing-an.png" },
  { name: "Lin Jin", region: "Moonveil Mountain", area: "Witherwilds", hint: "Vom Porcelain Kiln Landmark die südliche Straße nehmen; er hackt Holz am Straßenrand.", image: "/guides/npc-list/lin-jin.png" },
  { name: "Sun Mang", region: "Moonveil Mountain", area: "Witherwilds", hint: "Vom Porcelain Kiln Boundary Stone der südlichen Straße folgen; er steht am Rand der Weggabelung.", image: "/guides/npc-list/sun-mang.png" },
  { name: "Li Yueniang", region: "Moonveil Mountain", area: "Riverside Station", hint: "Zusammen mit Yu Songfeng nahe dem Eingang der Fährstation.", image: "/guides/npc-list/li-yueniang.png" },
  { name: "Yu Songfeng", region: "Moonveil Mountain", area: "Riverside Station", hint: "Zusammen mit Li Yueniang nahe dem Eingang der Fährstation.", image: "/guides/npc-list/yu-songfeng.png" },
  { name: "Wang Duoli", region: "Verdant Wilds", area: "Battlecrest Slope", hint: "Südlich des Sees nahe dem Starfall Spring Boundary Stone.", image: "/guides/npc-list/wang-duoli.png" },
  { name: "Ren Shuiliu", region: "Moonveil Mountain", area: "Riverside Station", hint: "Im roten Gebäude neben Meng Zhixia.", image: "/guides/npc-list/ren-shuiliu.png" },
  { name: "Meng Zhixia", region: "Moonveil Mountain", area: "Riverside Station", hint: "Im roten Gebäude neben Ren Shuiliu.", image: "/guides/npc-list/meng-zhixia.png" },
  { name: "Yu Nu", region: "Moonveil Mountain", area: "Riverside Station", hint: "Im roten Gebäude mit Blick aufs Meer.", image: "/guides/npc-list/yu-nu.png" },
  { name: "Jiang Nanyi", region: "Moonveil Mountain", area: "Riverside Station", hint: "Unter einem weißen Blütenbaum an den Docks, hinter einigen Damen.", image: "/guides/npc-list/jiang-nanyi.png" },
  { name: "Zhou Canying", region: "Moonveil Mountain", area: "Riverside Station", hint: "An einem der Tische im roten Gebäude sitzend.", image: "/guides/npc-list/zhou-canying.png" },
  { name: "Tian Heng", region: "Moonveil Mountain", area: "Riverside Station", hint: "An einem der Tische im roten Gebäude sitzend.", image: "/guides/npc-list/tian-heng.png" },
  { name: "Wu Cezhi", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "In der linken Toilette/Latreine zu finden.", image: "/guides/npc-list/wu-cezhi.png" },
  { name: "Angler", region: "Moonveil Mountain", area: "Harvestfall Village", hint: "Sitzend am Ufer im Nordosten des Dorfes.", image: "/guides/npc-list/angler.png" },
];

const npcPinsArray = npcPins as unknown as Partial<MapPin>[];

const allPins: MapPin[] = npcPinsArray.map((p) => {
  const detail = npcDetails.find((d) => d.name === p.name);
  return {
    name: p.name ?? detail?.name ?? "Unbekannter NPC",
    x: p.x ?? 0,
    y: p.y ?? 0,
    region: p.region ?? detail?.region ?? undefined,
    area: p.area ?? detail?.area ?? undefined,
    hint: p.hint ?? detail?.hint ?? undefined,
    image: p.image ?? detail?.image ?? undefined,
  };
});

const pinsWithImages: MapPin[] = allPins.filter((p) => p.image || p.name === "Zhao Dali");
const allPinsSorted: MapPin[] = [...pinsWithImages].sort((a, b) => a.name.localeCompare(b.name));

const nonInteractableNpcs = [
  {
    name: "Qi Sheng",
    role: "Oddity Collector (kein AI-Chat)",
    region: "Verdant Wilds",
    area: "Südöstlich vom General's Shrine, westlich vom Wayfarer",
    details:
      "Oddities bei Qi Sheng tauschen, um Melodies of Peace zu verbessern. NPC ist vorhanden, löst aber kein Old Friends / AI Chat aus.",
    image: "/guides/npc-list/qi-sheng.png",
  },
  {
    name: "Yao Yaoyao",
    role: "Healer (kein AI-Chat)",
    region: "Qinghe",
    area: "Evercare Clinic, nördlich von Moonveil Mountain und südlich von Blissful Retreat",
    details:
      "Heilt gegen Gebühr und kann die Medizinkapazität erweitern (über Medicinal Tales). Kein Old Friends / AI Chat verfügbar.",
    image: "/guides/npc-list/2b9ebc0e2be0bdbacf25bc5b9f4a3afa.png",
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

  return (
    <article className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 p-6 sm:p-10 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-0">
          <Image
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
              Where Winds Meet NPC-Liste (Old Friends)
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              Schnelle Übersicht für Old Friends: Regionen, Belohnungen, AI-Chat-Muster und Karten‑Vorschau. Nutze die Textbausteine zum Kopieren, öffne
              die interaktive Karte und schließe Freundschaften (z. B. Qin Caiwei), ohne im Dialog festzustecken.
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
          Liste der NPCs mit Portraits (Einträge ohne Bild sind ausgeblendet; Zhao Dali bleibt als Referenz). Nutze die Hinweise, um sie zu erreichen, und
          wende dann das AI-Chat-Muster oben an.
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
