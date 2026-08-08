"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  normalizeEnquiryDraft,
  type EnquiryDraft,
} from "@/lib/enquiryContext";

type SearchContextValue = {
  isOpen: boolean;
  draft: EnquiryDraft;
  openSearch: (draft?: EnquiryDraft) => void;
  closeSearch: () => void;
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [draft, setDraft] = useState<EnquiryDraft>({});

  const openSearch = useCallback((nextDraft?: EnquiryDraft) => {
    // Always replace draft on open so a new treatment CTA never inherits stale context.
    setDraft(normalizeEnquiryDraft(nextDraft));
    setIsOpen(true);
  }, []);

  const closeSearch = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, draft, openSearch, closeSearch }),
    [isOpen, draft, openSearch, closeSearch],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }
  return context;
}
