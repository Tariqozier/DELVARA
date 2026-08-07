"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { IconChevron, IconClose, IconMenu } from "@/components/icons";
import { StartSearchButton } from "@/components/StartSearchButton";
import { brand, navItems } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDesktopMenu(null);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenDesktopMenu(null);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenDesktopMenu(null);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  function isActive(href: string, children?: readonly { href: string }[]) {
    if (pathname === href) return true;
    return Boolean(children?.some((child) => pathname.startsWith(child.href)));
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || menuOpen
          ? "border-delvara-border/90 bg-delvara-bg/95 shadow-[0_1px_0_rgb(23_45_46/0.03)] backdrop-blur-md"
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
            ref={navRef}
            className="hidden items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const children = "children" in item ? item.children : undefined;
              const active = isActive(item.href, children);
              if (!children) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[0.9375rem] transition-colors ${
                      active
                        ? "text-delvara-ink"
                        : "text-delvara-muted-text hover:text-delvara-ink"
                    }`}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }

              const expanded = openDesktopMenu === item.label;
              return (
                <div key={item.label} className="relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1.5 text-[0.9375rem] transition-colors ${
                      active || expanded
                        ? "text-delvara-ink"
                        : "text-delvara-muted-text hover:text-delvara-ink"
                    }`}
                    aria-expanded={expanded}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenDesktopMenu((current) =>
                        current === item.label ? null : item.label,
                      )
                    }
                  >
                    {item.label}
                    <IconChevron
                      className={`h-4 w-4 transition-transform ${
                        expanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expanded ? (
                    <div className="absolute top-full left-0 z-50 mt-3 min-w-[15rem] rounded-lg border border-delvara-border bg-delvara-white p-2 shadow-[0_16px_40px_rgb(23_45_46/0.08)]">
                      <Link
                        href={item.href}
                        className="block rounded-md px-3 py-2.5 text-sm text-delvara-muted-text transition-colors hover:bg-delvara-surface hover:text-delvara-ink"
                        onClick={() => setOpenDesktopMenu(null)}
                      >
                        Overview
                      </Link>
                      {children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block rounded-md px-3 py-2.5 text-sm transition-colors hover:bg-delvara-surface ${
                            pathname === child.href
                              ? "bg-delvara-surface text-delvara-ink"
                              : "text-delvara-charcoal hover:text-delvara-ink"
                          }`}
                          onClick={() => setOpenDesktopMenu(null)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <StartSearchButton variant="primary" className="min-h-11 px-4">
              Start your enquiry
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
              {navItems.map((item) => {
                const children =
                  "children" in item ? item.children : undefined;
                return (
                  <div
                    key={item.label}
                    className="border-b border-delvara-border/70 py-1 last:border-b-0"
                  >
                    <Link
                      href={item.href}
                      className={`block rounded-md px-3 py-3 text-base transition-colors ${
                        isActive(item.href, children)
                          ? "bg-delvara-surface text-delvara-ink"
                          : "text-delvara-charcoal hover:bg-delvara-surface"
                      }`}
                      aria-current={
                        pathname === item.href ? "page" : undefined
                      }
                    >
                      {item.label}
                    </Link>
                    {children ? (
                      <div className="mb-2 ml-3 flex flex-col gap-1 border-l border-delvara-border pl-3">
                        {children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`rounded-md px-3 py-2.5 text-sm transition-colors ${
                              pathname === child.href
                                ? "bg-delvara-surface text-delvara-ink"
                                : "text-delvara-muted-text hover:bg-delvara-surface hover:text-delvara-ink"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </nav>
            <div className="mt-5 border-t border-delvara-border pt-5">
              <StartSearchButton
                variant="primary"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                Start your enquiry
              </StartSearchButton>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
