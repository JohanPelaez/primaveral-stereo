import React from 'react';
import SocialLinks from './SocialLinks';
import { Radio } from 'lucide-react';

const Header = ({ setCurrentView }) => {
  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo and Brand */}
        <div 
          className="brand-wrapper" 
          onClick={() => setCurrentView && setCurrentView('home')}
          style={{ cursor: 'pointer' }}
          id="header_logo_home"
        >
          <img src="/logo.png" alt="Primaveral Stereo Logo" className="header-logo" />
          <div className="brand-slogan">la que todos escuchan</div>
        </div>

        {/* Right Section: Social & Live Indicator */}
        <div className="header-actions">
          <SocialLinks />
          
          {/* Live Indicator Pill */}
          <div className="live-indicator-pill" id="live_indicator_badge">
            <div className="live-icon-container">
              <Radio size={16} className="live-radio-icon" />
              <span className="live-pulse-dot"></span>
            </div>
            <div className="live-text-wrapper">
              <span className="live-main-text">EN VIVO</span>
              <span className="live-sub-text">LAS 24 HORAS</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .site-header {
          width: 100%;
          padding: 16px 24px;
          background: linear-gradient(to bottom, rgba(9, 14, 26, 0.95) 0%, rgba(9, 14, 26, 0.8) 100%);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        
        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        
        .brand-wrapper {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .header-logo {
          height: 70px;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
        }
        
        .brand-slogan {
          font-family: 'Outfit', cursive, sans-serif;
          font-style: italic;
          font-size: 1.1rem;
          color: #e2e8f0;
          margin-top: -6px;
          margin-left: 120px;
          font-weight: 300;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }
        
        .header-actions {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        
        /* Live Indicator Pill */
        .live-indicator-pill {
          background-color: var(--color-red);
          border-radius: 8px;
          padding: 6px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 0 15px rgba(214, 26, 33, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .live-icon-container {
          display: flex;
          align-items: center;
          position: relative;
        }
        
        .live-radio-icon {
          color: white;
          animation: pulse 2s infinite ease-in-out;
        }
        
        .live-pulse-dot {
          position: absolute;
          top: -2px;
          right: -2px;
          width: 6px;
          height: 6px;
          background-color: #38bdf8; /* Blue dot for signal strength */
          border-radius: 50%;
          box-shadow: 0 0 6px #38bdf8;
        }
        
        .live-text-wrapper {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }
        
        .live-main-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          color: white;
        }
        
        .live-sub-text {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 1px;
          margin-top: 2px;
        }
        
        /* Mobile adjustments */
        @media (max-width: 768px) {
          .header-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          
          .brand-wrapper {
            align-items: center;
          }
          
          .brand-slogan {
            margin-left: 0;
            margin-top: 2px;
          }
          
          .header-actions {
            width: 100%;
            justify-content: space-between;
          }
        }

        @media (max-width: 480px) {
          .header-actions {
            flex-direction: column;
            gap: 12px;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
