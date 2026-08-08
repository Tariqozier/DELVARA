#!/usr/bin/env node
/**
 * Generates abstract DELVARA about-page wheel placeholder SVGs.
 * Run once: node scripts/generate-about-wheel-svgs.mjs
 */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const C = {
  sage: "#89A993",
  mauve: "#D3A0B5",
  peach: "#F1C4AE",
  ink: "#172D2E",
  ivory: "#F8F5F0",
};

function svgWrap(id, title, body, palette) {
  const [c1, c2, c3] = palette;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" role="img" aria-labelledby="${id}-title">
  <title id="${id}-title">${title}</title>
  <defs>
    <linearGradient id="${id}-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}" stop-opacity="0.42"/>
      <stop offset="55%" stop-color="${c2}" stop-opacity="0.22"/>
      <stop offset="100%" stop-color="${c3}" stop-opacity="0.12"/>
    </linearGradient>
    <linearGradient id="${id}-shape" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="${C.ivory}" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="${c1}" stop-opacity="0.55"/>
    </linearGradient>
    <filter id="${id}-soft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="18" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="400" height="500" fill="${C.ivory}"/>
  <rect width="400" height="500" fill="url(#${id}-bg)"/>
  ${body}
  <text x="32" y="468" fill="${C.ink}" fill-opacity="0.55" font-family="ui-sans-serif, system-ui, sans-serif" font-size="11" letter-spacing="2.8" font-weight="500">${title.toUpperCase()}</text>
</svg>`;
}

const treatments = {
  tooth: (id) =>
    svgWrap(
      id,
      "Tooth",
      `<ellipse cx="320" cy="110" rx="90" ry="70" fill="${C.sage}" fill-opacity="0.18" filter="url(#${id}-soft)"/>
       <path d="M140 300 C140 210, 260 180, 200 130 C170 100, 120 150, 130 220 C135 260, 155 340, 200 370 C245 340, 265 260, 270 220 C280 150, 230 100, 200 130" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.12" stroke-width="2"/>
       <path d="M175 250 Q200 270 225 250" fill="none" stroke="${C.sage}" stroke-width="3" stroke-linecap="round"/>`,
      [C.sage, C.peach, C.mauve],
    ),
  clinic: (id) =>
    svgWrap(
      id,
      "Clinic",
      `<rect x="95" y="145" width="210" height="180" rx="16" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.1" stroke-width="2"/>
       <rect x="125" y="175" width="55" height="70" rx="6" fill="${C.sage}" fill-opacity="0.35"/>
       <rect x="195" y="175" width="80" height="35" rx="6" fill="${C.mauve}" fill-opacity="0.3"/>
       <rect x="195" y="220" width="80" height="25" rx="6" fill="${C.peach}" fill-opacity="0.35"/>
       <path d="M200 115 L200 145 M185 130 L215 130" stroke="${C.sage}" stroke-width="4" stroke-linecap="round"/>
       <circle cx="310" cy="120" r="48" fill="${C.mauve}" fill-opacity="0.16"/>`,
      [C.sage, C.ivory, C.peach],
    ),
  smile: (id) =>
    svgWrap(
      id,
      "Smile",
      `<circle cx="200" cy="230" r="95" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.08" stroke-width="2"/>
       <circle cx="165" cy="210" r="10" fill="${C.ink}" fill-opacity="0.65"/>
       <circle cx="235" cy="210" r="10" fill="${C.ink}" fill-opacity="0.65"/>
       <path d="M155 255 Q200 295 245 255" fill="none" stroke="${C.mauve}" stroke-width="5" stroke-linecap="round"/>
       <path d="M60 360 Q200 320 340 360" fill="none" stroke="${C.peach}" stroke-opacity="0.45" stroke-width="2"/>`,
      [C.peach, C.mauve, C.sage],
    ),
  whitening: (id) =>
    svgWrap(
      id,
      "Whitening",
      `<rect x="150" y="120" width="100" height="220" rx="22" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.1" stroke-width="2"/>
       <rect x="168" y="150" width="64" height="120" rx="10" fill="${C.ivory}" stroke="${C.sage}" stroke-opacity="0.35" stroke-width="2"/>
       <circle cx="200" cy="300" r="18" fill="${C.peach}" fill-opacity="0.5"/>
       <path d="M90 180 L130 210 M310 180 L270 210" stroke="${C.sage}" stroke-width="2" stroke-linecap="round" opacity="0.5"/>
       <circle cx="320" cy="130" r="36" fill="${C.peach}" fill-opacity="0.25"/>`,
      [C.ivory, C.sage, C.peach],
    ),
  aligners: (id) =>
    svgWrap(
      id,
      "Aligners",
      `<path d="M110 250 C110 180, 290 180, 290 250 C290 320, 110 320, 110 250Z" fill="none" stroke="${C.sage}" stroke-width="3" stroke-opacity="0.45"/>
       <path d="M125 250 C125 195, 275 195, 275 250 C275 305, 125 305, 125 250Z" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.1" stroke-width="2"/>
       <path d="M145 250 C145 210, 255 210, 255 250 C255 290, 145 290, 145 250Z" fill="${C.ivory}" fill-opacity="0.85"/>
       <line x1="145" y1="250" x2="255" y2="250" stroke="${C.mauve}" stroke-opacity="0.35" stroke-width="1.5"/>
       <circle cx="330" cy="150" r="42" fill="${C.mauve}" fill-opacity="0.18"/>`,
      [C.sage, C.mauve, C.ivory],
    ),
  implant: (id) =>
    svgWrap(
      id,
      "Implant",
      `<rect x="178" y="130" width="44" height="90" rx="12" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.12" stroke-width="2"/>
       <path d="M170 220 L230 220 L220 340 L180 340 Z" fill="${C.sage}" fill-opacity="0.35" stroke="${C.ink}" stroke-opacity="0.08"/>
       <line x1="185" y1="250" x2="215" y2="250" stroke="${C.ivory}" stroke-opacity="0.8" stroke-width="2"/>
       <line x1="185" y1="275" x2="215" y2="275" stroke="${C.ivory}" stroke-opacity="0.8" stroke-width="2"/>
       <line x1="185" y1="300" x2="215" y2="300" stroke="${C.ivory}" stroke-opacity="0.8" stroke-width="2"/>
       <ellipse cx="200" cy="120" rx="34" ry="18" fill="${C.peach}" fill-opacity="0.45"/>`,
      [C.sage, C.peach, C.ink],
    ),
  skin: (id) =>
    svgWrap(
      id,
      "Skin",
      `<path d="M120 160 C170 120, 230 120, 280 160 C310 190, 310 260, 280 300 C230 350, 170 350, 120 300 C90 260, 90 190, 120 160Z" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.08" stroke-width="2"/>
       <path d="M140 220 C180 200, 220 200, 260 220" fill="none" stroke="${C.peach}" stroke-width="2" stroke-opacity="0.55"/>
       <path d="M150 260 C190 245, 210 245, 250 260" fill="none" stroke="${C.mauve}" stroke-width="2" stroke-opacity="0.45"/>
       <circle cx="310" cy="130" r="40" fill="${C.peach}" fill-opacity="0.22"/>`,
      [C.peach, C.mauve, C.sage],
    ),
  skincare: (id) =>
    svgWrap(
      id,
      "Skincare",
      `<rect x="155" y="130" width="90" height="170" rx="28" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.1" stroke-width="2"/>
       <rect x="175" y="110" width="50" height="28" rx="8" fill="${C.mauve}" fill-opacity="0.45"/>
       <circle cx="200" cy="210" r="22" fill="${C.peach}" fill-opacity="0.35"/>
       <path d="M120 290 Q200 330 280 290" fill="none" stroke="${C.sage}" stroke-width="2" stroke-opacity="0.4"/>
       <ellipse cx="320" cy="360" rx="55" ry="30" fill="${C.sage}" fill-opacity="0.14"/>`,
      [C.mauve, C.peach, C.sage],
    ),
  "aesthetic-clinic": (id) =>
    svgWrap(
      id,
      "Aesthetic clinic",
      `<rect x="80" y="160" width="240" height="150" rx="20" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.1" stroke-width="2"/>
       <circle cx="130" cy="235" r="28" fill="${C.mauve}" fill-opacity="0.28"/>
       <rect x="180" y="200" width="110" height="18" rx="9" fill="${C.peach}" fill-opacity="0.4"/>
       <rect x="180" y="230" width="90" height="14" rx="7" fill="${C.sage}" fill-opacity="0.35"/>
       <rect x="180" y="258" width="70" height="14" rx="7" fill="${C.mauve}" fill-opacity="0.25"/>
       <path d="M200 120 C200 95, 230 95, 230 120" fill="none" stroke="${C.mauve}" stroke-width="3" stroke-linecap="round"/>`,
      [C.mauve, C.peach, C.sage],
    ),
  "injectable-product": (id) =>
    svgWrap(
      id,
      "Injectable product",
      `<rect x="165" y="120" width="70" height="200" rx="16" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.1" stroke-width="2"/>
       <rect x="178" y="135" width="44" height="55" rx="8" fill="${C.ivory}" stroke="${C.mauve}" stroke-opacity="0.35" stroke-width="1.5"/>
       <circle cx="200" cy="162" r="8" fill="${C.mauve}" fill-opacity="0.5"/>
       <rect x="182" y="210" width="36" height="8" rx="4" fill="${C.sage}" fill-opacity="0.35"/>
       <rect x="182" y="230" width="36" height="8" rx="4" fill="${C.sage}" fill-opacity="0.25"/>
       <ellipse cx="290" cy="310" rx="60" ry="35" fill="${C.peach}" fill-opacity="0.2"/>`,
      [C.mauve, C.sage, C.peach],
    ),
  consultation: (id) =>
    svgWrap(
      id,
      "Consultation",
      `<rect x="90" y="180" width="220" height="130" rx="18" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.1" stroke-width="2"/>
       <circle cx="145" cy="245" r="26" fill="${C.sage}" fill-opacity="0.35"/>
       <rect x="190" y="220" width="90" height="12" rx="6" fill="${C.peach}" fill-opacity="0.45"/>
       <rect x="190" y="245" width="70" height="10" rx="5" fill="${C.mauve}" fill-opacity="0.35"/>
       <path d="M250 150 L250 180 M235 165 L265 165" stroke="${C.sage}" stroke-width="3" stroke-linecap="round" opacity="0.55"/>
       <circle cx="320" cy="130" r="34" fill="${C.sage}" fill-opacity="0.16"/>`,
      [C.sage, C.peach, C.mauve],
    ),
  serum: (id) =>
    svgWrap(
      id,
      "Serum",
      `<path d="M170 120 L230 120 L245 170 L155 170 Z" fill="${C.mauve}" fill-opacity="0.35"/>
       <rect x="158" y="170" width="84" height="150" rx="14" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.1" stroke-width="2"/>
       <ellipse cx="200" cy="250" rx="18" ry="28" fill="${C.peach}" fill-opacity="0.4"/>
       <circle cx="200" cy="250" r="6" fill="${C.ivory}" fill-opacity="0.9"/>
       <path d="M100 330 Q200 290 300 330" fill="none" stroke="${C.sage}" stroke-width="2" stroke-opacity="0.35"/>`,
      [C.mauve, C.peach, C.sage],
    ),
};

const growth = {
  marketing: (id) =>
    svgWrap(
      id,
      "Marketing",
      `<circle cx="200" cy="230" r="70" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.12" stroke-width="2"/>
       <path d="M200 160 L200 230 L250 260" fill="none" stroke="${C.sage}" stroke-width="4" stroke-linecap="round"/>
       <circle cx="290" cy="170" r="36" fill="${C.mauve}" fill-opacity="0.22"/>
       <rect x="95" y="320" width="210" height="10" rx="5" fill="${C.peach}" fill-opacity="0.35"/>`,
      [C.ink, C.sage, C.mauve],
      true,
    ),
  advertising: (id) =>
    svgWrap(
      id,
      "Advertising",
      `<rect x="100" y="150" width="200" height="130" rx="14" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.12" stroke-width="2"/>
       <polygon points="200,175 240,260 160,260" fill="${C.peach}" fill-opacity="0.45"/>
       <circle cx="130" cy="190" r="16" fill="${C.mauve}" fill-opacity="0.35"/>
       <path d="M70 120 L110 150 M330 120 L290 150" stroke="${C.sage}" stroke-width="2" stroke-linecap="round" opacity="0.45"/>`,
      [C.mauve, C.peach, C.ink],
    ),
  "landing-pages": (id) =>
    svgWrap(
      id,
      "Landing pages",
      `<rect x="115" y="130" width="170" height="210" rx="16" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.12" stroke-width="2"/>
       <rect x="140" y="160" width="120" height="50" rx="8" fill="${C.sage}" fill-opacity="0.3"/>
       <rect x="140" y="225" width="90" height="12" rx="6" fill="${C.peach}" fill-opacity="0.4"/>
       <rect x="140" y="248" width="70" height="12" rx="6" fill="${C.mauve}" fill-opacity="0.35"/>
       <rect x="140" y="280" width="100" height="28" rx="8" fill="${C.ink}" fill-opacity="0.75"/>`,
      [C.sage, C.peach, C.ink],
    ),
  website: (id) =>
    svgWrap(
      id,
      "Website",
      `<rect x="70" y="150" width="260" height="170" rx="18" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.12" stroke-width="2"/>
       <circle cx="95" cy="172" r="5" fill="${C.peach}"/>
       <circle cx="112" cy="172" r="5" fill="${C.mauve}"/>
       <circle cx="129" cy="172" r="5" fill="${C.sage}"/>
       <rect x="95" y="195" width="80" height="95" rx="8" fill="${C.sage}" fill-opacity="0.25"/>
       <rect x="190" y="195" width="120" height="40" rx="8" fill="${C.mauve}" fill-opacity="0.28"/>
       <rect x="190" y="250" width="120" height="40" rx="8" fill="${C.peach}" fill-opacity="0.28"/>`,
      [C.ink, C.sage, C.mauve],
    ),
  crm: (id) =>
    svgWrap(
      id,
      "CRM",
      `<rect x="110" y="160" width="180" height="150" rx="16" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.12" stroke-width="2"/>
       <circle cx="155" cy="210" r="22" fill="${C.sage}" fill-opacity="0.4"/>
       <circle cx="230" cy="210" r="22" fill="${C.mauve}" fill-opacity="0.35"/>
       <circle cx="192" cy="270" r="22" fill="${C.peach}" fill-opacity="0.4"/>
       <line x1="170" y1="220" x2="210" y2="255" stroke="${C.ink}" stroke-opacity="0.2" stroke-width="2"/>
       <line x1="215" y1="220" x2="205" y2="255" stroke="${C.ink}" stroke-opacity="0.2" stroke-width="2"/>`,
      [C.sage, C.mauve, C.peach],
    ),
  automation: (id) =>
    svgWrap(
      id,
      "Automation",
      `<rect x="95" y="190" width="70" height="70" rx="14" fill="${C.sage}" fill-opacity="0.35"/>
       <rect x="235" y="190" width="70" height="70" rx="14" fill="${C.mauve}" fill-opacity="0.32"/>
       <rect x="165" y="270" width="70" height="70" rx="14" fill="${C.peach}" fill-opacity="0.35"/>
       <path d="M165 225 H235 M200 260 V270 M200 190 V160 M160 305 H130 M240 305 H270" fill="none" stroke="${C.ink}" stroke-opacity="0.25" stroke-width="2" stroke-linecap="round"/>
       <circle cx="200" cy="160" r="14" fill="url(#${id}-shape)"/>`,
      [C.ink, C.sage, C.mauve],
    ),
  analytics: (id) =>
    svgWrap(
      id,
      "Analytics",
      `<rect x="90" y="280" width="35" height="70" rx="8" fill="${C.sage}" fill-opacity="0.4"/>
       <rect x="145" y="240" width="35" height="110" rx="8" fill="${C.mauve}" fill-opacity="0.38"/>
       <rect x="200" y="210" width="35" height="140" rx="8" fill="${C.peach}" fill-opacity="0.42"/>
       <rect x="255" y="190" width="35" height="160" rx="8" fill="${C.ink}" fill-opacity="0.55"/>
       <path d="M90 170 Q170 130, 255 150 T330 120" fill="none" stroke="${C.sage}" stroke-width="3" stroke-linecap="round" opacity="0.55"/>`,
      [C.ink, C.sage, C.peach],
    ),
  content: (id) =>
    svgWrap(
      id,
      "Content",
      `<rect x="120" y="140" width="160" height="210" rx="12" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.12" stroke-width="2"/>
       <rect x="145" y="170" width="110" height="12" rx="6" fill="${C.sage}" fill-opacity="0.4"/>
       <rect x="145" y="195" width="95" height="10" rx="5" fill="${C.mauve}" fill-opacity="0.35"/>
       <rect x="145" y="215" width="105" height="10" rx="5" fill="${C.peach}" fill-opacity="0.35"/>
       <rect x="145" y="235" width="80" height="10" rx="5" fill="${C.sage}" fill-opacity="0.28"/>
       <rect x="145" y="270" width="110" height="55" rx="8" fill="${C.ink}" fill-opacity="0.12"/>`,
      [C.sage, C.mauve, C.peach],
    ),
  apps: (id) =>
    svgWrap(
      id,
      "Apps",
      `<rect x="145" y="120" width="110" height="220" rx="24" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.12" stroke-width="2"/>
       <rect x="165" y="160" width="70" height="70" rx="16" fill="${C.sage}" fill-opacity="0.32"/>
       <rect x="165" y="250" width="70" height="14" rx="7" fill="${C.mauve}" fill-opacity="0.35"/>
       <rect x="165" y="275" width="50" height="10" rx="5" fill="${C.peach}" fill-opacity="0.4"/>
       <circle cx="200" cy="145" r="6" fill="${C.ink}" fill-opacity="0.35"/>`,
      [C.ink, C.sage, C.mauve],
    ),
  integrations: (id) =>
    svgWrap(
      id,
      "Integrations",
      `<circle cx="130" cy="230" r="34" fill="${C.sage}" fill-opacity="0.38"/>
       <circle cx="270" cy="230" r="34" fill="${C.mauve}" fill-opacity="0.35"/>
       <circle cx="200" cy="170" r="34" fill="${C.peach}" fill-opacity="0.4"/>
       <circle cx="200" cy="300" r="34" fill="${C.ink}" fill-opacity="0.28"/>
       <line x1="155" y1="210" x2="185" y2="190" stroke="${C.ink}" stroke-opacity="0.25" stroke-width="2"/>
       <line x1="245" y1="210" x2="215" y2="190" stroke="${C.ink}" stroke-opacity="0.25" stroke-width="2"/>
       <line x1="155" y1="250" x2="185" y2="280" stroke="${C.ink}" stroke-opacity="0.25" stroke-width="2"/>
       <line x1="245" y1="250" x2="215" y2="280" stroke="${C.ink}" stroke-opacity="0.25" stroke-width="2"/>`,
      [C.sage, C.mauve, C.ink],
    ),
  "digital-experiences": (id) =>
    svgWrap(
      id,
      "Digital experiences",
      `<path d="M80 280 C120 180, 280 180, 320 280" fill="none" stroke="${C.sage}" stroke-width="3" stroke-opacity="0.45"/>
       <circle cx="120" cy="250" r="28" fill="url(#${id}-shape)" stroke="${C.ink}" stroke-opacity="0.1"/>
       <circle cx="200" cy="210" r="36" fill="${C.mauve}" fill-opacity="0.32"/>
       <circle cx="280" cy="250" r="28" fill="${C.peach}" fill-opacity="0.38"/>
       <rect x="155" y="300" width="90" height="36" rx="10" fill="${C.ink}" fill-opacity="0.65"/>`,
      [C.mauve, C.sage, C.peach],
    ),
};

async function writeSet(dir, map) {
  await mkdir(dir, { recursive: true });
  for (const [name, builder] of Object.entries(map)) {
    const id = name.replace(/[^a-z0-9]+/gi, "-").toLowerCase();
    const file = path.join(dir, `${name}.svg`);
    await writeFile(file, builder(id), "utf8");
    console.log("wrote", file);
  }
}

await writeSet(path.join(root, "public/about/treatments"), treatments);
await writeSet(path.join(root, "public/about/growth"), growth);
console.log("Done.");
