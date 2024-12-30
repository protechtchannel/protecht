import React from "react";

import Shadows from "../components/Shadows";
import "../styles_css/Terms.css";

const Terms = () => {
  return (
    <div>
      <div className="hero">
        <Shadows />

        <h1 className="main-heading">Jobs</h1>
        <p className="subheading">
          Innovating without limits, empowering your vision
        </p>
      </div>

      {/* Main Content */}
      <div className="content-section">
        {/* Terms and Conditions Header */}
        <div className="section1">
          <p>
            <strong>Terms and Conditions</strong>
          </p>
          <p>
            <strong>Effective Date:</strong> November 26, 2024
          </p>
          <p>
            Welcome to Protecht. By accessing or using our services, you agree
            to the terms and conditions outlined below. Please read them
            carefully.
          </p>
        </div>

        {/* Definitions */}
        <div className="section">
          <p>
            <strong className="number-container">01. Definitions</strong>
          </p>
          <p>
            <strong style={{ color: "#315c9b" }}>Protecht:</strong> Refers to
            our company, offering IT solutions including Custom-Made
            Applications, Blockchain Development, AI Solutions, Cloud Services,
            IT Support, and Consulting.
          </p>
          <p>
            <strong style={{ color: "#315c9b" }}>Services:</strong> All
            products, services, and solutions provided by Protecht.
          </p>
          <p>
            <strong style={{ color: "#315c9b" }}>User/You:</strong> Any
            individual or entity accessing or using our services.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div className="section">
          <p>
            <strong className="number-container">
              02. Acceptance of Terms
            </strong>
          </p>
          <p>
            By using our website or services, you acknowledge that you have{" "}
            <strong style={{ color: "#315c9b" }}>
              read, understood, and agreed
            </strong>{" "}
            to these terms. If you do not agree, do not use our services.
          </p>
        </div>

        {/* Services Offered */}
        <div className="section">
          <p>
            <strong className="number-container">03. Services Offered</strong>
          </p>
          <p>
            Protecht provides a range of IT services, including but not limited
            to:
          </p>
          <ul>
            <li>Custom application development</li>
            <li>Blockchain solutions</li>
            <li>
              Artificial Intelligence (AI) cloud and on-premise development
            </li>
            <li>Cloud computing services</li>
            <li>IT support and consulting</li>
          </ul>
          <p>
            Specific details and terms for each service will be outlined in the
            respective service agreements.
          </p>
        </div>

        {/* User Obligations */}
        <div className="section">
          <p>
            <strong className="number-container">04. User Obligations</strong>
          </p>
          <p>As a user of Protecht’s services, you agree to:</p>
          <ul>
            <li>Provide accurate and up-to-date information when required.</li>
            <li>
              Use our services in compliance with applicable laws and
              regulations.
            </li>
            <li>
              Refrain from using our services to engage in illegal, harmful, or
              unethical activities.
            </li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div className="section">
          <p>
            <strong className="number-container">
              05. Intellectual Property
            </strong>
          </p>
          <p>
            All content, trademarks, logos, and software used by Protecht are
            the property of the company or its licensors. You are prohibited
            from copying, distributing, or modifying these without prior written
            consent.
          </p>
        </div>

        {/* Confidentiality */}
        <div className="section">
          <p>
            <strong className="number-container">06. Confidentiality</strong>
          </p>
          <p>
            Any sensitive information shared between you and Protecht shall
            remain confidential unless otherwise agreed in writing or required
            by law.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="section" style={{ paddingBottom: "80px" }}>
          <p>
            <strong className="number-container">
              07. Limitation of Liability
            </strong>
          </p>
          <p>Protecht shall not be held liable for:</p>
          <ul>
            <li>
              Indirect, incidental, or consequential damages arising from the
              use of our services.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Terms;
