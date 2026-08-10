import {
  enquiryAestheticsTreatments,
  enquiryDentalTreatments,
  type TreatmentCategory,
} from "@/lib/content";

export type EnquirySubmissionInput = {
  category: TreatmentCategory;
  treatments: string[];
  location: string;
  travel?: string;
  timeframe: string;
  budget: string;
  priorities: string[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: boolean;
  sourceUrl?: string;
  referrer?: string;
};

export type EnquiryPayload = {
  enquiryId: string;
  submittedAt: string;
  category: TreatmentCategory;
  treatments: string[];
  location: string;
  travel: string;
  timeframe: string;
  budget: string;
  priorities: string[];
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  consent: true;
  consentTimestamp: string;
  sourceUrl: string;
  referrer: string;
  status: "New";
};

const MAX_SHORT = 120;
const MAX_MEDIUM = 200;
const MAX_TREATMENTS = 3;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function asStringArray(value: unknown, maxItems: number, maxLen: number): string[] {
  if (!Array.isArray(value)) return [];
  const result: string[] = [];
  for (const item of value) {
    if (typeof item !== "string") continue;
    const trimmed = item.trim().slice(0, maxLen);
    if (!trimmed || result.includes(trimmed)) continue;
    result.push(trimmed);
    if (result.length >= maxItems) break;
  }
  return result;
}

export function createEnquiryId(date = new Date()): string {
  const stamp = date.toISOString().slice(0, 10).replace(/-/g, "");
  const random = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `DLV-${stamp}-${random}`;
}

export function validateEnquirySubmission(
  body: unknown,
): { ok: true; data: EnquirySubmissionInput } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid enquiry payload." };
  }

  const raw = body as Record<string, unknown>;
  const category = asString(raw.category, 32);
  if (category !== "aesthetics" && category !== "dental") {
    return { ok: false, error: "Please choose a valid treatment category." };
  }

  const allowedTreatments =
    category === "aesthetics"
      ? (enquiryAestheticsTreatments as readonly string[])
      : (enquiryDentalTreatments as readonly string[]);

  const treatments = asStringArray(raw.treatments, MAX_TREATMENTS, MAX_SHORT);
  if (treatments.length < 1) {
    return { ok: false, error: "Please choose at least one treatment." };
  }

  const unknownTreatment = treatments.find(
    (treatment) => !allowedTreatments.includes(treatment),
  );
  if (unknownTreatment) {
    return { ok: false, error: "Please choose a valid treatment option." };
  }

  const location = asString(raw.location, MAX_SHORT);
  if (location.length < 2) {
    return { ok: false, error: "Please provide a valid London location." };
  }

  const timeframe = asString(raw.timeframe ?? raw.timing, MAX_SHORT);
  const budget = asString(raw.budget, MAX_SHORT);
  if (!timeframe || !budget) {
    return { ok: false, error: "Please complete timeframe and budget." };
  }

  const priorities = asStringArray(raw.priorities, 8, MAX_SHORT);
  if (priorities.length < 1) {
    return { ok: false, error: "Please choose at least one priority." };
  }

  const firstName = asString(raw.firstName, MAX_SHORT);
  const lastName = asString(raw.lastName, MAX_SHORT);
  const email = asString(raw.email, MAX_MEDIUM).toLowerCase();
  const phone = asString(raw.phone, MAX_SHORT);
  if (!firstName || !lastName || !email || !phone) {
    return { ok: false, error: "Please complete all required contact fields." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please provide a valid email address." };
  }
  if (phone.replace(/\D/g, "").length < 7) {
    return { ok: false, error: "Please provide a valid phone number." };
  }

  if (raw.consent !== true) {
    return { ok: false, error: "Please confirm consent before continuing." };
  }

  return {
    ok: true,
    data: {
      category,
      treatments,
      location,
      travel: asString(raw.travel, MAX_SHORT),
      timeframe,
      budget,
      priorities,
      firstName,
      lastName,
      email,
      phone,
      consent: true,
      sourceUrl: asString(raw.sourceUrl, 500),
      referrer: asString(raw.referrer, 500),
    },
  };
}

export function buildEnquiryPayload(
  input: EnquirySubmissionInput,
  options?: { enquiryId?: string; submittedAt?: string },
): EnquiryPayload {
  const submittedAt = options?.submittedAt ?? new Date().toISOString();
  return {
    enquiryId: options?.enquiryId ?? createEnquiryId(new Date(submittedAt)),
    submittedAt,
    category: input.category,
    treatments: input.treatments,
    location: input.location,
    travel: input.travel ?? "",
    timeframe: input.timeframe,
    budget: input.budget,
    priorities: input.priorities,
    name: `${input.firstName} ${input.lastName}`.trim(),
    firstName: input.firstName,
    lastName: input.lastName,
    email: input.email,
    phone: input.phone,
    consent: true,
    consentTimestamp: submittedAt,
    sourceUrl: input.sourceUrl ?? "",
    referrer: input.referrer ?? "",
    status: "New",
  };
}
