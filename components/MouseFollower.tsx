"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(ringRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <>
      {/* Outer HUD Ring - Sasuke Purple */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-12 h-12 border border-primary/30 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-primary"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-2 bg-primary"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-primary"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] w-2 bg-primary"></div>
      </div>

      {/* Inner Blue Core - Chidori Effect */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-2 h-2 bg-indigo-400 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 hidden md:block shadow-[0_0_10px_#818cf8]"
      />
    </>
  );
};

export default MouseFollower;
