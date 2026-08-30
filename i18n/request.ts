import { getRequestConfig } from "next-intl/server";
import { getMessages, isLocale } from "./messages";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = isLocale(requestedLocale) ? requestedLocale : "en";

  return {
    locale,
    messages: await getMessages(locale),
  };
});
