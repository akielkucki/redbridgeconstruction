/** Renders schema.org structured data. Input is always trusted local site config. */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from trusted local config
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
