"use client";

import { motion } from "motion/react";

export interface StepItem {
  title: string;
  description: string;
}

interface StepsGridProps {
  steps: StepItem[];
}

export function StepsGrid({ steps }: StepsGridProps) {
  return (
    <ol className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <span
        aria-hidden="true"
        className="absolute left-8 right-8 top-9 hidden h-px bg-primary/15 lg:block"
      />
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          className="group relative flex flex-col gap-3 rounded-2xl border border-primary/10 bg-background p-6 shadow-[0_1px_2px_rgba(11,27,51,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_16px_32px_-16px_rgba(11,27,51,0.25)]"
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-extrabold text-primary-foreground ring-4 ring-surface transition-colors duration-300 group-hover:bg-cta group-hover:text-cta-foreground">
              {index + 1}
            </span>
            <span
              aria-hidden="true"
              className="text-4xl font-extrabold tracking-tight text-primary/10 transition-colors duration-300 group-hover:text-cta/60"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="text-base font-bold leading-6 text-primary">{step.title}</h3>
          <p className="text-sm leading-6 text-muted">{step.description}</p>
        </motion.li>
      ))}
    </ol>
  );
}
