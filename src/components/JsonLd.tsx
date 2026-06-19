/**
 * Renders one or more JSON-LD structured-data blocks.
 * Server component — safe to use inside any page or layout.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  const blocks = Array.isArray(data) ? data : [data];
  return (
    <>
      {blocks.map((block) => {
        const json = JSON.stringify(block);
        const key =
          (block as { "@type"?: string })["@type"] ?? json.slice(0, 48);
        return (
          <script
            key={key}
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: structured data is built from trusted site config, not user input
            dangerouslySetInnerHTML={{ __html: json }}
          />
        );
      })}
    </>
  );
}
