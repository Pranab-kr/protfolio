"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { X } from "lucide-react";
import ThemeToggleBtn from "./ui/ThemeToggleBtn";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { title: string; href: string }[];
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const MobileSidebar = ({
  isOpen,
  onClose,
  navItems,
  onNavClick,
}: MobileSidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm md:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="bg-background/95 fixed top-0 left-0 z-50 h-full w-80 shadow-2xl backdrop-blur-md md:hidden"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="border-border/50 flex items-center justify-between border-b p-6">
                <h2 className="text-foreground text-lg font-semibold">
                  Navigation
                </h2>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:bg-muted hover:text-foreground rounded-lg p-2"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                <nav className="space-y-2">
                  {navItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 + 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          onNavClick(e, item.href);
                          onClose();
                        }}
                        className="text-muted-foreground hover:bg-muted hover:text-foreground flex w-full rounded-lg px-4 py-3 text-left"
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Footer with theme toggle */}
              <div className="border-border/50 border-t p-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">Theme</span>
                  <ThemeToggleBtn />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileSidebar;
