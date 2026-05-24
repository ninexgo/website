export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-100 dark:border-zinc-900">
      <div className="max-w-lg mx-auto text-center">

        <p className="text-sm uppercase tracking-widest text-zinc-500 mb-4">
          Work together
        </p>

        <h2 className="text-2xl font-bold text-brand-dark dark:text-zinc-100">
          Building something interesting?
        </h2>

        <div>
          <p className="mt-4 text-[15px] text-zinc-500 dark:text-zinc-400 leading-7">
            The studio occasionally takes on focused engagements — developer tools,
            design systems, and platform work.
          </p>
          <p className="mt-2 text-[15px] text-zinc-500 dark:text-zinc-400 leading-7">
            If you care about how it&apos;s built, reach out.
          </p>

          <a
            href="mailto:hello@ninexgo.com"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium bg-brand-500 hover:bg-brand-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            hello@ninexgo.com →
          </a>

          <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
            Focused on developer tools, platforms, and design systems.
          </p>
        </div>

      </div>
    </section>
  );
}
