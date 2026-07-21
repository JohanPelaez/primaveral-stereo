import React from 'react';
import { ShieldCheck, Heart, Radio, Users } from 'lucide-react';
import '../assets/styles/AboutView.css';

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
    </div>
  );
};

export default AboutView;
