"use client";
import { useState, useEffect, useRef } from "react";
import { Github, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const neuralBtnRef = useRef<HTMLAnchorElement>(null);
  const lastScrollY = useRef(0);

  // Scramble Text Logic for Logo
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  
  const scrambleText = (el: HTMLElement, originalText: string) => {
    let iteration = 0;
    const interval = setInterval(() => {
      el.innerText = originalText
        .split("")
        .map((char, index) => {
          if (index < iteration) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      if (iteration >= originalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  const navItems = [
    { name: "Mission History", link: "#experience" },
    { name: "Shinobi Missions", link: "#work" },
    { name: "Chakra Link", link: "#contact" },
  ];

  useEffect(() => {
    // 1. Smart Scroll Navigation (Stealth Mode)
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background Backdrop Toggle
      if (currentScrollY > 50) setScrolled(true);
      else setScrolled(false);

      // Hide on Scroll Down, Show on Scroll Up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        gsap.to(navRef.current, { y: "-100%", duration: 0.4, ease: "power2.inOut" });
      } else {
        gsap.to(navRef.current, { y: "0%", duration: 0.4, ease: "power2.out" });
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    // 2. Chakra Link Constant Pulse
    if (neuralBtnRef.current) {
        gsap.to(neuralBtnRef.current, {
            boxShadow: "0 0 20px rgba(120, 80, 255, 0.6)",
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 3. Sliding Indicator Logic
  const handleNavHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;
    gsap.to(underlineRef.current, {
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
      duration: 0.5,
      ease: "elastic.out(1, 0.75)",
    });
  };

  const handleNavLeave = () => {
    gsap.to(underlineRef.current, {
      width: 0,
      opacity: 0,
      duration: 0.3,
    });
  };

  // 4. Magnetic Chakra Link Button
  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const icon = target.querySelector(".nav-icon");

    gsap.to(target, {
      x: x * 0.3,
      y: y * 0.3,
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out",
    });

    if (icon) {
        gsap.to(icon, {
            rotate: 360,
            duration: 0.6,
            ease: "power2.inOut"
        });
    }
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const icon = e.currentTarget.querySelector(".nav-icon");
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
    if (icon) {
        gsap.to(icon, { rotate: 0, duration: 0.5 });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-slate-950/80 border-b border-primary/30 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* LOGO - Uchiha Authentication */}
        <div
          ref={logoRef}
          onMouseEnter={() => {
            const h1 = logoRef.current?.querySelector("h1");
            if (h1) scrambleText(h1, "RYOUKOU");
          }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="p-2 rounded-lg bg-primary/10 border border-primary/30 group-hover:bg-primary group-hover:border-primary transition-all">
            <Zap size={20} className="text-primary group-hover:text-white transition-colors" />
          </div>
          <h1 className="font-black text-2xl tracking-tighter text-white uppercase italic w-[120px]">
            RYOUKOU
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 relative">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              onMouseEnter={handleNavHover}
              onMouseLeave={handleNavLeave}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-colors py-2"
            >
              {item.name}
            </a>
          ))}
          
          {/* Sliding Underline */}
          <div 
            ref={underlineRef}
            className="absolute bottom-0 h-[2px] bg-primary opacity-0 pointer-events-none shadow-[0_0_10px_rgba(var(--primary),0.8)]"
          ></div>

          <a
            ref={neuralBtnRef}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            href="#contact"
            className="flex items-center gap-2 px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-white bg-primary hover:bg-primary/90 shadow-lg shadow-indigo-900/20 transition-all relative overflow-hidden"
          >
            <Github size={14} className="nav-icon" />
            Chakra Link
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary p-2 border border-primary/30 rounded-lg"
        >
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${open ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-primary/30 overflow-hidden h-auto py-6">
          <div className="flex flex-col gap-4 px-6">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="w-full py-3 rounded-lg bg-primary text-white text-center text-xs font-black uppercase tracking-widest"
            >
              Chakra Link
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

