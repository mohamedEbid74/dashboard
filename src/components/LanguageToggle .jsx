import { useTranslation } from "react-i18next";

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage}>
      {i18n.language === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LanguageToggle;
