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
    <div className="border-border border-t px-4 pt-8 pb-10 md:px-6">
      {/* Section Header */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-sm"
      >
        About
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-foreground text-2xl font-bold tracking-tight md:text-3xl"
      >
        Me
      </motion.h2>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start"
      >
        {/* Avatar */}
        <div className="shrink-0">
          <Image
            src="/samurai.png"
            alt="Profile"
            width={120}
            height={120}
            className="border-border rounded-lg border object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-foreground text-xl font-semibold">
              Pranab Kumar
            </h3>
            <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
              I&apos;m a Full Stack web developer and Open Source Contributor. I
              love building products to solve real-world problems. I&apos;m
              specialized in building MVPs.
            </p>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-foreground mb-3 text-sm font-semibold">
              Skills
            </h4>
            <div className="flex flex-wrap gap-2">
              <TooltipProvider delayDuration={100}>
                {skills.map((skill) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <div className="bg-muted/50 hover:bg-muted flex cursor-pointer items-center justify-center rounded-md p-2 transition-all hover:scale-110">
                        <skill.icon
                          className="size-5"
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
        className="mt-10"
      >
        <p className="text-muted-foreground text-sm">Featured</p>
        <h3 className="text-foreground text-xl font-bold">GitHub Activity</h3>

        {/* GitHub Calendar - Hidden Scrollbar and Slider */}
        <div className="border-border bg-card mt-4 overflow-hidden rounded-lg border p-8 [&_.react-activity-calendar__scroll-container]:overflow-visible [&_input[type='range']]:hidden">
          <GitHubCalendar
            username="Pranab-kr"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            theme={calendarTheme}
            colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
