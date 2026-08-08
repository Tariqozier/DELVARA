import { benefits } from "@/lib/content";

export function Benefits() {
  return (
    <section
      className="section-pad bg-delvara-white"
      aria-labelledby="benefits-heading"
    >
      <div className="container-delvara">
        <div className="max-w-2xl">
          <p className="eyebrow">Why DELVARA</p>
          <h2
            id="benefits-heading"
            className="mt-4 text-3xl font-medium tracking-tight text-delvara-ink sm:text-4xl"
          >
            A clearer starting point.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            Private treatment can feel fragmented. DELVARA makes the first step
            clearer.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <li
              key={benefit.title}
              className="group relative rounded-xl border border-delvara-border bg-delvara-bg p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-delvara-border-strong hover:bg-delvara-white hover:shadow-[0_10px_28px_rgb(23_45_46/0.05)]"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-7 h-0.5 w-12 bg-delvara-ink transition-all duration-200 group-hover:w-16"
              />
              <p className="text-xs font-medium tracking-[0.14em] text-delvara-muted-text uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-xl font-medium text-delvara-ink">
                {benefit.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-delvara-muted-text sm:text-base">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
