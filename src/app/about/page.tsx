import type { Metadata } from "next";
import Link from "next/link";
import { ImageWheel } from "@/components/about/ImageWheel";
import { OriginDiagram } from "@/components/about/OriginDiagram";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StartSearchButton } from "@/components/StartSearchButton";
import { IconArrowRight } from "@/components/icons";
import {
  aboutWheelHeadings,
  growthWheelItems,
  treatmentWheelItems,
} from "@/lib/aboutWheels";

export const metadata: Metadata = {
  title: "About DELVARA",
  description:
    "Built from both sides of the industry — DELVARA connects people exploring private dental and aesthetic services with participating clinics across London.",
};

const originStatements = [
  "DELVARA began through conversations between two people working closely with the dental and aesthetics industries.",
  "From different sides of the market, they kept seeing the same disconnect.",
  "People interested in private treatment were being pushed through ads, clinic websites and generic forms before they had enough clarity about what they were looking for.",
  "At the same time, clinics were investing heavily in websites, marketing and agencies without always receiving enough useful context around the enquiries coming through.",
  "DELVARA grew from the idea that the journey could be better for both.",
] as const;

export default function AboutPage() {
  return (
    <main>
      <section className="section-pad pb-12">
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-3xl">
            <p className="eyebrow">About DELVARA</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              Built from both sides of the industry.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA started with a simple observation: people looking for
              private dental and aesthetic services often face a fragmented
              journey, while clinics spend heavily trying to connect with the
              right prospective patients.
            </p>
            <p className="mt-4 text-lg font-medium text-delvara-ink">
              We believed both sides could work better.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section
        className="section-pad border-y border-delvara-border bg-delvara-white"
        aria-labelledby="origin-heading"
      >
        <div className="container-delvara">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
            <ScrollReveal>
              <p className="eyebrow">Origin</p>
              <h2
                id="origin-heading"
                className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink"
              >
                Where it came from.
              </h2>
              <div className="mt-8 space-y-5">
                {originStatements.map((statement) => (
                  <p
                    key={statement}
                    className="max-w-xl text-base leading-relaxed text-delvara-muted-text"
                  >
                    {statement}
                  </p>
                ))}
              </div>
              <p className="mt-8 text-xl font-medium tracking-tight text-delvara-ink sm:text-2xl">
                Clearer for people.
                <br />
                More useful for clinics.
              </p>
            </ScrollReveal>
            <OriginDiagram />
          </div>
        </div>
      </section>

      <section
        className="section-pad bg-delvara-bg"
        aria-labelledby="worlds-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Categories</p>
            <h2
              id="worlds-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink"
            >
              {aboutWheelHeadings.treatments}
            </h2>
          </ScrollReveal>
          <div className="mt-10">
            <ImageWheel items={treatmentWheelItems} variant="treatments" />
          </div>
        </div>
      </section>

      <section
        className="section-pad border-y border-delvara-border bg-delvara-ink"
        aria-labelledby="growth-wheel-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-white/55">Beyond enquiries</p>
            <h2
              id="growth-wheel-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-white"
            >
              Beyond patient enquiries.
            </h2>
            <p className="mt-4 text-base text-white/70">
              DELVARA can also build the digital infrastructure around clinic
              growth.
            </p>
          </ScrollReveal>
          <div className="mt-10">
            <ImageWheel items={growthWheelItems} variant="growth" />
          </div>
        </div>
      </section>

      <section
        className="section-pad bg-delvara-white"
        aria-labelledby="mission-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Mission</p>
            <h2
              id="mission-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink"
            >
              Three parts. One system.
            </h2>
          </ScrollReveal>

          <ul className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              {
                label: "For people",
                text: "Make the first step clearer.",
              },
              {
                label: "For clinics",
                text: "Make acquisition more useful.",
              },
              {
                label: "DELVARA",
                text: "Build the system between them.",
              },
            ].map((item, index) => (
              <ScrollReveal key={item.label} as="li" className="relative text-center">
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-delvara-muted-text">
                  {item.label}
                </p>
                <p className="mt-3 text-xl font-medium text-delvara-ink">
                  {item.text}
                </p>
                {index < 2 ? (
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 -right-3 hidden text-delvara-border-strong md:block"
                  >
                    →
                  </span>
                ) : null}
              </ScrollReveal>
            ))}
          </ul>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <StartSearchButton variant="primary">
              Explore treatment
            </StartSearchButton>
            <Link href="/for-clinics" className="btn btn-secondary">
              For Clinics
              <IconArrowRight className="icon-arrow h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
