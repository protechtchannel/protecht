// Contact.jsx
import React, { useState } from "react";
import Location from "../images/location.png";
import PhoneIcon from "../images/call.png";
import MailIcon from "../images/sms-tracking.png";
import LinkedIcon from "../images/linkedin-svgrepo-com.svg";
import FacebookIcon from "../images/facebook2.svg";
import InstagramIcon from "../images/instagram.svg";
import "../styles_css/Contact.css";
import Shadows from "../components/Shadows";
import { db } from "../database_connection/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      "First Name": e.target[0].value,
      "Last Name": e.target[1].value,
      Email: e.target[2].value,
      "Phone Number": e.target[3].value,
      Message: e.target[4].value,
    };

    const validationErrors = {};

    // Validate phone number
    if (
      formData["Phone Number"].length < 9 ||
      !/^[0-9]+$/.test(formData["Phone Number"])
    ) {
      validationErrors.phoneNumber =
        "Phone number must be at least 9 digits and only contain numbers.";
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      validationErrors.email = "Please enter a valid email address.";
    }

    // Validate required fields
    if (!formData["First Name"])
      validationErrors.firstName = "First name is required.";
    if (!formData["Last Name"])
      validationErrors.lastName = "Last name is required.";

    setErrors(validationErrors);

    // Stop submission if there are validation errors
    if (Object.keys(validationErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    try {
      await addDoc(collection(db, "Contact Form"), formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      e.target.reset();
    } catch (error) {
      console.error("Error saving contact form data: ", error);
      alert("Failed to send message. Please try again.");
      setIsSubmitting(false);
    }
  };
  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="contact-page">
      <Shadows />
      <div
        className="container"
        style={{
          minHeight: "500px",
          position: "relative",
          paddingTop: "100px",
        }}
      >
        {isSubmitting && (
          <div className="spinner-overlay">
            <div className="spinner"></div>
          </div>
        )}

        {/* Left Container */}
        <div className="contact-info">
          <div>
            <span className="highlight">{t("contactPage.title")}</span>
          </div>
          <p className="colors" style={{ marginBottom: "40px" }}>
            {t("contactPage.description")}
          </p>

          <div className="info-list">
            <div className="info-item">
              <img src={PhoneIcon} alt="Phone" className="icon" />
              <span className="text">
                {t("contactPage.contactDetails.phone")}
              </span>
            </div>
            <div className="info-item">
              <img src={MailIcon} alt="Mail" className="icon" />
              <span className="text">
                {t("contactPage.contactDetails.email")}
              </span>
            </div>
            <div className="info-item">
              <img src={Location} alt="Location" className="icon" />
              <div>
                <a
                  href="https://www.google.com/maps/place/Zugerstrasse+72,+6340+Baar"
                  className="text"
                  style={{ margin: "0", textDecoration: "none" }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseLeave={(e) => (e.target.style.textDecoration = "none")}
                >
                  {t("contactPage.contactDetails.address")}
                </a>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/company/protechtch/posts/?feedView=all"
              className="social-icon"
            >
              <img src={LinkedIcon} alt="LinkedIn" className="icon1" />
            </a>
            <a
              href="https://www.facebook.com/protecht.ch/"
              className="social-icon"
            >
              <img src={FacebookIcon} alt="Facebook" className="icon1" />
            </a>
            <a
              href="https://www.instagram.com/protecht_ch"
              className="social-icon"
            >
              <img src={InstagramIcon} alt="Instagram" className="icon1" />
            </a>
          </div>
        </div>

        {/* Right Container */}
        <div className="contact-form" style={{ minHeight: "400px" }}>
          {isSubmitted ? (
            <div className="popup">
              <p style={{ textAlign: "center" }}>
                {t("contactPage.form.submissionSuccess")}
              </p>
              <p style={{ textAlign: "center" }}>
                {t("contactPage.form.submissionSuccess2")}
              </p>
              <button onClick={() => setIsSubmitted(false)}>
                {t("contactPage.form.closeButton")}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder={t("contactPage.form.firstName")}
                  required
                />
                {errors.firstName && (
                  <p className="error-text">⚠ {errors.firstName}</p>
                )}
                <input
                  type="text"
                  placeholder={t("contactPage.form.lastName")}
                  required
                />
                {errors.lastName && (
                  <p className="error-text">⚠ {errors.lastName}</p>
                )}
              </div>
              <input
                type="email"
                placeholder={t("contactPage.form.email")}
                required
              />
              {errors.email && <p className="error-text">⚠ {errors.email}</p>}
              <input
                type="tel"
                placeholder={t("contactPage.form.phone")}
                required
              />
              {errors.phoneNumber && (
                <p className="error-text">⚠ {errors.phoneNumber}</p>
              )}
              <textarea
                style={{
                  fontFamily: "Arial, sans-serif",
                  minHeight: "100px",
                  width: "100%",
                  resize: "none",
                }}
                placeholder={t("contactPage.form.message")}
                rows="6"
              ></textarea>
              {errors.message && (
                <p className="error-text">⚠ {errors.message}</p>
              )}
              <button
                style={{ marginBottom: "0px" }}
                type="submit"
                disabled={isSubmitting}
              >
                {t("contactPage.form.submitButton")}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
