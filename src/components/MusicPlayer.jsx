import { useEffect, useRef, useState } from "react";
import { FiMusic, FiPause, FiPlay } from "react-icons/fi";
import { siteData } from "../data/siteData";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onError = () => setAvailable(false);
    audio.addEventListener("error", onError);

    return () => audio.removeEventListener("error", onError);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, [playing]);

  return (
    <div className="music-widget">
      <audio ref={audioRef} src={siteData.music} loop preload="metadata" />

      <button
        className={`music-button ${playing ? "is-playing" : ""}`}
        onClick={() => setPlaying((value) => !value)}
        aria-label={playing ? "Pause music" : "Play music"}
        title={available ? "Music" : "Add public/music/birthday.mp3"}
      >
        {playing ? <FiPause /> : <FiPlay />}
      </button>

      <div className="music-label">
        <FiMusic />
        <span>{available ? (playing ? "Playing" : "Play music") : "Add song"}</span>
      </div>
    </div>
  );
}