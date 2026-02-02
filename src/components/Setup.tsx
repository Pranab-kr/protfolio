"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { LuSettings, LuCode, LuTerminal } from "react-icons/lu";

const setupItems = [
  {
    icon: LuSettings,
    title: "Gears Used",
    description: "Productivity Tools, Gears I use daily.",
    href: "/setup/gears",
  },
  {
    icon: LuCode,
    title: "VSCode / Cursor Setup",
    description: "VSCode / Cursor setup I use daily.",
    href: "/setup/vscode",
  },
  {
    icon: LuTerminal,
    title: "Terminal Setup",
    description: "Terminal setup for macOS & Linux.",
    href: "/setup/terminal",
  },
];

const Setup = () => {
  return (
    <div className="border-border border-t px-4 pt-8 pb-10 md:px-6">
      {/* Section Header */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-sm"
      >
        Development
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-foreground text-2xl font-bold tracking-tight md:text-3xl"
      >
        Setup
      </motion.h2>

      {/* Setup Items */}
      <div className="mt-6 space-y-3">
        {setupItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              href={item.href}
              className="border-border bg-card hover:bg-muted/50 group flex items-center gap-4 rounded-xl border p-4 transition-colors"
            >
              <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-lg">
                <item.icon className="text-foreground size-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-foreground group-hover:text-primary text-base font-semibold transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Setup;
