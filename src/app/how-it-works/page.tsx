import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StartSearchButton } from "@/components/StartSearchButton";
import { TwoSidedJourney } from "@/components/TwoSidedJourney";
import { IconArrowRight } from "@/components/icons";
import {
  clinicGrowthServices,
  enquiryWhyItMatters,
  howItWorksPeopleJourney,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "A clearer private dental and aesthetic enquiry journey in London — from exploring a service to a better-informed clinic conversation.",
};

export default function HowItWorksPage() {
  return (
    <main>
      {/* A) Hero */}
      <section className="section-pad">
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-3xl">
            <p className="eyebrow">How DELVARA works</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              From exploring a service to a better-informed clinic conversation.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA helps make the early stages of private dental and
              aesthetic treatment clearer — giving people a structured way to
              explain what they&apos;re looking for and giving participating
              clinics better context before making contact.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Clinical suitability is determined by the clinic and relevant
              healthcare professionals. DELVARA does not diagnose or recommend
              medical treatment.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <StartSearchButton variant="primary">
                Start your enquiry
              </StartSearchButton>
              <Link href="/for-clinics" className="btn btn-secondary">
                For Clinics
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* B) For people */}
      <section
        className="section-pad border-y border-delvara-border bg-delvara-white"
        aria-labelledby="for-people-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">For people</p>
            <h2
              id="for-people-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              How it works for you.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              A straightforward journey from interest to conversation — designed
              to help you clarify what you&apos;re looking for before a clinic
              responds.
            </p>
          </ScrollReveal>

          <ol className="mt-14 space-y-0">
            {howItWorksPeopleJourney.map((step, index) => (
              <ScrollReveal key={step.number} as="li" className="relative">
                <div className="flex gap-6 pb-12 last:pb-0 md:gap-10">
                  <div className="flex flex-col items-center">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-delvara-border bg-delvara-bg text-sm font-medium tracking-wide text-delvara-ink">
                      {step.number}
                    </span>
                    {index < howItWorksPeopleJourney.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="mt-3 w-px flex-1 bg-delvara-border"
                      />
                    ) : null}
                  </div>
                  <div className="pt-2 pb-2 md:pt-3">
                    <h3 className="text-xl font-medium text-delvara-ink sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </ol>

          <ScrollReveal className="mt-6 rounded-xl border border-delvara-border bg-delvara-bg px-6 py-5 sm:px-8">
            <p className="text-sm leading-relaxed text-delvara-muted-text sm:text-base">
              <span className="font-medium text-delvara-ink">Please note:</span>{" "}
              clinical suitability, diagnosis and treatment decisions are always
              determined by the clinic and relevant healthcare professionals —
              not by DELVARA.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* C) Why the information matters */}
      <section
        className="section-pad bg-delvara-bg"
        aria-labelledby="why-info-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Enquiry context</p>
            <h2
              id="why-info-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Why the information matters.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              The details you share help a participating clinic understand your
              enquiry before making contact — so the first conversation can be
              more relevant and useful.
            </p>
          </ScrollReveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {enquiryWhyItMatters.map((item) => (
              <ScrollReveal
                key={item.title}
                as="li"
                className="rounded-xl border border-delvara-border bg-delvara-white p-6 transition-colors duration-300 hover:border-delvara-border-strong"
              >
                <h3 className="text-lg font-medium text-delvara-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                  {item.description}
                </p>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* D) For clinics */}
      <section
        className="section-pad border-y border-delvara-border bg-delvara-white"
        aria-labelledby="for-clinics-heading"
      >
        <div className="container-delvara">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <ScrollReveal>
              <p className="eyebrow">For clinics</p>
              <h2
                id="for-clinics-heading"
                className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
              >
                Better context before the first conversation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
                Participating clinics tell DELVARA about the services they offer,
                the London areas they cover, capacity, practitioners, commercial
                priorities and any relevant criteria for patient enquiries.
              </p>
              <p className="mt-4 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
                DELVARA can then support campaigns, landing journeys, enquiry
                forms, qualification, consent, routing, follow-up and tracking —
                with the objective of connecting clinics with treatment-specific
                patient enquiries that arrive with useful context.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/for-clinics/dental"
                  className="btn btn-secondary border-dental/35 bg-dental-soft/40 hover:bg-dental-soft"
                >
                  Dental partnerships
                  <IconArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/for-clinics/aesthetics"
                  className="btn btn-secondary border-aesthetics/35 bg-aesthetics-soft hover:bg-aesthetics-soft/80"
                >
                  Aesthetic partnerships
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <ul className="grid gap-4">
                {clinicGrowthServices.map((service) => (
                  <li
                    key={service.title}
                    className="rounded-xl border border-delvara-border bg-delvara-bg p-5"
                  >
                    <h3 className="text-base font-medium text-delvara-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text">
                      {service.description}
                    </p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* E) Two sides, one journey */}
      <section
        className="section-pad bg-delvara-surface"
        aria-labelledby="journey-diagram-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">The full picture</p>
            <h2
              id="journey-diagram-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Two sides, one journey.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              From a person exploring treatment to a participating clinic
              conversation — with DELVARA supporting the enquiry in between.
            </p>
          </ScrollReveal>

          <div className="mt-14">
            <TwoSidedJourney />
          </div>
        </div>
      </section>

      {/* F) Soft CTA */}
      <section
        className="section-pad bg-delvara-white"
        aria-labelledby="how-cta-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <h2
              id="how-cta-heading"
              className="text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Ready to take the first step?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Tell us what you&apos;re considering — dental or aesthetics — and
              start a clearer enquiry journey in London.
            </p>
            <div className="mt-8 flex justify-center">
              <StartSearchButton variant="primary">
                Start your enquiry
              </StartSearchButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
