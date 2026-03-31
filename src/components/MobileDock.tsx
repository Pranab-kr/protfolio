"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Dock, DockIcon } from "./ui/dock";
import { LuVolume2, LuVolumeX, LuVolume1, LuSun, LuMoon } from "react-icons/lu";
import { FiUser, FiFolder, FiMail, FiHome } from "react-icons/fi";
import { useTheme } from "next-themes";

// Add your songs here
const SONGS = ["/songs/song1.mp3", "/songs/song2.mp3"];

const getRandomSong = () => SONGS[Math.floor(Math.random() * SONGS.length)];

interface MobileDockProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MobileDock = ({ onNavClick }: MobileDockProps) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Audio state
  const [audioState, setAudioState] = useState<0 | 1 | 2>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setMounted(true);
    const randomSong = getRandomSong();
    audioRef.current = new Audio(randomSong);
    audioRef.current.loop = true;
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  const handleAudioToggle = () => {
    if (!audioRef.current) return;

    if (audioState === 0) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => console.log("Audio play blocked"));
      setAudioState(1);
    } else if (audioState === 1) {
      audioRef.current.volume = 1.0;
      setAudioState(2);
    } else {
      audioRef.current.pause();
      setAudioState(0);
    }
  };

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const navItems = [
    { title: "Home", href: "/", icon: FiHome },
    { title: "About", href: "#About", icon: FiUser },
    { title: "Projects", href: "/projects", icon: FiFolder },
    { title: "Contact", href: "/contact", icon: FiMail },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 sm:hidden">
      <Dock
        iconSize={36}
        iconMagnification={50}
        iconDistance={100}
        className="dark:bg-card h-14 gap-1 rounded-2xl border border-neutral-300 bg-neutral-100/90 px-2 backdrop-blur-md dark:border-neutral-800"
      >
        {/* Navigation Items */}
        {navItems.map((item) => (
          <DockIcon key={item.title} className="rounded-full">
            <Link
              href={item.href}
              onClick={(e) => onNavClick(e, item.href)}
              className="flex h-full w-full items-center justify-center text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            >
              <item.icon className="h-5 w-5" />
            </Link>
          </DockIcon>
        ))}

        {/* Separator */}
        <div className="mx-1 h-8 w-px bg-neutral-300 dark:bg-neutral-700" />

        {/* Audio Toggle */}
        <DockIcon className="rounded-full">
          <button
            onClick={handleAudioToggle}
            className="flex h-full w-full items-center justify-center text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
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
                {audioState === 0 && <LuVolumeX className="h-5 w-5" />}
                {audioState === 1 && <LuVolume1 className="h-5 w-5" />}
                {audioState === 2 && <LuVolume2 className="h-5 w-5" />}
              </motion.div>
            </AnimatePresence>
          </button>
        </DockIcon>

        {/* Theme Toggle */}
        <DockIcon className="rounded-full">
          <button
            onClick={toggleTheme}
            className="flex h-full w-full items-center justify-center text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
            aria-label="Toggle Theme"
          >
            {mounted && (
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={isDark ? "dark" : "light"}
                  initial={{ scale: 0, opacity: 0, rotate: -90 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  exit={{ scale: 0, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? (
                    <LuMoon className="h-5 w-5" />
                  ) : (
                    <LuSun className="h-5 w-5" />
                  )}
                </motion.div>
              </AnimatePresence>
            )}
          </button>
        </DockIcon>
      </Dock>
    </div>
  );
};

export default MobileDock;
