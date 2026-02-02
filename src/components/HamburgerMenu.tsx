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
      className="bg-background/40 hover:bg-background/60 relative z-50 flex h-10 w-10 flex-col items-center justify-center rounded-lg backdrop-blur-md md:hidden"
      aria-label="Toggle menu"
    >
      <div className="flex h-5 w-5 flex-col items-center justify-center">
        {/* Top line */}
        <motion.div
          animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-muted-foreground h-0.5 w-5"
        />

        {/* Middle line */}
        <motion.div
          animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-muted-foreground mt-1 h-0.5 w-5"
        />

        {/* Bottom line */}
        <motion.div
          animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="bg-muted-foreground mt-1 h-0.5 w-5"
        />
      </div>
    </button>
  );
};

export default HamburgerMenu;
