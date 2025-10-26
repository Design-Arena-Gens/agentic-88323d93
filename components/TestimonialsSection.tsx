"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/lib/data";

export function TestimonialsSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const duplicated = useMemo(() => [...testimonials, ...testimonials], []);
  const activeTestimonial = testimonials.find((testimonial) => testimonial.id === activeId) ?? null;

  return (
    <section className="relative bg-[#f5f5f5] py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-x-16 top-0 h-[420px] rounded-[48px] bg-white/70 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-12">
        <div className="flex flex-col gap-4">
          <motion.span
            className="inline-flex items-center gap-3 text-sm font-secondary uppercase tracking-[0.35em] text-slate-500"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-px w-12 bg-slate-400/60" />
            Testimonials
          </motion.span>
          <motion.h2
            className="max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Trusted by developers shaping tomorrow&apos;s skylines
          </motion.h2>
        </div>

        <div className="overflow-hidden rounded-[32px] border border-white/60 bg-white/80 py-8 shadow-subtle">
          <div className="relative flex h-24 items-center overflow-hidden">
            <div className="infinite-carousel gap-12 px-8">
              {duplicated.map((item, index) => (
                <motion.button
                  key={`${item.id}-${index}`}
                  className="group relative flex h-16 w-40 items-center justify-center rounded-2xl border border-transparent bg-white/60 px-4 shadow-[0_15px_45px_rgba(15,23,42,0.08)] transition hover:border-[#d46a32]/40"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveId(item.id)}
                >
                  <Image src={item.logo} alt={`${item.client} logo`} width={120} height={40} className="opacity-60 transition group-hover:opacity-100" />
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {activeTestimonial ? (
          <motion.div
            className="modal-backdrop fixed inset-0 z-40 flex items-end justify-center px-4 pb-12 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveId(null)}
          >
            <motion.div
              className="glass-panel relative w-full max-w-3xl rounded-[32px] p-10"
              initial={{ opacity: 0, y: 80, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-secondary uppercase tracking-[0.35em] text-slate-400">{activeTestimonial.client}</p>
                    <h3 className="mt-2 text-3xl font-semibold text-slate-900">{activeTestimonial.project}</h3>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{activeTestimonial.role}</p>
                  </div>
                  <button
                    onClick={() => setActiveId(null)}
                    className="rounded-full border border-slate-300/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-500 transition hover:border-[#d46a32]/60 hover:text-[#d46a32]"
                  >
                    Close
                  </button>
                </div>
                <motion.blockquote
                  className="text-lg leading-relaxed text-slate-600"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  “{activeTestimonial.quote}”
                </motion.blockquote>
                <motion.div className="grid gap-4 sm:grid-cols-2" layout>
                  {activeTestimonial.visuals.map((visual, index) => (
                    <motion.div
                      key={visual}
                      className="relative h-48 overflow-hidden rounded-[24px] border border-white/40 bg-white/70"
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.45, delay: 0.08 * index, ease: [0.19, 1, 0.22, 1] }}
                    >
                      <Image src={visual} alt={`${activeTestimonial.project} visual ${index + 1}`} fill className="object-cover" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
