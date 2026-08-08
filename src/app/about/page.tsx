import type { Metadata } from "next";
import Link from "next/link";
import { ImageWheel } from "@/components/about/ImageWheel";
import { OriginDiagram } from "@/components/about/OriginDiagram";
import { ScrollReveal } from "@/components/ScrollReveal";
import { StartSearchButton } from "@/components/StartSearchButton";
import { IconArrowRight } from "@/components/icons";
import {
  aboutWheelHeadings,
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

const londonAreas = [
  "Harley Street",
  "Knightsbridge",
  "Fulham",
  "North London",
  "West London",
] as const;

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section-pad pb-10 md:pb-12">
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

      {/* Origin story */}
      <section
        className="section-pad border-t border-delvara-border bg-delvara-white pt-12 pb-8 md:pt-16 md:pb-10"
        aria-labelledby="origin-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-3xl">
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
                  className="text-base leading-relaxed text-delvara-muted-text"
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
        </div>
      </section>

      {/* Large origin / connection diagram */}
      <section
        className="section-pad bg-delvara-white !pt-4 md:!pt-6"
        aria-labelledby="diagram-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
            <h2
              id="diagram-heading"
              className="text-2xl font-medium tracking-tight text-delvara-ink sm:text-3xl"
            >
              The connection between both sides.
            </h2>
          </ScrollReveal>
          <div className="mx-auto flex w-full justify-center lg:w-[82%] xl:w-[85%]">
            <OriginDiagram />
          </div>
        </div>
      </section>

      {/* Single ImageWheel */}
      <section
        className="section-pad border-y border-delvara-border bg-delvara-bg"
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

      {/* London traction */}
      <section
        className="section-pad bg-delvara-white"
        aria-labelledby="london-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-3xl">
            <p className="eyebrow">DELVARA in London</p>
            <h2
              id="london-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Already active across London.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA is already working with established dental and aesthetic
              clinics across Harley Street, Knightsbridge and Fulham, alongside
              ambitious growing practices across North and West London.
            </p>
            <p className="mt-4 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              We help them connect with high-intent prospective patients who are
              actively researching private treatment and moving closer to a
              consultation — with useful context around what they&apos;re looking
              for before the clinic makes contact.
            </p>
          </ScrollReveal>

          <ul
            className="mx-auto mt-12 flex max-w-4xl flex-wrap items-end justify-center gap-x-6 gap-y-6 border-y border-delvara-border py-8 sm:gap-x-10 md:gap-x-12"
            aria-label="London areas"
          >
            {londonAreas.map((area) => (
              <li key={area} className="text-center">
                <span className="block font-[inherit] text-[1.35rem] font-medium tracking-tight text-delvara-ink sm:text-[1.65rem] md:text-[1.85rem]">
                  {area}
                </span>
                <span
                  aria-hidden="true"
                  className={`mx-auto mt-3 block h-px w-10 ${
                    area.includes("London")
                      ? "bg-aesthetics/55"
                      : "bg-dental/60"
                  }`}
                />
              </li>
            ))}
          </ul>

          <ScrollReveal className="mx-auto mt-10 max-w-2xl">
            <p className="border-t border-delvara-border pt-8 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
              For selected clinic partners, that relationship goes further —
              supporting the marketing, digital experiences, websites,
              automation and custom technology that sit behind sustainable
              patient growth.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission + CTA */}
      <section
        className="section-pad border-t border-delvara-border bg-delvara-bg"
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
              <ScrollReveal
                key={item.label}
                as="li"
                className="relative text-center"
              >
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
