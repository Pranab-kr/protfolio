"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import BgPro from "../BgPro";
import SvgHover from "./SvgHover ";
import { TextAnimate } from "@/components/magicui/text-animate";

const Projects = () => {
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
  ];
  const projectDescription: string = "I Love Building Web apps.";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="border-y border-neutral-200 px-6 py-8"
      id="Projects-Section"
    >
      <div className="text-primary md:text-md relative w-fit py-1 text-sm">
        <span>
          <BgPro />
        </span>

        <TextAnimate
          animation="blurInUp"
          once={true}
          by="word"
          duration={0.2}
          delay={0.3}
        >
          {projectDescription}
        </TextAnimate>
      </div>

      <div className="grid grid-cols-1 gap-6 py-5 md:grid-cols-3">
        {projects.map((project, idx) => (
          <motion.div
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
  );
};

export default Projects;
