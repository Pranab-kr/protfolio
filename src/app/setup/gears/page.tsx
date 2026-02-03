"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  LuArrowLeft,
  LuKeyboard,
  LuMouse,
  LuHeadphones,
  LuLaptop,
  LuMonitor,
} from "react-icons/lu";

const gears = [
  {
    category: "Laptop",
    icon: <LuLaptop className="size-4" />,
    items: [
      {
        name: "Asus TUF F17",
        description: "i5 11400H | 16GB RAM | 512GB SSD | RTX 2050",
        icon: LuLaptop,
      },
    ],
  },
  {
    category: "Peripherals",
    icon: <LuMonitor className="size-4" />,
    items: [
      {
        name: "Ant eSports MK1300 v2",
        description: "Mechanical 60% keyboard with RGB",
        icon: LuKeyboard,
      },
      {
        name: "Ant eSports Gaming Mouse",
        description: "Precision gaming mouse",
        icon: LuMouse,
      },
      {
        name: "Realme Buds Air 7",
        description: "Noise cancelling TWS earbuds",
        icon: LuHeadphones,
      },
    ],
  },
];

export default function GearsPage() {
  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="min-h-screen w-full max-w-4xl px-3 pt-14 pb-8 sm:px-4 sm:pt-16 sm:pb-10 md:px-8 md:pt-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6 sm:mb-8"
        >
          <Button
            variant="ghost"
            size="sm"
            className="h-auto px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm"
            asChild
          >
            <Link href="/">
              <LuArrowLeft className="size-3.5 sm:size-4" />
              Back to home
            </Link>
          </Button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="space-y-2 text-center sm:space-y-3"
        >
          <h1 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Gears Used
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm sm:text-base">
            Productivity tools and hardware I use daily for development and
            creative work.
          </p>
        </motion.div>

        <Separator className="my-6 sm:my-8" />

        {/* Gear Categories */}
        <div className="space-y-8 md:space-y-12">
          {gears.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + catIndex * 0.1 }}
              className="space-y-4 md:space-y-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 px-6">
                <div className="bg-muted text-muted-foreground flex items-center justify-center rounded-md border border-black/10 p-2 dark:border-white/10">
                  {category.icon}
                </div>
                <h2 className="text-foreground text-lg font-semibold sm:text-xl md:text-2xl">
                  {category.category}
                </h2>
              </div>

              {/* Category Items */}
              <div className="ml-0 space-y-3 sm:ml-8 md:ml-12">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.3 + catIndex * 0.1 + index * 0.05,
                    }}
                    className="bg-muted/50 hover:bg-muted/70 flex items-center gap-3 rounded-lg border border-black/10 p-3 transition-colors sm:gap-4 sm:p-4 dark:border-white/10"
                  >
                    <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-lg border border-black/10 sm:size-12 dark:border-white/10">
                      <item.icon className="text-muted-foreground size-5 sm:size-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-foreground text-sm font-medium sm:text-base">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground mt-0.5 text-xs sm:mt-1 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Summary Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="mt-8 px-6"
          >
            <div className="bg-muted/30 rounded-lg border border-black/10 p-4 sm:p-6 dark:border-white/10">
              <p className="text-muted-foreground text-center text-xs sm:text-sm">
                These are the tools that help me stay productive and create
                amazing things. Looking for specific recommendations? Feel free
                to reach out!
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
