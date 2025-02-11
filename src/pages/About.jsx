import React, { useState, useEffect } from "react";
import rightarrow from "../images/rightarrow.png";
import { useNavigate } from "react-router-dom";
import "../styles_css/Services.css";
import "../styles_css/About.css";
import Muhamer from "../images/Muhamer.jpg";
import Bujar from "../images/BujarDemolli.jpg";
import Shadows from "../components/Shadows";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Check window size and set state
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 968); // Adjust breakpoint as needed
  };

  useEffect(() => {
    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const handleRedirect = (section) => {
    navigate(`/services#${section}`);
  };

  return (
    <div>
      <div className="hero">
        <Shadows />
        <h3 className="services-heading">{t("hero.servicesHeading")}</h3>
        <h1 className="main-heading">{t("hero.mainHeading")}</h1>
        <p className="subheading">{t("hero.subHeading")}</p>

        <a
          onClick={() => {
            console.log(`Redirecting to: /contact`);
            navigate("/contact");
          }}
          className="cta-button"
        >
          <span className="button-text">{t("hero.ctaButton")}</span>
          <span className="button-icon">
            <img src={rightarrow} alt="Arrow Icon" />
          </span>
        </a>
      </div>
      <div class="about-container">
        <div class="about-heading">
          <p>{t("about.heading")}</p>
        </div>

        <div class="about-text">
          <p>{t("about.text1")}</p>
        </div>

        <div class="about-text" style={{ marginBottom: "50px" }}>
          <p>{t("about.text2")}</p>
        </div>
      </div>
      {isMobile ? (
        <div>
          <div class="outer-container">
            <div class="top-blue-line2"></div>

            <div class="image-container2">
              <img src={Muhamer} alt="Placeholder" class="profile-image2" />

              <div class="bottom-left-blue-bar"></div>
            </div>
          </div>
          <div class="mobile-profile-container">
            <div class="mobile-profile-name">{t("profiles.muhamer.name")}</div>

            <h3 class="mobile-profile-titleA">CEO</h3>

            <div class="mobile-profile-description">
              <p className="colors">{t("profiles.muhamer.description1")}</p>
              <p className="colors">{t("profiles.muhamer.description2")}</p>
              <p className="colors">{t("profiles.muhamer.description3")}</p>
            </div>
          </div>

          <div class="outer-container" style={{ marginTop: "30px" }}>
            <div class="top-blue-line2"></div>

            <div class="image-container2">
              <img src={Bujar} alt="Placeholder" class="profile-image2" />

              <div class="bottom-left-blue-bar"></div>
            </div>
          </div>
          <div
            class="mobile-profile-container"
            style={{ marginBottom: "50px" }}
          >
            <div class="mobile-profile-name">Bujar Demolli</div>

            <h3 class="mobile-profile-titleA">{t("profiles.bujar.title")}</h3>

            <div class="mobile-profile-description">
              <p className="colors">{t("profiles.bujar.description1")}</p>
              <p className="colors">{t("profiles.bujar.description2")}</p>
              <p className="colors">{t("profiles.bujar.description3")}</p>
            </div>
          </div>
        </div>
      ) : (
        // Desktop view
        <div>
          <div className="profile-wrapper">
            {/* Main container */}
            <div className="profile-container">
              {/* Left column container */}
              <div className="profile-image-container">
                <img src={Muhamer} alt="Profile" className="profile-image" />
              </div>
              <div className="blue-overlay">
                {/* Name container */}

                <div className="name-box">
                  <h2 className="profile-name">Muhamer Nuridini</h2>
                </div>
              </div>
              {/* Right column container */}
              <div className="profile-content-container">
                <div className="profile-content-container1">
                  <div className="profile-content-container2"> </div>
                </div>
                {/* Content container */}
                <div className="profile-content">
                  {/* Title */}
                  <h3 className="profile-titleA">CEO</h3>

                  {/* Text sections */}
                  <div className="profile-description">
                    <div className="section">
                      <p className="colors">
                        {t("profiles.muhamer.description1")}
                      </p>
                    </div>
                    <div className="section">
                      <p className="colors">
                        {t("profiles.muhamer.description2")}
                      </p>
                    </div>
                    <div className="section">
                      <p className="colors">
                        {t("profiles.muhamer.description3")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-wrapper" style={{ marginTop: "40px" }}>
            {/* Main container */}
            <div style={{ marginBottom: "50px" }} className="profile-container">
              {/* Left column container */}
              <div className="profile-image-container">
                <img src={Bujar} alt="Profile" className="profile-image" />
              </div>
              <div className="blue-overlay">
                {/* Name container */}

                <div className="name-box">
                  <h2 className="profile-name">Bujar Demolli</h2>
                </div>
              </div>
              {/* Right column container */}
              <div className="profile-content-container">
                <div className="profile-content-container1">
                  <div className="profile-content-container2"> </div>
                </div>
                {/* Content container */}
                <div className="profile-content">
                  {/* Title */}
                  <h3 className="profile-titleA">
                    {t("profiles.bujar.title")}
                  </h3>

                  {/* Text sections */}
                  <div className="profile-description">
                    <div className="section">
                      <p className="colors">
                        {t("profiles.bujar.description1")}
                      </p>
                    </div>
                    <div className="section">
                      <p className="colors">
                        {t("profiles.bujar.description2")}
                      </p>
                    </div>
                    <div className="section">
                      <p className="colors">
                        {t("profiles.bujar.description3")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
