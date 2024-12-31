import React from "react";

import Shadows from "../components/Shadows";
import "../styles_css/Terms.css";
import { useTranslation } from "react-i18next";

const Privacy = () => {
  const { t, i18n } = useTranslation();
  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <div className="hero">
        <Shadows />
        <h1 className="main-heading">{t("privacy.hero.heading")}</h1>
        <p className="subheading">{t("privacy.hero.subHeading")}</p>
      </div>

      {/* Privacy Policy Header */}
      <div className="content-section">
        <div className="section1">
          <p>
            <strong>{t("privacy.policyHeader.title")}</strong>
          </p>
          <p>
            <strong>{t("privacy.policyHeader.effectiveDateLabel")}: </strong>
            {t("privacy.policyHeader.effectiveDate")}
          </p>
          <p>{t("privacy.policyHeader.intro")}</p>
        </div>

        {/* Dynamic Sections */}
        {Object.entries(t("privacy.sections", { returnObjects: true }))
          .filter(([key]) => key !== "10") // Exclude 10 for now
          .map(([key, section]) => (
            <div key={key} className="section">
              <p>
                <strong className="number-container">
                  {key}. {section.title}
                </strong>
              </p>
              <p>{section.intro || section.content}</p>
              {section.points && (
                <ul>
                  {section.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
              {section.note && <p>{section.note}</p>}
            </div>
          ))}

        {/* Add the 10th Section at the End */}
        <div className="section">
          <p>
            <strong className="number-container">
              {t("privacy.sections.10.title")}
            </strong>
          </p>
          <p>{t("privacy.sections.10.content")}</p>
          <p>{t("privacy.sections.10.email")}</p>
          <p>{t("privacy.sections.10.phone")}</p>
          <p>{t("privacy.sections.10.address")}</p>
          <p style={{ marginBottom: "100px" }}>
            {t("privacy.sections.10.footer")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
