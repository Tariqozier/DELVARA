export const brand = {
  name: "DELVARA",
  tagline: "Better choices. Better treatment.",
  positioning: "Find the right treatment.",
} as const;

export const navLinks = [
  { href: "/treatments", label: "Treatments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/for-clinics", label: "For Clinics" },
  { href: "/about", label: "About" },
] as const;

export const treatments = [
  {
    id: "dental-implants",
    name: "Dental Implants",
    description: "Explore lasting options for missing teeth with clinics that specialise in implant care.",
    icon: "implant" as const,
  },
  {
    id: "clear-aligners",
    name: "Clear Aligners",
    description: "Find clinics offering discreet alignment treatments tailored to your goals.",
    icon: "aligners" as const,
  },
  {
    id: "veneers",
    name: "Veneers",
    description: "Connect with clinics experienced in refined smile enhancement.",
    icon: "veneers" as const,
  },
  {
    id: "composite-bonding",
    name: "Composite Bonding",
    description: "Discover clinics offering careful, aesthetic bonding treatments.",
    icon: "bonding" as const,
  },
  {
    id: "anti-wrinkle",
    name: "Anti-wrinkle Treatments",
    description: "Match with clinics providing considered aesthetic facial treatments.",
    icon: "wrinkle" as const,
  },
  {
    id: "dermal-fillers",
    name: "Dermal Fillers",
    description: "Explore clinics focused on natural-looking filler treatments.",
    icon: "fillers" as const,
  },
] as const;

export const searchTreatments = [
  "Dental implants",
  "Clear aligners",
  "Veneers",
  "Composite bonding",
  "Anti-wrinkle treatments",
  "Dermal fillers",
  "Not sure yet",
] as const;

export const travelOptions = [
  "Nearby",
  "Up to 10 miles",
  "Up to 25 miles",
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
    title: "Tell us what you're looking for",
    description:
      "Briefly tell DELVARA the treatment you're considering, where you are and what matters to you.",
  },
  {
    number: "02",
    title: "We find suitable options",
    description:
      "DELVARA uses your preferences to help identify clinics that may be relevant to what you're looking for.",
  },
  {
    number: "03",
    title: "Choose what happens next",
    description:
      "Review your options and decide whether you'd like to speak with a clinic. No obligation.",
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

export const clinicBenefits = [
  {
    title: "Relevant enquiries",
    description:
      "Connect with people actively exploring treatments you provide.",
  },
  {
    title: "More context",
    description:
      "Understand what a prospective patient is looking for before the first conversation.",
  },
  {
    title: "Built around growth",
    description:
      "A patient acquisition model designed around measurable opportunities rather than vanity metrics.",
  },
] as const;

export const faqs = [
  {
    question: "What is DELVARA?",
    answer:
      "DELVARA is a treatment discovery and clinic matching service helping people considering private treatments connect with relevant clinics.",
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
      "DELVARA uses details such as treatment type, location, availability preferences and the information you provide to help identify clinics that may be relevant. Matching continues to develop as the service grows.",
  },
  {
    question: "Is DELVARA a clinic?",
    answer:
      "No. DELVARA does not provide treatment or medical diagnosis. Treatment decisions and clinical advice remain between the patient and the chosen healthcare professional.",
  },
] as const;
