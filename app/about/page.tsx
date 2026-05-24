import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Ninexgo is an independent software studio founded by Pushpendra Singh, building developer tools, platforms, and internet products with design discipline and long-term thinking.",
  alternates: {
    canonical: "https://ninexgo.com/about",
  },
  openGraph: {
    title: "About | Ninexgo",
    description:
      "Ninexgo is an independent software studio founded by Pushpendra Singh, building developer tools, platforms, and internet products with design discipline and long-term thinking.",
    url: "https://ninexgo.com/about",
    // og:image handled by app/about/opengraph-image.tsx
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://ninexgo.com/about#webpage",
      "name": "About Ninexgo",
      "url": "https://ninexgo.com/about",
      "about": { "@id": "https://ninexgo.com/#organization" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://ninexgo.com",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": "https://ninexgo.com/about",
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://ninexgo.com/about#pushpendra",
      "name": "Pushpendra Singh",
      "jobTitle": "Founder",
      "worksFor": { "@id": "https://ninexgo.com/#organization" },
      "description":
        "Designer and frontend engineer building since 2011. Founder of Ninexgo, an independent software studio focused on developer tools and internet products.",
      "sameAs": [
        "https://x.com/_iPushpendra",
        "https://github.com/iPushpendra",
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Nav */}
      <header className="px-6 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-2xl mx-auto h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-brand-dark dark:text-zinc-100 hover:text-brand-500 transition-colors duration-200"
          >
            ← Ninexgo
          </Link>
          <Link
            href="/#contact"
            className="text-xs font-medium text-brand-dark dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-lg transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </header>

      <main className="px-6 py-20">
        <div className="max-w-2xl mx-auto">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 text-xs text-zinc-500">
              <li>
                <Link href="/" className="hover:text-brand-500 transition-colors duration-200">
                  Ninexgo
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-zinc-600 dark:text-zinc-300">About</li>
            </ol>
          </nav>

          {/* Page heading */}
          <h1 className="text-3xl font-bold text-brand-dark dark:text-zinc-100 tracking-tight">
            About Ninexgo
          </h1>

          {/* What is Ninexgo — entity definition + disambiguation */}
          <section className="mt-10" aria-labelledby="what-is-ninexgo">
            <h2
              id="what-is-ninexgo"
              className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4"
            >
              What is Ninexgo
            </h2>
            <div className="space-y-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              <p>
                <strong className="text-brand-dark dark:text-zinc-200">Ninexgo</strong> is an
                independent software studio focused on developer tools, platforms, and internet
                products. The studio operates at the intersection of design and engineering —
                building things with clean architecture, thoughtful design systems, and a long
                time horizon.
              </p>
              <p>
                Ninexgo (ninexgo.com) is a software studio building open-source libraries, SaaS
                products, and developer infrastructure — focused entirely on the software craft.
              </p>
              <p>
                The name reflects the studio&apos;s founding principle: build for the long run, not for
                the launch. Nine iterations deep, still going — always shipping, always refining.
              </p>
            </div>
          </section>

          <hr className="my-10 border-zinc-100 dark:border-zinc-900" />

          {/* Mission */}
          <section aria-labelledby="mission">
            <h2
              id="mission"
              className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4"
            >
              Mission
            </h2>
            <div className="space-y-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              <p>
                Most software tools are built to ship fast and iterate in public. Ninexgo takes
                the opposite position: start with design, nail the developer experience, then
                release when it&apos;s genuinely good.
              </p>
              <p>
                The studio builds tools it would use every day — a headless React component
                library, a collaborative writing platform, an AI-powered code review tool. Each
                product starts as a real problem and ends as something with a small surface area
                and deep quality.
              </p>
            </div>
          </section>

          <hr className="my-10 border-zinc-100 dark:border-zinc-900" />

          {/* Products */}
          <section aria-labelledby="products">
            <h2
              id="products"
              className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-6"
            >
              Products
            </h2>
            <ul className="space-y-6">
              <li>
                <a
                  href="https://anchorui.com/react/overview/quick-start"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <p className="text-[15px] font-semibold text-brand-dark dark:text-zinc-100 group-hover:text-brand-500 transition-colors duration-200">
                    Anchor UI
                    <span className="ml-1 font-normal text-xs text-emerald-600 dark:text-emerald-400">Live</span>
                  </p>
                  <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                    A headless component library for React — unstyled by default, accessible out
                    of the box. Bring your own styles, own your design system.
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 group-hover:text-brand-500 transition-colors duration-200">
                    anchorui.com ↗
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="https://edupen.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <p className="text-[15px] font-semibold text-brand-dark dark:text-zinc-100 group-hover:text-brand-500 transition-colors duration-200">
                    Edupen
                    <span className="ml-1 font-normal text-xs text-emerald-600 dark:text-emerald-400">Live</span>
                  </p>
                  <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                    A focused space for writing, sharing, and learning together. Less clutter than
                    a wiki. More collaborative than a note app.
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 group-hover:text-brand-500 transition-colors duration-200">
                    edupen.in ↗
                  </p>
                </a>
              </li>
              <li>
                <a
                  href="https://sentinel.ninexgo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <p className="text-[15px] font-semibold text-brand-dark dark:text-zinc-100 group-hover:text-brand-500 transition-colors duration-200">
                    Sentinel
                    <span className="ml-1 font-normal text-xs text-amber-600 dark:text-amber-400">In development</span>
                  </p>
                  <p className="mt-1 text-sm text-zinc-500 leading-relaxed">
                    AI code review that understands your codebase. Surfaces real issues — not
                    surface-level noise. Connects to GitHub and your IDE.
                  </p>
                  <p className="mt-1 text-xs text-zinc-500 group-hover:text-brand-500 transition-colors duration-200">
                    sentinel.ninexgo.com ↗
                  </p>
                </a>
              </li>
            </ul>
          </section>

          <hr className="my-10 border-zinc-100 dark:border-zinc-900" />

          {/* Founder */}
          <section aria-labelledby="founder">
            <h2
              id="founder"
              className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4"
            >
              Founder
            </h2>
            <div className="space-y-4 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              <p>
                <strong className="text-brand-dark dark:text-zinc-200">Pushpendra Singh</strong>{" "}
                founded Ninexgo as an independent software studio.
                Designing and building since 2011 — from graphic design to leading frontend
                engineering at scale — all of it channelled into smaller, sharper products built
                with clean architecture and zero shortcuts.
              </p>
              <p>
                Before Ninexgo, Pushpendra spent years leading frontend teams, building design
                systems, and shipping products used by thousands of developers. Ninexgo is the
                natural next step: full ownership of the product, the design, and the direction.
              </p>
              <a
                href="https://x.com/_iPushpendra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-brand-500 transition-colors duration-200"
              >
                Follow on X →
              </a>
            </div>
          </section>

          <hr className="my-10 border-zinc-100 dark:border-zinc-900" />

          {/* Contact */}
          <section aria-labelledby="contact">
            <h2
              id="contact"
              className="text-xs font-medium uppercase tracking-widest text-zinc-500 mb-4"
            >
              Get in touch
            </h2>
            <p className="text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">
              For collaborations, consulting engagements, or general questions — reach out at{" "}
              <a
                href="mailto:hello@ninexgo.com"
                className="text-brand-500 hover:underline underline-offset-4"
              >
                hello@ninexgo.com
              </a>
              . The studio occasionally takes on focused engagements in developer tools, design
              systems, and platform work.
            </p>
          </section>

          {/* Footer links */}
          <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap gap-4 text-xs text-zinc-500">
            <Link href="/" className="hover:text-brand-500 transition-colors duration-200">Home</Link>
            <Link href="/privacy" className="hover:text-brand-500 transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand-500 transition-colors duration-200">Terms</Link>
            <a href="https://github.com/ninexgo" target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 transition-colors duration-200">GitHub</a>
            <a href="https://x.com/ninexgo" target="_blank" rel="noopener noreferrer" className="hover:text-brand-500 transition-colors duration-200">X</a>
          </div>

        </div>
      </main>
    </div>
  );
}
