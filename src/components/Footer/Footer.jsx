import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import '../../assets/styles/Footer.css';

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
    </footer>
  );
};

export default Footer;
