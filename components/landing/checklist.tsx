interface ChecklistProps {
  items: string[];
  tone?: "light" | "dark";
}

export function Checklist({ items, tone = "light" }: ChecklistProps) {
  const dark = tone === "dark";

  return (
    <ul
      className={
        dark
          ? "grid grid-cols-1 gap-x-12 sm:grid-cols-2"
          : "grid grid-cols-1 gap-4 sm:grid-cols-2"
      }
    >
      {items.map((item) => (
        <li
          key={item}
          className={
            dark
              ? "group flex items-start gap-4 border-b border-primary-foreground/10 py-5"
              : "group flex items-start gap-3.5 rounded-2xl border border-primary/10 bg-surface p-5 shadow-[0_1px_2px_rgba(11,27,51,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_14px_28px_-18px_rgba(11,27,51,0.35)]"
          }
        >
          <span
            aria-hidden="true"
            className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110 ${
              dark
                ? "bg-cta text-cta-foreground"
                : "mt-0.5 bg-accent text-accent-foreground"
            }`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-none stroke-current stroke-2">
              <path d="M3 8.5l3.2 3.2L13 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span
            className={
              dark
                ? "text-[15px] font-semibold leading-7 text-primary-foreground"
                : "text-sm font-medium leading-6 text-primary"
            }
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
