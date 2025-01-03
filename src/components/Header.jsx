// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import "../styles_css/Header.css";
// import logo from "../images/logo.png";
// import menuIcon from "../images/menu.svg"; // Add your menu icon image
// import Menu from "./Menu"; // Import the Menu component
// import { useTranslation } from "react-i18next";

// const Header = () => {
//   const { t, i18n } = useTranslation(); // Access the translation functions

//   // const { t } = useTranslation();

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef(null); // Reference for the menu container
//   const menuIconRef = useRef(null); // Reference for the menu icon

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         menuRef.current &&
//         !menuRef.current.contains(event.target) &&
//         menuIconRef.current &&
//         !menuIconRef.current.contains(event.target)
//       ) {
//         setIsMenuOpen(false); // Close menu when clicking outside
//       }
//     };

//     const handleScroll = () => {
//       const scrollThreshold = window.innerHeight * 0.2;
//       if (window.scrollY > scrollThreshold) {
//         setIsMenuOpen(false); // Close menu on scrolling beyond 20vh
//       }
//     };

//     document.addEventListener("click", handleClickOutside);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   const switchLanguage = (language) => {
//     i18n.changeLanguage(language);
//   };

//   return (
//     <div style={{ width: "100%", backgroundColor: "black" }}>
//       <header className="header">
//         {/* Logo Section */}
//         <div className="logo">
//           <a href="/">
//             <img src={logo} alt="Protecht Logo" className="logo-image" />
//           </a>
//         </div>

//         {/* Menu Icon for Mobile */}
//         <img
//           src={menuIcon}
//           alt="Menu Icon"
//           className="menu-icon"
//           ref={menuIconRef} // Attach ref to the icon
//           onClick={toggleMenu} // Toggle menu on click
//         />

//         {/* Navigation Links */}
//         <nav className="navv">
//           <ul className="nav-links">
//             <div className="language">
//               <div className="language" style={{ marginRight: "20px" }}>
//                 <a
//                   href="#"
//                   onClick={() => switchLanguage("en")}
//                   className={i18n.language === "en" ? "active" : ""}
//                   style={{ marginRight: "20px" }}
//                 >
//                   EN
//                 </a>
//                 <a
//                   href="#"
//                   onClick={() => switchLanguage("de")}
//                   className={i18n.language === "de" ? "active" : ""}
//                 >
//                   DE
//                 </a>
//               </div>
//             </div>
//             <li>
//               <NavLink
//                 to="/"
//                 className={({ isActive }) => (isActive ? "active" : "")}
//               >
//                 {t("header.home")}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/services"
//                 className={({ isActive }) => (isActive ? "active" : "")}
//               >
//                 {t("header.services")}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/empowering"
//                 className={({ isActive }) => (isActive ? "active" : "")}
//               >
//                 {t("header.empowering")}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/about"
//                 className={({ isActive }) => (isActive ? "active" : "")}
//               >
//                 {t("header.about")}
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 to="/contact"
//                 className={({ isActive }) => (isActive ? "active" : "")}
//               >
//                 {t("header.contact")}
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </header>

//       {/* Conditionally Render the Menu Component */}
//       {isMenuOpen && (
//         <div ref={menuRef}>
//           <Menu />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "../styles_css/Header.css";
import logo from "../images/logo.png";
import menuIcon from "../images/menu.svg"; // Add your menu icon image
import Menu from "./Menu"; // Import the Menu component
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation(); // Access the translation functions

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track if the view is mobile
  const menuRef = useRef(null); // Reference for the menu container
  const menuIconRef = useRef(null); // Reference for the menu icon

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Update `isMobile` based on window width
  useEffect(() => {
    const updateView = () => {
      setIsMobile(window.innerWidth <= 768); // Example: 768px is the breakpoint for mobile
    };

    updateView(); // Check initial screen size
    window.addEventListener("resize", updateView);

    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false); // Close menu when clicking outside
      }
    };

    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.2;
      if (window.scrollY > scrollThreshold) {
        setIsMenuOpen(false); // Close menu on scrolling beyond 20vh
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div style={{ width: "100%", backgroundColor: "black" }}>
      <header className="header">
        <div className="headerContainer">
          {/* Logo Section */}
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Protecht Logo" className="logo-image" />
            </a>
          </div>

          {/* Conditional Rendering for Language Switcher and Menu Icon */}
          {isMobile ? (
            <div className="mobile-header">
              <div className="language1 mobile-language">
                <a
                  href="#"
                  onClick={() => switchLanguage("en")}
                  className={i18n.language === "en" ? "active" : ""}
                  style={{ marginRight: "10px", fontSize: "14px" }}
                >
                  EN
                </a>
                <a
                  href="#"
                  onClick={() => switchLanguage("de")}
                  className={i18n.language === "de" ? "active" : ""}
                  style={{ fontSize: "14px" }}
                >
                  DE
                </a>
              </div>
              <img
                src={menuIcon}
                alt="Menu Icon"
                className="menu-icon"
                ref={menuIconRef}
                onClick={toggleMenu}
              />
            </div>
          ) : (
            <div className="desktop-header">
              <div className="language1 desktop-language">
                <a
                  href="#"
                  onClick={() => switchLanguage("en")}
                  className={i18n.language === "en" ? "active" : ""}
                  style={{ marginRight: "20px" }}
                >
                  EN
                </a>
                <a
                  href="#"
                  onClick={() => switchLanguage("de")}
                  className={i18n.language === "de" ? "active" : ""}
                >
                  DE
                </a>
              </div>
              <nav className="navv">
                <ul className="nav-links">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {t("header.home")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {t("header.services")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/empowering"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {t("header.empowering")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {t("header.about")}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) => (isActive ? "active" : "")}
                    >
                      {t("header.contact")}
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}

          {/* Conditionally Render the Menu Component */}
          {isMenuOpen && (
            <div
              ref={menuRef}
              style={{ position: "absolute", top: 30, right: `0` }}
            >
              <Menu />
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;
