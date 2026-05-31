"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, ShieldCheck } from "lucide-react";
import gsap from "gsap";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLSpanElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const magneticBtnsRef = useRef<(HTMLDivElement | null)[]>([]);

  // 1. Stark Decryption Effect
  const scrambleText = (el: HTMLElement, newText: string) => {
    const chars = "!<>-_\\/[]{}—=+*^?#________";
    let frame = 0;
    const duration = 50; 
    
    const animate = () => {
      let output = "";
      let complete = 0;
      for (let i = 0; i < newText.length; i++) {
        const char = newText[i];
        const delay = (i / newText.length) * duration;
        if (frame >= delay) {
          output += char;
          complete++;
        } else {
          output += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      el.innerText = output;
      if (complete < newText.length) {
        frame++;
        requestAnimationFrame(animate);
      }
    };
    animate();
  };

  useEffect(() => {
    if (!heroRef.current) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      // 1. Stark Decryption Effect
      if (titleRef.current) {
        scrambleText(titleRef.current, "The Friendly Neighborhood Developer");
      }

      // 2. Dynamic GSAP Typewriter Loop
      const subPhrases = ["Fullstack Developer", "Next.js Specialist", "Laravel Artisan", "Friendly Neighborhood Coder"];
      let currentPhraseIndex = 0;
      let charIndex = 0;
      let isTyping = true;
      
      const updateTypewriter = () => {
        if (!subTitleRef.current) return;
        
        const phrase = subPhrases[currentPhraseIndex];
        
        if (isTyping) {
          subTitleRef.current.innerText = phrase.substring(0, charIndex);
          if (charIndex < phrase.length) {
            charIndex++;
            gsap.delayedCall(0.07, updateTypewriter);
          } else {
            isTyping = false;
            gsap.delayedCall(2, updateTypewriter);
          }
        } else {
          subTitleRef.current.innerText = phrase.substring(0, charIndex);
          if (charIndex > 0) {
            charIndex--;
            gsap.delayedCall(0.04, updateTypewriter);
          } else {
            isTyping = true;
            currentPhraseIndex = (currentPhraseIndex + 1) % subPhrases.length;
            gsap.delayedCall(0.5, updateTypewriter);
          }
        }
      };

      updateTypewriter();

      // 3. Parallax & Magnetic for Desktop Only
      mm.add("(min-width: 1024px)", () => {
        const onMouseMove = (e: MouseEvent) => {
          if (!heroRef.current) return;
          
          const { clientX, clientY } = e;
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;

          // Subtle Parallax
          if (parallaxBgRef.current) {
            gsap.to(parallaxBgRef.current, {
              x: (clientX - centerX) * 0.05,
              y: (clientY - centerY) * 0.05,
              duration: 1.5,
              ease: "power2.out"
            });
          }

          if (avatarRef.current) {
            gsap.to(avatarRef.current, {
              x: (clientX - centerX) * -0.03,
              y: (clientY - centerY) * -0.03,
              duration: 1.5,
              ease: "power2.out"
            });
          }

          // Magnetic Buttons
          magneticBtnsRef.current.forEach((btn) => {
            if (!btn) return;
            try {
              const rect = btn.getBoundingClientRect();
              const btnCenterX = rect.left + rect.width / 2;
              const btnCenterY = rect.top + rect.height / 2;
              const dist = Math.hypot(clientX - btnCenterX, clientY - btnCenterY);

              if (dist < 100) {
                gsap.to(btn, {
                  x: (clientX - btnCenterX) * 0.4,
                  y: (clientY - btnCenterY) * 0.4,
                  scale: 1.05,
                  duration: 0.5,
                  ease: "power2.out"
                });
              } else {
                gsap.to(btn, { x: 0, y: 0, scale: 1, duration: 0.5, ease: "power2.out" });
              }
            } catch (err) {
              console.error("Error in magnetic button animation:", err);
            }
          });
        };

        window.addEventListener("mousemove", onMouseMove);
        return () => window.removeEventListener("mousemove", onMouseMove);
      });
    }, heroRef.current);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 overflow-hidden bg-slate-950">
      {/* Background HUD Layer */}
      <div ref={parallaxBgRef} className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-slate-800/20 blur-[100px] rounded-full"></div>
        <div className="absolute inset-0 bg-[radial-gradient(var(--primary)_0.5px,transparent_0.5px)] [background-size:32px_32px] opacity-[0.04]"></div>
      </div>

      {/* Avatar with Counter-Parallax */}
      <div ref={avatarRef} className="relative mb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, type: "spring" }}
          className="relative"
        >
          <div className="absolute inset-0 bg-primary blur-3xl opacity-20 animate-pulse"></div>
          <Avatar className="w-32 h-32 md:w-44 md:h-44 border-2 border-primary/50 shadow-[0_0_30px_rgba(var(--primary),0.3)]">
            <AvatarImage src="/Profile.jpg" alt="Profile" className="object-cover" />
            <AvatarFallback className="bg-slate-900 text-white text-2xl font-bold">RY</AvatarFallback>
          </Avatar>
        </motion.div>
      </div>

      {/* Main Content */}
      <h1 ref={titleRef} className="text-4xl md:text-7xl font-black tracking-tighter mb-4 text-white uppercase italic">
        The Friendly Neighborhood Developer
      </h1>

      <div className="h-10 mb-6">
        <span className="text-slate-400 text-lg md:text-2xl font-light font-mono tracking-widest flex items-center justify-center gap-2">
          {">"}<span ref={subTitleRef} className="text-primary font-bold"></span><span className="w-2 h-6 bg-primary animate-blink"></span>
        </span>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="max-w-xl text-slate-500 text-sm md:text-base leading-relaxed mb-10"
      >
        Solving complex problems with Stark-Tech precision. Specialized in 
        <span className="text-primary mx-1 font-bold">Next.js</span>, 
        <span className="text-primary mx-1 font-bold">Laravel</span>, and high-performance neural web slingers.
      </motion.p>

      {/* Action Buttons - Magnetic */}
      <div className="flex flex-wrap gap-6 justify-center">
        <div ref={el => { magneticBtnsRef.current[0] = el; }}>
          <a 
            href="#work" 
            className="inline-flex items-center gap-2 rounded-xl px-10 py-7 text-xs font-black uppercase tracking-[0.2em] bg-primary text-white hover:opacity-90 shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all group overflow-hidden relative"
          >
            Mission Logs
            <ShieldCheck size={18} className="group-hover:rotate-12 transition-transform" />
            <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 skew-x-12"></div>
          </a>
        </div>

        <div ref={el => { magneticBtnsRef.current[1] = el; }}>
          <a 
            href="https://github.com/rryoukou" 
            target="_blank" 
            className="inline-flex items-center gap-2 rounded-xl px-10 py-7 text-xs font-black uppercase tracking-[0.2em] border border-slate-800 hover:bg-slate-800 text-white transition-all group"
          >
            <Github size={18} />
            GitHub
          </a>
        </div>
      </div>

      {/* HUD Scanning Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-primary/50 uppercase tracking-[0.4em] font-bold">Scanning Biometrics</span>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse"></div>
      </motion.div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
