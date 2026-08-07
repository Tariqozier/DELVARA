"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { IconClose, IconMenu } from "@/components/icons";
import { StartSearchButton } from "@/components/StartSearchButton";
import { brand, navLinks } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || menuOpen
          ? "border-delvara-border/90 bg-delvara-bg/95 shadow-[0_1px_0_rgb(16_42_43/0.03)] backdrop-blur-md"
          : "border-transparent bg-delvara-bg/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-delvara">
        <div className="flex h-[4.25rem] items-center justify-between gap-4 md:h-[5rem]">
          <Link
            href="/"
            className="text-[1.15rem] font-semibold tracking-[0.18em] text-delvara-ink md:text-[1.25rem]"
            aria-label={`${brand.name} home`}
          >
            {brand.name}
          </Link>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[0.9375rem] transition-colors ${
                    active
                      ? "text-delvara-ink"
                      : "text-delvara-muted-text hover:text-delvara-ink"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <StartSearchButton variant="secondary" className="min-h-11 px-4">
              Find a clinic
            </StartSearchButton>
            <StartSearchButton variant="primary" className="min-h-11 px-4">
              Start your search
            </StartSearchButton>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-delvara-border text-delvara-ink transition-colors hover:bg-delvara-surface lg:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <IconClose className="h-5 w-5" />
            ) : (
              <IconMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id={menuId}
          className="border-t border-delvara-border bg-delvara-bg lg:hidden"
        >
          <div className="container-delvara py-5">
            <nav aria-label="Mobile" className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-md px-3 py-3 text-base transition-colors ${
                      active
                        ? "bg-delvara-surface text-delvara-ink"
                        : "text-delvara-charcoal hover:bg-delvara-surface"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-5 flex flex-col gap-3 border-t border-delvara-border pt-5">
              <StartSearchButton
                variant="secondary"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                Find a clinic
              </StartSearchButton>
              <StartSearchButton
                variant="primary"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                Start your search
              </StartSearchButton>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
