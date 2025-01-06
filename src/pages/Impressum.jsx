// import React, { useState } from "react";
// import ImpressumImg from "../images/Impressum.jpg"; // Import your first image file
// import ImpressumImg2 from "../images/impressum2.jpg"; // Import your second image file
// import ImpressumImg3 from "../images/impressum1de.jpg"; // Import your second image file
// import "../styles_css/Impressum.css";
// import Shadows from "../components/Shadows";
// import "../styles_css/Terms.css";
// import { useTranslation } from "react-i18next";

// const Impressum = () => {
//   const { t, i18n } = useTranslation();
//   const [activeModal, setActiveModal] = useState(null); // Track which modal is open

//   const openModal = (modalId) => {
//     setActiveModal(modalId); // Set the active modal ID
//   };

//   const closeModal = () => {
//     setActiveModal(null); // Close the active modal
//   };

//   const switchLanguage = (language) => {
//     i18n.changeLanguage(language);
//   };

//   return (
//     <div>
//       <div className="hero">
//         <Shadows />
//         <h1 className="main-heading">{t("impressum.hero.heading")}</h1>
//         <p className="subheading">{t("impressum.hero.subHeading")}</p>
//       </div>

//       {/* Thumbnail for First Image */}
//       <div className="bigcont" onClick={() => openModal("modal1")}>
//         <img
//           src={ImpressumImg}
//           alt="Impressum Thumbnail 1"
//           style={{
//             display: "block",
//             width: "100%",
//             borderRadius: "8px",
//             boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//           }}
//         />
//       </div>

//       {/* Thumbnail for Second Image */}
//       <div className="bigcont" onClick={() => openModal("modal2")}>
//         <img
//           src={ImpressumImg2}
//           alt="Impressum Thumbnail 2"
//           style={{
//             display: "block",
//             width: "100%",
//             borderRadius: "8px",
//             boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//           }}
//         />
//       </div>

//       {/* Modal for First Image */}
//       {activeModal === "modal1" && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             zIndex: 1000,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           onClick={closeModal}
//         >
//           <img
//             src={ImpressumImg}
//             alt="Impressum Full 1"
//             style={{
//               maxWidth: "90%",
//               maxHeight: "90%",
//               width: "auto",
//               height: "auto",
//             }}
//             onClick={(e) => e.stopPropagation()} // Prevent closing modal on image click
//           />
//         </div>
//       )}

//       {/* Modal for Second Image */}
//       {activeModal === "modal2" && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.7)",
//             zIndex: 1000,
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//           onClick={closeModal}
//         >
//           <img
//             src={ImpressumImg2}
//             alt="Impressum Full 2"
//             style={{
//               maxWidth: "90%",
//               maxHeight: "90%",
//               width: "auto",
//               height: "auto",
//             }}
//             onClick={(e) => e.stopPropagation()} // Prevent closing modal on image click
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Impressum;

import React, { useState } from "react";
import ImpressumImg from "../images/Impressum.jpg"; // English image
import ImpressumImg2 from "../images/impressum2.jpg"; // Second image
import ImpressumImg3 from "../images/impressum1de.jpg"; // German image
import "../styles_css/Impressum.css";
import Shadows from "../components/Shadows";
import "../styles_css/Terms.css";
import { useTranslation } from "react-i18next";

const Impressum = () => {
  const { t, i18n } = useTranslation();
  const [activeModal, setActiveModal] = useState(null); // Track which modal is open

  const openModal = (modalId) => {
    setActiveModal(modalId); // Set the active modal ID
  };

  const closeModal = () => {
    setActiveModal(null); // Close the active modal
  };

  const getFirstImage = () => {
    return i18n.language === "de" ? ImpressumImg3 : ImpressumImg; // Show German image if language is German
  };

  return (
    <div>
      <div className="hero">
        <Shadows />
        <h1 className="main-heading">{t("impressum.hero.heading")}</h1>
        <p className="subheading">{t("impressum.hero.subHeading")}</p>
      </div>

      {/* Thumbnail for First Image */}
      <div className="bigcont" onClick={() => openModal("modal1")}>
        <img
          src={getFirstImage()} // Dynamically choose the image based on language
          alt={`Impressum Thumbnail ${
            i18n.language === "de" ? "German" : "English"
          }`}
          style={{
            display: "block",
            width: "100%",
            borderRadius: "8px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </div>

      {/* Thumbnail for Second Image */}
      <div className="bigcont" onClick={() => openModal("modal2")}>
        <img
          src={ImpressumImg2}
          alt="Impressum Thumbnail 2"
          style={{
            display: "block",
            width: "100%",
            borderRadius: "8px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        />
      </div>

      {/* Modal for First Image */}
      {activeModal === "modal1" && (
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
          onClick={closeModal}
        >
          <img
            src={getFirstImage()} // Dynamically choose the image based on language
            alt={`Impressum Full ${
              i18n.language === "de" ? "German" : "English"
            }`}
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

      {/* Modal for Second Image */}
      {activeModal === "modal2" && (
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
          onClick={closeModal}
        >
          <img
            src={ImpressumImg2}
            alt="Impressum Full 2"
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

export default Impressum;
