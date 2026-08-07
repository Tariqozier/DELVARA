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
            More confidence before you commit.
          </h2>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <li
              key={benefit.title}
              className="relative rounded-xl border border-delvara-border bg-delvara-bg p-7 transition-colors duration-300 hover:bg-delvara-white"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 left-7 h-0.5 w-12 bg-delvara-ink"
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
