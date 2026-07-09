"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Rocket, Terminal, Database, Globe, Code2, ArrowUpRight } from "lucide-react";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import DecryptedText from "@/components/reactbits/DecryptedText";
import GlitchText from "@/components/reactbits/GlitchText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import ShinyText from "@/components/reactbits/ShinyText";


const skills = [
  { category: "Frontend", items: ["react","nextjs","typescript","tailwind"] },
  { category: "Backend",  items: ["php","laravel","mysql"] },
  { category: "Tools",    items: ["github","vercel","figma"] },
];

const projects = [
  {
    num: "01", title: "CineTrack",
    desc: "Advanced visual system for cinematic archives. Rapid data extraction with precision-engineered UX.",
    tech: ["React","API","JS"],
    github: "https://github.com/rryoukou/Movie",
    demo: "https://final-project-sandy-rho.vercel.app/",
    icon: Globe, featured: true,
  },
  {
    num: "02", title: "PC Hardware Store",
    desc: "Full-featured e-commerce hub for computer hardware. Laravel backend with real-time stock management.",
    tech: ["Laravel","PHP","Tailwind"],
    github: "https://github.com/rryoukou/serbu-computer",
    demo: "https://serbucomputer.web.id/",
    icon: Terminal, featured: false,
  },
  {
    num: "03", title: "Library Management System",
    desc: "Library management system with multi-layer authentication and borrowing tracking.",
    tech: ["PHP","MySQL"],
    github: "https://github.com/rryoukou/Perpustakaan",
    demo: null,
    icon: Database, featured: false,
  },
  {
    num: "04", title: "Football Gear Shop",
    desc: "Football gear marketplace with clean product catalog and cart system.",
    tech: ["HTML","CSS"],
    github: "https://github.com/rryoukou/football-shoping",
    demo: null,
    icon: Rocket, featured: false,
  },
];

const BentoGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const ease = [0.25,0.46,0.45,0.94] as [number,number,number,number];

  return (
    <section id="work" ref={sectionRef} className="py-32 px-8 bg-[oklch(0.975_0.005_280)] relative overflow-hidden">
      {/* grid texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.35]"
        style={{ backgroundImage:"linear-gradient(rgba(124,58,237,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.05) 1px,transparent 1px)", backgroundSize:"64px 64px" }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-100/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }} transition={{ duration:0.7, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-slate-200"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-3">
              002 / 004 — Selected Work
            </p>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-slate-900 leading-[0.95] tracking-[-0.03em] uppercase">
              FEATURED<br />
              <span className="gradient-text">PROJECTS</span>
            </h2>
          </div>
          <div className="max-w-[260px]">
            <ShinyText
              text={`"Darkness is what defines the light."`}
              color="#94a3b8"
              shineColor="#7c3aed"
              speed={4}
              className="text-sm italic leading-relaxed"
            />
            <p className="text-slate-500 text-xs mt-1">— Sasuke Uchiha</p>
          </div>
        </motion.div>
        <div className="grid lg:grid-cols-[1fr_300px] gap-8">

          {/* Project rows — editorial numbered list */}
          <div className="space-y-0 divide-y divide-slate-200">
            {projects.map((p, idx) => {
              const Icon = p.icon;
              return (
                <AnimatedContent
                  key={p.num}
                  distance={28}
                  direction="vertical"
                  delay={idx * 0.1}
                  duration={0.65}
                  ease="power3.out"
                >
                  <div className="group py-8 first:pt-0">
                  <div className="flex items-start gap-6">
                    {/* Big number — GlitchText on hover */}
                    <div className="shrink-0 w-14 text-right leading-none select-none [&_div]:bg-[oklch(0.975_0.005_280)] [&_div]:text-[clamp(2rem,4vw,3.5rem)] [&_div]:font-black [&_div]:text-slate-100 group-hover:[&_div]:text-violet-200 [&_div]:transition-colors [&_div]:duration-300">
                      <GlitchText
                        enableOnHover
                        enableShadows={false}
                        speed={0.4}
                      >
                        {p.num}
                      </GlitchText>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-sm bg-white border border-slate-200 flex items-center justify-center group-hover:border-violet-300 group-hover:bg-violet-50 transition-all duration-300 shrink-0">
                            <Icon size={14} className="text-slate-500 group-hover:text-violet-600 transition-colors" />
                          </div>
                          <h3 className="text-slate-800 font-bold text-lg tracking-tight group-hover:text-violet-700 transition-colors">
                            <DecryptedText text={p.title} animateOn="hover" sequential speed={25}
                              className="text-inherit font-bold"
                              encryptedClassName="text-violet-300 font-bold"
                              revealDirection="start"
                            />
                          </h3>
                          {p.featured && (
                            <span className="hidden sm:inline-flex px-2 py-0.5 text-[8px] font-black uppercase tracking-widest text-violet-600 bg-violet-100 border border-violet-200 rounded-sm">
                              Featured
                            </span>
                          )}
                        </div>

                        {/* Links */}
                        <div className="flex gap-2 shrink-0">
                          {p.demo && (
                            <a href={p.demo} target="_blank" rel="noreferrer"
                              className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-violet-700 border border-violet-300 hover:bg-violet-700 hover:text-white hover:border-violet-700 transition-all duration-200 rounded-sm">
                              Live Demo <ExternalLink size={9} />
                            </a>
                          )}
                          <a href={p.github} target="_blank" rel="noreferrer"
                            className="flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-600 border border-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-800 transition-all duration-200 rounded-sm">
                            Code <Github size={9} />
                          </a>
                        </div>
                      </div>

                      <p className="text-slate-500 text-sm leading-relaxed mb-3 max-w-xl">{p.desc}</p>

                      <div className="flex flex-wrap gap-1.5">
                        {p.tech.map((t) => (
                          <span key={t} className="px-2 py-0.5 text-[10px] font-mono font-medium text-violet-600 bg-white border border-violet-100 rounded-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  </div>
                </AnimatedContent>
              );
            })}
          </div>

          {/* ── Skills sidebar ── */}
          <div className="work-row lg:sticky lg:top-28 self-start">
            <AnimatedContent distance={24} direction="horizontal" delay={0.3} duration={0.7} ease="power3.out">
            <SpotlightCard spotlightColor="rgba(124, 58, 237, 0.07)"
              className="glass-card glass-card-hover rounded-sm p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Code2 size={13} className="text-violet-600" />
                  <span className="text-slate-800 font-bold text-xs uppercase tracking-[0.18em]">Tech Stack</span>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="space-y-5 flex-1">
                {skills.map(({ category, items }) => (
                  <div key={category}>
                    <p className="text-[9px] text-slate-400 uppercase tracking-[0.22em] font-bold mb-2.5">{category}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((s) => (
                        <div key={s} className="flex items-center gap-1.5 px-2 py-1 rounded-sm bg-white border border-slate-100 hover:border-violet-200 transition-all cursor-default">
                          <img src={`https://skillicons.dev/icons?i=${s}`} alt={s} className="w-3.5 h-3.5" />
                          <span className="text-[10px] text-slate-600 capitalize font-medium">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2.5">
                {[
                  { label:"Status",  val: <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />Open to Work</span> },
                  { label:"Focus",   val: <span className="text-[10px] font-bold text-slate-700">Fullstack Dev</span> },
                  { label:"Chakra",  val: <div className="flex gap-1">{[...Array(5)].map((_,i)=><div key={i} className="h-1 w-4 bg-violet-400 rounded-sm" style={{opacity:0.3+i*0.14}} />)}</div> },
                ].map(({ label, val }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-400 uppercase tracking-[0.15em] font-medium">{label}</span>
                    {val}
                  </div>
                ))}
              </div>
            </SpotlightCard>
            </AnimatedContent>
          </div>
        </div>
      </div>


    </section>
  );
};

export default BentoGrid;
