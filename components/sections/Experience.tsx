"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Briefcase, GraduationCap, Cpu } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [scrambledTitle, setScrambledTitle] = useState("Mission History");

  // Scramble Text Logic
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  
  const scrambleText = (finalText: string) => {
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambledTitle(
        finalText
          .split("")
          .map((char, index) => {
            if (index < iteration) return finalText[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      if (iteration >= finalText.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
  };

  const events = [
    {
      title: "Self-Taught Web Developer",
      date: "2024 - Present",
      desc: "Deep diving into modern frontend frameworks and backend systems. Building fullstack applications with Next.js and Laravel.",
      icon: <Cpu className="text-white" />,
      color: "bg-red-600"
    },
    {
      title: "Laravel & React Exploration",
      date: "2024",
      desc: "Mastering the TALL stack and MERN stack concepts. Developing robust database structures and interactive UIs.",
      icon: <Briefcase className="text-white" />,
      color: "bg-red-600"
    },
    {
      title: "Educational Journey",
      date: "2023 - 2024",
      desc: "Foundational learning in HTML, CSS, and JavaScript. Understanding web architecture and design principles.",
      icon: <GraduationCap className="text-white" />,
      color: "bg-red-600"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Title Scramble Animation
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 80%",
        onEnter: () => scrambleText("Mission History"),
        once: true
      });

      // 2. Dynamic Timeline Line Animation
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "bottom 60%",
            scrub: 0.5
          }
        }
      );

      // 3. Node & Card Animations
      const timelineItems = gsap.utils.toArray(".timeline-item");
      
      timelineItems.forEach((item: any, i: number) => {
        const node = item.querySelector(".node-icon");
        const card = item.querySelector(".content-card");
        const pulse = item.querySelector(".pulse-ring");

        // Node Activation (Scale + Pulse)
        gsap.timeline({
          scrollTrigger: {
            trigger: node,
            start: "top 60%",
            toggleActions: "play none none reverse",
          }
        })
        .fromTo(node, 
          { scale: 0.5, borderColor: "rgba(220, 38, 38, 0.3)" },
          { scale: 1.2, borderColor: "rgba(220, 38, 38, 1)", duration: 0.4, ease: "back.out(2)" }
        )
        .to(node, { scale: 1, duration: 0.2 })
        .fromTo(pulse, 
          { scale: 0.8, opacity: 1 },
          { scale: 2.5, opacity: 0, duration: 1, repeat: -1, ease: "power2.out" },
          "<"
        );

        // Elastic Card Swing-In
        gsap.fromTo(card,
          { 
            x: i % 2 === 0 ? -150 : 150, 
            opacity: 0, 
            rotateY: i % 2 === 0 ? 15 : -15 
          },
          {
            x: 0,
            opacity: 1,
            rotateY: 0,
            duration: 1.2,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background HUD Lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-red-600"></div>
        <div className="absolute top-0 right-1/4 w-[1px] h-full bg-red-600"></div>
      </div>

      <div className="max-w-4xl mx-auto" ref={containerRef}>
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.3em] mb-3">Timeline Journey</h2>
          <h3 ref={titleRef} className="text-4xl md:text-5xl font-black text-white italic min-h-[1.2em]">
            {scrambledTitle}
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div 
            ref={lineRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-red-600 via-red-500 to-transparent origin-top h-full hidden md:block"
          >
            {/* HUD Glowing Tip */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full blur-md opacity-50"></div>
          </div>

          <div className="space-y-24 md:space-y-32">
            {events.map((event, i) => (
              <div key={i} className={`timeline-item relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-0`}>
                
                {/* Content Card */}
                <div className={`content-card w-full md:w-[42%] ${i % 2 === 0 ? "md:text-right" : "md:text-left"} perspective-1000`}>
                  <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-red-600/30 transition-all duration-500 group backdrop-blur-sm relative overflow-hidden">
                    <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">{event.date}</span>
                    <h4 className="text-xl font-bold text-white mt-1 group-hover:text-red-500 transition-colors">{event.title}</h4>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">{event.desc}</p>
                    
                    {/* Card HUD Siku */}
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-red-600/0 group-hover:border-red-600/20 transition-all"></div>
                  </div>
                </div>

                {/* Center Icon Node */}
                <div className="node-icon absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-xl bg-slate-950 border-2 border-slate-800 z-10 shadow-[0_0_20px_rgba(220,38,38,0)] transition-shadow duration-500">
                  <div className="w-6 h-6 relative z-10">{event.icon}</div>
                  {/* Pulse Ring (Spider-Sense Alert) */}
                  <div className="pulse-ring absolute inset-0 rounded-xl border-2 border-red-600 opacity-0 pointer-events-none"></div>
                </div>

                {/* Placeholder for symmetry */}
                <div className="hidden md:block w-[42%]"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Experience;

