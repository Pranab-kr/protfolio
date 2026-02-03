"use client";
import { motion } from "motion/react";
import BgPro from "./BgPro";
import { TextAnimate } from "@/components/magicui/text-animate";

const Knowledge = () => {
  const articles = [
    {
      title: "Advanced CSS Techniques for Modern Web Development",
      date: "Feb 15, 2025",
      description:
        "Explore advanced CSS techniques including CSS Grid, Flexbox, Custom Properties, and modern layout patterns that willtak...",
    },
    {
      title: "Mastering TypeScript for Scalable Applications",
      date: "Mar 10, 2025",
      description:
        "Dive into TypeScript's powerful features to build scalable and maintainable applications with confidence.",
    },
    {
      title: "Building Accessible Web Applications",
      date: "Apr 5, 2025",
      description:
        "Learn how to create inclusive web applications by following accessibility best practices and guidelines.",
    },
  ];
  const knowledgeTitle = "Sharing knowledge as I learn.";

  return (
    <div className="border-border border-b px-2 pt-8 pb-10 sm:px-4 sm:pt-12 sm:pb-14 md:px-6">
      <div className="text-foreground relative w-fit py-1">
        <span>
          <BgPro />
        </span>
        <TextAnimate
          animation="blurInUp"
          once={true}
          by="word"
          delay={0.3}
          duration={0.2}
        >
          {knowledgeTitle}
        </TextAnimate>
      </div>

      <div>
        {articles.map((article, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5 + idx * 0.1, duration: 0.3 }}
            viewport={{ once: true }}
            className="pt-6 sm:pt-10"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-4">
              <h3 className="text-primary text-sm font-semibold sm:text-base">
                {article.title}
              </h3>
              <p className="text-secondary text-xs leading-tight font-light tracking-tight sm:text-sm">
                {article.date}
              </p>
            </div>
            <p className="text-secondary max-w-xl pt-2 text-xs sm:pt-3 sm:text-sm">
              {article.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
