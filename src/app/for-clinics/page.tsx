import type { Metadata } from "next";
import Link from "next/link";
import { ClinicChoiceCard } from "@/components/ClinicChoiceCard";
import { clinicGrowthServices, clinicPaths } from "@/lib/content";

export const metadata: Metadata = {
  title: "For Clinics",
  description:
    "Partner with DELVARA to acquire treatment-specific patient enquiries across London and build digital growth infrastructure around your clinic.",
};

export default function ForClinicsPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="container-delvara">
          <div className="mx-auto max-w-3xl">
            <p className="eyebrow">For Clinics</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              Patient acquisition and growth infrastructure for private clinics.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA helps dental and aesthetic clinics connect with
              prospective patients across London who have actively expressed
              interest in private treatment — and can also build the funnels,
              websites, content, automation and custom digital systems around
              that acquisition strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-delvara-ink">
        <div className="container-delvara">
          <ul className="grid gap-5 lg:grid-cols-2">
            {clinicPaths.map((path) => (
              <li key={path.id}>
                <ClinicChoiceCard
                  title={path.title}
                  description={path.description}
                  cta={path.cta}
                  href={path.href}
                  accent={path.accent}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad border-t border-delvara-border bg-delvara-white">
        <div className="container-delvara">
          <div className="max-w-2xl">
            <p className="eyebrow">Growth services</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink">
              Built around your clinic.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Some clinics need patient enquiries. Others need the
              infrastructure that turns marketing activity into a repeatable
              acquisition engine. DELVARA can support both.
            </p>
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {clinicGrowthServices.map((service) => (
              <li
                key={service.title}
                className="rounded-xl border border-delvara-border bg-delvara-bg p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-delvara-border-strong hover:bg-delvara-white"
              >
                <h3 className="text-lg font-medium text-delvara-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link href="/" className="btn btn-secondary">
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
