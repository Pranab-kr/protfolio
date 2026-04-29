"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projdata";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  return (
    <div
      className="border-border border-y px-2 py-6 sm:px-4 sm:py-8 md:px-6"
      id="Projects-Section"
    >
      {/* Section Heading */}
      <div className="mb-6 sm:mb-8">
        <p className="text-secondary text-xs sm:text-sm">Featured</p>
        <h2 className="font-editorial text-foreground text-xl font-bold sm:text-2xl">
          Projects
        </h2>
      </div>

      {/* Project Grid */}
      <motion.div
        className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project, idx) => (
          <motion.div key={project.title + idx} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>

      {/* Show All Button */}
      <div className="mt-6 flex justify-center sm:mt-8">
        <Button
          variant="outline"
          size="sm"
          className="h-auto px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
          asChild
        >
          <Link href="/projects">Show all projects</Link>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
