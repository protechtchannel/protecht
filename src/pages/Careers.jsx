import React from "react";

import Shadows from "../components/Shadows";
import "../styles_css/Careers.css";

const Careers = () => {
  return (
    <div>
      <div className="hero">
        <Shadows />

        <h1 className="main-heading">Jobs</h1>
        <p className="subheading">
          Innovating without limits, empowering your vision
        </p>
      </div>

      <div className="no-position-container">
        {/* Main Text */}
        <div className="no-position-card">
          <div className="inner"></div>
          <div className="items">
            <p className="no-position-text">
              We don’t have any opened position at the moment
            </p>
            <p className="no-position-tip">
              Tip: On our social networks, we publish our vacancies daily
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
