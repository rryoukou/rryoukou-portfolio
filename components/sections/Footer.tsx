"use client";
import { Github, Mail, Linkedin, ArrowUpRight, Heart } from "lucide-react";
import { ScrollVelocity } from "@/components/reactbits/ScrollVelocity";
import ShinyText from "@/components/reactbits/ShinyText";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import SpotlightCard from "@/components/reactbits/SpotlightCard";

const links = [
  { name: "Journey", href: "#experience" },
  { name: "Work",    href: "#work"        },
  { name: "Contact", href: "#contact"     },
];

const socials = [
  { icon: Github,   href: "https://github.com/rryoukou", label: "GitHub",   spotlight: "rgba(15,23,42,0.08)"    as `rgba(${number}, ${number}, ${number}, ${number})` },
  { icon: Mail,     href: "mailto:rryoukou14@gmail.com", label: "Email",    spotlight: "rgba(124,58,237,0.08)"  as `rgba(${number}, ${number}, ${number}, ${number})` },
  { icon: Linkedin, href: "#",                           label: "LinkedIn", spotlight: "rgba(37,99,235,0.08)"   as `rgba(${number}, ${number}, ${number}, ${number})` },
];

export default function Footer() {
  return (
    <footer className="relative bg-[oklch(0.975_0.005_280)] overflow-hidden">
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.3]"
        style={{
          backgroundImage: "linear-gradient(rgba(124,58,237,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(124,58,237,0.06) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Ambient orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-violet-100/40 blur-[100px] rounded-full pointer-events-none" />

      {/* Velocity marquee */}
      <div className="relative border-b border-slate-200 overflow-hidden py-8">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[oklch(0.975_0.005_280)] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[oklch(0.975_0.005_280)] to-transparent z-10 pointer-events-none" />
        <ScrollVelocity
          texts={[
            "✦ Next.js ✦ Laravel ✦ React ✦ TypeScript ✦ Tailwind ✦ PHP ✦ MySQL ✦ Figma ✦ Vercel",
            "✦ Fullstack Dev ✦ Open to Work ✦ Available 2026 ✦ Indonesia ✦ Building Cool Stuff",
          ]}
          velocity={50}
          className="text-violet-500/60 font-bold text-xs uppercase tracking-[0.18em]"
          scrollerClassName="gap-0"
          parallaxClassName="py-0.5"
        />
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-12 mb-12">

          {/* Brand */}
          <AnimatedContent distance={24} direction="vertical" delay={0} duration={0.7} ease="power3.out">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10 rounded-sm border border-violet-200 bg-white flex items-center justify-center shadow-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-white" />
                <ShinyText
                  text="RY"
                  color="#5b21b6"
                  shineColor="#a78bfa"
                  speed={3}
                  className="relative text-[10px] font-black tracking-widest"
                />
              </div>
              <div>
                <p className="text-slate-800 font-black text-sm leading-none tracking-tight">Ryoukou Arya</p>
                <p className="text-slate-400 text-[9px] uppercase tracking-[0.2em] mt-0.5">Fullstack Developer</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] mb-5">
              Building elegant digital experiences with precision and purpose.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-sm shadow-sm">
              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">Portfolio</span>
              <span className="text-[9px] font-bold text-violet-600 font-mono">V1.0</span>
              <span className="text-[9px] text-slate-300">·</span>
              <span className="text-[9px] text-slate-400 font-mono">2026</span>
            </div>
          </AnimatedContent>

          {/* Nav links */}
          <div className="min-w-[120px]">
            <AnimatedContent distance={16} direction="vertical" delay={0.1} duration={0.6}>
              <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 mb-5">Navigate</p>
            </AnimatedContent>
            <ul className="space-y-3">
              {links.map((l, i) => (
                <AnimatedContent key={l.name} distance={14} direction="horizontal" reverse delay={0.15 + i * 0.07} duration={0.5}>
                  <li>
                    <a
                      href={l.href}
                      className="flex items-center gap-2 text-sm text-slate-500 hover:text-violet-700 transition-colors duration-200 group"
                    >
                      <span className="text-[8px] font-black text-slate-300 tabular-nums">0{i + 1}</span>
                      {l.name}
                      <ArrowUpRight size={9} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 text-violet-400" />
                    </a>
                  </li>
                </AnimatedContent>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="min-w-[140px]">
            <AnimatedContent distance={16} direction="vertical" delay={0.1} duration={0.6}>
              <p className="text-[9px] font-black uppercase tracking-[0.28em] text-slate-400 mb-5">Connect</p>
            </AnimatedContent>
            <div className="flex gap-2 mb-5">
              {socials.map(({ icon: Icon, href, label, spotlight }, i) => (
                <AnimatedContent key={label} distance={14} direction="vertical" delay={0.2 + i * 0.07} duration={0.5}>
                  <SpotlightCard spotlightColor={spotlight} className="rounded-sm">
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-sm border border-slate-200 bg-white hover:border-violet-400 hover:bg-violet-50 hover:text-violet-600 flex items-center justify-center text-slate-400 transition-all duration-300 shadow-sm hover:shadow-violet-100/60 hover:shadow-md hover:-translate-y-0.5"
                    >
                      <Icon size={13} />
                    </a>
                  </SpotlightCard>
                </AnimatedContent>
              ))}
            </div>
            <AnimatedContent distance={12} direction="horizontal" reverse delay={0.38} duration={0.5}>
              <a
                href="mailto:rryoukou14@gmail.com"
                className="flex items-center gap-1.5 text-[11px] text-violet-600 hover:text-violet-800 transition-colors font-bold group"
              >
                <Mail size={10} />
                <span className="group-hover:underline underline-offset-2">rryoukou14@gmail.com</span>
              </a>
            </AnimatedContent>
          </div>
        </div>

        {/* Bottom bar */}
        <AnimatedContent distance={12} direction="vertical" delay={0.4} duration={0.6}>
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-slate-400 text-xs flex items-center gap-1.5">
              © 2026 Ryoukou Arya Nugroho · Made with
              <Heart size={9} className="text-violet-400 fill-violet-400 animate-pulse" />
              in Indonesia
            </p>
            <SpotlightCard
              spotlightColor="rgba(124,58,237,0.08)"
              className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-100 rounded-sm shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.15em]">Available for opportunities</span>
            </SpotlightCard>
          </div>
        </AnimatedContent>
      </div>
    </footer>
  );
}
