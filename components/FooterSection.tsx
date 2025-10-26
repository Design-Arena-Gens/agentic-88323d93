"use client";

import { motion } from "framer-motion";
import { footerLinks } from "@/lib/data";

export function FooterSection() {
  return (
    <footer className="relative overflow-hidden bg-[#f0f0f2] py-16">
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/50" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 sm:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            className="flex flex-col gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-semibold text-slate-900">Model Art Studio</h3>
            <p className="text-sm text-slate-500">Immersive real estate visualization for the bold and visionary.</p>
          </motion.div>
          <motion.div
            className="relative h-20 w-20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="absolute inset-0 rounded-[18px] border border-[#d46a32]/50 bg-white/80 shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateX: [0, 15, 0, -15, 0], rotateY: [0, -15, 0, 15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.span
                className="absolute inset-4 rounded-[12px] border border-dashed border-[#d46a32]/40"
                animate={{ rotateZ: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-xs font-secondary uppercase tracking-[0.35em] text-[#d46a32]">
                MA
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {footerLinks.map((column, index) => (
            <motion.div
              key={column.title}
              className="flex flex-col gap-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <h4 className="text-sm font-secondary uppercase tracking-[0.35em] text-slate-500">{column.title}</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group relative inline-flex items-center gap-2 text-slate-600 transition hover:text-[#d46a32]"
                    >
                      <span className="absolute inset-x-0 bottom-0 h-[1px] origin-left scale-x-0 bg-[#d46a32]/60 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                      <span className="relative">{link}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/50 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Model Art Studio. Crafted with precision.</p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-[#d46a32]">
              Privacy
            </a>
            <a href="#" className="transition hover:text-[#d46a32]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
