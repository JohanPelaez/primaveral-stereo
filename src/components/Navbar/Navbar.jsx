import React from 'react';
import { Users, Calendar, Building, Mic } from 'lucide-react';

const Navbar = ({ currentView, setCurrentView }) => {
  const menuItems = [
    {
      id: 'about',
      label: '¿QUIÉNES SOMOS?',
      color: 'var(--color-red)',
      icon: <Users size={24} className="nav-icon" />,
      activeClass: 'active-red'
    },
    {
      id: 'schedule',
      label: 'PROGRAMACIÓN',
      color: 'var(--color-blue)',
      icon: <Calendar size={24} className="nav-icon" />,
      activeClass: 'active-blue'
    },
    {
      id: 'institutional',
      label: 'PROGRAMAS INSTITUCIONALES',
      color: 'var(--color-green)',
      icon: <Building size={24} className="nav-icon" />,
      activeClass: 'active-green'
    },
    {
      id: 'speakers',
      label: 'LOCUTORES',
      color: 'var(--color-orange)',
      icon: <Mic size={24} className="nav-icon" />,
      activeClass: 'active-orange'
    }
  ];

  return (
    <nav className="main-navbar">
      <div className="navbar-grid">
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`nav-tab ${item.id} ${isActive ? 'active' : ''}`}
              style={{ '--btn-color': item.color }}
              id={`nav_btn_${item.id}`}
            >
              <div className="nav-tab-content">
                {item.icon}
                <span className="nav-label">{item.label}</span>
              </div>
            </button>
          );
        })}
      </div>

      <style>{`
        .main-navbar {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          transform: translateY(12px);
          z-index: 30;
          position: relative;
        }
        
        .navbar-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        
        .nav-tab {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px 10px;
          background-color: var(--btn-color);
          color: white;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          border: none;
          outline: none;
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        /* Diagonal visual cut overlay */
        .nav-tab::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, transparent 100%);
          pointer-events: none;
        }
        
        .nav-tab-content {
          display: flex;
          align-items: center;
          gap: 12px;
          z-index: 2;
          transition: var(--transition-smooth);
        }
        
        .nav-icon {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }

        .nav-label {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        /* Bottom Line Indicator base */
        .nav-tab::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 6px;
          background-color: rgba(255, 255, 255, 0.7);
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.4);
          transform: scaleX(0);
          transform-origin: center;
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 3;
        }

        /* Hover Effects */
        .nav-tab:hover {
          filter: brightness(1.15);
        }
        
        .nav-tab:hover::before {
          transform: scaleX(1);
        }
        
        /* Active & Inactive dimming */
        .navbar-grid:hover .nav-tab:not(:hover):not(.active) {
          opacity: 0.75;
          filter: brightness(0.9);
        }
        
        .nav-tab.active {
          box-shadow: inset 0 6px 15px rgba(0, 0, 0, 0.35);
        }
        
        .nav-tab.active::before {
          transform: scaleX(1);
          background-color: #ffffff;
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.8);
        }
        
        /* Mobile styling */
        @media (max-width: 900px) {
          .main-navbar {
            transform: translateY(12px);
          }
          
          .navbar-grid {
            grid-template-columns: repeat(2, 1fr);
            border-radius: 8px;
          }
          
          .nav-tab {
            padding: 16px 8px;
            font-size: 0.85rem;
          }
        }
        
        @media (max-width: 480px) {
          .nav-tab-content {
            flex-direction: column;
            gap: 6px;
            text-align: center;
          }
          
          .nav-tab {
            padding: 12px 6px;
            font-size: 0.75rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
