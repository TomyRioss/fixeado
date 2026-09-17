const FAILURE_OPTIONS = [
  "Pantalla rota",
  "Batería",
  "Problemas de carga",
  "Daño por agua",
  "Software",
  "Otro",
] as const;

export function ZoneSearchBar() {
  return (
    <section id="cotizar" aria-label="Buscar taller por zona" className="w-full">
      <form className="flex w-full flex-col gap-3 rounded-xl border border-primary/10 bg-surface p-4 shadow-sm sm:p-5 md:flex-row md:items-end">
        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor="zona" className="text-sm font-medium text-primary">
            Tu zona
          </label>
          <input
            id="zona"
            name="zona"
            type="text"
            placeholder="Ej: Palermo, Centro, Norte"
            autoComplete="address-level2"
            className="h-11 rounded-md border border-primary/15 bg-background px-3 text-sm text-primary placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>
        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor="falla" className="text-sm font-medium text-primary">
            Tipo de falla
          </label>
          <select
            id="falla"
            name="falla"
            defaultValue={FAILURE_OPTIONS[0]}
            className="h-11 rounded-md border border-primary/15 bg-background px-3 text-sm text-primary focus:border-accent focus:outline-none"
          >
            {FAILURE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="h-11 rounded-md bg-cta px-6 text-sm font-semibold text-cta-foreground transition-opacity hover:opacity-90 md:w-auto"
        >
          Buscar taller
        </button>
      </form>
      <p className="mt-2 text-xs leading-5 text-muted">
        Búsqueda orientativa sin compromiso. La cotización final la confirma el
        taller verificado de tu zona.
      </p>
    </section>
  );
}
