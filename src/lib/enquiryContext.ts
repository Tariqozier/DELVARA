import {
  enquiryAestheticsTreatments,
  enquiryDentalTreatments,
  type TreatmentCategory,
} from "@/lib/content";

export const MAX_ENQUIRY_TREATMENTS = 3;

export type EnquiryDraft = {
  category?: TreatmentCategory;
  /** Preferred multi-select field. */
  treatments?: string[];
  /** Singular CTA convenience; normalised into treatments. */
  treatment?: string;
  /** London postcode or area from homepage quick-start or deep links. */
  location?: string;
};

export type EnquiryStartStep = 1 | 2 | 3;

function normalizeKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ")
    .replace(/\s*\/\s*/g, " / ");
}

const aestheticsAliases: Record<string, string> = {
  "anti-wrinkle treatments": "Anti-wrinkle treatments",
  "anti wrinkle treatments": "Anti-wrinkle treatments",
  "dermal fillers": "Dermal fillers",
  "skin treatments": "Skin treatments",
  "skin rejuvenation": "Skin treatments",
  "advanced facial treatments": "Skin treatments",
  "body sculpting": "Body sculpting",
  "body contouring": "Body sculpting",
  "hair treatments": "Hair treatments",
  endolift: "Endolift",
  "filler packages": "Filler packages",
  "facial aesthetics": "Facial aesthetics",
  "non-surgical facial treatments": "Facial aesthetics",
  "other aesthetic treatment": "Other / not sure",
  "other / not sure": "Other / not sure",
};

const dentalAliases: Record<string, string> = {
  "dental implants": "Dental implants",
  "composite bonding": "Composite bonding",
  "invisalign / clear aligners": "Invisalign / clear aligners",
  "clear aligners": "Invisalign / clear aligners",
  "invisible braces": "Invisalign / clear aligners",
  "fixed braces": "Other / not sure",
  "teeth whitening": "Teeth whitening",
  veneers: "Veneers",
  "general dentistry": "General dentistry",
  "dental hygiene": "General dentistry",
  "air polish": "Other / not sure",
  "emergency dentistry": "Emergency dentistry",
  "cosmetic dentistry": "Cosmetic dentistry",
  "smile makeovers": "Cosmetic dentistry",
  "restorative dentistry": "Restorative dentistry",
  crowns: "Restorative dentistry",
  "crowns / restorative dentistry": "Restorative dentistry",
  prosthodontics: "Restorative dentistry",
  "endodontics / root canal": "Other / not sure",
  "oral surgery": "Other / not sure",
  "other dental treatment": "Other / not sure",
  "other / not sure": "Other / not sure",
};

function matchFromList(
  value: string,
  list: readonly string[],
  aliases: Record<string, string>,
): string {
  const key = normalizeKey(value);
  if (aliases[key]) return aliases[key];

  const exact = list.find((option) => normalizeKey(option) === key);
  if (exact) return exact;

  const partial = list.find(
    (option) =>
      key.includes(normalizeKey(option)) || normalizeKey(option).includes(key),
  );
  if (partial) return partial;

  return value.trim();
}

export function resolveEnquiryTreatment(
  category: TreatmentCategory,
  treatmentName: string,
): string {
  if (!treatmentName.trim()) return "";

  if (category === "aesthetics") {
    return matchFromList(
      treatmentName,
      enquiryAestheticsTreatments,
      aestheticsAliases,
    );
  }

  return matchFromList(treatmentName, enquiryDentalTreatments, dentalAliases);
}

function collectRawTreatments(draft: EnquiryDraft): string[] {
  const fromArray = draft.treatments ?? [];
  const fromSingular = draft.treatment ? [draft.treatment] : [];
  return [...fromArray, ...fromSingular];
}

export function normalizeEnquiryDraft(
  draft?: EnquiryDraft | null,
): EnquiryDraft {
  if (!draft?.category) return {};

  const category = draft.category;
  const seen = new Set<string>();
  const treatments: string[] = [];

  for (const raw of collectRawTreatments(draft)) {
    const resolved = resolveEnquiryTreatment(category, raw);
    if (!resolved || seen.has(resolved)) continue;
    seen.add(resolved);
    treatments.push(resolved);
    if (treatments.length >= MAX_ENQUIRY_TREATMENTS) break;
  }

  const location = draft.location?.trim() ?? "";

  return {
    category,
    ...(treatments.length > 0 ? { treatments } : {}),
    ...(location ? { location } : {}),
  };
}

/**
 * Open on the first unanswered qualification stage.
 * 1 = category/treatments, 2 = location, 3 = timeframe/budget.
 */
export function getEnquiryStartStep(draft: EnquiryDraft): EnquiryStartStep {
  if (!draft.category || !draft.treatments?.length) return 1;
  if (!draft.location?.trim()) return 2;
  return 3;
}

export function toggleEnquiryTreatment(
  current: string[],
  option: string,
  max = MAX_ENQUIRY_TREATMENTS,
): string[] {
  if (current.includes(option)) {
    return current.filter((item) => item !== option);
  }
  if (current.length >= max) return current;
  return [...current, option];
}
