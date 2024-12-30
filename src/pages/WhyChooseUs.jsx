import React, { useState, useRef, useEffect } from "react";
import "../styles_css/WhyChooseUs.css";

function WhyChooseUs() {
  const [activeSection, setActiveSection] = useState(0);
  const [sidebarHeight, setSidebarHeight] = useState("auto");
  const [isMobile, setIsMobile] = useState(false);
  const activeCardRef = useRef(null);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 1024); // Check if the screen is mobile-sized
  };

  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sections = [
    {
      sidebarTitle: "Team",
      cardTitle: "Close-knit team",
      description:
        "Our close-knit team is built on trust, collaboration, and shared goals. We support each other through challenges, value open communication, and celebrate each other's successes. This unity creates an environment where everyone feels empowered to contribute their best, knowing they are part of a supportive and dedicated team committed to achieving common goals. This dynamic approach keeps us motivated, helping us grow stronger both as individuals and as a team.",
      percentage: 25,
    },
    {
      sidebarTitle: "Communication",
      cardTitle: "Open Communication",
      description:
        "We believe in maintaining transparent, open communication across all interactions with our partners to foster a collaborative and aligned environment. Our approach prioritizes clear, constructive feedback and an open exchange of perspectives, allowing us to adapt flexibly to our partners' needs and industry innovations. By valuing their insights and working together closely, we align our goals more effectively, solve challenges, and build strong, trusting relationships that drive mutual success.",
      percentage: 50,
    },
    {
      sidebarTitle: "Solution",
      cardTitle: "Solution-Oriented",
      description:
        "Our core focus revolves around finding innovative and effective solutions, tackling each challenge with a collaborative spirit. Our team takes pride in a proactive approach, working together to anticipate needs, identify root causes, and develop practical strategies that lead to lasting results. With a solution-oriented mindset, we don't just address immediate concerns; we work to prevent future issues, looking at the bigger picture to implement sustainable practices.",
      percentage: 75,
    },
    {
      sidebarTitle: "Quality",
      cardTitle: "Commitment to Quality",
      description:
        "Our focus is on finding solutions and overcoming challenges together. We are proactive in identifying issues and take pride in resolving them efficiently and effectively. Quality is our priority in every aspect of our work. We strive for excellence and continuous improvement to deliver the best outcomes for our clients and stakeholders. Every team member is dedicated to upholding the highest standards, ensuring that each project reflects our commitment to precision and care.",
      percentage: 100,
    },
  ];

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
        Why Choose Us?
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
