import React from "react";

import Shadows from "../components/Shadows";
import "../styles_css/Terms.css";

const Privacy = () => {
  return (
    <div>
      <div className="hero">
        <Shadows />

        <h1 className="main-heading">Privacy</h1>
        <p className="subheading">
          Innovating without limits, empowering your vision
        </p>
      </div>

      {/* Main Content */}
      <div className="content-section">
        {/* Privacy Policy Header */}
        <div className="section1">
          <p>
            <strong>Privacy Policy</strong>
          </p>
          <p>
            <strong>Effective Date:</strong> November 26, 2024
          </p>
          <p>
            Protecht is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, and safeguard your personal
            information when you interact with our services.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="section">
          <p>
            <strong className="number-container">
              01. Information We Collect
            </strong>
          </p>
          <p>
            We collect personal and non-personal information to provide,
            improve, and personalize our services. This may include:
          </p>
          <ul>
            <li>
              <strong style={{ color: "#315c9b" }}>
                Personal Information:{" "}
              </strong>
              Name, email address, phone number, business information, and
              payment details when provided.
            </li>
            <li>
              <strong style={{ color: "#315c9b" }}>Usage Data:</strong>{" "}
              Information about your interactions with our website, such as IP
              address, browser type, and pages visited.
            </li>
            <li>
              <strong style={{ color: "#315c9b" }}>Cookies: </strong>
              Small files stored on your device to enhance your browsing
              experience.
            </li>
          </ul>
        </div>

        {/* How We Use Your Information */}
        <div className="section">
          <p>
            <strong className="number-container">
              02. How We Use Your Information
            </strong>
          </p>
          <p>The information we collect is used for:</p>
          <ul>
            <li>Providing and managing our services.</li>
            <li>Personalizing your experience.</li>
            <li>Responding to inquiries and offering support.</li>
            <li>Analyzing usage trends to improve services.</li>
            <li>Complying with legal and regulatory requirements.</li>
          </ul>
        </div>

        {/* Sharing Your Information */}
        <div className="section">
          <p>
            <strong className="number-container">
              03. Sharing Your Information
            </strong>
          </p>
          <p>
            We do not sell your personal information. However, we may share your
            data with:
          </p>
          <ul>
            <li>
              <strong style={{ color: "#315c9b" }}>Service Providers:</strong>{" "}
              Trusted partners who assist in delivering our services, bound by
              confidentiality agreements.
            </li>
            <li>
              <strong style={{ color: "#315c9b" }}>Legal Authorities:</strong>{" "}
              If required to comply with legal obligations or protect our
              rights.
            </li>
            <li>
              <strong style={{ color: "#315c9b" }}>Business Transfers:</strong>{" "}
              In case of mergers, acquisitions, or asset sales, your information
              may be transferred as part of the transaction.
            </li>
          </ul>
        </div>

        {/* Data Security */}
        <div className="section">
          <p>
            <strong className="number-container">04. Data Security</strong>
          </p>
          <p>
            Protecht implements industry-standard measures to protect your data
            against unauthorized access, alteration, disclosure, or destruction.
            However, no method of transmission or storage is entirely secure.
          </p>
        </div>

        {/* Your Rights */}
        <div className="section">
          <p>
            <strong className="number-container">05. Your Rights</strong>
          </p>
          <p>As a user, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request corrections or updates to your information.</li>
            <li>
              Delete your data, subject to legal and contractual obligations.
            </li>
            <li>Opt-out of marketing communications.</li>
          </ul>
          <p>
            To exercise these rights, contact us using the details provided
            below.
          </p>
        </div>

        {/* Cookies and Tracking */}
        <div className="section">
          <p>
            <strong className="number-container">
              06. Cookies and Tracking
            </strong>
          </p>
          <p>
            Protecht uses cookies to enhance user experience. You can manage or
            disable cookies through your browser settings, but this may affect
            your access to certain features.
          </p>
        </div>

        {/* Third-Party Links */}
        <div className="section">
          <p>
            <strong className="number-container">07. Third-Party Links</strong>
          </p>
          <p>
            Our website may contain links to external sites. Protecht is not
            responsible for the privacy practices of these third parties.
          </p>
        </div>

        {/* Children’s Privacy */}
        <div className="section">
          <p>
            <strong className="number-container">08. Children’s Privacy</strong>
          </p>
          <p>
            Protecht’s services are not directed at children under the age of
            16. We do not knowingly collect personal information from children.
          </p>
        </div>

        {/* Changes to This Privacy Policy */}
        <div className="section" style={{ paddingBottom: "80px" }}>
          <p>
            <strong className="number-container">
              09. Changes to This Privacy Policy
            </strong>
          </p>
          <p>
            Protecht reserves the right to update this policy. Significant
            changes will be communicated through our website or other channels.
            Continued use of our services constitutes acceptance of the updated
            policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
