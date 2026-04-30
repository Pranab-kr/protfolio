"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { LuVolume2, LuVolumeX, LuVolume1 } from "react-icons/lu";

// Add your songs here
const SONGS = ["/songs/song1.mp3", "/songs/song2.mp3", "/songs/song3.mp3", "/songs/song4.mp3"];

export default function FloatingControl() {
  // audioState: 0 = paused, 1 = low vol, 2 = high vol
  const [audioState, setAudioState] = useState<0 | 1 | 2>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const songIndexRef = useRef(0);

  useEffect(() => {
    if (SONGS.length === 0) return;

    const randomIndex = Math.floor(Math.random() * SONGS.length);
    songIndexRef.current = randomIndex;
    const audio = new Audio(SONGS[randomIndex]);
    audio.loop = false;

    const handleSongEnd = () => {
      const nextIndex = songIndexRef.current + 1;
      songIndexRef.current =
        nextIndex < SONGS.length && SONGS[nextIndex] ? nextIndex : 0;
      audio.src = SONGS[songIndexRef.current] || SONGS[0];
      audio.currentTime = 0;
      audio.play().catch(() => console.log("Audio play blocked"));
    };

    audio.addEventListener("ended", handleSongEnd);
    audioRef.current = audio;

    return () => {
      audio.removeEventListener("ended", handleSongEnd);
      audio.pause();
    };
  }, []);

  const handleAudioToggle = () => {
    if (!audioRef.current) return;

    if (audioState === 0) {
      // Play low volume
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => console.log("Audio play blocked"));
      setAudioState(1);
    } else if (audioState === 1) {
      // Play high volume
      audioRef.current.volume = 1.0;
      setAudioState(2);
    } else {
      // Pause
      audioRef.current.pause();
      setAudioState(0);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.4 }}
      className="bg-card absolute top-1/2 right-4 z-1 hidden -translate-y-1/2 items-center justify-center gap-1 rounded-full border border-neutral-300 px-1.5 py-1 shadow-sm sm:flex md:right-8 dark:border-neutral-800 dark:bg-neutral-900"
    >
      {/* Audio Button */}
      <button
        onClick={handleAudioToggle}
        className="relative flex h-6 w-6 items-center justify-center rounded-full text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
        aria-label="Toggle Audio"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.div
            key={audioState}
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 45 }}
            transition={{ duration: 0.15 }}
          >
            {audioState === 0 && <LuVolumeX className="h-4 w-4" />}
            {audioState === 1 && <LuVolume1 className="h-4 w-4" />}
            {audioState === 2 && <LuVolume2 className="h-4 w-4" />}
          </motion.div>
        </AnimatePresence>
      </button>

      {/* Theme Toggle */}
      <ThemeToggleBtn />
    </motion.div>
  );
}
