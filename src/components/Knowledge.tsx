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
    <div className="border-border border-b px-4 pt-12 pb-14 md:px-6">
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
            className="pt-10"
          >
            <div className="flex justify-between">
              <h3 className="text-primary font-semibold">{article.title}</h3>
              <p className="text-secondary text-sm leading-tight font-light tracking-tight">
                {article.date}
              </p>
            </div>
            <p className="text-secondary max-w-xl pt-3">
              {article.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
