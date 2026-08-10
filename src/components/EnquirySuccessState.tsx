"use client";

type EnquirySuccessStateProps = {
  titleId: string;
  descriptionId: string;
  onClose: () => void;
  enquiryId?: string | null;
};

export function EnquirySuccessState({
  titleId,
  descriptionId,
  onClose,
  enquiryId,
}: EnquirySuccessStateProps) {
  return (
    <div className="enquiry-success overflow-y-auto px-5 py-8 sm:px-7 sm:py-10">
      <div className="enquiry-success__inner mx-auto max-w-md text-center">
        <div className="enquiry-success__icon-stage" aria-hidden="true">
          <div className="enquiry-success__glow" />
          <div className="enquiry-success__circle">
            <svg
              className="enquiry-success__check"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="enquiry-success__check-path"
                d="M14 24.5 L21.5 32 L34.5 17"
                stroke="currentColor"
                strokeWidth="2.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <p className="enquiry-success__eyebrow eyebrow mt-7">Your enquiry</p>
        <h2
          id={titleId}
          className="enquiry-success__title mt-3 text-2xl font-medium tracking-tight text-delvara-ink sm:text-[1.75rem]"
        >
          Enquiry received.
        </h2>
        <p
          id={descriptionId}
          className="enquiry-success__copy mt-3 text-base leading-relaxed text-delvara-muted-text"
        >
          Your enquiry has reached the DELVARA team. We&apos;ll review the
          information you&apos;ve provided and aim to be in touch within 2–4
          hours.
        </p>
        <p className="enquiry-success__note mt-4 text-sm leading-relaxed text-delvara-muted-text">
          If you submit outside our normal contact hours, we&apos;ll get back to
          you as soon as possible on the next working day.
        </p>
        {enquiryId ? (
          <p className="enquiry-success__note mt-3 text-xs tracking-wide text-delvara-muted-text uppercase">
            Reference {enquiryId}
          </p>
        ) : null}

        <div
          className="enquiry-success__journey mt-8"
          aria-label="You to DELVARA to clinic"
        >
          <div className="enquiry-success__node enquiry-success__node--you">
            <span className="enquiry-success__dot" />
            <span className="enquiry-success__label">You</span>
          </div>
          <div className="enquiry-success__connector enquiry-success__connector--a">
            <span className="enquiry-success__connector-fill" />
          </div>
          <div className="enquiry-success__node enquiry-success__node--delvara">
            <span className="enquiry-success__hub">DELVARA</span>
          </div>
          <div className="enquiry-success__connector enquiry-success__connector--b">
            <span className="enquiry-success__connector-fill" />
          </div>
          <div className="enquiry-success__node enquiry-success__node--clinic">
            <span className="enquiry-success__dot" />
            <span className="enquiry-success__label">Clinic</span>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="enquiry-success__action btn btn-primary mt-8 w-full sm:w-auto"
        >
          Close
        </button>
      </div>
    </div>
  );
}
