import React, { useContext } from 'react';
import { AudioContext } from '../../context/AudioContext';
import { Play, Pause, Volume2, VolumeX, MoreVertical, Loader2 } from 'lucide-react';

const HeroPlayer = () => {
  const { 
    isPlaying, 
    volume, 
    isMuted, 
    isBuffering, 
    togglePlay, 
    changeVolume, 
    toggleMute 
  } = useContext(AudioContext);

  const handleVolumeChange = (e) => {
    changeVolume(parseFloat(e.target.value));
  };

  return (
    <div className="hero-player glass-panel" id="hero_audio_player">
      <div className="player-inner">
        {/* Play/Pause Button */}
        <button 
          onClick={togglePlay} 
          className="play-btn-large" 
          title={isPlaying ? "Pausar" : "Escuchar en vivo"}
          disabled={isBuffering}
          id="hero_play_btn"
        >
          {isBuffering ? (
            <Loader2 className="spinner-icon" />
          ) : isPlaying ? (
            <Pause size={28} fill="white" color="white" />
          ) : (
            <Play size={28} fill="white" color="white" className="play-icon-offset" />
          )}
        </button>

        {/* Station Info */}
        <div className="player-info">
          <div className="live-badge-row">
            <span className="live-dot-red"></span>
            <span className="live-label-text">EN VIVO</span>
          </div>
          <h3 className="player-title">Primaveral Stereo 104.4 FM</h3>
          <p className="player-subtitle">la que todos escuchan</p>
        </div>

        {/* Waveform Equalizer */}
        <div className={`player-visualizer waveform-equalizer ${isPlaying ? 'playing' : ''}`}>
          <div className="waveform-bar"></div>
          <div className="waveform-bar"></div>
          <div className="waveform-bar"></div>
          <div className="waveform-bar"></div>
          <div className="waveform-bar"></div>
        </div>

        {/* Volume controls */}
        <div className="player-volume-control">
          <button 
            onClick={toggleMute} 
            className="volume-mute-btn" 
            title={isMuted ? "Activar sonido" : "Silenciar"}
            id="hero_mute_btn"
          >
            {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.05" 
            value={isMuted ? 0 : volume} 
            onChange={handleVolumeChange} 
            className="volume-slider-input"
            title="Volumen"
            id="hero_volume_range"
          />
        </div>

        {/* More options button */}
        <button className="player-more-btn" title="Opciones" id="hero_more_options">
          <MoreVertical size={20} />
        </button>
      </div>

      <style>{`
        .hero-player {
          width: 100%;
          max-width: 680px;
          padding: 18px 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(15, 23, 42, 0.65);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
          transition: var(--transition-smooth);
        }

        .hero-player:hover {
          background: rgba(15, 23, 42, 0.75);
          border-color: rgba(255, 255, 255, 0.15);
        }
        
        .player-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
        }
        
        .play-btn-large {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          background-color: var(--color-red);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 15px rgba(214, 26, 33, 0.4);
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .play-btn-large:hover:not(:disabled) {
          transform: scale(1.08);
          background-color: #df2229;
          box-shadow: 0 6px 20px rgba(214, 26, 33, 0.6);
        }

        .play-btn-large:active:not(:disabled) {
          transform: scale(0.95);
        }

        .play-btn-large:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }

        .play-icon-offset {
          margin-left: 3px;
        }

        .spinner-icon {
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .player-info {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          min-width: 180px;
        }
        
        .live-badge-row {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 2px;
        }
        
        .live-dot-red {
          width: 8px;
          height: 8px;
          background-color: var(--color-red);
          border-radius: 50%;
          box-shadow: 0 0 6px var(--color-red);
          animation: pulse 1.5s infinite ease-in-out;
        }
        
        .live-label-text {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 0.7rem;
          letter-spacing: 1px;
          color: var(--color-red);
        }
        
        .player-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.15rem;
          color: white;
          line-height: 1.2;
        }
        
        .player-subtitle {
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: var(--text-gray);
          margin-top: 1px;
        }
        
        .player-visualizer {
          margin-left: auto;
        }
        
        .player-volume-control {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 130px;
        }
        
        .volume-mute-btn {
          color: var(--text-gray);
          transition: var(--transition-smooth);
        }
        
        .volume-mute-btn:hover {
          color: white;
        }
        
        .volume-slider-input {
          flex-grow: 1;
          height: 5px;
          border-radius: 5px;
          background: #475569;
          outline: none;
          accent-color: var(--color-red);
          cursor: pointer;
        }
        
        .player-more-btn {
          color: var(--text-gray);
          transition: var(--transition-smooth);
        }
        
        .player-more-btn:hover {
          color: white;
        }

        @media (max-width: 600px) {
          .player-inner {
            gap: 12px;
          }
          
          .player-visualizer {
            display: none; /* Hide visualizer on very small screens to fit volume */
          }
        }

        @media (max-width: 480px) {
          .player-volume-control {
            width: 100%;
            margin-top: 8px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 10px;
          }
          
          .player-more-btn {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroPlayer;
