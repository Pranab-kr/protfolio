"use client";
import { motion } from "motion/react";

const BgPro = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.3, ease: "easeInOut" }}
        className="bg-muted absolute inset-0 h-full w-full scale-[1.02]"
      >
        <div className="bg-border absolute -top-px -left-px h-1 w-1 rounded-full"></div>
        <div className="bg-border absolute -top-px -right-px h-1 w-1 rounded-full"></div>
        <div className="bg-border absolute -bottom-px -left-px h-1 w-1 rounded-full"></div>
        <div className="bg-border absolute -right-px -bottom-px h-1 w-1 rounded-full"></div>
      </motion.div>
    </>
  );
};

export default BgPro;
