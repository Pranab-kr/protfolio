"use client";
import { motion } from "motion/react";

const Knowledge = () => {
  const articles = [
    {
      title: "Advanced CSS Techniques for Modern Web Development",
      date: "Feb 15, 2024",
      description:
        "Explore advanced CSS techniques including CSS Grid, Flexbox, Custom Properties, and modern layout patterns that willtak...",
    },
    {
      title: "Mastering TypeScript for Scalable Applications",
      date: "Mar 10, 2024",
      description:
        "Dive into TypeScript's powerful features to build scalable and maintainable applications with confidence.",
    },
    {
      title: "Building Accessible Web Applications",
      date: "Apr 5, 2024",
      description:
        "Learn how to create inclusive web applications by following accessibility best practices and guidelines.",
    },
  ];
  const knowledgeTitle = "Sharing knowledge as I learn.";

  return (
    <div className="pt-12">
      <p className="text-neutral-700">
        {knowledgeTitle.split(" ").map((word, index) => (
          <motion.span
            key={word + index}
            initial={{ opacity: 0, filter: "blur(5px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.3 + index * 0.05,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="mr-1 inline-block"
          >
            {word}
          </motion.span>
        ))}
      </p>

      <>
        {articles.map((article, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: idx * 0.1, duration: 0.3 }}
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
      </>
    </div>
  );
};

export default Knowledge;
