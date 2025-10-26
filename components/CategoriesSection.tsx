"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categoryDetails, type CategoryKey } from "@/lib/data";

const categories: { key: CategoryKey; label: string }[] = [
  { key: "properties", label: "Properties" },
  { key: "realEstate", label: "Real Estate" },
  { key: "themes", label: "Themes" },
  { key: "design", label: "Design" },
  { key: "commercial", label: "Commercial" }
];

export function CategoriesSection() {
  const [active, setActive] = useState<CategoryKey | null>(null);
  const modalContent = useMemo(() => (active ? categoryDetails[active] : null), [active]);

  return (
    <section className="relative bg-[#f7f7f8] py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/60" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-12">
        <div className="flex flex-col gap-4 text-left">
          <motion.span
            className="inline-flex items-center gap-3 text-sm font-secondary uppercase tracking-[0.35em] text-slate-500"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-px w-12 bg-slate-400/60" />
            Domains
          </motion.span>
          <motion.h2
            className="text-4xl font-semibold text-slate-900 sm:text-5xl"
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            Crafted for every stage of the property journey
          </motion.h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.button
              key={category.key}
              className="glow-border relative overflow-hidden rounded-[28px] border border-white/50 bg-white/80 p-8 text-left shadow-subtle transition-transform duration-500 hover:-translate-y-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d46a32]"
              onClick={() => setActive(category.key)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65, delay: index * 0.08, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/80 to-white/40 transition-all duration-500 group-hover:scale-105" />
              <div className="relative flex h-full flex-col justify-between gap-6">
                <div className="space-y-3">
                  <p className="text-xs font-secondary uppercase tracking-[0.4em] text-slate-400">Category</p>
                  <h3 className="text-2xl font-semibold text-slate-900">{category.label}</h3>
                </div>
                <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-[#d46a32]">
                  Explore
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                  >
                    ➔
                  </motion.span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modalContent ? (
          <motion.div
            className="modal-backdrop fixed inset-0 z-40 flex items-end justify-center px-4 pb-12 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="glass-panel relative w-full max-w-2xl rounded-[32px] p-10"
              initial={{ opacity: 0, y: 80, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-secondary uppercase tracking-[0.4em] text-slate-400">Category</p>
                    <h3 className="mt-2 text-3xl font-semibold text-slate-900">{modalContent.title}</h3>
                  </div>
                  <button
                    onClick={() => setActive(null)}
                    className="rounded-full border border-slate-300/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-500 transition-colors hover:border-[#d46a32]/60 hover:text-[#d46a32]"
                  >
                    Close
                  </button>
                </div>
                <p className="text-base leading-relaxed text-slate-600">{modalContent.excerpt}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {modalContent.highlights.map((highlight) => (
                    <motion.div
                      key={highlight}
                      className="rounded-2xl border border-white/40 bg-white/70 p-4 text-sm text-slate-600 shadow-subtle"
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: [0.19, 1, 0.22, 1] }}
                    >
                      {highlight}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
