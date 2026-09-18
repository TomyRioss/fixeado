interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
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
      <h2
        className={`max-w-2xl text-balance text-[1.75rem] font-extrabold leading-[1.12] tracking-[-0.02em] sm:text-4xl ${
          dark ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
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
