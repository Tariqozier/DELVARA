import {
  enquiryAestheticsTreatments,
  enquiryDentalTreatments,
  type TreatmentCategory,
} from "@/lib/content";

export type EnquiryDraft = {
  category?: TreatmentCategory;
  treatment?: string;
};

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

export function normalizeEnquiryDraft(
  draft?: EnquiryDraft | null,
): EnquiryDraft {
  if (!draft?.category) return {};

  const category = draft.category;
  const treatment = draft.treatment
    ? resolveEnquiryTreatment(category, draft.treatment)
    : undefined;

  return {
    category,
    ...(treatment ? { treatment } : {}),
  };
}

export function getEnquiryStartStep(draft: EnquiryDraft): 1 | 2 {
  if (draft.category && draft.treatment) return 2;
  return 1;
}
