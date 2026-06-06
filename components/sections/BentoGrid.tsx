"use client";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, Linkedin, Code2, Rocket, Terminal, Database, Globe, Flame, Newspaper, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BentoGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  // Custom Scramble Effect
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  
  // Chidori Awakening Reveal Effect
  const lightningChars = "⚡—~-^/\\*+><[]{}";
  
  const chidoriReveal = (el: HTMLElement, newText: string) => {
    let frame = 0;
    const duration = 40; 
    
    const animate = () => {
      let output = "";
      let complete = 0;
      for (let i = 0; i < newText.length; i++) {
        const char = newText[i];
        const delay = (i / newText.length) * duration;
        
        if (frame >= delay) {
          if (frame < delay + 8 && Math.random() > 0.5) {
            output += lightningChars[Math.floor(Math.random() * lightningChars.length)];
          } else {
            output += char;
            complete++;
          }
        } else {
          output += Math.random() > 0.8 ? lightningChars[Math.floor(Math.random() * lightningChars.length)] : " ";
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

  const skills = {
    frontend: ["react", "nextjs", "typescript", "tailwind"],
    backend: ["php", "laravel", "mysql"],
    tools: ["github", "vercel", "figma"]
  };

  const projects = [
    {
      title: "Eye of Insight",
      desc: "Advanced visual decryption system for cinematic archives. Built with the precision of the Sharingan for rapid data extraction.",
      tech: ["React", "API", "JS"],
      github: "https://github.com/rryoukou/Movie",
      demo: "https://final-project-sandy-rho.vercel.app/",
      span: "md:col-span-2 md:row-span-1",
      icon: <Globe className="text-primary" />
    },
    {
      title: "Shinobi Supply Route",
      desc: "Centralized logistics hub for ninja equipment. Optimized for lightning-fast commerce using Chidori-speed Laravel backend.",
      tech: ["Laravel", "PHP", "Tailwind"],
      github: "https://github.com/rryoukou/serbu-computer",
      demo: "https://serbucomputer.web.id/",
      span: "md:col-span-1 md:row-span-2",
      icon: <Terminal className="text-primary" />
    },
    {
      title: "Forbidden Scroll Archive",
      desc: "Knowledge management system for the Hidden Leaf's sensitive scrolls. Secured with multi-layered Uchiha Genjutsu encryption.",
      tech: ["PHP", "MySQL"],
      github: "https://github.com/rryoukou/Perpustakaan",
      demo: null,
      span: "md:col-span-1 md:row-span-1",
      icon: <Database className="text-primary" />
    },
    {
      title: "Shinobi Gear Emporium",
      desc: "Elite marketplace for high-performance combat gear. UI optimized for the visual speed of a Shadow Shinobi.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/rryoukou/football-shoping",
      demo: null,
      span: "md:col-span-1 md:row-span-1",
      icon: <Rocket className="text-primary" />
    }
  ];

  useEffect(() => {
    // 1. Initial GSAP Set to prevent flash/stuck state
    gsap.set(".bento-item", { opacity: 0, y: 50 });

    const ctx = gsap.context(() => {
      // 2. Staggered Swing-In Entrance
      gsap.to(".bento-item", {
        y: 0,
        rotationX: 0,
        opacity: 1,
        transformOrigin: "top center",
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out", // Smoother for shinobi missions
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
          onEnter: () => {
            // Text Reveal on Section Reveal
            const titles = document.querySelectorAll(".scramble-title");
            titles.forEach((title: any) => chidoriReveal(title, title.innerText));
          }
        }
      });

      // 3. Force Refresh after initialization
      ScrollTrigger.refresh();
    }, gridRef);

    // 4. Refresh on Window Load (Ensures all assets/layouts are settled)
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("load", handleLoad);

    // 5. Comprehensive Cleanup
    return () => {
      ctx.revert();
      window.removeEventListener("load", handleLoad);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // 3. Hover Interactions
  const onMouseEnter = (e: any) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".hover-icon");
    const badges = card.querySelectorAll(".badge-item");
    const glow = card.querySelector(".hover-glow");

    // Sharingan Pulse
    gsap.to(card, {
      borderColor: "var(--primary)",
      boxShadow: "0 0 25px rgba(120, 80, 255, 0.4)",
      duration: 0.4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut"
    });

    // Micro-interactions
    if (icon) gsap.to(icon, { y: -5, scale: 1.1, duration: 0.3, ease: "power2.out" });
    if (badges) gsap.to(badges, { y: -2, stagger: 0.05, duration: 0.3, ease: "power2.out" });
    if (glow) gsap.to(glow, { opacity: 1, duration: 0.5 });
  };

  const onMouseLeave = (e: any) => {
    const card = e.currentTarget;
    const icon = card.querySelector(".hover-icon");
    const badges = card.querySelectorAll(".badge-item");
    const glow = card.querySelector(".hover-glow");

    gsap.killTweensOf(card); // Stop pulse
    gsap.to(card, { 
      borderColor: "rgb(30, 41, 59)", // border-slate-800
      boxShadow: "none", 
      duration: 0.3 
    });

    if (icon) gsap.to(icon, { y: 0, scale: 1, duration: 0.3 });
    if (badges) gsap.to(badges, { y: 0, stagger: 0.05, duration: 0.3 });
    if (glow) gsap.to(glow, { opacity: 0, duration: 0.3 });
  };

  return (
    <section id="work" className="py-20 px-6 bg-slate-950" ref={gridRef}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-2 transition-colors duration-700">Uchiha Clan // Hidden Leaf Archives</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white transition-colors duration-700 scramble-title">Shinobi Missions</h3>
          </div>
          <p className="text-slate-500 max-w-md text-sm italic">
            "I have long since closed my eyes... my only goal is in the darkness." - Sasuke Uchiha
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {/* SHARINGAN / SKILLS */}
          <Card 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="bento-item md:col-span-2 md:row-span-2 bg-slate-900/40 border-slate-800 backdrop-blur-xl overflow-hidden group transition-all duration-500"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
              <Flame size={200} className="text-primary transition-colors duration-700" />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 text-primary mb-2 transition-colors duration-700">
                <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                <span className="text-xs font-bold uppercase tracking-widest">Jutsu Mastery</span>
              </div>
              <CardTitle className="text-2xl text-white">Uchiha Skillset</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-2">{category}</p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <div key={skill} className="badge-item flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-primary/30 transition-all duration-700">
                          <img src={`https://skillicons.dev/icons?i=${skill}`} alt={skill} className="w-4 h-4" />
                          <span className="text-xs text-slate-300 capitalize">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* MISSION ITEMS */}
          {projects.map((project, i) => (
            <Card 
              key={i} 
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className={`bento-item ${project.span} bg-slate-900/40 border-slate-800 backdrop-blur-xl transition-all duration-500 group relative overflow-hidden flex flex-col`}
            >
              {/* Sharingan Hover Glow */}
              <div className="hover-glow absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1)_0%,transparent_70%)] opacity-0 transition-opacity duration-700"></div>
              
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className="hover-icon p-2 rounded-lg bg-primary/10 border border-primary/30 transition-colors duration-700">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.demo && (
                      <a href={project.demo} target="_blank" className="p-1.5 rounded-md hover:bg-primary/20 text-slate-400 hover:text-primary transition-all">
                        <ExternalLink size={16} />
                      </a>
                    )}
                    <a href={project.github} target="_blank" className="p-1.5 rounded-md hover:bg-primary/20 text-slate-400 hover:text-primary transition-all">
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                <CardTitle className="text-lg text-white group-hover:text-primary transition-colors duration-700 scramble-title">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-400 text-xs mt-1 line-clamp-2 leading-relaxed">
                  {project.desc}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="badge-item bg-slate-800 text-[10px] text-slate-400 border-slate-700 font-mono transition-colors duration-700">
                    {t}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}

          {/* HIDDEN LEAF TECH NOTES */}
          <Card 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="bento-item md:col-span-1 md:row-span-1 bg-slate-900/40 border-slate-800 backdrop-blur-xl transition-all duration-500 group cursor-pointer relative overflow-hidden flex flex-col justify-center p-6"
          >
             <div className="flex items-center gap-2 text-primary mb-2 transition-colors duration-700">
               <Newspaper size={18} />
               <span className="text-[10px] font-black uppercase tracking-widest">Leaf Scroll</span>
             </div>
             <h3 className="text-white font-bold leading-tight scramble-title">Tech Notes // Upcoming Jutsu</h3>
             <p className="text-slate-500 text-[10px] mt-2 italic leading-relaxed">
               "Mastering new elements and frameworks. Archive in progress."
             </p>
             <div className="mt-4 flex items-center gap-2">
               <div className="w-1 h-1 bg-primary rounded-full animate-pulse transition-colors duration-700"></div>
               <span className="text-[8px] text-primary uppercase font-bold transition-colors duration-700">Chakra Encrypted</span>
             </div>
          </Card>

          {/* HUD STATUS BOX */}
          <Card 
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="bento-item md:col-span-1 md:row-span-1 bg-primary border-none shadow-[0_0_30px_rgba(var(--primary),0.3)] flex flex-col items-center justify-center text-center p-6 group cursor-pointer relative overflow-hidden transition-all duration-700"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
             <div className="relative z-10 flex flex-col items-center">
               <Zap className="hover-icon text-white mb-2 animate-pulse" size={32} />
               <h3 className="text-white font-black uppercase tracking-tighter text-xl scramble-title">Activate Susanoo</h3>
               <p className="text-primary-foreground/70 text-[10px] font-bold mt-1 tracking-widest uppercase">Status: Ready</p>
             </div>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
