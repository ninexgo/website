"use client";

import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    name: "Design before code",
    description:
      "Every product starts as a design problem. We obsess over the experience before writing a line of implementation.",
  },
  {
    number: "02",
    name: "Developer experience is the product",
    description:
      "For developer tools, the API is the UI. Every interface — visual or programmatic — is a design decision. If it's confusing, it's broken.",
  },
  {
    number: "03",
    name: "Small surface area, deep quality",
    description:
      "We'd rather do one thing exceptionally well than ship ten things mediocrely. Smaller scope means every edge case gets attention.",
  },
  {
    number: "04",
    name: "Built to last",
    description:
      "We don't optimize for launch day. We optimize for the version of the product six months after launch — when the hype is gone.",
  },
];

export default function PhilosophySection() {
  return (
    <section id="approach" className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-2xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-widest text-zinc-400 text-center mb-10"
        >
          How we build
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            >
              <span className="text-xs font-mono text-zinc-300 dark:text-zinc-700">
                {principle.number}
              </span>
              <h3 className="mt-2 text-[15px] font-semibold text-brand-dark dark:text-zinc-100">
                {principle.name}
              </h3>
              <p className="mt-1.5 text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
