"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    window.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll("a, button");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      {/* DOT */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />

      {/* RING */}
<div
  className={`fixed top-0 left-0 border rounded-full pointer-events-none z-[9998]
  transition-all duration-200 animate-pulse ${
    hover
      ? "w-16 h-16 border-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.6)]"
      : "w-8 h-8 border-white/50"
  }`}
  style={{
    transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
    transition: "transform 0.075s linear",
  }}
      />
    </>
  );
}