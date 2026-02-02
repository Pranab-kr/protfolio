import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProjectCaseStudyFrontmatter } from "@/types/project";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { LuGlobe, LuGithub } from "react-icons/lu";

interface ProjectContentProps {
  frontmatter: ProjectCaseStudyFrontmatter;
  content: string;
}

export function ProjectContent({ frontmatter, content }: ProjectContentProps) {
  const {
    title,
    description,
    image,
    technologies,
    github,
    live,
    timeline,
    role,
    team,
    status,
  } = frontmatter;

  const statusVariant =
    status === "completed"
      ? "default"
      : status === "in-progress"
        ? "secondary"
        : "outline";

  return (
    <article className="mx-auto max-w-4xl">
      {/* Hero Section */}
      <header className="mb-8 space-y-6">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-4">
          {/* Project Status and Technologies */}
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={statusVariant} className="text-sm">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </Badge>
            {technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{technologies.length - 3} more
              </Badge>
            )}
          </div>

          <h1 className="text-foreground text-4xl leading-tight font-bold lg:text-5xl">
            {title}
          </h1>

          <p className="text-muted-foreground text-xl">{description}</p>

          {/* Project Meta Information */}
          <div className="bg-muted/20 border-border grid gap-4 rounded-lg border p-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h5 className="text-muted-foreground text-sm font-semibold">
                Timeline
              </h5>
              <p className="text-foreground text-sm">{timeline}</p>
            </div>
            <div>
              <h5 className="text-muted-foreground text-sm font-semibold">
                Role
              </h5>
              <p className="text-foreground text-sm">{role}</p>
            </div>
            {team && (
              <div>
                <h5 className="text-muted-foreground text-sm font-semibold">
                  Team
                </h5>
                <p className="text-foreground text-sm">{team}</p>
              </div>
            )}
            <div>
              <h5 className="text-muted-foreground text-sm font-semibold">
                Status
              </h5>
              <Badge variant={statusVariant} className="text-xs">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {live && (
              <Button asChild>
                <Link
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <LuGlobe className="size-4" />
                  Live Demo
                </Link>
              </Button>
            )}
            {github && (
              <Button variant="outline" asChild>
                <Link
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <LuGithub className="size-4" />
                  Source Code
                </Link>
              </Button>
            )}
          </div>
        </div>

        <Separator />
      </header>

      {/* Technology Stack */}
      <div className="mb-8">
        <div className="bg-muted/20 border-border rounded-lg border p-4">
          <h3 className="text-foreground mb-3 text-lg font-semibold">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="bg-muted/50 text-foreground inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium"
              >
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MDX Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote
          source={content}
          components={{
            h1: ({ children, ...props }) => (
              <h1
                className="text-foreground mb-6 text-4xl font-bold"
                {...props}
              >
                {children}
              </h1>
            ),
            h2: ({ children, ...props }) => (
              <h2
                className="text-foreground mt-8 mb-4 text-3xl font-semibold"
                {...props}
              >
                {children}
              </h2>
            ),
            h3: ({ children, ...props }) => (
              <h3
                className="text-foreground mt-6 mb-3 text-2xl font-medium"
                {...props}
              >
                {children}
              </h3>
            ),
            p: ({ children, ...props }) => (
              <p className="text-muted-foreground mb-4 leading-7" {...props}>
                {children}
              </p>
            ),
            ul: ({ children, ...props }) => (
              <ul className="mb-4 ml-6 list-disc space-y-2" {...props}>
                {children}
              </ul>
            ),
            ol: ({ children, ...props }) => (
              <ol className="mb-4 ml-6 list-decimal space-y-2" {...props}>
                {children}
              </ol>
            ),
            li: ({ children, ...props }) => (
              <li className="text-muted-foreground leading-7" {...props}>
                {children}
              </li>
            ),
            pre: ({ children, ...props }) => (
              <pre
                className="bg-muted/30 border-border mb-4 overflow-x-auto rounded-lg border p-4 text-sm"
                {...props}
              >
                {children}
              </pre>
            ),
            code: ({ children, className, ...props }) => {
              if (className?.includes("language-")) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
              return (
                <code
                  className="bg-muted rounded px-2 py-1 font-mono text-sm"
                  {...props}
                >
                  {children}
                </code>
              );
            },
            blockquote: ({ children, ...props }) => (
              <blockquote
                className="border-primary text-muted-foreground mb-4 border-l-4 pl-4 italic"
                {...props}
              >
                {children}
              </blockquote>
            ),
            strong: ({ children, ...props }) => (
              <strong className="text-foreground font-semibold" {...props}>
                {children}
              </strong>
            ),
          }}
        />
      </div>
    </article>
  );
}
