import React, { useState } from 'react';
import { Newspaper, Clock, Sparkles, Building, HeartPulse, Church, ShieldAlert, Users, GraduationCap } from 'lucide-react';
import '../assets/styles/InstitutionalView.css';

const InstitutionalView = () => {
  const [activeDay, setActiveDay] = useState('lunes');

  const institutionalData = {
    lunes: [
      {
        time: '07:00 AM',
        title: 'Santa Eucaristía',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Espacio Religioso',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Transmisión en directo de la Santa Eucaristía desde la Parroquia Nuestra Señora del Carmen, un espacio de oración, reflexión y encuentro con Dios.'
      },
      {
        time: '09:15 AM',
        title: 'La Escuela de Hoy',
        agency: 'Institución Educativa Gómez Plata',
        category: 'Educación y Juventud',
        icon: <GraduationCap size={22} className="icon-orange" />,
        desc: 'Programa institucional de la Institución Educativa Gómez Plata, donde se comparten actividades académicas, proyectos, logros estudiantiles e información de interés para la comunidad educativa.'
      },
      {
        time: '11:30 AM',
        title: 'Cristo en Casa',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Evangelización y Familia',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Espacio de evangelización realizado por la Parroquia Nuestra Señora del Carmen, con mensajes de fe, reflexión y esperanza para las familias.'
      },
      {
        time: '03:00 PM',
        title: 'Encuentro con Dios',
        agency: 'Movimiento Misionero Mundial (Pastor Sergio Ramírez)',
        category: 'Formación Espiritual',
        icon: <Sparkles size={22} className="icon-purple" />,
        desc: 'Programa del Movimiento Misionero Mundial, dirigido por el pastor Sergio Ramírez, con enseñanzas bíblicas y mensajes para fortalecer la vida espiritual.'
      },
      {
        time: '05:30 PM',
        title: 'Santo Rosario',
        agency: 'Oración Mariana Comunitaria',
        category: 'Espacio de Oración',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Momento de oración dedicado a la Virgen María, invitando a toda la comunidad a unirse en familia.'
      },
      {
        time: '06:00 PM',
        title: 'Santa Eucaristía',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Espacio Religioso',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Transmisión en directo de la celebración eucarística.'
      }
    ],
    martes: [
      {
        time: '07:00 AM',
        title: 'Santa Eucaristía',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Espacio Religioso',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Celebración de la Santa Misa en directo.'
      },
      {
        time: '09:00 AM',
        title: 'Mundo Cooperativo',
        agency: 'Cooperativa Riachón',
        category: 'Sector Solidario y Economía',
        icon: <Users size={22} className="icon-green" />,
        desc: 'Programa institucional de la Cooperativa Riachón, donde se presentan servicios, proyectos, educación financiera y noticias del sector solidario.'
      },
      {
        time: '10:00 AM',
        title: 'Administración Municipal de Gómez Plata',
        agency: 'Alcaldía de Gómez Plata',
        category: 'Gestión Pública e Información',
        icon: <Building size={22} className="icon-red" />,
        desc: 'Espacio oficial de la Alcaldía de Gómez Plata para informar sobre avances de gobierno, proyectos, programas, convocatorias y noticias de interés para toda la comunidad.'
      },
      {
        time: '11:30 AM',
        title: 'Cristo en Casa',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Evangelización',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Programa de la Parroquia Nuestra Señora del Carmen, dedicado a la evangelización y la reflexión espiritual.'
      },
      {
        time: '03:00 PM',
        title: 'Santa Eucaristía',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Espacio Religioso',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Transmisión de la celebración eucarística.'
      }
    ],
    miercoles: [
      {
        time: '09:00 AM',
        title: 'Hospital Santa Isabel',
        agency: 'E.S.E. Hospital Santa Isabel',
        category: 'Salud y Prevención',
        icon: <HeartPulse size={22} className="icon-red" />,
        desc: 'Espacio institucional del Hospital Santa Isabel, donde se comparten campañas de prevención, recomendaciones y temas relacionados con la promoción de la salud y el bienestar.'
      },
      {
        time: '10:30 AM',
        title: 'Cuido de Mí',
        agency: 'Psicóloga Laura Rojo',
        category: 'Salud Mental y Emprendimiento',
        icon: <Sparkles size={22} className="icon-purple" />,
        desc: 'Programa dirigido por la psicóloga Laura Rojo, enfocado en la salud mental, el crecimiento personal, el bienestar emocional, el emprendimiento y consejos prácticos para mejorar la calidad de vida.'
      },
      {
        time: '03:00 PM',
        title: 'Tiempo de Gracia',
        agency: 'Iglesia Pentecostal (Pastor Dubanier Medina)',
        category: 'Mensajes de Fe',
        icon: <Sparkles size={22} className="icon-orange" />,
        desc: 'Programa de la Iglesia Pentecostal, dirigido por el pastor Dubanier Medina, con mensajes de fe, esperanza y fortalecimiento espiritual.'
      },
      {
        time: '05:30 PM',
        title: 'Santo Rosario',
        agency: 'Oración Mariana Comunitaria',
        category: 'Espacio de Oración',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Espacio de oración para toda la comunidad.'
      },
      {
        time: '06:00 PM',
        title: 'Santa Eucaristía',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Espacio Religioso',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Celebración eucarística en directo.'
      }
    ],
    jueves: [
      {
        time: '07:00 AM',
        title: 'Santa Eucaristía',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Espacio Religioso',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Transmisión de la Santa Misa.'
      },
      {
        time: '09:00 AM',
        title: 'Administración Municipal de Carolina del Príncipe',
        agency: 'Alcaldía de Carolina del Príncipe',
        category: 'Gestión Pública Regional',
        icon: <Building size={22} className="icon-blue" />,
        desc: 'Programa institucional donde la Administración Municipal informa sobre obras, proyectos, programas sociales, gestión pública y noticias de interés para la comunidad.'
      },
      {
        time: '11:30 AM',
        title: 'Cristo en Casa',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Evangelización',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Espacio de evangelización de la Parroquia Nuestra Señora del Carmen.'
      },
      {
        time: '03:00 PM',
        title: 'Policía Nacional',
        agency: 'Policía Nacional de Colombia',
        category: 'Seguridad y Convivencia',
        icon: <ShieldAlert size={22} className="icon-green" />,
        desc: 'Programa institucional con recomendaciones de seguridad, campañas de prevención, convivencia ciudadana e información de interés para la comunidad.'
      },
      {
        time: '05:00 PM',
        title: 'Hora Santa',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Adoración y Reflexión',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Espacio de adoración, oración y reflexión para fortalecer la vida espiritual de los oyentes.'
      },
      {
        time: '06:00 PM',
        title: 'Santa Eucaristía',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Espacio Religioso',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Transmisión en vivo de la celebración eucarística.'
      }
    ],
    viernes: [
      {
        time: '07:00 AM',
        title: 'Santa Eucaristía',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Espacio Religioso',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Celebración de la Santa Misa.'
      },
      {
        time: '09:00 AM',
        title: 'Minutos de Saber Cooperativo',
        agency: 'Coop. de Ahorro y Crédito Gómez Plata Ltda.',
        category: 'Educación Financiera',
        icon: <Users size={22} className="icon-green" />,
        desc: 'Programa institucional de la Cooperativa de Ahorro y Crédito Gómez Plata Ltda., con información sobre educación financiera, beneficios para los asociados y actualidad del sector cooperativo.'
      },
      {
        time: '11:30 AM',
        title: 'Cristo en Casa',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Evangelización',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Programa de la Parroquia Nuestra Señora del Carmen, dedicado a la reflexión y la evangelización.'
      },
      {
        time: '03:00 PM',
        title: 'Encuentro con Dios',
        agency: 'Movimiento Misionero Mundial (Pastor Sergio Ramírez)',
        category: 'Formación Espiritual',
        icon: <Sparkles size={22} className="icon-purple" />,
        desc: 'Espacio del Movimiento Misionero Mundial, dirigido por el pastor Sergio Ramírez, con enseñanzas bíblicas y mensajes de esperanza.'
      },
      {
        time: '05:30 PM',
        title: 'Santo Rosario',
        agency: 'Oración Mariana Comunitaria',
        category: 'Espacio de Oración',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Momento de oración para toda la comunidad.'
      },
      {
        time: '06:00 PM',
        title: 'Santa Eucaristía',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Espacio Religioso',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Transmisión de la celebración eucarística.'
      }
    ],
    sabado: [
      {
        time: '07:00 AM',
        title: 'Santa Eucaristía',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Espacio Religioso',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Celebración eucarística en directo.'
      },
      {
        time: '09:30 AM',
        title: 'Hablemos de Salud Oral',
        agency: 'Dr. Álvaro Gómez',
        category: 'Salud Bucal y Prevención',
        icon: <HeartPulse size={22} className="icon-red" />,
        desc: 'Programa dirigido por el doctor Álvaro Gómez, con recomendaciones para el cuidado de la salud bucal, prevención y educación para toda la familia.'
      },
      {
        time: '05:30 PM',
        title: 'Santo Rosario',
        agency: 'Oración Mariana Comunitaria',
        category: 'Espacio de Oración',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Espacio de oración mariana.'
      },
      {
        time: '06:00 PM',
        title: 'Santa Eucaristía',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Espacio Religioso',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Transmisión de la Santa Misa.'
      }
    ],
    domingo: [
      {
        time: '08:00 AM',
        title: 'Santa Eucaristía Dominical',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Celebración Principal',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Celebración dominical en directo para acompañar espiritualmente a nuestros oyentes.'
      },
      {
        time: '11:00 AM',
        title: 'Santa Eucaristía Dominical',
        agency: 'Parroquia Nuestra Señora del Carmen',
        category: 'Misa Dominical',
        icon: <Church size={22} className="icon-blue" />,
        desc: 'Segunda transmisión de la celebración eucarística para quienes desean vivir este momento de fe y comunión.'
      }
    ]
  };

  const daysList = [
    { key: 'lunes', label: 'Lunes' },
    { key: 'martes', label: 'Martes' },
    { key: 'miercoles', label: 'Miércoles' },
    { key: 'jueves', label: 'Jueves' },
    { key: 'viernes', label: 'Viernes' },
    { key: 'sabado', label: 'Sábados' },
    { key: 'domingo', label: 'Domingos' }
  ];

  return (
    <div className="institutional-view glass-panel">
      <div className="inst-header">
        <h1 className="inst-title">Programas Institucionales, Eucaristías y Espacios de Servicio</h1>
        <p className="inst-subtitle">Información, formación, salud y valores al servicio de nuestra comunidad</p>
      </div>

      <div className="inst-intro">
        <div className="intro-icon-box">
          <Newspaper size={32} />
        </div>
        <p>
          En <strong>Primaveral Stereo 104.4 FM – La que todos escuchan</strong>, creemos en una radio que va más allá del entretenimiento. Por eso, abrimos nuestros micrófonos a instituciones, entidades públicas, organizaciones comunitarias e iglesias que, día a día, brindan información, formación, orientación espiritual y contenidos de interés para toda la comunidad del Norte y Nordeste antioqueño.
        </p>
      </div>

      {/* Day Selector Tabs */}
      <div className="inst-day-tabs">
        {daysList.map((d) => (
          <button
            key={d.key}
            onClick={() => setActiveDay(d.key)}
            className={`inst-tab-btn ${activeDay === d.key ? 'active-inst-tab' : ''}`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Grid List for selected day */}
      <div className="inst-grid">
        {institutionalData[activeDay].map((prog, idx) => (
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
              <div className="inst-card-meta-row">
                <span className="inst-card-time">
                  <Clock size={12} style={{ display: 'inline', marginRight: '4px' }} />
                  {prog.time}
                </span>
                <span className="inst-card-category">{prog.category}</span>
              </div>
              <p className="inst-card-desc">{prog.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="inst-footer-note">
        <Sparkles size={18} style={{ color: 'var(--color-green)', flexShrink: 0 }} />
        <span>
          A través de estos espacios, <strong>Primaveral Stereo 104.4 FM – La que todos escuchan</strong> reafirma su compromiso con el servicio a la comunidad, brindando una programación que informa, educa, fortalece los valores, promueve el bienestar y acompaña la vida espiritual de nuestros oyentes.
        </span>
      </div>
    </div>
  );
};

export default InstitutionalView;
