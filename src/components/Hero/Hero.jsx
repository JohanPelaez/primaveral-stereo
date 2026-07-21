import React from 'react';
import HeroPlayer from './HeroPlayer';
import { MessageSquare, ArrowRight } from 'lucide-react';
import '../../assets/styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image with Dark Overlay */}
      <div className="hero-background-overlay"></div>

      <div className="hero-container container">
        <div className="hero-grid">
          {/* Left Column: Heading and Brand Info */}
          <div className="hero-text-content">
            <span className="hero-tagline">LA VOZ QUE UNE A</span>
            <h1 className="hero-main-title">GÓMEZ PLATA</h1>
            <span className="hero-slogan-cursive">con el Norte Antioqueño y el mundo</span>
            <div className="hero-topics">
              <span>INFORMACIÓN</span>
              <span className="bullet">•</span>
              <span>MÚSICA</span>
              <span className="bullet">•</span>
              <span>COMPAÑÍA</span>
            </div>
            <div className="hero-badge-container">
              <span className="hero-pill-badge">PARA TODOS</span>
            </div>
          </div>

          {/* Right Column: Empty space to let the background microphone show on Desktop */}
          <div className="hero-visual-placeholder"></div>
        </div>

        {/* Player and WhatsApp Action Button */}
        <div className="hero-actions-container">
          <HeroPlayer />

          <a
            href="https://wa.me/573201234567?text=Hola%20Primaveral%20Stereo!%20Un%20saludo..."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp-hero"
            id="hero_whatsapp_btn"
          >
            <MessageSquare size={18} fill="white" />
            <span>ESCRÍBENOS POR WHATSAPP</span>
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
