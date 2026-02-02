"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { LuFileText, LuSend } from "react-icons/lu";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import { SiBun } from "react-icons/si";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa6";
import { SiHashnode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
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

const socialLinks = [
  { name: "X (Twitter)", icon: FaXTwitter, href: "https://x.com" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "https://linkedin.com" },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/Pranab-kr" },
  { name: "YouTube", icon: FaYoutube, href: "https://youtube.com" },
  { name: "Instagram", icon: FaInstagram, href: "https://instagram.com" },
  { name: "Pinterest", icon: FaPinterest, href: "https://pinterest.com" },
  { name: "Hashnode", icon: SiHashnode, href: "https://hashnode.com" },
  { name: "Email", icon: HiOutlineMail, href: "mailto:hello@pranab.dev" },
];

const Hero = () => {
  return (
    <div className="px-4 pb-8 md:px-6">
      {/* Avatar with status indicator */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="relative mb-6 inline-block"
      >
        <Image
          src="/samurai.png"
          alt="Pranab"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="border-background absolute right-1 bottom-1 size-3 rounded-full border-2 bg-green-500" />
      </motion.div> */}

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="text-foreground pt-12 text-2xl font-bold tracking-tight md:text-4xl"
      >
        Hi, I&apos;m Pranab 👋
        {/* <span className="text-muted-foreground font-normal">—</span>{" "}
        <span className="text-muted-foreground font-normal">
          A Full Stack web developer.
        </span> */}
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
        {/* <p className="mt-2">
          With a focus on{" "}
          <span className="text-foreground font-medium">UI</span> design.
          Enthusiastic about{" "}
          <span className="text-foreground font-medium">Three.js</span>, driven
          by a keen eye for design.
        </p> */}
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

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="mt-6 flex flex-wrap items-center gap-4"
      >
        {/* <TooltipProvider delayDuration={100}>
          {socialLinks.map((social) => (
            <Tooltip key={social.name}>
              <TooltipTrigger asChild>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="size-5" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider> */}
      </motion.div>
    </div>
  );
};

export default Hero;
