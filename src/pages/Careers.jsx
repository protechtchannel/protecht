import React from "react";

import Shadows from "../components/Shadows";
import "../styles_css/Careers.css";
import { useTranslation } from "react-i18next";
const Careers = () => {
  const { t, i18n } = useTranslation();
  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div className="hero">
        <Shadows />
        <h1 className="main-heading">{t("jobs.hero.heading")}</h1>
        <p className="subheading">{t("jobs.hero.subHeading")}</p>
      </div>

      <div className="no-position-container">
        {/* Main Text */}
        <div className="no-position-card">
          <div className="inner"></div>
          <div className="items">
            <p className="no-position-text">{t("jobs.noPositions.message")}</p>
            <p className="no-position-tip">{t("jobs.noPositions.tip")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
