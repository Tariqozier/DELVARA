import Link from "next/link";
import { StartSearchButton } from "@/components/StartSearchButton";
import { HeroDiscoveryPanel } from "@/components/HeroDiscoveryPanel";

const trustItems = [
  "Selected clinics",
  "Private & confidential",
  "No obligation",
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-delvara-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(217_228_218/0.55),transparent_55%),linear-gradient(180deg,rgb(247_245_239)_0%,rgb(238_242_237/0.45)_100%)]"
      />
      <div className="container-delvara relative section-pad !pt-10 md:!pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="reveal max-w-xl">
            <p className="eyebrow">Private treatment, made clearer.</p>
            <h1 className="mt-5 text-[2.35rem] font-medium leading-[1.08] tracking-tight text-delvara-ink sm:text-5xl lg:text-[3.35rem]">
              Find the right treatment.
              <span className="mt-2 block text-delvara-sage-deep">
                Find the right clinic.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Tell us what you&apos;re looking for and we&apos;ll help connect
              you with clinics that match your needs, location and preferences.
            </p>
            <p className="mt-3 text-sm font-medium text-delvara-charcoal">
              No pressure. No obligation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <StartSearchButton variant="primary" className="w-full sm:w-auto">
                Start your search
              </StartSearchButton>
              <Link
                href="/how-it-works"
                className="btn btn-secondary w-full sm:w-auto"
              >
                How DELVARA works
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-delvara-border pt-6">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-delvara-muted-text"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-delvara-sage"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <HeroDiscoveryPanel />
        </div>
      </div>
    </section>
  );
}
