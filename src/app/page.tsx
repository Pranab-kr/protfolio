"use client";
import { Container } from "@/components/container";
import Projects from "@/components/projects/Projects";
import About from "@/components/About";
import Knowledge from "@/components/Knowledge";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SideScale from "@/components/SideScale";
import { motion } from "motion/react";

const page = () => {
  // Define staggered delays for each section
  const sectionDelays = {
    hero: 0,
    about: 0.2,
    projects: 0.4,
    knowledge: 0.6,
    contact: 0.8,
    footer: 1.0,
  };

  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="relative min-h-screen px-4 pt-16 pb-10 md:px-8 md:pt-20">
        <SideScale />

        {/* Hero - loads first */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: sectionDelays.hero }}
        >
          <Hero />
        </motion.div>

        {/* About - loads after Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: sectionDelays.about }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <About />
        </motion.div>

        {/* Projects - loads after About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: sectionDelays.projects }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Projects />
        </motion.div>

        {/* Knowledge - loads after Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: sectionDelays.knowledge }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Knowledge />
        </motion.div>

        {/* Contact - loads after Knowledge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: sectionDelays.contact }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <ContactSection />
        </motion.div>

        {/* Footer - loads last */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: sectionDelays.footer }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Footer />
        </motion.div>
      </Container>
    </div>
  );
};

export default page;
