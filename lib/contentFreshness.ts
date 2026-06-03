import freshnessEntries from "./contentFreshness.json";

export type ContentLanguage = "en" | "vi" | "de";

export type ContentFreshnessEntry = {
  basePath: string;
  languages: ContentLanguage[];
  lastChecked: string;
  gameVersion: string;
  priorityCluster: string;
  sourceUrls: string[];
};

export const contentFreshnessEntries = freshnessEntries as ContentFreshnessEntry[];

export function getContentFreshness(basePath: string, language: ContentLanguage = "en") {
  return contentFreshnessEntries.find(
    (entry) => entry.basePath === basePath && entry.languages.includes(language),
  );
}
