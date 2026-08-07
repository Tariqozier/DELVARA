import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Clinics",
  description:
    "Partner with DELVARA to connect with people across London actively considering private dental or aesthetic treatment.",
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
              DELVARA helps dental and aesthetic clinics connect with
              prospective patients across London who have actively expressed
              interest in private treatment. Full partnership pages are coming
              next.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <Link
                href="/for-clinics/dental"
                className="rounded-xl border border-dental/35 bg-dental-soft/50 p-6 transition-colors hover:bg-dental-soft"
              >
                <h2 className="text-xl font-medium text-delvara-ink">
                  Dental clinics
                </h2>
                <p className="mt-2 text-sm text-delvara-muted-text">
                  I&apos;m a Dental Clinic
                </p>
              </Link>
              <Link
                href="/for-clinics/aesthetics"
                className="rounded-xl border border-aesthetics/35 bg-aesthetics-soft p-6 transition-colors hover:bg-aesthetics-soft/80"
              >
                <h2 className="text-xl font-medium text-delvara-ink">
                  Aesthetic clinics
                </h2>
                <p className="mt-2 text-sm text-delvara-muted-text">
                  I&apos;m an Aesthetic Clinic
                </p>
              </Link>
            </div>

            <div className="mt-10">
              <Link href="/" className="btn btn-secondary">
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
