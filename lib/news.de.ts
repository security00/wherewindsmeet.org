import { latestNewsDate, newsItems as officialNewsItems } from "./news";

const formatDateDe = (iso: string) => {
  const [year, month, day] = iso.split("-");
  return year && month && day ? `${day}.${month}.${year}` : iso;
};

// Preserve the official English title and source record, but do not present
// the English editorial summary as though it were a German translation.
export const newsItems = officialNewsItems.map((item) => ({
  ...item,
  summary: `Offizielle englischsprachige Meldung vom ${formatDateDe(item.date)}. Der englische Titel bleibt unverändert; öffne die Originalquelle, um Inhalt und Änderungen vollständig zu prüfen.`,
}));

export { latestNewsDate };
