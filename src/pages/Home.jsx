import React from "react";
import "../styles_css/Home.css";
import StabilitySection from "./StabilitySection";
import OurWork from "./OurWork";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./TestimonialSlider";
import Carousel from "./ImageCarousel";
import { images } from "./carouselData";
import Shadows from "../components/Shadows";
import { useNavigate } from "react-router-dom";
import rightarrow from "../images/right-arrow.svg";
import rightarrow2 from "../images/rightarrow.png";
import codershub from "../images/codershub.png";
import dreilinden from "../images/dreilinden.png";
import btronic from "../images/btronic.png";
import reya from "../images/reya.png";
import coop from "../images/coop.png";
import kwe from "../images/kwe.png";
import ds from "../images/ds.png";
import wirkt from "../images/wirkt.png";
import { useTranslation } from "react-i18next";
import i18n from "../languageConfig"; // Adjust the path based on your file structure
import Solutions from "./Solutions";

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Logo Data
  const logos = [
    {
      href: "https://codershubeu.com/",
      img: codershub,
      altKey: "home.logos.coderhub",
    },
    {
      href: "https://www.dreilindenag.ch/",
      img: dreilinden,
      altKey: "home.logos.dreilinden",
    },
    {
      href: "https://www.bdtronic.com/en-en/",
      img: btronic,
      altKey: "home.logos.bdtronic",
    },
    { href: "https://reya.cloud/", img: reya, altKey: "home.logos.reya" },
    { href: "https://www.coop.ch/en/", img: coop, altKey: "home.logos.coop" },
    { href: "https://k-we.com/", img: kwe, altKey: "home.logos.kwe" },
    { href: "https://dsconnect.app/", img: ds, altKey: "home.logos.dsconnect" },
    { href: "https://wirkt.eu/", img: wirkt, altKey: "home.logos.wirkt" },
  ];

  const switchLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleRedirect = (section) => {
    navigate(`/services#${section}`);
  };

  return (
    <div>
      <div className="hero-section">
        <Shadows />
        <div className="hero-grid">
          <div className="hero-left">
            <img
              style={{ width: "350px" }}
              src={require("../images/revo.png")}
              alt={t("home.revolutionaryTechAlt")}
              className="revolutionary-img"
            />
            <h1 className="main-heading2">
              {t("home.elevateBusiness")} <br />
              <h1 className="highlight2">{t("home.businessHighlight")}</h1>
            </h1>
          </div>
          <div className="hero-right">
            <p className="hero-description">{t("home.heroDescription")}</p>
            <a
              onClick={() => {
                console.log(`Redirecting to: /contact`);
                navigate("/contact");
              }}
              className="cta-button"
            >
              <span className="button-text">{t("home.getStarted")}</span>
              <span className="button-icon">
                <img src={rightarrow2} alt={t("home.arrowIconAlt")} />
              </span>
            </a>
          </div>
        </div>
        <div className="logo-section">
          <p className="partner-text">{t("home.partnerText")}</p>
          <div className="logos-grid">
            {logos.map((logo, index) => (
              <a
                key={index}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logo.img}
                  alt={t(logo.altKey)}
                  className={`logo${index + 1}`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="empowering-section">
        <div className="empowering-content">
          <p className="black-white">{t("home.empoweringTitle")}</p>
          <p className="paragraph we">{t("home.empoweringDescription")}</p>
          <a
            className="cta-button2"
            onClick={() => {
              navigate("/contact");
            }}
          >
            <span
              className="button-text"
              style={{ fontSize: "16px", fontWeight: "500" }}
            >
              {t("home.learnMore")}
            </span>
            <span className="button-icon">
              <img src={rightarrow} alt="Arrow Icon" />
            </span>
          </a>
        </div>
      </div>

      <section class="endless-solutions">
        <h1 class="black-white endless">{t("home.endlessSolutionsTitle")}</h1>
        <p class="endless-text">{t("home.endlessSolutionsDescription")}</p>
      </section>
      <div className="solutions-section"></div>
      <Solutions />

      <StabilitySection />
      <OurWork />
      <WhyChooseUs />
      <Carousel images={images} />
      <Testimonials />
    </div>
  );
};

export default Home;
