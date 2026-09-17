interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      <p
        className={`inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] ${
          dark
            ? "bg-cta text-cta-foreground"
            : "bg-primary text-primary-foreground"
        }`}
      >
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full ${dark ? "bg-primary" : "bg-cta"}`}
        />
        {eyebrow}
      </p>
      <h2
        className={`max-w-2xl text-balance text-[1.75rem] font-extrabold leading-[1.12] tracking-[-0.02em] sm:text-4xl ${
          dark ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <span
        aria-hidden="true"
        className={`h-1 w-12 rounded-full bg-cta ${align === "center" ? "mx-auto" : ""}`}
      />
      {description ? (
        <p
          className={`max-w-2xl text-pretty text-base leading-7 sm:text-lg sm:leading-8 ${
            dark ? "text-primary-foreground/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
