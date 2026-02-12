import { useEffect, useState, type ReactNode } from "react";
import { translations, type Language, type TranslationKey } from ".";
import { LanguageContext } from "./LanguageContext";

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const detectLanguage = (): Language => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved) return saved;

    const browserLang = navigator.language;
    return browserLang.startsWith("es") ? "es" : "en";
  };

  const [language, setLanguage] = useState<Language>(detectLanguage);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const t = (key: TranslationKey) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
