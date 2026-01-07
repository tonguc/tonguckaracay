import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale, type Locale } from './i18n.config';

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the requestLocale from middleware
  let locale = await requestLocale;
  
  // Validate locale, fallback to default
  if (!locale || !locales.includes(locale as Locale)) {
    locale = defaultLocale;
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
