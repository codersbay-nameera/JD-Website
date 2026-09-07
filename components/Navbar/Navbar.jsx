"use client";

import { usePathname } from "next/navigation";
import { headerCta, headerNavigation } from "@/config/navigation";
import { AppLink } from "@/components/ui/Link";
import { cn } from "@/lib/utils";

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

export function Navbar({ className }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation" className={cn(className)}>
      <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3 lg:gap-x-9">
        {headerNavigation.map((item) => {
          const isActive = isNavItemActive(pathname, item.href);

          return (
            <li key={item.label}>
              <AppLink
                href={item.href}
                disableHover
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative inline-block whitespace-nowrap pb-1 text-[15px] font-medium leading-none text-[var(--header-nav-text)]",
                  isActive &&
                    "after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:rounded-full after:bg-[#2daa5a] after:content-['']",
                )}
              >
                {item.label}
              </AppLink>
            </li>
          );
        })}
        <li>
          <AppLink
            href="https://quote.justdeliveries.ai/"
            external
            disableHover
            className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-lg bg-[var(--header-navy)] px-5 text-[15px] font-medium leading-none text-white"
          >
            {headerCta.label}
            <ArrowRightIcon />
          </AppLink>
        </li>
      </ul>
    </nav>
  );
}
