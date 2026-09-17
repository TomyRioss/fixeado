import { Stars } from "@/components/landing/stars";

export interface ReviewItem {
  name: string;
  shop: string;
  rating: string;
  text: string;
}

function initials(name: string): string {
  const parts = name.replace(/\.$/, "").split(/\s+/).filter(Boolean);
  const letters = parts.slice(0, 2).map((p) => p.charAt(0).toUpperCase());
  return letters.join("") || "?";
}

export function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <article className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-primary/10 bg-surface p-6 shadow-[0_1px_2px_rgba(11,27,51,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(11,27,51,0.3)]">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cta via-cta/70 to-accent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-5 select-none text-[5rem] font-extrabold leading-none text-primary/[0.06]"
      >
        &ldquo;
      </span>
      <div className="flex items-center justify-between gap-2">
        <Stars rating={review.rating} />
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary">
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
          Verificada
        </span>
      </div>
      <p className="text-pretty text-[0.95rem] leading-7 text-primary/90">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-3 border-t border-primary/10 pt-4">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground"
        >
          {initials(review.name)}
        </span>
        <div className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-bold text-primary">{review.name}</span>
          <span className="truncate text-xs text-muted">{review.shop}</span>
        </div>
        <span className="ml-auto shrink-0 rounded-full bg-background px-2.5 py-1 text-xs font-extrabold text-primary">
          {review.rating}
        </span>
      </div>
    </article>
  );
}
