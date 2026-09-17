"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div
            key={item.question}
            className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
              open
                ? "border-primary/20 bg-surface shadow-[0_16px_32px_-24px_rgba(11,27,51,0.4)]"
                : "border-primary/10 bg-surface hover:border-primary/25 hover:shadow-[0_10px_24px_-20px_rgba(11,27,51,0.4)]"
            }`}
          >
            <button
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
            >
              <span
                aria-hidden="true"
                className={`hidden h-8 w-1 shrink-0 rounded-full transition-colors duration-300 sm:block ${
                  open ? "bg-cta" : "bg-primary/10"
                }`}
              />
              <span className="flex-1 text-[0.95rem] font-bold leading-6 text-primary sm:text-base">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-lg font-bold leading-none transition-all duration-300 ${
                  open
                    ? "rotate-45 border-cta bg-cta text-cta-foreground"
                    : "border-primary/15 bg-background text-primary"
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: "easeInOut" }}
                >
                  <p className="px-5 pb-5 pl-5 text-sm leading-7 text-muted sm:px-6 sm:pl-11">
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
