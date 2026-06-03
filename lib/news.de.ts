import { latestNewsDate, newsItems as officialNewsItems } from "./news";

// Keep the German news feed in exact source parity with the official English
// news index. Page chrome remains localized; article titles and links stay
// official so cross-language news freshness does not drift.
export const newsItems = officialNewsItems;

export { latestNewsDate };
