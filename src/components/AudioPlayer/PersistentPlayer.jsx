import React, { useContext } from 'react';
import { AudioContext } from '../../context/AudioContext';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Radio, ListMusic, Loader2 } from 'lucide-react';
import '../../assets/styles/PersistentPlayer.css';

const PersistentPlayer = () => {
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
    <div className="persistent-player-bar" id="persistent_player_bar">
      <div className="persistent-player-container">
        {/* Left: Station info and small logo */}
        <div className="player-station-meta">
          <div className="station-logo-mini-container">
            <img src="/favicon.png" alt="Primaveral Logo" className="station-logo-mini" />
          </div>
          <div className="station-meta-text">
            <span className="station-meta-title">Primaveral Stereo 104.4 FM</span>
            <div className="station-meta-status">
              <span className="live-bullet-pulse"></span>
              <span className="live-status-lbl">EN VIVO - la que todos escuchan</span>
            </div>
          </div>
        </div>

        {/* Center: Playback Controls */}
        <div className="player-playback-controls">
          <button className="control-btn skip-btn" title="Emisora Anterior" id="pb_prev">
            <SkipBack size={18} fill="currentColor" />
          </button>

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

          <button className="control-btn skip-btn" title="Siguiente Emisora" id="pb_next">
            <SkipForward size={18} fill="currentColor" />
          </button>
        </div>

        {/* Right: Volume & More Options */}
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

          {/* En Vivo indicator */}
          <div className="live-pill-bottom">
            <Radio size={12} className="live-icon-bounce" />
            <span>EN VIVO</span>
          </div>

          {/* List Menu Icon */}
          <button className="control-btn menu-list-btn" title="Lista de canales" id="pb_list_channels">
            <ListMusic size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersistentPlayer;
