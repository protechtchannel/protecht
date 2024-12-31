import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import de from "./translations/de.json";

// the translations
const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
};

// Helper function to extract language from URL
const getLanguageFromPath = () => {
  const pathLang = window.location.pathname.split("/")[1]; // Get the first segment of the path
  const supportedLanguages = ["en", "de"];
  return supportedLanguages.includes(pathLang) ? pathLang : "en"; // Default to 'en' if unsupported
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: getLanguageFromPath(), // Set initial language dynamically based on the route
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
