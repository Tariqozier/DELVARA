import type { Metadata } from "next";
import Link from "next/link";
import { ConnectionDiagram } from "@/components/how-it-works/ConnectionDiagram";
import { JourneyFlow } from "@/components/how-it-works/JourneyFlow";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StartSearchButton } from "@/components/StartSearchButton";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "From interest to conversation — how DELVARA structures private dental and aesthetic enquiries in London.",
};

const whyWeAsk = [
  {
    title: "Treatment",
    description: "So clinics understand the service you're exploring.",
  },
  {
    title: "Location",
    description: "So geography across London can be considered practically.",
  },
  {
    title: "Timing & budget",
    description: "So the enquiry reflects how active and approximate it is.",
  },
  {
    title: "Priorities",
    description: "So what matters most is clear before contact.",
  },
  {
    title: "Contact & consent",
    description: "So a clinic can respond only after an explicit choice.",
  },
] as const;

export default function HowItWorksPage() {
  return (
    <main>
      <section className="section-pad pb-10 md:pb-12">
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">How it works</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              From interest to conversation.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              A structured way for people to explain what they&apos;re looking
              for — and for participating clinics to understand an enquiry
              before the first conversation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="section-pad border-y border-delvara-border bg-delvara-white pt-10"
        aria-labelledby="journey-heading"
      >
        <div className="container-delvara">
          <h2 id="journey-heading" className="sr-only">
            The enquiry journey
          </h2>
          <JourneyFlow />
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-delvara-muted-text">
            Clinical suitability, diagnosis and treatment decisions remain with
            the clinic and relevant healthcare professionals — not DELVARA.
          </p>
        </div>
      </section>

      <section
        className="section-pad bg-delvara-bg"
        aria-labelledby="why-ask-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="max-w-xl">
            <p className="eyebrow">Enquiry context</p>
            <h2
              id="why-ask-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink"
            >
              Why we ask.
            </h2>
          </ScrollReveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyWeAsk.map((item) => (
              <ScrollReveal key={item.title} as="li" className="border-t border-delvara-border pt-4">
                <h3 className="text-base font-medium text-delvara-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-delvara-muted-text">
                  {item.description}
                </p>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="section-pad border-y border-delvara-border bg-delvara-white"
        aria-labelledby="connection-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-xl text-center">
            <h2
              id="connection-heading"
              className="text-3xl font-medium tracking-tight text-delvara-ink"
            >
              Two sides. One connection.
            </h2>
          </ScrollReveal>
          <div className="mt-10">
            <ConnectionDiagram />
          </div>
        </div>
      </section>

      <section className="section-pad" aria-labelledby="how-cta-heading">
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-xl text-center">
            <h2
              id="how-cta-heading"
              className="text-3xl font-medium tracking-tight text-delvara-ink"
            >
              Ready when you are.
            </h2>
            <p className="mt-4 text-base text-delvara-muted-text">
              Start with the service you&apos;re considering.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <StartSearchButton variant="primary">
                Start your enquiry
              </StartSearchButton>
              <Link href="/for-clinics" className="btn btn-secondary">
                For Clinics
                <IconArrowRight className="icon-arrow h-4 w-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
