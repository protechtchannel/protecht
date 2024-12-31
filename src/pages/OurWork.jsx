import React from "react";
import "../styles_css/OurWork.css";
import { useTranslation } from "react-i18next";

import rightarrow from "../images/right-arrow.svg";
const OurWork = () => {
  const { t, i18n } = useTranslation();
  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div>
      <section class="endless-solutions">
        <h1 class="black-white4"> {t("ourWork.title")}</h1>
        <p class="endless-text">{t("ourWork.description")}</p>
        <a href="/contact" className="cta-button2">
          <span
            className="button-text"
            style={{ fontSize: "16px", fontWeight: "500" }}
          >
            {t("ourWork.buttonText")}
          </span>
          <span className="button-icon">
            <img src={rightarrow} alt="Arrow Icon" />
          </span>
        </a>
      </section>

      <div className="work">
        <div className="services-grid">
          <div className="services-grid1">
            <div className="service-item one">
              <div className="service-content1">
                <div className="ai">
                  {" "}
                  <p>{t("projects.project1.category")}</p>
                </div>

                <div className="wrap">
                  <div className="cont">
                    <div className="cont1">
                      <p>Protecht</p>
                      <img
                        src={require("../images/2024.png")}
                        alt="Protecht Logo"
                        className="company-logo"
                      />
                    </div>
                    <div className="cont2">
                      <p className="gradient">
                        {t("projects.project1.details")}
                      </p>
                      <div className="cont3">
                        <div className="gradient small">
                          {t("projects.project1.viewProjectText")}
                        </div>
                        <div className="arrow-icon"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-item two">
              <div className="service-content1">
                <div className="ai">
                  {" "}
                  <p>{t("projects.project2.category")}</p>
                </div>

                <div className="conttwo">
                  <div className="cont1">
                    <p>Protecht</p>
                    <img
                      src={require("../images/2024.png")}
                      alt="Protecht Logo"
                      className="company-logo"
                    />
                  </div>
                  <div className="cont2">
                    <p className="gradient small2">
                      {t("projects.project2.details")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-grid1">
            <div className="service-item three">
              <div className="service-content1">
                <div className="ai">
                  {" "}
                  <p>{t("projects.project3.category")}</p>
                </div>

                <div className="conttwo">
                  <div className="cont1">
                    <p>Protecht</p>
                    <img
                      src={require("../images/2024.png")}
                      alt="Protecht Logo"
                      className="company-logo"
                    />
                  </div>
                  <div className="cont2">
                    <p className="gradient small2">
                      {t("projects.project3.details")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-item four">
              <div className="service-content1">
                <div className="ai">
                  {" "}
                  <p>{t("projects.project4.category")}</p>
                </div>

                <div className="wrap">
                  <div className="cont">
                    <div className="cont1">
                      <p>Protecht</p>
                      <img
                        src={require("../images/2024.png")}
                        alt="Protecht Logo"
                        className="company-logo"
                      />
                    </div>
                    <div className="cont2">
                      <p className="gradient ">
                        Bdtronic | Custom-Made CRM System Developed by
                        Protecht.ch
                      </p>
                      <div className="cont3">
                        <div className="gradient small">
                          {t("projects.project1.viewProjectText")}
                        </div>
                        <div className="arrow-icon"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
