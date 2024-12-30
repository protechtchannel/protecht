import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import for translations
import rightarrow from "../images/rightarrow.png";
import "../styles_css/Services.css";
import "../styles_css/About.css";
import Muhamer from "../images/Muhamer.jpg";
import Bujar from "../images/BujarDemolli.jpg";
import Shadows from "../components/Shadows";

const About = () => {
  const { t } = useTranslation(); // Hook for translations
  const [isMobile, setIsMobile] = useState(false);

  // Check window size and set state
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 968); // Adjust breakpoint as needed
  };

  useEffect(() => {
    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="hero">
        <Shadows />
        <h3 className="services-heading">{t("hero.servicesHeading")}</h3>
        <h1 className="main-heading">{t("hero.mainHeading")}</h1>
        <p className="subheading">{t("hero.subHeading")}</p>

        <a href="/contact" className="cta-button">
          <span className="button-text">{t("hero.ctaButton")}</span>
          <span className="button-icon">
            <img src={rightarrow} alt="Arrow Icon" />
          </span>
        </a>
      </div>
      <div className="about-container">
        <div className="about-heading">
          <p>{t("about.heading")}</p>
        </div>

        <div className="about-text">
          <p>{t("about.text1")}</p>
        </div>

        <div className="about-text" style={{ marginBottom: "50px" }}>
          <p>{t("about.text2")}</p>
        </div>
      </div>
      {isMobile ? (
        <div>
          {/* Mobile View */}
          <div className="outer-container">
            <div className="top-blue-line2"></div>
            <div className="image-container2">
              <img src={Muhamer} alt="Placeholder" className="profile-image2" />
              <div className="bottom-left-blue-bar"></div>
            </div>
          </div>
          <div className="mobile-profile-container">
            <div className="mobile-profile-name">
              {t("profiles.muhamer.name")}
            </div>
            <h3 className="mobile-profile-title">
              {t("profiles.muhamer.title")}
            </h3>
            <div className="mobile-profile-description">
              <p className="colors">{t("profiles.muhamer.description1")}</p>
              <p className="colors">{t("profiles.muhamer.description2")}</p>
              <p className="colors">{t("profiles.muhamer.description3")}</p>
            </div>
          </div>

          <div className="outer-container" style={{ marginTop: "30px" }}>
            <div className="top-blue-line2"></div>
            <div className="image-container2">
              <img src={Bujar} alt="Placeholder" className="profile-image2" />
              <div className="bottom-left-blue-bar"></div>
            </div>
          </div>
          <div className="mobile-profile-container">
            <div className="mobile-profile-name">
              {t("profiles.bujar.name")}
            </div>
            <h3 className="mobile-profile-title">
              {t("profiles.bujar.title")}
            </h3>
            <div className="mobile-profile-description">
              <p className="colors">{t("profiles.bujar.description1")}</p>
              <p className="colors">{t("profiles.bujar.description2")}</p>
              <p className="colors">{t("profiles.bujar.description3")}</p>
            </div>
          </div>
        </div>
      ) : (
        // Desktop View
        <div>
          <div className="profile-wrapper">
            <div className="profile-container">
              <div className="profile-image-container">
                <img src={Muhamer} alt="Profile" className="profile-image" />
              </div>
              <div className="blue-overlay">
                <div className="name-box">
                  <h2 className="profile-name">{t("profiles.muhamer.name")}</h2>
                </div>
              </div>
              <div className="profile-content-container">
                <h3 className="profile-title">{t("profiles.muhamer.title")}</h3>
                <div className="profile-description">
                  <p className="colors">{t("profiles.muhamer.description1")}</p>
                  <p className="colors">{t("profiles.muhamer.description2")}</p>
                  <p className="colors">{t("profiles.muhamer.description3")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-wrapper" style={{ marginTop: "40px" }}>
            <div className="profile-container">
              <div className="profile-image-container">
                <img src={Bujar} alt="Profile" className="profile-image" />
              </div>
              <div className="blue-overlay">
                <div className="name-box">
                  <h2 className="profile-name">{t("profiles.bujar.name")}</h2>
                </div>
              </div>
              <div className="profile-content-container">
                <h3 className="profile-title">{t("profiles.bujar.title")}</h3>
                <div className="profile-description">
                  <p className="colors">{t("profiles.bujar.description1")}</p>
                  <p className="colors">{t("profiles.bujar.description2")}</p>
                  <p className="colors">{t("profiles.bujar.description3")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;

// import React, { useState, useEffect } from "react";
// import rightarrow from "../images/rightarrow.png";

// import "../styles_css/Services.css";
// import "../styles_css/About.css";
// import Muhamer from "../images/Muhamer.jpg";
// import Bujar from "../images/BujarDemolli.jpg";
// import Shadows from "../components/Shadows";

// const About = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   // Check window size and set state
//   const handleResize = () => {
//     setIsMobile(window.innerWidth <= 968); // Adjust breakpoint as needed
//   };

//   useEffect(() => {
//     handleResize(); // Check initial width
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <div>
//       <div className="hero">
//         <Shadows />
//         <h3 className="services-heading">About us</h3>
//         <h1 className="main-heading">Innovating Beyond Boundaries</h1>
//         <p className="subheading">
//           Innovating without limits, empowering your vision
//         </p>

//         <a href="/contact" className="cta-button">
//           <span className="button-text">Get Started</span>
//           <span className="button-icon">
//             <img src={rightarrow} alt="Arrow Icon" />
//           </span>
//         </a>
//       </div>
//       <div class="about-container">
//         <div class="about-heading">
//           <p>About us</p>
//         </div>

//         <div class="about-text">
//           <p>
//             Protecht was created in Zug, Switzerland, to facilitate
//             international collaboration among Switzerland, Germany, Austria, and
//             Kosovo. With offices in Zug, Zurich, Vienna, Frankfurt, and
//             Prishtina, Protecht is strategically positioned to foster innovation
//             across the DACH and Balkan regions.
//           </p>
//         </div>

//         <div class="about-text" style={{ marginBottom: "50px" }}>
//           <p>
//             Specializing in emerging technologies, Protecht focuses on AI
//             solutions and infrastructure, blockchain, and cloud solution and
//             infrastructure. Our mission is to empower businesses to harness
//             advanced technology for sustainable growth and digital
//             transformation. Through tailored, high-impact solutions, Protecht is
//             dedicated to connecting businesses across borders, pushing the
//             boundaries of what’s possible, and leading the way into the future
//             of technology.
//           </p>
//         </div>
//       </div>
//       {isMobile ? (
//         <div>
//           <div class="outer-container">
//             <div class="top-blue-line2"></div>

//             <div class="image-container2">
//               <img src={Muhamer} alt="Placeholder" class="profile-image2" />

//               <div class="bottom-left-blue-bar"></div>
//             </div>
//           </div>
//           <div class="mobile-profile-container">
//             <div class="mobile-profile-name">Muhamer Nuridini</div>

//             <h3 class="mobile-profile-title">CEO</h3>

//             <div class="mobile-profile-description">
//               <p className="colors">
//                 As Founder and CEO of Protecht, Muhamer Nuridini leads with 16+
//                 years of expertise in IT, software development, and system
//                 administration.
//               </p>
//               <p className="colors">
//                 He drives Protecht’s mission to empower businesses through
//                 digital transformation with solutions in Custom Applications,
//                 Blockchain, AI, Cloud, Fintech, and ICT Consulting.
//               </p>
//               <p className="colors">
//                 Focused on delivering tailored strategies, Muhamer fosters
//                 long-term client partnerships built on trust and innovation,
//                 providing the tools and insights necessary for sustained growth
//                 and digital excellence.
//               </p>
//             </div>
//           </div>

//           <div class="outer-container" style={{ marginTop: "30px" }}>
//             <div class="top-blue-line2"></div>

//             <div class="image-container2">
//               <img src={Bujar} alt="Placeholder" class="profile-image2" />

//               <div class="bottom-left-blue-bar"></div>
//             </div>
//           </div>
//           <div class="mobile-profile-container">
//             <div class="mobile-profile-name">Bujar Demolli</div>

//             <h3 class="mobile-profile-title">
//               Advisor to the Board at Protecht
//             </h3>

//             <div class="mobile-profile-description">
//               <p className="colors">
//                 With over 20 years of experience, Bujar Demolli brings visionary
//                 insights and a strategic mindset to his role as Advisor to the
//                 Board at Protecht.
//               </p>
//               <p className="colors">
//                 Renowned for his expertise in technology-driven initiatives,
//                 Bujar has a deep understanding of the DACH region and a proven
//                 track record in B2B markets. His focus on transformative
//                 technology and business innovation has been instrumental in
//                 building long-lasting partnerships and driving growth across
//                 markets.
//               </p>
//               <p className="colors">
//                 As an advisor, Bujar plays a key role in guiding Protecht’s
//                 expansion, ensuring the company remains at the forefront of
//                 digital transformation and value-driven strategies for its
//                 clients.
//               </p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         // Desktop view
//         <div>
//           <div className="profile-wrapper">
//             {/* Main container */}
//             <div className="profile-container">
//               {/* Left column container */}
//               <div className="profile-image-container">
//                 <img src={Muhamer} alt="Profile" className="profile-image" />
//               </div>
//               <div className="blue-overlay">
//                 {/* Name container */}

//                 <div className="name-box">
//                   <h2 className="profile-name">Muhamer Nuridini</h2>
//                 </div>
//               </div>
//               {/* Right column container */}
//               <div className="profile-content-container">
//                 <div className="profile-content-container1">
//                   <div className="profile-content-container2"> </div>
//                 </div>
//                 {/* Content container */}
//                 <div className="profile-content">
//                   {/* Title */}
//                   <h3 className="profile-title">CEO</h3>

//                   {/* Text sections */}
//                   <div className="profile-description">
//                     <div className="section">
//                       <p className="colors">
//                         As Founder and CEO of Protecht, Muhamer Nuridini leads
//                         with 16+ years of expertise in IT, software development,
//                         and system administration.
//                       </p>
//                     </div>
//                     <div className="section">
//                       <p className="colors">
//                         He drives Protecht's mission to empower businesses
//                         through digital transformation with solutions in Custom
//                         Applications, Blockchain, AI, Cloud, Fintech, and ICT
//                         Consulting.
//                       </p>
//                     </div>
//                     <div className="section">
//                       <p className="colors">
//                         Focused on delivering tailored strategies, Muhamer
//                         fosters long-term client partnerships built on trust and
//                         innovation, providing the tools and insights necessary
//                         for sustained growth and digital excellence.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="profile-wrapper" style={{ marginTop: "40px" }}>
//             {/* Main container */}
//             <div style={{ marginBottom: "50px" }} className="profile-container">
//               {/* Left column container */}
//               <div className="profile-image-container">
//                 <img src={Bujar} alt="Profile" className="profile-image" />
//               </div>
//               <div className="blue-overlay">
//                 {/* Name container */}

//                 <div className="name-box">
//                   <h2 className="profile-name">Bujar Demolli</h2>
//                 </div>
//               </div>
//               {/* Right column container */}
//               <div className="profile-content-container">
//                 <div className="profile-content-container1">
//                   <div className="profile-content-container2"> </div>
//                 </div>
//                 {/* Content container */}
//                 <div className="profile-content">
//                   {/* Title */}
//                   <h3 className="profile-title">
//                     Advisor to the Board at Protecht
//                   </h3>

//                   {/* Text sections */}
//                   <div className="profile-description">
//                     <div className="section">
//                       <p className="colors">
//                         With over 20 years of experience, Bujar Demolli brings
//                         visionary insights and a strategic mindset to his role
//                         as Advisor to the Board at Protecht.
//                       </p>
//                     </div>
//                     <div className="section">
//                       <p className="colors">
//                         Renowned for his expertise in technology-driven
//                         initiatives, Bujar has a deep understanding of the DACH
//                         region and a proven track record in B2B markets. His
//                         focus on transformative technology and business
//                         innovation has been instrumental in building
//                         long-lasting partnerships and driving growth across
//                         markets.
//                       </p>
//                     </div>
//                     <div className="section">
//                       <p className="colors">
//                         As an advisor, Bujar plays a key role in guiding
//                         Protecht’s expansion, ensuring the company remains at
//                         the forefront of digital transformation and value-driven
//                         strategies for its clients.
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default About;
