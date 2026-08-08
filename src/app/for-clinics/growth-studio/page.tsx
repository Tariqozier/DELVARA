import type { Metadata } from "next";
import Link from "next/link";
import { MoltenMetalHero } from "@/components/reactbits/MoltenMetal/MoltenMetalHero";
import { ScrollReveal } from "@/components/ScrollReveal";
import { IconArrowRight } from "@/components/icons";
import { GrowthCapabilities } from "@/components/growth/GrowthCapabilities";
import { GrowthFlow } from "@/components/growth/GrowthFlow";

export const metadata: Metadata = {
  title: "Growth Studio",
  description:
    "DELVARA Growth Studio — funnels, websites, marketing, automation and custom digital products for clinic growth.",
};

export default function GrowthStudioPage() {
  return (
    <main className="bg-[#0f1f1f] text-white">
      <section className="relative min-h-[88svh] overflow-hidden">
        <MoltenMetalHero />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgb(15_31_31/0.55)_0%,rgb(15_31_31/0.35)_45%,rgb(15_31_31/0.82)_100%)]"
        />
        <div className="container-delvara relative flex min-h-[88svh] items-center section-pad">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.18em] text-white/55 uppercase">
              DELVARA Growth Studio
            </p>
            <h1 className="mt-5 text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Build the system behind your growth.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
              Funnels, websites, marketing, automation and custom digital
              products built around the way your clinic acquires and supports
              patients.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:partnerships@getdelvara.com?subject=Growth%20Studio%20project"
                className="btn bg-white text-delvara-ink hover:bg-white/90"
              >
                Discuss a project
                <IconArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#capabilities"
                className="btn border border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                Explore our capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="section-pad border-t border-white/10"
        aria-labelledby="capabilities-heading"
      >
        <div className="container-delvara">
          <ScrollReveal className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
              Capabilities
            </p>
            <h2
              id="capabilities-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl"
            >
              Everything around acquisition.
            </h2>
            <p className="mt-4 text-base text-white/65">
              Compact capability areas — scoped to the clinic, not a generic
              agency menu.
            </p>
          </ScrollReveal>
          <div className="mt-12">
            <GrowthCapabilities />
          </div>
        </div>
      </section>

      <section
        className="section-pad border-t border-white/10 bg-[#122424]"
        aria-labelledby="flow-heading"
      >
        <div className="container-delvara">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <ScrollReveal>
              <p className="text-xs font-medium tracking-[0.18em] text-white/45 uppercase">
                How we scope
              </p>
              <h2
                id="flow-heading"
                className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl"
              >
                One project or the whole system.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-white/65 sm:text-base">
                <p>Some clinics may only need a landing page.</p>
                <p>Some may need a new website.</p>
                <p>
                  Some may need a full patient acquisition funnel with
                  automation and reporting.
                </p>
                <p className="font-medium text-white/85">
                  DELVARA can scope work around the actual business requirement.
                </p>
              </div>
            </ScrollReveal>
            <GrowthFlow />
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-white/10">
        <div className="container-delvara">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-medium tracking-tight text-white">
              Ready to discuss a build?
            </h2>
            <p className="mt-4 text-base text-white/65">
              Tell us what you&apos;re trying to grow. We&apos;ll shape the right
              starting point.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:partnerships@getdelvara.com?subject=Growth%20Studio%20project"
                className="btn bg-white text-delvara-ink hover:bg-white/90"
              >
                Discuss a project
                <IconArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/for-clinics"
                className="btn border border-white/25 bg-transparent text-white hover:bg-white/10"
              >
                Back to For Clinics
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
