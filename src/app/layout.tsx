import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import GlobalFooter from "@/components/GlobalFooter";

const inter = Inter({ weight: ["400", "500", "600", "700", "800", "900"] });
export const metadata: Metadata = {
  metadataBase: new URL("https://pranab.dev"),
  title: {
    default: "Pranab Kumar | Full Stack Web Developer",
    template: "%s | Pranab Kumar",
  },
  description:
    "Full Stack Web Developer specializing in React, Next.js, TypeScript, and modern web technologies. Building interactive and performant web applications.",
  openGraph: {
    title: "Pranab Kumar | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
    url: "https://pranab.dev",
    siteName: "Pranab Kumar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranab Kumar | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-background text-foreground antialiased [--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-center" />
          <Navbar />
          <main>{children}</main>
          <GlobalFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
