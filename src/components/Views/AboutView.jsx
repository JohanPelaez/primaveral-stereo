import React from 'react';
import { ShieldCheck, Heart, Radio, Users } from 'lucide-react';

const AboutView = () => {
  return (
    <div className="about-view glass-panel">
      <div className="about-header">
        <h1 className="about-title">¿Quiénes Somos?</h1>
        <p className="about-subtitle">Primaveral Stereo 104.4 FM - La voz que une a Gómez Plata</p>
      </div>

      <div className="about-content">
        <div className="about-main-text">
          <h2>Nuestra Historia</h2>
          <p>
            Primaveral Stereo nació con el firme compromiso de ser la voz de Gómez Plata y del Norte Antioqueño. A lo largo de los años, nos hemos consolidado como un canal indispensable de comunicación, cultura, información y entretenimiento para nuestra comunidad urbana y rural.
          </p>
          <p>
            Transmitiendo desde el corazón de Gómez Plata, nos esforzamos diariamente por mantener informados a nuestros oyentes con la mayor veracidad, acompañar el trabajo de las familias campesinas y amenizar las jornadas cotidianas con una variada selección musical.
          </p>
        </div>

        {/* Pillars / Values Grid */}
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon bg-red">
              <ShieldCheck size={24} />
            </div>
            <h3>Credibilidad</h3>
            <p>Comprometidos con la verdad y la información objetiva en cada boletín de noticias.</p>
          </div>

          <div className="value-card">
            <div className="value-icon bg-blue">
              <Heart size={24} />
            </div>
            <h3>Comunidad</h3>
            <p>Apoyamos el desarrollo rural, las veredas y las iniciativas sociales de nuestra gente.</p>
          </div>

          <div className="value-card">
            <div className="value-icon bg-green">
              <Radio size={24} />
            </div>
            <h3>Cultura</h3>
            <p>Rescatamos nuestras raíces musicales y promovemos el talento artístico local.</p>
          </div>

          <div className="value-card">
            <div className="value-icon bg-orange">
              <Users size={24} />
            </div>
            <h3>Cercanía</h3>
            <p>Mantenemos una comunicación directa y constante con nuestros oyentes vía WhatsApp y teléfono.</p>
          </div>
        </div>
      </div>

      <style>{`
        .about-view {
          padding: 40px;
          margin-top: 24px;
          background: rgba(15, 23, 42, 0.6);
        }
        
        .about-header {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 24px;
          margin-bottom: 32px;
          text-align: center;
        }
        
        .about-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          color: white;
          margin-bottom: 8px;
        }
        
        .about-subtitle {
          font-family: var(--font-body);
          font-size: 1.1rem;
          color: var(--color-orange);
        }
        
        .about-content {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        
        .about-main-text h2 {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: white;
          margin-bottom: 16px;
          border-left: 4px solid var(--color-red);
          padding-left: 12px;
        }
        
        .about-main-text p {
          font-family: var(--font-body);
          font-size: 1.05rem;
          color: #cbd5e1;
          line-height: 1.7;
          margin-bottom: 16px;
        }
        
        /* Values Grid */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        
        .value-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 24px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: var(--transition-smooth);
        }
        
        .value-card:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }
        
        .value-icon {
          width: 48px;
          height: 48px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        
        .value-icon.bg-red { background-color: var(--color-red); }
        .value-icon.bg-blue { background-color: var(--color-blue); }
        .value-icon.bg-green { background-color: var(--color-green); }
        .value-icon.bg-orange { background-color: var(--color-orange); }
        
        .value-card h3 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.2rem;
          color: white;
        }
        
        .value-card p {
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .about-view {
            padding: 24px;
          }
          
          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutView;
