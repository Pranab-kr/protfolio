"use client";

import React from "react";
import { motion } from "motion/react";
import Quote from "./Quote";
import Footer from "./Footer";
import { Container } from "./container";

const GlobalFooter = () => {
  return (
    <Container className="px-4 pb-10 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Quote />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Footer />
      </motion.div>
    </Container>
  );
};

export default GlobalFooter;
