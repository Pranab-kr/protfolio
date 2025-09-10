"use client";
import { motion } from "motion/react";

const BgPro = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.3, ease: "easeInOut" }}
        className="absolute inset-0 h-full w-full scale-[1.02] bg-neutral-100"
      >
        <div className="absolute -top-px -left-px h-1 w-1 rounded-full bg-neutral-200"></div>
        <div className="absolute -top-px -right-px h-1 w-1 rounded-full bg-neutral-200"></div>
        <div className="absolute -bottom-px -left-px h-1 w-1 rounded-full bg-neutral-200"></div>
        <div className="absolute -right-px -bottom-px h-1 w-1 rounded-full bg-neutral-200"></div>
      </motion.div>
    </>
  );
};

export default BgPro;
