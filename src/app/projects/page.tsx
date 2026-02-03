"use client";

import { Container } from "@/components/container";
import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { ProjectCard, Project } from "@/components/projects/ProjectCard";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiFramer,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React and Node.js featuring real-time updates and seamless checkout experience.",
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
      "An AI-powered task management app that helps teams collaborate efficiently with smart suggestions and analytics.",
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
      "A responsive social media dashboard with analytics, post scheduling, and engagement tracking features.",
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
      "Portfolio website template with beautiful animations and dark mode support built with Next.js.",
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
  {
    title: "Blog Platform",
    description:
      "A full-stack blog platform with markdown support, SEO optimization, and a powerful admin dashboard.",
    image: "/keyBoard.png",
    link: "#",
    github: "https://github.com",
    technologies: [
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-foreground size-full" />,
      },
      {
        name: "Prisma",
        icon: <SiPrisma className="text-foreground size-full" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="size-full text-[#4169E1]" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="size-full text-[#06B6D4]" />,
      },
    ],
    isWorking: true,
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat application with end-to-end encryption, file sharing, and video call capabilities.",
    image: "/keyBoard.png",
    link: "#",
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
        name: "TypeScript",
        icon: <SiTypescript className="size-full text-[#3178C6]" />,
      },
    ],
    isWorking: false,
  },
];

type FilterType = "all" | "working" | "building";

const ProjectsPage = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const workingCount = useMemo(
    () => projects.filter((p) => p.isWorking !== false).length,
    []
  );
  const buildingCount = useMemo(
    () => projects.filter((p) => p.isWorking === false).length,
    []
  );

  const filteredProjects = useMemo(() => {
    if (filter === "working") {
      return projects.filter((p) => p.isWorking !== false);
    }
    if (filter === "building") {
      return projects.filter((p) => p.isWorking === false);
    }
    return projects;
  }, [filter]);

  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="min-h-screen w-full max-w-4xl px-2 pt-14 pb-8 sm:px-4 sm:pt-16 sm:pb-10 md:px-8 md:pt-24">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 text-center sm:mb-8"
        >
          <h1 className="text-foreground mb-3 text-2xl font-bold sm:mb-4 sm:text-4xl md:text-5xl">
            Projects
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
            My projects and work across different technologies and domains.
          </p>
        </motion.div>

        <Separator className="mb-6 sm:mb-8" />

        {/* Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mb-6 sm:mb-8"
        >
          <h2 className="text-foreground mb-3 px-2 text-base font-semibold sm:mb-4 sm:px-6 sm:text-lg">
            Filter by Status
          </h2>
          <div className="flex flex-wrap gap-2 px-2 sm:gap-3 sm:px-4">
            <Button
              variant={filter === "working" ? "default" : "outline"}
              size="sm"
              className="h-auto rounded-full px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
              onClick={() =>
                setFilter(filter === "working" ? "all" : "working")
              }
            >
              Working ({workingCount})
            </Button>
            <Button
              variant={filter === "building" ? "default" : "outline"}
              size="sm"
              className="h-auto rounded-full px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
              onClick={() =>
                setFilter(filter === "building" ? "all" : "building")
              }
            >
              Building ({buildingCount})
            </Button>
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h2 className="text-foreground mb-4 px-2 text-lg font-bold sm:mb-6 sm:px-6 sm:text-xl">
            {filter === "all"
              ? "All Projects"
              : filter === "working"
                ? "Working Projects"
                : "Building Projects"}{" "}
            <span className="text-muted-foreground text-sm font-normal sm:text-base">
              ({filteredProjects.length} projects)
            </span>
          </h2>

          {/* Project Grid */}
          <div className="grid grid-cols-1 gap-4 px-2 sm:gap-6 sm:px-6 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title + idx}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.05,
                  ease: "easeOut",
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-muted-foreground py-8 text-center text-sm sm:py-12 sm:text-base">
              No projects found with the selected filter.
            </div>
          )}
        </motion.div>
      </Container>
    </div>
  );
};

export default ProjectsPage;
