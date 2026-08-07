import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore private dental and aesthetic treatment enquiries with DELVARA across London.",
};

export default function TreatmentsPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="container-delvara">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">Treatments</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              Dental and aesthetic treatment enquiries.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA supports private treatment enquiries across both
              categories equally. Fuller treatment pages are coming next.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href="/treatments/dental"
                className="rounded-xl border border-dental/35 bg-dental-soft/50 p-6 transition-colors hover:bg-dental-soft"
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-2.5 rounded-full accent-dot-dental"
                />
                <h2 className="mt-3 text-xl font-medium text-delvara-ink">
                  Dental treatments
                </h2>
                <p className="mt-2 text-sm text-delvara-muted-text">
                  Implants, cosmetic dentistry, orthodontics and more.
                </p>
              </Link>
              <Link
                href="/treatments/aesthetics"
                className="rounded-xl border border-aesthetics/35 bg-aesthetics-soft p-6 transition-colors hover:bg-aesthetics-soft/80"
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-2.5 rounded-full accent-dot-aesthetics"
                />
                <h2 className="mt-3 text-xl font-medium text-delvara-ink">
                  Aesthetic treatments
                </h2>
                <p className="mt-2 text-sm text-delvara-muted-text">
                  Injectables, skin, facial, body and hair treatments.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
