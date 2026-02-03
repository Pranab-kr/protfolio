"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiJavascript,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const skills = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiNextdotjs, name: "Next.js", color: "currentColor" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiGit, name: "Git", color: "#F05032" },
];

const AboutMe = () => {
  const { resolvedTheme } = useTheme();

  // Custom theme for the GitHub calendar
  const calendarTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <div className="border-border border-t px-2 pt-6 pb-8 sm:px-4 sm:pt-8 sm:pb-10 md:px-6">
      {/* Section Header */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-xs sm:text-sm"
      >
        About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-foreground text-xl font-bold tracking-tight sm:text-2xl md:text-3xl"
      >
        Me
      </motion.h2>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-4 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-start sm:gap-6"
      >
        {/* Avatar */}
        <div className="shrink-0">
          <Image
            src="/samurai.png"
            alt="Profile"
            width={120}
            height={120}
            className="border-border h-20 w-20 rounded-lg border object-cover sm:h-[100px] sm:w-[100px] md:h-[120px] md:w-[120px]"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3 sm:space-y-4">
          <div>
            <h3 className="text-foreground text-lg font-semibold sm:text-xl">
              Pranab Kumar
            </h3>
            <p className="text-muted-foreground mt-1.5 text-xs leading-relaxed sm:mt-2 sm:text-sm">
              I&apos;m a Full Stack web developer and Open Source Contributor. I
              love building products to solve real-world problems. I&apos;m
              specialized in building MVPs.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-foreground mb-2 text-xs font-semibold sm:mb-3 sm:text-sm">
              Skills
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <TooltipProvider delayDuration={100}>
                {skills.map((skill) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <div className="bg-muted/50 hover:bg-muted flex cursor-pointer items-center justify-center rounded-md p-1.5 transition-all hover:scale-110 sm:p-2">
                        <skill.icon
                          className="size-4 sm:size-5"
                          style={{ color: skill.color }}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </motion.div>

      {/* GitHub Activity Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-8 sm:mt-10"
      >
        <p className="text-muted-foreground text-xs sm:text-sm">Featured</p>
        <h3 className="text-foreground text-lg font-bold sm:text-xl">
          GitHub Activity
        </h3>

        {/* GitHub Calendar - Hidden Scrollbar and Slider */}
        <div className="border-border bg-card mt-3 overflow-x-auto rounded-lg border p-3 sm:mt-4 sm:p-4 md:p-8 [&_.react-activity-calendar__scroll-container]:overflow-visible [&_input[type='range']]:hidden">
          <GitHubCalendar
            username="Pranab-kr"
            blockSize={10}
            blockMargin={3}
            fontSize={10}
            theme={calendarTheme}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
