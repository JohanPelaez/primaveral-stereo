import React from 'react';
import HeroPlayer from './HeroPlayer';
import { MessageSquare, ArrowRight } from 'lucide-react';
import '../../assets/styles/Hero.css';

const HERO_CONFIGS = {
  home: {
    tagline: 'LA VOZ QUE UNE A',
    title: 'GÓMEZ PLATA',
    slogan: 'con el Norte Antioqueño y el mundo',
    topics: ['INFORMACIÓN', 'MÚSICA', 'COMPAÑÍA'],
    badge: 'PARA TODOS',
    bgImage: '/gomez_plata.jpg',
    isHome: true
  },
  about: {
    tagline: 'NUESTRA EMISORA',
    title: '¿QUIÉNES SOMOS?',
    slogan: 'La historia y pasión detrás del micrófono',
    topics: ['HISTORIA', 'IDENTIDAD', 'COMPROMISO'],
    badge: 'SOBRE NOSOTROS',
    bgImage: '/booth_center.png',
    isHome: false
  },
  schedule: {
    tagline: 'PARRILLA DE PROGRAMACIÓN',
    title: 'NUESTRA PROGRAMACIÓN',
    slogan: 'Música, noticias y acompañamiento las 24 horas',
    topics: ['NOTICIAS', 'VARIEDAD', '24/7 EN VIVO'],
    badge: 'PARRILLA RADIAL',
    bgImage: '/carousel_lake.png',
    isHome: false
  },
  speakers: {
    tagline: 'VOCES DE PRIMAVERAL',
    title: 'NUESTROS LOCUTORES',
    slogan: 'Carisma, profesionalismo y la mejor energía en el dial',
    topics: ['ALEGRÍA', 'PROFESIONALISMO', 'COMPAÑÍA'],
    badge: 'EL EQUIPO',
    bgImage: '/locutores_mic.png',
    isHome: false
  },
  institutional: {
    tagline: 'AL SERVICIO DE LA COMUNIDAD',
    title: 'ESPACIOS INSTITUCIONALES',
    slogan: 'Informes de gestión, alcaldía y proyectos comunitarios',
    topics: ['TRANSPARENCIA', 'ALCALDÍA', 'DESARROLLO'],
    badge: 'INFORMACIÓN OFICIAL',
    bgImage: '/press_room.png',
    isHome: false
  }
};

const Hero = ({ view = 'home' }) => {
  const config = HERO_CONFIGS[view] || HERO_CONFIGS.home;

  return (
    <section 
      className={`hero-section ${!config.isHome ? 'hero-internal' : ''}`}
      style={{ backgroundImage: `url(${config.bgImage})` }}
    >
      {/* Background Image with Dark Overlay */}
      <div className="hero-background-overlay"></div>

      <div className="hero-container container">
        <div className="hero-grid">
          {/* Left Column: Heading and Brand Info */}
          <div className="hero-text-content">
            <span className="hero-tagline">{config.tagline}</span>
            <h1 className="hero-main-title">{config.title}</h1>
            <span className="hero-slogan-cursive">{config.slogan}</span>
            <div className="hero-topics">
              {config.topics.map((topic, idx) => (
                <React.Fragment key={topic}>
                  {idx > 0 && <span className="bullet">•</span>}
                  <span>{topic}</span>
                </React.Fragment>
              ))}
            </div>
            <div className="hero-badge-container">
              <span className="hero-pill-badge">{config.badge}</span>
            </div>
          </div>

          {/* Right Column: Empty space to let background image show on Desktop */}
          <div className="hero-visual-placeholder"></div>
        </div>

        {/* Player and WhatsApp Action Button (Only on Home) */}
        {config.isHome && (
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
        )}
      </div>
    </section>
  );
};

export default Hero;
