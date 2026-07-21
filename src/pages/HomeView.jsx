import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import InfoCard from '../components/Home/InfoCard';
import WidgetCard from '../components/Home/WidgetCard';
import { Heart, MapPin, Calendar, Building, Radio, ChevronRight } from 'lucide-react';
import '../assets/styles/HomeView.css';

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
        <InfoCard
          icon={<Heart size={20} fill="white" color="white" />}
          iconBgClass="bg-blue"
          title="NUESTRA RADIO"
          titleColorClass="text-blue"
          text="24/7 al servicio de nuestra gente. Una señal que informa, entretiene y acompaña a todas las edades en nuestras veredas y el campo."
          btnText="CONÓCENOS MÁS"
          btnBgClass="bg-red-btn"
          btnId="card_btn_about"
          onBtnClick={() => setCurrentView('about')}
          borderClass="border-blue"
        />

        {/* Center Card: Studio Image */}
        <div className="booth-img-container glass-panel">
          <img src="/booth_center.png" alt="Estudio de radio Primaveral Stereo" className="booth-img" />
        </div>

        {/* Card 2: Desde Gomez Plata */}
        <InfoCard
          icon={<MapPin size={20} fill="white" color="white" />}
          iconBgClass="bg-green"
          title="DESDE GÓMEZ PLATA PARA EL MUNDO"
          titleColorClass="text-green"
          text="Orgullosos de nuestras raíces, comprometidos con nuestra comunidad y llevando nuestra señal con amor y alegría a cada rincón del planeta."
          btnText="VER GALERÍA"
          btnBgClass="bg-green-btn"
          btnId="card_btn_gallery"
          onBtnClick={scrollToCarousel}
          borderClass="border-green"
        />
      </div>

      {/* 3-Column Middle Widgets */}
      <div className="middle-grid">
        {/* Widget 1: Nuestra Programación */}
        <WidgetCard title="NUESTRA PROGRAMACIÓN" icon={<Calendar size={18} className="icon-blue" />}>
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
        </WidgetCard>

        {/* Widget 2: Programas Institucionales */}
        <WidgetCard title="PROGRAMAS INSTITUCIONALES" icon={<Building size={18} className="icon-green" />}>
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
        </WidgetCard>

        {/* Widget 3: Nuestros Locutores */}
        <WidgetCard title="NUESTROS LOCUTORES" icon={<Radio size={18} className="icon-orange" />}>
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
        </WidgetCard>
      </div>

      {/* Carousel Section */}
      <div className="carousel-section-container">
        <h2 className="section-heading-title" id="carousel_section_title">
          CONOCE NUESTRO MUNICIPIO: GÓMEZ PLATA
        </h2>
        <Carousel />
      </div>
    </div>
  );
};

export default HomeView;
