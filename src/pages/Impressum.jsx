import React, { useState } from "react";
import ImpressumImg from "../images/Impressum.jpg"; // Import your image file
import ImpressumImg2 from "../images/impressum2.jpg"; // Import your image file
import "../styles_css/Impressum.css";
import Shadows from "../components/Shadows";
import "../styles_css/Terms.css";
import { useTranslation } from "react-i18next";

const Impressum = () => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    console.log("Modal toggled"); // Debugging log
    setIsModalOpen(!isModalOpen);
  };

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <div className="hero">
        <Shadows />

        <h1 className="main-heading">{t("impressum.hero.heading")}</h1>
        <p className="subheading">{t("impressum.hero.subHeading")}</p>
      </div>
      {/* Thumbnail to open the modal */}
      <div className="bigcont" onClick={toggleModal}>
        <img
          src={ImpressumImg} // Thumbnail image
          alt="Impressum Thumbnail"
          style={{
            display: "block",
            width: "100%",
            borderRadius: "8px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </div>
      <div className="bigcont" onClick={toggleModal}>
        <img
          src={ImpressumImg2} // Thumbnail image
          alt="Impressum Thumbnail"
          style={{
            display: "block",
            width: "100%",
            borderRadius: "8px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </div>

      {/* Full-screen modal */}

      {isModalOpen && (
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
            background: "light-grey",
          }}
          onClick={toggleModal} // Close modal when clicking on background
        >
          <img
            src={ImpressumImg} // Full-screen image
            alt="Impressum"
            className="modal"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              width: "auto",
              height: "auto",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on image
          />
        </div>
      )}
      {isModalOpen && (
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
            background: "none",
          }}
          onClick={toggleModal} // Close modal when clicking on background
        >
          <img
            src={ImpressumImg2} // Full-screen image
            alt="Impressum"
            className="modal"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              width: "auto",
              height: "auto",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking on image
          />
        </div>
      )}
    </div>
  );
};

export default Impressum;
