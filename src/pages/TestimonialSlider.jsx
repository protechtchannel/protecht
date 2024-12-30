import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles_css/Testimonial.css";
import BujarImage from "../images/bujar.png";
import YvonneImage from "../images/yvonne.png";
import ArberImage from "../images/arber.png";

const testimonials = [
  {
    id: 1,
    name: "Bujar Demolli",
    role: "CEO",
    company: "Dreilinden",
    image: BujarImage,
    quote:
      "Protecht has been a key partner in our digital transformation journey. Their expertise ensures our security and keeps us resilient in the fast-evolving digital landscape. With Protecht, we're prepared to face the challenges of today's digital world.",
  },
  {
    id: 2,
    name: "Yvonne Lang",
    role: "COO",
    company: "LFT",
    image: YvonneImage,
    quote:
      "The programming and IT security implemented by Protecht have significantly enhanced our daily operations. Thanks to their expertise, we've been upgraded to state-of-the-art technology, which has been a profound success in our work and overall journey.",
  },
  {
    id: 3,
    name: "Arber Arifi",
    role: "Chairman of the Board",
    company: "reYa",
    image: ArberImage,
    quote:
      "Protecht's expertise in AI and Cloud has been pivotal in transforming our datacenter into a green, AI-driven powerhouse. Their skills and dedication have been key to the success of our reYa cloud and AI datacenter, enabling us to meet the evolving challenges of modern technology.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length); // Start at the first real slide
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Duplicate the slides for seamless looping
  const clonedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const slideWidth = 100 / testimonials.length;

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);

    if (currentIndex >= testimonials.length * 2) {
      // Reset to the first real set of slides without animation
      setCurrentIndex(testimonials.length);
    } else if (currentIndex < testimonials.length) {
      // Reset to the last real set of slides without animation
      setCurrentIndex(testimonials.length * 2 - 1);
    }
  };

  return (
    <div className="container2">
      <div className="slider-header">
        <h2 className="slider-title">
          Hear from our <span className="title-highlight">customers</span>
        </h2>
        <div className="button-group">
          <button onClick={handlePrev} className="navigation-button">
            <ChevronLeft className="navigation-icon" />
          </button>
          <button onClick={handleNext} className="navigation-button">
            <ChevronRight className="navigation-icon" />
          </button>
        </div>
      </div>

      <div className="testimonial-wrapper">
        <div
          className="testimonial-grid"
          style={{
            transform: `translateX(-${currentIndex * slideWidth}%)`,
            transition: isTransitioning ? "transform 0.5s ease" : "none", // Disable transition on reset
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {clonedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div>
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-role">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
