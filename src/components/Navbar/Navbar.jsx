import React from 'react';
import { Users, Calendar, Building, Mic } from 'lucide-react';
import '../../assets/styles/Navbar.css';

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
    </nav>
  );
};

export default Navbar;
