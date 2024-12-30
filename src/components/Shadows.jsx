import React from "react";
import shadow1 from "../images/shadow1.png";
import shadow2 from "../images/shadow2.png";
import shadow3 from "../images/shadow3.png";
import "../styles_css/Shadows.css";

const Shadows = () => {
  return (
    <>
      <img
        src={shadow1}
        alt="Shadow 1"
        className="blue-shadow1"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60%",
          zindex: -1,
        }}
      />

      <img
        src={shadow2}
        alt="Shadow 2"
        className="blue-shadow2"
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "15%",
          width: "50%",
          zindex: -1,
        }}
      />

      <img
        src={shadow3}
        alt="Shadow 3"
        className="blue-shadow3"
        style={{
          position: "absolute",
          top: "-10%",
          right: "-10%",
          width: "50%",
          zindex: -1,
        }}
      />
    </>
  );
};

export default Shadows;
