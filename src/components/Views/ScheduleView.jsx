import React, { useState } from 'react';
import { Calendar, Clock, Music, Info } from 'lucide-react';

const ScheduleView = () => {
  const [activeTab, setActiveTab] = useState('weekday');

  const scheduleData = {
    weekday: [
      { time: '05:00 AM - 07:00 AM', name: 'Amanecer Con Primaveral', host: 'Carlos Mario', genre: 'Música popular y campesina', desc: 'Despierta con la mejor energía, el café caliente y las noticias del campo.' },
      { time: '07:00 AM - 12:00 M', name: 'Mañanas Campesinas', host: 'Don Gabriel', genre: 'Tropical, Vallenato y Popular', desc: 'Acompañamos a nuestros labriegos en su jornada diaria con música, saludos y recados veredales.' },
      { time: '12:00 M - 03:00 PM', name: 'Mediodía Joven', host: 'Dj Anderson', genre: 'Urbano, Reggaetón y Pop', desc: 'El ritmo de la juventud de Gómez Plata con los éxitos mundiales.' },
      { time: '03:00 PM - 07:00 PM', name: 'Tardes para Adultos', host: 'Adriana Ortiz', genre: 'Romántica, Baladas y Clásicos', desc: 'Un viaje al recuerdo con las canciones que marcaron tu vida.' },
      { time: '07:00 PM - 10:00 PM', name: 'La Ruta Nocturna', host: 'Juan Pablo', genre: 'Música de Cantina y Variada', desc: 'La mejor compañía para cerrar el día con alegría.' }
    ],
    saturday: [
      { time: '06:00 AM - 10:00 AM', name: 'Sabores del Campo', host: 'Gabriel Arango', genre: 'Folclor y Tradición', desc: 'Un programa especial dedicado a resaltar las tradiciones de Gómez Plata.' },
      { time: '10:00 AM - 02:00 PM', name: 'El Top 20 Primaveral', host: 'Dj Anderson', genre: 'Éxitos del momento', desc: 'El conteo oficial de las 20 canciones más pedidas de la semana.' },
      { time: '02:00 PM - 07:00 PM', name: 'Tarde de Parranda', host: 'Carlos Mario', genre: 'Parrandera y Tropical', desc: 'Calentando motores para el fin de semana con los mejores ritmos bailables.' },
      { time: '07:00 PM - 02:00 AM', name: 'Sábados de Fiesta', host: 'Dj en Vivo', genre: 'Crossover / Mezclas', desc: 'La fiesta oficial del Norte Antioqueño, mezclas y saludos en vivo.' }
    ],
    sunday: [
      { time: '07:00 AM - 09:00 AM', name: 'Música y Fe', host: 'Transmisión Especial', genre: 'Especial Espiritual', desc: 'Acompañamiento espiritual y transmisión de la Santa Misa dominical.' },
      { time: '09:00 AM - 01:00 PM', name: 'Domingos en Familia', host: 'Adriana Ortiz', genre: 'Música del recuerdo y boleros', desc: 'La banda sonora para el almuerzo y descanso familiar dominical.' },
      { time: '01:00 PM - 06:00 PM', name: 'Deporte e Información', host: 'Equipo de Deportes', genre: 'Transmisiones / Deportes', desc: 'Cubrimiento de los eventos deportivos locales, regionales y nacionales.' },
      { time: '06:00 PM - 10:00 PM', name: 'Retropop', host: 'Juan Pablo', genre: 'Clásicos 80s y 90s', desc: 'Lo mejor del rock y pop en español e inglés para cerrar el fin de semana.' }
    ]
  };

  return (
    <div className="schedule-view glass-panel">
      <div className="schedule-header">
        <h1 className="schedule-title">Nuestra Programación</h1>
        <p className="schedule-subtitle">La mejor compañía las 24 horas del día</p>
      </div>

      {/* Tabs */}
      <div className="schedule-tabs">
        <button 
          onClick={() => setActiveTab('weekday')} 
          className={`tab-btn ${activeTab === 'weekday' ? 'active-tab-red' : ''}`}
        >
          Lunes a Viernes
        </button>
        <button 
          onClick={() => setActiveTab('saturday')} 
          className={`tab-btn ${activeTab === 'saturday' ? 'active-tab-blue' : ''}`}
        >
          Sábados
        </button>
        <button 
          onClick={() => setActiveTab('sunday')} 
          className={`tab-btn ${activeTab === 'sunday' ? 'active-tab-green' : ''}`}
        >
          Domingos
        </button>
      </div>

      {/* Schedule list */}
      <div className="schedule-timeline">
        {scheduleData[activeTab].map((item, idx) => (
          <div key={idx} className="timeline-card">
            <div className="time-badge">
              <Clock size={16} />
              <span>{item.time}</span>
            </div>
            
            <div className="show-details">
              <h2 className="show-name">{item.name}</h2>
              <div className="show-meta">
                <span className="show-host">Locutor: {item.host}</span>
                <span className="show-meta-dot">•</span>
                <span className="show-genre">Género: {item.genre}</span>
              </div>
              <p className="show-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="schedule-footer-note">
        <Info size={16} />
        <span>Toda nuestra programación musical e informativa continúa en piloto automático durante las horas de la madrugada.</span>
      </div>

      <style>{`
        .schedule-view {
          padding: 40px;
          margin-top: 24px;
          background: rgba(15, 23, 42, 0.6);
        }
        
        .schedule-header {
          border-bottom: 1px solid var(--border-glass);
          padding-bottom: 24px;
          margin-bottom: 32px;
          text-align: center;
          transition: var(--transition-smooth);
        }
        
        .schedule-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          color: var(--text-white);
          margin-bottom: 8px;
          transition: var(--transition-smooth);
        }
        
        .schedule-subtitle {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--color-blue);
        }
        
        /* Tabs styles */
        .schedule-tabs {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 40px;
        }
        
        .tab-btn {
          padding: 12px 28px;
          border-radius: 8px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-gray);
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          transition: var(--transition-smooth);
        }
        
        .tab-btn:hover {
          color: var(--text-white);
          background: var(--bg-glass-heavy);
          border-color: var(--border-glass);
        }
        
        .tab-btn.active-tab-red {
          background-color: var(--color-red);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(214, 26, 33, 0.4);
        }
        
        .tab-btn.active-tab-blue {
          background-color: var(--color-blue);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(0, 71, 160, 0.4);
        }
        
        .tab-btn.active-tab-green {
          background-color: var(--color-green);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(34, 163, 72, 0.4);
        }
        
        /* Timeline */
        .schedule-timeline {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .timeline-card {
          display: grid;
          grid-template-columns: 220px 1fr;
          background: var(--bg-glass);
          border: 1px solid var(--border-glass);
          border-radius: 8px;
          padding: 24px;
          align-items: center;
          gap: 24px;
          transition: var(--transition-smooth);
        }
        
        .timeline-card:hover {
          transform: translateY(-2px);
          background: var(--bg-glass-heavy);
          border-color: var(--border-glass);
        }
        
        .time-badge {
          background: var(--bg-glass-heavy);
          color: var(--text-white);
          padding: 8px 16px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.9rem;
          border: 1px solid var(--border-glass);
          width: fit-content;
          transition: var(--transition-smooth);
        }
        
        .show-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .show-name {
          font-family: var(--font-display);
          font-size: 1.3rem;
          color: var(--text-white);
          transition: var(--transition-smooth);
        }
        
        .show-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--text-gray);
          transition: var(--transition-smooth);
        }
        
        .show-meta-dot {
          color: var(--color-red);
        }
        
        .show-desc {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: var(--text-gray);
          line-height: 1.5;
          margin-top: 4px;
          transition: var(--transition-smooth);
        }
        
        .schedule-footer-note {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-top: 24px;
          margin-top: 32px;
          border-top: 1px solid var(--border-glass);
          font-size: 0.85rem;
          color: var(--text-gray);
          transition: var(--transition-smooth);
        }
        
        @media (max-width: 768px) {
          .schedule-view {
            padding: 24px;
          }
          
          .schedule-tabs {
            flex-direction: column;
            gap: 10px;
          }
          
          .timeline-card {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default ScheduleView;
