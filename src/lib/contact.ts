/**
 * Public DELVARA contact addresses.
 * These are customer-facing inboxes — not secrets.
 */
export const contactEmails = {
  enquiries: "enquiries@getdelvara.com",
  hello: "hello@getdelvara.com",
  clinics: "clinics@getdelvara.com",
} as const;

export type ContactInbox = keyof typeof contactEmails;

export function mailtoHref(
  inbox: ContactInbox,
  options?: { subject?: string; body?: string },
): string {
  const address = contactEmails[inbox];
  const params = new URLSearchParams();
  if (options?.subject) params.set("subject", options.subject);
  if (options?.body) params.set("body", options.body);
  const query = params.toString();
  return query ? `mailto:${address}?${query}` : `mailto:${address}`;
}

export const clinicPartnershipMailto = mailtoHref("clinics", {
  subject: "Clinic partnership enquiry — DELVARA",
});

export const aestheticClinicMailto = mailtoHref("clinics", {
  subject: "Aesthetic clinic discussion — DELVARA",
});

export const dentalClinicMailto = mailtoHref("clinics", {
  subject: "Dental clinic discussion — DELVARA",
});

export const growthStudioMailto = mailtoHref("clinics", {
  subject: "Growth Studio project — DELVARA",
});
