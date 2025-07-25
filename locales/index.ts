export const defaultLocale = 'en';
export const locales = ['en', 'de', 'ar', 'tr', 'fr'] as const;
export type Locale = typeof locales[number]; 