import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import TikTokIcon from '../common/TikTokIcon';
import '../../assets/styles/SocialLinks.css';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a 
        href="https://www.facebook.com/share/19KAyDdcKZ/?mibextid=wwXIfr" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-btn facebook"
        title="Facebook"
        id="social_facebook"
      >
        <Facebook size={20} />
      </a>
      <a 
        href="https://www.instagram.com/primaveralstereo104.4?igsh=Z25hZTVoMXNhODJ3&utm_source=qr" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-btn instagram"
        title="Instagram"
        id="social_instagram"
      >
        <Instagram size={20} />
      </a>
      <a 
        href="https://www.tiktok.com/@primaveral.stereo" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="social-btn tiktok"
        title="TikTok"
        id="social_tiktok"
      >
        <TikTokIcon size={20} />
      </a>
      <a 
        href="https://wa.me/573117973442" 
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
