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
            className="fixed top-0 left-0 z-50 h-full w-80 bg-white/95 shadow-2xl backdrop-blur-md md:hidden dark:bg-gray-900/95"
          >
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200/50 p-6 dark:border-gray-700/50">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Navigation
                </h2>
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
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
                        className="flex w-full rounded-lg px-4 py-3 text-left text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Footer with theme toggle */}
              <div className="border-t border-gray-200/50 p-6 dark:border-gray-700/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Theme
                  </span>
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
