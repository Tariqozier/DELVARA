export type TreatmentDetail = {
  name: string;
  description: string;
  reasons: string;
};

export type TreatmentGroup = {
  group: string;
  treatments: TreatmentDetail[];
};

export const dentalTreatmentGroups: TreatmentGroup[] = [
  {
    group: "General & Preventative",
    treatments: [
      {
        name: "General Dentistry",
        description:
          "Routine private dental care covering check-ups, assessments and everyday restorative needs.",
        reasons:
          "People often explore this when they want ongoing private care or a clearer starting point.",
      },
      {
        name: "Dental Hygiene",
        description:
          "Professional cleaning and gum-focused care to support oral health maintenance.",
        reasons:
          "Commonly explored for cleaning, gum health support or a fresher starting point.",
      },
      {
        name: "Air Polish",
        description:
          "A polishing approach used to help remove surface stains and refresh the smile.",
        reasons:
          "Often considered when people want a brighter-looking clean before other cosmetic options.",
      },
      {
        name: "Emergency Dentistry",
        description:
          "Urgent private dental attention for sudden pain, damage or unexpected dental issues.",
        reasons:
          "People enquire when they need faster access to private urgent care in London.",
      },
    ],
  },
  {
    group: "Cosmetic",
    treatments: [
      {
        name: "Composite Bonding",
        description:
          "Tooth-coloured resin used to reshape, repair or refine the appearance of teeth.",
        reasons:
          "Often explored for chips, gaps, uneven edges or a more even-looking smile.",
      },
      {
        name: "Veneers",
        description:
          "Thin coverings designed to change the visible shape, colour or alignment of teeth.",
        reasons:
          "People commonly consider veneers when looking for a more comprehensive smile change.",
      },
      {
        name: "Teeth Whitening",
        description:
          "Professional whitening services aimed at brightening the natural shade of teeth.",
        reasons:
          "Often explored for staining, dullness or a fresher appearance before events.",
      },
      {
        name: "Smile Makeovers",
        description:
          "A planned combination of cosmetic dental services tailored around aesthetic goals.",
        reasons:
          "People enquire when they want a broader cosmetic approach rather than a single treatment.",
      },
    ],
  },
  {
    group: "Orthodontics",
    treatments: [
      {
        name: "Invisalign / Clear Aligners",
        description:
          "Removable clear aligners used to gradually guide teeth into a more even position.",
        reasons:
          "Often explored for discreet alignment without traditional fixed braces.",
      },
      {
        name: "Invisible Braces",
        description:
          "Less conspicuous orthodontic systems designed to straighten teeth more discreetly.",
        reasons:
          "People consider these when they want alignment with a lower visual profile.",
      },
      {
        name: "Fixed Braces",
        description:
          "Traditional braced systems used to correct tooth position over a planned period.",
        reasons:
          "Commonly explored for more complex alignment needs or structured orthodontic plans.",
      },
    ],
  },
  {
    group: "Implant & Restorative",
    treatments: [
      {
        name: "Dental Implants",
        description:
          "A restorative option that replaces missing teeth using an implant-supported solution.",
        reasons:
          "People often enquire after tooth loss or when looking for a longer-term replacement option.",
      },
      {
        name: "Crowns",
        description:
          "Restorative covers that protect and rebuild the shape of a damaged or weakened tooth.",
        reasons:
          "Commonly explored after fracture, large fillings or structural wear.",
      },
      {
        name: "Restorative Dentistry",
        description:
          "Services focused on repairing function and structure where teeth have been damaged or worn.",
        reasons:
          "People enquire when comfort, bite function or tooth integrity is the priority.",
      },
      {
        name: "Prosthodontics",
        description:
          "Specialist restorative planning around crowns, bridges, dentures and complex rebuilding.",
        reasons:
          "Often considered for more involved restorative or replacement needs.",
      },
    ],
  },
  {
    group: "Specialist",
    treatments: [
      {
        name: "Endodontics / Root Canal",
        description:
          "Treatment focused on the tooth's inner pulp to address infection or deep damage.",
        reasons:
          "People explore this when pain, infection or saving a tooth is the concern.",
      },
      {
        name: "Oral Surgery",
        description:
          "Surgical dental procedures such as complex extractions and related oral interventions.",
        reasons:
          "Often enquired about when a procedure needs surgical assessment and planning.",
      },
    ],
  },
];

export const aestheticsTreatmentGroups: TreatmentGroup[] = [
  {
    group: "Injectables",
    treatments: [
      {
        name: "Anti-wrinkle treatments",
        description:
          "Injectable facial services commonly used to soften the appearance of dynamic lines.",
        reasons:
          "People often explore these for forehead lines, frown lines or crow's feet.",
      },
      {
        name: "Dermal fillers",
        description:
          "Injectable treatments used to support volume, contour and facial balance.",
        reasons:
          "Commonly considered for lips, cheeks, jawline or areas of volume change.",
      },
      {
        name: "Filler packages",
        description:
          "Combined injectable approaches planned around more than one facial area.",
        reasons:
          "People enquire when they want a broader facial refresh rather than a single area.",
      },
    ],
  },
  {
    group: "Skin",
    treatments: [
      {
        name: "Skin treatments",
        description:
          "Clinic-led skin services designed around texture, tone and overall skin quality.",
        reasons:
          "Often explored for dullness, uneven texture or a more refined skin routine.",
      },
      {
        name: "Skin rejuvenation",
        description:
          "Treatments focused on refreshing the look and feel of the skin over time.",
        reasons:
          "People consider this when looking for gradual improvement rather than a single correction.",
      },
      {
        name: "Advanced facial treatments",
        description:
          "More intensive facial protocols that go beyond a standard spa-style facial.",
        reasons:
          "Commonly explored for deeper skin concerns under clinical aesthetic care.",
      },
      {
        name: "Laser",
        description:
          "Clinic-led laser services used across a range of aesthetic skin and hair goals.",
        reasons:
          "People often enquire about laser for skin quality, pigmentation, hair reduction or refinement.",
      },
    ],
  },
  {
    group: "Face & Tightening",
    treatments: [
      {
        name: "Endolift",
        description:
          "A non-surgical facial approach people explore for tightening and contour support.",
        reasons:
          "Often considered when looking at facial firmness without surgical pathways.",
      },
      {
        name: "Non-surgical facial treatments",
        description:
          "Facial aesthetic options designed to support contour and appearance without surgery.",
        reasons:
          "People enquire when they want non-surgical alternatives to discuss with a clinic.",
      },
    ],
  },
  {
    group: "Body",
    treatments: [
      {
        name: "Body sculpting",
        description:
          "Non-surgical body services aimed at refining shape in targeted areas.",
        reasons:
          "Commonly explored for areas that feel resistant to lifestyle changes alone.",
      },
      {
        name: "Body contouring",
        description:
          "Aesthetic body treatments focused on silhouette and targeted contour goals.",
        reasons:
          "People consider this when they want clinic-led options around body shape.",
      },
    ],
  },
  {
    group: "Hair",
    treatments: [
      {
        name: "Hair treatments",
        description:
          "Private aesthetic services related to hair quality, density support or scalp-focused care.",
        reasons:
          "Often explored when thinning, texture or hair presentation is a concern.",
      },
    ],
  },
];
