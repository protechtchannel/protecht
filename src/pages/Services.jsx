import React, { useEffect } from "react";
import "../styles_css/Services.css";
import rightarrow from "../images/rightarrow.png";
import { useLocation } from "react-router-dom";
import Shadows from "../components/Shadows";
const Services = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div>
      <div className="hero">
        <Shadows />
        <h3 className="services-heading">Services</h3>
        <h1 className="main-heading">
          Your Creative Journey Starts Here. Our Comprehensive Services
        </h1>
        <p className="subheading">
          Where Potential Meets Possibility: Cultivating Growth Through
          Innovative Solutions
        </p>
        <a href="/contact" className="cta-button">
          <span className="button-text">Get Started</span>
          <span className="button-icon">
            <img src={rightarrow} alt="Arrow Icon" />
          </span>
        </a>
      </div>

      <div id="custom-application" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>01</h1>

            <div className="services-text">
              <h2>Custom Made Application</h2>
            </div>
          </div>
          <p className="description">
            Our custom applications are meticulously designed to align with your
            unique business needs and objectives. By working closely with you,
            our dedicated team ensures every detail is tailored to enhance
            functionality, efficiency, and user experience. We leverage
            industry-leading technology and development practices to bring your
            vision to life with precision and uncompromising quality.
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services1.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services1.1.png")})`,
            }}
          ></div>
        </div>
      </div>
      {/* Blockchain Development */}
      <div id="blockchain-development" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>02</h1>
            <div className="services-text">
              <h2>Blockchain Development</h2>
            </div>
          </div>
          <p className="description">
            Empower your business with tailored blockchain solutions that
            deliver unparalleled security, transparency, and operational
            efficiency. Our blockchain applications are designed to foster trust
            and enhance agility across various industries, from finance and
            supply chain to healthcare and logistics. By implementing
            decentralized technology, we enable secure transactions, streamlined
            processes, and real-time data sharing that redefine how you conduct
            business in the digital age.
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services2.png")})`,
            }}
          ></div>
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services2.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* AI Cloud Solutions */}
      <div className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>03</h1>
            <div className="services-text">
              <h2>AI Cloud Solutions</h2>
            </div>
          </div>
          <p id="ai-cloud-solutions" className="description">
            Unlock the potential of AI-driven cloud solutions to transform your
            business. Our intelligent cloud infrastructure automates complex
            processes, extracts actionable insights from vast data, and enhances
            decision-making capabilities. Designed to scale with your needs, our
            AI cloud solutions empower you to make smarter, data-driven
            decisions, optimize performance, and drive impactful results across
            all facets of your organization.
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services3.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services3.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* AI Cloud Infrastructure */}
      <div id="ai-cloud-infrastructure" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>04</h1>
            <div className="services-text">
              <h2>AI Cloud Infrastructure</h2>
            </div>
          </div>
          <p className="description">
            Leverage high-performance AI cloud infrastructure powered by
            GPU-accelerated computing to unlock advanced machine learning and
            deep learning capabilities. Our infrastructure combines scalable
            cloud resources with cutting-edge GPUs, optimized for handling large
            datasets, training complex models, and supporting real-time AI
            workloads. Designed for computational efficiency, it empowers
            businesses to run resource-intensive AI applications seamlessly,
            enabling faster processing speeds, enhanced data analytics, and
            accelerated model deployment.
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services4.jpg")})`,
            }}
          ></div>
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services4.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Cloud Solution and Hosting */}
      <div id="cloud-solution-hosting" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>05</h1>
            <div className="services-text">
              <h2>Cloud Solution and Hosting</h2>
            </div>
          </div>
          <p className="description">
            Ensure a resilient and optimized IT infrastructure with our
            comprehensive network and system administration services. Our team
            provides proactive monitoring, rapid issue resolution, and
            continuous performance tuning to keep your operations running
            seamlessly. From configuring secure networks to maintaining system
            stability, we work to minimize disruptions, enhance reliability, and
            support your business’s evolving needs, ensuring your IT environment
            is robust, efficient, and secure
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services5.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services5.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Fintech */}
      <div id="fintech" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>06</h1>
            <div className="services-text">
              <h2>Fintech</h2>
            </div>
          </div>
          <p className="description">
            Drive innovation in finance with cutting-edge fintech solutions
            designed to optimize operational efficiency, enhance security, and
            ensure regulatory compliance. Our expertise in financial technology
            empowers your business to deliver seamless digital experiences,
            process transactions securely, and manage data with precision. With
            scalable and robust software tailored for the fast-evolving
            financial sector, we help you stay competitive, adapt to industry
            shifts, and meet customer demands with confidence.”
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services6.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services6.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* ERP / SAP */}
      <div id="erp-sap" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>07</h1>
            <div className="services-text">
              <h2>SAP/ERP</h2>
            </div>
          </div>
          <p className="description">
            Revolutionize your organization with ERP solutions that prioritize
            SAP but extend to a variety of platforms, providing a robust
            foundation for enterprise-wide integration and efficiency. Our
            offerings leverage SAP’s comprehensive capabilities—from finance and
            supply chain to human resources—while supporting other ERP systems
            to ensure seamless data flow and process automation across
            departments. Designed to enhance transparency, our ERP solutions
            empower businesses with real-time analytics, enabling leaders to
            make data-driven decisions and adapt swiftly to market demands.
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services7.png")})`,
            }}
          ></div>
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services7.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* IT Support */}
      <div id="it-support" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>08</h1>
            <div className="services-text">
              <h2>IT Support</h2>
            </div>
          </div>
          <p className="description">
            Our IT support services are dedicated to maintaining a stable,
            secure, and resilient IT infrastructure that supports your business
            goals. From rapid troubleshooting and proactive monitoring to
            comprehensive maintenance, we ensure your systems operate at peak
            performance with minimal downtime. Our team works closely with you
            to identify and address potential issues before they impact
            productivity, empowering your business with reliable and responsive
            IT support that adapts to evolving needs
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services8.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services8.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Network and System Administration */}
      <div id="network-system-administration" className="services-section">
        <div className="services-content">
          <div className="services-number">
            <h1>09</h1>
            <div className="services-text">
              <h2>Network and System Administration</h2>
            </div>
          </div>
          <p className="description">
            Ensure a resilient and optimized IT infrastructure with our
            comprehensive network and system administration services. Our team
            provides proactive monitoring, rapid issue resolution, and
            continuous performance tuning to keep your operations running
            seamlessly. From configuring secure networks to maintaining system
            stability, we work to minimize disruptions, enhance reliability, and
            support your business’s evolving needs, ensuring your IT environment
            is robust, efficient, and secure
          </p>
        </div>
        <div className="services-images">
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services9.png")})`,
            }}
          ></div>
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services9.1.png")})`,
            }}
          ></div>
        </div>
      </div>

      {/* Consulting */}
      <div className="services-section" style={{ marginBottom: "80px" }}>
        <div className="services-content">
          <div className="services-number">
            <h1>10</h1>
            <div className="services-text">
              <h2>Consulting</h2>
            </div>
          </div>
          <p className="description">
            Our IT consulting services empower your business to leverage
            emerging technologies for competitive advantage. We provide expert
            guidance on cloud solutions, AI integration, cybersecurity, and
            digital transformation strategies tailored to your unique needs. By
            identifying technology-driven growth opportunities and implementing
            scalable solutions, we help you optimize operations, enhance
            security, and stay ahead in a rapidly evolving digital landscape.
          </p>
        </div>
        <div className="services-images" id="consulting">
          <div
            className="services-image-container1"
            style={{
              backgroundImage: `url(${require("../images/services10.1.png")})`,
            }}
          ></div>
          <div
            className="services-image-container2"
            style={{
              backgroundImage: `url(${require("../images/services10.png")})`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
