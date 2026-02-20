"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BrandIcon from "./BrandIcon";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        borderBottomColor: scrolled ? "var(--nav-border)" : "transparent",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 border-b [--nav-bg:rgba(255,255,255,0.85)] dark:[--nav-bg:rgba(10,10,10,0.85)] [--nav-border:rgba(228,228,231,0.4)] dark:[--nav-border:rgba(39,39,42,0.4)]"
      style={scrolled ? { backdropFilter: "blur(8px)" } : {}}
    >
      <div className="max-w-2xl mx-auto h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <BrandIcon />
          <span className="text-sm font-semibold text-brand-dark dark:text-zinc-100 group-hover:text-brand-500 transition-colors duration-200">
            Ninexgo
          </span>
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-5">
          <a
            href="#products"
            className="hidden sm:block text-xs text-zinc-500 dark:text-zinc-400 hover:text-brand-dark dark:hover:text-zinc-100 transition-colors duration-200"
          >
            Products
          </a>
          <a
            href="https://github.com/ninexgo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-xs text-zinc-500 dark:text-zinc-400 hover:text-brand-dark dark:hover:text-zinc-100 transition-colors duration-200"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="text-xs font-medium text-brand-dark dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
