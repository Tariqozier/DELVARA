import Link from "next/link";
import { clinicBenefits } from "@/lib/content";

export function ClinicsSection() {
  return (
    <section
      className="section-pad bg-delvara-ink text-delvara-white"
      aria-labelledby="clinics-heading"
    >
      <div className="container-delvara">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="max-w-xl">
            <p className="text-[0.75rem] font-medium tracking-[0.14em] text-delvara-sage-soft uppercase">
              For Clinics
            </p>
            <h2
              id="clinics-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl"
            >
              Connect with people already considering treatment.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
              DELVARA helps selected clinics connect with prospective patients
              who have actively expressed an interest in private treatment.
            </p>
            <Link
              href="/for-clinics"
              className="btn btn-on-dark mt-8 w-full sm:w-auto"
            >
              Partner with DELVARA
            </Link>
          </div>

          <ul className="grid gap-4">
            {clinicBenefits.map((benefit) => (
              <li
                key={benefit.title}
                className="rounded-xl border border-white/15 bg-white/5 p-6 transition-colors duration-300 hover:bg-white/10"
              >
                <h3 className="text-lg font-medium text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65 sm:text-base">
                  {benefit.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
