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
    <ol className="relative grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-8">
      <span
        aria-hidden="true"
        className="absolute bottom-2 left-6 top-2 w-0.5 bg-cta/60 lg:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute left-[12%] right-[12%] top-6 hidden h-0.5 bg-cta/60 lg:block"
      />
      {steps.map((step, index) => (
        <motion.li
          key={step.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
          className="relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
        >
          <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cta text-lg font-extrabold text-cta-foreground ring-4 ring-primary">
            {index + 1}
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-9 right-0 hidden select-none text-7xl font-extrabold tracking-tight text-white/[0.07] lg:block"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="lg:pt-5">
            <h3 className="text-lg font-extrabold leading-7 tracking-tight text-primary-foreground">
              {step.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-primary-foreground/70 lg:mx-auto lg:mt-2 lg:max-w-[26ch]">
              {step.description}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
