// export default Services;
import React, { useEffect } from "react";
import "../styles_css/Services.css";
import rightarrow from "../images/rightarrow.png";
import { useLocation } from "react-router-dom";
import Shadows from "../components/Shadows";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const { t, i18n } = useTranslation();
  const { hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  const handleRedirect = (section) => {
    navigate(`/services#${section}`);
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <Shadows />
        <h3 className="services-heading">{t("services.hero.heading")}</h3>
        <h1 className="main-heading">{t("services.hero.mainHeading")}</h1>
        <p className="subheading">{t("services.hero.subHeading")}</p>
        <a
          onClick={() => {
            console.log(`Redirecting to: /contact`);
            navigate("/contact");
          }}
          className="cta-button"
        >
          <span className="button-text">{t("services.hero.ctaButton")}</span>
          <span className="button-icon">
            <img src={rightarrow} alt="Arrow Icon" />
          </span>
        </a>
      </div>

      {/* Section 01 */}
      <div id="custom-application" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>{t("servicesSections.section01.number")}</h1>
            <div className="services-text">
              <h2>{t("servicesSections.section01.title")}</h2>
            </div>
          </div>
          <p className="description">
            {t("servicesSections.section01.description")}
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services1.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services1.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Section 02 */}
      <div id="blockchain-development" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>{t("servicesSections.section02.number")}</h1>
            <div className="services-text">
              <h2>{t("servicesSections.section02.title")}</h2>
            </div>
          </div>
          <p className="description">
            {t("servicesSections.section02.description")}
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services2.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services2.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Section 03 */}
      <div id="ai-cloud-solutions" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>{t("servicesSections.section03.number")}</h1>
            <div className="services-text">
              <h2>{t("servicesSections.section03.title")}</h2>
            </div>
          </div>
          <p className="description">
            {t("servicesSections.section03.description")}
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services3.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services3.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Section 04 */}
      <div id="ai-cloud-infrastructure" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>{t("servicesSections.section04.number")}</h1>
            <div className="services-text">
              <h2>{t("servicesSections.section04.title")}</h2>
            </div>
          </div>
          <p className="description">
            {t("servicesSections.section04.description")}
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services4.jpg")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services4.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Section 05 */}
      <div id="cloud-solution-hosting" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>{t("servicesSections.section05.number")}</h1>
            <div className="services-text">
              <h2>{t("servicesSections.section05.title")}</h2>
            </div>
          </div>
          <p className="description">
            {t("servicesSections.section05.description")}
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services5.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services5.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Section 06 */}
      <div id="fintech" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>{t("servicesSections.section06.number")}</h1>
            <div className="services-text">
              <h2>{t("servicesSections.section06.title")}</h2>
            </div>
          </div>
          <p className="description">
            {t("servicesSections.section06.description")}
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services6.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services6.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Section 07 */}
      <div id="erp-sap" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>{t("servicesSections.section07.number")}</h1>
            <div className="services-text">
              <h2>{t("servicesSections.section07.title")}</h2>
            </div>
          </div>
          <p className="description">
            {t("servicesSections.section07.description")}
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services7.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services7.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Section 08 */}
      <div id="it-support" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>{t("servicesSections.section08.number")}</h1>
            <div className="services-text">
              <h2>{t("servicesSections.section08.title")}</h2>
            </div>
          </div>
          <p className="description">
            {t("servicesSections.section08.description")}
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services8.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services8.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Section 09 */}
      <div id="network-system-administration" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>{t("servicesSections.section09.number")}</h1>
            <div className="services-text">
              <h2>{t("servicesSections.section09.title")}</h2>
            </div>
          </div>
          <p className="description">
            {t("servicesSections.section09.description")}
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services9.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services9.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Section 10 */}
      <div
        id="consulting"
        className="services-section"
        style={{ marginBottom: "80px" }}
      >
        <div className="services-content">
          <div className="services-number">
            <h1>{t("servicesSections.section10.number")}</h1>
            <div className="services-text">
              <h2>{t("servicesSections.section10.title")}</h2>
            </div>
          </div>
          <p className="description">
            {t("servicesSections.section10.description")}
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services10.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services10.1.png")})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
