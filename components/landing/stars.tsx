interface StarsProps {
  rating: string;
}

function parseStars(rating: string): number {
  const value = Number.parseFloat(rating.replace(",", "."));
  if (Number.isNaN(value)) return 5;
  return Math.max(0, Math.min(5, Math.round(value)));
}

export function Stars({ rating }: StarsProps) {
  const filled = parseStars(rating);

  return (
    <span
      role="img"
      aria-label={`Calificación ${rating}`}
      className="inline-flex items-center gap-0.5"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className={`h-4 w-4 ${i < filled ? "fill-cta" : "fill-primary/15"}`}
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
        </svg>
      ))}
    </span>
  );
}
