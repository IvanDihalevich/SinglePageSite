import React, { useState, useRef, useEffect } from "react";
import track1 from "../audio/580.mp3";
import track2 from "../audio/581.mp3";
import track3 from "../audio/582.mp3";
import track4 from "../audio/584.mp3";
import track5 from "../audio/585.mp3";
import track6 from "../audio/586.mp3";
import track7 from "../audio/587.mp3";
import track8 from "../audio/588.mp3";
import track9 from "../audio/589.mp3";
import track10 from "../audio/590.mp3";
import track11 from "../audio/591.mp3";
import track12 from "../audio/592.mp3";
import "../css/MusicPlayer.css";

import backButton from "../IconsPlayer/back-button.png";
import playButton from "../IconsPlayer/play-button.png";
import pauseButton from "../IconsPlayer/pause-button.png";
import forwardButton from "../IconsPlayer/forward-button.png";

const MusicPlayer = () => {
  const tracks = [
    track2,
    track1,
    track3,
    track4,
    track5,
    track6,
    track7,
    track8,
    track9,
    track10,
    track11,
    track12,
  ];
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(tracks[currentTrackIndex]));

  const playTrack = (index) => {
    audioRef.current.pause();
    audioRef.current = new Audio(tracks[index]);
    audioRef.current.play();
    setIsPlaying(true);
    setCurrentTrackIndex(index);
  };

  const handlePrevious = () => {
    const newIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    playTrack(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentTrackIndex + 1) % tracks.length;
    playTrack(newIndex);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      audioRef.current.pause();
    };
  }, []);

  return (
    <div className="music-player">
      <h2>Музичний плеєр</h2>
      <div className="player-controls">
        <button onClick={handlePrevious} aria-label="Попередній трек">
          <img src={backButton} alt="Попередній трек" />
        </button>
        <button
          onClick={handlePlayPause}
          aria-label={isPlaying ? "Пауза" : "Відтворити"}
        >
          <img
            src={isPlaying ? pauseButton : playButton}
            alt={isPlaying ? "Пауза" : "Відтворити"}
          />
        </button>
        <button onClick={handleNext} aria-label="Наступний трек">
          <img src={forwardButton} alt="Наступний трек" />
        </button>
      </div>
      <p>
        Трек {currentTrackIndex + 1} з {tracks.length}
      </p>
    </div>
  );
};

export default MusicPlayer;
