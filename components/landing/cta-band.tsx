import Link from "next/link";

interface CtaBandProps {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBand({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="bg-surface">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center sm:px-12 sm:py-16">
          <span
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cta/25 blur-2xl"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-2xl"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-5">
            <span
              aria-hidden="true"
              className="h-1.5 w-16 rounded-full bg-cta"
            />
            <h2 className="text-balance text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-primary-foreground sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-xl text-pretty text-base leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
              {description}
            </p>
            <div className="mt-2 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href={primaryHref}
                className="rounded-full bg-cta px-8 py-3.5 text-sm font-extrabold text-cta-foreground shadow-[0_12px_28px_-12px_rgba(255,176,32,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_32px_-12px_rgba(255,176,32,0.9)]"
              >
                {primaryLabel}
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link
                  href={secondaryHref}
                  className="rounded-full border border-primary-foreground/30 px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary-foreground/60 hover:bg-primary-foreground/10"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
