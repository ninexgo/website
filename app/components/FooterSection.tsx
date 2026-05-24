"use client";

import { WavePath } from "./WavePath";

export default function FooterSection() {
  return (
    <footer className="py-14 px-6 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-2xl mx-auto">
        <WavePath className="mb-12 text-zinc-300 dark:text-zinc-800" />

        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-brand-dark dark:text-zinc-200">Ninexgo</p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Crafting the future.</p>
          </div>

          <nav aria-label="Footer navigation" className="flex items-center gap-5">
            <a
              href="#products"
              className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-brand-dark dark:hover:text-zinc-300 transition-colors duration-200"
            >
              Products
            </a>
            <a
              href="https://github.com/ninexgo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-brand-dark dark:hover:text-zinc-300 transition-colors duration-200"
            >
              GitHub
            </a>
            <a
              href="https://x.com/ninexgo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-brand-dark dark:hover:text-zinc-300 transition-colors duration-200"
            >
              X
            </a>
            <a
              href="https://www.linkedin.com/company/ninexgo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-brand-dark dark:hover:text-zinc-300 transition-colors duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://bsky.app/profile/ninexgo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-brand-dark dark:hover:text-zinc-300 transition-colors duration-200"
            >
              Bluesky
            </a>
            <a
              href="mailto:hello@ninexgo.com"
              className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-brand-dark dark:hover:text-zinc-300 transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>

        <p className="mt-8 text-xs text-zinc-500 dark:text-zinc-500 text-center sm:text-left">
          © {new Date().getFullYear()} Ninexgo
        </p>
      </div>
    </footer>
  );
}
