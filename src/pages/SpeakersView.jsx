import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';
import '../assets/styles/SpeakersView.css';

const SpeakersView = () => {
  const speakers = [
    {
      name: 'Don Gabriel',
      role: 'Director / Locutor de Mañanas Campesinas',
      shows: ['Mañanas Campesinas', 'Sabores del Campo'],
      bio: 'Con más de 15 años de trayectoria radial, Don Gabriel es el alma rural de nuestra emisora, llevando alegría y conectando el campo con el casco urbano.',
      img: '/booth_center.png', // Fallback placeholder
      socials: { fb: '#', ig: '#', wa: '#' }
    },
    {
      name: 'Dj Anderson',
      role: 'DJ Principal / Productor Técnico',
      shows: ['Mediodía Joven', 'El Top 20 Primaveral', 'Sábados de Fiesta'],
      bio: 'Apasionado por la tecnología y la música actual. Anderson mantiene a nuestra juventud al día con las mezclas y tendencias musicales más calientes.',
      img: '/hero_bg.png', // Fallback placeholder
      socials: { fb: '#', ig: '#', wa: '#' }
    },
    {
      name: 'Adriana Ortiz',
      role: 'Locutora / Acompañamiento Social',
      shows: ['Tardes para Adultos', 'Domingos en Familia'],
      bio: 'La voz romántica y dulce de la tarde. Adriana nos acompaña con poesía, reflexiones y baladas que tocan las fibras más sensibles de tu corazón.',
      img: '/locutores_mic.png', // Fallback placeholder
      socials: { fb: '#', ig: '#', wa: '#' }
    },
    {
      name: 'Carlos Mario',
      role: 'Locutor / Periodista de Noticias',
      shows: ['Amanecer Con Primaveral', 'Tarde de Parranda'],
      bio: 'Periodista innato y folclorista. Acompaña tus mañanas informando de manera clara y directa sobre el acontecer en Antioquia y el mundo.',
      img: '/press_room.png', // Fallback placeholder
      socials: { fb: '#', ig: '#', wa: '#' }
    }
  ];

  return (
    <div className="speakers-view glass-panel">
      <div className="speakers-header">
        <h1 className="speakers-title">Nuestros Locutores</h1>
        <p className="speakers-subtitle">Las voces y la alegría detrás del micrófono</p>
      </div>

      {/* Grid of Profile Cards */}
      <div className="speakers-grid">
        {speakers.map((speaker, idx) => (
          <div key={idx} className="speaker-card">
            <div className="speaker-img-container">
              <img src={speaker.img} alt={speaker.name} className="speaker-img" />
              <div className="speaker-overlay">
                <span className="speaker-show-tag">En Cabina</span>
              </div>
            </div>
            
            <div className="speaker-details">
              <h2 className="speaker-name">{speaker.name}</h2>
              <span className="speaker-role">{speaker.role}</span>
              <p className="speaker-bio">{speaker.bio}</p>
              
              <div className="speaker-shows">
                <strong>Programas:</strong>
                <div className="shows-list">
                  {speaker.shows.map((show, sIdx) => (
                    <span key={sIdx} className="show-badge">{show}</span>
                  ))}
                </div>
              </div>

              {/* Social networks */}
              <div className="speaker-socials">
                <a href={speaker.socials.fb} className="social-icon fb" title="Facebook"><Facebook size={16} /></a>
                <a href={speaker.socials.ig} className="social-icon ig" title="Instagram"><Instagram size={16} /></a>
                <a href={speaker.socials.wa} className="social-icon wa" title="WhatsApp"><MessageCircle size={16} /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeakersView;
