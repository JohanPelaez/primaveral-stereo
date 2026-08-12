import React, { useState } from 'react';
import { Clock, Info, Sparkles } from 'lucide-react';
import '../assets/styles/ScheduleView.css';

const ScheduleView = () => {
  const [activeTab, setActiveTab] = useState('weekday');

  const scheduleData = {
    weekday: [
      {
        time: '04:00 AM – 10:00 AM',
        name: 'Alegría Mañanera',
        genre: 'Popular, Vallenato, Tropical y del Recuerdo',
        desc: 'Las madrugadas comienzan con el programa que despierta al Norte y Nordeste antioqueño. Alegría Mañanera acompaña a nuestros campesinos, transportadores, trabajadores y madrugadores con una variada selección de música popular, vallenata, tropical y del recuerdo. Además, ofrece noticias, información de interés, resultados de loterías, mensajes de servicio social y una permanente interacción con los oyentes a través de llamadas, mensajes y notas de voz.'
      },
      {
        time: '10:00 AM – 12:00 M',
        name: 'Son Sólo Melodías',
        genre: 'Pop Latino, Salsa Romántica y Clásicos',
        desc: 'El romanticismo llega a las mañanas con una selección de pop latino, salsa romántica y grandes clásicos del género romántico. Un espacio perfecto para quienes disfrutan de buena música mientras trabajan, están en casa, preparan el almuerzo o realizan sus actividades diarias.'
      },
      {
        time: '12:00 M – 04:00 PM',
        name: 'Crossover',
        genre: 'Crossover y Éxitos de todos los géneros',
        desc: 'Las tardes se llenan de ritmo con una programación crossover que reúne los mejores éxitos de todos los géneros musicales. Música para acompañar a quienes trabajan, estudian, conducen o disfrutan de la mejor compañía durante la jornada.'
      },
      {
        time: '04:00 PM – 05:30 PM',
        name: 'Regresando a Casa',
        genre: 'Carrilera, Guasca, Vallenato Clásico y Antaño',
        desc: 'El regreso a casa se vive con los grandes éxitos de antaño, música carrilera, guasca y vallenato clásico. Un espacio para recordar, cantar y terminar la tarde con la mejor compañía.'
      },
      {
        time: '07:00 PM – Hasta el amanecer',
        name: 'La Mejor Noche',
        genre: 'Éxitos recientes, Clásicos y Variado',
        desc: 'Las noches en Primaveral Stereo reúnen las canciones más sonadas, los clásicos de siempre y los éxitos más recientes de todos los géneros musicales para acompañar a quienes trabajan, viajan, descansan o disfrutan de la buena música hasta el amanecer.'
      }
    ],
    saturday: [
      {
        time: '04:00 AM – 09:00 AM',
        name: 'La Viejoteca del Fin de Semana',
        genre: 'Merengues, Porros, Salsa Brava y Tropicales',
        desc: 'El fin de semana comienza con toda la energía. Merengues, porros, salsa brava, tropicales y los grandes clásicos para bailar, cantar y empezar el sábado con la mejor actitud.'
      },
      {
        time: '09:00 AM – 12:00 M',
        name: 'Las 20 Más Prendidas',
        genre: 'Conteo Musical Semanal Votado por la Audiencia',
        desc: 'El conteo musical más esperado de la semana. Nuestros oyentes eligen con sus votos las canciones más sonadas y compiten por llevar a su artista favorito al primer lugar. Un programa lleno de emoción, participación e interacción con el público.'
      },
      {
        time: '12:00 M – 05:00 PM',
        name: 'Fin de Semana al Aire',
        genre: 'Variedad Musical del Sábado',
        desc: 'Las mejores canciones para disfrutar el sábado con una programación variada que acompaña reuniones familiares, paseos, viajes y momentos de descanso.'
      },
      {
        time: '07:00 PM – Hasta el amanecer',
        name: 'Fin de Semana al Aire (Noche de Fiesta)',
        genre: 'Crossover y Fiesta Nocturna',
        desc: 'La mejor música continúa durante toda la noche para seguir disfrutando del ambiente del fin de semana con todos los géneros musicales.'
      }
    ],
    sunday: [
      {
        time: '04:00 AM – 10:00 AM',
        name: 'Desenguayabe',
        genre: 'Popular, Vallenato y Grandes Clásicos',
        desc: 'El domingo comienza con la mejor selección de música popular, vallenata y grandes clásicos para quienes amanecen disfrutando del fin de semana o simplemente desean iniciar el día con buena música y excelentes recuerdos.'
      },
      {
        time: '10:00 AM – Hasta el amanecer',
        name: 'Fin de Semana al Aire',
        genre: 'Programación Variada Dominical',
        desc: 'El resto del domingo continúa con una programación musical variada para acompañar cada momento antes de comenzar una nueva semana.'
      }
    ],
    holiday: [
      {
        time: 'Lunes Festivos y Días Festivos (Todo el Día)',
        name: 'Festivos al Aire',
        genre: 'Mano a Mano, Especiales Temáticos e Interacción',
        desc: 'Cada lunes festivo y en todos los días festivos, Primaveral Stereo presenta una programación especial con las mejores canciones de cada género musical, enfrentamientos de artistas en el tradicional Mano a Mano, especiales temáticos y la participación permanente de nuestros oyentes, quienes eligen a sus artistas favoritos mediante llamadas, mensajes y notas de voz.'
      }
    ]
  };

  return (
    <div className="schedule-view glass-panel">
      <div className="schedule-header">
        <h1 className="schedule-title">Nuestra Programación Musical</h1>
        <p className="schedule-subtitle">
          En <strong>Primaveral Stereo 104.4 FM – La que todos escuchan</strong>, vivimos la radio las 24 horas del día con una programación pensada para acompañar cada momento de nuestros oyentes. Música, información, entretenimiento y la participación de nuestra audiencia hacen parte de cada uno de nuestros espacios.
        </p>
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
        <button 
          onClick={() => setActiveTab('holiday')} 
          className={`tab-btn ${activeTab === 'holiday' ? 'active-tab-orange' : ''}`}
        >
          Festivos
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
                <span className="show-genre">Género: {item.genre}</span>
              </div>
              <p className="show-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="schedule-footer-note">
        <Sparkles size={18} style={{ color: 'var(--color-orange)', flexShrink: 0 }} />
        <span>
          En <strong>Primaveral Stereo 104.4 FM – La que todos escuchan</strong>, nuestra misión es acompañar a cada oyente con una programación cercana, entretenida y pensada para todos los gustos, los 365 días del año, llevando la mejor música, la información y la alegría a cada rincón del Norte y Nordeste antioqueño.
        </span>
      </div>
    </div>
  );
};

export default ScheduleView;
