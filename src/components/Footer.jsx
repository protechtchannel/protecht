import React, { useState } from "react";
import "../styles_css/Footer.css";
import logo from "../images/logo.png";
import linkedin from "../images/linkedin.svg";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import { NavLink } from "react-router-dom";
import { db } from "../database_connection/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation(); // Access the translation functions
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email format
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setSuccess(false);
      return;
    }

    setError(""); // Clear any previous errors

    // Clear any previous errors

    try {
      // Save the email to Firestore
      await addDoc(collection(db, "Newsletter Subscribers"), { email });
      setSuccess(true);
      setEmail(""); // Clear the input field
    } catch (error) {
      console.error("Error saving email to Firestore: ", error);
      setError(t("footer.errors.saveFailed")); // Use translation key for error
    }
  };

  const switchLanguage = (language) => {
    i18n.changeLanguage(language); // Change the language
  };

  //   return (
  //     <div>
  //       <div className="gradient1"></div>
  //       <footer className="footer-container">
  //         <div className="first-section1">
  //           <div className="first-section">
  //             <div className="innovative">Innovative Project Ideas?</div>
  //             <p>
  //               We bring your boldest ideas to life with creativity, expertise,
  //               and strategic insight. Let's work together to turn your vision
  //               into reality and make a lasting impact.
  //             </p>
  //           </div>

  //           <div
  //             className="footer-newsletter1"
  //             style={{ display: "flex", flexDirection: "column" }}
  //           >
  //             <div className="footer-newsletter">
  //               <div
  //                 style={{
  //                   fontSize: "30px",
  //                   paddingBottom: "10px",
  //                   paddingTop: "10px",
  //                 }}
  //               >
  //                 Newsletter
  //               </div>
  //               <div
  //                 style={{
  //                   color: "#C2C2C2",
  //                   paddingBottom: "10px",
  //                   fontSize: "18px",
  //                   marginBottom: "30px",
  //                 }}
  //               >
  //                 Subscribe to our newsletter to get the latest Protecht news
  //               </div>

  //               {/* Email Subscription Form */}
  //               <form
  //                 onSubmit={handleSubmit}
  //                 style={{ display: "flex", gap: "10px" }}
  //               >
  //                 <input
  //                   type="email"
  //                   placeholder="Enter your email"
  //                   value={email}
  //                   onChange={(e) => setEmail(e.target.value)}
  //                   required
  //                 />
  //                 <button type="submit">Subscribe</button>
  //               </form>
  //               {error && (
  //                 <p
  //                   style={{ color: "red", marginTop: "10px", fontSize: "16px" }}
  //                 >
  //                   {error}
  //                 </p>
  //               )}
  //               {success && (
  //                 <p
  //                   style={{
  //                     color: "#7699c2",
  //                     marginTop: "10px",
  //                     fontSize: "16px",
  //                   }}
  //                 >
  //                   You have successfully subscribed!
  //                 </p>
  //               )}
  //             </div>
  //           </div>
  //         </div>
  //         <div className="footer-bottom">
  //           <div className="footer-logo">
  //             <div className="logo">
  //               <a href="/">
  //                 <img src={logo} alt="Protecht Logo" className="logo-image" />
  //               </a>
  //             </div>
  //             <div style={{ marginTop: "10px", fontSize: "18px" }}>
  //               Smarter, Simpler, Faster
  //             </div>
  //           </div>
  //           <div className="names">
  //             <div className="footer-links">
  //               <h4>Company</h4>
  //               <NavLink to="/about">About us</NavLink>
  //               <NavLink to="/careers">Careers</NavLink>
  //               <a href="https://www.linkedin.com/company/protechtch/posts/?feedView=all">
  //                 News
  //               </a>
  //               <NavLink to="/contact">Contact</NavLink>
  //             </div>

  //             <div className="footer-links">
  //               <h4>Legal</h4>
  //               <NavLink to="/terms">Terms</NavLink>
  //               <NavLink to="/privacy">Privacy</NavLink>
  //               <NavLink to="/impressum">Imprint</NavLink>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="rights">
  //           <p>© 2024 Protecht. All rights reserved.</p>

  //           <div className="social-icons">
  //             <div className="language">
  //               <a href="#">EN</a>
  //               <a href="#">DE</a>
  //             </div>
  //             <a href="https://www.linkedin.com/company/protechtch/posts/?feedView=all">
  //               <img src={linkedin} alt="Linkedin" className="icon" />
  //             </a>
  //             <a href="https://www.instagram.com/protecht_ch?igsh=MWl3ZzY4YTNtY2pkMQ==">
  //               <img
  //                 src={instagram}
  //                 alt="Instagram"
  //                 className="instagram"
  //                 style={{ width: "37px", height: "37px" }}
  //               />
  //             </a>
  //             <a href="https://www.facebook.com/protecht.ch/">
  //               <img
  //                 src={facebook}
  //                 alt="facebook"
  //                 className="facebook"
  //                 style={{ width: "30px", height: "32px" }}
  //               />
  //             </a>
  //           </div>
  //         </div>
  //       </footer>
  //     </div>
  //   );
  // };

  // export default Footer;

  return (
    <div>
      <div className="gradient1"></div>
      <footer className="footer-container">
        <div className="first-section1">
          <div className="first-section">
            <div className="innovative">{t("footer.innovative")}</div>
            <p>{t("footer.description")}</p>
          </div>

          <div
            className="footer-newsletter1"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <div className="footer-newsletter">
              <div
                style={{
                  fontSize: "30px",
                  paddingBottom: "10px",
                  paddingTop: "10px",
                }}
              >
                {t("footer.newsletterTitle")}
              </div>
              <div
                style={{
                  color: "#C2C2C2",
                  paddingBottom: "10px",
                  fontSize: "18px",
                  marginBottom: "30px",
                }}
              >
                {t("footer.newsletterDescription")}
              </div>

              {/* Email Subscription Form */}
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", gap: "10px" }}
              >
                <input
                  type="email"
                  placeholder={t("footer.emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">{t("footer.subscribeButton")}</button>
              </form>
              {error && (
                <p
                  style={{ color: "red", marginTop: "10px", fontSize: "16px" }}
                >
                  {error}
                </p>
              )}
              {success && (
                <p
                  style={{
                    color: "#7699c2",
                    marginTop: "10px",
                    fontSize: "16px",
                  }}
                >
                  {t("footer.successMessage")}
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-logo">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="Protecht Logo" className="logo-image" />
              </a>
            </div>
            <div style={{ marginTop: "10px", fontSize: "18px" }}>
              {t("footer.tagline")}
            </div>
          </div>
          <div className="names">
            <div className="footer-links">
              <h4>{t("footer.companyTitle")}</h4>
              <NavLink to="/about">{t("footer.links.about")}</NavLink>
              <NavLink to="/careers">{t("footer.links.careers")}</NavLink>
              <a href="https://www.linkedin.com/company/protechtch/posts/?feedView=all">
                {t("footer.links.news")}
              </a>
              <NavLink to="/contact">{t("footer.links.contact")}</NavLink>
            </div>

            <div className="footer-links">
              <h4>{t("footer.legalTitle")}</h4>
              <NavLink to="/terms">{t("footer.links.terms")}</NavLink>
              <NavLink to="/privacy">{t("footer.links.privacy")}</NavLink>
              <NavLink to="/impressum">{t("footer.links.impressum")}</NavLink>
            </div>
          </div>
        </div>

        <div className="rights">
          <p>© 2024 Protecht. {t("footer.rights")}</p>

          <div className="social-icons">
            <div className="language">
              <a
                href="#"
                onClick={() => switchLanguage("en")}
                style={{ marginRight: "10px" }}
              >
                EN
              </a>
              <a href="#" onClick={() => switchLanguage("de")}>
                DE
              </a>
            </div>
            <a href="https://www.linkedin.com/company/protechtch/posts/?feedView=all">
              <img src={linkedin} alt="Linkedin" className="icon" />
            </a>
            <a href="https://www.instagram.com/protecht_ch?igsh=MWl3ZzY4YTNtY2pkMQ==">
              <img
                src={instagram}
                alt="Instagram"
                className="instagram"
                style={{ width: "37px", height: "37px" }}
              />
            </a>
            <a href="https://www.facebook.com/protecht.ch/">
              <img
                src={facebook}
                alt="facebook"
                className="facebook"
                style={{ width: "30px", height: "32px" }}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
