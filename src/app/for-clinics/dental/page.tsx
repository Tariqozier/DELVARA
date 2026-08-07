import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { ClinicPageHero } from "@/components/clinic/ClinicPageHero";
import { ClinicServicesGrid } from "@/components/clinic/ClinicServicesGrid";
import { PartnerStandards } from "@/components/clinic/PartnerStandards";
import { ScrollFlow } from "@/components/clinic/ScrollFlow";
import {
  clinicGrowthServices,
  dentalGrowthTreatments,
  dentalPartnerStandards,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Dental Clinics",
  description:
    "Patient acquisition for dental practices in London — treatment-specific enquiries, funnel design, marketing and growth infrastructure from DELVARA.",
};

const acquisitionSteps = [
  {
    title: "Define the opportunity",
    description:
      "Your clinic tells DELVARA the treatment focus, geography, capacity and commercial priorities you want to grow around.",
    detail:
      "Treatment focus · geography · capacity · commercial priorities",
  },
  {
    title: "Build the acquisition journey",
    description:
      "DELVARA can develop campaigns, landing pages, treatment content, enquiry forms and qualification logic around those priorities.",
    detail: "Campaigns · landing pages · content · forms · qualification logic",
  },
  {
    title: "Capture patient intent",
    description:
      "Prospective patients provide treatment interest, location, timeframe, approximate budget and what matters most to them.",
    detail: "Treatment · location · timeframe · budget · priorities",
  },
  {
    title: "Qualify & route",
    description:
      "Each enquiry carries useful commercial context and explicit consent before it is routed to the appropriate clinic pathway.",
  },
  {
    title: "Clinic follow-up",
    description:
      "Your team handles consultation, clinical assessment, pricing, treatment discussion and booking.",
    detail: "Consultation · assessment · pricing · booking",
  },
  {
    title: "Measure & improve",
    description:
      "Where tracking is available, response, consultation progression, conversion, source and campaign performance can inform ongoing refinement.",
    detail: "Response · progression · conversion · source · performance",
  },
];

export default function DentalClinicsPage() {
  return (
    <main>
      <ClinicPageHero
        accent="dental"
        eyebrow="For Dental Clinics"
        title="Patient acquisition built around the treatments you want to grow."
        description="DELVARA helps dental practices generate and manage treatment-specific patient enquiries across London — with qualification, funnel design, marketing and automation built around the clinic."
      />

      <section
        className="section-pad bg-delvara-bg"
        aria-labelledby="dental-treatments-heading"
      >
        <div className="container-delvara">
          <div className="max-w-2xl">
            <p className="eyebrow text-dental-deep">What you can grow</p>
            <h2
              id="dental-treatments-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Acquisition around the services that matter commercially.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Focus visually on higher-intent treatment categories while
              supporting the broader practice — from implants and cosmetic work
              to general and emergency dentistry.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {dentalGrowthTreatments.map((treatment) => (
              <li
                key={treatment.name}
                className={
                  treatment.emphasis === "high"
                    ? "rounded-md border border-dental/35 bg-dental-soft px-4 py-2.5 text-base font-medium text-dental-deep"
                    : "rounded-md border border-delvara-border bg-delvara-white px-3.5 py-2 text-sm text-delvara-muted-text"
                }
              >
                {treatment.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ScrollFlow
        variant="dental"
        heading="How dental patient acquisition works."
        steps={acquisitionSteps}
      />

      <PartnerStandards
        accent="dental"
        title="Built around credible clinic partnerships."
        intro="Our clinic review framework may consider professional registration, relevant provider regulation, treatment-specific credentials and patient-facing processes. Checks are applied proportionately — we do not claim every clinic has completed every check until our operational programme confirms it."
        standards={dentalPartnerStandards}
      />

      <section
        className="section-pad bg-delvara-white"
        aria-labelledby="dental-services-heading"
      >
        <div className="container-delvara">
          <div className="max-w-3xl">
            <p className="eyebrow">Beyond patient enquiries</p>
            <h2
              id="dental-services-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Build the system around your growth.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Some clinics need patient enquiries. Others need the infrastructure
              that turns marketing activity into a repeatable acquisition
              engine. DELVARA can build both.
            </p>
          </div>

          <ClinicServicesGrid
            accent="dental"
            services={clinicGrowthServices}
          />

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-delvara-muted-text">
            This is tailored growth infrastructure — not a generic full-service
            agency retainer. Work is scoped around your treatments, capacity and
            commercial priorities.
          </p>
        </div>
      </section>

      <section
        className="section-pad border-t border-delvara-border bg-dental-soft/30"
        aria-labelledby="dental-custom-heading"
      >
        <div className="container-delvara">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-dental-deep">Custom engagements</p>
            <h2
              id="dental-custom-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Built around your clinic.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA can support a single acquisition campaign or build a wider
              digital growth system around the way your practice operates —
              whether that means project-based work, ongoing growth programmes,
              custom builds, different treatment priorities or different clinic
              sizes.
            </p>
            <a
              href="mailto:partnerships@getdelvara.com?subject=Dental%20clinic%20discussion"
              className="btn btn-primary group mt-10"
            >
              Discuss your clinic
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-delvara-border bg-delvara-surface py-8">
        <div className="container-delvara">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-delvara-muted-text">
              Exploring aesthetic partnerships instead?
            </p>
            <Link
              href="/for-clinics/aesthetics"
              className="btn btn-secondary group"
            >
              Aesthetic clinics
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
