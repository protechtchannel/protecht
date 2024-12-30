import React, { useState } from "react";
import ImpressumImg from "../images/Impressum.jpg"; // Import your image file
import "../styles_css/Impressum.css";
import Shadows from "../components/Shadows";
import "../styles_css/Terms.css";

const Impressum = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    console.log("Modal toggled"); // Debugging log
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <div className="hero">
        <Shadows />

        <h1 className="main-heading">Impressum</h1>
        <p className="subheading">
          Innovating without limits, empowering your vision
        </p>
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
    </div>
  );
};

export default Impressum;
