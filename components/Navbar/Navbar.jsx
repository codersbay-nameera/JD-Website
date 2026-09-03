import { headerCta, headerNavigation } from "@/config/navigation";
import { AppLink } from "@/components/ui/Link";
import { cn } from "@/lib/utils";

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
  return (
    <nav aria-label="Main navigation" className={cn(className)}>
      <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3 lg:gap-x-9">
        {headerNavigation.map((item) => (
          <li key={item.label}>
            <AppLink
              href={item.href}
              className="whitespace-nowrap text-[15px] font-medium leading-none text-[var(--header-nav-text)] transition-none hover:text-[var(--header-nav-text)]"
            >
              {item.label}
            </AppLink>
          </li>
        ))}
        <li>
          <AppLink
            href={headerCta.href}
            className="inline-flex h-11 items-center gap-2 whitespace-nowrap rounded-lg bg-[var(--header-navy)] px-5 text-[15px] font-medium leading-none text-white transition-none hover:opacity-100"
          >
            {headerCta.label}
            <ArrowRightIcon />
          </AppLink>
        </li>
      </ul>
    </nav>
  );
}
