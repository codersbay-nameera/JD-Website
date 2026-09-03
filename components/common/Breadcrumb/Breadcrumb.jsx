import { AppLink } from "@/components/ui/Link";
import { createBreadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "@/components/common/JsonLd";

export function Breadcrumb({ items }) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      <JsonLd data={createBreadcrumbSchema(items)} />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? (
                  <span aria-hidden="true" className="text-border">
                    /
                  </span>
                ) : null}
                {isLast ? (
                  <span aria-current="page" className="text-foreground">
                    {item.name}
                  </span>
                ) : (
                  <AppLink href={item.href} className="hover:text-foreground">
                    {item.name}
                  </AppLink>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
