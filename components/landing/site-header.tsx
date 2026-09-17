"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Clientes", href: "/" },
  { label: "Afiliados", href: "/afiliados" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors transition-shadow duration-300 ease ${
        scrolled
          ? "border-b border-primary/10 bg-surface/95 shadow-sm backdrop-blur"
          : "border-b border-transparent bg-transparent shadow-none"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
            scrolled ? "text-primary" : "text-cta-foreground"
          }`}
        >
          Fixeado
        </Link>
        <nav aria-label="Navegación principal" className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-muted hover:bg-background hover:text-primary"
                  : "text-cta-foreground/90 hover:bg-white/10 hover:text-cta-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#cotizar"
            className="ml-1 rounded-md bg-cta px-4 py-2 text-sm font-semibold text-cta-foreground transition-opacity hover:opacity-90"
          >
            Cotizar
          </Link>
        </nav>
      </div>
    </header>
  );
}
