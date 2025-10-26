"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { heroFeatures } from "@/lib/data";
import { useParallax } from "@/hooks/useParallax";

function LogoTrace() {
  return (
    <svg
      viewBox="0 0 360 120"
      className="w-full max-w-[320px]"
      fill="none"
      strokeWidth={1.8}
    >
      <motion.path
        d="M25 90 L25 30 L65 90 L65 30"
        stroke="#d46a32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      <motion.path
        d="M90 90 C110 40 140 40 160 90"
        stroke="#0f172a"
        strokeLinecap="round"
        strokeDasharray="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.path
        d="M195 90 L195 30 L235 30"
        stroke="#0f172a"
        strokeLinecap="round"
        strokeDasharray="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 0.7 }}
      />
      <motion.path
        d="M270 90 L270 30 L320 30 L320 60 L270 60"
        stroke="#d46a32"
        strokeLinecap="round"
        strokeDasharray="1"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeInOut", delay: 1 }}
      />
    </svg>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const parallax = useParallax(heroRef, { intensity: 40, rotation: 10 });

  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#f7f7f8]">
      <div className="absolute inset-0">
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,106,50,0.35),transparent_45%),linear-gradient(135deg,rgba(15,23,42,0.82),rgba(15,23,42,0.4))]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.85 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0 bg-[url('/images/hero-grid.svg')] opacity-20 mix-blend-soft-light"
          initial={{ opacity: 0, scale: 1.12 }}
          animate={{ opacity: 0.32, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <div className="parallax-container relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-32 sm:px-12 md:flex-row md:items-center">
        <motion.div
          ref={heroRef}
          onMouseMove={parallax.handleMouseMove}
          onMouseLeave={parallax.reset}
          className="relative flex flex-1 flex-col gap-12 text-white"
        >
          <motion.div
            style={{
              rotateX: parallax.rotateX,
              rotateY: parallax.rotateY,
              translateX: parallax.translateX,
              translateY: parallax.translateY
            }}
            className="tilt-card relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-12 shadow-[0_40px_120px_rgba(15,23,42,0.35)] backdrop-blur-[22px]"
            initial={{
              opacity: 0,
              y: 64,
              rotateX: -8
            }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
            <div className="relative flex flex-col gap-10">
              <div className="max-w-sm">
                <LogoTrace />
              </div>
              <motion.h1
                className="text-5xl font-semibold leading-tight text-white/95 sm:text-6xl"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  Cinematic Real Estate Narratives
                </motion.span>
              </motion.h1>

              <div className="space-y-6 text-lg text-white/75">
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                >
                  Model Art crafts immersive worlds that sell visionary developments before they exist—where every light,
                  material, and movement is orchestrated to move audiences.
                </motion.p>
                <motion.ul
                  className="grid gap-3 text-sm font-secondary uppercase tracking-[0.2em]"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.62, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {heroFeatures.map((feature, index) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-3 text-white/65"
                      initial={{ opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.72 + index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <span className="h-[1px] w-14 bg-white/40" />
                      {feature}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.div
                className="flex flex-wrap items-center gap-5"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              >
                <button className="relative inline-flex items-center gap-4 rounded-full border border-white/20 bg-white/10 px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white/90 shadow-[0_0_30px_rgba(212,106,50,0.55)] transition-all duration-500 hover:bg-white/25 hover:shadow-[0_0_40px_rgba(212,106,50,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Enter Portfolio
                  <span className="h-2 w-2 rounded-full bg-[#d46a32] shadow-[0_0_18px_rgba(212,106,50,0.9)]" />
                </button>
                <div className="flex items-center gap-3 text-sm text-white/60">
                  <div className="h-10 w-10 rounded-full border border-white/20 bg-[#d46a32]/20" />
                  <p className="max-w-[180px] leading-snug">
                    Drag the scene & feel the depth of our layered storytelling.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <div className="relative flex flex-1 items-center justify-center">
          <motion.div
            className="relative aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[40px] border border-white/30 bg-white/10 shadow-[0_25px_70px_rgba(15,23,42,0.25)]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
          >
            <motion.img
              src="/images/hero-render.svg"
              alt="Model Art architectural visualization"
              className="h-full w-full object-cover"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-[#d46a32]/15"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute right-6 top-6 rounded-2xl border border-white/20 bg-white/15 px-4 py-3 text-right text-xs uppercase tracking-[0.4em] text-white/80"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>MODEL ART</p>
              <p>STUDIO</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.7 }}
      >
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-white/50">
          <span className="h-px w-16 bg-white/40" />
          Scroll to explore
          <span className="h-px w-16 bg-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
