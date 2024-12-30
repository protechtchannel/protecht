import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(Backend) // Load translations using HTTP
  .use(LanguageDetector) // Detect the user's language
  .use(initReactI18next) // Initialize with React
  .init({
    fallbackLng: "en", // Default language
    debug: true, // Turn this off in production
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;
