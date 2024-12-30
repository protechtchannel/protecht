import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles_css/StabilitySection.css";
import rightarrow from "../images/right-arrow.svg";

const StabilitySection = () => {
  const navigate = useNavigate();

  const handleRedirect = (section) => {
    navigate(`/empowering#${section}`);
  };

  return (
    <div style={{ backgroundColor: "#F8F8F8" }}>
      <div className="custom-container">
        {/* Header Section */}
        <div className="header-section">
          <h1 className="black-white5">
            Ensuring Stability and Growth with Custom Business Solutions.
          </h1>
          <p className="title">
            Experience tailored solutions designed to simplify your workflow and
            enhance productivity. From streamlined processes to dedicated
            support, we prioritize your needs to make every interaction
            seamless.
          </p>
          <a href="/contact" className="cta-button2">
            <span
              className="button-text"
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
              Learn More
            </span>
            <span className="button-icon">
              <img src={rightarrow} alt="Arrow Icon" />
            </span>
          </a>
        </div>

        {/* Right Section with Containers */}
        <div className="right-section">
          {/* Discovering Smart Management */}
          <div
            style={{ paddingTop: "0px" }}
            className="content-item"
            data-target="discovering-smart-management"
            onClick={() => handleRedirect("discovering-smart-management")}
          >
            <img
              src={require("../images/icon1.png")}
              alt="Discovering Smart Management"
            />
            <div className="content-text">
              <h3 style={{ marginTop: "0px" }}>Discovering Smart Management</h3>
              <p>
                Stay on top of your tasks and stay informed about what’s
                happening.
              </p>
            </div>
          </div>

          {/* Customized Software Development */}
          <div
            className="content-item"
            data-target="customized-software-development"
            onClick={() => handleRedirect("customized-software-development")}
          >
            <img
              src={require("../images/icon2.png")}
              alt="Customized Software Development"
            />
            <div className="content-text">
              <h3>Customized Software Development</h3>
              <p>
                Custom software development is the process of conceptualizing,
                designing.
              </p>
            </div>
          </div>

          {/* Effortless Rapid Communication */}
          <div
            className="content-item"
            data-target="effortless-rapid-communication"
            onClick={() => handleRedirect("effortless-rapid-communication")}
          >
            <img
              src={require("../images/icon3.png")}
              alt="Effortless Rapid Communication"
            />
            <div className="content-text">
              <h3>Effortless Rapid Communication</h3>
              <p>
                Effortlessly manage your task lists and stay connected with
                real-time updates.
              </p>
            </div>
          </div>

          {/* Stay Ahead with Adaptive Capabilities */}
          <div
            className="content-item"
            data-target="adaptive-capabilities"
            onClick={() => handleRedirect("adaptive-capabilities")}
          >
            <img
              src={require("../images/icon4.png")}
              alt="Stay Ahead with Adaptive Capabilities"
            />
            <div className="content-text">
              <h3>Stay Ahead with Adaptive Capabilities</h3>
              <p>
                Maintain organization and keep pace with industry developments,
                ensuring your business is always prepared for what’s next.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StabilitySection;
