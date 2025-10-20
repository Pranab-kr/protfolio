"use client";
import { motion } from "motion/react";
import Image from "next/image";

const SvgHover = () => {
  const technologies = [
    {
      name: "React",
      src: "/react.svg",
      color: "hover:bg-blue-50",
    },
    {
      name: "Next.js",
      src: "/nextdotjs.svg",
      color: "hover:bg-gray-50",
    },
    {
      name: "Tailwind CSS",
      src: "/tailwindcss.svg",
      color: "hover:bg-cyan-50",
    },
  ];

  return (
    <div className="flex items-center py-4">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: index * 0.2,
            ease: "easeOut",
          }}
          // viewport={{ once: true }}
          className={`group relative flex h-8 cursor-pointer items-center overflow-hidden rounded-full border border-neutral-200 bg-white shadow-sm transition-all duration-300 ease-out hover:pr-3 ${tech.color} `}
          style={{
            marginLeft: index > 0 ? "-6px" : "0px",
            zIndex: index + 1,
            width: "32px",
          }}
          onMouseEnter={(e) => {
            const element = e.currentTarget;
            const textWidth =
              element.querySelector(".tech-name")?.scrollWidth || 0;
            element.style.width = `${32 + textWidth + 20}px`;
            element.style.zIndex = "10";
          }}
          onMouseLeave={(e) => {
            const element = e.currentTarget;
            element.style.width = "32px";
            element.style.zIndex = (index + 1).toString();
          }}
        >
          <div className="flex items-center">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
              <Image
                src={tech.src}
                alt={tech.name}
                width={16}
                height={16}
                className="h-4 w-4"
              />
            </div>
            <span className="tech-name ml-2 text-xs font-medium whitespace-nowrap text-neutral-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {tech.name}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SvgHover;
