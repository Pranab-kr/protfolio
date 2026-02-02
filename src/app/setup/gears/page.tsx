"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Container } from "@/components/container";
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
      <Container className="min-h-screen w-full max-w-4xl px-4 pt-16 pb-10 md:px-8 md:pt-24">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-2 text-sm transition-colors"
          >
            <LuArrowLeft className="size-4" />
            Back to home
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-foreground text-3xl font-bold tracking-tight">
            Gears Used
          </h1>
          <p className="text-muted-foreground mt-2">
            Productivity tools and hardware I use daily for development.
          </p>
        </motion.div>

        {/* Gear Categories */}
        <div className="space-y-8">
          {gears.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + catIndex * 0.1 }}
            >
              <h2 className="text-foreground mb-4 text-lg font-semibold">
                {category.category}
              </h2>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="border-border bg-card flex items-center gap-4 rounded-xl border p-4"
                  >
                    <div className="bg-muted flex size-10 shrink-0 items-center justify-center rounded-lg">
                      <item.icon className="text-foreground size-5" />
                    </div>
                    <div>
                      <h3 className="text-foreground text-base font-medium">
                        {item.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
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
