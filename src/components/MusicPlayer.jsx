import { useEffect, useRef, useState } from "react";
import { FiMusic, FiPause, FiPlay } from "react-icons/fi";
import { siteData } from "../data/siteData";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [available, setAvailable] = useState(true);

  // Cek apakah file music tersedia
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onError = () => {
      setAvailable(false);
      setPlaying(false);
    };

    const onPlay = () => {
      setPlaying(true);
    };

    const onPause = () => {
      setPlaying(false);
    };

    audio.addEventListener("error", onError);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("error", onError);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, []);

  // Play / Pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !available) return;

    if (playing) {
      audio.play().catch(() => {
        setPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [playing, available]);

  // Auto play setelah user pertama kali berinteraksi
  useEffect(() => {
    const startMusic = async () => {
      const audio = audioRef.current;

      if (!audio || !available || audio.paused === false) {
        return;
      }

      try {
        await audio.play();
        setPlaying(true);
      } catch (error) {
        // Browser masih memblokir autoplay.
        // User masih bisa menekan tombol Play.
        console.log("Waiting for user interaction...");
      }
    };

    const handleFirstInteraction = () => {
      startMusic();

      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);
    window.addEventListener("keydown", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [available]);

  return (
    <div className="music-widget">
      <audio
        ref={audioRef}
        src={siteData.music}
        loop
        preload="auto"
      />

      <button
        className={`music-button ${playing ? "is-playing" : ""}`}
        onClick={() => setPlaying((value) => !value)}
        aria-label={playing ? "Pause music" : "Play music"}
        title={
          available
            ? playing
              ? "Pause music"
              : "Play music"
            : "Add public/music/birthday.mp3"
        }
      >
        {playing ? <FiPause /> : <FiPlay />}
      </button>

      <div className="music-label">
        <FiMusic />

        <span>
          {!available
            ? "Add song"
            : playing
            ? "Playing"
            : "Play music"}
        </span>
      </div>
    </div>
  );
}