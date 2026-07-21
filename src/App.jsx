import React, { useState, useEffect } from 'react';
import { AudioProvider } from './context/AudioContext';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PersistentPlayer from './components/AudioPlayer/PersistentPlayer';
import Footer from './components/Footer/Footer';
import './assets/styles/App.css';

// Page Views
import HomeView from './pages/HomeView';
import AboutView from './pages/AboutView';
import ScheduleView from './pages/ScheduleView';
import InstitutionalView from './pages/InstitutionalView';
import SpeakersView from './pages/SpeakersView';

function AppContent() {
  const [currentView, setCurrentView] = useState('home');
  const [theme, setTheme] = useState('light');

  // Toggle dark-theme class on body
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Breadcrumb/view identifier back to home
  const renderBreadcrumbs = () => {
    if (currentView === 'home') return null;

    const titles = {
      about: '¿Quiénes Somos?',
      schedule: 'Programación',
      institutional: 'Programas Institucionales',
      speakers: 'Locutores'
    };

    return (
      <div className="breadcrumb-nav">
        <button onClick={() => setCurrentView('home')} className="breadcrumb-home-link">
          Inicio
        </button>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{titles[currentView]}</span>
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Brand Header */}
      <Header setCurrentView={setCurrentView} theme={theme} toggleTheme={toggleTheme} />

      {/* Tabs Menu Navigation Bar */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* Breadcrumbs for sub-pages */}
      {renderBreadcrumbs()}

      {/* Full Width Hero Banner for Home view */}
      {currentView === 'home' && <Hero />}

      {/* Swappable Main Content Area */}
      <main className="main-content">
        {currentView === 'home' && <HomeView setCurrentView={setCurrentView} />}
        {currentView === 'about' && <AboutView />}
        {currentView === 'schedule' && <ScheduleView />}
        {currentView === 'institutional' && <InstitutionalView />}
        {currentView === 'speakers' && <SpeakersView />}
      </main>

      {/* Footer Branding */}
      <Footer />

      {/* Persistent Audio Bottom Player */}
      <PersistentPlayer />
    </div>
  );
}

function App() {
  return (
    <AudioProvider>
      <AppContent />
    </AudioProvider>
  );
}

export default App;
