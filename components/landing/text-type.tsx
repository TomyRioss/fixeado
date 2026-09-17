"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface TextTypeProps {
  text: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  cursorBlinkDuration?: number;
  loop?: boolean;
  className?: string;
  cursorClassName?: string;
}

export function TextType({
  text,
  typingSpeed = 35,
  deletingSpeed = 25,
  pauseDuration = 600,
  showCursor = true,
  cursorCharacter = "|",
  cursorBlinkDuration = 0.25,
  loop = true,
  className,
  cursorClassName,
}: TextTypeProps) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (text.length === 0) return;
    const current = text[textIndex % text.length] ?? "";
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === current) {
      if (!loop && textIndex === text.length - 1) return;
      timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && displayed === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % text.length);
      }, pauseDuration / 2);
    } else {
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayed(current.slice(0, displayed.length - 1));
        } else {
          setDisplayed(current.slice(0, displayed.length + 1));
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [
    displayed,
    isDeleting,
    text,
    textIndex,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    loop,
  ]);

  return (
    <span className={`inline-flex items-center${className ? ` ${className}` : ""}`} aria-hidden="true">
      <span>{displayed}</span>
      {showCursor && (
        <motion.span
          className={`ml-0.5 inline-block${cursorClassName ? ` ${cursorClassName}` : ""}`}
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: cursorBlinkDuration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          {cursorCharacter}
        </motion.span>
      )}
    </span>
  );
}
