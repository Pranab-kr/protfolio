"use client";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import Link from "next/link";
import { Container } from "./container";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [hoverred, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  useMotionValueEvent(scrollY, "change", (letest) => {
    console.log(letest);
    if (letest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <Container>
      <motion.nav
        style={{
          boxShadow: scrolled ? "var(--shadow-minimal)" : "none",
          width: scrolled ? "40%" : "100%",
        }}
        className="fixed top-0 flex max-w-4xl items-center justify-between px-4 py-2 pt-2"
      >
        <Image
          className="h-18 w-18 rounded-full"
          src="/onisun.jpg"
          height={100}
          width={100}
          alt="logo"
        />

        <div className="flex items-center">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="relative px-2 py-1 text-sm"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hoverred === idx && (
                <motion.span
                  layoutId="hovered-span"
                  className="dark:bg-n absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                ></motion.span>
              )}
              <span className="relative z-10">{item.title}</span>
            </Link>
          ))}
        </div>
      </motion.nav>
    </Container>
  );
};

export default Navbar;
