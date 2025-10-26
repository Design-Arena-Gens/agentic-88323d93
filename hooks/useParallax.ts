"use client";

import { MutableRefObject, useCallback } from "react";
import { useSpring } from "framer-motion";

type Options = {
  intensity?: number;
  rotation?: number;
};

export function useParallax<T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  { intensity = 25, rotation = 8 }: Options = {}
) {
  const translateX = useSpring(0, { stiffness: 150, damping: 20, mass: 0.4 });
  const translateY = useSpring(0, { stiffness: 150, damping: 20, mass: 0.4 });
  const rotateX = useSpring(0, { stiffness: 120, damping: 16, mass: 0.4 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 16, mass: 0.4 });

  const handleMouseMove = useCallback(
    (event: React.MouseEvent) => {
      if (!ref.current) return;
      const bounds = ref.current.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const factorX = (event.clientX - centerX) / (bounds.width / 2);
      const factorY = (event.clientY - centerY) / (bounds.height / 2);

      translateX.set(factorX * intensity);
      translateY.set(factorY * intensity);
      rotateY.set(factorX * rotation);
      rotateX.set(-factorY * rotation);
    },
    [intensity, ref, rotateX, rotateY, rotation, translateX, translateY]
  );

  const reset = useCallback(() => {
    translateX.set(0);
    translateY.set(0);
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY, translateX, translateY]);

  return {
    translateX,
    translateY,
    rotateX,
    rotateY,
    handleMouseMove,
    reset
  };
}
