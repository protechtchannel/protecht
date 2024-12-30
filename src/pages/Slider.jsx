import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Bujar Demolli",
    position: "CEO Dreilinden",
    text: "Protecht has been a key partner in our digital transformation journey. Their expertise ensures our security and keeps us resilient in the fast-evolving digital landscape. With Protecht, we're prepared to face the challenges of today’s digital world.",
    image: "bujar.jpg",
  },
  {
    name: "Yvonne Lang",
    position: "COO LFT",
    text: "The programming and IT security implemented by Protecht have significantly enhanced our daily operations. Thanks to their expertise, we’ve been upgraded to state-of-the-art technology, which has been a profound success in our work and overall journey.",
    image: "yvonne.jpg",
  },
  {
    name: "Arber Arifi",
    position: "Chairman of the Board, reYa",
    text: "Protecht’s expertise in AI and Cloud has been pivotal in transforming our datacenter into a green, AI-driven powerhouse. Their skills and dedication have been key to the success of our reYa cloud and AI datacenter.",
    image: "arber.jpg",
  },
];

// CustomArrow component
const CustomArrow = ({ className, style, onClick, direction }) => (
  <div
    className={className}
    style={{
      ...style,
      display: "block",
      position: "absolute",
      top: "-50px", // Place above the slider
      [direction === "left" ? "left" : "right"]: "10px",
      zIndex: 2,
    }}
    onClick={onClick}
  />
);

const SliderApp = () => {
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: Show 3 cards
    slidesToScroll: 1,
    prevArrow: <CustomArrow direction="left" />,
    nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", position: "relative" }}>
      <h2 style={{ textAlign: "center" }}>
        Hear from our <span className="customers"> customers</span>
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#007bff",
                color: "#fff",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                style={{ borderRadius: "50%", width: "80px", height: "80px" }}
              />
              <h3 style={{ margin: "10px 0" }}>{testimonial.name}</h3>
              <p style={{ fontStyle: "italic", textAlign: "center" }}>
                {testimonial.position}
              </p>
              <p style={{ textAlign: "center" }}>{testimonial.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderApp;
