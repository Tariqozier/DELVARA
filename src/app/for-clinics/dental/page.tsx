import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { ClinicGrowthTreatments } from "@/components/clinic/ClinicGrowthTreatments";
import { ClinicPageHero } from "@/components/clinic/ClinicPageHero";
import { ClinicServicesGrid } from "@/components/clinic/ClinicServicesGrid";
import { PartnerStandards } from "@/components/clinic/PartnerStandards";
import { ScrollFlow } from "@/components/clinic/ScrollFlow";
import {
  clinicGrowthServices,
  dentalGrowthTreatments,
  dentalPartnerStandards,
  dentalVerificationSteps,
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
        description="Treatment-specific patient enquiries across London — with qualification, funnel design, marketing and automation built around the clinic."
      />

      <section
        className="bg-delvara-bg py-12 md:py-14"
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
              Higher-intent treatment categories, with support for the broader
              practice.
            </p>
          </div>

          <ClinicGrowthTreatments
            accent="dental"
            items={dentalGrowthTreatments}
          />
        </div>
      </section>

      <ScrollFlow
        variant="dental"
        heading="How dental patient acquisition works."
        steps={acquisitionSteps}
      />

      <PartnerStandards
        accent="dental"
        title="Who we work with."
        intro="DELVARA intends to work with reputable, appropriately regulated dental providers. For dental partnerships, DELVARA's review framework includes confirming the professional and regulatory status relevant to the services being promoted."
        regulatorNote={
          <>
            <p>
              Dental professionals practising in the UK must be appropriately
              registered with the{" "}
              <a
                href="https://www.gdc-uk.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-delvara-ink underline decoration-delvara-border-strong underline-offset-2 transition-colors hover:text-dental-deep"
              >
                General Dental Council (GDC)
              </a>
              , which sets standards of conduct, performance and ethics for the
              dental team.
            </p>
            <p>
              In England, dental providers carrying on regulated activities are
              subject to the relevant{" "}
              <a
                href="https://www.cqc.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-delvara-ink underline decoration-delvara-border-strong underline-offset-2 transition-colors hover:text-dental-deep"
              >
                Care Quality Commission (CQC)
              </a>{" "}
              registration and regulatory requirements.
            </p>
          </>
        }
        verificationSteps={dentalVerificationSteps}
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
              Enquiries, funnels, websites, automation — scoped around your
              treatments and capacity.
            </p>
          </div>

          <ClinicServicesGrid
            accent="dental"
            services={clinicGrowthServices}
          />

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:partnerships@getdelvara.com?subject=Dental%20clinic%20discussion"
              className="btn btn-primary group"
            >
              Discuss your clinic
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <Link href="/for-clinics/growth-studio" className="btn btn-secondary">
              Explore Growth Studio
              <IconArrowRight className="h-4 w-4" />
            </Link>
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
