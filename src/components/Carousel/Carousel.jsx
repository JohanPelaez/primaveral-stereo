import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../../assets/styles/Carousel.css';

const Carousel = () => {
  const images = [
    {
      src: '/carousel_church.png',
      alt: 'Plaza principal y Templo Parroquial de Gómez Plata'
    },
    {
      src: '/carousel_park.png',
      alt: 'Monumento en el Parque Principal de Gómez Plata'
    },
    {
      src: '/gomez_plata.jpg',
      alt: 'Panorámica de la calle tradicional con flores y templo'
    },
    {
      src: '/booth_center.png',
      alt: 'Cabina de locución e instalaciones de Primaveral Stereo 104.4 FM'
    },
    {
      src: '/locutores_mic.png',
      alt: 'Consola principal de sonido y micrófonos Shure'
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
