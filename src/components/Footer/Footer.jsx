import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Left Column: Logo and Slogan */}
        <div className="footer-brand">
          <img src="/logo.png" alt="Primaveral Stereo Logo" className="footer-logo" />
          <span className="footer-slogan">la que todos escuchan</span>
        </div>

        {/* Center Column: Social Follow */}
        <div className="footer-socials">
          <h3>SÍGUENOS EN NUESTRAS REDES</h3>
          <div className="footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fb"><Facebook size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="ig"><Instagram size={18} /></a>
            <a href="https://wa.me/573201234567" target="_blank" rel="noopener noreferrer" className="wa"><MessageCircle size={18} /></a>
          </div>
        </div>

        {/* Right Column: Contact info */}
        <div className="footer-contacts">
          <h3>CONTÁCTANOS</h3>
          <ul className="contact-list">
            <li>
              <Phone size={14} className="contact-icon" />
              <span>320 123 4567</span>
            </li>
            <li>
              <MessageCircle size={14} className="contact-icon" />
              <span>313 765 4321</span>
            </li>
            <li>
              <Mail size={14} className="contact-icon" />
              <span>info@primaveralstereo.com</span>
            </li>
            <li>
              <MapPin size={14} className="contact-icon" />
              <span>Gómez Plata, Antioquia</span>
            </li>
          </ul>
        </div>

        {/* Extreme Right: Big glowing text slogan */}
        <div className="footer-glowing-text">
          <h2 className="glowing-slogan">LA QUE TODOS ESCUCHAN</h2>
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Primaveral Stereo. Todos los derechos reservados. Desarrollado con ❤️ para Gómez Plata.</p>
      </div>

      <style>{`
        .site-footer {
          width: 100%;
          background-color: #080c16;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 40px 24px 20px 24px;
          color: #94a3b8;
          margin-top: 60px;
          transition: var(--transition-smooth);
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 32px;
          align-items: start;
        }
        
        /* Brand */
        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
        }
        
        .footer-logo {
          height: 60px;
          object-fit: contain;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.15));
        }
        
        .footer-slogan {
          font-family: 'Outfit', cursive, sans-serif;
          font-style: italic;
          font-size: 0.95rem;
          color: #cbd5e1;
          margin-top: -4px;
          margin-left: 100px;
          transition: var(--transition-smooth);
        }
        
        /* Headers for footer groups */
        .footer-socials h3, .footer-contacts h3 {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 1px;
          color: #f8fafc;
          margin-bottom: 16px;
          transition: var(--transition-smooth);
        }
        
        /* Social Icons */
        .footer-social-icons {
          display: flex;
          gap: 12px;
        }
        
        .footer-social-icons a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: rgba(255, 255, 255, 0.05);
          transition: var(--transition-smooth);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .footer-social-icons a:hover {
          transform: translateY(-2px);
        }
        
        .footer-social-icons a.fb:hover { background-color: #1877f2; border-color: transparent; }
        .footer-social-icons a.ig:hover { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); border-color: transparent; }
        .footer-social-icons a.wa:hover { background-color: #25d366; border-color: transparent; }
        
        /* Contacts */
        .contact-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 0.85rem;
        }
        
        .contact-list li {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .contact-icon {
          color: var(--color-red);
          flex-shrink: 0;
        }
        
        /* Glowing slogan */
        .footer-glowing-text {
          display: flex;
          align-items: center;
          height: 100%;
        }
        
        .glowing-slogan {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 1.25rem;
          color: var(--color-red);
          text-shadow: 0 0 10px rgba(214, 26, 33, 0.6), 0 0 20px rgba(214, 26, 33, 0.4);
          letter-spacing: 0.5px;
          line-height: 1.2;
          text-align: right;
          width: 100%;
        }
        
        /* Copyright */
        .footer-copyright {
          max-width: 1200px;
          margin: 40px auto 0 auto;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 20px;
          text-align: center;
          font-family: var(--font-body);
          font-size: 0.75rem;
          color: #64748b;
        }
        
        /* Responsive design */
        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr 1fr;
            gap: 24px;
          }
          
          .glowing-slogan {
            text-align: left;
          }
        }
        
        @media (max-width: 580px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
