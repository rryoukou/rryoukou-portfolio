"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${pos.current.x - 200}px, ${pos.current.y - 200}px)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${mouse.current.x - 16}px, ${mouse.current.y - 16}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed z-40 h-[400px] w-[400px] rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.7) 0%, rgba(168,85,247,0.6) 40%, transparent 70%)",
        }}
      />

      {/* Cursor Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed z-50 h-8 w-8 rounded-full border border-purple-400 transition-transform duration-75"
      />
    </>
  );
}