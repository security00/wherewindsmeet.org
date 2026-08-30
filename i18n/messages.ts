import type enMessages from "./messages/en.json";

export type LocaleCode = "en" | "vi" | "de";
export type AppMessages = typeof enMessages;

const loaders: Record<LocaleCode, () => Promise<AppMessages>> = {
  en: () => import("./messages/en.json").then((module) => module.default),
  vi: () => import("./messages/vi.json").then((module) => module.default),
  de: () => import("./messages/de.json").then((module) => module.default),
};

export const isLocale = (value: string | undefined): value is LocaleCode =>
  value === "en" || value === "vi" || value === "de";

export const getMessages = (locale: LocaleCode) => loaders[locale]();
