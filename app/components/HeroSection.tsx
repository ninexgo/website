"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function HeroSection() {
  const words = useMemo(() => ["craft", "build", "ship"], []);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setWordIndex((prev) => (prev === words.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearTimeout(id);
  }, [wordIndex, words]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 180, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 180, damping: 28 });

  const dotMask = useMotionTemplate`
    radial-gradient(220px circle at ${smoothX}px ${smoothY}px, rgba(0,0,0,0.35), transparent)
  `;

  const glowBackground = useMotionTemplate`
    radial-gradient(340px circle at ${smoothX}px ${smoothY}px, rgba(0,101,255,0.07), transparent)
  `;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  return (
    <section
      onMouseMove={handleMouseMove}
      className="flex min-h-svh items-center justify-center px-6 pt-14 relative overflow-hidden"
    >
      {/* BACKGROUND LAYERS */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 dark:opacity-[0.12]"
          style={{
            backgroundImage: `radial-gradient(circle,rgb(227,228,229) 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #0065FF 1px, transparent 1px)`,
            backgroundSize: "16px 16px",
            WebkitMaskImage: dotMask,
            maskImage: dotMask,
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{ background: glowBackground }}
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-brand-500 rounded-full blur-[130px]"
        />
      </div>

      {/* HERO CONTENT */}
      <div className="flex flex-col items-center relative z-10 text-center max-w-2xl w-full">

        {/* Eyebrow pill */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
            Independent Studio
          </span>
        </motion.div>

        {/* Animated headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="w-full font-bold tracking-tight text-center leading-none"
        >
          {/* Line 1: cycling verb — larger, brand-500, the action */}
          <span className="relative flex w-full justify-center overflow-hidden text-brand-500 text-[72px] md:text-[100px] lg:text-[132px]">
            &nbsp;
            {words.map((word, index) => (
              <motion.span
                key={word}
                className="absolute font-bold"
                initial={{ opacity: 0, y: 140 }}
                transition={{ type: "spring", stiffness: 50 }}
                animate={
                  wordIndex === index
                    ? { y: 0, opacity: 1 }
                    : { y: wordIndex > index ? -140 : 140, opacity: 0 }
                }
              >
                {word}
              </motion.span>
            ))}
          </span>

          {/* Line 2: "the future." — slightly smaller, dark, the object */}
          <span className="block text-[48px] md:text-[68px] lg:text-[96px] text-brand-dark dark:text-zinc-100 mt-3">
            the future.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-[15px] text-zinc-500 dark:text-zinc-400 leading-7 max-w-xs"
        >
          Developer tools, platforms, and internet products — made to last.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="mt-8 flex items-center gap-4 flex-wrap justify-center"
        >
          <a
            href="#products"
            className="text-sm font-medium bg-brand-500 hover:bg-brand-600 text-white px-5 py-2.5 rounded-lg transition-colors duration-200"
          >
            See our products →
          </a>
          <a
            href="https://anchorui.com/react/overview/quick-start"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-brand-500 dark:hover:text-brand-500 transition-colors duration-200 underline-offset-4 hover:underline"
          >
            Explore Anchor UI ↗
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.a
          href="#products"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-14"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-zinc-400 dark:border-zinc-500 flex justify-center pt-1.5"
          >
            <div className="w-0.5 h-1.5 bg-zinc-400 dark:bg-zinc-400 rounded-full" />
          </motion.div>
        </motion.a>

      </div>
    </section>
  );
}
