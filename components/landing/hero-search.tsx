"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { TextType } from "@/components/landing/text-type";

const FAILURE_EXAMPLES = [
  "Solo carga cuándo...",
  "Pantalla rota en Palermo...",
  "Batería se descarga rápido...",
  "No enciende tras mojarse...",
  "Pin de carga flojo en Centro...",
] as const;

export function HeroSearch() {
  const [value, setValue] = useState("");

  return (
    <form
      action="/#cotizar"
      className="mx-auto w-full max-w-xl"
      aria-label="Buscar por zona o falla"
    >
      <label htmlFor="hero-search" className="sr-only">
        Buscar por zona o falla
      </label>
      <div className="relative">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted"
        />
        <input
          id="hero-search"
          name="q"
          type="search"
          autoComplete="off"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          aria-label="Buscar por zona o falla"
          className="h-13 w-full rounded-xl border border-primary/15 bg-surface py-4 pl-11 pr-5 text-base text-primary shadow-lg placeholder-transparent focus:border-primary focus:outline-none"
        />
        {value === "" && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 flex items-center overflow-hidden pl-11 pr-5 text-base text-muted"
          >
            <TextType
              text={[...FAILURE_EXAMPLES]}
              typingSpeed={35}
              deletingSpeed={25}
              pauseDuration={600}
              cursorCharacter="|"
              cursorBlinkDuration={0.25}
              loop
              className="truncate"
            />
          </div>
        )}
      </div>
      <p className="mt-3 text-center text-sm text-white/90">
        Búsqueda orientativa sin compromiso.
      </p>
    </form>
  );
}
