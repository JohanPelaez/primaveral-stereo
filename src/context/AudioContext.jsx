import React, { createContext, useState, useEffect, useRef } from 'react';

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  
  const streamUrl = 'https://icecasthd.net/proxy/primaveral/live';
  const audioRef = useRef(null);

  useEffect(() => {
    // Instantiate Audio on mount
    audioRef.current = new Audio();
    audioRef.current.preload = 'none';
    audioRef.current.volume = volume;

    // Event listeners
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleWaiting = () => setIsBuffering(true);
    const handlePlaying = () => setIsBuffering(false);
    const handleError = (e) => {
      console.error("Audio error:", e);
      setIsPlaying(false);
      setIsBuffering(false);
    };

    const audio = audioRef.current;
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      // For live streams, reset src to stop buffer downloading and release network resources
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current.load();
      setIsPlaying(false);
      setIsBuffering(false);
    } else {
      setIsBuffering(true);
      audioRef.current.src = streamUrl;
      audioRef.current.load();
      audioRef.current.play()
        .then(() => {
          setIsBuffering(false);
        })
        .catch(err => {
          console.error("Playback failed:", err);
          setIsPlaying(false);
          setIsBuffering(false);
        });
    }
  };

  const changeVolume = (value) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value;
      if (value > 0) {
        setIsMuted(false);
        audioRef.current.muted = false;
      }
    }
  };

  const toggleMute = () => {
    const nextMute = !isMuted;
    setIsMuted(nextMute);
    if (audioRef.current) {
      audioRef.current.muted = nextMute;
    }
  };

  return (
    <AudioContext.Provider value={{
      isPlaying,
      volume,
      isMuted,
      isBuffering,
      togglePlay,
      changeVolume,
      toggleMute,
      streamUrl
    }}>
      {children}
    </AudioContext.Provider>
  );
};
