import React from "react";
import "../styles_css/Home.css"; // Add your CSS file here
import { useTranslation } from "react-i18next";
import simcard from "../images/simcard.png";
import keyboard from "../images/keyboard.png";
import code from "../images/code.png";
import data2 from "../images/data-2.png";
import programmingArrows from "../images/programming-arrows.png";
import mobileProgramming from "../images/mobile-programming.png";

const solutionIcons = {
  "custom-application": simcard,
  "blockchain-development": keyboard,
  "ai-cloud-solutions": code,
  "ai-cloud-infrastructure": data2,
  "cloud-solution-hosting": data2,
  fintech: programmingArrows,
  "erp-sap": mobileProgramming,
  "it-support": code,
};

const Solutions = () => {
  const { t } = useTranslation();
  const solutions = Object.values(t("solutions", { returnObjects: true }));

  return (
    <div className="solutions-grid">
      {solutions.map((solution, index) => (
        <div key={index} className="solution-item">
          <img
            src={solutionIcons[solution.id]}
            alt={solution.title}
            className="solution-icon"
          />
          <p className="custom-heading">{solution.title}</p>
          <p className="paragraph">
            {solution.description.map((part, i) =>
              typeof part === "string" ? (
                part
              ) : (
                <span key={i} style={{ color: part.color }}>
                  {part.text}
                </span>
              )
            )}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Solutions;
