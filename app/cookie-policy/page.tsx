import Link from "next/link";
import { ArrowLeft, Cookie, FileText, ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. What Are Cookies?",
    text: (
      <p>
        Cookies are small text files placed on your device when you visit a website.
        They help websites function properly, remember preferences, and understand how
        visitors interact with the site.
      </p>
    ),
  },
  {
    title: "2. Types of Cookies We May Use",
    text: (
      <>
        <p>Monumentalis may use the following types of cookies:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>
            <strong>Essential cookies</strong> — required for the website to function.
          </li>
          <li>
            <strong>Preference cookies</strong> — used to remember basic choices, such as cookie consent.
          </li>
          <li>
            <strong>Analytics cookies</strong> — used only if enabled, to understand website traffic and improve performance.
          </li>
          <li>
            <strong>Marketing cookies</strong> — used only if future advertising or tracking tools are implemented.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Why We Use Cookies",
    text: (
      <>
        <p>We may use cookies to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Ensure the website works properly</li>
          <li>Remember your cookie preference</li>
          <li>Improve user experience</li>
          <li>Analyze website performance, if analytics tools are enabled</li>
          <li>Protect website security and prevent misuse</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Third-Party Cookies",
    text: (
      <p>
        If Monumentalis uses third-party services such as analytics, hosting, embedded
        media, or advertising tools, those providers may place cookies according to
        their own privacy and cookie policies.
      </p>
    ),
  },
  {
    title: "5. Cookie Consent",
    text: (
      <p>
        When you first visit our website, you may be asked to accept or reject optional
        cookies. Essential cookies may still be used because they are necessary for the
        website to function.
      </p>
    ),
  },
  {
    title: "6. Managing Cookies",
    text: (
      <p>
        You can manage or delete cookies through your browser settings. Please note
        that disabling some cookies may affect website functionality.
      </p>
    ),
  },
  {
    title: "7. Updates to This Policy",
    text: (
      <p>
        We may update this Cookie Policy from time to time to reflect changes in
        technology, law, or website functionality.
      </p>
    ),
  },
  {
    title: "8. Contact",
    text: (
      <p>
        For questions about this Cookie Policy, contact us at{" "}
        <strong>project@monumentalis.com</strong>.
      </p>
    ),
  },
];

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-white text-stone-950 antialiased">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,113,108,0.15),transparent_35%),linear-gradient(to_bottom,rgba(250,250,249,0.95),rgba(245,245,244,1))]" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/monumentalis-logo.svg"
                alt="Monumentalis logo"
                className="h-16 w-auto"
              />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-stone-300 bg-white/80 px-5 py-3 text-sm font-medium text-stone-700 shadow-sm transition hover:border-stone-950 hover:text-stone-950"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Site
            </Link>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-600">
                <Cookie className="h-4 w-4" />
                Cookie Information
              </div>

              <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Cookie Policy
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                This Cookie Policy explains how Monumentalis may use cookies and similar
                technologies to support website functionality, security, and user experience.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-2xl shadow-stone-300/30 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                Cookie Summary
              </div>

              <p className="mt-4 text-2xl font-medium leading-snug text-stone-950">
                We use essential cookies for site functionality and may use optional
                cookies only to improve performance and understand visitor interaction.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-stone-900" />
                  <p className="text-sm leading-7 text-stone-700">
                    Essential cookies support secure and reliable website operation.
                  </p>
                </div>

                <div className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-stone-900" />
                  <p className="text-sm leading-7 text-stone-700">
                    Optional cookies can help improve experience and performance.
                  </p>
                </div>

                <div className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-stone-900" />
                  <p className="text-sm leading-7 text-stone-700">
                    Your cookie preference can be managed through your browser settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-stone-200 bg-stone-950 p-8 text-white shadow-xl shadow-stone-300/30">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-300">
                Monumentalis Legal
              </div>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight">
                Transparent cookie use.
              </h2>

              <p className="mt-4 text-sm leading-7 text-stone-300">
                This page explains how cookies may support the Monumentalis website and how visitors can manage their preferences.
              </p>

              <div className="mt-8 grid gap-3">
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Privacy Policy
                </Link>

                <Link
                  href="/terms-and-conditions"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <FileText className="h-4 w-4" />
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </aside>

          <div className="grid gap-5">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm transition hover:bg-white hover:shadow-xl hover:shadow-stone-200/60"
              >
                <h2 className="text-2xl font-semibold tracking-tight text-stone-950">
                  {section.title}
                </h2>

                <div className="mt-4 text-sm leading-7 text-stone-700">
                  {section.text}
                </div>
              </article>
            ))}

            <div className="mt-6 flex flex-col gap-3 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl bg-stone-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
              >
                Back to Homepage
              </Link>

              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="inline-flex items-center justify-center rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}