import React, { useContext } from 'react';
import { AudioContext } from '../../context/AudioContext';
import { Play, Pause, Volume2, VolumeX, Loader2, Users } from 'lucide-react';
import '../../assets/styles/HeroPlayer.css';

const HeroPlayer = () => {
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
          <h3 className="player-title" title={hasLiveSong ? (currentSong.song || `${currentSong.artist} - ${currentSong.title}`) : 'Primaveral Stereo 104.4 FM'}>
            {hasLiveSong ? (currentSong.song || `${currentSong.artist ? currentSong.artist + ' - ' : ''}${currentSong.title}`) : 'Primaveral Stereo 104.4 FM'}
          </h3>
          <p className="player-subtitle">
            {hasLiveSong ? 'Primaveral Stereo 104.4 FM' : 'la que todos escuchan'}
          </p>
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
      </div>
    </div>
  );
};

export default HeroPlayer;
