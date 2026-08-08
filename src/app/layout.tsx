import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "DELVARA | Private Aesthetic & Dental Treatment Enquiries in London",
    template: "%s | DELVARA",
  },
  description:
    "DELVARA helps people across London explore private aesthetic or dental services, clarify what matters to them, and submit an informed enquiry to participating clinics. Free to enquire. No obligation.",
  applicationName: "DELVARA",
  openGraph: {
    title:
      "DELVARA | Private Aesthetic & Dental Treatment Enquiries in London",
    description:
      "Explore private aesthetic and dental services in London with more clarity — then submit an informed enquiry to participating clinics.",
    siteName: "DELVARA",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title:
      "DELVARA | Private Aesthetic & Dental Treatment Enquiries in London",
    description:
      "DELVARA helps people across London enquire about private aesthetic or dental treatment and connect with relevant participating clinics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={geistSans.variable}>
      <body className="min-h-screen bg-delvara-bg font-sans text-delvara-charcoal antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-delvara-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
