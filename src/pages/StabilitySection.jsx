import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles_css/StabilitySection.css";
import rightarrow from "../images/right-arrow.svg";
import { useTranslation } from "react-i18next";

const StabilitySection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const handleRedirect = (section) => {
    navigate(`/empowering#${section}`);
  };
  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <div className="custom-container">
        {/* Header Section */}
        <div className="header-section">
          <h1 className="black-white5">{t("growth.stabilityGrowth.title")}</h1>
          <p className="title">{t("growth.stabilityGrowth.description")}</p>
          <a href="/contact" className="cta-button2">
            <span
              className="button-text"
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
              {t("growth.stabilityGrowth.buttonText")}
            </span>
            <span className="button-icon">
              <img src={rightarrow} alt="Arrow Icon" />
            </span>
          </a>
        </div>

        {/* Right Section with Containers */}
        <div className="right-section">
          {/* Discovering Smart Management */}
          <div
            style={{ paddingTop: "0px" }}
            className="content-item"
            data-target="discovering-smart-management"
            onClick={() => handleRedirect("discovering-smart-management")}
          >
            <img
              src={require("../images/icon1.png")}
              alt="Discovering Smart Management"
            />
            <div className="content-text">
              <h3 style={{ marginTop: "0px" }}>
                {t("features.section1.title")}
              </h3>
              <p>{t("features.section1.description")}</p>
            </div>
          </div>

          {/* Customized Software Development */}
          <div
            className="content-item"
            data-target="customized-software-development"
            onClick={() => handleRedirect("customized-software-development")}
          >
            <img
              src={require("../images/icon2.png")}
              alt="Customized Software Development"
            />
            <div className="content-text">
              <h3>{t("features.section2.title")}</h3>
              <p>{t("features.section2.description")}</p>
            </div>
          </div>

          {/* Effortless Rapid Communication */}
          <div
            className="content-item"
            data-target="effortless-rapid-communication"
            onClick={() => handleRedirect("effortless-rapid-communication")}
          >
            <img
              src={require("../images/icon3.png")}
              alt="Effortless Rapid Communication"
            />
            <div className="content-text">
              <h3>{t("features.section3.title")}</h3>
              <p>{t("features.section3.description")}</p>
            </div>
          </div>

          {/* Stay Ahead with Adaptive Capabilities */}
          <div
            className="content-item"
            data-target="adaptive-capabilities"
            onClick={() => handleRedirect("adaptive-capabilities")}
          >
            <img
              src={require("../images/icon4.png")}
              alt="Stay Ahead with Adaptive Capabilities"
            />
            <div className="content-text">
              <h3>{t("features.section4.title")}</h3>
              <p>{t("features.section4.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StabilitySection;
