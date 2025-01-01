import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles_css/Testimonial.css";
import { useTranslation } from "react-i18next";
import BujarImage from "../images/bujar.png";
import YvonneImage from "../images/yvonne.png";
import ArberImage from "../images/arber.png";
import JulianRichter from "../images/JulianRichter.jpg";

const testimonialImages = {
  "CEO Dreilinden": BujarImage,
  "COO LFT": YvonneImage,
  "Chairman of the Board reYa": ArberImage,
  "Founder & Managing Wirk Partner": JulianRichter,
};

const Testimonials = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const testimonials = Object.values(
    t("testimonials", { returnObjects: true })
  );

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => {
      window.removeEventListener("resize", updateSlidesToShow);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < testimonials.length - slidesToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="container2">
      <div className="slider-header">
        <h2 className="slider-title">
          {t("testimonials.title.text1")}
          <span className="bluee"> {t("testimonials.title.text2")}</span>
        </h2>
        {/* <h2 className="slider-title">{t("testimonials.title")}</h2> */}
        <div className="button-group">
          <button
            onClick={handlePrev}
            className="navigation-button"
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="navigation-icon" />
          </button>
          <button
            onClick={handleNext}
            className="navigation-button"
            disabled={currentIndex >= testimonials.length - slidesToShow}
          >
            <ChevronRight className="navigation-icon" />
          </button>
        </div>
      </div>
      <div className="testimonial-wrapper">
        <div
          className="testimonial-grid"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {testimonials
            .filter((testimonial) => testimonial && testimonial.text) // Ensure no empty testimonials
            .map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card"
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <div className="testimonial-header">
                  <img
                    src={testimonialImages[testimonial.title]}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div>
                    <h3 className="testimonial-name">{testimonial.name}</h3>
                    <p className="testimonial-role">{testimonial.title}</p>
                  </div>
                </div>
                <p className="testimonial-quote">"{testimonial.text}"</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
