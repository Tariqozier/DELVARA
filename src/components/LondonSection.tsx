import { londonAreas } from "@/lib/content";

export function LondonSection() {
  return (
    <section
      className="section-pad bg-delvara-white"
      aria-labelledby="london-heading"
    >
      <div className="container-delvara">
        <div className="rounded-2xl border border-delvara-border bg-delvara-bg px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Geography</p>
            <h2
              id="london-heading"
              className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
            >
              Starting with London.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
              DELVARA accepts enquiries from people across North, South, East,
              West and Central London. Helping connect treatment enquiries with
              participating clinics across London.
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
          </div>
        </div>
      </div>
    </section>
  );
}
