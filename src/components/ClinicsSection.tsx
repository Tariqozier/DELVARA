import Link from "next/link";
import { clinicBenefits, clinicPaths } from "@/lib/content";

export function ClinicsSection() {
  return (
    <section
      className="section-pad bg-delvara-ink text-delvara-white"
      aria-labelledby="clinics-heading"
    >
      <div className="container-delvara">
        <div className="max-w-3xl">
          <p className="text-[0.75rem] font-medium tracking-[0.14em] text-white/55 uppercase">
            For Clinics
          </p>
          <h2
            id="clinics-heading"
            className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl"
          >
            Turn treatment interest into patient enquiries.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            DELVARA helps dental and aesthetic clinics connect with prospective
            patients across London who have actively expressed interest in
            private treatment.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 lg:grid-cols-2">
          {clinicPaths.map((path) => {
            const isDental = path.accent === "dental";
            return (
              <li key={path.id}>
                <article
                  className={`flex h-full flex-col rounded-xl border p-7 ${
                    isDental
                      ? "border-dental/35 bg-white/[0.04]"
                      : "border-aesthetics/40 bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className={`h-2.5 w-2.5 rounded-full ${
                        isDental ? "bg-dental" : "bg-aesthetics-peach"
                      }`}
                    />
                    <h3 className="text-xl font-medium text-white">
                      {path.title}
                    </h3>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/68 sm:text-base">
                    {path.description}
                  </p>
                  <Link
                    href={path.href}
                    className="btn btn-on-dark mt-7 w-full sm:w-auto"
                  >
                    {path.cta}
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {clinicBenefits.map((benefit) => (
            <li
              key={benefit.title}
              className="rounded-xl border border-white/12 bg-white/5 p-5"
            >
              <h3 className="text-base font-medium text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
