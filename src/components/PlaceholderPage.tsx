import Link from "next/link";
import { StartSearchButton } from "@/components/StartSearchButton";

type PlaceholderPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  showEnquiryCta?: boolean;
};

export function PlaceholderPage({
  eyebrow,
  title,
  description,
  primaryHref,
  primaryLabel,
  showEnquiryCta = true,
}: PlaceholderPageProps) {
  return (
    <section className="section-pad">
      <div className="container-delvara">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-delvara-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-delvara-muted-text sm:text-lg">
            {description}
          </p>

          <div className="mt-12 rounded-2xl border border-dashed border-delvara-border-strong bg-delvara-white px-6 py-12 text-center sm:px-10">
            <p className="text-xs font-medium tracking-[0.16em] text-delvara-muted-text uppercase">
              Coming next
            </p>
            <h2 className="mt-3 text-2xl font-medium text-delvara-ink">
              Full page coming next
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-delvara-muted-text sm:text-base">
              This route is ready in the navigation structure. A complete
              branded page will follow in a later phase.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              {primaryHref && primaryLabel ? (
                <Link href={primaryHref} className="btn btn-primary">
                  {primaryLabel}
                </Link>
              ) : null}
              {showEnquiryCta ? (
                <StartSearchButton variant="primary">
                  Start your enquiry
                </StartSearchButton>
              ) : null}
              <Link href="/" className="btn btn-secondary">
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
