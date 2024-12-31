import React, { useState, useRef, useEffect } from "react";
import "../styles_css/WhyChooseUs.css";
import { useTranslation } from "react-i18next";

function WhyChooseUs() {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState(0);
  const [sidebarHeight, setSidebarHeight] = useState("auto");
  const [isMobile, setIsMobile] = useState(false);
  const activeCardRef = useRef(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Map section keys dynamically from the translation JSON
  const sectionKeys = ["team", "communication", "solution", "quality"];
  const sections = sectionKeys.map((key, index) => ({
    sidebarTitle: t(`sections.${key}.sidebarTitle`),
    cardTitle: t(`sections.${key}.cardTitle`),
    description: t(`sections.${key}.description`),
    percentage: (index + 1) * 25,
  }));

  useEffect(() => {
    if (activeCardRef.current) {
      const cardHeight = activeCardRef.current.offsetHeight;
      setSidebarHeight(`${cardHeight}px`);
    }
  }, [activeSection]);

  return (
    <div className="containeR">
      <h1
        className="black-white3"
        style={{ paddingTop: "40px", paddingBottom: "20px" }}
      >
        {t("whyChooseUs.title")}
      </h1>

      <div className="wrapper row">
        {isMobile ? (
          // Mobile Sidebar
          <div className="mobile-sidebar">
            <div className="mobile-progress-bar">
              <div
                className="mobile-progress-indicator"
                style={{ width: `${sections[activeSection].percentage}%` }}
              />
            </div>
            <div className="mobile-navigation">
              {sections.map((section, index) => (
                <button
                  key={index}
                  className={`mobile-button ${
                    activeSection === index ? "mobile-active" : ""
                  }`}
                  onClick={() => setActiveSection(index)}
                >
                  {section.sidebarTitle}
                </button>
              ))}
            </div>
          </div>
        ) : (
          // Desktop Sidebar
          <div className="sidebar" style={{ height: sidebarHeight }}>
            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ height: `${sections[activeSection].percentage}%` }}
              />
            </div>
            <div className="sidebar-buttons">
              {sections.map((section, index) => (
                <button
                  key={index}
                  className={`sidebar-button ${
                    activeSection === index ? "active" : ""
                  }`}
                  onMouseEnter={() => setActiveSection(index)}
                >
                  {section.sidebarTitle}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="content">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`content-card ${
                activeSection === index ? "active" : ""
              }`}
              ref={activeSection === index ? activeCardRef : null}
            >
              <div className="card">
                <h2 className="card-title">{section.cardTitle}</h2>
                <p className="card-description">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
