import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Cookie, FileText } from "lucide-react";

const sections = [
  {
    title: "1. Data Controller",
    text: (
      <>
        <p>The data controller responsible for your personal data is:</p>
        <p className="mt-3">
          <strong>Monumentalis</strong>
          <br />
          Email: project@monumentalis.com
        </p>
      </>
    ),
  },
  {
    title: "2. Personal Data We Collect",
    text: (
      <>
        <p>We may collect personal data that you voluntarily provide through our website, including:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Name and contact details</li>
          <li>Email address</li>
          <li>Company, institution, or studio name</li>
          <li>Project location and project details</li>
          <li>Messages, specifications, references, and inquiry information</li>
          <li>Technical data such as IP address, browser type, and device information</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Purpose of Processing",
    text: (
      <>
        <p>We use personal data to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Respond to project inquiries</li>
          <li>Evaluate potential collaborations</li>
          <li>Communicate regarding custom sculpture, monument, or architectural art projects</li>
          <li>Improve website functionality and security</li>
          <li>Comply with applicable legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    title: "4. Legal Basis Under GDPR",
    text: (
      <>
        <p>We process personal data based on one or more of the following legal grounds:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Your consent, where applicable</li>
          <li>Legitimate interest for professional communication and business development</li>
          <li>Pre-contractual or contractual necessity when discussing or preparing a project</li>
          <li>Legal obligations where required by law</li>
        </ul>
      </>
    ),
  },
  {
    title: "5. Data Sharing",
    text: (
      <>
        <p>We do not sell personal data.</p>
        <p className="mt-3">
          We may share limited information with technical service providers, hosting providers, analytics providers, or trusted project partners only when necessary for website operation, communication, or project execution.
        </p>
      </>
    ),
  },
  {
    title: "6. Data Retention",
    text: (
      <p>
        Personal data is retained only for as long as necessary to fulfill the purposes described in this policy, respond to inquiries, maintain business records, or comply with legal obligations.
      </p>
    ),
  },
  {
    title: "7. Your GDPR Rights",
    text: (
      <>
        <p>Under GDPR, you have the right to:</p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Access your personal data</li>
          <li>Request correction of inaccurate data</li>
          <li>Request deletion of personal data</li>
          <li>Restrict or object to processing</li>
          <li>Request data portability</li>
          <li>Withdraw consent where processing is based on consent</li>
        </ul>
        <p className="mt-3">
          To exercise these rights, contact us at <strong>project@monumentalis.com</strong>.
        </p>
      </>
    ),
  },
  {
    title: "8. Cookies",
    text: (
      <p>
        This website may use cookies or similar technologies to support functionality, improve user experience, and analyze website traffic. More information is available in our Cookie Policy.
      </p>
    ),
  },
  {
    title: "9. Security",
    text: (
      <p>
        We apply appropriate technical and organizational measures to protect personal data against unauthorized access, loss, misuse, alteration, or disclosure.
      </p>
    ),
  },
  {
    title: "10. Contact",
    text: (
      <p>
        For any privacy-related questions, contact Monumentalis at <strong>project@monumentalis.com</strong>.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
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

          <div className="mt-16 grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-600 backdrop-blur">
                <ShieldCheck className="h-4 w-4" />
                GDPR & Data Protection
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-stone-950 md:text-7xl">
                Privacy Policy
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
                Monumentalis respects privacy, confidentiality, and professional discretion in all project communications.
              </p>

              <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-2xl shadow-stone-300/30 backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500">
                Legal Summary
              </div>

              <p className="mt-4 text-2xl font-medium leading-snug text-stone-950">
                We collect only the information needed to respond to inquiries, evaluate project requests, and communicate professionally.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-stone-900" />
                  <p className="text-sm leading-7 text-stone-700">
                    Data is used for project communication and business correspondence.
                  </p>
                </div>

                <div className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-stone-900" />
                  <p className="text-sm leading-7 text-stone-700">
                    Personal information is handled with discretion and in line with GDPR principles.
                  </p>
                </div>

                <div className="flex gap-3 rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <FileText className="mt-0.5 h-5 w-5 shrink-0 text-stone-900" />
                  <p className="text-sm leading-7 text-stone-700">
                    You may request access, correction, deletion, or restriction of your data.
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
                Clear, professional, and transparent.
              </h2>

              <p className="mt-4 text-sm leading-7 text-stone-300">
                This policy is designed to explain how personal data is handled when you contact Monumentalis regarding sculpture, monument, memorial, architectural art, or related project inquiries.
              </p>

              <div className="mt-8 grid gap-3">
                <Link
                  href="/cookie-policy"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  <Cookie className="h-4 w-4" />
                  Cookie Policy
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
            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
              <p className="text-base leading-8 text-stone-700">
                This Privacy Policy describes how <strong>Monumentalis</strong> (“we”, “us”, “our”) collects, uses, stores, and protects your personal data when you visit this website or submit a project inquiry.
              </p>

              <p className="mt-4 text-base leading-8 text-stone-700">
                We are committed to processing personal data lawfully, fairly, and transparently under the <strong>General Data Protection Regulation (EU) 2016/679</strong>.
              </p>
            </div>

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
                href="/cookie-policy"
                className="inline-flex items-center justify-center rounded-2xl border border-stone-300 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
              >
                Cookie Policy
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