"use client";

import { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";

const NAV_LINKS = siteConfig.navigation.filter((item) => item.label !== "Home");

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
       isOpen
          ? "bg-paper/90 min-h-full backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent", isScrolled ? "bg-paper/95" : "bg-transparent"
      )}
    >
      <div className="shell flex h-16 md:h-[72px] items-center justify-between gap-6">
        <a
          href="/"
          className="flex items-center gap-3"
          aria-label={siteConfig.company.name}
        >
          <span aria-hidden className="block h-[3px] w-6 bg-red" />
          <span className="text-[15px] font-semibold tracking-tight text-ink">
            {siteConfig.company.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-ink/70 hover:text-ink transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="meta text-grey hover:text-ink transition-colors"
          >
            {siteConfig.contact.phone}
          </a>
          <a
            href="/#contact"
            className={buttonVariants({ variant: "accent", size: "sm" })}
          >
            Start a project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform duration-300",
              isOpen && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "block h-px w-6 bg-ink transition-transform duration-300",
              isOpen && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper transition-opacity duration-300",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <nav className="shell flex h-full flex-col pt-6" aria-label="Mobile">
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="display border-t border-line py-5 text-3xl text-ink"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-auto pb-10 space-y-4">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="meta block text-grey"
            >
              {siteConfig.contact.phone}
            </a>
            {/* biome-ignore lint/a11y/useValidAnchor: real navigation; onClick only closes the menu */}
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className={buttonVariants({
                variant: "accent",
                size: "lg",
                className: "w-full",
              })}
            >
              Start a project
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
