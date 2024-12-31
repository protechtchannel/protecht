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
import simcard from "../images/simcard.png";
import keyboard from "../images/keyboard.png";
import code from "../images/code.png";
import data2 from "../images/data-2.png";
import programmingArrows from "../images/programming-arrows.png";
import mobileProgramming from "../images/mobile-programming.png";
import { useTranslation } from "react-i18next";
import i18n from "../languageConfig"; // Adjust the path based on your file structure

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

  // Solutions Data
  // const solutions = [
  //   {
  //     id: "custom-application",
  //     titleKey: "home.solutions.customApplication.title",
  //     descriptionKey: "home.solutions.customApplication.description",
  //     img: simcard,
  //   },
  //   {
  //     id: "blockchain-development",
  //     titleKey: "home.solutions.blockchainDevelopment.title",
  //     descriptionKey: "home.solutions.blockchainDevelopment.description",
  //     img: keyboard,
  //   },
  //   {
  //     id: "ai-cloud-solutions",
  //     titleKey: "home.solutions.aiCloudSolutions.title",
  //     descriptionKey: "home.solutions.aiCloudSolutions.description",
  //     img: code,
  //   },
  //   {
  //     id: "ai-cloud-infrastructure",
  //     titleKey: "home.solutions.aiCloudInfrastructure.title",
  //     descriptionKey: "home.solutions.aiCloudInfrastructure.description",
  //     img: data2,
  //   },
  //   {
  //     id: "cloud-solution-hosting",
  //     titleKey: "home.solutions.cloudSolutionHosting.title",
  //     descriptionKey: "home.solutions.cloudSolutionHosting.description",
  //     img: data2,
  //   },
  //   {
  //     id: "fintech",
  //     titleKey: "home.solutions.fintech.title",
  //     descriptionKey: "home.solutions.fintech.description",
  //     img: programmingArrows,
  //   },
  //   {
  //     id: "erp-sap",
  //     titleKey: "home.solutions.erpSap.title",
  //     descriptionKey: "home.solutions.erpSap.description",
  //     img: mobileProgramming,
  //   },
  //   {
  //     id: "it-support",
  //     titleKey: "home.solutions.itSupport.title",
  //     descriptionKey: "home.solutions.itSupport.description",
  //     img: code,
  //   },
  // ];
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
            <a href="/contact" className="cta-button">
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
          <a href="/contact" className="cta-button2">
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
        <h1 class="black-white">{t("home.endlessSolutionsTitle")}</h1>
        <p class="endless-text">{t("home.endlessSolutionsDescription")}</p>
      </section>
      <div className="solutions-section">
        <div className="solutions-grid">
          {/* Custom Made Application */}
          <div
            className="solution-item"
            data-target="custom-application"
            onClick={() => handleRedirect("custom-application")}
          >
            <img
              src={require("../images/simcard.png")}
              alt="Custom Made Application"
              className="solution-icon"
            />
            <p className="custom-heading">{t("home.customApplicationAlt")}</p>
            <p className="paragraph">
              Build your vision into a{" "}
              <span style={{ color: "#0088ea" }}>
                powerful, tailored application
              </span>{" "}
              with our expert team,
              <span style={{ color: "#0088ea" }}>
                {" "}
                aligned precisely with your goals
              </span>{" "}
              for excellence at every step.
            </p>
          </div>

          {/* Blockchain Development */}
          <div
            className="solution-item"
            data-target="blockchain-development"
            onClick={() => handleRedirect("blockchain-development")}
          >
            <img
              src={require("../images/keyboard.png")}
              alt="Blockchain Development"
              className="solution-icon"
            />
            <p className="custom-heading">
              {t("home.solutions.blockchainDevelopment.title")}
            </p>
            <p className="paragraph">
              Custom blockchain applications{" "}
              <span style={{ color: "#0088ea" }}>enhance</span> security,
              transparency, and efficiency in processes like finance and supply
              chain.
            </p>
          </div>

          {/* AI Cloud Solutions */}
          <div
            className="solution-item"
            data-target="ai-cloud-solutions"
            onClick={() => handleRedirect("ai-cloud-solutions")}
          >
            <img
              src={require("../images/code.png")}
              alt="AI Cloud Solutions"
              className="solution-icon"
            />
            <p className="custom-heading">
              {" "}
              {t("home.solutions.aiCloudInfrastructure.title")}
            </p>
            <p className="paragraph">
              AI-powered cloud solutions{" "}
              <span style={{ color: "#0088ea" }}>automate</span> processes,{" "}
              <span style={{ color: "#0088ea" }}>optimize</span> data analysis,
              and <span style={{ color: "#0088ea" }}>improve</span>{" "}
              decision-making with scalable infrastructure.
            </p>
          </div>

          {/* AI Cloud Infrastructure */}
          <div
            className="solution-item"
            data-target="ai-cloud-infrastructure"
            onClick={() => handleRedirect("ai-cloud-infrastructure")}
          >
            <img
              src={require("../images/data-2.png")}
              alt="AI Cloud Infrastructure"
              className="solution-icon"
            />
            <p className="custom-heading">
              {" "}
              {t("home.solutions.aiCloudInfrastructure.title")}e
            </p>
            <p className="paragraph">
              Cloud hosting provides{" "}
              <span style={{ color: "#0088ea" }}>scalable</span>,{" "}
              <span style={{ color: "#0088ea" }}>secure</span> environments for
              businesses to store data and run applications remotely.
            </p>
          </div>

          {/* Cloud Solution and Hosting */}
          <div
            className="solution-item"
            data-target="cloud-solution-hosting"
            onClick={() => handleRedirect("cloud-solution-hosting")}
          >
            <img
              src={require("../images/data-2.png")}
              alt="Cloud Solution and Hosting"
              className="solution-icon"
            />
            <p className="custom-heading">
              {" "}
              {t("home.solutions.cloudSolutionHosting.title")}
            </p>
            <p className="paragraph">
              Empower your business with{" "}
              <span style={{ color: "#0088ea" }}>
                scalable, secure cloud solutions
              </span>{" "}
              for seamless data storage and management, ensuring{" "}
              <span style={{ color: "#0088ea" }}>
                reliability and flexibility
              </span>{" "}
              for growth.
            </p>
          </div>

          {/* Fintech */}
          <div
            className="solution-item"
            data-target="fintech"
            onClick={() => handleRedirect("fintech")}
          >
            <img
              src={require("../images/programming-arrows.png")}
              alt="Fintech"
              className="solution-icon"
            />
            <p className="custom-heading">
              {" "}
              {t("home.solutions.fintech.title")}
            </p>
            <p className="paragraph">
              Enhance{" "}
              <span style={{ color: "#0088ea" }}>financial operations</span>{" "}
              with optimized performance and extended{" "}
              <span style={{ color: "#0088ea" }}>software longevity</span>,
              supported by{" "}
              <span style={{ color: "#0088ea" }}>
                top-tier technical expertise
              </span>
              .
            </p>
          </div>

          {/* ERP / SAP */}
          <div
            className="solution-item"
            data-target="erp-sap"
            onClick={() => handleRedirect("erp-sap")}
          >
            <img
              src={require("../images/mobile-programming.png")}
              alt="ERP / SAP"
              className="solution-icon"
            />
            <p className="custom-heading">
              {" "}
              {t("home.solutions.erpSap.title")}
            </p>
            <p className="paragraph">
              Optimize operations with a focus on SAP ERP solutions to achieve{" "}
              <span style={{ color: "#0088ea" }}>streamlined workflows</span>,{" "}
              <span style={{ color: "#0088ea" }}>resource efficiency</span>, and{" "}
              <span style={{ color: "#0088ea" }}>
                data-driven decision-making
              </span>{" "}
              through advanced automation and real-time insights.
            </p>
          </div>

          {/* IT Support */}
          <div
            className="solution-item"
            data-target="it-support"
            onClick={() => handleRedirect("it-support")}
          >
            <img
              src={require("../images/code.png")}
              alt="IT Support"
              className="solution-icon"
            />
            <p className="custom-heading">
              {" "}
              {t("home.solutions.itSupport.title")}
            </p>
            <p className="paragraph">
              Our IT support troubleshoots and maintains your infrastructure,{" "}
              <span style={{ color: "#0088ea" }}>
                keeping your systems always up and running
              </span>
              .
            </p>
          </div>
        </div>
      </div>
      {/* <div className="solutions-section">
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="solution-item"
              data-target={solution.id}
              onClick={() => handleRedirect(solution.id)}
            >
              <img
                src={solution.img}
                alt={t(solution.titleKey)}
                className="solution-icon"
              />
              <p className="custom-heading">{t(solution.titleKey)}</p>
              <p className="paragraph">{t(solution.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </div> */}

      <StabilitySection />
      <OurWork />
      <WhyChooseUs />
      <Carousel images={images} />
      <Testimonials />
    </div>
  );
};

export default Home;
