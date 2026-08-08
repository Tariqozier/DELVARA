import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore private dental and aesthetic services in London and start an informed enquiry with DELVARA.",
};

export default function TreatmentsPage() {
  return (
    <main>
      <section className="section-pad">
        <div className="container-delvara">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Treatments</p>
            <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
              Explore dental and aesthetic services.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA helps people explore the service they&apos;re considering
              and start an informed enquiry with participating clinics across
              London.
            </p>
          </div>

          <ul className="mx-auto mt-12 grid max-w-4xl gap-5 lg:grid-cols-2">
            <li>
              <Link
                href="/treatments/dental"
                className="group relative flex min-h-[16rem] flex-col overflow-hidden rounded-2xl border border-dental/35 bg-gradient-to-br from-dental-soft/80 via-delvara-white to-delvara-bg p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-dental/55 hover:shadow-[0_18px_40px_rgb(23_45_46/0.08)]"
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-2.5 rounded-full bg-dental"
                />
                <h2 className="mt-5 text-3xl font-medium text-delvara-ink">
                  Dental
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                  General, cosmetic, orthodontic, implant and specialist dental
                  services.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-dental-deep">
                  Explore dental services
                  <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/treatments/aesthetics"
                className="group relative flex min-h-[16rem] flex-col overflow-hidden rounded-2xl border border-aesthetics/35 bg-gradient-to-br from-aesthetics-soft via-delvara-white to-delvara-bg p-8 transition-all duration-200 hover:-translate-y-0.5 hover:border-aesthetics/55 hover:shadow-[0_18px_40px_rgb(23_45_46/0.08)]"
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-2.5 rounded-full bg-aesthetics-peach"
                />
                <h2 className="mt-5 text-3xl font-medium text-delvara-ink">
                  Aesthetics
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                  Injectables, skin, facial tightening, body and hair services.
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-aesthetics-deep">
                  Explore aesthetic services
                  <IconArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
