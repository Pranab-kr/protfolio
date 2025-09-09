import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster, toast } from "sonner";

const inter = Inter({ weight: ["400", "500", "600", "700", "800", "900"] });
export const metadata: Metadata = {
  title: "A Protfolio Web",
  description: "A Minimal and Profesional Protfolio Web with minimal animation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-100 antialiased dark:bg-neutral-700`}
      >
        <Toaster position="top-center" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
