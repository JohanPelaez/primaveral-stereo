import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

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

      <style>{`
        .social-links {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .social-btn:hover {
          transform: translateY(-3px);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
        }
        
        .social-btn.facebook:hover {
          background-color: #1877f2;
          box-shadow: 0 4px 15px rgba(24, 119, 242, 0.4);
        }
        
        .social-btn.instagram:hover {
          background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
          box-shadow: 0 4px 15px rgba(220, 39, 67, 0.4);
        }
        
        .social-btn.whatsapp:hover {
          background-color: #25d366;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
        }
      `}</style>
    </div>
  );
};

export default SocialLinks;
