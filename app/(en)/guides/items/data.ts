import materials from "./materials.json";
import development from "./development.json";
import consumables from "./consumables.json";
import common from "./common.json";

export type ItemCategoryId =
  | "materials"
  | "development"
  | "consumables"
  | "common";

export type Item = {
  name: string;
  image: string;
  use: string;
  location: string;
};

export type ItemCategory = {
  id: ItemCategoryId;
  title: string;
  blurb: string;
  items: Item[];
  groups?: {
    id: string;
    title: string;
    items: Item[];
  }[];
};

const devMap = new Map<string, Item>();
for (const item of development as Item[]) {
  if (!devMap.has(item.name)) {
    devMap.set(item.name, item);
  }
}

const dev = (names: string[]) =>
  names
    .map((name) => devMap.get(name))
    .filter((item): item is Item => Boolean(item));

export const itemCategories: ItemCategory[] = [
  {
    id: "materials",
    title: "Materials",
    blurb: "Basic harvesting and hunting resources used for crafting gear, furniture, or commission deliveries.",
    items: materials as Item[],
  },
  {
    id: "development",
    title: "Development Materials",
    blurb: "Used for weapon breakthroughs, inner skill enhancement, mechanism blueprints, and other advanced crafting.",
    items: development as Item[],
    groups: [
      {
        id: "inner-way-passives",
        title: "Inner Way Passives",
        items: dev(["Evening Snow: Page", "Beef Tendon", "Blinding Mist", "Medicinal Tales"]),
      },
      {
        id: "martial-arts-upgrades",
        title: "Martial Arts Upgrades",
        items: dev([
          "Bluestone Lock",
          "Legendary Martial Codex I",
          "Legendary Martial Codex II",
          "Pine Resin Ointment",
          "Scarlet Flame Ointment",
          "Ultimate Jianghu Secret",
          "Wolframite Weight",
          "Wind Beneath Wings: Leopard",
        ]),
      },
      {
        id: "miscellaneous",
        title: "Miscellaneous",
        items: dev(["Career Notebook", "Spiritual Therapy"]),
      },
      {
        id: "mystic-arts-upgrades",
        title: "Mystic Arts Upgrades",
        items: dev([
          "Ebon Iron",
          "Ebon Iron Lv. 2",
          "Meteor Flight",
          "Oscillating Jade",
          "Vicious Fruit",
        ]),
      },
      {
        id: "gear-tuning",
        title: "Gear Tuning",
        items: dev([
          "Large Tuning Stone: Doom",
          "Large Tuning Stone: Gold Inlay",
          "Large Tuning Stone: Rhapsody",
          "Large Tuning Stone: Snowshield",
          "Large Tuning Stone: Snowshield",
          "Large Tuning Stone: Snowshield",
          "Tuning Stone",
        ]),
      },
    ],
  },
  {
    id: "consumables",
    title: "Consumables",
    blurb: "Combat and life-buff foods, wines, and baits—one-time use items.",
    items: consumables as Item[],
  },
  {
    id: "common",
    title: "Common Items",
    blurb: "Miscellaneous collectibles, gifts, and decorations often used for favor or achievement hunting.",
    items: common as Item[],
  },
];

export default itemCategories;
