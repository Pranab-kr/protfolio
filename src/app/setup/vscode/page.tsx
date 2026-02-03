"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { LuArrowLeft, LuPalette, LuPuzzle, LuSettings } from "react-icons/lu";

const vscodeSetup = [
  {
    category: "Theme & Appearance",
    icon: LuPalette,
    items: [
      { name: "Theme", value: "Aura Theme" },
      { name: "Icon Theme", value: "Material Icon Theme" },
      { name: "Font", value: "Fira Code" },
      { name: "Font Size", value: "14px" },
      { name: "Line Height", value: "1.6" },
    ],
  },
  {
    category: "Essential Extensions",
    icon: LuPuzzle,
    items: [
      { name: "ESLint", value: "JavaScript/TypeScript linting" },
      { name: "Prettier", value: "Code formatter" },
      { name: "GitLens", value: "Git supercharged" },
      { name: "Tailwind CSS IntelliSense", value: "Tailwind autocomplete" },
      { name: "Auto Rename Tag", value: "Auto rename paired HTML tags" },
      { name: "Error Lens", value: "Inline error highlighting" },
      { name: "Import Cost", value: "Display import size" },
      { name: "Path Intellisense", value: "Autocomplete file paths" },
    ],
  },
  {
    category: "Editor Settings",
    icon: LuSettings,
    items: [
      { name: "Format On Save", value: "Enabled" },
      { name: "Auto Save", value: "onFocusChange" },
      { name: "Tab Size", value: "2 spaces" },
      { name: "Word Wrap", value: "On" },
      { name: "Bracket Pair Colorization", value: "Enabled" },
      { name: "Minimap", value: "Disabled" },
    ],
  },
];

export default function VSCodePage() {
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
            VSCode / Cursor Setup
          </h1>
          <p className="text-muted-foreground mt-1.5 text-sm sm:mt-2 sm:text-base">
            My editor configuration for a productive development experience.
          </p>
        </motion.div>

        {/* Setup Categories */}
        <div className="space-y-6 sm:space-y-8">
          {vscodeSetup.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + catIndex * 0.1 }}
            >
              <div className="mb-3 flex items-center gap-1.5 sm:mb-4 sm:gap-2">
                <category.icon className="text-foreground size-4 sm:size-5" />
                <h2 className="text-foreground text-base font-semibold sm:text-lg">
                  {category.category}
                </h2>
              </div>
              <div className="border-border bg-card overflow-hidden rounded-lg border sm:rounded-xl">
                {category.items.map((item, index) => (
                  <div
                    key={item.name}
                    className={`flex flex-col gap-0.5 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-4 sm:py-3 ${
                      index !== category.items.length - 1
                        ? "border-border border-b"
                        : ""
                    }`}
                  >
                    <span className="text-foreground text-xs font-medium sm:text-sm">
                      {item.name}
                    </span>
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      {item.value}
                    </span>
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
