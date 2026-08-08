import Link from "next/link";
import { SoftAuroraHero } from "@/components/reactbits/SoftAurora/SoftAuroraHero";
import { StartSearchButton } from "@/components/StartSearchButton";
import { HeroDiscoveryPanel } from "@/components/HeroDiscoveryPanel";
import { londonAreas } from "@/lib/content";

const trustItems = [
  "Free to enquire",
  "Private & confidential",
  "No obligation",
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-delvara-border">
      <SoftAuroraHero />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgb(248_245_240/0.92)_0%,rgb(248_245_240/0.72)_38%,rgb(248_245_240/0.22)_68%,transparent_100%)]"
      />
      <div className="container-delvara relative section-pad !pt-10 md:!pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="reveal max-w-xl">
            <p className="eyebrow">
              Private aesthetic & dental services across London
            </p>
            <h1 className="mt-5 text-[2.05rem] font-medium leading-[1.1] tracking-tight text-delvara-ink sm:text-[2.75rem] lg:text-[3.15rem]">
              Explore private treatment with more clarity.
              <span className="mt-3 block text-[1.85rem] sm:text-[2.35rem] lg:text-[2.85rem]">
                Start with DELVARA.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Tell us what you&apos;re considering and we&apos;ll help connect
              your enquiry with relevant aesthetic or dental clinics across
              London.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <StartSearchButton variant="primary" className="w-full sm:w-auto">
                Start your enquiry
              </StartSearchButton>
              <Link
                href="/how-it-works"
                className="btn btn-secondary w-full sm:w-auto"
              >
                See how it works
              </Link>
            </div>

            <div className="mt-10 space-y-4 border-t border-delvara-border pt-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {trustItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-delvara-muted-text"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-delvara-ink"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-delvara-muted-text">
                <span className="font-medium text-delvara-charcoal">
                  Across London
                </span>
                <span
                  aria-hidden="true"
                  className="mx-2 text-delvara-border-strong"
                >
                  ·
                </span>
                {londonAreas.join(" · ")}
              </p>
            </div>
          </div>

          <HeroDiscoveryPanel />
        </div>
      </div>
    </section>
  );
}
