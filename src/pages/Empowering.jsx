import React, { useEffect } from "react";
import "../styles_css/Services.css";
import "../styles_css/Empowering.css";
import Shadows from "../components/Shadows";

const Empowering = () => {
  // Use hash from URL for scrolling to specific sections
  useEffect(() => {
    const hash = window.location.hash; // Get hash from URL
    if (hash) {
      const element = document.querySelector(hash); // Find the element with the corresponding ID
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the element
      }
    }
  }, []);

  return (
    <div>
      <div className="hero">
        <Shadows />
        <h3 className="services-heading">Our Benefits</h3>
        <h1 className="main-heading">
          Our benefits cater to your convenience.
        </h1>
        <p className="subheading">
          Innovating without limits, empowering your vision
        </p>
      </div>

      {/* Section 1 */}
      <section
        id="discovering-smart-management"
        className="smart-management-container"
      >
        <div className="smart-management-left">
          <div className="icon-container">
            <img
              src={require("../images/empowering1.png")}
              alt="Gear Icon"
              className="smart-management-icon"
            />
          </div>
          <h2 className="smart-management-title">
            Discovering Smart Management
          </h2>
          <p className="smart-management-description">
            Stay on top of your tasks and stay informed about what's happening.
          </p>
        </div>
        <div
          className="smart-management-right"
          style={{
            backgroundImage: `url(${require("../images/ourbenefits1.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="content-box">
            <p>
              Empower your organization with advanced management tools designed
              to enhance visibility, control, and decision-making.
            </p>
            <p>
              Our smart management solutions keep you fully informed of key
              metrics and operational insights, allowing you to proactively
              address challenges before they arise.
            </p>
            <p>
              Stay in sync with all aspects of your business, optimize workflow
              efficiency, and improve strategic alignment across teams.
            </p>
            <p>
              Gain real-time insights across all projects, empowering you to
              make strategic, proactive decisions that fuel long-term success
              and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        id="customized-software-development"
        className="smart-management-container"
      >
        <div className="smart-management-left">
          <div className="icon-container">
            <img
              src={require("../images/empowering2.png")}
              alt="Custom Software Icon"
              className="smart-management-icon"
            />
          </div>
          <h2 className="smart-management-title">
            Customized Software Development
          </h2>
          <p className="smart-management-description">
            Custom software development is the process of conceptualizing,
            designing.
          </p>
        </div>
        <div
          className="smart-management-right"
          style={{
            backgroundImage: `url(${require("../images/ourbenefits2.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="content-box">
            <p>
              Experience the power of software that’s built precisely to meet
              your business needs.
            </p>
            <p>
              Our customized development services take you through a
              comprehensive process, from conceptualization to deployment,
              ensuring that every aspect of the solution aligns with your goals.
            </p>
            <p>
              With a deep focus on usability, scalability, and integration, we
              create applications that seamlessly blend into your existing
              infrastructure while enhancing your competitive edge.
            </p>
            <p>
              Whether you need to streamline operations, automate repetitive
              tasks, or support unique business functions, our tailored software
              adapts to grow with you.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        id="effortless-rapid-communication"
        className="smart-management-container"
      >
        <div className="smart-management-left">
          <div className="icon-container">
            <img
              src={require("../images/empowering3.png")}
              alt="Chat Icon"
              className="smart-management-icon"
            />
          </div>
          <h2 className="smart-management-title">
            Effortless Rapid Communication
          </h2>
          <p className="smart-management-description">
            Effortlessly manage your task lists and stay connected with
            real-time updates.
          </p>
        </div>
        <div
          className="smart-management-right"
          style={{
            backgroundImage: `url(${require("../images/ourbenefits3.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="content-box">
            <p>
              Enhance team productivity and keep everyone connected with our
              rapid communication tools.
            </p>
            <p>
              Designed to facilitate seamless interaction, our solutions ensure
              that essential information flows quickly across departments,
              minimizing delays and fostering real-time collaboration.
            </p>
            <p>
              Whether your teams are on-site or remote, they can stay aligned on
              tasks, updates, and projects without the hurdles of outdated
              communication systems.
            </p>
            <p>
              Keep projects moving forward efficiently, reduce miscommunication,
              and foster an environment where collaboration and transparency
              thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section
        style={{ paddingBottom: "80px" }}
        id="adaptive-capabilities"
        className="smart-management-container"
      >
        <div className="smart-management-left">
          <div className="icon-container">
            <img
              src={require("../images/empowering4.png")}
              alt="Clipboard Icon"
              className="smart-management-icon"
            />
          </div>
          <h2 className="smart-management-title">
            Stay Ahead with Adaptive Capabilities
          </h2>
          <p className="smart-management-description">
            Stay organized with your task lists and remain updated on the latest
            development.
          </p>
        </div>
        <div
          className="smart-management-right"
          style={{
            backgroundImage: `url(${require("../images/ourbenefits4.png")})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="content-box">
            <p>
              In a constantly evolving market, adaptability is key to staying
              competitive.
            </p>
            <p>
              Our adaptive solutions help your business stay agile, resilient,
              and prepared for industry shifts.
            </p>
            <p>
              With tools designed to support ongoing innovation and
              responsiveness, you can quickly pivot strategies, maintain
              alignment with market demands, and ensure operational continuity.
            </p>
            <p>
              By maintaining a proactive approach to organizational growth, we
              enable you to not only react to changes but also anticipate and
              leverage them to your advantage, keeping you one step ahead in
              your industry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Empowering;
