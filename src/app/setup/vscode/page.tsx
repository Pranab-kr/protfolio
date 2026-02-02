"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Container } from "@/components/container";
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
            VSCode / Cursor Setup
          </h1>
          <p className="text-muted-foreground mt-2">
            My editor configuration for a productive development experience.
          </p>
        </motion.div>

        {/* Setup Categories */}
        <div className="space-y-8">
          {vscodeSetup.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + catIndex * 0.1 }}
            >
              <div className="mb-4 flex items-center gap-2">
                <category.icon className="text-foreground size-5" />
                <h2 className="text-foreground text-lg font-semibold">
                  {category.category}
                </h2>
              </div>
              <div className="border-border bg-card overflow-hidden rounded-xl border">
                {category.items.map((item, index) => (
                  <div
                    key={item.name}
                    className={`flex items-center justify-between px-4 py-3 ${
                      index !== category.items.length - 1
                        ? "border-border border-b"
                        : ""
                    }`}
                  >
                    <span className="text-foreground text-sm font-medium">
                      {item.name}
                    </span>
                    <span className="text-muted-foreground text-sm">
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
