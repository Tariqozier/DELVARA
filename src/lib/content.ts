export type TreatmentCategory = "dental" | "aesthetics";

export type TreatmentIconName =
  | "implant"
  | "aligners"
  | "veneers"
  | "bonding"
  | "whitening"
  | "emergency"
  | "general"
  | "wrinkle"
  | "fillers"
  | "skin"
  | "body"
  | "hair"
  | "endolift"
  | "packages";

export type FeaturedTreatment = {
  id: string;
  name: string;
  description: string;
  icon: TreatmentIconName;
  category: TreatmentCategory;
};

export const brand = {
  name: "DELVARA",
  tagline: "Better choices. Better treatment.",
  positioning: "Considering treatment in London?",
  geography: "London",
} as const;

export const londonAreas = [
  "North",
  "South",
  "East",
  "West",
  "Central",
] as const;

export const navItems = [
  {
    label: "Treatments",
    href: "/treatments",
    children: [
      { href: "/treatments/dental", label: "Dental treatments" },
      { href: "/treatments/aesthetics", label: "Aesthetic treatments" },
    ],
  },
  {
    label: "How it works",
    href: "/how-it-works",
  },
  {
    label: "For Clinics",
    href: "/for-clinics",
    children: [
      { href: "/for-clinics/dental", label: "Dental clinics" },
      { href: "/for-clinics/aesthetics", label: "Aesthetic clinics" },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
] as const;

export const featuredDentalTreatments: FeaturedTreatment[] = [
  {
    id: "dental-implants",
    name: "Dental Implants",
    description:
      "Explore implant options with clinics that may be able to help.",
    icon: "implant",
    category: "dental",
  },
  {
    id: "composite-bonding",
    name: "Composite Bonding",
    description: "Enquire about careful, aesthetic bonding treatments.",
    icon: "bonding",
    category: "dental",
  },
  {
    id: "clear-aligners",
    name: "Invisalign / Clear Aligners",
    description: "Share interest in discreet alignment treatments.",
    icon: "aligners",
    category: "dental",
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    description: "Start an enquiry about professional whitening options.",
    icon: "whitening",
    category: "dental",
  },
  {
    id: "veneers",
    name: "Veneers",
    description: "Connect with clinics offering refined smile enhancement.",
    icon: "veneers",
    category: "dental",
  },
  {
    id: "emergency-dentistry",
    name: "Emergency Dentistry",
    description: "Enquire about urgent private dental support in London.",
    icon: "emergency",
    category: "dental",
  },
];

export const featuredAestheticsTreatments: FeaturedTreatment[] = [
  {
    id: "anti-wrinkle",
    name: "Anti-Wrinkle Treatments",
    description: "Enquire about considered injectable facial treatments.",
    icon: "wrinkle",
    category: "aesthetics",
  },
  {
    id: "dermal-fillers",
    name: "Dermal Fillers",
    description: "Share interest in filler treatments with participating clinics.",
    icon: "fillers",
    category: "aesthetics",
  },
  {
    id: "skin-treatments",
    name: "Skin Treatments",
    description: "Explore skin-focused aesthetic treatment enquiries.",
    icon: "skin",
    category: "aesthetics",
  },
  {
    id: "body-sculpting",
    name: "Body Sculpting",
    description: "Start an enquiry about body contouring treatments.",
    icon: "body",
    category: "aesthetics",
  },
  {
    id: "hair-treatments",
    name: "Hair Treatments",
    description: "Enquire about private hair treatment options in London.",
    icon: "hair",
    category: "aesthetics",
  },
  {
    id: "endolift",
    name: "Endolift",
    description: "Share interest in non-surgical facial tightening options.",
    icon: "endolift",
    category: "aesthetics",
  },
];

export const dentalTaxonomy = [
  {
    group: "General & Preventative",
    treatments: [
      "General Dentistry",
      "Dental Hygiene",
      "Air Polish",
      "Emergency Dentistry",
    ],
  },
  {
    group: "Cosmetic Dentistry",
    treatments: [
      "Composite Bonding",
      "Veneers",
      "Teeth Whitening",
      "Smile Makeovers",
    ],
  },
  {
    group: "Orthodontics",
    treatments: [
      "Invisalign / Clear Aligners",
      "Invisible Braces",
      "Fixed Braces",
    ],
  },
  {
    group: "Implant & Restorative",
    treatments: [
      "Dental Implants",
      "Prosthodontics",
      "Crowns / Restorative Dentistry",
    ],
  },
  {
    group: "Specialist Dentistry",
    treatments: ["Endodontics / Root Canal", "Oral Surgery"],
  },
] as const;

export const aestheticsTaxonomy = [
  {
    group: "Injectables",
    treatments: [
      "Anti-Wrinkle Treatments",
      "Dermal Fillers",
      "Filler Packages",
    ],
  },
  {
    group: "Skin",
    treatments: [
      "Skin Treatments",
      "Skin Rejuvenation",
      "Advanced Facial Treatments",
    ],
  },
  {
    group: "Face & Tightening",
    treatments: ["Endolift", "Non-Surgical Facial Treatments"],
  },
  {
    group: "Body",
    treatments: ["Body Sculpting", "Body Contouring"],
  },
  {
    group: "Hair",
    treatments: ["Hair Treatments"],
  },
] as const;

export const enquiryDentalTreatments = [
  "Dental implants",
  "Composite bonding",
  "Invisalign / clear aligners",
  "Teeth whitening",
  "Veneers",
  "General dentistry",
  "Emergency dentistry",
  "Other / not sure",
] as const;

export const enquiryAestheticsTreatments = [
  "Anti-wrinkle treatments",
  "Dermal fillers",
  "Skin treatments",
  "Body sculpting",
  "Hair treatments",
  "Endolift",
  "Filler packages",
  "Other / not sure",
] as const;

export const heroDentalTreatments = [
  "Dental implants",
  "Composite bonding",
  "Invisalign / Clear aligners",
  "Teeth whitening",
  "Veneers",
  "General dentistry",
  "Emergency dentistry",
  "Other dental treatment",
] as const;

export const heroAestheticsTreatments = [
  "Anti-wrinkle treatments",
  "Dermal fillers",
  "Skin treatments",
  "Body sculpting",
  "Hair treatments",
  "Endolift",
  "Filler packages",
  "Other aesthetic treatment",
] as const;

export const travelOptions = [
  "Nearby",
  "Up to 5 miles",
  "Up to 10 miles",
  "Up to 20 miles",
  "I'm flexible",
] as const;

export const timingOptions = [
  "As soon as possible",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Just researching",
] as const;

export const priorityOptions = [
  "Price",
  "Clinic reputation",
  "Location",
  "Availability",
  "Finance options",
  "Experience with this treatment",
  "Not sure yet",
] as const;

export const howItWorksSteps = [
  {
    number: "01",
    title: "Choose what you're considering",
    description:
      "Start with dental or aesthetics and tell us the treatment you're interested in.",
  },
  {
    number: "02",
    title: "Tell us a little more",
    description:
      "Share your London location, timeframe and a few details about what you're looking for.",
  },
  {
    number: "03",
    title: "Submit your enquiry",
    description:
      "With your consent, DELVARA may share your enquiry with a relevant participating clinic that provides the treatment.",
  },
  {
    number: "04",
    title: "Hear from a clinic",
    description:
      "If there is a relevant participating clinic, their team may contact you directly to discuss your enquiry.",
  },
] as const;

export const benefits = [
  {
    title: "Better-fit options",
    description:
      "Focus on clinics relevant to the treatment and preferences you've provided.",
  },
  {
    title: "Less searching",
    description:
      "Reduce the time spent visiting dozens of clinic websites and filling in multiple forms.",
  },
  {
    title: "Your choice",
    description:
      "Being introduced to a clinic does not mean you're committed to treatment.",
  },
  {
    title: "Clearer decisions",
    description:
      "Start with more context so you can have a better conversation with a clinic.",
  },
] as const;

export const clinicPaths = [
  {
    id: "dental",
    title: "Dental Clinics",
    description:
      "Patient enquiries across cosmetic, implant, orthodontic, restorative and general dental treatments.",
    cta: "I'm a Dental Clinic",
    href: "/for-clinics/dental",
    accent: "dental" as const,
  },
  {
    id: "aesthetics",
    title: "Aesthetic Clinics",
    description:
      "Patient enquiries across injectables, skin, facial, body and hair treatments.",
    cta: "I'm an Aesthetic Clinic",
    href: "/for-clinics/aesthetics",
    accent: "aesthetics" as const,
  },
] as const;

export const clinicBenefits = [
  {
    title: "Treatment-specific enquiries",
    description:
      "Connect with prospective patients actively interested in treatments your clinic provides.",
  },
  {
    title: "Useful qualification data",
    description:
      "See treatment interest, location, timeframe and key preferences before making contact.",
  },
  {
    title: "London-focused acquisition",
    description:
      "Build patient acquisition around prospective patients looking for private treatment across London.",
  },
  {
    title: "Performance-led growth",
    description:
      "Focus acquisition on measurable enquiries and outcomes rather than impressions and clicks.",
  },
] as const;

export const faqs = [
  {
    question: "What is DELVARA?",
    answer:
      "DELVARA is a London-focused treatment enquiry service helping people considering private dental or aesthetic treatment connect with relevant participating clinics.",
  },
  {
    question: "Does it cost anything to make an enquiry?",
    answer:
      "There is no charge for consumers to submit an initial enquiry through DELVARA.",
  },
  {
    question: "Am I committing to treatment by enquiring?",
    answer:
      "No. An enquiry or introduction does not commit someone to treatment or to choosing a particular clinic.",
  },
  {
    question: "How does DELVARA choose which clinics to introduce?",
    answer:
      "DELVARA uses details such as treatment category, treatment type, London location, availability preferences and the information you provide to help identify a relevant participating clinic where possible. Matching continues to develop as the service grows.",
  },
  {
    question: "Is DELVARA a clinic?",
    answer:
      "No. DELVARA does not provide treatment or medical diagnosis. Treatment decisions and clinical advice remain between the patient and the chosen healthcare professional.",
  },
] as const;
