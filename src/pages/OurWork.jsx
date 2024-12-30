import React from "react";
import "../styles_css/OurWork.css";

import rightarrow from "../images/right-arrow.svg";
const OurWork = () => {
  return (
    <div>
      <section class="endless-solutions">
        <h1 class="black-white4">Our Work</h1>
        <p class="endless-text">
          Our offerings encompass services that serve as startup mentoring or
          include consulting, contributing to the enhanced value proposition of
          your business.
        </p>
        <a href="/contact" className="cta-button2">
          <span
            className="button-text"
            style={{ fontSize: "16px", fontWeight: "500" }}
          >
            View Work
          </span>
          <span className="button-icon">
            <img src={rightarrow} alt="Arrow Icon" />
          </span>
        </a>
      </section>

      <div className="work">
        <div className="services-grid">
          <div className="services-grid1">
            <div className="service-item one">
              <div className="service-content1">
                <div className="ai">
                  {" "}
                  <p>AI Cloud Solutions</p>
                </div>

                <div className="wrap">
                  <div className="cont">
                    <div className="cont1">
                      <p>Protecht</p>
                      <img
                        src={require("../images/2024.png")}
                        alt="Protecht Logo"
                        className="company-logo"
                      />
                    </div>
                    <div className="cont2">
                      <p className="gradient">
                        reYa.cloud | Supported by Protecht.ch
                      </p>
                      <div className="cont3">
                        <div className="gradient-small">See projects</div>
                        <div className="arrow-icon"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-item two">
              <div className="service-content1">
                <div className="ai">
                  {" "}
                  <p>Blockchain</p>
                </div>

                <div className="conttwo">
                  <div className="cont1">
                    <p>Protecht</p>
                    <img
                      src={require("../images/2024.png")}
                      alt="Protecht Logo"
                      className="company-logo"
                    />
                  </div>
                  <div className="cont2">
                    <p className="gradient small2">
                      DApp and Wallet Development for Blockchain Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="services-grid1">
            <div className="service-item three">
              <div className="service-content1">
                <div className="ai">
                  {" "}
                  <p>IT Suport and Solutions</p>
                </div>

                <div className="conttwo">
                  <div className="cont1">
                    <p>Protecht</p>
                    <img
                      src={require("../images/2024.png")}
                      alt="Protecht Logo"
                      className="company-logo"
                    />
                  </div>
                  <div className="cont2">
                    <p className="gradient small2">
                      Optimizing operations with reliable IT services
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="service-item four">
              <div className="service-content1">
                <div className="ai">
                  {" "}
                  <p>Custom Made Web Applications</p>
                </div>

                <div className="wrap">
                  <div className="cont">
                    <div className="cont1">
                      <p>Protecht</p>
                      <img
                        src={require("../images/2024.png")}
                        alt="Protecht Logo"
                        className="company-logo"
                      />
                    </div>
                    <div className="cont2">
                      <p className="gradient ">
                        Bdtronic | Custom-Made CRM System Developed by
                        Protecht.ch
                      </p>
                      <div className="cont3">
                        <div className="gradient small">See projects</div>
                        <div className="arrow-icon"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
