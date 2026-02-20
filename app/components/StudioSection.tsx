"use client";

import { motion } from "framer-motion";

export default function StudioSection() {
  return (
    <section id="studio" className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-2xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest text-zinc-400 text-center mb-10"
        >
          Behind the studio
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <p className="text-[15px] font-semibold text-brand-dark dark:text-zinc-100">
            Pushpendra Singh
          </p>
          <p className="mt-5 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
            I build Ninexgo after hours — developer tools, platforms, and internet
            products I wish existed. Designing and building since 2011 — from graphic
            design to leading frontend at scale — all of it channelled into smaller,
            sharper things built with clean architecture, thoughtful design systems,
            and zero shortcuts.
          </p>

          <a
            href="https://x.com/_iPushpendra"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-zinc-400 dark:text-zinc-500 hover:text-brand-500 dark:hover:text-brand-500 transition-colors duration-200"
          >
            Say hi on X →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
