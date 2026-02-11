import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import { ENGLISH_LANGUAGE } from "./translation/en-us";
import { PORTUGUESE_LANGUAGE } from "./translation/pt-br";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      enUs: ENGLISH_LANGUAGE,
      ptBr: PORTUGUESE_LANGUAGE,
    },
    lng: "ptBr",
    fallbackLng: "ptBr",
    returnObjects: true,

    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
