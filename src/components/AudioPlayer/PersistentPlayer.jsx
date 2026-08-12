import React, { useContext } from 'react';
import { AudioContext } from '../../context/AudioContext';
import { Play, Pause, Volume2, VolumeX, Radio, Loader2, Users } from 'lucide-react';
import '../../assets/styles/PersistentPlayer.css';

const PersistentPlayer = () => {
  const {
    isPlaying,
    volume,
    isMuted,
    isBuffering,
    togglePlay,
    changeVolume,
    toggleMute,
    currentSong
  } = useContext(AudioContext);

  const handleVolumeChange = (e) => {
    changeVolume(parseFloat(e.target.value));
  };

  const hasLiveSong = Boolean(currentSong?.title || currentSong?.song);
  const songTitle = hasLiveSong 
    ? (currentSong.song || `${currentSong.artist ? currentSong.artist + ' - ' : ''}${currentSong.title}`) 
    : 'Primaveral Stereo 104.4 FM';
  const coverUrl = currentSong?.imageUrl || '/favicon.png';

  return (
    <div className="persistent-player-bar" id="persistent_player_bar">
      <div className="persistent-player-container">
        {/* Left: Station info and small logo */}
        <div className="player-station-meta">
          <div className="station-logo-mini-container">
            <img 
              src={coverUrl} 
              alt="Primaveral Logo" 
              className="station-logo-mini" 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/favicon.png';
              }}
            />
          </div>
          <div className="station-meta-text">
            <span className="station-meta-title" title={songTitle}>{songTitle}</span>
            <div className="station-meta-status">
              <span className="live-bullet-pulse"></span>
              <span className="live-status-lbl">
                {hasLiveSong ? 'EN VIVO • Primaveral' : 'EN VIVO'}
              </span>
              {currentSong?.listeners > 0 && (
                <span className="listeners-mobile-badge" title={`${currentSong.listeners} oyentes sintonizados`}>
                  <Users size={10} className="users-icon-inline" />
                  <span>{currentSong.listeners}</span>
                </span>
              )}
            </div>
          </div>

          {/* Equalizer animation bars */}
          <div className={`player-visualizer waveform-equalizer ${isPlaying ? 'playing' : ''}`}>
            <div className="waveform-bar"></div>
            <div className="waveform-bar"></div>
            <div className="waveform-bar"></div>
            <div className="waveform-bar"></div>
            <div className="waveform-bar"></div>
          </div>
        </div>

        {/* Center: Play/Pause Playback Control */}
        <div className="player-playback-controls">
          <button
            onClick={togglePlay}
            className="control-btn play-btn-main"
            title={isPlaying ? "Pausar" : "Reproducir en vivo"}
            disabled={isBuffering}
            id="pb_play_toggle"
          >
            {isBuffering ? (
              <Loader2 size={20} className="spinner-icon" />
            ) : isPlaying ? (
              <Pause size={20} fill="white" color="white" />
            ) : (
              <Play size={20} fill="white" color="white" className="play-icon-offset" />
            )}
          </button>
        </div>

        {/* Right: Volume & En Vivo Badge */}
        <div className="player-right-controls">
          {/* Volume Group */}
          <div className="volume-control-group">
            <button
              onClick={toggleMute}
              className="bottom-volume-btn"
              title={isMuted ? "Activar sonido" : "Silenciar"}
              id="pb_mute"
            >
              {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="bottom-volume-slider"
              title="Volumen"
              id="pb_volume"
            />
          </div>

          {/* En Vivo & Listener count indicator */}
          <div className="live-pill-bottom">
            <Radio size={12} className="live-icon-bounce" />
            <span>EN VIVO</span>
            {currentSong?.listeners > 0 && (
              <span className="live-pill-count" title={`${currentSong.listeners} oyentes sintonizados`}>
                <Users size={11} style={{ display: 'inline', marginLeft: '4px', marginRight: '2px' }} />
                {currentSong.listeners}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersistentPlayer;
