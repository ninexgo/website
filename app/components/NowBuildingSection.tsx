"use client";

import { motion } from "framer-motion";

const nowBuilding = [
  {
    title: "Sentinel — GitHub integration",
    detail: "Building the core review engine and GitHub app. IDE extension in parallel.",
  },
  {
    title: "Anchor UI — Adding more components",
    detail: "Locking the component API. Accessibility audit in progress.",
  },
  {
    title: "Open source utilities",
    detail: "Internal tools that power our products. Planning to release separately.",
  },
];

export default function NowBuildingSection() {
  return (
    <section id="now" className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-2xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest text-zinc-400 text-center mb-10"
        >
          Now building
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto"
        >
          <div className="border-l-2 border-brand-500/30 pl-5 space-y-6">
            {nowBuilding.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <p className="font-mono text-sm">
                  <span className="text-brand-500 mr-2">→</span>
                  <span className="font-semibold text-brand-dark dark:text-zinc-200">
                    {item.title}
                  </span>
                </p>
                <p className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed pl-4">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-xs text-zinc-400 dark:text-zinc-600 font-mono">
            Last updated: February 2026
          </p>
        </motion.div>

      </div>
    </section>
  );
}
