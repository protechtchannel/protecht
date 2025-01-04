// export default Empowering;
import React, { useEffect } from "react";
import "../styles_css/Services.css";
import "../styles_css/Empowering.css";
import Shadows from "../components/Shadows";
import { useTranslation } from "react-i18next";

const Empowering = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <Shadows />
        <h3 className="services-heading">{t("empowering.hero.heading")}</h3>
        <h1 className="main-heading">{t("empowering.hero.mainHeading")}</h1>
        <p className="subheading">{t("empowering.hero.subHeading")}</p>
      </div>

      {/* Section 1 */}
      <section
        id="discovering-smart-management"
        className="smart-management-container"
      >
        <div className="smart-management-left">
          <div className="icon-container">
            <img
              src={require("../images/empowering1.png")}
              alt="Gear Icon"
              className="smart-management-icon"
            />
          </div>
          <h2 className="smart-management-title">
            {t("empowering.section01.title")}
          </h2>
          <p className="smart-management-description">
            {t("empowering.section01.description")}
          </p>
        </div>
        <div
          className="smart-management-right"
          style={{
            backgroundImage: `url(${require("../images/ourbenefits1.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="content-box">
            <p>{t("empowering.section01.content1")}</p>
            <p>{t("empowering.section01.content2")}</p>
            <p>{t("empowering.section01.content3")}</p>
            <p>{t("empowering.section01.content4")}</p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="customized-software-development"
        className="smart-management-container"
      >
        <div className="smart-management-left">
          <div className="icon-container">
            <img
              src={require("../images/empowering2.png")}
              alt="Custom Software Icon"
              className="smart-management-icon"
            />
          </div>
          <h2 className="smart-management-title">
            {t("empowering.section02.title")}
          </h2>
          <p className="smart-management-description">
            {t("empowering.section02.description")}
          </p>
        </div>
        <div
          className="smart-management-right"
          style={{
            backgroundImage: `url(${require("../images/ourbenefits2.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="content-box">
            <p>{t("empowering.section02.content1")}</p>
            <p>{t("empowering.section02.content2")}</p>
            <p>{t("empowering.section02.content3")}</p>
            <p>{t("empowering.section02.content4")}</p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        id="effortless-rapid-communication"
        className="smart-management-container"
      >
        <div className="smart-management-left">
          <div className="icon-container">
            <img
              src={require("../images/empowering3.png")}
              alt="Chat Icon"
              className="smart-management-icon"
            />
          </div>
          <h2 className="smart-management-title">
            {t("empowering.section03.title")}
          </h2>
          <p className="smart-management-description">
            {t("empowering.section03.description")}
          </p>
        </div>
        <div
          className="smart-management-right"
          style={{
            backgroundImage: `url(${require("../images/ourbenefits3.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="content-box">
            <p>{t("empowering.section03.content1")}</p>
            <p>{t("empowering.section03.content2")}</p>
            <p>{t("empowering.section03.content3")}</p>
            <p>{t("empowering.section03.content4")}</p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section
        id="adaptive-capabilities"
        className="smart-management-container"
      >
        <div className="smart-management-left">
          <div className="icon-container">
            <img
              src={require("../images/empowering4.png")}
              alt="Clipboard Icon"
              className="smart-management-icon"
            />
          </div>
          <h2 className="smart-management-title">
            {t("empowering.section04.title")}
          </h2>
          <p className="smart-management-description">
            {t("empowering.section04.description")}
          </p>
        </div>
        <div
          className="smart-management-right"
          style={{
            backgroundImage: `url(${require("../images/ourbenefits4.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="content-box">
            <p>{t("empowering.section04.content1")}</p>
            <p>{t("empowering.section04.content2")}</p>
            <p>{t("empowering.section04.content3")}</p>
            <p>{t("empowering.section04.content4")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Empowering;
