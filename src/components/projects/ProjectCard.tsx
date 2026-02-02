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

      <CardContent className="px-4 pt-4 md:px-6">
        <div className="space-y-4">
          {/* Project Header - Title and Icons */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-foreground group-hover:text-primary text-lg leading-tight font-semibold transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      className="text-muted-foreground hover:text-foreground flex size-6 items-center justify-center transition-colors"
                      href={project.link}
                      target="_blank"
                    >
                      <LuGlobe className="size-5" />
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
                        className="text-muted-foreground hover:text-foreground flex size-6 items-center justify-center transition-colors"
                        href={project.github}
                        target="_blank"
                      >
                        <LuGithub className="size-5" />
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
          <p className="text-secondary line-clamp-2 text-sm">
            {project.description}
          </p>

          {/* Technologies */}
          <div>
            <h4 className="text-muted-foreground mb-2 text-xs font-medium">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              <TooltipProvider>
                {project.technologies.map((technology, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <div className="size-6 transition-all duration-300 hover:scale-110 hover:cursor-pointer">
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

      <CardFooter className="flex justify-between p-4 pt-0 md:p-6 md:pt-0">
        <div
          className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
            project.isWorking !== false
              ? "bg-green-500/10 text-green-600 dark:text-green-400"
              : "bg-red-500/10 text-red-600 dark:text-red-400"
          }`}
        >
          {project.isWorking !== false ? (
            <>
              <div className="size-2 animate-pulse rounded-full bg-green-500" />
              All Systems Operational
            </>
          ) : (
            <>
              <div className="size-2 animate-pulse rounded-full bg-red-500" />
              Building
            </>
          )}
        </div>
        <Link
          href={project.slug ? `/projects/${project.slug}` : project.link}
          target={project.slug ? undefined : "_blank"}
          className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm underline-offset-4 transition-colors hover:underline"
        >
          View Details <LuArrowRight className="size-4" />
        </Link>
      </CardFooter>
    </Card>
  );
}
