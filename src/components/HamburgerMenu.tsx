"use client";

import { motion } from "motion/react";

interface HamburgerMenuProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerMenu = ({ isOpen, onClick }: HamburgerMenuProps) => {
  return (
    <button
      onClick={onClick}
      className="relative z-50 flex h-10 w-10 flex-col items-center justify-center rounded-lg bg-white/40 backdrop-blur-md hover:bg-white/60 md:hidden dark:bg-black/40 dark:hover:bg-black/60"
      aria-label="Toggle menu"
    >
      <div className="flex h-5 w-5 flex-col items-center justify-center">
        {/* Top line */}
        <motion.div
          animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="h-0.5 w-5 bg-gray-600 dark:bg-gray-300"
        />

        {/* Middle line */}
        <motion.div
          animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mt-1 h-0.5 w-5 bg-gray-600 dark:bg-gray-300"
        />

        {/* Bottom line */}
        <motion.div
          animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="mt-1 h-0.5 w-5 bg-gray-600 dark:bg-gray-300"
        />
      </div>
    </button>
  );
};

export default HamburgerMenu;
