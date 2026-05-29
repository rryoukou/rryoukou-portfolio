"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Volume2, VolumeX } from "lucide-react";

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import BentoGrid from "@/components/sections/BentoGrid";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CursorGlow from "@/components/CursorGlow";
import MouseFollower from "@/components/MouseFollower";

export default function Home() {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    const playClickSound = () => {
      if (!isMuted) {
        const audio = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
        audio.volume = 0.2;
        audio.play().catch(() => {});
      }
    };

    window.addEventListener("mousedown", playClickSound);
    return () => window.removeEventListener("mousedown", playClickSound);
  }, [isMuted]);

  return (
    <main className="relative bg-slate-950 min-h-screen selection:bg-primary/30 selection:text-primary">
      <MouseFollower />
      
      <Navbar />
      
      <Hero />
      <Experience />
      <BentoGrid />
      <Contact />
      <Footer />

      {/* Sound Toggle FAB */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-6 left-6 z-[100] p-3 rounded-full bg-slate-900 border border-primary/30 text-primary shadow-[0_0_15px_rgba(var(--primary),0.2)] hover:scale-110 transition-all group"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} className="animate-pulse" />}
        <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1 bg-slate-900 border border-primary/20 text-[8px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-lg pointer-events-none">
          {isMuted ? "Enable Neural Audio" : "Neural Link Active"}
        </span>
      </button>
    </main>
  );
}
