"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Container } from "@/components/container";
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
            Terminal Setup
          </h1>
          <p className="text-muted-foreground mt-2">
            My terminal configuration for macOS and Linux systems.
          </p>
        </motion.div>

        {/* Setup Categories */}
        <div className="space-y-8">
          {terminalSetup.map((category, catIndex) => (
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

          {/* Plugins Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <LuPackage className="text-foreground size-5" />
              <h2 className="text-foreground text-lg font-semibold">
                Plugins & Tools
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {plugins.map((plugin) => (
                <div
                  key={plugin.name}
                  className="border-border bg-card rounded-xl border p-4"
                >
                  <h3 className="text-foreground text-sm font-medium">
                    {plugin.name}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-xs">
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
