"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  actions,
  align = "left"
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <motion.span
          className="inline-flex items-center gap-3 text-sm font-secondary uppercase tracking-[0.35em] text-slate-500"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <span className="h-px w-12 bg-slate-400/60" />
          {eyebrow}
        </motion.span>
      ) : null}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="space-y-4"
      >
        <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-lg text-slate-600">{description}</p>
        ) : null}
      </motion.div>
      {actions ? <div className="mt-4 flex gap-3">{actions}</div> : null}
    </div>
  );
}
