"use client";
import { Container } from "@/components/container";
import SideScale from "@/components/SideScale";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import SvgHover from "@/components/projects/SvgHover ";
import { TextAnimate } from "@/components/magicui/text-animate";

const page = () => {
  const projects = [
    {
      title: "Project One",
      src: "/keyBoard.png",
      href: "#",
      description: "A modern e-commerce platform built with React and Node.js",
    },
    {
      title: "Project Two",
      src: "/keyBoard.png",
      href: "#",
      description:
        "An AI-powered task management app that helps teams collaborate.",
    },
    {
      title: "Project Three",
      src: "/keyBoard.png",
      href: "#",
      description:
        "A responsive social media dashboard with analytics, post scheduling, and ",
    },
    {
      title: "Project One",
      src: "/keyBoard.png",
      href: "#",
      description: "A modern e-commerce platform built with React and Node.js",
    },
    {
      title: "Project Two",
      src: "/keyBoard.png",
      href: "#",
      description:
        "An AI-powered task management app that helps teams collaborate.",
    },
    {
      title: "Project Three",
      src: "/keyBoard.png",
      href: "#",
      description:
        "A responsive social media dashboard with analytics, post scheduling, and ",
    },
  ];
  const projectDescription: string =
    "I Love Building Web apps. Here's a showcase of my best works.";

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[110vh] p-4 pt-16 pb-10 md:p-8 md:pt-20">
        <SideScale />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="border-y border-neutral-200 px-6 py-8"
          id="Projects-Section"
        >
          <motion.h1
            initial={{ opacity: 0, filter: "blur(20px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-primary mt-4 pb-4 text-2xl font-bold tracking-tighter drop-shadow-xs drop-shadow-neutral-200 md:text-4xl"
          >
            My Projects
          </motion.h1>
          <div className="text-primary md:text-md relative w-fit max-w-xs py-1 text-sm">
            <TextAnimate
              animation="blurInUp"
              once={true}
              by="word"
              duration={0.2}
              delay={0.2}
            >
              {projectDescription}
            </TextAnimate>
          </div>

          <div className="grid grid-cols-1 gap-4 py-5 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
            {projects.map((project, idx) => (
              <motion.div
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  transition: { duration: 0.3, ease: "easeInOut" },
                }}
                className="group hover:shadow-minimal rounded-3xl transition-shadow duration-300"
                key={project.title}
              >
                <Link href={project.href}>
                  <Image
                    src={project.src}
                    alt={project.title}
                    height={500}
                    width={500}
                    className="aspect-square rounded-xl object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.02]"
                  />
                  <div className="pb-4 transition-all duration-300 ease-in-out group-hover:pl-[14px]">
                    <h2 className="z-20 pt-6 font-medium tracking-tight text-neutral-500 dark:text-neutral-300">
                      {project.title}
                    </h2>
                    <p className="max-w-sm pt-3 text-xs text-neutral-500 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <SvgHover />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default page;
