"use client";

import { ContactForm } from "@/components/ContactForm";
import { Container } from "@/components/container";
import { motion } from "motion/react";
const page = () => {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[110vh] p-2 px-4 pt-14 pb-8 sm:p-4 sm:px-8 sm:pt-16 sm:pb-10 md:p-8 md:px-28 md:pt-20">
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-primary mt-2 px-2 text-xl font-bold tracking-tighter drop-shadow-xs drop-shadow-neutral-200 sm:mt-4 sm:px-4 sm:text-2xl md:px-6 md:text-4xl"
        >
          Contact Me
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-secondary max-w-lg px-2 pt-3 text-sm leading-normal sm:px-4 sm:pt-4 sm:text-base md:px-6 md:text-base"
        >
          I&apos;m open to freelance offers. Reach out to me to inquire about
          potential projects.
        </motion.p>
        <ContactForm />
      </Container>
    </div>
  );
};

export default page;
