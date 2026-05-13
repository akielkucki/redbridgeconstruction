"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/components/index";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = (typeof siteConfig.navigation)[number];

function getSubmenuItems(label: string) {
  if (label === "Services") {
    return siteConfig.services.map((s) => ({
      title: s.title,
      description: s.description,
      href: `/#services`,
    }));
  }
  if (label === "Projects") {
    return siteConfig.portfolio.slice(0, 4).map((p) => ({
      title: p.title,
      description: p.category,
      href: `/#portfolio`,
    }));
  }
  return null;
}

function DesktopDropdown({ item }: { item: NavItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const submenu = getSubmenuItems(item.label);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  if (!submenu) {
    return (
      <a
        href={item.href}
        className="relative font-[family-name:var(--font-inter)] text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 group"
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
      </a>
    );
  }

  return (
    <div className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        type="button"
        className="font-[family-name:var(--font-inter)] text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200 inline-flex items-center gap-1"
      >
        {item.label}
        <svg
          className={cn("w-3 h-3 transition-transform duration-200", isOpen && "rotate-180")}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
          >
            <div className="rounded-2xl border border-border bg-white shadow-xl overflow-hidden min-w-[300px] p-2">
              {submenu.map((sub, i) => (
                <a
                  key={i}
                  href={sub.href}
                  className="block px-3 py-2.5 rounded-xl hover:bg-surface-muted transition-colors group/item"
                >
                  <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-foreground group-hover/item:text-[var(--accent)] transition-colors">
                    {sub.title}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {sub.description}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none px-4">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
          className={cn(
            "pointer-events-auto w-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
            isScrolled
              ? "mt-3 max-w-5xl rounded-full bg-white/85 backdrop-blur-xl border border-border shadow-[0_8px_32px_-12px_rgba(20,17,13,0.12)]"
              : "max-w-7xl mt-0",
          )}
        >
          <div className={cn("transition-all duration-500", isScrolled ? "px-4" : "px-6 lg:px-8")}>
            <div className={cn("flex items-center justify-between transition-all duration-500", isScrolled ? "h-14" : "h-20")}>
              <a href="/" className="flex items-center gap-2 group">
                <span
                  className={cn(
                    "font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight text-foreground transition-all duration-500",
                    isScrolled ? "text-base" : "text-xl",
                  )}
                >
                  {siteConfig.company.name}
                </span>
              </a>

              <div className="hidden md:flex items-center gap-7">
                {siteConfig.navigation.map((item) => (
                  <DesktopDropdown key={item.label} item={item} />
                ))}
                <a href="/#contact">
                  <Button variant="accent" size="sm">
                    Get Quote
                  </Button>
                </a>
              </div>

              {/* Mobile button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden relative w-10 h-10 flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="flex flex-col gap-1.5">
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 6 : 0,
                    }}
                    className="w-6 h-0.5 block bg-foreground origin-center"
                  />
                  <motion.span
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    className="w-6 h-0.5 block bg-foreground"
                  />
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -6 : 0,
                    }}
                    className="w-6 h-0.5 block bg-foreground origin-center"
                  />
                </div>
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {siteConfig.navigation.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ delay: index * 0.06 }}
                  className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium text-foreground hover:text-[var(--accent)] transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ delay: 0.35 }}
                className="mt-4"
              >
                <Button variant="accent" size="lg">
                  Get Quote
                </Button>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
