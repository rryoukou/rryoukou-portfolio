"use client";
import { useState, useRef, useEffect } from "react";
import { Mail, Github, Linkedin, ArrowRight, CheckCircle2, Send } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import AnimatedContent from "@/components/reactbits/AnimatedContent";
import DecryptedText from "@/components/reactbits/DecryptedText";
import ShinyText from "@/components/reactbits/ShinyText";

const socials = [
  {
    name: "Email",
    icon: Mail,
    link: "mailto:rryoukou14@gmail.com",
    label: "rryoukou14@gmail.com",
    spotlightColor: "rgba(124, 58, 237, 0.08)" as `rgba(${number}, ${number}, ${number}, ${number})`,
    hoverBorder: "hover:border-violet-300",
    hoverBg: "hover:bg-violet-50",
    iconHoverBg: "group-hover:bg-violet-100 group-hover:border-violet-200",
    iconHoverColor: "group-hover:text-violet-600",
    titleHover: "group-hover:text-violet-700",
    arrowHover: "group-hover:text-violet-500",
    dot: "bg-violet-400",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/rryoukou",
    label: "github.com/rryoukou",
    spotlightColor: "rgba(15, 23, 42, 0.06)" as `rgba(${number}, ${number}, ${number}, ${number})`,
    hoverBorder: "hover:border-slate-400",
    hoverBg: "hover:bg-slate-50",
    iconHoverBg: "group-hover:bg-slate-100 group-hover:border-slate-300",
    iconHoverColor: "group-hover:text-slate-800",
    titleHover: "group-hover:text-slate-900",
    arrowHover: "group-hover:text-slate-600",
    dot: "bg-slate-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "#",
    label: "Let's connect",
    spotlightColor: "rgba(37, 99, 235, 0.08)" as `rgba(${number}, ${number}, ${number}, ${number})`,
    hoverBorder: "hover:border-blue-300",
    hoverBg: "hover:bg-blue-50",
    iconHoverBg: "group-hover:bg-blue-100 group-hover:border-blue-200",
    iconHoverColor: "group-hover:text-blue-600",
    titleHover: "group-hover:text-blue-700",
    arrowHover: "group-hover:text-blue-500",
    dot: "bg-blue-400",
  },
];

export default function Contact() {
  const [status,    setStatus]    = useState<"idle" | "sending" | "success">("idle");
  const [btnText,   setBtnText]   = useState("Send Message");
  const [charCount, setCharCount] = useState(0);
  const MAX = 500;
  const formRef    = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const btnRef     = useRef<HTMLButtonElement>(null);

  const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#";
  const scramble = (txt: string, cb: (t: string) => void) => {
    let it = 0;
    const iv = setInterval(() => {
      cb(txt.split("").map((c, i) => (i < it ? txt[i] : CHARS[Math.floor(Math.random() * CHARS.length)])).join(""));
      if (it++ >= txt.length) clearInterval(iv);
    }, 28);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    if (btnRef.current) {
      gsap.timeline()
        .to(btnRef.current, { x: () => (Math.random() - .5) * 8, y: () => (Math.random() - .5) * 8, duration: .08, repeat: 6, yoyo: true, ease: "none" })
        .to(btnRef.current, { x: 0, y: 0, duration: .1 });
      scramble("Transmitting…", setBtnText);
    }
    setTimeout(() => gsap.to(formRef.current, { opacity: 0, y: -16, duration: .4, onComplete: () => setStatus("success") }), 2200);
  };

  useEffect(() => {
    if (status === "success" && successRef.current)
      gsap.fromTo(successRef.current, { opacity: 0, y: 20, scale: .95 }, { opacity: 1, y: 0, scale: 1, duration: .7, ease: "power3.out" });
    if (status === "idle") {
      setBtnText("Send Message");
      setCharCount(0);
      if (formRef.current) gsap.set(formRef.current, { opacity: 1, y: 0 });
    }
  }, [status]);

  const hFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    gsap.to(e.target, { boxShadow: "0 0 0 3px rgba(124,58,237,0.15)", duration: .25 });
  const hBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    gsap.to(e.target, { boxShadow: "none", duration: .25 });

  const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
  const inp = "w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-800 placeholder-slate-300 focus:outline-none focus:border-violet-400 transition-colors";

  return (
    <section id="contact" className="py-32 px-8 bg-white relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-[0.25] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[320px] bg-violet-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: .7, ease }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-slate-200"
        >
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-3">003 / 004 — Get in Touch</p>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black text-slate-900 leading-[0.95] tracking-[-0.03em] uppercase">
              LET&apos;S<br /><span className="gradient-text">COLLABORATE</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-[220px] leading-relaxed">
            Available for freelance, full-time, and interesting partnerships. Response:{" "}
            <ShinyText text="fast." color="#5b21b6" shineColor="#7c3aed" speed={2.5} className="font-semibold" />
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — social links */}
          <div>
            <div className="space-y-3 mb-8">
              {socials.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <AnimatedContent
                    key={s.name}
                    distance={32}
                    direction="horizontal"
                    reverse
                    delay={idx * 0.1}
                    duration={0.65}
                    ease="power3.out"
                  >
                    <SpotlightCard
                      spotlightColor={s.spotlightColor}
                      className={`group relative`}
                    >
                      <a
                        href={s.link}
                        className={`flex items-center gap-4 px-5 py-4 bg-white border border-slate-200 ${s.hoverBorder} ${s.hoverBg} transition-all duration-300 rounded-xl overflow-hidden`}
                      >
                        {/* Left accent bar */}
                        <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${s.dot} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl`} />

                        <div className={`w-10 h-10 bg-slate-50 border border-slate-200 ${s.iconHoverBg} flex items-center justify-center rounded-lg transition-all duration-300 shrink-0 group-hover:scale-110`}>
                          <Icon size={15} className={`text-slate-500 ${s.iconHoverColor} transition-colors duration-300`} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className={`text-slate-700 text-sm font-bold tracking-tight ${s.titleHover} transition-colors duration-300`}>
                            <DecryptedText
                              text={s.name}
                              animateOn="hover"
                              sequential
                              speed={40}
                              className="text-inherit font-bold"
                              encryptedClassName="text-violet-300 font-bold"
                              revealDirection="start"
                            />
                          </p>
                          <p className="text-slate-400 text-xs truncate">{s.label}</p>
                        </div>

                        <ArrowRight
                          size={14}
                          className={`text-slate-300 ${s.arrowHover} group-hover:translate-x-1 transition-all duration-300 shrink-0`}
                        />
                      </a>
                    </SpotlightCard>
                  </AnimatedContent>
                );
              })}
            </div>

            {/* Response time card */}
            <AnimatedContent distance={20} direction="vertical" delay={0.35} duration={0.6}>
              <SpotlightCard
                spotlightColor="rgba(124, 58, 237, 0.06)"
                className="flex items-center gap-3 p-4 bg-white border border-violet-100 rounded-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-50 border border-violet-200 flex items-center justify-center shrink-0">
                  <Send size={12} className="text-violet-500" />
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Responses within{" "}
                  <ShinyText text="24 hours" color="#5b21b6" shineColor="#7c3aed" speed={3} className="font-bold" />.
                </p>
              </SpotlightCard>
            </AnimatedContent>
          </div>

          {/* Right — form */}
          <AnimatedContent distance={32} direction="horizontal" delay={0.15} duration={0.7} ease="power3.out">
            <SpotlightCard
              spotlightColor="rgba(124, 58, 237, 0.07)"
              className="relative bg-white border border-slate-200 rounded-xl p-8 min-h-[400px] flex flex-col justify-center overflow-hidden shadow-sm"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-indigo-400 to-transparent rounded-t-xl" />

              {status === "success" ? (
                <div ref={successRef} className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                    <CheckCircle2 size={26} className="text-emerald-600" />
                  </div>
                  <h4 className="text-slate-800 font-bold text-base mb-1 uppercase tracking-tight">Message Sent!</h4>
                  <p className="text-slate-500 text-sm mb-5">I&apos;ll respond as soon as possible.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-violet-600 text-xs font-bold uppercase tracking-widest hover:text-violet-800 transition-colors"
                  >
                    Send another ↩
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Name",  ph: "Your name",        type: "text"  },
                      { label: "Email", ph: "your@email.com",   type: "email" },
                    ].map((f) => (
                      <div key={f.label} className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">{f.label}</label>
                        <input
                          required type={f.type} placeholder={f.ph}
                          onFocus={hFocus} onBlur={hBlur}
                          className={inp}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Subject</label>
                    <input
                      required placeholder="What's this about?"
                      onFocus={hFocus} onBlur={hBlur}
                      className={inp}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Message</label>
                      <span className={`text-[10px] font-mono ${charCount > MAX * .9 ? "text-amber-500" : "text-slate-300"}`}>
                        {charCount}/{MAX}
                      </span>
                    </div>
                    <div className="relative">
                      <textarea
                        required rows={4} maxLength={MAX}
                        placeholder="Tell me about your project…"
                        onChange={(e) => setCharCount(e.target.value.length)}
                        onFocus={hFocus} onBlur={hBlur}
                        className={`${inp} resize-none`}
                      />
                      {/* Character progress bar */}
                      <div className="absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden rounded-b-lg">
                        <div
                          className={`h-full transition-all duration-300 ${charCount > MAX * .9 ? "bg-amber-400" : "bg-gradient-to-r from-violet-500 to-indigo-400"}`}
                          style={{ width: `${(charCount / MAX) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    ref={btnRef} type="submit" disabled={status === "sending"}
                    className="group relative w-full py-3.5 text-[11px] font-black uppercase tracking-[0.2em] text-white bg-violet-700 hover:bg-violet-800 disabled:opacity-60 transition-all duration-300 flex items-center justify-center gap-2 rounded-lg shadow-md shadow-violet-200 overflow-hidden"
                  >
                    {/* Shimmer sweep on hover */}
                    <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-600 bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-12" />
                    <span className="relative flex items-center gap-2">
                      {status === "sending"
                        ? <span className="font-mono text-xs">{btnText}</span>
                        : <>{btnText}<ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" /></>
                      }
                    </span>
                  </button>
                </form>
              )}
            </SpotlightCard>
          </AnimatedContent>
        </div>
      </div>


    </section>
  );
}
