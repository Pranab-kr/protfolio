import type { Project } from "@/components/projects/ProjectCard";
import { TechIcons } from "@/components/projects/TechIcons";

export const projects: Project[] = [
  {
    title: "Resumine",
    description:
      "Resumine is an AI-powered resume analyzer that helps job seekers optimize their resumes for Applicant Tracking Systems (ATS). Here's what makes it impressive:",
    image: "/resumine.png",
    link: "https://resumine.vercel.app/",
    github: "https://github.com/Pranab-kr/resumine",
    slug: "resumine-project",
    technologies: [
      {
        name: "Next.js",
        icon: TechIcons.NextJs,
      },
      {
        name: "Tailwind CSS v4",
        icon: TechIcons.TailwindCSS,
      },
      {
        name: "Claude Ai",
        icon: TechIcons.Claude,
      },
      {
        name: "Zustand",
        icon: TechIcons.Zustand,
      },
    ],
    isWorking: true,
  },
  {
    title: "AniLog",
    description:
      "A cozy, modern web app for tracking anime, manga, and manhwa collections with rich media management and responsive UI.",
    image: "/anilog.png",
    link: "https://anilog-chi.vercel.app",
    github: "https://github.com/Pranab-kr/anilog",
    slug: "anilog",
    technologies: [
      {
        name: "Next.js",
        icon: TechIcons.NextJs,
      },
      {
        name: "TypeScript",
        icon: TechIcons.TypeScript,
      },
      {
        name: "Tailwind CSS",
        icon: TechIcons.TailwindCSS,
      },
      {
        name: "PostgreSQL",
        icon: TechIcons.PostgreSQL,
      },
    ],
    isWorking: true,
  },
  {
    title: "Chatty",
    description:
      "A modern real-time chat application with rich UI, theming, and analytics, built on React 19 and Zustand with Socket.io-powered messaging.",
    image: "/chat-app.png",
    link: "https://chat-app-uunl.onrender.com",
    github: "https://github.com/Pranab-kr/chat-App",
    slug: "chat-app",
    technologies: [
      { name: "React", icon: TechIcons.React },
      {
        name: "Socket.io",
        icon: TechIcons.SocketIo,
      },
      {
        name: "MongoDB",
        icon: TechIcons.MongoDB,
      },
      {
        name: "Tailwind CSS",
        icon: TechIcons.TailwindCSS,
      },
    ],
    isWorking: true,
  },
  {
    title: "Project Management Backend",
    description:
      "An Express REST API for managing project workflows, authentication, files, and team communication.",
    image: "/keyBoard.png",
    link: "https://github.com/Pranab-kr/Project-Management",
    github: "https://github.com/Pranab-kr/Project-Management",
    slug: "proj-manage-backend",
    technologies: [
      {
        name: "Express",
        icon: TechIcons.Express,
      },
      {
        name: "Node.js",
        icon: TechIcons.NodeJs,
      },
      {
        name: "MongoDB",
        icon: TechIcons.MongoDB,
      },
    ],
    isWorking: true,
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
        icon: TechIcons.NextJs,
      },
      {
        name: "Tailwind CSS",
        icon: TechIcons.TailwindCSS,
      },
      {
        name: "Framer Motion",
        icon: TechIcons.FramerMotion,
      },
    ],
    isWorking: true,
  },
];
