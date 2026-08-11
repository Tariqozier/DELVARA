# DELVARA enquiry backend contract

## Flow

Browser enquiry form → `POST /api/enquiries` (Vercel / Next.js) → Google Apps Script web app → Google Sheet + Google Workspace email notifications.

Secrets stay server-side. The browser never calls Apps Script directly and never contains Google credentials.

## Environment variables

| Name | Exposure | Purpose |
| --- | --- | --- |
| `GOOGLE_APPS_SCRIPT_URL` | Server only | Deployed Apps Script web-app URL |
| `ENQUIRY_WEBHOOK_SECRET` | Server only | Shared secret checked by Apps Script |
| `DELVARA_ENQUIRIES_EMAIL` | Server only | Patient enquiry inbox (`enquiries@getdelvara.com`) |
| `DELVARA_HELLO_EMAIL` | Server only | General contact inbox (`hello@getdelvara.com`) |
| `DELVARA_CLINICS_EMAIL` | Server only | Clinic partnerships inbox (`clinics@getdelvara.com`) |
| `NEXT_PUBLIC_SITE_URL` | Public | Canonical site URL for metadata / absolute links |

Do not use `NEXT_PUBLIC_` for any secret.

## Inbox responsibilities

| Inbox | Use |
| --- | --- |
| `enquiries@getdelvara.com` | Patient / treatment enquiries only |
| `hello@getdelvara.com` | General contact |
| `clinics@getdelvara.com` | Clinic / business partnerships |

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
  "enquiriesEmail": "enquiries@getdelvara.com",
  "helloEmail": "hello@getdelvara.com",
  "clinicsEmail": "clinics@getdelvara.com",
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

## Apps Script responsibilities

On a verified webhook (`ENQUIRY_WEBHOOK_SECRET`):

1. Optionally append the submission to the Google Sheet.
2. Email the full enquiry to `enquiries@getdelvara.com`.
3. Email the customer a confirmation from DELVARA / `enquiries@getdelvara.com`.

Do not send email from the browser.

---

## Internal enquiry email (to `enquiries@getdelvara.com`)

**Subject**

`New DELVARA enquiry — [Category] — [Location]`

**Body**

```text
NEW DELVARA ENQUIRY

Enquiry ID:
Received:
Category:
Treatments:
Location:
Timeframe:
Rough budget:
Priorities:

CONTACT

Name:
Email:
Phone:

SOURCE

Page:
Consent timestamp:
```

Include every relevant value captured by the journey (travel/referrer when present).

**Reply-To:** set to the customer’s email address so replies go directly to them.

---

## Patient confirmation email

**From:** DELVARA \<enquiries@getdelvara.com\>

**Subject:** We've received your DELVARA enquiry

**Body**

```text
Hi [First name],

Thank you for your enquiry.

The DELVARA team has received the information you provided and we'll review it shortly. We aim to be in touch within 2–4 hours.

Your enquiry:
[Category]
[Treatments]
[Location]

Making an enquiry does not commit you to a consultation or treatment.

DELVARA
Private aesthetic & dental services across London

enquiries@getdelvara.com
www.getdelvara.com
```

Keep copy simple. Do not make medical claims.

---

## Clinic / general routing (website)

- Clinic partnership CTAs and any future clinic form → `clinics@getdelvara.com`
- General contact → `hello@getdelvara.com`
- Patient enquiry form → `POST /api/enquiries` → Apps Script → `enquiries@getdelvara.com`
