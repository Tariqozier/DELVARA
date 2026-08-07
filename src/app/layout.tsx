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
    default: "DELVARA | Find the Right Treatment & Clinic",
    template: "%s | DELVARA",
  },
  description:
    "Explore private treatment options and connect with clinics that match your needs, location and preferences with DELVARA.",
  applicationName: "DELVARA",
  openGraph: {
    title: "DELVARA | Find the Right Treatment & Clinic",
    description:
      "Explore private treatment options and connect with clinics that match your needs, location and preferences with DELVARA.",
    siteName: "DELVARA",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "DELVARA | Find the Right Treatment & Clinic",
    description:
      "Explore private treatment options and connect with clinics that match your needs, location and preferences with DELVARA.",
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
