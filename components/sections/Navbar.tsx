"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import ShinyText from "@/components/reactbits/ShinyText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

const navItems = [
  { name: "Journey", link: "#experience", id: "experience" },
  { name: "Work",    link: "#work",        id: "work"       },
  { name: "Contact", link: "#contact",     id: "contact"    },
];

const Navbar = () => {
  const [open,     setOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState("");
  const [mounted,  setMounted]  = useState(false);
  const navRef      = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      if (y > lastScrollY.current + 4 && y > 80)
        gsap.to(navRef.current, { y: "-100%", duration: 0.45, ease: "power3.inOut" });
      else if (y < lastScrollY.current - 4)
        gsap.to(navRef.current, { y: "0%", duration: 0.35, ease: "power2.out" });
      lastScrollY.current = y;
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-2xl bg-white/85 border-b border-slate-200/70 shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">

        {/* Logo */}
        <AnimatedContent distance={16} direction="horizontal" reverse duration={0.6} delay={0}>
          <a href="#" className="group flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-sm border border-violet-200 bg-white group-hover:border-violet-400 transition-all duration-300 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-violet-200/60 group-hover:shadow-md">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-white" />
              {mounted ? (
                <ShinyText
                  text="RY"
                  color="#5b21b6"
                  shineColor="#a78bfa"
                  speed={3}
                  className="relative text-[11px] font-black tracking-widest"
                />
              ) : (
                <span className="relative text-violet-700 text-[11px] font-black tracking-widest">RY</span>
              )}
            </div>
            <div className="hidden sm:block">
              <p className="text-slate-800 font-bold text-sm leading-none tracking-tight group-hover:text-violet-700 transition-colors duration-300">
                Ryoukou
              </p>
              <p className="text-slate-400 text-[9px] uppercase tracking-[0.18em] mt-0.5">Fullstack Developer</p>
            </div>
          </a>
        </AnimatedContent>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0">
          {navItems.map((item, i) => (
            <AnimatedContent
              key={item.name}
              distance={12}
              direction="vertical"
              delay={0.1 + i * 0.08}
              duration={0.5}
            >
              <a
                href={item.link}
                className={`relative flex items-center gap-2 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                  active === item.id ? "text-violet-700" : "text-slate-400 hover:text-slate-800"
                }`}
              >
                <span className={`text-[8px] font-black tabular-nums transition-colors duration-200 ${active === item.id ? "text-violet-400" : "text-slate-300"}`}>
                  0{i + 1}
                </span>
                {item.name}
                {/* Active indicator dot */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-500 transition-all duration-300 ${
                  active === item.id ? "opacity-100 scale-100" : "opacity-0 scale-0"
                }`} />
              </a>
            </AnimatedContent>
          ))}

          <div className="ml-4 h-5 w-px bg-slate-200" />

          <AnimatedContent distance={12} direction="horizontal" delay={0.35} duration={0.5}>
            <a
              href="#contact"
              className="ml-4 group relative inline-flex items-center px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white bg-violet-700 hover:bg-violet-800 transition-all duration-300 rounded-sm shadow-md shadow-violet-200 overflow-hidden"
            >
              {/* Shimmer sweep on hover */}
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
              <span className="relative">Hire Me</span>
            </a>
          </AnimatedContent>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 flex items-center justify-center border border-slate-200 text-slate-500 hover:text-slate-800 hover:border-violet-300 hover:bg-violet-50 transition-all duration-300 rounded-sm"
        >
          {open ? <X size={15} /> : <Menu size={15} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-8 py-6 border-t border-slate-100 bg-white/96 backdrop-blur-2xl space-y-1">
          {navItems.map((item, i) => (
            <a
              key={item.name}
              href={item.link}
              onClick={() => setOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 rounded-sm ${
                active === item.id ? "text-violet-700 bg-violet-50" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <span className="text-[9px] font-black text-slate-300 tabular-nums">0{i + 1}</span>
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-3 px-4 py-3 text-sm text-center font-bold uppercase tracking-widest text-white bg-violet-700 hover:bg-violet-800 rounded-sm transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
