"use client";
import { Container } from "@/components/container";
import Projects from "@/components/projects/Projects";
import About from "@/components/About";
import Knowledge from "@/components/Knowledge";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Setup from "@/components/Setup";
import { motion } from "motion/react";

const page = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="relative min-h-screen px-2 pt-14 pb-8 shadow-xl sm:px-4 sm:pt-16 sm:pb-10 md:px-8 md:pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={sectionVariants}>
            <Hero />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <About />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <Projects />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <Knowledge />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <AboutMe />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <Setup />
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default page;
