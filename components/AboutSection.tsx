"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { counters } from "@/lib/data";

export function AboutSection() {
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: mediaRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const textRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(textRef, { once: true, margin: "-120px" });

  return (
    <section className="relative bg-[#f7f7f8] py-28">
      <div className="absolute inset-0">
        <div className="absolute right-12 top-10 h-32 w-32 rounded-full bg-[#d46a32]/20 blur-2xl" />
        <div className="absolute bottom-20 left-20 h-40 w-40 rounded-full bg-[#d46a32]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 sm:px-12 md:flex-row md:items-center">
        <div className="md:w-1/2">
          <motion.div
            ref={mediaRef}
            style={{ y }}
            className="relative overflow-hidden rounded-[36px] border border-white/40 bg-white/70 p-2 shadow-subtle"
          >
            <div className="overflow-hidden rounded-[32px]">
              <motion.div
                className="relative h-[420px] w-full"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src="/images/about-studio.svg" alt="Model Art Studio" fill className="object-cover" />
              </motion.div>
            </div>
            <motion.div
              className="absolute left-6 top-6 rounded-2xl bg-white/80 px-5 py-3 text-xs font-secondary uppercase tracking-[0.35em] text-slate-500"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Since 2011
            </motion.div>
          </motion.div>
        </div>

        <div ref={textRef} className="flex flex-col gap-10 md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            className="space-y-5"
          >
            <span className="inline-flex items-center gap-3 text-sm font-secondary uppercase tracking-[0.35em] text-slate-500">
              <span className="h-px w-10 bg-slate-400/60" />
              About Model Art
            </span>
            <h3 className="text-4xl font-semibold text-slate-900 sm:text-[2.75rem]">
              We choreograph architecture into cinematic moments that buyers feel, not just see.
            </h3>
            <p className="text-lg leading-relaxed text-slate-600">
              From hyper-real renders to fully interactive sales suites, our studio unites architects, filmmakers, and technologists
              to build desire at every touchpoint. Each project is a bespoke sensory journey, designed to communicate value through
              narrative depth and technical mastery.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Our team operates globally, partnering with visionary developers to translate ambition into emotive, data-informed
              experiences. The result: immersive stories that accelerate investments and ignite imagination.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {counters.map((counter, index) => (
              <motion.div
                key={counter.label}
                className="rounded-3xl border border-white/40 bg-white/70 p-6 shadow-subtle backdrop-blur-xl"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.19, 1, 0.22, 1] }}
              >
                <AnimatedCounter target={inView ? counter.value : 0} suffix={counter.suffix} />
                <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500">{counter.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
