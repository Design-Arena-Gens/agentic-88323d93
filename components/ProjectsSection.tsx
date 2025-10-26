"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { projects, type Project } from "@/lib/data";

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const [active, setActive] = useState<Project | null>(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new ResizeObserver(() => {
      const scrollWidth = node.scrollWidth;
      const width = node.clientWidth;
      const maxDrag = Math.max(0, scrollWidth - width);
      setConstraints({ left: -maxDrag, right: 0 });
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const gradients = useMemo(
    () => [
      "linear-gradient(135deg, rgba(212,106,50,0.15), transparent 60%)",
      "linear-gradient(135deg, rgba(15,23,42,0.12), transparent 55%)"
    ],
    []
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f7f7f8] to-white py-28">
      <div className="absolute inset-0">
        <div className="absolute right-[-20%] top-0 h-[560px] w-[560px] rounded-full bg-[#d46a32]/18 blur-[220px]" />
        <div className="absolute bottom-[-30%] left-[-10%] h-[480px] w-[480px] rounded-full bg-slate-200/80 blur-[180px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 sm:px-12">
        <div className="flex flex-col gap-4">
          <motion.span
            className="inline-flex items-center gap-3 text-sm font-secondary uppercase tracking-[0.35em] text-slate-500"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65 }}
          >
            <span className="h-px w-12 bg-slate-400/60" />
            Projects
          </motion.span>
          <motion.h2
            className="max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Drag through immersive worlds crafted for our vision-forward partners
          </motion.h2>
        </div>

        <div className="relative">
          <motion.div
            ref={containerRef}
            className="flex cursor-grab gap-8 overflow-hidden"
            drag="x"
            dragConstraints={constraints}
            whileTap={{ cursor: "grabbing" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="relative min-w-[320px] shrink-0 rounded-[32px] border border-white/50 bg-white/80 p-2 shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.button
                  onClick={() => setActive(project)}
                  className="group relative flex h-[420px] w-full flex-col overflow-hidden rounded-[28px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                >
                  <div className="relative h-1/2 overflow-hidden">
                    <Image
                      src={project.cover}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 320px, 420px"
                    />
                    <motion.div
                      className="absolute inset-0"
                      style={{ background: gradients[index % gradients.length] }}
                      animate={{ opacity: [0.5, 0.7, 0.5] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="relative flex flex-1 flex-col gap-4 bg-white/80 p-8 text-left">
                    <div className="flex items-center justify-between text-xs font-secondary uppercase tracking-[0.35em] text-slate-400">
                      <span>{project.location}</span>
                      <span>View</span>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900">{project.name}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
                    <div className="mt-auto flex gap-2">
                      {project.palette.map((color) => (
                        <span key={color} className="h-6 w-6 rounded-full border border-white/70" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            className="modal-backdrop fixed inset-0 z-40 flex items-center justify-center px-4 py-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="glass-panel relative flex w-full max-w-5xl flex-col gap-8 overflow-hidden rounded-[36px] p-10"
              initial={{ opacity: 0, scale: 0.9, y: 60 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <p className="text-xs font-secondary uppercase tracking-[0.35em] text-slate-400">Project</p>
                  <h3 className="text-3xl font-semibold text-slate-900">{active.name}</h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-[#d46a32]">{active.location}</p>
                </div>
                <button
                  onClick={() => setActive(null)}
                  className="rounded-full border border-slate-300/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-500 transition hover:border-[#d46a32]/60 hover:text-[#d46a32]"
                >
                  Close
                </button>
              </div>
              <p className="max-w-3xl text-base leading-relaxed text-slate-600">{active.description}</p>

              <motion.div className="grid gap-4 sm:grid-cols-2" layout>
                {active.gallery.map((image, index) => (
                  <motion.div
                    key={image}
                    className="relative h-56 overflow-hidden rounded-[28px] border border-white/40 bg-white/60"
                    initial={{ opacity: 0, y: 24, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Image src={image} alt={`${active.name} detail ${index + 1}`} fill className="object-cover" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
