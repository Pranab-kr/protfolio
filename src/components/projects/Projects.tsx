"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      src: "/onisun.jpg",
      href: "#",
      description:
        "A modern e-commerce platform built with React and Node.js, featuring ",
    },
    {
      title: "Project Two",
      src: "/onisun.jpg",
      href: "#",
      description:
        "An AI-powered task management app that helps teams collaborate efficiently ",
    },
    {
      title: "Project Three",
      src: "/onisun.jpg",
      href: "#",
      description:
        "A responsive social media dashboard with analytics, post scheduling, and ",
    },
    // {
    //   title: "Project four",
    //   src: "/onisun.jpg",
    //   href: "#",
    //   description:
    //     "A full-stack fitness tracking application with personalized workout plans,.",
    // },
  ];

  return (
    <div className="py-2">
      <p className="text-secondary max-w-lg pt-4 text-sm md:text-sm">
        I Love Building Web apps and Projects that can Impact millions of lives.{" "}
        <br />
        Here are a few of my recent projects.
      </p>
      <div className="grid grid-cols-1 gap-10 py-5 md:grid-cols-3">
        {projects.slice(0, 3).map((project, idx) => (
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 10,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeInOut",
            }}
            className="group"
            key={project.title}
          >
            <Link href={project.href}>
              <Image
                src={project.src}
                alt={project.title}
                height={500}
                width={500}
                className="aspect-square rounded-xl object-cover group-hover:scale-[1.02]"
              />
              <h2 className="z-20 pt-6 font-medium tracking-tight text-neutral-500 dark:text-neutral-300">
                {project.title}
              </h2>
              <p className="max-w-xs pt-3 text-sm text-neutral-500 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
