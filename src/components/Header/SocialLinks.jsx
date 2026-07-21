import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import '../../assets/styles/SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a 
        href="https://facebook.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-btn facebook"
        title="Facebook"
        id="social_facebook"
      >
        <Facebook size={20} />
      </a>
      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-btn instagram"
        title="Instagram"
        id="social_instagram"
      >
        <Instagram size={20} />
      </a>
      <a 
        href="https://wa.me/573201234567" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-btn whatsapp"
        title="WhatsApp"
        id="social_whatsapp"
      >
        <MessageCircle size={20} />
      </a>
    </div>
  );
};

export default SocialLinks;
