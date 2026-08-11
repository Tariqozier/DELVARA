import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";
import { AestheticJourney } from "@/components/clinic/AestheticJourney";
import { ClinicGrowthTreatments } from "@/components/clinic/ClinicGrowthTreatments";
import { ClinicPageHero } from "@/components/clinic/ClinicPageHero";
import { PartnerStandards } from "@/components/clinic/PartnerStandards";
import { aestheticClinicMailto } from "@/lib/contact";
import {
  aestheticsGrowthTreatments,
  aestheticsPartnerStandards,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Aesthetic Clinics",
  description:
    "Patient acquisition for aesthetic clinics in London — structured enquiries, conversion journeys, content, automation and growth infrastructure from DELVARA.",
};

const acquisitionSteps = [
  {
    title: "Define your services",
    description:
      "Treatments, audience, geography, availability and capacity.",
    detail: "Treatments · audience · geography · availability · capacity",
  },
  {
    title: "Create the journey",
    description:
      "Campaigns, content and landing experiences designed around the services you want to grow.",
    detail: "Campaigns · content · landing experiences",
  },
  {
    title: "Capture interest",
    description:
      "Prospective patients share treatment interest, London area, timeframe, approximate budget and priorities.",
    detail: "Treatment · area · timeframe · budget · priorities",
  },
  {
    title: "Structure the enquiry",
    description:
      "DELVARA captures useful context and explicit contact/share consent.",
    detail: "Context · consent · structured sharing",
  },
  {
    title: "Clinic conversation",
    description:
      "The clinic handles consultation, clinical assessment, suitability, pricing and booking.",
    detail: "Consultation · suitability · pricing · booking",
  },
  {
    title: "Follow up & optimise",
    description:
      "Automation, response workflows, conversion data and campaign refinement improve the journey over time.",
    detail: "Automation · workflows · conversion data · refinement",
  },
] as const;

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
      "Operational automation with conversion tracking, source attribution and funnel performance.",
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
        description="Structured enquiries, conversion journeys and growth infrastructure for aesthetic clinics across London."
      />

      <section
        className="border-b border-delvara-border bg-gradient-to-b from-aesthetics-soft/45 to-delvara-bg py-12 md:py-14"
        aria-labelledby="aesthetics-treatments-heading"
      >
        <div className="container-delvara">
          <div className="max-w-2xl">
            <p className="eyebrow text-aesthetics-deep">Services you can grow</p>
            <h2
              id="aesthetics-treatments-heading"
              className="mt-3 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Demand built around your treatment mix.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-delvara-muted-text">
              Acquisition shaped around the services your clinic offers and
              wants to grow.
            </p>
          </div>

          <ClinicGrowthTreatments
            accent="aesthetics"
            items={aestheticsGrowthTreatments}
          />
        </div>
      </section>

      <AestheticJourney steps={acquisitionSteps} />

      <PartnerStandards
        accent="aesthetics"
        title="A considered approach to clinic partnerships."
        intro="Regulation differs depending on practitioner type and treatment. Our partner review framework considers the registrations, qualifications and standards relevant to the services being offered — including CQC where applicable, not as a universal requirement for every non-surgical treatment."
        standards={aestheticsPartnerStandards}
      />

      <section
        className="border-t border-delvara-border bg-delvara-white py-12 md:py-16"
        aria-labelledby="aesthetics-services-heading"
      >
        <div className="container-delvara">
          <div className="max-w-2xl">
            <p className="eyebrow text-aesthetics-deep">Beyond enquiries</p>
            <h2
              id="aesthetics-services-heading"
              className="mt-3 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Growth infrastructure for aesthetic clinics.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-delvara-muted-text">
              Funnels, digital experiences and systems that help convert
              treatment interest consistently.
            </p>
          </div>

          <ul className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {aestheticsServices.map((service, index) => (
              <li
                key={service.title}
                className="border-t border-aesthetics/25 pt-5"
              >
                <span
                  aria-hidden="true"
                  className="text-[0.65rem] font-medium tracking-[0.16em] text-aesthetics-deep uppercase"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-medium text-delvara-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={aestheticClinicMailto}
              className="btn btn-primary group"
            >
              Discuss your clinic
              <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <Link
              href="/for-clinics/growth-studio"
              className="btn btn-secondary"
            >
              Explore Growth Studio
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-delvara-border bg-delvara-surface py-7">
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
