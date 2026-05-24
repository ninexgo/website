import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Ninexgo — how we collect, use, and protect your information.",
  alternates: {
    canonical: "https://ninexgo.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-950">

      {/* Nav */}
      <header className="px-6 border-b border-zinc-100 dark:border-zinc-900">
        <div className="max-w-2xl mx-auto h-14 flex items-center justify-between">
          <Link
            href="/"
            className="text-sm font-semibold text-brand-dark dark:text-zinc-100 hover:text-brand-500 transition-colors duration-200"
          >
            ← Ninexgo
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
              <li className="text-zinc-600 dark:text-zinc-300">Privacy Policy</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-brand-dark dark:text-zinc-100 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-zinc-500">Last updated: May 24, 2026</p>

          <div className="mt-10 space-y-10 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">

            <section aria-labelledby="intro">
              <p>
                Ninexgo (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates{" "}
                <a href="https://ninexgo.com" className="text-brand-500 hover:underline underline-offset-4">
                  ninexgo.com
                </a>{" "}
                and related products. This Privacy Policy explains what information we collect,
                how we use it, and your rights regarding that information.
              </p>
            </section>

            <section aria-labelledby="information-collected">
              <h2
                id="information-collected"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                1. Information We Collect
              </h2>
              <div className="space-y-3">
                <p>
                  <strong className="text-brand-dark dark:text-zinc-300">Contact information.</strong>{" "}
                  When you email us at hello@ninexgo.com, we collect your email address and the
                  content of your message to respond to your inquiry.
                </p>
                <p>
                  <strong className="text-brand-dark dark:text-zinc-300">Usage data.</strong>{" "}
                  We may collect basic, anonymised usage statistics (pages visited, referrer,
                  browser type) through Vercel Analytics or similar privacy-respecting tools.
                  This data contains no personally identifiable information.
                </p>
                <p>
                  <strong className="text-brand-dark dark:text-zinc-300">Cookies.</strong>{" "}
                  This website does not use advertising cookies or tracking pixels. Any cookies
                  set are strictly necessary for the site to function (e.g., session state).
                </p>
              </div>
            </section>

            <section aria-labelledby="how-we-use">
              <h2
                id="how-we-use"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>To respond to your enquiries and support requests</li>
                <li>To understand how the website is used and improve it</li>
                <li>To operate and maintain Ninexgo products and services</li>
              </ul>
              <p className="mt-3">
                We do not sell, trade, or rent your personal information to third parties. We do
                not use your information for advertising purposes.
              </p>
            </section>

            <section aria-labelledby="third-parties">
              <h2
                id="third-parties"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                3. Third-Party Services
              </h2>
              <div className="space-y-3">
                <p>
                  <strong className="text-brand-dark dark:text-zinc-300">Vercel.</strong>{" "}
                  This website is hosted on Vercel. Vercel may collect server logs and usage
                  data as part of its infrastructure services. See{" "}
                  <a
                    href="https://vercel.com/legal/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-500 hover:underline underline-offset-4"
                  >
                    Vercel&apos;s Privacy Policy
                  </a>
                  .
                </p>
                <p>
                  <strong className="text-brand-dark dark:text-zinc-300">GitHub.</strong>{" "}
                  Open-source repositories and code are hosted on GitHub. Interactions with
                  GitHub repositories are governed by{" "}
                  <a
                    href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-500 hover:underline underline-offset-4"
                  >
                    GitHub&apos;s Privacy Statement
                  </a>
                  .
                </p>
              </div>
            </section>

            <section aria-labelledby="data-retention">
              <h2
                id="data-retention"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                4. Data Retention
              </h2>
              <p>
                Email correspondence is retained for as long as necessary to respond to your
                enquiry or as required by law. Anonymised analytics data is retained for up to
                12 months.
              </p>
            </section>

            <section aria-labelledby="your-rights">
              <h2
                id="your-rights"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                5. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or request deletion of any personal
                information we hold about you. To exercise these rights, contact us at{" "}
                <a
                  href="mailto:hello@ninexgo.com"
                  className="text-brand-500 hover:underline underline-offset-4"
                >
                  hello@ninexgo.com
                </a>
                . We will respond within 30 days.
              </p>
            </section>

            <section aria-labelledby="childrens-privacy">
              <h2
                id="childrens-privacy"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                6. Children&apos;s Privacy
              </h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section aria-labelledby="changes">
              <h2
                id="changes"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                7. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on
                this page with an updated &quot;Last updated&quot; date. Continued use of the website
                after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section aria-labelledby="contact-privacy">
              <h2
                id="contact-privacy"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                8. Contact
              </h2>
              <p>
                Questions about this Privacy Policy?{" "}
                <a
                  href="mailto:hello@ninexgo.com"
                  className="text-brand-500 hover:underline underline-offset-4"
                >
                  hello@ninexgo.com
                </a>
              </p>
            </section>

          </div>

          {/* Footer links */}
          <div className="mt-16 pt-8 border-t border-zinc-100 dark:border-zinc-900 flex flex-wrap gap-4 text-xs text-zinc-500">
            <Link href="/" className="hover:text-brand-500 transition-colors duration-200">Home</Link>
            <Link href="/about" className="hover:text-brand-500 transition-colors duration-200">About</Link>
            <Link href="/terms" className="hover:text-brand-500 transition-colors duration-200">Terms</Link>
          </div>

        </div>
      </main>
    </div>
  );
}
