import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { ClinicPageHero } from "@/components/clinic/ClinicPageHero";
import { ClinicServicesGrid } from "@/components/clinic/ClinicServicesGrid";
import { PartnerStandards } from "@/components/clinic/PartnerStandards";
import { ScrollFlow } from "@/components/clinic/ScrollFlow";
import {
  aestheticsGrowthTreatments,
  aestheticsPartnerStandards,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Aesthetic Clinics",
  description:
    "Patient acquisition for aesthetic clinics in London — qualified enquiries, conversion journeys, content, automation and custom digital growth infrastructure from DELVARA.",
};

const acquisitionSteps = [
  {
    title: "Define your services",
    description:
      "Clarify the treatments, audience, areas, availability and capacity you want acquisition built around.",
    detail: "Treatments · audience · areas · availability · capacity",
  },
  {
    title: "Create the journey",
    description:
      "Shape the creative, content, campaigns and landing experience that turn treatment interest into structured enquiries.",
    detail: "Creative · content · campaigns · landing experience",
  },
  {
    title: "Capture interest",
    description:
      "Prospective patients share treatment interest, London area, timeframe, rough budget and what matters most.",
    detail: "Treatment · area · timeframe · budget · priorities",
  },
  {
    title: "Qualify the enquiry",
    description:
      "Collect structured information and explicit contact and sharing consent before any clinic introduction.",
  },
  {
    title: "Connect with the clinic",
    description:
      "Your team handles consultation, clinical assessment, treatment suitability, pricing and booking.",
    detail: "Consultation · suitability · pricing · booking",
  },
  {
    title: "Follow up & optimise",
    description:
      "Automation, response workflows, conversion data and campaign refinement help improve the journey over time.",
    detail: "Automation · workflows · conversion data · refinement",
  },
];

const aestheticsServices = [
  {
    title: "Treatment campaign funnels",
    description:
      "Campaign-to-enquiry journeys designed around specific injectable, skin, body or hair services.",
  },
  {
    title: "Premium clinic websites",
    description:
      "Editorial treatment pages and conversion-focused experiences that reflect a medical-aesthetic standard.",
  },
  {
    title: "Landing pages & content",
    description:
      "Targeted landing journeys, treatment content and creative built around your service mix.",
  },
  {
    title: "CRM & consultation reminders",
    description:
      "Routing, automated follow-up, consultation reminders and pipeline workflows for your team.",
  },
  {
    title: "Automation & reporting",
    description:
      "Operational automation with conversion tracking, source attribution and funnel performance measurement.",
  },
  {
    title: "Custom applications & portals",
    description:
      "Patient portals, treatment discovery tools, interactive experiences and custom integrations.",
  },
] as const;

export default function AestheticClinicsPage() {
  return (
    <main>
      <ClinicPageHero
        accent="aesthetics"
        eyebrow="For Aesthetic Clinics"
        title="Turn treatment interest into a stronger patient acquisition journey."
        description="Treatment-specific demand across London — combining structured patient enquiries with conversion journeys, content, automation and growth infrastructure."
      />

      <section
        className="section-pad bg-gradient-to-b from-aesthetics-soft/50 to-delvara-bg"
        aria-labelledby="aesthetics-treatments-heading"
      >
        <div className="container-delvara">
          <div className="max-w-2xl">
            <p className="eyebrow text-aesthetics-deep">Services you can grow</p>
            <h2
              id="aesthetics-treatments-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Demand built around your treatment mix.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Acquisition shaped around the services your clinic offers and
              wants to grow.
            </p>
          </div>

          <ul className="mt-10 flex flex-wrap gap-3">
            {aestheticsGrowthTreatments.map((treatment) => (
              <li
                key={treatment.name}
                className={
                  treatment.emphasis === "high"
                    ? "rounded-full border border-aesthetics/35 bg-aesthetics-soft px-5 py-2.5 text-base font-medium text-aesthetics-deep"
                    : "rounded-full border border-delvara-border bg-delvara-white/80 px-4 py-2 text-sm text-delvara-muted-text"
                }
              >
                {treatment.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ScrollFlow
        variant="aesthetics"
        heading="The aesthetic acquisition journey."
        steps={acquisitionSteps}
      />

      <PartnerStandards
        accent="aesthetics"
        title="A considered approach to clinic partnerships."
        intro="Regulation differs depending on practitioner type and treatment. Our partner review framework considers the registrations, qualifications and standards relevant to the services being offered — including CQC where applicable, not as a universal requirement for every non-surgical treatment."
        standards={aestheticsPartnerStandards}
      />

      <section
        className="section-pad bg-delvara-white"
        aria-labelledby="aesthetics-services-heading"
      >
        <div className="container-delvara">
          <div className="max-w-3xl">
            <p className="eyebrow">Beyond enquiries</p>
            <h2
              id="aesthetics-services-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Growth infrastructure for premium aesthetic businesses.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Funnels, digital experiences and systems that help convert
              treatment interest consistently.
            </p>
          </div>

          <ClinicServicesGrid accent="aesthetics" services={aestheticsServices} />

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="mailto:partnerships@getdelvara.com?subject=Aesthetic%20clinic%20discussion"
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
              Exploring dental partnerships instead?
            </p>
            <Link
              href="/for-clinics/dental"
              className="btn btn-secondary group"
            >
              Dental clinics
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
