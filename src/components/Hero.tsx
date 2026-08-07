import Link from "next/link";
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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(241_238_232/0.9),transparent_52%),linear-gradient(180deg,#f8f5f0_0%,#f1eee8_100%)]"
      />
      <div className="container-delvara relative section-pad !pt-10 md:!pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div className="reveal max-w-xl">
            <p className="eyebrow">Private dental & aesthetic treatment</p>
            <h1 className="mt-5 text-[2.2rem] font-medium leading-[1.08] tracking-tight text-delvara-ink sm:text-5xl lg:text-[3.2rem]">
              Considering treatment in London?
              <span className="mt-3 block">Start with DELVARA.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              Whether you&apos;re considering dental or aesthetic treatment,
              tell us what you&apos;re interested in, where you&apos;re based
              and when you&apos;re thinking about getting started.
            </p>
            <p className="mt-3 text-sm font-medium text-delvara-charcoal sm:text-base">
              We&apos;ll help connect your enquiry with a relevant
              participating clinic that may be able to help.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <StartSearchButton variant="primary" className="w-full sm:w-auto">
                Start your enquiry
              </StartSearchButton>
              <Link
                href="/how-it-works"
                className="btn btn-secondary w-full sm:w-auto"
              >
                How it works
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
                <span aria-hidden="true" className="mx-2 text-delvara-border-strong">
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
