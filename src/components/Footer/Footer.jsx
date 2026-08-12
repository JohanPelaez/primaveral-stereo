import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import TikTokIcon from '../common/TikTokIcon';
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
            <a href="https://www.facebook.com/share/19KAyDdcKZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="fb" title="Facebook"><Facebook size={18} /></a>
            <a href="https://www.instagram.com/primaveralstereo104.4?igsh=Z25hZTVoMXNhODJ3&utm_source=qr" target="_blank" rel="noopener noreferrer" className="ig" title="Instagram"><Instagram size={18} /></a>
            <a href="https://www.tiktok.com/@primaveral.stereo" target="_blank" rel="noopener noreferrer" className="tt" title="TikTok"><TikTokIcon size={18} /></a>
            <a href="https://wa.me/573117973442" target="_blank" rel="noopener noreferrer" className="wa" title="WhatsApp"><MessageCircle size={18} /></a>
          </div>
        </div>

        {/* Right Column: Contact info */}
        <div className="footer-contacts">
          <h3>CONTÁCTANOS</h3>
          <ul className="contact-list">
            <li>
              <Phone size={14} className="contact-icon" />
              <span>311 797 3442</span>
            </li>
            <li>
              <MessageCircle size={14} className="contact-icon" />
              <span>311 797 3442</span>
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
