import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "@/locale/translations.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: ["en", "gr"],

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

window.i18n = i18n;

export default i18n;
