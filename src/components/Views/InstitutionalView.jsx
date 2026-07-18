import React from 'react';
import { Newspaper, Building, ShieldAlert, HeartPulse, Sparkles } from 'lucide-react';

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

      <style>{`
        .institutional-view {
          padding: 40px;
          margin-top: 24px;
          background: rgba(15, 23, 42, 0.6);
        }
        
        .inst-header {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 24px;
          margin-bottom: 32px;
          text-align: center;
        }
        
        .inst-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          color: white;
          margin-bottom: 8px;
        }
        
        .inst-subtitle {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--color-green);
        }
        
        .inst-intro {
          display: flex;
          align-items: center;
          gap: 20px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          padding: 20px;
          margin-bottom: 40px;
        }
        
        .intro-icon-box {
          color: var(--color-green);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .inst-intro p {
          font-family: var(--font-body);
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.6;
        }
        
        /* Grid */
        .inst-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        .inst-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: var(--transition-smooth);
        }
        
        .inst-card:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }
        
        .inst-card-header {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .inst-card-icon-container {
          width: 50px;
          height: 50px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .inst-card-title-group {
          display: flex;
          flex-direction: column;
        }
        
        .inst-card-title {
          font-family: var(--font-display);
          font-size: 1.25rem;
          color: white;
          line-height: 1.2;
        }
        
        .inst-card-agency {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--text-gray);
          margin-top: 2px;
        }
        
        .inst-card-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
          height: 100%;
        }
        
        .inst-card-time {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.8rem;
          color: var(--color-green);
          background: rgba(34, 163, 72, 0.1);
          padding: 3px 8px;
          border-radius: 4px;
          width: fit-content;
        }
        
        .inst-card-desc {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: #cbd5e1;
          line-height: 1.5;
          margin-top: 4px;
        }
        
        @media (max-width: 900px) {
          .inst-grid {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .institutional-view {
            padding: 24px;
          }
          
          .inst-intro {
            flex-direction: column;
            text-align: center;
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default InstitutionalView;
