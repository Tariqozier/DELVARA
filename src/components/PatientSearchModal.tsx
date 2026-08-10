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
  aestheticsBudgetOptions,
  dentalBudgetOptions,
  enquiryAestheticsTreatments,
  enquiryDentalTreatments,
  priorityOptions,
  timingOptions,
  travelOptions,
  type TreatmentCategory,
} from "@/lib/content";
import {
  getEnquiryStartStep,
  MAX_ENQUIRY_TREATMENTS,
  toggleEnquiryTreatment,
} from "@/lib/enquiryContext";

type FormState = {
  category: TreatmentCategory | "";
  treatments: string[];
  location: string;
  travel: string;
  timing: string;
  budget: string;
  priorities: string[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
};

const initialForm: FormState = {
  category: "",
  treatments: [],
  location: "",
  travel: "",
  timing: "",
  budget: "",
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
  const { isOpen, closeSearch, draft } = useSearch();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [form, setForm] = useState<FormState>(initialForm);
  const [submittedDemo, setSubmittedDemo] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [categoryPrefill, setCategoryPrefill] = useState(false);
  const [minStep, setMinStep] = useState(1);
  const titleId = useId();
  const descriptionId = useId();
  const treatmentLimitId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);
  const openSessionRef = useRef(false);

  const treatmentOptionsBase =
    form.category === "dental"
      ? enquiryDentalTreatments
      : form.category === "aesthetics"
        ? enquiryAestheticsTreatments
        : [];

  const extraTreatments = form.treatments.filter(
    (treatment) =>
      !(treatmentOptionsBase as readonly string[]).includes(treatment),
  );
  const treatmentOptions = [...extraTreatments, ...treatmentOptionsBase];

  const budgetOptions =
    form.category === "aesthetics"
      ? aestheticsBudgetOptions
      : dentalBudgetOptions;

  const atTreatmentLimit = form.treatments.length >= MAX_ENQUIRY_TREATMENTS;
  const showContextSummary = Boolean(
    form.category && form.treatments.length > 0,
  );
  const categoryLabel =
    form.category === "aesthetics"
      ? "Aesthetics"
      : form.category === "dental"
        ? "Dental"
        : "";
  const contextSummaryParts = [
    categoryLabel,
    ...form.treatments,
    form.location.trim() ? form.location.trim() : "",
  ].filter(Boolean);

  useEffect(() => {
    if (!isOpen) {
      openSessionRef.current = false;
      const resetTimer = window.setTimeout(() => {
        setStep(1);
        setDirection("forward");
        setForm(initialForm);
        setSubmittedDemo(false);
        setError(null);
        setCategoryPrefill(false);
        setMinStep(1);
      }, 200);
      return () => window.clearTimeout(resetTimer);
    }

    if (openSessionRef.current) return;
    openSessionRef.current = true;

    const nextForm: FormState = {
      ...initialForm,
      category: draft.category ?? "",
      treatments: draft.treatments ?? [],
      location: draft.location ?? "",
    };
    const startStep = getEnquiryStartStep(draft);
    setForm(nextForm);
    setStep(startStep);
    setMinStep(startStep);
    setDirection("forward");
    setSubmittedDemo(false);
    setError(null);
    setCategoryPrefill(Boolean(draft.category));
  }, [isOpen, draft]);

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

  if (!isOpen) return null;

  function canContinue() {
    if (step === 1) {
      return Boolean(
        form.category &&
          form.treatments.length >= 1 &&
          form.treatments.length <= MAX_ENQUIRY_TREATMENTS,
      );
    }
    if (step === 2) return form.location.trim().length >= 2;
    if (step === 3) return Boolean(form.timing && form.budget);
    if (step === 4) return form.priorities.length > 0;
    return true;
  }

  function goNext() {
    if (!canContinue()) {
      setError(
        step === 1
          ? "Please choose a category and at least one treatment to continue."
          : step === 3
            ? "Please choose a timeframe and approximate budget range."
            : "Please complete this step to continue.",
      );
      return;
    }
    setError(null);
    setDirection("forward");
    setStep((current) => Math.min(current + 1, TOTAL_STEPS));
  }

  function goBack() {
    setError(null);
    setDirection("back");
    setStep((current) => Math.max(current - 1, minStep));
  }

  function handleChangeContext() {
    setError(null);
    setCategoryPrefill(false);
    setMinStep(1);
    setDirection("back");
    setStep(1);
  }

  function selectCategory(nextCategory: TreatmentCategory) {
    setForm((current) => ({
      ...current,
      category: nextCategory,
      treatments: [],
      budget: "",
    }));
    setError(null);
  }

  function toggleTreatment(option: string) {
    setForm((current) => {
      const next = toggleEnquiryTreatment(current.treatments, option);
      return { ...current, treatments: next };
    });
    setError(null);
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

    // FRONTEND DEMO ONLY — not persisted remotely yet.
    // Connect this handler to the enquiry intake API when available.
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

  const stepMotionClass =
    direction === "forward" ? "modal-step-forward" : "modal-step-back";

  return (
    <div
      className="modal-backdrop fixed inset-0 z-[80] flex items-end justify-center bg-[rgb(23_45_46/0.55)] p-0 sm:items-center sm:p-6"
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
        className="modal-panel flex max-h-[min(92dvh,52rem)] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl border border-delvara-border bg-delvara-bg shadow-[0_24px_80px_rgb(23_45_46/0.28)] sm:rounded-xl"
        onKeyDown={onPanelKeyDown}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-delvara-border px-5 py-4 sm:px-7 sm:py-5">
          <div>
            <p className="eyebrow">Your enquiry</p>
            <h2
              id={titleId}
              className="mt-2 text-xl font-medium tracking-tight text-delvara-ink sm:text-2xl"
            >
              {submittedDemo ? "Enquiry ready" : "Start your enquiry"}
            </h2>
            <p id={descriptionId} className="mt-1 text-sm text-delvara-muted-text">
              {submittedDemo
                ? "Frontend demo complete — not yet connected to a live database."
                : "Aesthetics or dental. Across London. No pressure."}
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeSearch}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-delvara-border text-delvara-ink transition-all duration-200 hover:-translate-y-px hover:bg-delvara-surface active:scale-[0.98]"
            aria-label="Close enquiry"
          >
            <IconClose className="h-5 w-5" />
          </button>
        </div>

        {!submittedDemo ? (
          <>
            <div className="shrink-0 border-b border-delvara-border px-5 py-3 sm:px-7">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-delvara-muted-text">
                  Step {step} of {TOTAL_STEPS}
                </p>
                <ol className="flex gap-1.5" aria-hidden="true">
                  {Array.from({ length: TOTAL_STEPS }, (_, index) => (
                    <li
                      key={index}
                      className={`h-1.5 w-7 rounded-full transition-colors duration-200 ${
                        index + 1 <= step
                          ? "bg-delvara-ink"
                          : "bg-delvara-border"
                      }`}
                    />
                  ))}
                </ol>
              </div>
              {showContextSummary && step > 1 ? (
                <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-delvara-border bg-delvara-white px-3 py-2.5">
                  <p className="text-sm text-delvara-charcoal">
                    <span className="font-medium text-delvara-ink">
                      {contextSummaryParts[0]}
                    </span>
                    {contextSummaryParts.length > 1 ? (
                      <>
                        <span className="mx-1.5 text-delvara-border-strong">
                          ·
                        </span>
                        <span>{contextSummaryParts.slice(1).join(" · ")}</span>
                      </>
                    ) : null}
                  </p>
                  <button
                    type="button"
                    onClick={handleChangeContext}
                    className="text-sm font-medium text-delvara-ink underline-offset-2 transition-colors hover:underline"
                  >
                    Change
                  </button>
                </div>
              ) : null}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex min-h-0 flex-1 flex-col"
              noValidate
            >
              <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6">
                <div key={step} className={stepMotionClass}>
                  {step === 1 && (
                    <fieldset className="space-y-5">
                      <legend className="text-lg font-medium text-delvara-ink">
                        {categoryPrefill && form.category
                          ? "Which treatments are you considering?"
                          : "What are you considering?"}
                      </legend>

                      {categoryPrefill && form.category ? (
                        <div className="flex flex-wrap items-center justify-between gap-2 rounded-lg border border-delvara-border bg-delvara-white px-3 py-2.5">
                          <p className="text-sm text-delvara-charcoal">
                            <span className="font-medium text-delvara-ink">
                              {categoryLabel}
                            </span>
                            <span className="ml-2 text-delvara-muted-text">
                              selected
                            </span>
                          </p>
                          <button
                            type="button"
                            onClick={() => {
                              setCategoryPrefill(false);
                              setForm((current) => ({
                                ...current,
                                category: "",
                                treatments: [],
                                budget: "",
                              }));
                              setError(null);
                            }}
                            className="text-sm font-medium text-delvara-ink underline-offset-2 hover:underline"
                          >
                            Change
                          </button>
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-2.5">
                          <button
                            type="button"
                            className="category-tab"
                            data-category="aesthetics"
                            aria-pressed={form.category === "aesthetics"}
                            onClick={() => selectCategory("aesthetics")}
                          >
                            <span
                              aria-hidden="true"
                              className="h-2 w-2 rounded-full accent-dot-aesthetics"
                            />
                            Aesthetics
                          </button>
                          <button
                            type="button"
                            className="category-tab"
                            data-category="dental"
                            aria-pressed={form.category === "dental"}
                            onClick={() => selectCategory("dental")}
                          >
                            <span
                              aria-hidden="true"
                              className="h-2 w-2 rounded-full accent-dot-dental"
                            />
                            Dental
                          </button>
                        </div>
                      )}

                      {form.category ? (
                        <div>
                          {!categoryPrefill ? (
                            <p className="mb-1 text-sm font-medium text-delvara-ink">
                              Which treatments are you considering?
                            </p>
                          ) : null}
                          <p
                            id={treatmentLimitId}
                            className="mb-3 text-sm text-delvara-muted-text"
                            aria-live="polite"
                          >
                            {atTreatmentLimit
                              ? "Maximum of 3 selected. Deselect one to choose another."
                              : "Choose up to 3."}
                          </p>
                          <div
                            className="grid gap-2.5 sm:grid-cols-2"
                            role="group"
                            aria-describedby={treatmentLimitId}
                          >
                            {treatmentOptions.map((option) => {
                              const isSelected =
                                form.treatments.includes(option);
                              const isDisabled =
                                atTreatmentLimit && !isSelected;

                              return (
                                <button
                                  key={option}
                                  type="button"
                                  className="choice-chip w-full justify-start gap-2"
                                  data-category={form.category}
                                  aria-pressed={isSelected}
                                  aria-disabled={isDisabled || undefined}
                                  disabled={isDisabled}
                                  onClick={() => toggleTreatment(option)}
                                >
                                  {isSelected ? (
                                    <IconCheck
                                      className="h-4 w-4 shrink-0"
                                      aria-hidden="true"
                                    />
                                  ) : null}
                                  <span>{option}</span>
                                  <span className="sr-only">
                                    {isSelected
                                      ? ", selected"
                                      : isDisabled
                                        ? ", unavailable — maximum of 3 treatments selected"
                                        : ", not selected"}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ) : (
                        <p className="rounded-lg border border-dashed border-delvara-border bg-delvara-white px-4 py-4 text-sm text-delvara-muted-text">
                          Choose Aesthetics or Dental to continue. Both are
                          equally supported.
                        </p>
                      )}
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
                          London postcode or area
                        </label>
                        <input
                          id="search-location"
                          name="location"
                          type="text"
                          autoComplete="postal-code"
                          className="input-field"
                          placeholder="e.g. N12 or Finchley"
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
                          How far would you be willing to travel?
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
                    <fieldset className="space-y-6">
                      <div>
                        <legend className="text-lg font-medium text-delvara-ink">
                          When are you hoping to get started?
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
                      </div>

                      <div>
                        <p className="text-lg font-medium text-delvara-ink">
                          What budget range are you considering?
                        </p>
                        <p className="mt-2 text-sm text-delvara-muted-text">
                          A rough range is enough. This simply helps us
                          understand your enquiry.
                        </p>
                        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                          {budgetOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              className="choice-chip w-full justify-start"
                              aria-pressed={form.budget === option}
                              onClick={() => {
                                setForm((current) => ({
                                  ...current,
                                  budget: option,
                                }));
                                setError(null);
                              }}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
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
                        a relevant participating clinic.
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
                            I agree that DELVARA may contact me about my enquiry
                            and share the information I&apos;ve provided with a
                            relevant participating clinic so they may contact me
                            about the service I&apos;ve expressed interest in. I
                            understand that submitting an enquiry does not
                            commit me to consultation or treatment. See the{" "}
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
                </div>

                {error ? (
                  <p className="mt-4 text-sm text-red-800" role="alert">
                    {error}
                  </p>
                ) : null}
              </div>

              <div className="flex shrink-0 flex-col-reverse gap-3 border-t border-delvara-border bg-delvara-white/80 px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:px-7">
                {step > minStep ? (
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
                  <button
                    type="submit"
                    className="btn btn-primary w-full sm:w-auto"
                  >
                    Submit enquiry
                  </button>
                )}
              </div>
            </form>
          </>
        ) : (
          <div className="overflow-y-auto px-5 py-8 sm:px-7 sm:py-10">
            <div className="mx-auto max-w-md text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-delvara-surface text-delvara-ink">
                <IconCheck className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-2xl font-medium tracking-tight text-delvara-ink">
                Your enquiry is ready to submit.
              </h3>
              <p className="mt-3 text-delvara-muted-text leading-relaxed">
                This is a frontend demonstration. Your details have not been
                stored remotely yet. When the enquiry intake service is
                connected, DELVARA may use the information you provide to help
                connect you with a relevant participating clinic.
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
