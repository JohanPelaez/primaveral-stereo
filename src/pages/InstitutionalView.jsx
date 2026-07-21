import React from 'react';
import { Newspaper, Building, ShieldAlert, HeartPulse, Sparkles } from 'lucide-react';
import '../assets/styles/InstitutionalView.css';

const InstitutionalView = () => {
  const programs = [
    {
      title: 'Gómez Plata al Día',
      agency: 'Alcaldía Municipal',
      time: 'Lunes a Viernes, 12:00 M - 12:30 PM',
      icon: <Building size={24} className="icon-blue" />,
      desc: 'El informativo oficial de la administración municipal. Noticias sobre obras públicas, convocatorias, proyectos de desarrollo y rendición de cuentas.'
    },
    {
      title: 'La Voz del Campesino',
      agency: 'Umatas / Sector Agrario',
      time: 'Martes y Jueves, 06:00 AM - 06:30 AM',
      icon: <Sparkles size={24} className="icon-orange" />,
      desc: 'Boletín técnico para agricultores y ganaderos de nuestras veredas. Asesorías en cultivos, campañas de vacunación animal y precios de mercado.'
    },
    {
      title: 'Salud para Todos',
      agency: 'Hospital Gómez Plata',
      time: 'Miércoles, 08:00 AM - 08:30 AM',
      icon: <HeartPulse size={24} className="icon-red" />,
      desc: 'Consejos de salud preventiva, campañas de vacunación, horarios de atención y consultas de médicos especialistas en nuestro municipio.'
    },
    {
      title: 'Prevención y Seguridad',
      agency: 'Policía y Bomberos locales',
      time: 'Viernes, 08:00 AM - 08:30 AM',
      icon: <ShieldAlert size={24} className="icon-green" />,
      desc: 'Espacio educativo sobre normas de tránsito, convivencia ciudadana, prevención de desastres naturales y líneas de atención en emergencias.'
    }
  ];

  return (
    <div className="institutional-view glass-panel">
      <div className="inst-header">
        <h1 className="inst-title">Programas Institucionales</h1>
        <p className="inst-subtitle">Espacios públicos al servicio de nuestra comunidad</p>
      </div>

      <div className="inst-intro">
        <div className="intro-icon-box">
          <Newspaper size={32} />
        </div>
        <p>
          En **Primaveral Stereo**, estamos firmemente comprometidos con el progreso y bienestar de nuestro municipio. Por ello, cedemos y disponemos de espacios especiales dentro de nuestra programación diaria para que las diferentes instituciones públicas locales puedan comunicarse directamente con toda la ciudadanía de Gómez Plata.
        </p>
      </div>

      {/* Grid List */}
      <div className="inst-grid">
        {programs.map((prog, idx) => (
          <div key={idx} className="inst-card">
            <div className="inst-card-header">
              <div className="inst-card-icon-container">
                {prog.icon}
              </div>
              <div className="inst-card-title-group">
                <h3 className="inst-card-title">{prog.title}</h3>
                <span className="inst-card-agency">{prog.agency}</span>
              </div>
            </div>
            
            <div className="inst-card-body">
              <span className="inst-card-time">{prog.time}</span>
              <p className="inst-card-desc">{prog.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstitutionalView;
