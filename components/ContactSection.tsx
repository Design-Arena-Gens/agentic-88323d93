"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f8] py-28">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 wireframe-background"
          style={{ backgroundImage: "var(--wireframe-gradient)" }}
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 0.25, scale: 1 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/90" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:px-12">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-3 text-sm font-secondary uppercase tracking-[0.35em] text-slate-500">
            <span className="h-px w-12 bg-slate-400/60" />
            Contact
          </span>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Share your vision with us, and we&apos;ll turn it into an experience.
          </h2>
        </motion.div>

        <motion.form
          className="glass-panel relative grid gap-6 rounded-[32px] p-10"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Company" placeholder="Organisation" />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field label="Email" placeholder="hello@studio.com" type="email" />
            <Field label="Project Location" placeholder="City / Region" />
          </div>
          <div>
            <Field label="Timeline" placeholder="Quarter & year" />
          </div>
          <div>
            <Field label="Project Vision" placeholder="Share details about the experience you envision" area />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <span className="inline-flex h-3 w-3 animate-pulse rounded-full bg-[#d46a32] shadow-[0_0_15px_rgba(212,106,50,0.8)]" />
              Expect a curated response within 48 hours.
            </div>
            <motion.button
              type="button"
              className="pulse inline-flex items-center gap-3 rounded-full bg-[#d46a32] px-8 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-[0_20px_60px_rgba(212,106,50,0.35)] transition hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d46a32]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit
              <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                ➔
              </motion.span>
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  placeholder: string;
  type?: string;
  area?: boolean;
};

function Field({ label, placeholder, type = "text", area = false }: FieldProps) {
  const baseClasses =
    "w-full rounded-2xl border border-white/50 bg-white/70 px-5 py-4 text-sm text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-[box-shadow,transform] focus:border-[#d46a32]/70 focus:outline-none focus:ring-0 focus-visible:ring-0";

  return (
    <label className="group flex flex-col gap-2">
      <span className="text-xs font-secondary uppercase tracking-[0.35em] text-slate-400">{label}</span>
      {area ? (
        <motion.textarea
          rows={5}
          className={`${baseClasses} resize-none`}
          placeholder={placeholder}
          whileFocus={{ scale: 1.01 }}
        />
      ) : (
        <motion.input
          type={type}
          placeholder={placeholder}
          className={baseClasses}
          whileFocus={{ scale: 1.01 }}
        />
      )}
    </label>
  );
}
