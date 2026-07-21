import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../assets/styles/Carousel.css';

const Carousel = () => {
  const images = [
    {
      src: '/carousel_church.png',
      alt: 'Iglesia de Gómez Plata, Antioquia'
    },
    {
      src: '/carousel_park.png',
      alt: 'Parque principal de Gómez Plata, Antioquia'
    },
    {
      src: '/carousel_lake.png',
      alt: 'Represa Troneras en Gómez Plata, Antioquia'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="scenic-carousel" id="carousel_container">
      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="carousel-arrow left" aria-label="Anterior" id="carousel_prev">
        <ChevronLeft size={24} />
      </button>

      {/* Center Active Slide with Backdrop */}
      <div className="carousel-track-wrapper">
        <div 
          className="carousel-track" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div key={idx} className="carousel-slide">
              <img src={img.src} alt={img.alt} className="carousel-img" />
              <div className="carousel-caption">
                <span className="caption-text">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={nextSlide} className="carousel-arrow right" aria-label="Siguiente" id="carousel_next">
        <ChevronRight size={24} />
      </button>

      {/* Dots navigation */}
      <div className="carousel-dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`carousel-dot ${currentIndex === idx ? 'active' : ''}`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
