import Link from "next/link";
import { ClinicChoiceCard } from "@/components/ClinicChoiceCard";
import { IconArrowRight } from "@/components/icons";
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
            DELVARA helps dental and aesthetic clinics acquire
            treatment-specific prospective patient enquiries across London —
            with useful context captured before the first conversation.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 lg:grid-cols-2">
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

        <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {clinicBenefits.map((benefit) => (
            <li
              key={benefit.title}
              className="rounded-xl border border-white/12 bg-white/5 p-5 transition-colors duration-200 hover:bg-white/[0.08]"
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

        <div className="mt-12 rounded-2xl border border-white/12 bg-white/[0.04] px-6 py-8 sm:px-8">
          <p className="text-lg font-medium text-white">
            Need more than patient enquiries?
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/68 sm:text-base">
            DELVARA can also build the funnels, websites, content, automation
            and custom digital infrastructure around your acquisition strategy.
          </p>
          <Link
            href="/for-clinics"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white underline-offset-4 transition-all duration-200 hover:underline"
          >
            Explore clinic growth services
            <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
