import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

      <style>{`
        .scenic-carousel {
          position: relative;
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: var(--shadow-premium);
          border: 1px solid rgba(255, 255, 255, 0.05);
          background-color: var(--bg-dark-slate);
        }
        
        .carousel-track-wrapper {
          overflow: hidden;
          width: 100%;
          height: 380px;
        }
        
        .carousel-track {
          display: flex;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          width: 100%;
          height: 100%;
        }
        
        .carousel-slide {
          min-width: 100%;
          width: 100%;
          height: 100%;
          position: relative;
        }
        
        .carousel-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .carousel-slide:hover .carousel-img {
          transform: scale(1.03);
        }
        
        .carousel-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
          padding: 24px;
          display: flex;
          align-items: flex-end;
          height: 120px;
        }
        
        .caption-text {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 1.1rem;
          color: white;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        /* Navigation Arrows */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.75);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 5;
          backdrop-filter: blur(4px);
          transition: var(--transition-smooth);
        }
        
        .carousel-arrow:hover {
          background: var(--color-red);
          border-color: transparent;
          color: white;
          box-shadow: 0 4px 15px rgba(214, 26, 33, 0.4);
        }
        
        .carousel-arrow.left {
          left: 16px;
        }
        
        .carousel-arrow.right {
          right: 16px;
        }
        
        /* Dots Navigation */
        .carousel-dots {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 5;
        }
        
        .carousel-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.4);
          transition: var(--transition-smooth);
        }
        
        .carousel-dot.active {
          background-color: var(--color-red);
          transform: scale(1.3);
          box-shadow: 0 0 6px var(--color-red);
        }
        
        @media (max-width: 768px) {
          .carousel-track-wrapper {
            height: 250px;
          }
          
          .caption-text {
            font-size: 0.95rem;
          }
          
          .carousel-arrow {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </div>
  );
};

export default Carousel;
