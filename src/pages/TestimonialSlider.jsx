import "../styles_css/Testimonial.css";
import { useTranslation } from "react-i18next";
import BujarImage from "../images/bujar.png";
import YvonneImage from "../images/yvonne.png";
import ArberImage from "../images/arber.png";
import JulianRichter from "../images/JulianRichter.jpg";
import l from "../images/l.svg";
import r from "../images/r.svg";
import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define testimonials data with translation keys
const Testimonials = () => {
  const { t } = useTranslation();

  const TestimonialsData = [
    {
      name: t("testimonials.testimonial_1.name"),
      title: t("testimonials.testimonial_1.title"),
      text: t("testimonials.testimonial_1.text"),
      image: BujarImage,
    },
    {
      name: t("testimonials.testimonial_2.name"),
      title: t("testimonials.testimonial_2.title"),
      text: t("testimonials.testimonial_2.text"),
      image: YvonneImage,
    },
    {
      name: t("testimonials.testimonial_3.name"),
      title: t("testimonials.testimonial_3.title"),
      text: t("testimonials.testimonial_3.text"),
      image: ArberImage,
    },
    {
      name: t("testimonials.testimonial_4.name"),
      title: t("testimonials.testimonial_4.title"),
      text: t("testimonials.testimonial_4.text"),
      image: JulianRichter,
    },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div style={{ backgroundColor: "#f8f8f8", paddingTop: "40px" }}>
      <div className="carousel-container">
        <div className="carousel-header-top">
          <h2 className="slider-title">
            {t("testimonials.title.text1")}{" "}
            <span className="bluee">{t("testimonials.title.text2")}</span>
          </h2>
          <div className="button-group">
            <button
              className="carousel-button"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <img className="arrows" src={l}></img>
            </button>
            <button
              className="carousel-button"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <img className="arrows" src={r}></img>
            </button>
          </div>
        </div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {TestimonialsData.map((testimonial, index) => (
              <div key={index} className="embla__slide">
                <div className="card1">
                  <div className="testimonial-header">
                    <img
                      src={testimonial.image}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
