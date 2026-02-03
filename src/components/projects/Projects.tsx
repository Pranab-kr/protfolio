"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ProjectCard, Project } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiFramer,
} from "react-icons/si";

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React and Node.js featuring real-time updates and seamless checkout",
    image: "/keyBoard.png",
    link: "#",
    github: "https://github.com",
    slug: "ecommerce-platform",
    technologies: [
      { name: "React", icon: <SiReact className="size-full text-[#61DAFB]" /> },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="size-full text-[#339933]" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="size-full text-[#47A248]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="size-full text-[#06B6D4]" />,
      },
    ],
    isWorking: true,
  },
  {
    title: "Task Management App",
    description:
      "An AI-powered task management app that helps teams collaborate efficiently with smart suggestions",
    image: "/keyBoard.png",
    link: "#",
    github: "https://github.com",
    slug: "task-management",
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-foreground size-full" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="size-full text-[#3178C6]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="size-full text-[#06B6D4]" />,
      },
      {
        name: "Framer Motion",
        icon: <SiFramer className="size-full text-[#0055FF]" />,
      },
    ],
    isWorking: true,
  },
  {
    title: "Social Dashboard",
    description:
      "A responsive social media dashboard with analytics, post scheduling, and engagement tracking features",
    image: "/keyBoard.png",
    link: "#",
    slug: "social-dashboard",
    technologies: [
      { name: "React", icon: <SiReact className="size-full text-[#61DAFB]" /> },
      {
        name: "TypeScript",
        icon: <SiTypescript className="size-full text-[#3178C6]" />,
      },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="size-full text-[#339933]" />,
      },
    ],
    isWorking: false,
  },
  {
    title: "Portfolio Template",
    description:
      "Portfolio website template with beautiful animations and dark mode support built with Next.js",
    image: "/keyBoard.png",
    link: "#",
    github: "https://github.com",
    slug: "portfolio-template",
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-foreground size-full" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="size-full text-[#06B6D4]" />,
      },
      {
        name: "Framer Motion",
        icon: <SiFramer className="size-full text-[#0055FF]" />,
      },
    ],
    isWorking: true,
  },
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="border-border border-y px-2 py-6 sm:px-4 sm:py-8 md:px-6"
      id="Projects-Section"
    >
      {/* Section Heading */}
      <div className="mb-6 sm:mb-8">
        <p className="text-secondary text-xs sm:text-sm">Featured</p>
        <h2 className="text-foreground text-xl font-bold sm:text-2xl">
          Projects
        </h2>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 md:gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title + idx}
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 0.3,
              delay: idx * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

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
    </motion.div>
  );
};

export default Projects;
