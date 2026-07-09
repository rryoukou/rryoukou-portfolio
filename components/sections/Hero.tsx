"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import gsap from "gsap";
import Particles from "@/components/reactbits/Particles";
import ShinyText from "@/components/reactbits/ShinyText";
import GlitchText from "@/components/reactbits/GlitchText";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import DecryptedText from "@/components/reactbits/DecryptedText";
import TiltedCard from "@/components/reactbits/TiltedCard";

const roles = ["Fullstack Developer", "Next.js Engineer", "Laravel Specialist", "UI Craftsman"];

const socialProof = [
  { value: "10+", label: "Projects Built" },
  { value: "2yr", label: "Experience" },
  { value: "∞",   label: "Dedication" },
];

const Hero = () => {
  const heroRef     = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const photoRef    = useRef<HTMLDivElement>(null);
  const btns        = useRef<(HTMLDivElement | null)[]>([]);
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % roles.length), 3200);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;
    const mm  = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(min-width: 1024px)", () => {
        const onMove = (e: MouseEvent) => {
          const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
          gsap.to(parallaxRef.current, { x: (e.clientX - cx) * 0.018, y: (e.clientY - cy) * 0.018, duration: 2.5, ease: "power1.out" });
          gsap.to(photoRef.current,    { x: (e.clientX - cx) * -0.01, y: (e.clientY - cy) * -0.01, duration: 2.5, ease: "power1.out" });
          btns.current.forEach((b) => {
            if (!b) return;
            const r  = b.getBoundingClientRect();
            const bx = r.left + r.width / 2, by = r.top + r.height / 2;
            const d  = Math.hypot(e.clientX - bx, e.clientY - by);
            gsap.to(b, d < 100
              ? { x: (e.clientX - bx) * 0.25, y: (e.clientY - by) * 0.25, duration: 0.5, ease: "power2.out" }
              : { x: 0, y: 0, duration: 0.6, ease: "power2.out" });
          });
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      });
    }, heroRef.current);
    return () => { ctx.revert(); mm.revert(); };
  }, []);

  const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];

  return (
    <section ref={heroRef} className="relative min-h-screen flex flex-col overflow-hidden bg-[oklch(0.985_0.003_280)]">

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Subtle particles */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <Particles particleCount={40} particleSpread={16} speed={0.03}
          particleColors={["#7c3aed","#6366f1","#a78bfa"]}
          moveParticlesOnHover alphaParticles particleHoverFactor={0.15}
          particleBaseSize={35} sizeRandomness={1.5} cameraDistance={28}
          className="w-full h-full"
        />
      </div>

      {/* Ambient orbs */}
      <div ref={parallaxRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-200/30 blur-[150px] animate-aurora" />
        <div className="absolute bottom-[-10%] -left-40 w-[450px] h-[450px] rounded-full bg-indigo-200/25 blur-[120px] animate-aurora" style={{ animationDelay: "6s" }} />
      </div>

      {/* ── TOP BAR — editorial label row ── */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="relative z-10 w-full max-w-7xl mx-auto px-8 pt-32 pb-0 flex items-center justify-between"
      >
        <div className="flex items-center gap-6">
          <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 border border-slate-200 px-2 py-1 rounded-sm">
            Portfolio V1.0
          </span>
          <span className="hidden sm:flex items-center gap-1.5 text-[9px] text-slate-400 uppercase tracking-[0.2em]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for work
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] text-slate-400 uppercase tracking-[0.2em]">
          <MapPin size={9} />
          Indonesia · 2026
        </div>
      </motion.div>

      {/* ── MAIN HERO CONTENT ── */}
      <div className="relative z-10 flex-1 w-full max-w-7xl mx-auto px-8 pt-10 pb-24 grid lg:grid-cols-[1fr_420px] gap-12 items-center">

        {/* LEFT — Editorial text block */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
        >
          {/* Pre-title */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-px w-10 bg-violet-400/60" />
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                transition={{ duration: 0.3 }}
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-violet-600"
              >
                {roles[roleIdx]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* MAIN HEADLINE — antonyraphy style */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
            className="mb-3"
          >
            <h1 className="text-[clamp(2.8rem,7vw,5.2rem)] font-black text-slate-900 leading-[0.95] tracking-[-0.03em] uppercase">
              I BUILD
            </h1>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
            className="mb-3"
          >
            <h1 className="text-[clamp(2.8rem,7vw,5.2rem)] font-black leading-[0.95] tracking-[-0.03em] uppercase gradient-text">
              WEB APPS
            </h1>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
            className="mb-10"
          >
            <h1 className="text-[clamp(2.8rem,7vw,5.2rem)] font-black text-slate-900 leading-[0.95] tracking-[-0.03em] uppercase flex items-end gap-4 flex-wrap">
              &amp; DESIGN
              <span className="text-[clamp(1rem,2vw,1.4rem)] font-normal text-slate-400 normal-case tracking-normal leading-tight italic mb-1">
                — without the gap.
              </span>
            </h1>
          </motion.div>

          {/* Bio line */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
            className="text-slate-500 text-[15px] leading-relaxed max-w-[520px] mb-10 border-l-2 border-violet-300 pl-4"
          >
            <span className="text-slate-700 font-semibold">Ryoukou Arya Nugroho</span>, Fullstack Developer —
            bridging frontend craft and backend logic with{" "}
            <ShinyText text="Next.js" color="#5b21b6" shineColor="#7c3aed" speed={2.5} className="font-semibold" />
            {" "}and{" "}
            <ShinyText text="Laravel" color="#4338ca" shineColor="#6366f1" speed={2.5} delay={0.6} className="font-semibold" />.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
            className="flex flex-wrap gap-3 mb-14"
          >
            <div ref={(el) => { btns.current[0] = el; }}>
              <a href="#work"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white bg-violet-700 hover:bg-violet-800 transition-all duration-300 shadow-lg shadow-violet-200/80 rounded-sm"
              >
                View Work
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div ref={(el) => { btns.current[1] = el; }}>
              <a href="https://github.com/rryoukou" target="_blank" rel="noreferrer"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 border border-slate-300 hover:border-violet-400 hover:text-violet-700 hover:bg-violet-50 transition-all duration-300 rounded-sm"
              >
                <Github size={13} />
                GitHub
              </a>
            </div>
            <div ref={(el) => { btns.current[2] = el; }}>
              <a href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-slate-600 border border-slate-300 hover:border-violet-400 hover:text-violet-700 hover:bg-violet-50 transition-all duration-300 rounded-sm"
              >
                Let&apos;s Talk
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Social proof — stat row with GlitchText + SpotlightCard */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } } }}
            className="flex items-center gap-3"
          >
            {socialProof.map(({ value, label }, i) => (
              <SpotlightCard
                key={label}
                spotlightColor="rgba(124, 58, 237, 0.10)"
                className="flex flex-col items-center px-5 py-3 bg-white border border-slate-100 hover:border-violet-200 rounded-lg transition-all duration-300 hover:shadow-md hover:shadow-violet-100/60 cursor-default group min-w-[80px]"
              >
                {/* GlitchText — bg must match card bg (white) */}
                <div className="[&_div]:bg-white [&_div]:text-2xl [&_div]:font-black [&_div]:text-slate-900 [&_div]:tracking-tight [&_div]:leading-none">
                  <GlitchText enableOnHover enableShadows={false} speed={0.35}>
                    {value}
                  </GlitchText>
                </div>
                <span className="text-[9px] text-slate-400 uppercase tracking-[0.18em] mt-1.5 font-medium">{label}</span>
              </SpotlightCard>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — profile card with TiltedCard + SpotlightCard */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1,    y: 0  }}
          transition={{ duration: 1.1, delay: 0.4, ease }}
          className="hidden lg:block"
          ref={photoRef}
        >
          <div className="relative">

            {/* Open to Work badge */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -left-4 z-30 flex items-center gap-2 bg-white border border-emerald-200 px-3 py-1.5 rounded-full shadow-lg shadow-emerald-100/60"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-700">Open to Work</span>
            </motion.div>

            {/* TiltedCard wrapping the photo */}
            <TiltedCard
              imageSrc="/Profile.jpg"
              altText="Ryoukou Arya Nugroho"
              containerHeight="500px"
              containerWidth="100%"
              imageHeight="500px"
              imageWidth="100%"
              rotateAmplitude={8}
              scaleOnHover={1.03}
              showTooltip={false}
              displayOverlayContent={true}
            >
              {/* SpotlightCard overlay on top of photo */}
              <SpotlightCard
                spotlightColor="rgba(124, 58, 237, 0.18)"
                className="absolute inset-0 rounded-2xl"
              >
                {/* Decorative corners */}
                <div className="absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-violet-400/50 z-10 rounded-tr-lg pointer-events-none" />
                <div className="absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-violet-400/50 z-10 rounded-bl-lg pointer-events-none" />

                {/* Gradient overlays — elegant multi-layer */}
                {/* Base: deep charcoal fade from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1a]/85 via-[#0d0d1a]/20 to-transparent rounded-2xl pointer-events-none" />
                {/* Side vignette: subtle depth */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a0533]/30 via-transparent to-[#0a0a1f]/20 rounded-2xl pointer-events-none" />
                {/* Top fade: keep face bright */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent rounded-2xl pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.04) 0%, transparent 40%, rgba(13,13,26,0.75) 100%)" }} />
                {/* Accent: violet shimmer on left edge */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.15) 0%, transparent 45%, rgba(99,102,241,0.08) 100%)" }} />

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-violet-300/90 text-[9px] uppercase tracking-[0.3em] font-bold mb-1.5 drop-shadow-sm">
                        Fullstack Developer
                      </p>
                      <h2 className="text-white font-black text-2xl tracking-tight leading-none drop-shadow-lg">
                        Ryoukou Arya
                      </h2>
                    </div>
                    <div className="text-right space-y-0.5">
                      <p className="text-white/40 text-[9px] uppercase tracking-[0.2em]">Indonesia</p>
                      <p className="text-white/40 text-[9px] uppercase tracking-[0.2em]">2026</p>
                    </div>
                  </div>

                  {/* Elegant accent line */}
                  <div className="mt-3 h-px" style={{ background: "linear-gradient(to right, rgba(167,139,250,0.7), rgba(129,140,248,0.4), transparent)" }} />
                </div>
              </SpotlightCard>
            </TiltedCard>

            {/* Floating tech stack badge */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-5 z-30"
            >
              <SpotlightCard
                spotlightColor="rgba(124, 58, 237, 0.15)"
                className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-xl shadow-violet-100/60"
              >
                <p className="text-[9px] text-slate-400 uppercase tracking-[0.22em] mb-2 font-semibold">Stack</p>
                <div className="flex gap-1.5">
                  {["react","nextjs","laravel","typescript"].map((s) => (
                    <img key={s} src={`https://skillicons.dev/icons?i=${s}`} alt={s} className="w-5 h-5" />
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>

            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [4, -4, 4] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-2 -right-6 z-30"
            >
              <SpotlightCard
                spotlightColor="rgba(99, 102, 241, 0.15)"
                className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 shadow-lg shadow-indigo-100/50"
              >
                <p className="text-[18px] font-black text-slate-900 leading-none">2+</p>
                <p className="text-[8px] text-slate-400 uppercase tracking-[0.2em] mt-0.5">Years Exp</p>
              </SpotlightCard>
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-8 flex items-center gap-3 z-10"
      >
        <div className="h-px w-10 bg-gradient-to-r from-violet-400/40 to-transparent" />
        <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400">Scroll to explore</span>
      </motion.div>


    </section>
  );
};

export default Hero;
