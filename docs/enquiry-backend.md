# DELVARA enquiry backend contract

## Flow

Browser enquiry form → `POST /api/enquiries` (Vercel / Next.js) → Google Apps Script web app → Google Sheet + email notifications.

Secrets stay server-side. The browser never calls Apps Script directly.

## Environment variables

| Name | Exposure | Purpose |
| --- | --- | --- |
| `GOOGLE_APPS_SCRIPT_URL` | Server only | Deployed Apps Script web-app URL |
| `ENQUIRY_WEBHOOK_SECRET` | Server only | Shared secret checked by Apps Script |
| `DELVARA_NOTIFICATION_EMAIL` | Server only | Internal enquiry inbox (optional helper for Apps Script) |
| `NEXT_PUBLIC_SITE_URL` | Public | Canonical site URL for metadata / absolute links |

Do not use `NEXT_PUBLIC_` for any secret.

## Canonical JSON payload

```json
{
  "enquiryId": "DLV-20260810-AB12",
  "submittedAt": "2026-08-10T20:00:00.000Z",
  "category": "aesthetics",
  "treatments": ["Anti-wrinkle treatments", "Laser"],
  "location": "N12",
  "travel": "Up to 10 miles",
  "timeframe": "Within 1 month",
  "budget": "£500–£1,000",
  "priorities": ["Clinic experience", "Natural-looking results"],
  "name": "Alex Example",
  "firstName": "Alex",
  "lastName": "Example",
  "email": "alex@example.com",
  "phone": "+447700900123",
  "consent": true,
  "consentTimestamp": "2026-08-10T20:00:00.000Z",
  "sourceUrl": "https://www.getdelvara.com/",
  "referrer": "https://www.google.com/",
  "status": "New",
  "notificationEmail": "enquiries@getdelvara.com",
  "webhookSecret": "<server-only>"
}
```

Expected Apps Script response:

```json
{ "success": true, "enquiryId": "DLV-20260810-AB12" }
```

## Google Sheet columns

| Column | Source |
| --- | --- |
| Enquiry ID | `enquiryId` |
| Received At | `submittedAt` |
| Category | `category` |
| Treatments | `treatments` joined |
| Location | `location` |
| Timeframe | `timeframe` |
| Budget | `budget` |
| Priorities | `priorities` joined |
| Name | `name` |
| Email | `email` |
| Phone | `phone` |
| Consent | `consent` |
| Consent Timestamp | `consentTimestamp` |
| Source URL | `sourceUrl` |
| Status | default `New` |
| Assigned Clinic | empty until manually set |
| Notes | empty until manually set |

## Email notifications (Apps Script)

On success, Apps Script should:

1. Append the row to the Sheet.
2. Email the internal inbox (`DELVARA_NOTIFICATION_EMAIL`).

Suggested subject:

`New DELVARA enquiry — [Category] — [Treatments] — [Location]`

Include Enquiry ID and all key enquiry fields.

3. Email the customer.

Suggested subject:

`We've received your DELVARA enquiry`

Suggested points:

- their enquiry has been received
- DELVARA will review it
- the team aims to contact them within 2–4 hours
- if submitted outside contact hours, next working day is fine
- no treatment or consultation has been booked by enquiring
- clinical advice/suitability remains with the clinic

Do not send email from the browser.
