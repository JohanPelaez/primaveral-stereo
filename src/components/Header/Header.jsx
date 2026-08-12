import React, { useContext } from 'react';
import SocialLinks from './SocialLinks';
import { Radio, Sun, Moon, Users } from 'lucide-react';
import { AudioContext } from '../../context/AudioContext';
import '../../assets/styles/Header.css';

const Header = ({ setCurrentView, theme, toggleTheme }) => {
  const { currentSong } = useContext(AudioContext);

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

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle-btn" 
            title={theme === 'light' ? 'Activar tema oscuro' : 'Activar tema claro'}
            id="theme_toggle_btn"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          {/* Live Indicator Pill */}
          <div className="live-indicator-pill" id="live_indicator_badge">
            <div className="live-icon-container">
              <Radio size={16} className="live-radio-icon" />
              <span className="live-pulse-dot"></span>
            </div>
            <div className="live-text-wrapper">
              <span className="live-main-text">EN VIVO</span>
              <span className="live-sub-text">
                {currentSong?.listeners > 0 ? (
                  <>
                    <Users size={11} style={{ display: 'inline', marginRight: '3px' }} />
                    {currentSong.listeners} OYENTES
                  </>
                ) : (
                  'LAS 24 HORAS'
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
