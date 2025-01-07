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
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha(); // For reCAPTCHA v3
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      phone: e.target[3].value,
      message: e.target[4].value,
    };

    const validationErrors = {};

    // Validate required fields
    if (!formData.firstName)
      validationErrors.firstName = "First name is required.";
    if (!formData.lastName)
      validationErrors.lastName = "Last name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Please enter a valid email address.";
    }
    if (formData.phone.length < 9 || !/^[0-9]+$/.test(formData.phone)) {
      validationErrors.phone =
        "Phone number must be at least 9 digits and only contain numbers.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setIsSubmitting(false);
      return;
    }

    // Validate reCAPTCHA
    if (!executeRecaptcha) {
      alert("reCAPTCHA is not available. Please refresh the page.");
      setIsSubmitting(false);
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha("contact_form");
      if (!recaptchaToken) {
        alert("Failed reCAPTCHA validation. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Save form data to Firestore
      await addDoc(collection(db, "Contact Form"), {
        ...formData,
        recaptchaToken,
      });

      // Send email using EmailJS
      await emailjs.send(
        "service_ojqm51l", // Your Service ID
        "template_dk4oe2t", // Your Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "PqBvLKQGwI6cImcg_" // Your Public Key
      );

      console.log("Message sent successfully!");
      setIsSubmitted(true);
      e.target.reset(); // Clear the form after submission
    } catch (error) {
      console.error("Failed to send message:", error);
    }

    setIsSubmitting(false);
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
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedIcon} alt="LinkedIn" className="icon1" />
            </a>
            <a
              href="https://www.facebook.com/protecht.ch/"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={FacebookIcon} alt="Facebook" className="icon1" />
            </a>
            <a
              href="https://www.instagram.com/protecht_ch"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
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
              {errors.phone && <p className="error-text">⚠ {errors.phone}</p>}
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
