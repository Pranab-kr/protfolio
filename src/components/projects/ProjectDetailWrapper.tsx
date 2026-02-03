"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ProjectDetailWrapperProps {
  children: ReactNode;
}

export function ProjectDetailWrapper({ children }: ProjectDetailWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="px-8">{children}</div>
    </motion.div>
  );
}
