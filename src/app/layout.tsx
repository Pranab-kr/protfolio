import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import GlobalFooter from "@/components/GlobalFooter";
import LenisProvider from "@/components/LenisProvider";

const inter = Inter({ weight: ["400", "500", "600", "700", "800", "900"] });

const ppEditorial = localFont({
  src: "../../public/fonts/PPEditorial.otf",
  variable: "--font-editorial",
  display: "swap",
});
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
        className={`${inter.className} ${ppEditorial.variable} bg-background text-foreground antialiased [--pattern-fg:var(--color-neutral-950)]/5 dark:[--pattern-fg:var(--color-white)]/10`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <Toaster position="top-center" />
            <Navbar />
            <main>{children}</main>
            <GlobalFooter />
            {/* Soft blur mask at the bottom */}
            <div className="bg-background/50 pointer-events-none fixed bottom-0 left-0 z-50 h-24 w-full [mask-image:linear-gradient(to_top,white,transparent)] backdrop-blur-md" />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
