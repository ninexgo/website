"use client";

import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  index: number;
  href?: string;
  status?: "live" | "in-progress" | "coming-soon";
  icon: React.ReactNode;
  tags?: string[];
  url?: string;
}

export default function ProductCard({ title, description, index, href, status, icon, tags, url }: ProductCardProps) {
  const statusBadge =
    status === "in-progress" ? (
      <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
        <span className="w-1 h-1 rounded-full bg-amber-500 dark:bg-amber-400" />
        Building
      </span>
    ) : status === "live" ? (
      <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400">
        <span className="w-1 h-1 rounded-full bg-emerald-500 dark:bg-emerald-400" />
        Live
      </span>
    ) : null;

  const isExternal = href?.startsWith("http");

  const content = (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="group flex items-start gap-4 py-5 cursor-pointer"
    >
      {/* Icon */}
      <div className="mt-0.5 text-zinc-400 dark:text-zinc-500 group-hover:text-brand-500 transition-colors duration-200 shrink-0">
        {icon}
      </div>

      {/* Text */}
      <div className="min-w-0">
        <div className="flex items-center gap-1 flex-wrap">
          <h3 className="text-[15px] font-semibold text-brand-dark dark:text-zinc-100 group-hover:text-brand-500 dark:group-hover:text-brand-500 transition-colors duration-200">
            {title}
          </h3>
          {statusBadge}
        </div>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500 leading-relaxed">
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium bg-zinc-100 dark:bg-zinc-800/60 text-zinc-500 dark:text-zinc-400 px-1.5 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {url && (
          <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-600 group-hover:text-brand-500 transition-colors duration-200">
            {url} ↗
          </p>
        )}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
}
