/**
 * Renders JSON-LD structured data in a script tag.
 * Use only the schema types appropriate for the page content.
 */
export function JsonLd({ data }) {
  const json = Array.isArray(data) ? data : [data];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(json.length === 1 ? json[0] : json),
      }}
    />
  );
}
