"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  LuArrowLeft,
  LuKeyboard,
  LuMouse,
  LuHeadphones,
  LuLaptop,
} from "react-icons/lu";

const gears = [
  {
    category: "Laptop",
    items: [
      {
        name: "Asus Tuf f17",
        description: "i5 11400H | 16GB RAM | 512GB SSD | RTX 2050",
        icon: LuLaptop,
      },
    ],
  },
  {
    category: "Peripherals",
    items: [
      {
        name: "Ant eSports MK1300 v2",
        description: "Mechanical 60% keyboard ",
        icon: LuKeyboard,
      },
      {
        name: "Ant eSports",
        description: "Gaming mouse",
        icon: LuMouse,
      },
      {
        name: "Realme buds Air 7",
        description: "Noise cancelling Tws",
        icon: LuHeadphones,
      },
    ],
  },
];

export default function GearsPage() {
  return (
    <div className="flex min-h-screen items-start justify-center">
      <Container className="min-h-screen w-full max-w-4xl px-2 pt-14 pb-8 sm:px-4 sm:pt-16 sm:pb-10 md:px-8 md:pt-24">
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
          className="mb-6 sm:mb-8"
        >
          <h1 className="text-foreground text-2xl font-bold tracking-tight sm:text-3xl">
            Gears Used
          </h1>
          <p className="text-muted-foreground mt-1.5 text-sm sm:mt-2 sm:text-base">
            Productivity tools and hardware I use daily for development.
          </p>
        </motion.div>

        {/* Gear Categories */}
        <div className="space-y-6 sm:space-y-8">
          {gears.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + catIndex * 0.1 }}
            >
              <h2 className="text-foreground mb-3 text-base font-semibold sm:mb-4 sm:text-lg">
                {category.category}
              </h2>
              <div className="space-y-2 sm:space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="border-border bg-card flex items-center gap-3 rounded-lg border p-3 sm:gap-4 sm:rounded-xl sm:p-4"
                  >
                    <div className="bg-muted flex size-8 shrink-0 items-center justify-center rounded-md sm:size-10 sm:rounded-lg">
                      <item.icon className="text-foreground size-4 sm:size-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-foreground truncate text-sm font-medium sm:text-base">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground truncate text-xs sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
