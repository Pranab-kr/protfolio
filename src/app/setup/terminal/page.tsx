"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { terminalSteps, zshrcConfig, terminalPlugins } from "@/config/setup";
import {
  LuArrowLeft,
  LuDownload,
  LuExternalLink,
  LuFileText,
  LuCheck,
  LuCopy,
  LuPackage,
} from "react-icons/lu";

export default function TerminalPage() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(zshrcConfig);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
            Terminal Setup
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-sm sm:text-base">
            Complete guide to setting up my terminal configuration with Zsh, Oh
            My Zsh, Starship, and essential plugins.
          </p>
        </motion.div>

        <Separator className="my-6 sm:my-8" />

        {/* Steps */}
        <div className="space-y-8 md:space-y-12">
          {terminalSteps.map((step, stepIndex) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + stepIndex * 0.1 }}
              className="space-y-4 px-6 md:space-y-6"
            >
              {/* Step Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <div className="bg-muted flex w-fit items-center justify-center rounded-md border border-black/10 px-3 py-2 dark:border-white/10">
                  <span className="text-muted-foreground text-sm font-medium">
                    Step {step.id}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-muted text-muted-foreground flex items-center justify-center rounded-md border border-black/10 p-2 dark:border-white/10">
                    {step.icon}
                  </div>
                  <h2 className="text-foreground text-lg font-semibold sm:text-xl md:text-2xl">
                    {step.title}
                  </h2>
                </div>
              </div>

              {/* Step Content */}
              <div className="ml-0 space-y-3 sm:ml-8 md:ml-16 md:space-y-4">
                {step.content.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {item.type === "download" && (
                      <Link
                        href={item.href || "#"}
                        download
                        className="bg-muted/50 hover:bg-muted/70 flex w-full flex-col gap-3 rounded-lg border border-black/10 p-3 transition-colors sm:flex-row sm:items-center md:p-4 dark:border-white/10"
                      >
                        <LuDownload className="text-muted-foreground size-4 flex-shrink-0" />
                        <div className="flex-1">
                          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
                            <span className="text-foreground text-sm font-medium">
                              {item.name}
                            </span>
                            <LuExternalLink className="text-muted-foreground hidden size-3 sm:block" />
                          </div>
                          <p className="text-muted-foreground mt-1 text-xs sm:text-sm">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    )}

                    {item.type === "instruction" && (
                      <div className="flex items-center gap-3">
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          {item.text}
                        </p>
                      </div>
                    )}

                    {item.type === "shortcut" && (
                      <div className="bg-accent/50 flex w-full items-center gap-3 rounded-lg border border-black/10 p-3 dark:border-white/10">
                        <kbd className="bg-muted text-foreground rounded border border-black/20 px-2 py-1 font-mono text-xs break-all dark:border-white/20">
                          {item.text}
                        </kbd>
                      </div>
                    )}

                    {item.type === "prompt" && (
                      <div className="bg-muted/50 flex w-full items-center gap-3 rounded-lg border border-black/10 p-3 dark:border-white/10">
                        <LuFileText className="text-muted-foreground size-4 flex-shrink-0" />
                        <code className="text-foreground font-mono text-xs break-all sm:text-sm">
                          {item.text}
                        </code>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Plugins Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="space-y-4 px-6 md:space-y-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="bg-muted text-muted-foreground flex w-fit items-center justify-center rounded-md border border-black/10 p-2 dark:border-white/10">
                <LuPackage className="size-4" />
              </div>
              <h3 className="text-foreground text-lg font-semibold sm:text-xl">
                Plugins & Tools
              </h3>
            </div>

            <div className="ml-0 sm:ml-8 md:ml-12">
              <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                {terminalPlugins.map((plugin) => (
                  <div
                    key={plugin.name}
                    className="border-border bg-card rounded-lg border p-3 sm:rounded-xl sm:p-4"
                  >
                    <h4 className="text-foreground text-xs font-medium sm:text-sm">
                      {plugin.name}
                    </h4>
                    <p className="text-muted-foreground mt-0.5 text-[10px] sm:mt-1 sm:text-xs">
                      {plugin.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* .zshrc Config Section */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="space-y-4 px-6 md:space-y-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="bg-muted text-muted-foreground flex w-fit items-center justify-center rounded-md border border-black/10 p-2 dark:border-white/10">
                <LuFileText className="size-4" />
              </div>
              <h3 className="text-foreground text-lg font-semibold sm:text-xl">
                .zshrc Configuration
              </h3>
            </div>

            <div className="ml-0 sm:ml-8 md:ml-12">
              <div className="bg-muted/30 overflow-hidden rounded-lg border border-black/10 dark:border-white/10">
                <div className="bg-muted flex items-center justify-between border-b border-black/10 px-3 py-2 md:px-4 dark:border-white/10">
                  <span className="text-foreground text-sm font-medium">
                    .zshrc
                  </span>
                  <button
                    onClick={handleCopy}
                    className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-xs transition-colors"
                  >
                    {copied ? (
                      <>
                        <LuCheck className="size-3.5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <LuCopy className="size-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <div className="max-h-72 overflow-auto">
                  <pre className="min-w-full p-3 text-xs md:p-4">
                    <code className="text-muted-foreground block font-mono leading-relaxed whitespace-pre">
                      {zshrcConfig.split("\n").map((line, index) => {
                        if (line.trim().startsWith("#")) {
                          return (
                            <div
                              key={index}
                              className="text-muted-foreground/60 italic"
                            >
                              {line}
                            </div>
                          );
                        } else if (line.includes("=")) {
                          const eqIndex = line.indexOf("=");
                          const key = line.substring(0, eqIndex);
                          const value = line.substring(eqIndex);
                          return (
                            <div key={index}>
                              <span className="text-foreground font-medium">
                                {key}
                              </span>
                              <span className="text-muted-foreground">
                                {value}
                              </span>
                            </div>
                          );
                        } else {
                          return (
                            <div key={index} className="text-muted-foreground">
                              {line}
                            </div>
                          );
                        }
                      })}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Steps */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="space-y-4 px-6 md:space-y-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <div className="bg-muted flex w-fit items-center justify-center rounded-md border border-black/10 px-3 py-2 dark:border-white/10">
                <span className="text-muted-foreground text-sm font-medium">
                  Final
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-muted text-muted-foreground flex items-center justify-center rounded-md border border-black/10 p-2 dark:border-white/10">
                  <LuCheck className="size-4" />
                </div>
                <h2 className="text-foreground text-lg font-semibold sm:text-xl md:text-2xl">
                  Complete Setup
                </h2>
              </div>
            </div>

            <div className="ml-0 space-y-3 sm:ml-8 md:ml-16 md:space-y-4">
              <div className="flex items-center gap-3">
                <p className="text-muted-foreground text-xs sm:text-sm">
                  Add the .zshrc configuration to your home directory
                </p>
              </div>

              <div className="bg-muted/50 flex w-full items-center gap-3 rounded-lg border border-black/10 p-3 dark:border-white/10">
                <LuFileText className="text-muted-foreground size-4 flex-shrink-0" />
                <code className="text-foreground font-mono text-xs break-all sm:text-sm">
                  cp .zshrc ~/.zshrc && source ~/.zshrc
                </code>
              </div>

              <div className="bg-muted/50 mt-4 flex items-center gap-3 rounded-lg border border-black/10 p-3 md:mt-6 md:p-4 dark:border-white/10">
                <LuCheck className="size-5 text-green-500" />
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-medium">Done!</span>
                  <span className="text-foreground">
                    Your terminal is now configured.
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
