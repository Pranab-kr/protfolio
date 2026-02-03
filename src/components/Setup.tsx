"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { LuSettings, LuCode, LuTerminal } from "react-icons/lu";
import { Button } from "./ui/button";

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
    <div className="border-border border-t px-2 pt-6 pb-8 sm:px-4 sm:pt-8 sm:pb-10 md:px-6">
      {/* Section Header */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-xs sm:text-sm"
      >
        Development
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-foreground text-xl font-bold tracking-tight sm:text-2xl md:text-3xl"
      >
        Setup
      </motion.h2>

      {/* Setup Items */}
      <div className="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
        {setupItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              variant="outline"
              className="border-border bg-card hover:bg-muted/50 group flex h-auto w-full items-center gap-3 rounded-lg border p-3 text-left transition-colors sm:gap-4 sm:rounded-xl sm:p-4"
            >
              <Link href={item.href}>
                <div className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-md sm:size-10 sm:rounded-lg">
                  <item.icon className="text-foreground size-4 sm:size-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-foreground group-hover:text-primary truncate text-sm font-semibold transition-colors sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground truncate text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </Link>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Setup;
