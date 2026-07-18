import React from 'react';
import Carousel from '../Carousel/Carousel';
import { Heart, MapPin, ChevronRight, Calendar, Building, Radio } from 'lucide-react';

const HomeView = ({ setCurrentView }) => {
  const scrollToCarousel = () => {
    const el = document.getElementById('carousel_section_title');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-view">
      {/* 3-Column Top Cards */}
      <div className="top-grid">
        {/* Card 1: Nuestra Radio */}
        <div className="info-card glass-panel border-blue">
          <div className="card-header">
            <div className="circle-icon bg-blue">
              <Heart size={20} fill="white" color="white" />
            </div>
            <h2 className="card-title text-blue">NUESTRA RADIO</h2>
          </div>
          <p className="card-text">
            24/7 al servicio de nuestra gente. Una señal que informa, entretiene y acompaña a todas las edades en nuestras veredas y el campo.
          </p>
          <button 
            onClick={() => setCurrentView('about')} 
            className="card-action-btn bg-red-btn"
            id="card_btn_about"
          >
            <span>CONÓCENOS MÁS</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Center Card: Studio Image */}
        <div className="booth-img-container glass-panel">
          <img src="/booth_center.png" alt="Estudio de radio Primaveral Stereo" className="booth-img" />
        </div>

        {/* Card 2: Desde Gomez Plata */}
        <div className="info-card glass-panel border-green">
          <div className="card-header">
            <div className="circle-icon bg-green">
              <MapPin size={20} fill="white" color="white" />
            </div>
            <h2 className="card-title text-green">DESDE GÓMEZ PLATA PARA EL MUNDO</h2>
          </div>
          <p className="card-text">
            Orgullosos de nuestras raíces, comprometidos con nuestra comunidad y llevando nuestra señal con amor y alegría a cada rincón del planeta.
          </p>
          <button 
            onClick={scrollToCarousel} 
            className="card-action-btn bg-green-btn"
            id="card_btn_gallery"
          >
            <span>VER GALERÍA</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* 3-Column Middle Widgets */}
      <div className="middle-grid">
        {/* Widget 1: Nuestra Programación */}
        <div className="widget-card glass-panel">
          <div className="widget-header">
            <Calendar size={18} className="icon-blue" />
            <h3>NUESTRA PROGRAMACIÓN</h3>
          </div>
          
          <div className="schedule-list">
            <div className="schedule-item">
              <div className="schedule-time bg-green-badge">07:00 AM - 12:00 M</div>
              <div className="schedule-info">
                <h4>Mañanas Campesinas</h4>
                <p>Música tropical, vallenato y lo mejor para nuestras veredas y el campo.</p>
              </div>
            </div>

            <div className="schedule-item">
              <div className="schedule-time bg-blue-badge">12:00 M - 03:00 PM</div>
              <div className="schedule-info">
                <h4>Mediodía Joven</h4>
                <p>Reggaetón, música urbana y los éxitos que marcan tendencia.</p>
              </div>
            </div>

            <div className="schedule-item">
              <div className="schedule-time bg-red-badge">03:00 PM - 07:00 PM</div>
              <div className="schedule-info">
                <h4>Tardes para Adultos</h4>
                <p>Baladas, música romántica y los clásicos que nunca pasan de moda.</p>
              </div>
            </div>
          </div>

          <p className="widget-footer-text" onClick={() => setCurrentView('schedule')}>
            Y mucho más programación 24/7 para ti. Ver completa
          </p>
        </div>

        {/* Widget 2: Programas Institucionales */}
        <div className="widget-card glass-panel">
          <div className="widget-header">
            <Building size={18} className="icon-green" />
            <h3>PROGRAMAS INSTITUCIONALES</h3>
          </div>
          
          <div className="widget-img-container">
            <img src="/press_room.png" alt="Reunión institucional" className="widget-img" />
          </div>

          <p className="widget-card-desc">
            Espacios dedicados a informar sobre la gestión, proyectos y actividades de nuestras instituciones, la alcaldía y el desarrollo de nuestra comunidad.
          </p>

          <button 
            onClick={() => setCurrentView('institutional')} 
            className="widget-action-btn bg-green-btn-filled"
            id="widget_btn_institutional"
          >
            <span>CONOCE MÁS</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Widget 3: Nuestros Locutores */}
        <div className="widget-card glass-panel">
          <div className="widget-header">
            <Radio size={18} className="icon-orange" />
            <h3>NUESTROS LOCUTORES</h3>
          </div>

          <div className="widget-img-container">
            <img src="/locutores_mic.png" alt="Micrófono locutores" className="widget-img" />
          </div>

          <p className="widget-card-desc">
            Voces profesionales y carismáticas que te acompañan cada día con profesionalismo, alegría y pasión por hacer de la radio tu mejor compañía.
          </p>

          <button 
            onClick={() => setCurrentView('speakers')} 
            className="widget-action-btn bg-red-btn-filled"
            id="widget_btn_speakers"
          >
            <span>CONÓCELOS</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel-section-container">
        <h2 className="section-heading-title" id="carousel_section_title">
          CONOCE NUESTRO MUNICIPIO: GÓMEZ PLATA
        </h2>
        <Carousel />
      </div>

      <style>{`
        .home-view {
          display: flex;
          flex-direction: column;
          gap: 40px;
          margin-top: 24px;
        }
        
        /* 3-Column Top Cards Grid */
        .top-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
          align-items: stretch;
        }
        
        .info-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 12px;
          background: rgba(15, 23, 42, 0.55);
        }
        
        .info-card.border-blue {
          border-top: 4px solid var(--color-blue);
        }
        
        .info-card.border-green {
          border-top: 4px solid var(--color-green);
        }
        
        .card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }
        
        .circle-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .circle-icon.bg-blue { background-color: var(--color-blue); }
        .circle-icon.bg-green { background-color: var(--color-green); }
        
        .card-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.1rem;
          line-height: 1.2;
        }
        
        .card-title.text-blue { color: #38bdf8; }
        .card-title.text-green { color: #4ade80; }
        
        .card-text {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: #cbd5e1;
          margin-bottom: 24px;
          line-height: 1.6;
        }
        
        .card-action-btn {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 18px;
          border-radius: 4px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.85rem;
          color: white;
          width: fit-content;
          transition: var(--transition-smooth);
        }
        
        .card-action-btn.bg-red-btn {
          background-color: var(--color-red);
          box-shadow: 0 4px 10px rgba(214, 26, 33, 0.3);
        }
        
        .card-action-btn.bg-red-btn:hover {
          background-color: #df2229;
          transform: translateX(3px);
          box-shadow: 0 4px 15px rgba(214, 26, 33, 0.5);
        }
        
        .card-action-btn.bg-green-btn {
          background-color: var(--color-green);
          box-shadow: 0 4px 10px rgba(34, 163, 72, 0.3);
        }
        
        .card-action-btn.bg-green-btn:hover {
          background-color: #1e8e3e;
          transform: translateX(3px);
          box-shadow: 0 4px 15px rgba(34, 163, 72, 0.5);
        }
        
        /* Center Studio Image Card */
        .booth-img-container {
          border-radius: 12px;
          overflow: hidden;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .booth-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .booth-img-container:hover .booth-img {
          transform: scale(1.03);
        }
        
        /* 3-Column Middle Widgets Grid */
        .middle-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 24px;
        }
        
        .widget-card {
          padding: 20px;
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          background: rgba(15, 23, 42, 0.45);
        }
        
        .widget-header {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 10px;
        }
        
        .widget-header h3 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.05rem;
          letter-spacing: 0.5px;
        }
        
        .icon-blue { color: #38bdf8; }
        .icon-green { color: #4ade80; }
        .icon-orange { color: var(--color-orange); }
        
        /* Schedule Widget Details */
        .schedule-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .schedule-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .schedule-time {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.75rem;
          padding: 3px 8px;
          border-radius: 4px;
          width: fit-content;
          color: white;
        }
        
        .bg-green-badge { background-color: var(--color-green); }
        .bg-blue-badge { background-color: var(--color-blue); }
        .bg-red-badge { background-color: var(--color-red); }
        
        .schedule-info h4 {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.95rem;
          color: white;
        }
        
        .schedule-info p {
          font-family: var(--font-body);
          font-size: 0.8rem;
          color: #94a3b8;
        }
        
        .widget-footer-text {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.85rem;
          color: #38bdf8;
          text-align: center;
          margin-top: auto;
          padding-top: 16px;
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        
        .widget-footer-text:hover {
          color: #7dd3fc;
          text-decoration: underline;
        }
        
        /* Widget Images & Media */
        .widget-img-container {
          border-radius: 8px;
          overflow: hidden;
          width: 100%;
          height: 140px;
          margin-bottom: 14px;
        }
        
        .widget-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .widget-card-desc {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: #cbd5e1;
          line-height: 1.5;
          margin-bottom: 16px;
        }
        
        .widget-action-btn {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 4px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.8rem;
          color: white;
          width: 100%;
          transition: var(--transition-smooth);
        }
        
        .widget-action-btn.bg-green-btn-filled {
          background-color: var(--color-green);
          box-shadow: 0 4px 8px rgba(34, 163, 72, 0.25);
        }
        
        .widget-action-btn.bg-green-btn-filled:hover {
          background-color: #1e8e3e;
          transform: translateY(-1px);
        }
        
        .widget-action-btn.bg-red-btn-filled {
          background-color: var(--color-red);
          box-shadow: 0 4px 8px rgba(214, 26, 33, 0.25);
        }
        
        .widget-action-btn.bg-red-btn-filled:hover {
          background-color: #df2229;
          transform: translateY(-1px);
        }
        
        /* Carousel section styling */
        .carousel-section-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .section-heading-title {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.3rem;
          letter-spacing: 1px;
          color: white;
          border-left: 4px solid var(--color-red);
          padding-left: 12px;
          margin-bottom: 8px;
        }
        
        /* Responsive break points */
        @media (max-width: 992px) {
          .top-grid {
            grid-template-columns: 1fr;
          }
          
          .booth-img-container {
            height: 250px;
            order: -1; /* Place image at top on mobile */
          }
          
          .middle-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default HomeView;
