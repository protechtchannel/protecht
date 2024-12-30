import React, { useState, useRef, useEffect } from "react";
import "../styles_css/Carousel.css";

const ImageCarousel = ({ images }) => {
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Duplicate images for infinite scrolling
  const infiniteImages = Array(5).fill(images).flat();

  useEffect(() => {
    const carousel = carouselRef.current;

    const handleScroll = () => {
      const totalScrollWidth = carousel.scrollWidth;
      const visibleWidth = carousel.offsetWidth;
      const segmentScrollWidth = totalScrollWidth / 5;

      if (carousel.scrollLeft >= totalScrollWidth - visibleWidth) {
        carousel.scrollLeft = carousel.scrollLeft - segmentScrollWidth;
      }

      if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = carousel.scrollLeft + segmentScrollWidth;
      }
    };

    carousel.addEventListener("scroll", handleScroll);

    carousel.scrollLeft = carousel.scrollWidth / 5;

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const preventDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <div className="parent-carousel">
      <div className="carousel-header">
        Empowering Businesses Across Industries
      </div>
      <div
        className="carousel"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {infiniteImages.map((item, index) => (
          <div className="carousel-item" key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onDragStart={preventDragStart}
            >
              <img
                src={item.src}
                alt={`Slide ${index}`}
                draggable="false"
                onDragStart={preventDragStart}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
