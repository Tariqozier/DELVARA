import type { WheelItem } from "@/components/about/ImageWheel";

const TREATMENTS_BASE = "/about/treatments";
const GROWTH_BASE = "/about/growth";

export const treatmentWheelItems: WheelItem[] = [
  {
    id: "skin",
    label: "Skin",
    src: `${TREATMENTS_BASE}/skin.svg`,
    alt: "Abstract illustration representing skin health",
    accent: "#F1C4AE",
  },
  {
    id: "skincare",
    label: "Skincare",
    src: `${TREATMENTS_BASE}/skincare.svg`,
    alt: "Abstract illustration of skincare products",
    accent: "#D3A0B5",
  },
  {
    id: "aesthetic-clinic",
    label: "Aesthetic clinic",
    src: `${TREATMENTS_BASE}/aesthetic-clinic.svg`,
    alt: "Abstract illustration of an aesthetic clinic",
    accent: "#D3A0B5",
  },
  {
    id: "injectable-product",
    label: "Injectable product",
    src: `${TREATMENTS_BASE}/injectable-product.svg`,
    alt: "Abstract illustration of an injectable product vial",
    accent: "#D3A0B5",
  },
  {
    id: "serum",
    label: "Serum",
    src: `${TREATMENTS_BASE}/serum.svg`,
    alt: "Abstract illustration of a facial serum dropper bottle",
    accent: "#F1C4AE",
  },
  {
    id: "laser",
    label: "Laser",
    src: `${TREATMENTS_BASE}/laser.svg`,
    alt: "Abstract illustration representing laser aesthetic treatment",
    accent: "#D3A0B5",
  },
  {
    id: "consultation",
    label: "Consultation",
    src: `${TREATMENTS_BASE}/consultation.svg`,
    alt: "Abstract illustration of a treatment consultation",
    accent: "#89A993",
  },
  {
    id: "smile",
    label: "Smile",
    src: `${TREATMENTS_BASE}/smile.svg`,
    alt: "Abstract illustration of a confident smile",
    accent: "#D3A0B5",
  },
  {
    id: "tooth",
    label: "Tooth",
    src: `${TREATMENTS_BASE}/tooth.svg`,
    alt: "Abstract illustration representing dental care",
    accent: "#89A993",
  },
  {
    id: "clinic",
    label: "Clinic",
    src: `${TREATMENTS_BASE}/clinic.svg`,
    alt: "Abstract illustration of a dental clinic building",
    accent: "#89A993",
  },
  {
    id: "whitening",
    label: "Whitening",
    src: `${TREATMENTS_BASE}/whitening.svg`,
    alt: "Abstract illustration representing teeth whitening",
    accent: "#F1C4AE",
  },
  {
    id: "aligners",
    label: "Aligners",
    src: `${TREATMENTS_BASE}/aligners.svg`,
    alt: "Abstract illustration of clear aligners",
    accent: "#89A993",
  },
  {
    id: "implant",
    label: "Implant",
    src: `${TREATMENTS_BASE}/implant.svg`,
    alt: "Abstract illustration of a dental implant",
    accent: "#89A993",
  },
];

export const growthWheelItems: WheelItem[] = [
  {
    id: "marketing",
    label: "Marketing",
    src: `${GROWTH_BASE}/marketing.svg`,
    alt: "Abstract illustration representing marketing strategy",
    accent: "#89A993",
  },
  {
    id: "advertising",
    label: "Advertising",
    src: `${GROWTH_BASE}/advertising.svg`,
    alt: "Abstract illustration representing advertising campaigns",
    accent: "#D3A0B5",
  },
  {
    id: "landing-pages",
    label: "Landing pages",
    src: `${GROWTH_BASE}/landing-pages.svg`,
    alt: "Abstract illustration of a landing page layout",
    accent: "#F1C4AE",
  },
  {
    id: "website",
    label: "Website",
    src: `${GROWTH_BASE}/website.svg`,
    alt: "Abstract illustration of a website interface",
    accent: "#89A993",
  },
  {
    id: "crm",
    label: "CRM",
    src: `${GROWTH_BASE}/crm.svg`,
    alt: "Abstract illustration of customer relationship management",
    accent: "#D3A0B5",
  },
  {
    id: "automation",
    label: "Automation",
    src: `${GROWTH_BASE}/automation.svg`,
    alt: "Abstract illustration of workflow automation",
    accent: "#F1C4AE",
  },
  {
    id: "analytics",
    label: "Analytics",
    src: `${GROWTH_BASE}/analytics.svg`,
    alt: "Abstract illustration of performance analytics",
    accent: "#89A993",
  },
  {
    id: "content",
    label: "Content",
    src: `${GROWTH_BASE}/content.svg`,
    alt: "Abstract illustration of content creation",
    accent: "#D3A0B5",
  },
  {
    id: "apps",
    label: "Apps",
    src: `${GROWTH_BASE}/apps.svg`,
    alt: "Abstract illustration of mobile applications",
    accent: "#F1C4AE",
  },
  {
    id: "integrations",
    label: "Integrations",
    src: `${GROWTH_BASE}/integrations.svg`,
    alt: "Abstract illustration of system integrations",
    accent: "#89A993",
  },
  {
    id: "digital-experiences",
    label: "Digital experiences",
    src: `${GROWTH_BASE}/digital-experiences.svg`,
    alt: "Abstract illustration of connected digital experiences",
    accent: "#D3A0B5",
  },
];

/**
 * Homepage marketplace wheel — aesthetics-led mix using the same About assets.
 * Order puts aesthetic concepts first for commercial emphasis.
 */
const londonMarketplaceWheelIds = [
  "skin",
  "skincare",
  "laser",
  "aesthetic-clinic",
  "injectable-product",
  "serum",
  "consultation",
  "smile",
  "tooth",
  "clinic",
  "whitening",
] as const;

export const londonMarketplaceWheelItems: WheelItem[] =
  londonMarketplaceWheelIds.map((id) => {
    const item = treatmentWheelItems.find((entry) => entry.id === id);
    if (!item) {
      throw new Error(`Missing treatment wheel item: ${id}`);
    }
    return item;
  });

export const aboutWheelHeadings = {
  treatments: "The worlds we work across",
  growth: "Beyond patient enquiries",
} as const;
