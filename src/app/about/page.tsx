import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StartSearchButton } from "@/components/StartSearchButton";
import { IconArrowRight } from "@/components/icons";
import {
  aestheticsPartnerStandards,
  dentalPartnerStandards,
  londonAreas,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About DELVARA",
  description:
    "About DELVARA — making the first step into private dental and aesthetic treatment in London clearer for people and participating clinics.",
};

const partnerReviewPrinciples = [
  {
    title: "Relevant professional registration",
    description:
      "Practitioners should hold appropriate registration with the relevant professional body for the services they provide — such as the GDC, GMC, NMC, GPhC or HCPC, depending on profession.",
  },
  {
    title: "Appropriate regulation where applicable",
    description:
      "Where regulated activity applies, publicly available regulatory information — including CQC registration where relevant — may be considered as part of partner review.",
  },
  {
    title: "Treatment-specific credentials",
    description:
      "Additional professional indicators, qualifications and experience relevant to the services offered may be reviewed — as professional signals, not as substitutes for statutory regulation.",
  },
  {
    title: "Transparent patient processes",
    description:
      "Partner information may include practitioner credentials, services provided, locations, consent processes, aftercare, complaints handling and finance options where offered.",
  },
  {
    title: "Responsible enquiry handling",
    description:
      "Participating clinics are expected to handle patient enquiries thoughtfully — with clear consent, appropriate follow-up and escalation processes where needed.",
  },
] as const;

const whatDelvaraIsNot = [
  "A clinic or treatment provider",
  "A healthcare professional",
  "A diagnostic service",
  "A medical advice service",
] as const;

export default function AboutPage() {
  return (
    <main>
      {/* A) Hero */}
      <section className="section-pad">
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-3xl">
            <p className="eyebrow">About DELVARA</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              Making the first step into private treatment clearer.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA is a London-focused service that sits between people
              considering private dental or aesthetic treatment and participating
              clinics looking for relevant patient enquiries.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              We aim to improve the connection on both sides — giving people a
              clearer way to explore and enquire, and giving clinics more useful
              context before the first conversation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* B) Why DELVARA exists */}
      <section
        className="section-pad border-y border-delvara-border bg-delvara-white"
        aria-labelledby="why-exists-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-3xl">
            <p className="eyebrow">Our purpose</p>
            <h2
              id="why-exists-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Why DELVARA exists.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              <p>
                People exploring private dental or aesthetic treatment often
                encounter inconsistent information — unclear service descriptions,
                fragmented online journeys and little sense of what a clinic
                conversation might involve.
              </p>
              <p>
                Clinics, meanwhile, invest in marketing and acquisition without
                always receiving enough context to make a first conversation
                genuinely useful.
              </p>
              <p>
                DELVARA aims to improve that connection — helping people submit
                more informed enquiries, and helping participating clinics receive
                patient enquiries with the context that matters.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* C) Two sides */}
      <section
        className="section-pad bg-delvara-bg"
        aria-labelledby="two-sides-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Two sides</p>
            <h2
              id="two-sides-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Built for people and clinics.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <ScrollReveal
              as="article"
              className="relative overflow-hidden rounded-2xl border border-dental/30 bg-dental-soft/50 p-8 sm:p-10"
            >
              <p className="eyebrow text-dental-deep">For people</p>
              <h3 className="mt-4 text-2xl font-medium text-delvara-ink">
                Explore with more clarity.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                Start with the dental or aesthetic service you&apos;re
                considering. Share your London location, timeframe, approximate
                budget and priorities — then submit an enquiry with your consent.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                Where there is a relevant participating clinic, their team may
                contact you to discuss the service and explain appropriate next
                steps. You remain in control throughout.
              </p>
              <div className="mt-8">
                <StartSearchButton variant="primary">
                  Start your enquiry
                </StartSearchButton>
              </div>
            </ScrollReveal>

            <ScrollReveal
              as="article"
              className="relative overflow-hidden rounded-2xl border border-aesthetics/30 bg-aesthetics-soft p-8 sm:p-10"
            >
              <p className="eyebrow text-aesthetics-deep">For clinics</p>
              <h3 className="mt-4 text-2xl font-medium text-delvara-ink">
                Receive enquiries with context.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                Participating clinics connect with people actively considering
                private treatment across London — with treatment interest,
                location, timing, budget and priorities included from the start.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                DELVARA can also support acquisition journeys, landing pages,
                qualification flows, routing, follow-up and performance tracking.
              </p>
              <div className="mt-8">
                <Link href="/for-clinics" className="btn btn-secondary">
                  Partner with DELVARA
                  <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* D) Starting with London */}
      <section
        className="section-pad bg-delvara-white"
        aria-labelledby="london-heading"
      >
        <div className="container-delvara">
          <div className="rounded-2xl border border-delvara-border bg-delvara-bg px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
            <ScrollReveal className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">Geography</p>
              <h2
                id="london-heading"
                className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
              >
                Starting with London.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
                DELVARA accepts enquiries from people across London — North,
                South, East, West and Central. Our focus is on building a
                considered service here before any wider expansion.
              </p>

              <ul className="mt-10 flex flex-wrap items-center justify-center gap-3">
                {londonAreas.map((area) => (
                  <li
                    key={area}
                    className="min-w-[7.5rem] rounded-lg border border-delvara-border bg-delvara-white px-4 py-3 text-sm font-medium tracking-wide text-delvara-ink"
                  >
                    {area}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* E) Our approach to standards */}
      <section
        className="section-pad border-y border-delvara-border bg-delvara-surface"
        aria-labelledby="standards-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Partner review</p>
            <h2
              id="standards-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Our approach to standards.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              As DELVARA develops its partner network, clinic review considers
              general principles drawn from dental and aesthetic partnership
              requirements — applied thoughtfully to the services each clinic
              offers.
            </p>
          </ScrollReveal>

          <ul className="mt-12 grid gap-5 md:grid-cols-2">
            {partnerReviewPrinciples.map((principle) => (
              <ScrollReveal
                key={principle.title}
                as="li"
                className="rounded-xl border border-delvara-border bg-delvara-white p-6"
              >
                <h3 className="text-lg font-medium text-delvara-ink">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                  {principle.description}
                </p>
              </ScrollReveal>
            ))}
          </ul>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ScrollReveal
              as="article"
              className="rounded-xl border border-dental/30 bg-dental-soft/40 p-6"
            >
              <p className="eyebrow text-dental-deep">Dental considerations</p>
              <ul className="mt-5 space-y-4">
                {dentalPartnerStandards.map((item) => (
                  <li key={item.title}>
                    <h3 className="text-sm font-medium text-delvara-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-delvara-muted-text">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal
              as="article"
              className="rounded-xl border border-aesthetics/30 bg-aesthetics-soft p-6"
            >
              <p className="eyebrow text-aesthetics-deep">
                Aesthetic considerations
              </p>
              <ul className="mt-5 space-y-4">
                {aestheticsPartnerStandards.map((item) => (
                  <li key={item.title}>
                    <h3 className="text-sm font-medium text-delvara-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-delvara-muted-text">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal className="mt-8 rounded-xl border border-delvara-border-strong bg-delvara-white px-6 py-5 sm:px-8">
            <p className="text-sm leading-relaxed text-delvara-muted-text sm:text-base">
              <span className="font-medium text-delvara-ink">Important:</span>{" "}
              DELVARA&apos;s partner review is not a substitute for professional
              regulation or clinical assessment. Clinical suitability and
              treatment decisions always remain between the individual and the
              relevant healthcare professional.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* F) What DELVARA is not */}
      <section
        className="section-pad bg-delvara-white"
        aria-labelledby="not-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="max-w-2xl">
            <p className="eyebrow">Clarity</p>
            <h2
              id="not-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              What DELVARA is not.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA supports enquiry journeys — it does not provide clinical
              care or medical advice.
            </p>
          </ScrollReveal>

          <ScrollReveal as="ul" className="mt-10 grid gap-3 sm:grid-cols-2">
            {whatDelvaraIsNot.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-delvara-border bg-delvara-bg px-5 py-4"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-delvara-ink"
                />
                <span className="text-sm leading-relaxed text-delvara-charcoal sm:text-base">
                  DELVARA is not {item.toLowerCase()}.
                </span>
              </li>
            ))}
          </ScrollReveal>
        </div>
      </section>

      {/* G) CTA */}
      <section
        className="section-pad bg-delvara-charcoal"
        aria-labelledby="about-cta-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <h2
              id="about-cta-heading"
              className="text-3xl font-medium tracking-tight text-delvara-white sm:text-4xl"
            >
              Two ways to begin.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-delvara-white/70 sm:text-lg">
              Whether you&apos;re exploring treatment or looking to partner,
              DELVARA is designed to make the first step clearer.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <StartSearchButton variant="on-dark">
                I&apos;m exploring treatment
              </StartSearchButton>
              <Link href="/for-clinics" className="btn btn-ghost-on-dark">
                Partner with DELVARA
                <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
