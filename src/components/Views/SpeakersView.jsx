import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

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

      <style>{`
        .speakers-view {
          padding: 40px;
          margin-top: 24px;
          background: rgba(15, 23, 42, 0.6);
        }
        
        .speakers-header {
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 24px;
          margin-bottom: 32px;
          text-align: center;
          transition: var(--transition-smooth);
        }
        
        .speakers-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          color: var(--text-white);
          margin-bottom: 8px;
          transition: var(--transition-smooth);
        }
        
        .speakers-subtitle {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--color-orange);
        }
        
        /* Grid */
        .speakers-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }
        
        .speaker-card {
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 20px;
          transition: var(--transition-smooth);
        }
        
        .speaker-card:hover {
          transform: translateY(-4px);
          background: var(--bg-glass-heavy);
          border-color: var(--border-glass);
          box-shadow: var(--shadow-premium);
        }
        
        .speaker-img-container {
          height: 100%;
          min-height: 250px;
          position: relative;
          overflow: hidden;
        }
        
        .speaker-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .speaker-card:hover .speaker-img {
          transform: scale(1.05);
        }
        
        .speaker-overlay {
          position: absolute;
          top: 10px;
          left: 10px;
        }
        
        .speaker-show-tag {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.65rem;
          color: white;
          background: var(--color-red);
          padding: 3px 8px;
          border-radius: 4px;
          letter-spacing: 0.5px;
          box-shadow: 0 2px 6px rgba(214, 26, 33, 0.4);
        }
        
        .speaker-details {
          padding: 20px 20px 20px 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 12px;
        }
        
        .speaker-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.4rem;
          color: var(--text-white);
          line-height: 1.2;
          transition: var(--transition-smooth);
        }
        
        .speaker-role {
          font-family: var(--font-display);
          font-size: 0.85rem;
          color: var(--color-orange);
          font-weight: 600;
        }
        
        .speaker-bio {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--text-gray);
          line-height: 1.5;
          transition: var(--transition-smooth);
        }
        
        .speaker-shows {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .speaker-shows strong {
          font-size: 0.8rem;
          color: var(--text-white);
          transition: var(--transition-smooth);
        }
        
        .shows-list {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        
        .show-badge {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.7rem;
          color: var(--text-gray);
          background: var(--bg-glass-heavy);
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid var(--border-glass);
          transition: var(--transition-smooth);
        }
        
        /* Socials */
        .speaker-socials {
          display: flex;
          gap: 10px;
          margin-top: 6px;
        }
        
        .social-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-gray);
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          transition: var(--transition-smooth);
        }
        
        .social-icon:hover {
          color: white;
          transform: translateY(-2px);
        }
        
        .social-icon.fb:hover { background-color: #1877f2; border-color: transparent; }
        .social-icon.ig:hover { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); border-color: transparent; }
        .social-icon.wa:hover { background-color: #25d366; border-color: transparent; }
        
        @media (max-width: 992px) {
          .speakers-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 580px) {
          .speaker-card {
            grid-template-columns: 1fr;
          }
          
          .speaker-img-container {
            height: 180px;
            min-height: auto;
          }
          
          .speaker-details {
            padding: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default SpeakersView;
