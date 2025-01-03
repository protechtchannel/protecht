import React from "react";

import Shadows from "../components/Shadows";
import "../styles_css/Terms.css";
import { useTranslation } from "react-i18next";

const Terms = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className="hero">
        <Shadows />
        <h1 className="main-heading">{t("terms.hero.heading")}</h1>
        <p className="subheading">{t("terms.hero.subHeading")}</p>
      </div>

      {/* Main Content */}
      <div className="content-section">
        {/* Terms and Conditions Header */}
        <div className="section1">
          <p>
            <strong>{t("terms.hero.heading")}</strong>
          </p>
          <p>
            <strong>{t("terms.effectiveDate.label")}:</strong>{" "}
            {t("terms.effectiveDate.date")}
          </p>
          <p>{t("terms.introduction.message")}</p>
        </div>

        {/* Definitions */}
        <div className="section">
          <p>
            <strong className="number-container">
              01. {t("terms.sections.01.title")}
            </strong>
          </p>
          <p>
            <strong style={{ color: "#315c9b" }}>Protecht:</strong>{" "}
            {t("terms.sections.01.content.protecht")}
          </p>
          <p>
            <strong style={{ color: "#315c9b" }}>Services:</strong>{" "}
            {t("terms.sections.01.content.services")}
          </p>
          <p>
            <strong style={{ color: "#315c9b" }}>User/You:</strong>{" "}
            {t("terms.sections.01.content.user")}
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div className="section">
          <p>
            <strong className="number-container">
              02. {t("terms.sections.02.title")}
            </strong>
          </p>
          <p>{t("terms.sections.02.content")}</p>
        </div>

        {/* Services Offered */}
        <div className="section">
          <p>
            <strong className="number-container">
              03. {t("terms.sections.03.title")}
            </strong>
          </p>
          <p>{t("terms.sections.03.text")}</p>
          <ul>
            {t("terms.sections.03.content", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
          <p>{t("terms.sections.03.note")}</p>
        </div>

        {/* User Obligations */}
        <div className="section">
          <p>
            <strong className="number-container">
              04. {t("terms.sections.04.title")}
            </strong>
          </p>
          <ul>
            {t("terms.sections.04.content", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>

        {/* Intellectual Property */}
        <div className="section">
          <p>
            <strong className="number-container">
              05. {t("terms.sections.05.title")}
            </strong>
          </p>
          <p>{t("terms.sections.05.content")}</p>
        </div>

        {/* Confidentiality */}
        <div className="section">
          <p>
            <strong className="number-container">
              06. {t("terms.sections.06.title")}
            </strong>
          </p>
          <p>{t("terms.sections.06.content")}</p>
        </div>

        {/* Limitation of Liability */}
        <div className="section" style={{ paddingBottom: "80px" }}>
          <p>
            <strong className="number-container">
              07. {t("terms.sections.07.title")}
            </strong>
          </p>
          <ul>
            {t("terms.sections.07.content", { returnObjects: true }).map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;
