import React, { useState } from "react";
import "../styles_css/OurWork.css";
import "../styles_css/Impressum.css";
import ImpressumImg from "../images/Impressum.jpg"; // Import your first image file
import ImpressumImg2 from "../images/impressum2.jpg"; // Import your second image file
import rightarrow from "../images/right-arrow.svg";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const OurWork = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null); // Track which modal is active

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleRedirect = (section) => {
    navigate(`/services#${section}`);
  };

  const openModal = (imageId) => {
    setActiveModal(imageId); // Set the active modal based on the clicked image
  };

  const closeModal = () => {
    setActiveModal(null); // Close the modal by resetting the state
  };

  return (
    <div>
      <section className="endless-solutions">
        <h1 className="black-white4"> {t("ourWork.title")}</h1>
        <p className="endless-text">{t("ourWork.description")}</p>
        <a
          className="cta-button2"
          onClick={() => {
            navigate("/"); // Redirect to home
            window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly
          }}
        >
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
          {/* Service items */}
          <div className="services-grid1">
            <div className="service-item one" onClick={() => openModal("img1")}>
              <div className="service-content1">
                <div className="ai">
                  <p>{t("projects.project1.category")}</p>
                </div>
                <div className="wrap">
                  <div className="cont">
                    <div className="cont1">
                      <p>Protecht</p>
                      <img
                        src={ImpressumImg} // Thumbnail for the first image
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
            <div className="service-item two" onClick={() => openModal("img2")}>
              <div className="service-content1">
                <div className="ai">
                  <p>{t("projects.project2.category")}</p>
                </div>
                <div className="conttwo">
                  <div className="cont1">
                    <p>Protecht</p>
                    <img
                      src={ImpressumImg2} // Thumbnail for the second image
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
        </div>
      </div>

      {/* Modal */}
      {activeModal === "img1" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeModal} // Close modal on background click
        >
          <img
            src={ImpressumImg} // Full-screen modal for the first image
            alt="Modal"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              width: "auto",
              height: "auto",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on image click
          />
        </div>
      )}

      {activeModal === "img2" && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={closeModal} // Close modal on background click
        >
          <img
            src={ImpressumImg2} // Full-screen modal for the second image
            alt="Modal"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              width: "auto",
              height: "auto",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on image click
          />
        </div>
      )}
    </div>
  );
};

export default OurWork;
