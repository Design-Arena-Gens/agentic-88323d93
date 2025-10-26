"use client";

import { useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

type AnimatedCounterProps = {
  target: number;
  suffix?: string;
};

export function AnimatedCounter({ target, suffix = "" }: AnimatedCounterProps) {
  const spring = useSpring(0, {
    stiffness: 120,
    damping: 16,
    mass: 0.6
  });
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    spring.set(target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  useEffect(() => {
    const handleChange = (value: number) => {
      if (ref.current) {
        ref.current.textContent = `${Math.round(value)}${suffix}`;
      }
    };

    const unsub = spring.on("change", handleChange);
    return () => {
      unsub();
    };
  }, [spring, suffix]);

  useEffect(() => {
    spring.set(target);
  }, [spring, target]);

  return <span ref={ref} className="text-4xl font-semibold text-slate-900" />;
}
