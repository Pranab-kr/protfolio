"use client";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="px-4 pb-8 md:px-6">
      <motion.h1
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-primary mt-4 text-2xl font-bold tracking-tighter drop-shadow-xs drop-shadow-neutral-200 md:text-4xl"
      >
        Hi, I&apos;m Pranab 🤘
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-secondary max-w-full pt-4 text-sm md:text-sm"
      >
        I&apos;m a Software engineer with a passion for building web
        applications.
        {/* and I love working with the latest technologies. */}
      </motion.p>
    </div>
  );
};

export default Hero;
