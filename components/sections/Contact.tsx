"use client";
import { useState, useRef, useEffect } from "react";
import { Mail, Github, Linkedin, Send, ShieldCheck } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [btnText, setBtnText] = useState("Initialize Link");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Scramble Text Effect Logic
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
  
  const scrambleText = (finalText: string, callback: (text: string) => void) => {
    let iteration = 0;
    const interval = setInterval(() => {
      callback(
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Button Glitch and Scramble Sequence
    if (buttonRef.current) {
      const tl = gsap.timeline();
      tl.to(buttonRef.current, {
        x: () => (Math.random() - 0.5) * 10,
        y: () => (Math.random() - 0.5) * 10,
        duration: 0.1,
        repeat: 5,
        yoyo: true,
        ease: "none",
      }).to(buttonRef.current, { x: 0, y: 0, duration: 0.1 });

      scrambleText("TRANSMITTING DATA... [ENCRYPTED]", setBtnText);
    }
    
    // Simulate Stark Tech Data Transmission
    setTimeout(() => {
      // Elegant Fade Out Form
      if (formRef.current) {
        gsap.to(formRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          onComplete: () => {
            setStatus("success");
          }
        });
      }
    }, 2500);
  };

  useEffect(() => {
    if (status === "success" && successRef.current) {
      gsap.fromTo(successRef.current, 
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power4.out" }
      );
    }
    if (status === "idle") {
        setBtnText("Initialize Link");
        if (formRef.current) {
            gsap.set(formRef.current, { opacity: 1, y: 0 });
        }
    }
  }, [status]);

  // Magnetic Effect Logic
  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(target, {
      x: x * 0.3,
      y: y * 0.3,
      scale: 1.05,
      duration: 0.4,
      ease: "power2.out",
    });
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  };

  // HUD Focus Effect Logic
  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const parent = e.target.parentElement;
    if (parent) {
      gsap.to(e.target, {
        borderColor: "rgba(220, 38, 38, 0.8)",
        boxShadow: "0 0 15px rgba(220, 38, 38, 0.4)",
        duration: 0.3,
      });
      // Add pulsing effect to the shadow
      gsap.to(e.target, {
        boxShadow: "0 0 25px rgba(220, 38, 38, 0.6)",
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    gsap.killTweensOf(e.target);
    gsap.to(e.target, {
      borderColor: "rgba(30, 41, 59, 1)",
      boxShadow: "none",
      duration: 0.3,
    });
  };

  return (
    <section id="contact" className="py-32 px-6 bg-slate-950 relative overflow-hidden">
      {/* Background HUD Scanline */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-red-600/20 animate-scanline"></div>
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start relative z-10">
        
        {/* Left Side: Briefing */}
        <div data-aos="fade-right">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.3em] mb-3">Secure Connection</h2>
          <h3 className="text-4xl md:text-5xl font-black text-white italic mb-8">Establish Neural Link</h3>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed">
            Ready to collaborate on the next high-stakes mission? 
            Send an encrypted message or connect via the neural links below. 
            Response time: <span className="text-red-500 font-bold italic">Spider-Speed</span>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {[
              { name: "Email", icon: <Mail size={20} />, link: "mailto:rryoukou14@gmail.com" },
              { name: "GitHub", icon: <Github size={20} />, link: "https://github.com/rryoukou" },
              { name: "LinkedIn", icon: <Linkedin size={20} />, link: "#" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                className="flex flex-col items-center p-6 rounded-xl bg-slate-900/40 border border-slate-800 hover:border-red-600/50 hover:bg-slate-900 transition-all group relative overflow-hidden"
              >
                <div className="text-slate-500 group-hover:text-red-500 transition-colors mb-2 pointer-events-none">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-white pointer-events-none">
                  {item.name}
                </span>
                {/* HUD Reticle Corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-red-600/0 group-hover:border-red-600/50 transition-all"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-600/0 group-hover:border-red-600/50 transition-all"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-600/0 group-hover:border-red-600/50 transition-all"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-red-600/0 group-hover:border-red-600/50 transition-all"></div>
              </a>
            ))}
          </div>

          <div className="p-4 rounded-lg bg-red-600/5 border border-red-900/20">
             <div className="flex items-center gap-3 text-red-500 mb-2">
               <ShieldCheck size={16} />
               <span className="text-[10px] font-black uppercase tracking-widest">Security Protocol</span>
             </div>
             <p className="text-[10px] text-slate-500 italic">
               All transmissions are encrypted via Stark Industries high-level security protocols.
             </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div data-aos="fade-left" className="relative p-8 rounded-3xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl min-h-[400px] flex flex-col justify-center">
          {status === "success" ? (
            <div ref={successRef} className="success-msg flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                <ShieldCheck className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-black text-white italic uppercase tracking-tighter">Neural Link Established</h4>
              <p className="text-red-500 font-bold tracking-[0.2em] text-xs mt-2">ACCESS GRANTED.</p>
              <p className="text-slate-400 mt-4 text-sm italic">Transmission payload delivered successfully.</p>
              <Button onClick={() => setStatus("idle")} variant="link" className="text-red-500 mt-8 uppercase tracking-widest font-black text-[10px] hover:text-white transition-colors">Terminate & Re-link</Button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Identity</label>
                  <input 
                    required 
                    placeholder="Alias" 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Frequency</label>
                  <input 
                    required 
                    type="email" 
                    placeholder="Email@domain.com" 
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Mission Intel</label>
                <textarea 
                  required 
                  rows={4} 
                  placeholder="Decipher the message..." 
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none resize-none transition-all" 
                />
              </div>
              <Button 
                ref={buttonRef}
                disabled={status === "sending"} 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-[0.2em] py-6 rounded-xl shadow-lg shadow-red-900/30 transition-all group overflow-hidden"
              >
                {status === "sending" ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    {btnText}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {btnText}
                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes scanline {
          0% { top: 0; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scanline {
          animation: scanline 4s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;
