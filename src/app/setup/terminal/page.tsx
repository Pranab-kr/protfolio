"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { LuArrowLeft, LuTerminal, LuPackage, LuPalette } from "react-icons/lu";

const terminalSetup = [
  {
    category: "Terminal Emulator",
    icon: LuTerminal,
    items: [
      { name: "Cachyos", value: "Kitty" },
      { name: "Linux", value: "Alacritty" },
    ],
  },
  {
    category: "Shell & Prompt",
    icon: LuPackage,
    items: [
      { name: "Shell", value: "Zsh" },
      { name: "Framework", value: "Oh My Zsh" },
      { name: "Prompt", value: "Starship" },
      { name: "Font", value: "JetBrains Mono Nerd Font" },
    ],
  },
  {
    category: "Theme & Colors",
    icon: LuPalette,
    items: [
      { name: "Color Scheme", value: "Catppuccin Mocha" },
      { name: "Transparency", value: "95%" },
      { name: "Blur", value: "Enabled" },
    ],
  },
];

const plugins = [
  { name: "zsh-autosuggestions", description: "Fish-like autosuggestions" },
  {
    name: "zsh-syntax-highlighting",
    description: "Syntax highlighting for commands",
  },
  { name: "z", description: "Jump around directories quickly" },
  { name: "fzf", description: "Fuzzy finder for files and history" },
  { name: "bat", description: "Cat clone with syntax highlighting" },
  { name: "eza", description: "Modern replacement for ls" },
  { name: "ripgrep", description: "Fast grep alternative" },
  { name: "fd", description: "Simple and fast find alternative" },
];

export default function TerminalPage() {
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
            Terminal Setup
          </h1>
          <p className="text-muted-foreground mt-1.5 text-sm sm:mt-2 sm:text-base">
            My terminal configuration for macOS and Linux systems.
          </p>
        </motion.div>

        {/* Setup Categories */}
        <div className="space-y-6 sm:space-y-8">
          {terminalSetup.map((category, catIndex) => (
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

          {/* Plugins Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <div className="mb-3 flex items-center gap-1.5 sm:mb-4 sm:gap-2">
              <LuPackage className="text-foreground size-4 sm:size-5" />
              <h2 className="text-foreground text-base font-semibold sm:text-lg">
                Plugins & Tools
              </h2>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
              {plugins.map((plugin) => (
                <div
                  key={plugin.name}
                  className="border-border bg-card rounded-lg border p-3 sm:rounded-xl sm:p-4"
                >
                  <h3 className="text-foreground text-xs font-medium sm:text-sm">
                    {plugin.name}
                  </h3>
                  <p className="text-muted-foreground mt-0.5 text-[10px] sm:mt-1 sm:text-xs">
                    {plugin.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
