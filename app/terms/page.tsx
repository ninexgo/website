import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Ninexgo — the rules and conditions governing use of Ninexgo products and services.",
  alternates: {
    canonical: "https://ninexgo.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
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
              <li className="text-zinc-600 dark:text-zinc-300">Terms of Service</li>
            </ol>
          </nav>

          <h1 className="text-3xl font-bold text-brand-dark dark:text-zinc-100 tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-zinc-500">Last updated: May 24, 2026</p>

          <div className="mt-10 space-y-10 text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">

            <section>
              <p>
                By accessing or using ninexgo.com or any Ninexgo product or service, you agree
                to be bound by these Terms of Service. If you do not agree, please do not use
                our services.
              </p>
            </section>

            <section aria-labelledby="services">
              <h2
                id="services"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                1. Description of Services
              </h2>
              <p>
                Ninexgo is an independent software studio that provides developer tools,
                open-source libraries, SaaS platforms, and related software products. Current
                products include Anchor UI (a React component library), Edupen (a collaborative
                writing platform), and Sentinel (an AI code review tool). Services and features
                may change over time.
              </p>
            </section>

            <section aria-labelledby="acceptable-use">
              <h2
                id="acceptable-use"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                2. Acceptable Use
              </h2>
              <div className="space-y-3">
                <p>You agree not to:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Use our services for any unlawful purpose or in violation of any regulations</li>
                  <li>Attempt to gain unauthorised access to any part of our services or infrastructure</li>
                  <li>Reverse-engineer, decompile, or disassemble any proprietary software</li>
                  <li>Use our services to distribute malware, spam, or harmful content</li>
                  <li>Misrepresent your identity or affiliation with any person or organisation</li>
                </ul>
              </div>
            </section>

            <section aria-labelledby="open-source">
              <h2
                id="open-source"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                3. Open-Source Software
              </h2>
              <p>
                Certain Ninexgo products (including Anchor UI) are released as open-source
                software. Use of open-source components is governed by the applicable open-source
                licence found in each repository. These Terms do not supersede open-source
                licence terms.
              </p>
            </section>

            <section aria-labelledby="ip">
              <h2
                id="ip"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                4. Intellectual Property
              </h2>
              <p>
                All content on ninexgo.com — including the Ninexgo name, logo, design, and
                written content — is the property of Ninexgo and protected by applicable
                intellectual property laws. You may not reproduce, distribute, or create
                derivative works without express written permission, except as permitted by
                applicable open-source licences.
              </p>
            </section>

            <section aria-labelledby="disclaimers">
              <h2
                id="disclaimers"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                5. Disclaimer of Warranties
              </h2>
              <p>
                Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranty of any
                kind, express or implied. Ninexgo does not warrant that the services will be
                uninterrupted, error-free, or free of viruses or other harmful components. Your
                use of the services is at your sole risk.
              </p>
            </section>

            <section aria-labelledby="liability">
              <h2
                id="liability"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                6. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Ninexgo shall not be liable for any
                indirect, incidental, special, consequential, or punitive damages arising from
                your use of or inability to use our services, even if we have been advised of
                the possibility of such damages.
              </p>
            </section>

            <section aria-labelledby="third-party-links">
              <h2
                id="third-party-links"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                7. Third-Party Links
              </h2>
              <p>
                Our website and products may contain links to third-party websites or services.
                Ninexgo is not responsible for the content, privacy practices, or terms of any
                third-party sites. Visiting linked sites is at your own risk.
              </p>
            </section>

            <section aria-labelledby="changes-terms">
              <h2
                id="changes-terms"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                8. Changes to These Terms
              </h2>
              <p>
                We reserve the right to update these Terms at any time. Changes will be posted
                on this page with an updated &quot;Last updated&quot; date. Continued use of our services
                after changes constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section aria-labelledby="governing-law">
              <h2
                id="governing-law"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                9. Governing Law
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of India.
                Any disputes arising under these Terms shall be subject to the exclusive
                jurisdiction of courts in India.
              </p>
            </section>

            <section aria-labelledby="contact-terms">
              <h2
                id="contact-terms"
                className="text-base font-semibold text-brand-dark dark:text-zinc-200 mb-3"
              >
                10. Contact
              </h2>
              <p>
                Questions about these Terms?{" "}
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
            <Link href="/privacy" className="hover:text-brand-500 transition-colors duration-200">Privacy Policy</Link>
          </div>

        </div>
      </main>
    </div>
  );
}
