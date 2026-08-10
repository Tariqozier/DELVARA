import { ImageWheel } from "@/components/about/ImageWheel";
import { londonMarketplaceWheelItems } from "@/lib/aboutWheels";
import { londonAreas } from "@/lib/content";

export function LondonSection() {
  return (
    <section
      className="section-pad overflow-x-clip border-y border-delvara-border bg-delvara-white"
      aria-labelledby="london-heading"
    >
      <div className="container-delvara">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 xl:gap-16">
          <div className="max-w-xl lg:max-w-none">
            <p className="eyebrow">Across London</p>
            <h2
              id="london-heading"
              className="mt-4 text-[clamp(1.75rem,4.5vw,2.25rem)] font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Private treatment enquiries across London.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA connects treatment interest with participating aesthetic
              and dental clinics across London.
            </p>
            <p className="mt-6 text-sm tracking-wide text-delvara-muted-text">
              {londonAreas.join(" · ")}
            </p>
          </div>

          <div className="min-w-0 justify-self-center lg:justify-self-stretch">
            <ImageWheel
              items={londonMarketplaceWheelItems}
              variant="treatments"
              className="image-wheel--homepage"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
