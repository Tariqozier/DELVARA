import type { ComponentType, SVGProps } from "react";
import type { TreatmentIconName } from "@/lib/content";

type IconProps = SVGProps<SVGSVGElement>;

function baseProps(props: IconProps) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
    ...props,
  };
}

export function IconImplant(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3v6" />
      <path d="M9.5 9h5" />
      <path d="M10 9c0 2.2-.6 4.8-.9 6.5-.2 1.1.5 2.1 1.6 2.3h2.6c1.1-.2 1.8-1.2 1.6-2.3-.3-1.7-.9-4.3-.9-6.5" />
      <path d="M11 18.5v2.5" />
      <path d="M13 18.5v2.5" />
    </svg>
  );
}

export function IconAligners(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4.5 10.5c1.8-2.4 4-3.5 7.5-3.5s5.7 1.1 7.5 3.5" />
      <path d="M5 13.5c1.6 1.7 3.6 2.5 7 2.5s5.4-.8 7-2.5" />
      <path d="M8 11.2h.01" />
      <path d="M12 10.8h.01" />
      <path d="M16 11.2h.01" />
    </svg>
  );
}

export function IconVeneers(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M8 5.5c1.2-.8 2.5-1.2 4-1.2s2.8.4 4 1.2c.7.5 1.2 1.4 1.2 2.4v3.4c0 3.2-2.3 5.9-5.2 5.9S6.8 14.5 6.8 11.3V7.9c0-1 .5-1.9 1.2-2.4Z" />
      <path d="M9.2 9.2h5.6" />
    </svg>
  );
}

export function IconBonding(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M7 8.5c.8-1.8 2.4-3 5-3s4.2 1.2 5 3" />
      <path d="M6.5 12c.7 2.8 2.6 4.8 5.5 4.8s4.8-2 5.5-4.8" />
      <path d="M9 11.5h6" />
      <path d="M10.5 8l.8 2.2" />
      <path d="M13.5 8l-.8 2.2" />
    </svg>
  );
}

export function IconWhitening(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 3.5 13.2 8H18l-3.8 2.8L15.4 16 12 13.4 8.6 16l1.2-5.2L6 8h4.8L12 3.5Z" />
      <path d="M7 19.5h10" />
    </svg>
  );
}

export function IconEmergency(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 4v7" />
      <path d="M12 15.5v.5" />
      <circle cx="12" cy="12" r="8" />
    </svg>
  );
}

export function IconGeneral(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M8 7.5c1.3-1.5 2.8-2.2 4-2.2s2.7.7 4 2.2" />
      <path d="M7 12c1 3.2 2.8 5.5 5 5.5s4-2.3 5-5.5" />
      <path d="M9.5 10.5h5" />
    </svg>
  );
}

export function IconWrinkle(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M8.5 10.5c.8-.7 1.7-1 2.7-1" />
      <path d="M12.8 9.5c1 0 1.9.3 2.7 1" />
      <path d="M9 14.2c.9.8 1.9 1.2 3 1.2s2.1-.4 3-1.2" />
    </svg>
  );
}

export function IconFillers(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M8 14.5c0-2.8 1.8-5.2 4-5.2s4 2.4 4 5.2-1.8 4.2-4 4.2-4-1.5-4-4.2Z" />
      <path d="M12 4.5v3.2" />
      <path d="M9.5 5.8 12 7.7l2.5-1.9" />
    </svg>
  );
}

export function IconSkin(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4.5v2" />
      <path d="M12 17.5v2" />
      <path d="m6.8 6.8 1.4 1.4" />
      <path d="m15.8 15.8 1.4 1.4" />
      <path d="M4.5 12h2" />
      <path d="M17.5 12h2" />
      <path d="m6.8 17.2 1.4-1.4" />
      <path d="m15.8 8.2 1.4-1.4" />
    </svg>
  );
}

export function IconBody(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M9.5 5.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z" />
      <path d="M8 10.5c1.4-.8 2.7-1.2 4-1.2s2.6.4 4 1.2" />
      <path d="M8.5 11.5 7 20" />
      <path d="m15.5 11.5 1.5 8.5" />
      <path d="M10 14.5h4" />
    </svg>
  );
}

export function IconHair(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M8 18c0-4.2 1.8-8.5 4-10.5 2.2 2 4 6.3 4 10.5" />
      <path d="M9.5 9.5c.8-1.6 1.7-2.8 2.5-3.5.8.7 1.7 1.9 2.5 3.5" />
      <path d="M7 18.5h10" />
    </svg>
  );
}

export function IconEndolift(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M7 16.5c1.5-3.5 3.2-5.5 5-5.5s3.5 2 5 5.5" />
      <path d="M8.5 8.5c1-.8 2.2-1.2 3.5-1.2s2.5.4 3.5 1.2" />
      <path d="M12 4.5v2" />
      <path d="M12 13v5.5" />
    </svg>
  );
}

export function IconPackages(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4.5 8.5 12 4.5l7.5 4V16L12 20l-7.5-4V8.5Z" />
      <path d="M12 12v8" />
      <path d="M4.5 8.5 12 12l7.5-3.5" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M6 6l12 12" />
      <path d="M18 6 6 18" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m5.5 12.5 4 4 9-9" />
    </svg>
  );
}

export function IconChevron(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

const treatmentIcons: Record<TreatmentIconName, ComponentType<IconProps>> = {
  implant: IconImplant,
  aligners: IconAligners,
  veneers: IconVeneers,
  bonding: IconBonding,
  whitening: IconWhitening,
  emergency: IconEmergency,
  general: IconGeneral,
  wrinkle: IconWrinkle,
  fillers: IconFillers,
  skin: IconSkin,
  body: IconBody,
  hair: IconHair,
  endolift: IconEndolift,
  packages: IconPackages,
};

export function TreatmentIcon({
  name,
  className,
}: {
  name: TreatmentIconName;
  className?: string;
}) {
  const Icon = treatmentIcons[name];
  return <Icon className={className ?? "h-6 w-6"} />;
}
