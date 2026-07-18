import React, { useState } from 'react';
import { AudioProvider } from './context/AudioContext';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import PersistentPlayer from './components/AudioPlayer/PersistentPlayer';
import Footer from './components/Footer/Footer';

// Page Views
import HomeView from './components/Views/HomeView';
import AboutView from './components/Views/AboutView';
import ScheduleView from './components/Views/ScheduleView';
import InstitutionalView from './components/Views/InstitutionalView';
import SpeakersView from './components/Views/SpeakersView';

function AppContent() {
  const [currentView, setCurrentView] = useState('home');

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

        <style>{`
          .breadcrumb-nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 16px 16px 0 16px;
            font-family: var(--font-display);
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--text-gray);
          }
          
          .breadcrumb-home-link {
            color: var(--color-orange);
            font-weight: 600;
            transition: var(--transition-smooth);
          }
          
          .breadcrumb-home-link:hover {
            color: white;
            text-decoration: underline;
          }
          
          .breadcrumb-separator {
            color: rgba(255, 255, 255, 0.2);
          }
          
          .breadcrumb-current {
            color: white;
            font-weight: 500;
          }
        `}</style>
      </div>
    );
  };

  return (
    <div className="app-container">
      {/* Brand Header */}
      <Header setCurrentView={setCurrentView} />

      {/* Tabs Menu Navigation Bar */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* Breadcrumbs for sub-pages */}
      {renderBreadcrumbs()}

      {/* Swappable Main Content Area */}
      <main className="main-content">
        {currentView === 'home' && (
          <>
            <Hero />
            <HomeView setCurrentView={setCurrentView} />
          </>
        )}
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
