import Link from "next/link";
import { ArrowLeft, FileText, ShieldCheck, Scale } from "lucide-react";

const sections = [
  {
    title: "1. Scope of Services",
    text: (
      <>
        <p>
          Monumentalis provides project coordination, sourcing, design management, and execution
          support for custom sculptures, monuments, memorials, architectural art, and related
          artistic installations.
        </p>
        <p className="mt-3">
          All services are tailored to the specific requirements of each project and are subject to
          separate agreements, proposals, or contracts.
        </p>
      </>
    ),
  },
  {
    title: "2. Nature of Website Content",
    text: (
      <>
        <p>
          The information presented on this website is for general informational purposes only and
          does not constitute a binding offer or contractual commitment.
        </p>
        <p className="mt-3">
          Any project descriptions, visuals, or examples are indicative and may not represent final
          deliverables or specifications.
        </p>
      </>
    ),
  },
  {
    title: "3. Project Inquiries",
    text: (
      <>
        <p>
          Submitting an inquiry through this website does not create a contractual relationship.
        </p>
        <p className="mt-3">
          Monumentalis reserves the right to accept or decline project inquiries at its sole
          discretion.
        </p>
      </>
    ),
  },
  {
    title: "4. Proposals & Agreements",
    text: (
      <>
        <p>
          All projects are subject to a formal proposal, quotation, or agreement outlining scope,
          timeline, pricing, and responsibilities.
        </p>
        <p className="mt-3">
          No work shall commence until terms are agreed upon by all relevant parties.
        </p>
      </>
    ),
  },
  {
    title: "5. Intellectual Property",
    text: (
      <>
        <p>
          All designs, concepts, drawings, renderings, and artistic works remain the intellectual
          property of Monumentalis or its partners unless otherwise agreed in writing.
        </p>
        <p className="mt-3">
          Clients may not reproduce, distribute, or use such materials without explicit written
          permission.
        </p>
      </>
    ),
  },
  {
    title: "6. Collaboration & Third Parties",
    text: (
      <>
        <p>
          Monumentalis operates as a coordination and management layer and may collaborate with
          independent artists, fabricators, and production partners.
        </p>
        <p className="mt-3">
          While all partners are carefully selected, Monumentalis is not liable for independent
          third-party actions beyond agreed contractual responsibilities.
        </p>
      </>
    ),
  },
  {
    title: "7. Project Variability",
    text: (
      <>
        <p>
          Custom artistic projects involve inherent variability due to materials, craftsmanship,
          environmental factors, and artistic interpretation.
        </p>
        <p className="mt-3">
          Minor variations between concepts, renderings, and final works are considered normal and
          acceptable within industry standards.
        </p>
      </>
    ),
  },
  {
    title: "8. Limitation of Liability",
    text: (
      <>
        <p>
          Monumentalis shall not be liable for indirect, incidental, or consequential damages,
          including delays, cost overruns, or project-specific risks arising from external factors.
        </p>
        <p className="mt-3">
          Liability is limited to the extent permitted by applicable law and any agreed contractual
          terms.
        </p>
      </>
    ),
  },
  {
    title: "9. Confidentiality",
    text: (
      <>
        <p>
          Monumentalis treats all client communications, project details, and submitted materials
          with professional discretion.
        </p>
        <p className="mt-3">
          Confidential information will not be disclosed to third parties except where necessary
          for project execution or required by law.
        </p>
      </>
    ),
  },
  {
    title: "10. Payments & Commercial Terms",
    text: (
      <>
        <p>
          Payment terms, schedules, and financial conditions are defined within individual project
          agreements.
        </p>
        <p className="mt-3">
          Monumentalis reserves the right to suspend or terminate work in case of non-payment or
          breach of agreed terms.
        </p>
      </>
    ),
  },
  {
    title: "11. Governing Law",
    text: (
      <>
        <p>
          These Terms are governed by the applicable laws of the jurisdiction in which Monumentalis
          operates.
        </p>
        <p className="mt-3">
          Any disputes shall be subject to the jurisdiction of the competent courts.
        </p>
      </>
    ),
  },
  {
    title: "12. Changes to Terms",
    text: (
      <>
        <p>
          Monumentalis reserves the right to update or modify these Terms at any time.
        </p>
        <p className="mt-3">
          Continued use of the website constitutes acceptance of any changes.
        </p>
      </>
    ),
  },
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-white text-stone-950 antialiased">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(120,113,108,0.15),transparent_35%),linear-gradient(to_bottom,rgba(250,250,249,0.95),rgba(245,245,244,1))]" />

        <div className="relative mx-auto max-w-7xl px-6 py-10 lg:px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/monumentalis-logo.svg" className="h-16 w-auto" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-2xl border border-stone-300 bg-white/80 px-5 py-3 text-sm font-medium text-stone-700 shadow-sm hover:border-stone-950 hover:text-stone-950"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Site
            </Link>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-600">
                <Scale className="h-4 w-4" />
                Legal Framework
              </div>

              <h1 className="text-5xl font-semibold md:text-7xl">
                Terms & Conditions
              </h1>

              <p className="mt-6 text-lg text-stone-600">
                Clear, structured terms governing the use of Monumentalis services and project collaboration.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-xl">
              <div className="text-sm uppercase tracking-[0.2em] text-stone-500">
                Summary
              </div>

              <p className="mt-4 text-2xl font-medium">
                Monumentalis operates as a professional coordination partner for custom art projects,
                ensuring clarity, structure, and accountability across every stage.
              </p>

              <div className="mt-6 space-y-3 text-sm text-stone-600">
                <p>• All projects are governed by formal agreements</p>
                <p>• Intellectual property is protected</p>
                <p>• Collaboration is structured and transparent</p>
                <p>• Liability is clearly defined</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-[2rem] border border-stone-200 bg-stone-50 p-8 shadow-sm hover:bg-white hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <div className="mt-4 text-sm leading-7">{section.text}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex gap-3">
          <Link
            href="/"
            className="rounded-2xl bg-stone-950 px-6 py-3 text-sm text-white hover:bg-stone-800"
          >
            Back to Homepage
          </Link>

          <Link
            href="/privacy-policy"
            className="rounded-2xl border border-stone-300 px-6 py-3 text-sm hover:border-stone-950"
          >
            Privacy Policy
          </Link>
        </div>
      </section>
    </main>
  );
}