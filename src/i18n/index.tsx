import { home } from "./translations/home";

export type Language = "en" | "es";

export const translations = {
  en: {
    ...home.en,
  },
  es: {
    ...home.es,
  },
} as const;

export type TranslationKey = keyof typeof translations["en"];