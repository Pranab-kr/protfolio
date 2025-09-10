"use client";

import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/container";
import { motion } from "motion/react";
const page = () => {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[110vh] p-8 md:pt-20 md:pb-10">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-primary mt-4 text-2xl font-bold tracking-tighter drop-shadow-xs drop-shadow-neutral-200 md:text-4xl"
        >
          Contact Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-secondary text-md md:text-md max-w-lg pt-4 leading-normal"
        >
          I'm open to freelance offers. Reach out to me to inquire about
          potential projects.
        </motion.p>
        <ContactForm />
      </Container>
    </div>
  );
};

export default page;
