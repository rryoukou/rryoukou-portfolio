"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Glow */}
      <div
        className="pointer-events-none fixed z-40 h-72 w-72 rounded-full opacity-70 blur-3xl transition-all duration-200"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(168,85,247,0.7) 40%, transparent 70%)",
          transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
        }}
      />

      {/* Cursor Ring */}
      <div
        className="pointer-events-none fixed z-50 h-8 w-8 rounded-full border border-purple-400 transition-transform duration-75"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      />
    </>
  );
}