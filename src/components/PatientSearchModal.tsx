"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import Link from "next/link";
import { useSearch } from "@/components/SearchProvider";
import { IconArrowRight, IconCheck, IconClose } from "@/components/icons";
import {
  priorityOptions,
  searchTreatments,
  timingOptions,
  travelOptions,
} from "@/lib/content";

type FormState = {
  treatment: string;
  location: string;
  travel: string;
  timing: string;
  priorities: string[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
};

const initialForm: FormState = {
  treatment: "",
  location: "",
  travel: "",
  timing: "",
  priorities: [],
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  consent: false,
};

const TOTAL_STEPS = 5;

function togglePriority(current: string[], value: string) {
  if (value === "Not sure yet") {
    return current.includes(value) ? [] : [value];
  }

  const withoutUnsure = current.filter((item) => item !== "Not sure yet");
  return withoutUnsure.includes(value)
    ? withoutUnsure.filter((item) => item !== value)
    : [...withoutUnsure, value];
}

export function PatientSearchModal() {
  const { isOpen, closeSearch } = useSearch();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [submittedDemo, setSubmittedDemo] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const titleId = useId();
  const descriptionId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 0);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
      previouslyFocused.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSearch();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeSearch]);

  useEffect(() => {
    if (!isOpen) {
      const resetTimer = window.setTimeout(() => {
        setStep(1);
        setForm(initialForm);
        setSubmittedDemo(false);
        setError(null);
      }, 200);
      return () => window.clearTimeout(resetTimer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  function canContinue() {
    if (step === 1) return Boolean(form.treatment);
    if (step === 2) return form.location.trim().length >= 2;
    if (step === 3) return Boolean(form.timing);
    if (step === 4) return form.priorities.length > 0;
    return true;
  }

  function goNext() {
    if (!canContinue()) {
      setError("Please complete this step to continue.");
      return;
    }
    setError(null);
    setStep((current) => Math.min(current + 1, TOTAL_STEPS));
  }

  function goBack() {
    setError(null);
    setStep((current) => Math.max(current - 1, 1));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      !form.firstName.trim() ||
      !form.lastName.trim() ||
      !form.email.trim() ||
      !form.phone.trim()
    ) {
      setError("Please complete all required contact fields.");
      return;
    }

    if (!form.consent) {
      setError("Please confirm consent before continuing.");
      return;
    }

    // FRONTEND DEMO ONLY — not persisted to a backend/API/database yet.
    // Connect this handler to the lead intake API when available.
    console.info("[DELVARA] Demo enquiry payload (not submitted remotely)", {
      ...form,
      demo: true,
      persisted: false,
    });

    setError(null);
    setSubmittedDemo(true);
  }

  function onPanelKeyDown(event: ReactKeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab" || !panelRef.current) return;

    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[80] flex items-end justify-center bg-[rgb(16_42_43/0.55)] p-0 sm:items-center sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeSearch();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="modal-panel flex max-h-[min(92vh,52rem)] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-delvara-border bg-delvara-bg shadow-[0_24px_80px_rgb(16_42_43/0.28)] sm:rounded-xl"
        onKeyDown={onPanelKeyDown}
      >
        <div className="flex items-start justify-between gap-4 border-b border-delvara-border px-5 py-4 sm:px-7 sm:py-5">
          <div>
            <p className="eyebrow">Your search</p>
            <h2
              id={titleId}
              className="mt-2 text-xl font-medium tracking-tight text-delvara-ink sm:text-2xl"
            >
              {submittedDemo ? "Enquiry ready" : "Start your search"}
            </h2>
            <p id={descriptionId} className="mt-1 text-sm text-delvara-muted-text">
              {submittedDemo
                ? "Frontend demo complete — not yet connected to a live database."
                : "A few short steps. No pressure. No obligation."}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeSearch}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-delvara-border text-delvara-ink transition-colors hover:bg-delvara-surface"
            aria-label="Close search"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        {!submittedDemo ? (
          <>
            <div className="border-b border-delvara-border px-5 py-3 sm:px-7">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-delvara-muted-text">
                  Step {step} of {TOTAL_STEPS}
                </p>
                <ol className="flex gap-1.5" aria-hidden="true">
                  {Array.from({ length: TOTAL_STEPS }, (_, index) => (
                    <li
                      key={index}
                      className={`h-1.5 w-7 rounded-full ${
                        index + 1 <= step
                          ? "bg-delvara-ink"
                          : "bg-delvara-border"
                      }`}
                    />
                  ))}
                </ol>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex min-h-0 flex-1 flex-col"
              noValidate
            >
              <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
                {step === 1 && (
                  <fieldset>
                    <legend className="text-lg font-medium text-delvara-ink">
                      What treatment are you considering?
                    </legend>
                    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {searchTreatments.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className="choice-chip w-full justify-start"
                          aria-pressed={form.treatment === option}
                          onClick={() => {
                            setForm((current) => ({
                              ...current,
                              treatment: option,
                            }));
                            setError(null);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 2 && (
                  <fieldset className="space-y-5">
                    <legend className="text-lg font-medium text-delvara-ink">
                      Where are you looking for treatment?
                    </legend>
                    <div>
                      <label
                        htmlFor="search-location"
                        className="mb-2 block text-sm font-medium text-delvara-charcoal"
                      >
                        Town / city or postcode
                      </label>
                      <input
                        id="search-location"
                        name="location"
                        type="text"
                        autoComplete="address-level2"
                        className="input-field"
                        placeholder="e.g. Manchester or M1"
                        value={form.location}
                        onChange={(event) => {
                          setForm((current) => ({
                            ...current,
                            location: event.target.value,
                          }));
                          setError(null);
                        }}
                      />
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-delvara-charcoal">
                        How far would you be willing to travel?{" "}
                        <span className="font-normal text-delvara-muted-text">
                          Optional
                        </span>
                      </p>
                      <div className="grid gap-2.5 sm:grid-cols-2">
                        {travelOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            className="choice-chip w-full justify-start"
                            aria-pressed={form.travel === option}
                            onClick={() =>
                              setForm((current) => ({
                                ...current,
                                travel: option,
                              }))
                            }
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </fieldset>
                )}

                {step === 3 && (
                  <fieldset>
                    <legend className="text-lg font-medium text-delvara-ink">
                      When are you hoping to have treatment?
                    </legend>
                    <div className="mt-4 grid gap-2.5">
                      {timingOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className="choice-chip w-full justify-start"
                          aria-pressed={form.timing === option}
                          onClick={() => {
                            setForm((current) => ({
                              ...current,
                              timing: option,
                            }));
                            setError(null);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 4 && (
                  <fieldset>
                    <legend className="text-lg font-medium text-delvara-ink">
                      What matters most to you?
                    </legend>
                    <p className="mt-2 text-sm text-delvara-muted-text">
                      Select all that apply.
                    </p>
                    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {priorityOptions.map((option) => (
                        <button
                          key={option}
                          type="button"
                          className="choice-chip w-full justify-start"
                          aria-pressed={form.priorities.includes(option)}
                          onClick={() => {
                            setForm((current) => ({
                              ...current,
                              priorities: togglePriority(
                                current.priorities,
                                option,
                              ),
                            }));
                            setError(null);
                          }}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                )}

                {step === 5 && (
                  <fieldset className="space-y-4">
                    <legend className="text-lg font-medium text-delvara-ink">
                      Your details
                    </legend>
                    <p className="text-sm text-delvara-muted-text">
                      We only need enough information to help connect you with
                      relevant clinics.
                    </p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="search-first-name"
                          className="mb-2 block text-sm font-medium"
                        >
                          First name
                        </label>
                        <input
                          id="search-first-name"
                          name="firstName"
                          type="text"
                          autoComplete="given-name"
                          required
                          className="input-field"
                          value={form.firstName}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              firstName: event.target.value,
                            }))
                          }
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="search-last-name"
                          className="mb-2 block text-sm font-medium"
                        >
                          Last name
                        </label>
                        <input
                          id="search-last-name"
                          name="lastName"
                          type="text"
                          autoComplete="family-name"
                          required
                          className="input-field"
                          value={form.lastName}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              lastName: event.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="search-email"
                        className="mb-2 block text-sm font-medium"
                      >
                        Email
                      </label>
                      <input
                        id="search-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="input-field"
                        value={form.email}
                        onChange={(event) =>
                          setForm((current) => ({
                            ...current,
                            email: event.target.value,
                          }))
                        }
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="search-phone"
                        className="mb-2 block text-sm font-medium"
                      >
                        Phone
                      </label>
                      <input
                        id="search-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        className="input-field"
                        value={form.phone}
                        onChange={(event) =>
                          setForm((current) => ({
                            ...current,
                            phone: event.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="rounded-lg border border-delvara-border bg-delvara-white p-4">
                      <label className="flex gap-3 text-sm leading-relaxed text-delvara-charcoal">
                        <input
                          type="checkbox"
                          className="mt-1 h-4 w-4 shrink-0 accent-delvara-ink"
                          checked={form.consent}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              consent: event.target.checked,
                            }))
                          }
                        />
                        <span>
                          I agree to be contacted about my enquiry and
                          understand that my details may be shared with relevant
                          clinics as described in the{" "}
                          <Link
                            href="/privacy"
                            className="underline underline-offset-2 hover:text-delvara-ink"
                            onClick={closeSearch}
                          >
                            Privacy Policy
                          </Link>
                          .
                        </span>
                      </label>
                    </div>
                  </fieldset>
                )}

                {error ? (
                  <p className="mt-4 text-sm text-red-800" role="alert">
                    {error}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-col-reverse gap-3 border-t border-delvara-border bg-delvara-white/80 px-5 py-4 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-7">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={goBack}
                    className="btn btn-secondary w-full sm:w-auto"
                  >
                    Back
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={closeSearch}
                    className="btn btn-secondary w-full sm:w-auto"
                  >
                    Cancel
                  </button>
                )}

                {step < TOTAL_STEPS ? (
                  <button
                    type="button"
                    onClick={goNext}
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    Continue
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button type="submit" className="btn btn-primary w-full sm:w-auto">
                    Submit enquiry
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          <div className="overflow-y-auto px-5 py-8 sm:px-7 sm:py-10">
            <div className="mx-auto max-w-md text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-delvara-sage-soft text-delvara-ink">
                <IconCheck className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-medium tracking-tight text-delvara-ink">
                Your enquiry is ready to submit.
              </h3>
              <p className="mt-3 text-delvara-muted-text leading-relaxed">
                This is a frontend demonstration. Your details have not been
                stored remotely yet. When the lead intake service is connected,
                we&apos;ll use the information you provide to help identify
                relevant options.
              </p>
              <p className="mt-4 text-sm text-delvara-muted-text">
                Thanks — we&apos;ve captured your details in this session for
                review.
              </p>
              <button
                type="button"
                onClick={closeSearch}
                className="btn btn-primary mt-8"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
