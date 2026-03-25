"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/components/index";

type NavItem = (typeof siteConfig.navigation)[number];

function getSubmenuItems(label: string) {
  if (label === "Services") {
    return siteConfig.services.map((s) => ({
      title: s.title,
      description: s.description,
      href: `/#services`,
      icon: s.icon,
    }));
  }
  if (label === "Projects") {
    return siteConfig.portfolio.map((p) => ({
      title: p.title,
      description: p.category,
      href: `/#portfolio`,
      icon: null,
    }));
  }
  return null;
}

const serviceIcons: Record<string, React.ReactNode> = {
  home: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  business: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  architecture: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
    </svg>
  ),
};

function DesktopDropdown({
  item,
  isScrolled,
}: {
  item: NavItem;
  isScrolled: boolean;
}) {
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
        className={`relative font-[family-name:var(--font-inter)] font-medium transition-all duration-300 group ${
          isScrolled
            ? "text-xs text-accent-muted hover:text-foreground"
            : "text-sm text-zinc-500 hover:text-zinc-900"
        }`}
      >
        {item.label}
        <span
          className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
            isScrolled ? "bg-foreground" : "bg-zinc-900"
          }`}
        />
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <a
        href={item.href}
        className={`relative font-[family-name:var(--font-inter)] font-medium transition-all duration-300 group inline-flex items-center gap-1 ${
          isScrolled
            ? "text-xs text-accent-muted hover:text-foreground"
            : "text-sm text-zinc-500 hover:text-zinc-900"
        }`}
      >
        {item.label}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
        <span
          className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
            isScrolled ? "bg-foreground" : "bg-zinc-900"
          }`}
        />
      </a>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.19, 1, 0.22, 1] }}
            className="absolute top-full left-1/2 -translate-x-1/2 pt-3"
          >
            <div
              className="rounded-2xl border border-[#3d6b55]/60 overflow-hidden"
              style={{
                background: "rgba(26, 58, 42, 0.95)",
                backdropFilter: "blur(20px) saturate(1.8)",
                WebkitBackdropFilter: "blur(20px) saturate(1.8)",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(61,107,85,0.3), inset 0 1px 0 rgba(245,239,224,0.06)",
                minWidth: "280px",
              }}
            >
              <div className="p-2">
                {submenu.map((sub, i) => (
                  <a
                    key={i}
                    href={sub.href}
                    className="flex items-start gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 hover:bg-[#2d5a45]/80 group/item"
                  >
                    {sub.icon && serviceIcons[sub.icon] ? (
                      <span className="mt-0.5 text-[#d9d2c0] group-hover/item:text-[#ffe4ac] transition-colors duration-200 shrink-0">
                        {serviceIcons[sub.icon]}
                      </span>
                    ) : (
                      <span className="mt-0.5 text-[#d9d2c0] group-hover/item:text-[#ffe4ac] transition-colors duration-200 shrink-0">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5A1.5 1.5 0 003.75 21z" />
                        </svg>
                      </span>
                    )}
                    <div className="min-w-0">
                      <div className="font-[family-name:var(--font-space-grotesk)] text-sm font-medium text-[#f5efe0] group-hover/item:text-[#ffe4ac] transition-colors duration-200">
                        {sub.title}
                      </div>
                      <div className="text-xs text-[#c4bda8]/70 mt-0.5 leading-snug">
                        {sub.description}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileAccordion({
  item,
  onClose,
  index,
}: {
  item: NavItem;
  onClose: () => void;
  index: number;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const submenu = getSubmenuItems(item.label);

  if (!submenu) {
    return (
      <motion.a
        href={item.href}
        onClick={onClose}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: index * 0.08 }}
        className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium text-foreground hover:text-accent-muted transition-colors"
      >
        {item.label}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ delay: index * 0.08 }}
      className="flex flex-col items-center"
    >
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="font-[family-name:var(--font-space-grotesk)] text-3xl font-medium text-foreground hover:text-accent-muted transition-colors inline-flex items-center gap-2"
      >
        {item.label}
        <motion.svg
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </motion.svg>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-3 pb-1 flex flex-col items-center gap-1">
              {submenu.map((sub, i) => (
                <a
                  key={i}
                  href={sub.href}
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl text-center transition-all duration-200 hover:bg-surface-elevated/50"
                >
                  <div className="font-[family-name:var(--font-inter)] text-base font-medium text-accent-muted">
                    {sub.title}
                  </div>
                  <div className="text-xs text-muted/60 mt-0.5">
                    {sub.description}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Island Navbar */}
      <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="pointer-events-auto w-full transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
          style={{
            maxWidth: isScrolled ? "56rem" : "100%",
            marginTop: isScrolled ? "0.75rem" : "0",
            borderRadius: isScrolled ? "9999px" : "0",
            background: isScrolled
              ? "rgba(26, 58, 42, 0.85)"
              : "transparent",
            backdropFilter: isScrolled ? "blur(16px) saturate(1.8)" : "none",
            WebkitBackdropFilter: isScrolled ? "blur(16px) saturate(1.8)" : "none",
            boxShadow: isScrolled
              ? "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(61, 107, 85, 0.5), inset 0 1px 0 rgba(245, 239, 224, 0.08)"
              : "none",
            padding: isScrolled ? "0 0.5rem" : "0",
          }}
        >
          <div className={`mx-auto transition-all duration-500 ${isScrolled ? "px-6" : "px-6 lg:px-8 max-w-7xl"}`}>
            <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "h-14" : "h-20"}`}>

              {/* Logo */}
              <a href="/" className="flex items-center gap-2 group">
                <span className={`font-[family-name:var(--font-space-grotesk)] font-bold tracking-tight transition-all duration-500 ${isScrolled ? "text-lg text-foreground" : "text-2xl text-zinc-900"}`}>
                  {siteConfig.company.name}
                </span>
                <span className={`font-[family-name:var(--font-space-grotesk)] font-light tracking-tight transition-all duration-500 ${isScrolled ? "text-lg text-muted hidden lg:inline" : "text-2xl text-zinc-400"}`}>
                  {siteConfig.company.tagline}
                </span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                {siteConfig.navigation.map((item) => (
                  <DesktopDropdown key={item.label} item={item} isScrolled={isScrolled} />
                ))}
                <a
                  href="/#contact"
                  className={`font-[family-name:var(--font-inter)] font-semibold tracking-wide transition-all duration-500 ${isScrolled ? "ml-2 px-5 py-1.5 text-xs rounded-full bg-foreground text-background hover:bg-accent-muted" : "ml-4 px-6 py-2.5 text-sm rounded-full bg-zinc-900 text-white hover:bg-zinc-800"}`}
                >
                  Get Quote
                </a>
              </div>

              {/* Mobile Menu Button */}
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
                    className={`w-6 h-0.5 block origin-center transition-colors duration-500 ${isScrolled ? "bg-foreground" : "bg-zinc-900"}`}
                  />
                  <motion.span
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                    className={`w-6 h-0.5 block transition-colors duration-500 ${isScrolled ? "bg-foreground" : "bg-zinc-900"}`}
                  />
                  <motion.span
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -6 : 0,
                    }}
                    className={`w-6 h-0.5 block origin-center transition-colors duration-500 ${isScrolled ? "bg-foreground" : "bg-zinc-900"}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-6">
              {siteConfig.navigation.map((item, index) => (
                <MobileAccordion
                  key={item.label}
                  item={item}
                  onClose={() => setIsMobileMenuOpen(false)}
                  index={index}
                />
              ))}
              <motion.a
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.4 }}
                className="mt-4 px-8 py-3 bg-foreground text-background font-[family-name:var(--font-inter)] text-lg font-semibold rounded-full"
              >
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
