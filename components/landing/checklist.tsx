interface ChecklistProps {
  items: string[];
  tone?: "light" | "dark";
}

export function Checklist({ items, tone = "light" }: ChecklistProps) {
  const dark = tone === "dark";

  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className={`group flex items-start gap-3.5 rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-0.5 ${
            dark
              ? "border-primary-foreground/15 bg-primary-foreground/[0.06] shadow-none hover:border-cta/50 hover:bg-primary-foreground/[0.09]"
              : "border-primary/10 bg-surface shadow-[0_1px_2px_rgba(11,27,51,0.06)] hover:border-accent/40 hover:shadow-[0_14px_28px_-18px_rgba(11,27,51,0.35)]"
          }`}
        >
          <span
            aria-hidden="true"
            className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
              dark ? "bg-cta text-cta-foreground" : "bg-accent text-accent-foreground"
            }`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
              <path d="M3 8.5l3.2 3.2L13 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span
            className={`text-sm font-medium leading-6 ${dark ? "text-primary-foreground/90" : "text-primary"}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
