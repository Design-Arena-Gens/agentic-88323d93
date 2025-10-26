"use client";

import { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { miniatureSlides } from "@/lib/data";

export function MiniatureCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    duration: 18
  });

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    onSelect();

    const autoplay = () => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    };

    const id = setInterval(autoplay, 5200);
    return () => {
      clearInterval(id);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const connections = useMemo(() => {
    const count = miniatureSlides.length;
    const path: string[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const radius = 38;
      const x = 50 + radius * Math.cos(angle);
      const y = 50 + radius * Math.sin(angle);
      path.push(`${x},${y}`);
    }
    return path.join(" ");
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f7f7f8] py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-x-16 top-0 h-full rounded-[48px] bg-white/60 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 sm:px-12">
        <div className="flex flex-col items-start gap-4">
          <motion.span
            className="inline-flex items-center gap-3 text-sm font-secondary uppercase tracking-[0.35em] text-slate-500"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-px w-12 bg-slate-400/60" />
            Signature Miniatures
          </motion.span>
          <motion.h2
            className="max-w-2xl text-4xl font-semibold text-slate-900 sm:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            A kinetic gallery of precision-crafted architectural miniatures
          </motion.h2>
        </div>

        <div className="relative flex flex-col gap-12">
          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-64 w-64 -translate-x-1/2 -translate-y-1/2 md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <svg viewBox="0 0 100 100" className="h-full w-full">
              <motion.polyline
                points={connections}
                fill="none"
                stroke="#d46a32"
                strokeWidth={0.35}
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 1.8, delay: 0.4, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          <div className="relative">
            <div className="parallax-container">
              <div className="overflow-visible" ref={emblaRef}>
                <div className="flex">
                  {miniatureSlides.map((slide, index) => {
                    const isActive = index === selectedIndex;
                    return (
                      <motion.div
                        key={slide.id}
                        className="relative min-w-[280px] shrink-0 rounded-[32px] px-3 sm:min-w-[340px] sm:px-4"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <motion.div
                          className="tilt-card group relative h-[360px] overflow-hidden rounded-[32px] border border-white/50 bg-white/80 shadow-subtle"
                          whileHover={{ rotateX: -6, rotateY: 6, z: 20 }}
                          transition={{ type: "spring", stiffness: 120, damping: 12 }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-[#f5efe9]"
                            animate={{ opacity: isActive ? 0.85 : 0.6 }}
                            transition={{ duration: 0.6 }}
                          />
                          <motion.div
                            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                            style={{ background: "radial-gradient(circle at 70% 15%, rgba(212,106,50,0.45), transparent 60%)" }}
                          />
                          <div className="relative flex h-full flex-col items-center justify-center gap-8 p-10 text-center">
                            <motion.div
                              className="relative h-44 w-full"
                              animate={{ rotate: isActive ? [0, -2, 2, 0] : 0, scale: isActive ? 1.02 : 1 }}
                              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <Image
                                src={slide.image}
                                alt={slide.title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 280px, 400px"
                              />
                            </motion.div>
                            <div className="space-y-2">
                              <p className="text-xs font-secondary uppercase tracking-[0.4em] text-slate-400">{slide.subtitle}</p>
                              <h3 className="text-2xl font-semibold text-slate-900">{slide.title}</h3>
                            </div>
                          </div>
                          <AnimatePresence>
                            {isActive ? (
                              <motion.div
                                className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/30 bg-white/50 p-4 text-sm text-slate-600 backdrop-blur-xl"
                                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                              >
                                {slide.overlay}
                              </motion.div>
                            ) : null}
                          </AnimatePresence>
                        </motion.div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-between px-10 md:flex">
              <motion.div
                className="h-24 w-24 rounded-full border border-accent/40"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
              <motion.div
                className="h-24 w-24 rounded-full border border-accent/40"
                animate={{ opacity: [0.6, 0.3, 0.6] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </div>

          <div className="mx-auto flex gap-3">
            {miniatureSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 w-8 rounded-full transition-colors ${index === selectedIndex ? "bg-[#d46a32]" : "bg-slate-300"}`}
                aria-label={`Go to miniature ${slide.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
