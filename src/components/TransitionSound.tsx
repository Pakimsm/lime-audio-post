"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function TransitionSound() {
  const pathname = usePathname();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const unlocked = useRef(false);

  // 🔓 unlock audio after interaction
  useEffect(() => {
    const unlock = () => {
      unlocked.current = true;
      window.removeEventListener("click", unlock);
    };

    window.addEventListener("click", unlock);

    return () => window.removeEventListener("click", unlock);
  }, []);

  // 🔊 play on route change
  useEffect(() => {
    if (!unlocked.current) return;

    if (!audioRef.current) {
      audioRef.current = new Audio("/sounds/transition.mp3");
      audioRef.current.volume = 0.4;
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  }, [pathname]);

  return null;
}