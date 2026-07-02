"use client";

import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms, applied via CSS transition-delay */
  delay?: number;
}

/**
 * Lightweight scroll reveal: renders content server-side (visible to crawlers),
 * then transitions it in via CSS when it enters the viewport.
 * Respects prefers-reduced-motion (hidden state only applies when motion is allowed).
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      el.dataset.reveal = "in";
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.reveal = "in";
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal=""
      className={className}
      style={
        delay
          ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
