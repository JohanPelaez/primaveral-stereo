import React from 'react';
import { Facebook, Instagram, MessageCircle, Mic, Heart, Radio, Sparkles } from 'lucide-react';
import TikTokIcon from '../components/common/TikTokIcon';
import '../assets/styles/SpeakersView.css';

const SpeakersView = () => {
  const speakers = [
    {
      name: 'Luis Guillermo Yepes Duque',
      role: 'Productor Multimedia, Locutor y Animador de Eventos',
      origin: 'Gómez Plata, Antioquia • +9 Años de Experiencia',
      icon: <Mic size={20} className="icon-orange" />,
      bioParagraphs: [
        'Productor multimedia, locutor, animador de eventos y maestro de ceremonias, con más de nueve años de experiencia en medios de comunicación, formación que complementa su trayectoria y fortalece su trabajo en la creación de contenidos y la comunicación audiovisual.',
        'Oriundo de Gómez Plata, Antioquia, ha dedicado su trayectoria a la radio con pasión, compromiso y cercanía con la comunidad. En Primaveral Stereo 104.4 FM se destaca por transmitir alegría, optimismo y buena música, haciendo de cada emisión un espacio de compañía e información para los oyentes.',
        'A lo largo de su carrera ha realizado producción radial y periodística, cuñas comerciales, perifoneo, radionovelas y cubrimientos especiales, además de conducir eventos públicos y privados en diferentes municipios del Norte antioqueño.'
      ],
      specialties: [
        'Producción Radial',
        'Periodismo',
        'Cuñas Comerciales',
        'Perifoneo',
        'Radionovelas',
        'Eventos Especiales',
        'Maestro de Ceremonias'
      ],
      img: '/luis_yepes.jpg',
      objectPosition: '40% 15%',
      socials: { 
        fb: 'https://www.facebook.com/luisguillermo.yepesduque?mibextid=wwXIfr', 
        ig: 'https://www.instagram.com/luis_guiller_duque?igsh=MTRvZzI2aGZ0bWk4aA%3D%3D&utm_source=qr', 
        tt: 'https://www.tiktok.com/@luisguiller31'
      }
    },
    {
      name: 'Lili Santamaría',
      role: 'Locutora y Comunicadora',
      origin: 'Voz Romántica y Compañía Familiar',
      icon: <Heart size={20} className="icon-red" />,
      quote: 'Me gusta la radio porque es el puente de conexión entre el locutor y los oyentes, es sentirse acompañado e informado por medio de una frecuencia radial invisible que nos conecta para brindarnos compañía.',
      bioParagraphs: [
        'Soy una mujer amante de mi familia y la unión fraternal, que conserva la capacidad de asombro y se deja enamorar por los pequeños detalles, dándole prioridad a mis sentimientos y espiritualidad.',
        'Entre sus gustos destacan las caminatas ecológicas que permiten conectarse con la naturaleza, cocinar y compartir en familia, la música romántica y la fotografía. Cada transmisión es una oportunidad para entregar calidez, compañía y emoción a toda nuestra audiencia.'
      ],
      specialties: [
        'Música Romántica',
        'Caminatas Ecológicas',
        'Cocina Familiar',
        'Fotografía',
        'Espiritualidad y Naturaleza'
      ],
      img: '/lili_santamaria.jpg',
      objectPosition: '68% 12%',
      socials: { 
        ig: 'https://www.instagram.com/lisantamaria2?igsh=MTdlemQ2emdmd2c5Mw%3D%3D&wa_status_inline=true'
      }
    }
  ];

  return (
    <div className="speakers-view glass-panel">
      <div className="speakers-header">
        <h1 className="speakers-title">Nuestros Locutores</h1>
        <p className="speakers-subtitle">Las voces, el talento y el corazón detrás de la frecuencia 104.4 FM</p>
      </div>

      <div className="speakers-intro">
        <div className="intro-icon-box">
          <Radio size={32} />
        </div>
        <p>
          En <strong>Primaveral Stereo 104.4 FM – La que todos escuchan</strong>, nuestro equipo de locutores y comunicadores trabaja día a día para llevar entretenimiento, compañía, información veraz y la mejor selección musical a cada rincón del Norte y Nordeste antioqueño.
        </p>
      </div>

      {/* Grid of Profile Cards */}
      <div className="speakers-grid">
        {speakers.map((speaker, idx) => (
          <div key={idx} className="speaker-card">
            <div className="speaker-img-container">
              <img 
                src={speaker.img} 
                alt={speaker.name} 
                className="speaker-img" 
                style={{ objectPosition: speaker.objectPosition || 'center center' }}
              />
              <div className="speaker-overlay">
                <span className="speaker-show-tag">En Cabina</span>
              </div>
            </div>
            
            <div className="speaker-details">
              <div className="speaker-top-info">
                <div className="speaker-title-row">
                  <h2 className="speaker-name">{speaker.name}</h2>
                </div>
                <span className="speaker-role">{speaker.role}</span>
                <span className="speaker-origin-badge">{speaker.origin}</span>
              </div>

              {speaker.quote && (
                <div className="speaker-quote-box">
                  <p>"{speaker.quote}"</p>
                </div>
              )}

              <div className="speaker-bio-text">
                {speaker.bioParagraphs.map((paragraph, pIdx) => (
                  <p key={pIdx} className="speaker-bio-p">{paragraph}</p>
                ))}
              </div>
              
              <div className="speaker-shows">
                <strong>Especialidades y Gustos:</strong>
                <div className="shows-list">
                  {speaker.specialties.map((spec, sIdx) => (
                    <span key={sIdx} className="show-badge">{spec}</span>
                  ))}
                </div>
              </div>

              {/* Social networks - rendered dynamically */}
              <div className="speaker-socials">
                {speaker.socials.fb && (
                  <a href={speaker.socials.fb} target="_blank" rel="noopener noreferrer" className="social-icon fb" title="Facebook">
                    <Facebook size={16} />
                  </a>
                )}
                {speaker.socials.ig && (
                  <a href={speaker.socials.ig} target="_blank" rel="noopener noreferrer" className="social-icon ig" title="Instagram">
                    <Instagram size={16} />
                  </a>
                )}
                {speaker.socials.tt && (
                  <a href={speaker.socials.tt} target="_blank" rel="noopener noreferrer" className="social-icon tt" title="TikTok">
                    <TikTokIcon size={16} />
                  </a>
                )}
                {speaker.socials.wa && (
                  <a href={speaker.socials.wa} target="_blank" rel="noopener noreferrer" className="social-icon wa" title="WhatsApp">
                    <MessageCircle size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="speakers-footer-note">
        <Sparkles size={18} style={{ color: 'var(--color-orange)', flexShrink: 0 }} />
        <span>
          Nuestros locutores hacen de <strong>Primaveral Stereo 104.4 FM</strong> una radio cercana, viva y entregada a su gente los 365 días del año.
        </span>
      </div>
    </div>
  );
};

export default SpeakersView;
