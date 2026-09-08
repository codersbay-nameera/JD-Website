"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { headerCta, headerNavigation } from "@/config/navigation";
import { AppLink } from "@/components/ui/Link";
import { cn } from "@/lib/utils";

const quoteCtaHref = "https://quote.justdeliveries.ai/";

function isNavItemActive(pathname, href) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.5 8H12.5M12.5 8L9 4.5M12.5 8L9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuToggleIcon({ open }) {
  return (
    <span
      className="relative block h-4 w-6"
      aria-hidden="true"
    >
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-6 rounded-full bg-[var(--header-nav-text)] transition-all duration-300 ease-out",
          open ? "top-2 rotate-45" : "top-0",
        )}
      />
      <span
        className={cn(
          "absolute left-0 top-2 block h-0.5 w-6 rounded-full bg-[var(--header-nav-text)] transition-all duration-300 ease-out",
          open ? "opacity-0" : "opacity-100",
        )}
      />
      <span
        className={cn(
          "absolute left-0 block h-0.5 w-6 rounded-full bg-[var(--header-nav-text)] transition-all duration-300 ease-out",
          open ? "top-2 -rotate-45" : "top-4",
        )}
      />
    </span>
  );
}

function getNavLinkClassName(isActive, mobile = false) {
  return cn(
    mobile
      ? "relative block w-full py-3 text-[15px] font-medium leading-none text-[var(--header-nav-text)]"
      : "relative inline-block whitespace-nowrap pb-1 text-[15px] font-medium leading-none text-[var(--header-nav-text)]",
    isActive &&
      "after:absolute after:left-0 after:h-[2.5px] after:w-full after:rounded-full after:bg-[#178A49] after:content-['']",
    mobile ? "after:bottom-2" : "after:bottom-0",
  );
}

function getCtaClassName(mobile = false) {
  return cn(
    "inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-lg bg-[var(--header-navy)] px-5 text-[15px] font-medium leading-none text-white",
    mobile && "mt-2 w-full justify-center",
  );
}

export function Navbar({ className }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((current) => !current);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={cn("hidden min-w-0 lg:block", className)}
      >
        <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3 lg:gap-x-9">
          {headerNavigation.map((item) => {
            const isActive = isNavItemActive(pathname, item.href);

            return (
              <li key={item.label}>
                <AppLink
                  href={item.href}
                  disableHover
                  aria-current={isActive ? "page" : undefined}
                  className={getNavLinkClassName(isActive)}
                >
                  {item.label}
                </AppLink>
              </li>
            );
          })}
          <li>
            <AppLink
              href={quoteCtaHref}
              external
              disableHover
              className={getCtaClassName()}
            >
              {headerCta.label}
              <ArrowRightIcon />
            </AppLink>
          </li>
        </ul>
      </nav>

      <div className={cn("lg:hidden", className)}>
        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={toggleMenu}
        >
          <MenuToggleIcon open={isMenuOpen} />
        </button>

        <div
          className={cn(
            "fixed inset-x-0 top-[var(--header-height)] z-40 lg:hidden",
            isMenuOpen ? "pointer-events-auto" : "pointer-events-none",
          )}
        >
          <div
            className={cn(
              "absolute inset-0 bg-[#0b2140]/20 transition-opacity duration-300 ease-out",
              isMenuOpen ? "opacity-100" : "opacity-0",
            )}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <nav
            id="mobile-nav-menu"
            aria-label="Main navigation"
            className={cn(
              "relative border-b border-[var(--header-border)] bg-[var(--header-background)] shadow-sm",
              "max-h-[calc(100dvh-var(--header-height))] overflow-y-auto overscroll-contain",
              "transition-[transform,opacity] duration-300 ease-out",
              isMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-2 opacity-0",
            )}
          >
            <ul className="page-layout-padding flex flex-col py-3">
              {headerNavigation.map((item) => {
                const isActive = isNavItemActive(pathname, item.href);

                return (
                  <li key={item.label}>
                    <AppLink
                      href={item.href}
                      disableHover
                      aria-current={isActive ? "page" : undefined}
                      className={getNavLinkClassName(isActive, true)}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </AppLink>
                  </li>
                );
              })}
              <li>
                <AppLink
                  href={quoteCtaHref}
                  external
                  disableHover
                  className={getCtaClassName(true)}
                  onClick={closeMenu}
                >
                  {headerCta.label}
                  <ArrowRightIcon />
                </AppLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
