"use client";
import { useEffect, useRef } from "react";
import { Heart, Zap } from "lucide-react";
import gsap from "gsap";

const Footer = () => {
  const heartRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Uchiha Seal Pulse Animation
    if (heartRef.current) {
      gsap.to(heartRef.current, {
        scale: 1.3,
        opacity: 0.8,
        filter: "drop-shadow(0 0 8px rgba(120, 80, 255, 0.8))",
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  const handleLinkEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      y: -2,
      color: "var(--primary)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleLinkLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      color: "#64748b", // text-slate-500
      duration: 0.3,
      ease: "power2.in"
    });
  };

  return (
    <footer className="relative py-16 px-6 bg-slate-950 overflow-hidden">
      {/* 3. Tech Separator Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rotate-45 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded bg-primary/10 border border-primary/20">
            <Zap size={18} className="text-primary" />
          </div>
          <h3 className="text-xl font-black bg-gradient-to-r from-indigo-500 to-primary bg-clip-text text-transparent italic uppercase tracking-tighter">
            ryoukou
          </h3>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-1 text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
            <span>© 2026 Uchiha Clan // Created with</span>
            <div ref={heartRef} className="mx-1">
              <Heart size={12} className="text-primary fill-primary" />
            </div>
            <span>by rryoukou</span>
          </div>
          
          {/* 2. System Status Indicator */}
          <div className="flex items-center gap-2 text-[8px] font-bold tracking-[0.3em]">
            <span className="text-slate-600">STATUS:</span>
            <span className="text-primary animate-pulse">SHARINGAN ACTIVE</span>
            <span className="text-slate-600">//</span>
            <span className="text-primary">CHAKRA LINK SECURE</span>
          </div>
        </div>

        {/* 4. Nav Hover Micro-interactions */}
        <div ref={linksRef} className="flex gap-8">
          {[
            { name: "History", link: "#experience" },
            { name: "Shinobi Missions", link: "#work" },
            { name: "Chakra Link", link: "#contact" },
          ].map((item) => (
            <a 
              key={item.name}
              href={item.link} 
              onMouseEnter={handleLinkEnter}
              onMouseLeave={handleLinkLeave}
              className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] transition-none"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Background Chakra Decorative Element */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-primary/5 rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-16 -right-16 w-40 h-40 border border-primary/5 rounded-full pointer-events-none"></div>
    </footer>
  );
};

export default Footer;

