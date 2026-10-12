"use client";

import { useSyncExternalStore } from "react";

const subscribeResize = (cb: () => void) => {
  window.addEventListener("resize", cb);
  return () => window.removeEventListener("resize", cb);
};

/** window.innerWidth, with a desktop fallback during SSR. */
export function useViewportWidth(serverWidth = 1400) {
  return useSyncExternalStore(subscribeResize, () => window.innerWidth, () => serverWidth);
}

const REDUCED = "(prefers-reduced-motion: reduce)";

export function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(REDUCED);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(REDUCED).matches,
    () => false,
  );
}
