"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Inicio", href: "/#inicio", underline: false },
  { label: "Contacto", href: "/#contacto", underline: false },
  { label: "Garantía", href: "/#garantia", underline: false },
  { label: "Soy un Taller", href: "/afiliados", underline: true },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // En páginas con hero claro (ej: /afiliados) el navbar arranca sólido para que se lea.
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      {/* Bg con fade suave de arriba hacia abajo (opacity + translateY: el blur no interpola) */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-surface/95 shadow-sm backdrop-blur-md transition-all duration-500 ease-out ${
          solid ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        }`}
      />
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className={`text-xl font-extrabold tracking-tight transition-colors duration-300 ${
            solid ? "text-primary" : "text-white"
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
                solid
                  ? "text-muted hover:bg-background hover:text-primary"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              } ${link.underline ? "underline decoration-cta decoration-2 underline-offset-8" : ""}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#cotizar"
            className="ml-1 rounded-md bg-cta px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Ingresar ahora
          </Link>
        </nav>
      </div>
      {/* Hairline inferior: solo fade de opacidad, sin morph de tamaño */}
      <div
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-px bg-primary/10 transition-opacity duration-500 ease-out ${
          solid ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
}
