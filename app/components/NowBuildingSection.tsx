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

        <p className="text-sm uppercase tracking-widest text-zinc-500 text-center mb-10">
          Now building
        </p>

        <div className="max-w-lg mx-auto">
          <div className="border-l-2 border-brand-500/30 pl-5 space-y-6">
            {nowBuilding.map((item) => (
              <div key={item.title}>
                <p className="font-mono text-sm">
                  <span className="text-brand-500 mr-2" aria-hidden="true">→</span>
                  <span className="font-semibold text-brand-dark dark:text-zinc-200">
                    {item.title}
                  </span>
                </p>
                <p className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed pl-4">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-zinc-500 dark:text-zinc-500 font-mono">
            Last updated: February 2026
          </p>
        </div>

      </div>
    </section>
  );
}
