"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

const About = () => {
  return (
    <div id="About" className="border-t border-neutral-200 px-6 pt-8 pb-10">
      <motion.h2
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-primary text-xl font-bold tracking-tight md:text-2xl"
      >
        About
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-secondary max-w-3xl pt-4 text-sm md:text-base"
      >
        I like exploring computer science concepts, especially their theoretical
        aspects. I&apos;m currently learning Web 2.0 stuff.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-primary pt-8 text-xl font-bold tracking-tight md:text-2xl"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex items-start gap-4 pt-4"
      >
        <Image
          src="/hit.png"
          alt="Haldia Institute of Technology Logo"
          width={60}
          height={60}
          className="aspect-square rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-primary text-base font-semibold">
                Haldia Institute of Technology
              </h3>
              <p className="text-secondary text-sm">
                Bachelor of Technology in Computer science and engineering
              </p>
            </div>
            <span className="text-secondary text-sm">2024 - 2028</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
