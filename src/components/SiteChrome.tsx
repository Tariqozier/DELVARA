"use client";

import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PatientSearchModal } from "@/components/PatientSearchModal";
import { SearchProvider } from "@/components/SearchProvider";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <div id="main-content" className="flex-1">
          {children}
        </div>
        <Footer />
      </div>
      <PatientSearchModal />
    </SearchProvider>
  );
}
