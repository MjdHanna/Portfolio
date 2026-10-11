import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["en", "ar"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  const messages =
    locale === "ar"
      ? (await import("../app/messages/ar.json")).default
      : (await import("../app/messages/en.json")).default;

  return {
    locale,
    messages,
  };
});
