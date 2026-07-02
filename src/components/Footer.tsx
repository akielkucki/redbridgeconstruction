import { siteConfig } from "@/config/site.config";

const platformLabels: Record<string, string> = {
  instagram: "Instagram",
  googleBusiness: "Google",
};

export function Footer() {
  return (
    <footer className="bg-panel text-paper">
      <div className="shell border-t border-white/10 pt-16 md:pt-20 pb-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-12">
          <div className="col-span-2 md:col-span-5">
            <a href="/" className="flex items-center gap-3">
              <span aria-hidden className="block h-[3px] w-6 bg-red" />
              <span className="text-[15px] font-semibold tracking-tight text-paper">
                {siteConfig.company.name}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/50">
              {siteConfig.company.tagline}
            </p>
          </div>

          <nav className="md:col-span-2" aria-label="Footer">
            <h3 className="meta text-paper/40 mb-5">Navigate</h3>
            <ul className="space-y-3">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-paper/70 hover:text-paper transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h3 className="meta text-paper/40 mb-5">Contact</h3>
            <ul className="space-y-3 text-sm text-paper/70">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-paper transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="break-all hover:text-paper transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <address className="not-italic leading-relaxed">
                  {siteConfig.contact.address.street}
                  <br />
                  {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.state}{" "}
                  {siteConfig.contact.address.zip}
                </address>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="meta text-paper/40 mb-5">Follow</h3>
            <ul className="space-y-3">
              {Object.entries(siteConfig.social).map(([platform, url]) => (
                <li key={platform}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-paper/70 hover:text-paper transition-colors"
                  >
                    {platformLabels[platform] || platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sign-off wordmark */}
        <div
          aria-hidden
          className="mt-16 overflow-hidden border-t border-white/10 pt-10 select-none"
        >
          <span className="display block whitespace-nowrap text-[13.5vw] leading-[0.8] text-white/[0.06]">
            RED BRIDGE
          </span>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="meta text-paper/40">{siteConfig.footer.copyright}</p>
          <p className="meta text-paper/40">
            {siteConfig.footer.certifications.join(" · ")}
          </p>
        </div>
      </div>
    </footer>
  );
}
