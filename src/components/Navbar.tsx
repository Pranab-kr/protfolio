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
    { title: "About", href: "#About" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navbarHeight = 100; // Approximate navbar height with margin
        const targetPosition = targetElement.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  useMotionValueEvent(scrollY, "change", (letest) => {
    // console.log(letest);
    if (letest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <Container nav="isNav" className="px-12">
        <motion.nav
          animate={{
            boxShadow: scrolled ? "var(--shadow-minimal)" : "none",
            width: scrolled ? "90%" : "100%",
            marginLeft: "auto",
            marginRight: "auto",
            y: scrolled ? 15 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="flex max-w-4xl items-center justify-between rounded-full bg-white/40 px-2 py-2 pt-2 backdrop-blur-md dark:bg-black/90"
        >
          <Link href="/" className="cursor-pointer">
            <Image
              className="h-10 w-10 rounded-full transition-transform hover:scale-105"
              src="/onisun.jpg"
              height={100}
              width={100}
              alt="logo"
            />
          </Link>
          <div className="flex items-center">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="relative px-4 py-1 text-sm"
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
    </div>
  );
};

export default Navbar;
