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
  positioning: "Explore private treatment with more clarity.",
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
    description: "Explore implant services and submit an informed enquiry.",
    icon: "implant",
    category: "dental",
  },
  {
    id: "composite-bonding",
    name: "Composite Bonding",
    description: "Tell us about the bonding service you're considering.",
    icon: "bonding",
    category: "dental",
  },
  {
    id: "clear-aligners",
    name: "Invisalign / Clear Aligners",
    description: "Share interest in discreet alignment services.",
    icon: "aligners",
    category: "dental",
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    description: "Start an enquiry about professional whitening services.",
    icon: "whitening",
    category: "dental",
  },
  {
    id: "veneers",
    name: "Veneers",
    description: "Explore veneer services with useful enquiry context.",
    icon: "veneers",
    category: "dental",
  },
  {
    id: "emergency-dentistry",
    name: "Emergency Dentistry",
    description: "Enquire about urgent private dental services in London.",
    icon: "emergency",
    category: "dental",
  },
];

export const featuredAestheticsTreatments: FeaturedTreatment[] = [
  {
    id: "anti-wrinkle",
    name: "Anti-Wrinkle Treatments",
    description: "Explore injectable facial services and make an enquiry.",
    icon: "wrinkle",
    category: "aesthetics",
  },
  {
    id: "dermal-fillers",
    name: "Dermal Fillers",
    description: "Share interest in filler services with participating clinics.",
    icon: "fillers",
    category: "aesthetics",
  },
  {
    id: "skin-treatments",
    name: "Skin Treatments",
    description: "Start with the skin service you're considering.",
    icon: "skin",
    category: "aesthetics",
  },
  {
    id: "body-sculpting",
    name: "Body Sculpting",
    description: "Enquire about body contouring services in London.",
    icon: "body",
    category: "aesthetics",
  },
  {
    id: "hair-treatments",
    name: "Hair Treatments",
    description: "Explore private hair treatment services.",
    icon: "hair",
    category: "aesthetics",
  },
  {
    id: "endolift",
    name: "Endolift",
    description: "Share interest in non-surgical facial tightening services.",
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

export const dentalBudgetOptions = [
  "Under £500",
  "£500–£1,000",
  "£1,000–£2,500",
  "£2,500–£5,000",
  "£5,000–£10,000",
  "£10,000+",
  "Not sure yet",
] as const;

export const aestheticsBudgetOptions = [
  "Under £250",
  "£250–£500",
  "£500–£1,000",
  "£1,000–£2,500",
  "£2,500–£5,000",
  "£5,000+",
  "Not sure yet",
] as const;

export const priorityOptions = [
  "Price / budget",
  "Clinic reputation",
  "Location",
  "Availability",
  "Finance options",
  "Experience with this service",
  "Not sure yet",
] as const;

export const howItWorksSteps = [
  {
    number: "01",
    title: "Explore a service",
    description:
      "Start with dental or aesthetics and tell us the service you're considering.",
  },
  {
    number: "02",
    title: "Add useful context",
    description:
      "Share your London location, timeframe, approximate budget and priorities.",
  },
  {
    number: "03",
    title: "Submit your enquiry",
    description:
      "With your consent, DELVARA may share your enquiry with a relevant participating clinic.",
  },
  {
    number: "04",
    title: "Clinic conversation",
    description:
      "If there is a relevant participating clinic, their team may contact you to discuss next steps.",
  },
] as const;

export const benefits = [
  {
    title: "Explore services",
    description:
      "Start with the dental or aesthetic service you're considering and understand the next step without needing to contact multiple clinics first.",
  },
  {
    title: "Clarify what matters",
    description:
      "Tell us your location, timeframe, approximate budget and priorities so your enquiry starts with useful context.",
  },
  {
    title: "Make an informed enquiry",
    description:
      "Provide the information a participating clinic needs to understand what you're looking for before the first conversation.",
  },
  {
    title: "Your decision",
    description:
      "An enquiry never commits you to a consultation or treatment. Clinical advice and treatment decisions remain between you and the clinic.",
  },
] as const;

export const clinicPaths = [
  {
    id: "dental",
    title: "Dental Clinics",
    description:
      "Patient acquisition around cosmetic, implant, orthodontic, restorative and general dental services — with useful enquiry context before the first conversation.",
    cta: "Explore Dental Partnerships",
    href: "/for-clinics/dental",
    accent: "dental" as const,
  },
  {
    id: "aesthetics",
    title: "Aesthetic Clinics",
    description:
      "Patient acquisition around injectables, skin, facial, body and hair services — supported by conversion journeys and growth infrastructure.",
    cta: "Explore Aesthetic Partnerships",
    href: "/for-clinics/aesthetics",
    accent: "aesthetics" as const,
  },
] as const;

export const clinicBenefits = [
  {
    title: "Treatment-specific enquiries",
    description:
      "Connect with prospective patients actively interested in services your clinic provides.",
  },
  {
    title: "Useful qualification data",
    description:
      "See treatment interest, location, timeframe, approximate budget and key priorities before making contact.",
  },
  {
    title: "London-focused acquisition",
    description:
      "Build patient acquisition around people looking for private dental or aesthetic services across London.",
  },
  {
    title: "Performance-led growth",
    description:
      "Focus acquisition on measurable enquiries and outcomes rather than impressions and clicks.",
  },
] as const;

export const clinicGrowthServices = [
  {
    title: "Patient acquisition funnels",
    description:
      "Campaign-to-enquiry journeys designed around specific treatments and commercial priorities.",
  },
  {
    title: "Website & landing page design",
    description:
      "Full clinic websites, treatment pages and conversion-focused landing experiences.",
  },
  {
    title: "Marketing & content",
    description:
      "Campaign strategy, ad creative, treatment content and conversion copy.",
  },
  {
    title: "CRM & automation",
    description:
      "Routing, automated follow-up, reminders, pipeline workflows and operational automation.",
  },
  {
    title: "Tracking & optimisation",
    description:
      "Conversion tracking, source attribution and funnel performance measurement.",
  },
  {
    title: "Custom digital products",
    description:
      "Custom web applications, clinic tools, portals, calculators, booking experiences and integrations.",
  },
] as const;

export const dentalGrowthTreatments = [
  { name: "Dental implants", emphasis: "high" as const },
  { name: "Composite bonding", emphasis: "high" as const },
  { name: "Clear aligners", emphasis: "high" as const },
  { name: "Teeth whitening", emphasis: "medium" as const },
  { name: "Veneers", emphasis: "high" as const },
  { name: "Cosmetic dentistry", emphasis: "medium" as const },
  { name: "General dentistry", emphasis: "medium" as const },
  { name: "Emergency dentistry", emphasis: "medium" as const },
  { name: "Restorative dentistry", emphasis: "medium" as const },
] as const;

export const aestheticsGrowthTreatments = [
  { name: "Anti-wrinkle treatments", emphasis: "high" as const },
  { name: "Dermal fillers", emphasis: "high" as const },
  { name: "Skin treatments", emphasis: "high" as const },
  { name: "Body sculpting", emphasis: "medium" as const },
  { name: "Hair treatments", emphasis: "medium" as const },
  { name: "Endolift", emphasis: "high" as const },
  { name: "Filler packages", emphasis: "medium" as const },
  { name: "Facial aesthetics", emphasis: "medium" as const },
] as const;

export const howItWorksPeopleJourney = [
  {
    number: "01",
    title: "Explore",
    description:
      "Start with the dental or aesthetic service you're considering.",
  },
  {
    number: "02",
    title: "Add context",
    description:
      "Tell us your London location, timeframe, approximate budget and the things that matter most to you.",
  },
  {
    number: "03",
    title: "Submit",
    description:
      "Provide your contact details and consent for DELVARA to process and, where appropriate, share your enquiry.",
  },
  {
    number: "04",
    title: "Connection",
    description:
      "Where there is a relevant participating clinic, your enquiry may be shared with their team.",
  },
  {
    number: "05",
    title: "Conversation",
    description:
      "The clinic can then discuss the service, answer questions and explain appropriate next steps.",
  },
] as const;

export const enquiryWhyItMatters = [
  {
    title: "Treatment",
    description: "Understand what service the person is exploring.",
  },
  {
    title: "Location",
    description: "Understand practical geographic fit across London.",
  },
  {
    title: "Timing",
    description: "Understand how active the enquiry is.",
  },
  {
    title: "Budget",
    description: "Understand approximate expectations — not a published price list.",
  },
  {
    title: "Priorities",
    description: "Understand what matters most before the first conversation.",
  },
  {
    title: "Contact details",
    description: "Allow a participating clinic to respond.",
  },
  {
    title: "Consent",
    description: "Ensure information is only shared through an explicit user action.",
  },
] as const;

export const dentalPartnerStandards = [
  {
    title: "Professional registration",
    description:
      "Dental professionals practising in the UK must be appropriately registered with the General Dental Council (GDC). Where a protected specialist title is used, relevant GDC specialist-list status may be checked.",
  },
  {
    title: "Service / provider regulation",
    description:
      "For regulated dental services in England, relevant provider registration and publicly available CQC information may be reviewed where applicable.",
  },
  {
    title: "Treatment credentials",
    description:
      "Where relevant, additional professional indicators may be considered — for example BACD accreditation for cosmetic dentistry, or ADI membership / fellowship and other appropriate implant-related credentials. These are professional signals, not government regulators.",
  },
  {
    title: "Patient processes",
    description:
      "Partner information may include professional indemnity, practitioner credentials, services provided, locations, enquiry handling, consent, aftercare, complaints processes, finance options where offered, and capacity.",
  },
] as const;

export const aestheticsPartnerStandards = [
  {
    title: "Practitioner professional registration",
    description:
      "Depending on practitioner profession, relevant registers may include GMC, NMC, GDC, GPhC or HCPC. Not every aesthetic practitioner belongs to every register — review considers what is relevant to the services offered.",
  },
  {
    title: "CQC where applicable",
    description:
      "CQC regulation applies to some activities and providers, but not every non-surgical cosmetic treatment. Where applicable, relevant publicly available information may be considered.",
  },
  {
    title: "Additional quality signals",
    description:
      "Where relevant, JCCP registration can be considered as an additional practitioner-quality signal. It is an accredited / self-regulatory register rather than a statutory regulator.",
  },
  {
    title: "Training, experience and processes",
    description:
      "Partner information may include treatment-specific qualifications, training, experience, insurance, prescribing arrangements where relevant, premises, consultation and consent processes, aftercare, and complications / escalation processes.",
  },
] as const;

export const faqs = [
  {
    question: "What is DELVARA?",
    answer:
      "DELVARA is a London-focused service that helps people explore private dental or aesthetic services, clarify what matters to them, and submit an informed enquiry to participating clinics. For clinics, DELVARA also supports patient acquisition journeys and growth infrastructure.",
  },
  {
    question: "Does it cost anything to make an enquiry?",
    answer:
      "There is no charge for consumers to submit an initial enquiry through DELVARA.",
  },
  {
    question: "Am I committing to treatment by enquiring?",
    answer:
      "No. An enquiry never commits you to a consultation or treatment. Clinical advice and treatment decisions remain between you and the clinic.",
  },
  {
    question: "How does DELVARA choose which clinics to introduce?",
    answer:
      "DELVARA uses details such as treatment category, service type, London location, timeframe, approximate budget, priorities and the information you provide to help identify a relevant participating clinic where possible. Matching continues to develop as the service grows.",
  },
  {
    question: "Is DELVARA a clinic?",
    answer:
      "No. DELVARA does not provide treatment, diagnosis or medical advice. Clinical suitability and treatment decisions remain between the individual and the relevant healthcare professional.",
  },
] as const;
