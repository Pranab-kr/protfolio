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
    <div className="px-4 pb-8 md:px-6">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-foreground pt-12 text-2xl font-bold tracking-tight md:text-4xl"
      >
        Hi, I&apos;m Pranab 👋
      </motion.h1>

      {/* Description with tech badges */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-muted-foreground mt-4 max-w-2xl text-sm leading-relaxed md:text-base"
      >
        <p className="flex flex-wrap items-center gap-1.5">
          <span>I build interactive web apps using</span>
          <TooltipProvider delayDuration={100}>
            {techBadges.map((tech, index) => (
              <span key={tech.name} className="inline-flex items-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="bg-muted/80 hover:bg-muted inline-flex cursor-default items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-colors">
                      {tech.icon}
                      <span className="text-foreground">{tech.name}</span>
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
        className="mt-6 flex flex-wrap gap-3"
      >
        <Link
          href="/resume.pdf"
          target="_blank"
          className="border-border text-foreground hover:bg-muted inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition-colors"
        >
          <LuFileText className="size-4" />
          Resume / CV
        </Link>
        <Link
          href="/contact"
          className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors"
        >
          <LuSend className="size-4" />
          Get in touch
        </Link>
      </motion.div>
    </div>
  );
};

export default Hero;
