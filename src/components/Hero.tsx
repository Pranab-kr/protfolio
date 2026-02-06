"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { LuFileText, LuSend } from "react-icons/lu";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
  SiBun,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "./ui/button";

const techBadges = [
  {
    name: "TypeScript",
    icon: <SiTypescript className="size-3.5 text-[#3178C6]" />,
  },
  { name: "React", icon: <SiReact className="size-3.5 text-[#61DAFB]" /> },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-foreground size-3.5" />,
  },
  {
    name: "Bun",
    icon: <SiBun className="size-3.5 text-[#12110f] dark:text-[#fbf0df]" />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="size-3.5 text-[#4169E1]" />,
  },
];

const Hero = () => {
  return (
    <div className="px-2 pb-6 sm:px-4 sm:pb-8 md:px-6">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-foreground pt-8 text-xl font-bold tracking-tight sm:pt-10 sm:text-2xl md:pt-12 md:text-4xl"
      >
        Hi, I&apos;m Pranab 👋
      </motion.h1>

      {/* Description with tech badges */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-muted-foreground mt-3 max-w-2xl text-xs leading-relaxed sm:mt-4 sm:text-sm md:text-base"
      >
        <p className="flex flex-wrap items-center gap-1 sm:gap-1.5">
          <span>I build interactive web apps using</span>
          <TooltipProvider delayDuration={100}>
            {techBadges.map((tech, index) => (
              <span key={tech.name} className="inline-flex items-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="bg-muted/80 hover:bg-muted inline-flex cursor-default items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-medium transition-colors sm:gap-1.5 sm:px-2 sm:py-1 sm:text-xs">
                      {tech.icon}
                      <span className="text-foreground xs:inline hidden">
                        {tech.name}
                      </span>
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.name}</p>
                  </TooltipContent>
                </Tooltip>
                {index < techBadges.length - 1 && (
                  <span className="text-muted-foreground mx-0.5">,</span>
                )}
              </span>
            ))}
          </TooltipProvider>
          <span>.</span>
        </p>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="mt-4 flex flex-wrap gap-2 sm:mt-6 sm:gap-3"
      >
        <Button
          variant="outline"
          size="sm"
          className="h-auto px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
          asChild
        >
          <Link href="/resume.pdf" download="Pranab_Resume.pdf">
            <LuFileText className="size-3.5 sm:size-4" />
            Resume / CV
          </Link>
        </Button>

        <Button
          variant="default"
          size="sm"
          className="h-auto px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm"
          asChild
        >
          <Link href="/contact">
            <LuSend className="size-3.5 sm:size-4" />
            Get in touch
          </Link>
        </Button>
      </motion.div>
    </div>
  );
};

export default Hero;
