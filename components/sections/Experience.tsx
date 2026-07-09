"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Cpu } from "lucide-react";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import DecryptedText from "@/components/reactbits/DecryptedText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";

const events = [
  {
    num: "01",
    title: "Self-Taught Web Developer",
    company: "Independent",
    date: "2024 – Present",
    desc: "Deep diving into modern frontend and backend systems. Building fullstack apps with Next.js and Laravel, shipping production-ready products.",
    tags: ["Next.js", "Laravel", "TypeScript", "MySQL"],
    icon: Cpu,
    current: true,
    accent: "bg-violet-600",
    spotlightColor: "rgba(124, 58, 237, 0.08)" as `rgba(${number}, ${number}, ${number}, ${number})`,
    tagCls: "text-violet-700 bg-violet-50 border-violet-200",
    borderCls: "hover:border-violet-300",
    numCls: "group-hover:text-violet-200",
    iconBg: "group-hover:bg-violet-100 group-hover:border-violet-200",
    iconColor: "group-hover:text-violet-600",
    titleColor: "group-hover:text-violet-700",
    accentLine: "from-violet-400/50",
  },
  {
    num: "02",
    title: "Laravel & React Exploration",
    company: "Self Study",
    date: "2024",
    desc: "Mastering TALL stack and MERN concepts. Developed robust database structures and interactive UIs across full-cycle web apps.",
    tags: ["React", "PHP", "Tailwind", "REST API"],
    icon: Briefcase,
    current: false,
    accent: "bg-indigo-600",
    spotlightColor: "rgba(99, 102, 241, 0.08)" as `rgba(${number}, ${number}, ${number}, ${number})`,
    tagCls: "text-indigo-700 bg-indigo-50 border-indigo-200",
    borderCls: "hover:border-indigo-300",
    numCls: "group-hover:text-indigo-200",
    iconBg: "group-hover:bg-indigo-100 group-hover:border-indigo-200",
    iconColor: "group-hover:text-indigo-600",
    titleColor: "group-hover:text-indigo-700",
    accentLine: "from-indigo-400/50",
  },
  {
    num: "03",
    title: "Educational Journey",
    company: "Formal Education",
    date: "2023 – 2024",
    desc: "Foundational learning in HTML, CSS, and JavaScript. Understanding web architecture, design principles, and CS fundamentals.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    icon: GraduationCap,
    current: false,
    accent: "bg-purple-600",
    spotlightColor: "rgba(147, 51, 234, 0.08)" as `rgba(${number}, ${number}, ${number}, ${number})`,
    tagCls: "text-purple-700 bg-purple-50 border-purple-200",
    borderCls: "hover:border-purple-300",
    numCls: "group-hover:text-purple-200",
    iconBg: "group-hover:bg-purple-100 group-hover:border-purple-200",
    iconColor: "group-hover:text-purple-600",
    titleColor: "group-hover:text-purple-700",
    accentLine: "from-purple-400/50",
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

  return (
    <section id="experience" className="py-32 px-8 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Ambient orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-violet-100/50 blur-[110px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-100/40 blur-[90px] rounded-full pointer-events-none" />
      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{ backgroundImage: "linear-gradient(rgba(124,58,237,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.05) 1px,transparent 1px)", backgroundSize: "64px 64px" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-slate-200"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-3">
              001 / 004 — Journey
            </p>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-slate-900 leading-[0.95] tracking-[-0.03em] uppercase">
              MY<br />
              <span className="gradient-text">EXPERIENCE</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-[240px] leading-relaxed">
            From zero to shipping full-stack products — a self-taught developer&apos;s path.
          </p>
        </motion.div>

        {/* Experience rows */}
        <div className="space-y-6">
          {events.map((ev, idx) => {
            const Icon = ev.icon;
            return (
              <AnimatedContent
                key={ev.num}
                distance={40}
                direction="vertical"
                delay={idx * 0.12}
                duration={0.7}
                ease="power3.out"
              >
                <SpotlightCard
                  spotlightColor={ev.spotlightColor}
                  className={`group relative bg-white border border-slate-100 ${ev.borderCls} rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-slate-100/80 overflow-hidden`}
                >
                  {/* Top accent bar — animates on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${ev.accentLine} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="p-8">
                    <div className="grid md:grid-cols-[80px_1fr_200px] gap-6 items-start">

                      {/* Number + icon column */}
                      <div className="flex flex-col items-center gap-3">
                        <span className={`text-[clamp(1.8rem,3.5vw,3rem)] font-black text-slate-100 ${ev.numCls} transition-colors duration-300 leading-none select-none`}>
                          {ev.num}
                        </span>
                        <div className={`w-10 h-10 rounded-lg ${ev.accent} flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}>
                          <Icon size={16} className="text-white" />
                        </div>
                        {ev.current && (
                          <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[8px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            Now
                          </span>
                        )}
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <div className="mb-2">
                          <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-violet-600">{ev.date}</span>
                        </div>
                        <h3 className={`text-slate-800 font-black text-xl tracking-tight mb-1 ${ev.titleColor} transition-colors duration-300`}>
                          <DecryptedText
                            text={ev.title}
                            animateOn="hover"
                            sequential
                            speed={30}
                            className="text-inherit font-black"
                            encryptedClassName="text-violet-300 font-black"
                            revealDirection="start"
                          />
                        </h3>
                        <p className="text-slate-400 text-xs font-medium uppercase tracking-[0.15em] mb-4">{ev.company}</p>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">{ev.desc}</p>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 md:justify-end">
                        {ev.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-2.5 py-1 text-[10px] font-mono font-semibold border rounded-md transition-all duration-200 hover:scale-105 ${ev.tagCls}`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line — expands on hover */}
                  <div className={`h-px w-0 group-hover:w-full bg-gradient-to-r ${ev.accentLine} via-transparent to-transparent transition-all duration-500`} />
                </SpotlightCard>
              </AnimatedContent>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default Experience;
