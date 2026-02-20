"use client";

import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "Anchor UI",
    description:
      "A headless component library for React — unstyled by default, accessible out of the box. Bring your own styles, own your design system.",
    href: "https://anchorui.com/react/overview/quick-start",
    status: "live" as const,
    tags: ["Developer Tools", "Open Source"],
    url: "anchorui.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: "Edupen",
    description:
      "A focused space for writing, sharing, and learning together. Less clutter than a wiki. More collaborative than a note app.",
    href: "https://edupen.in",
    status: "live" as const,
    tags: ["Platform", "Web App"],
    url: "edupen.in",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Sentinel",
    description:
      "AI code review that understands your codebase. Surfaces real issues — not surface-level noise. Connects to GitHub and your IDE.",
    href: "https://sentinel.ninexgo.com",
    status: "in-progress" as const,
    tags: ["Developer Tools", "AI"],
    url: "sentinel.ninexgo.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 px-6 relative">
      <div className="max-w-2xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-sm uppercase tracking-widest text-zinc-400">
            Products
          </h2>
          <p className="mt-1.5 text-sm text-zinc-400 dark:text-zinc-500">
            What we&apos;ve built and what we&apos;re building.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 divide-y sm:divide-y-0 divide-zinc-100 dark:divide-zinc-900">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
              index={index}
              href={product.href}
              status={product.status}
              icon={product.icon}
              tags={product.tags}
              url={product.url}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
