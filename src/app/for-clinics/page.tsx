import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Clinics",
  description:
    "Partner with DELVARA to connect with people already considering private treatment.",
};

export default function ForClinicsPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="container-delvara">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">For Clinics</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              Partner with DELVARA.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA helps selected clinics connect with prospective patients
              who have actively expressed an interest in private treatment. A
              full clinic partnership page is coming next.
            </p>

            <div className="mt-12 rounded-2xl border border-dashed border-delvara-border-strong bg-delvara-white px-6 py-12 text-center sm:px-10">
              <p className="text-xs font-medium tracking-[0.16em] text-delvara-sage-deep uppercase">
                Phase 1
              </p>
              <h2 className="mt-3 text-2xl font-medium text-delvara-ink">
                Full page coming next
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                Clinic onboarding, enquiry handling and partnership details will
                be designed here in a later phase.
              </p>
              <div className="mt-8 flex justify-center">
                <Link href="/" className="btn btn-secondary">
                  Back to homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
