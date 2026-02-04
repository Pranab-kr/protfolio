"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import { LuGlobe, LuGithub, LuArrowRight } from "react-icons/lu";

export interface Technology {
  name: string;
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  technologies: Technology[];
  isWorking?: boolean;
  slug?: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group border-border bg-card hover:shadow-minimal h-full w-full overflow-hidden p-0 shadow-none transition-all">
      <CardHeader className="p-0">
        <div className="relative aspect-video overflow-hidden">
          <Image
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
          />
        </div>
      </CardHeader>

      <CardContent className="px-3 pt-3 sm:px-4 sm:pt-4 md:px-6">
        <div className="space-y-3 sm:space-y-4">
          {/* Project Header - Title and Icons */}
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <h3 className="text-foreground group-hover:text-primary text-base leading-tight font-semibold transition-colors sm:text-lg">
              {project.title}
            </h3>
            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="text-muted-foreground hover:text-foreground flex size-5 items-center justify-center transition-colors sm:size-6"
                      href={project.link}
                      target="_blank"
                    >
                      <LuGlobe className="size-4 sm:size-5" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View Website</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {project.github && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        className="text-muted-foreground hover:text-foreground flex size-5 items-center justify-center transition-colors sm:size-6"
                        href={project.github}
                        target="_blank"
                      >
                        <LuGithub className="size-4 sm:size-5" />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-secondary line-clamp-2 text-xs sm:text-sm">
            {project.description}
          </p>

          {/* Technologies */}
          <div>
            <h4 className="text-muted-foreground mb-1.5 text-[10px] font-medium sm:mb-2 sm:text-xs">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <TooltipProvider>
                {project.technologies.map((technology, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div className="size-5 transition-all duration-300 hover:scale-110 hover:cursor-pointer sm:size-6">
                        {technology.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{technology.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 p-3 pt-0 sm:flex-row sm:justify-between sm:p-4 sm:pt-0 md:p-6 md:pt-0">
        <div
          className={`flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] sm:px-2 sm:py-1 sm:text-xs ${
            project.isWorking !== false
              ? "bg-green-500/10 text-green-600 dark:text-green-400"
              : "bg-red-500/10 text-red-600 dark:text-red-400"
          }`}
        >
          {project.isWorking !== false ? (
            <>
              <div className="size-1.5 animate-pulse rounded-full bg-green-500 sm:size-2" />
              <span className="xs:inline hidden">All Systems Operational</span>
              <span className="xs:hidden">Operational</span>
            </>
          ) : (
            <>
              <div className="size-1.5 animate-pulse rounded-full bg-red-500 sm:size-2" />
              Building
            </>
          )}
        </div>
        <Link
          href={project.slug ? `/projects/${project.slug}` : project.link}
          target={project.slug ? undefined : "_blank"}
          className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-xs underline-offset-4 transition-colors hover:underline sm:text-sm"
        >
          View Details <LuArrowRight className="size-3.5 sm:size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
