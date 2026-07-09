"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e: MouseEvent) => {
      gsap.to(ringRef.current, { x: e.clientX, y: e.clientY, duration: 0.55, ease: "power2.out" });
      gsap.to(dotRef.current,  { x: e.clientX, y: e.clientY, duration: 0.08, ease: "power1.out" });
    };
    const onDown = () => {
      gsap.to(ringRef.current, { scale: 0.75, duration: 0.15 });
      gsap.to(dotRef.current,  { scale: 2.5,  duration: 0.15 });
    };
    const onUp = () => {
      gsap.to(ringRef.current, { scale: 1, duration: 0.3, ease: "elastic.out(1,0.5)" });
      gsap.to(dotRef.current,  { scale: 1, duration: 0.2 });
    };
    const onEnter = () => gsap.to(ringRef.current, { scale: 1.6, borderColor: "rgba(124,58,237,0.5)", duration: 0.3 });
    const onLeave = () => gsap.to(ringRef.current, { scale: 1,   borderColor: "rgba(124,58,237,0.2)", duration: 0.3 });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    document.querySelectorAll("a, button, [role='button']").forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      document.querySelectorAll("a, button, [role='button']").forEach(el => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block" style={{ transform: "translate(-50%,-50%)" }}>
        <div className="w-9 h-9 rounded-full border border-violet-400/20" />
      </div>
      <div ref={dotRef} className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block" style={{ transform: "translate(-50%,-50%)" }}>
        <div className="w-1.5 h-1.5 rounded-full bg-violet-500/70" />
      </div>
    </>
  );
};

export default MouseFollower;
