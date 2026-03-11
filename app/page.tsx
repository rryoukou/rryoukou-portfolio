"use client";
import CursorGlow from "@/components/CursorGlow";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Mail, Linkedin, ArrowRight, Heart } from "lucide-react";
export default function Home() {

const [open, setOpen] = useState(false);

type Project = {
title: string;
desc: string;
tech: string[];
github: string;
demo: string | null;
image?: string;
};

const skills = [
"html",
"css",
"javascript",
"typescript",
"react",
"nextjs",
"tailwind",
"php",
"laravel",
"mysql",
"github",
"vercel"
];

const projects: Project[] = [
{
title: "Movie App",
desc: "Web aplikasi untuk menampilkan daftar film menggunakan React dan API film.",
tech: ["react", "javascript", "css"],
github: "https://github.com/rryoukou/Movie",
demo: "https://final-project-sandy-rho.vercel.app/"
},

{
title: "Serbu Computer",
desc: "Website toko komputer berbasis Laravel dengan fitur katalog produk.",
tech: ["laravel", "php", "mysql"],
github: "https://github.com/rryoukou/serbu-computer",
demo: null
},

{
title: "Football Shopping",
desc: "Website toko jersey sepak bola menggunakan HTML dan CSS.",
tech: ["html", "css"],
github: "https://github.com/rryoukou/football-shoping",
demo: null
},

{
title: "Sistem Perpustakaan",
desc: "Website sistem peminjaman buku berbasis PHP dan MySQL dengan fitur login siswa dan transaksi peminjaman.",
tech: ["php", "mysql", "html", "css"],
github: "https://github.com/rryoukou/Perpustakaan",
demo: null
},

{
title: "Portofolio Sederhana",
desc: "Website portofolio pribadi sederhana untuk menampilkan profil dan project.",
tech: ["html", "css", "javascript"],
github: "https://github.com/rryoukou/Portofolio-Sederhana",
demo: null
}
];

return (
<main className="relative bg-black text-white overflow-hidden">

<CursorGlow />

{/* NAVBAR */}
<motion.nav
initial={{ y: -80, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ type: "spring", stiffness: 80, damping: 14 }}
className="fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/50 border-b border-white/10"
>

{/* GLOW LINE */}
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent opacity-50"></div>

<div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

{/* LOGO */}
<motion.h1
whileHover={{ scale: 1.08 }}
transition={{ type: "spring", stiffness: 200 }}
className="font-bold text-xl tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer"
>
rryoukou
</motion.h1>

{/* DESKTOP MENU */}
<motion.div
initial="hidden"
animate="show"
variants={{
hidden: {},
show: {
transition: {
staggerChildren: 0.1,
delayChildren: 0.2,
},
},
}}
className="hidden md:flex items-center gap-8 text-sm text-gray-300"
>

{[
{ name: "About", link: "#about" },
{ name: "Skills", link: "#skills" },
{ name: "Projects", link: "#projects" },
{ name: "Contact", link: "#contact" },
].map((item, i) => (

<motion.a
key={i}
href={item.link}
variants={{
hidden: { opacity: 0, y: -15, filter: "blur(6px)" },
show: { opacity: 1, y: 0, filter: "blur(0px)" },
}}
whileHover={{ y: -2 }}
className="relative group"
>

<span className="transition group-hover:text-white">
{item.name}
</span>

{/* UNDERLINE */}
<span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 transition-all duration-300 group-hover:w-full"></span>

</motion.a>

))}

{/* GITHUB BUTTON */}
<motion.a
variants={{
hidden: { opacity: 0, y: -15 },
show: { opacity: 1, y: 0 },
}}
whileHover={{
scale: 1.05,
y: -2,
}}
whileTap={{ scale: 0.95 }}
href="https://github.com/rryoukou"
target="_blank"
rel="noopener noreferrer"
className="ml-4 relative px-5 py-2 rounded-xl text-xs font-medium text-white
bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500
shadow-lg shadow-blue-500/20 hover:shadow-purple-500/40
transition-all duration-300"
>
GitHub
</motion.a>

</motion.div>

{/* MOBILE BUTTON */}
<button
onClick={() => setOpen(!open)}
className="md:hidden text-white text-2xl hover:scale-110 transition"
>
☰
</button>

</div>

{/* MOBILE MENU */}
{open && (

<motion.div
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.3 }}
className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-2 text-gray-300 backdrop-blur-xl bg-black/60 border-t border-white/10"
>

{[
{ name: "About", link: "#about" },
{ name: "Skills", link: "#skills" },
{ name: "Projects", link: "#projects" },
{ name: "Contact", link: "#contact" },
].map((item, i) => (

<a
key={i}
href={item.link}
onClick={() => setOpen(false)}
className="hover:text-white transition py-1"
>
{item.name}
</a>

))}

<a
href="https://github.com/rryoukou"
target="_blank"
className="mt-2 px-5 py-2 rounded-xl text-xs font-medium text-white text-center
bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"
>
GitHub
</a>

</motion.div>

)}

</motion.nav>

{/* HERO */}
<motion.section
initial="hidden"
animate="show"
variants={{
hidden: {},
show: {
transition: {
staggerChildren: 0.2,
delayChildren: 0.4,
},
},
}}
className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden"
>

{/* FUTURISTIC GRID */}
<div className="absolute inset-0 -z-10 opacity-[0.05]
bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)]
bg-[size:40px_40px]"></div>

{/* BACKGROUND GLOW */}
<div className="absolute inset-0 -z-10">

<motion.div
animate={{ x: [0, 80, -80, 0], y: [0, -40, 40, 0] }}
transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
className="absolute top-24 left-1/2 -translate-x-1/2 w-[850px] h-[450px]
bg-gradient-to-r from-blue-500/25 via-purple-500/25 to-indigo-500/25
blur-[140px] opacity-50"
/>

<div className="absolute bottom-10 left-1/3 w-[400px] h-[400px]
bg-purple-500/10 blur-[120px] rounded-full"></div>

{/* RADIAL GLOW */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[900px] h-[900px]
bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent
blur-[180px]"></div>
</div>

</div>

{/* FLOATING PARTICLES */}
<div className="absolute inset-0 pointer-events-none">

{[...Array(18)].map((_, i) => (

<motion.span
key={i}
className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
initial={{ opacity: 0, y: 40 }}
animate={{
opacity: [0, 1, 0],
y: [-40, -120],
x: [0, Math.random() * 80 - 40],
}}
transition={{
duration: 6 + Math.random() * 3,
repeat: Infinity,
delay: i * 0.3,
}}
style={{
left: `${Math.random() * 100}%`,
bottom: 0,
}}
/>

))}

</div>

{/* PROFILE */}
<motion.div
variants={{
hidden: { opacity: 0, scale: 0.6, y: 80, filter: "blur(10px)" },
show: {
opacity: 1,
scale: 1,
y: 0,
filter: "blur(0px)",
transition: { type: "spring", stiffness: 120, damping: 14 },
},
}}
whileHover={{
rotateX: 6,
rotateY: -6,
scale: 1.05
}}
className="relative mb-10 flex items-center justify-center"
>

{/* ORBIT RING */}
<motion.div
animate={{ rotate: 360 }}
transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
className="absolute w-56 h-56 rounded-full border border-purple-500/20"
/>

{/* TECH ORBIT ICONS */}
<motion.div
animate={{ rotate: 360 }}
transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
className="absolute w-72 h-72 rounded-full"
>

<span className="absolute top-0 left-1/2 -translate-x-1/2 text-blue-400 text-sm">⚛️</span>
<span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-purple-400 text-sm">⚡</span>
<span className="absolute left-0 top-1/2 -translate-y-1/2 text-indigo-400 text-sm">💻</span>
<span className="absolute right-0 top-1/2 -translate-y-1/2 text-blue-400 text-sm">🚀</span>

</motion.div>

{/* OUTER GLOW */}
<div className="absolute w-52 h-52 rounded-full
bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500
blur-3xl opacity-30"></div>

<motion.img
src="/Profile.jpg"
alt="ryoukou profile"
whileHover={{
scale: 1.08,
rotate: 2
}}
transition={{ type: "spring", stiffness: 300 }}
className="relative w-40 h-40 md:w-44 md:h-44 rounded-full border-4 border-gray-800 object-cover shadow-2xl"
/>

</motion.div>

{/* TITLE */}
<motion.h1
variants={{
hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
show: {
opacity: 1,
y: 0,
filter: "blur(0px)",
transition: { duration: 0.8 },
},
}}
animate={{ y: [0, -3, 0] }}
transition={{ duration: 4, repeat: Infinity }}
className="text-5xl md:text-6xl font-bold leading-tight"
>
Hello I'm{" "}
<span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
ryoukou
</span>
</motion.h1>

{/* TYPE ANIMATION */}
<motion.div
variants={{
hidden: { opacity: 0, y: 20 },
show: {
opacity: 1,
y: 0,
transition: { duration: 0.6 },
},
}}
>

<TypeAnimation
sequence={[
"Fullstack Developer",
2000,
"Laravel Developer",
2000,
"React Developer",
2000,
"Building Modern Web Apps",
2000,
]}
wrapper="span"
speed={50}
repeat={Infinity}
className="text-gray-400 text-lg md:text-xl"
/>

</motion.div>

{/* DESCRIPTION */}
<motion.p
variants={{
hidden: { opacity: 0, y: 30 },
show: {
opacity: 1,
y: 0,
transition: { duration: 0.7 },
},
}}
className="max-w-xl text-gray-400 text-sm md:text-base leading-relaxed mt-3"
>

I build modern, fast, and scalable web applications using
<span className="text-blue-400"> Laravel</span>,
<span className="text-purple-400"> React</span>, and modern web technologies.

</motion.p>

{/* BUTTONS */}
<motion.div
variants={{
hidden: { opacity: 0, y: 20 },
show: {
opacity: 1,
y: 0,
transition: { duration: 0.7 },
},
}}
className="flex gap-4 mt-8 flex-wrap justify-center"
>

{/* PROJECT BUTTON */}
<motion.a
whileHover={{ scale: 1.08, y: -4 }}
whileTap={{ scale: 0.95 }}
transition={{ type: "spring", stiffness: 300 }}
href="#projects"
className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-500 px-7 py-3 rounded-xl font-medium
shadow-lg shadow-blue-500/20 hover:shadow-purple-500/40
transition-all duration-300"
>

<span className="absolute -left-20 top-0 w-20 h-full bg-white/30 blur-lg rotate-12
group-hover:left-[120%] transition-all duration-1000"></span>

View Projects

</motion.a>

{/* GITHUB BUTTON */}
<motion.a
whileHover={{ scale: 1.08, y: -4 }}
whileTap={{ scale: 0.95 }}
transition={{ type: "spring", stiffness: 300 }}
href="https://github.com/rryoukou"
target="_blank"
rel="noopener noreferrer"
className="border border-gray-700 px-7 py-3 rounded-xl
hover:bg-gray-900 hover:border-gray-500
transition-all duration-300"
>
GitHub
</motion.a>

</motion.div>

{/* SCROLL INDICATOR */}
<motion.div
animate={{ y: [0, 10, 0] }}
transition={{ duration: 1.8, repeat: Infinity }}
className="absolute bottom-10 flex flex-col items-center text-gray-500 text-sm"
>
<span>Scroll</span>
<div className="w-[2px] h-6 bg-gradient-to-b from-blue-400 to-transparent mt-1"></div>
</motion.div>

</motion.section>

{/* ABOUT */}
<motion.section
  id="about"
  className="py-36 px-6 relative overflow-hidden"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }}
>

{/* FLOATING PARTICLES */}
<div className="absolute inset-0 pointer-events-none">
  {[...Array(18)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
      animate={{
        y: [-40, -120],
        x: [0, Math.random() * 80 - 40],
      }}
      transition={{
        duration: 8 + Math.random() * 3,
        repeat: Infinity,
        ease: "linear",
        delay: i * 0.3,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        bottom: 0,
      }}
    />
  ))}
</div>

{/* BACKGROUND GLOW */}
<motion.div
  animate={{
    x: [0, 60, -60, 0],
    y: [0, -30, 30, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 top-24 -translate-x-1/2 w-[750px] h-[420px]
  bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20
  blur-[140px] opacity-50"
/>

<div className="max-w-6xl mx-auto relative">

{/* TITLE */}
<motion.h2
  variants={{
    hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9 },
    },
  }}
  className="text-4xl md:text-5xl font-bold text-center mb-24
  bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400
  bg-clip-text text-transparent"
>
About Me
</motion.h2>

<div className="grid md:grid-cols-2 gap-16 items-center">

{/* LEFT TEXT */}
<motion.div
  variants={{
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0 },
  }}
  className="space-y-6 text-gray-300 text-lg leading-relaxed"
>

<p>
Halo! Saya{" "}
<span className="text-blue-400 font-semibold">
Ryoukou Arya Nugroho
</span>, seorang developer yang memiliki ketertarikan besar dalam dunia{" "}
<span className="text-purple-400 font-semibold">
Web Development
</span>.
</p>

<p>
Saya memiliki passion dalam membangun website modern yang cepat,
interaktif, dan memiliki pengalaman pengguna yang baik. Saya fokus
mengembangkan aplikasi web menggunakan teknologi modern seperti{" "}
<span className="text-blue-400 font-semibold">React</span>,{" "}
<span className="text-purple-400 font-semibold">Next.js</span>, dan{" "}
<span className="text-indigo-400 font-semibold">Laravel</span>.
</p>

<p>
Saya juga senang mempelajari teknologi baru, meningkatkan kemampuan
coding, serta membuat project yang dapat membantu menyelesaikan
masalah nyata melalui solusi digital.
</p>

</motion.div>

{/* RIGHT CARD */}
<motion.div
  variants={{
    hidden: { opacity: 0, x: 60, scale: 0.9 },
    show: { opacity: 1, x: 0, scale: 1 },
  }}
  animate={{ y: [0, -6, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  whileHover={{ scale: 1.05 }}
  className="relative rounded-3xl p-12
  bg-gradient-to-b from-white/5 to-white/[0.02]
  backdrop-blur-xl border border-white/10
  shadow-2xl overflow-hidden"
>

<div className="grid grid-cols-2 gap-10 text-center">

<motion.div whileHover={{ scale: 1.1 }}>
<h3 className="text-4xl font-bold text-blue-400">10+</h3>
<p className="text-gray-400 text-sm mt-1">Projects</p>
</motion.div>

<motion.div whileHover={{ scale: 1.1 }}>
<h3 className="text-4xl font-bold text-purple-400">8+</h3>
<p className="text-gray-400 text-sm mt-1">Technologies</p>
</motion.div>

<motion.div whileHover={{ scale: 1.1 }}>
<h3 className="text-4xl font-bold text-indigo-400">2+</h3>
<p className="text-gray-400 text-sm mt-1">Years Learning</p>
</motion.div>

<motion.div whileHover={{ scale: 1.1 }}>
<h3 className="text-4xl font-bold text-blue-400">∞</h3>
<p className="text-gray-400 text-sm mt-1">Ideas</p>
</motion.div>

</div>

</motion.div>

</div>

</div>

</motion.section>

{/* SKILLS */}
<motion.section
  id="skills"
  className="py-36 px-6 relative overflow-hidden"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  }}
>

{/* FLOATING PARTICLES */}
<div className="absolute inset-0 pointer-events-none">
  {[...Array(20)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: [0, 1, 0],
        y: [-40, -120],
        x: [0, Math.random() * 80 - 40],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        delay: i * 0.3,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        bottom: 0,
      }}
    />
  ))}
</div>

{/* BACKGROUND LIGHT */}
<motion.div
  animate={{
    x: [0, 80, -80, 0],
    y: [0, -40, 40, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 top-24 -translate-x-1/2 w-[850px] h-[450px] 
  bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 
  blur-[140px] opacity-50"
/>

<div className="max-w-7xl mx-auto relative">

{/* TITLE */}
<motion.h2
  variants={{
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9 },
    },
  }}
  className="text-4xl md:text-5xl font-bold text-center mb-24
  bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400
  bg-clip-text text-transparent flex items-center justify-center gap-3"
>

<motion.span
  animate={{ rotate: [0, 8, -8, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
>
⚡
</motion.span>

My Skills

</motion.h2>

{/* GRID */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

{skills.map((skill, index) => (

<motion.div
key={skill}
variants={{
hidden: { opacity: 0, y: 90, scale: 0.9 },
show: {
opacity: 1,
y: 0,
scale: 1,
transition: { type: "spring", stiffness: 120 },
},
}}
animate={{
y: [0, -6, 0],
}}
transition={{
duration: 6,
repeat: Infinity,
delay: index * 0.3,
}}
whileHover={{ y: -14, scale: 1.05 }}
className="group relative rounded-3xl p-8 text-center
bg-gradient-to-b from-white/5 to-white/[0.02]
backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
>

{/* SHINE EFFECT */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
  <div className="absolute -left-20 top-0 w-40 h-full bg-white/20 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
</div>

{/* HOVER GLOW */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-2xl"></div>

{/* ICON */}
<div className="flex justify-center mb-5 relative">

<motion.img
whileHover={{ scale: 1.2, rotate: 8 }}
transition={{ type: "spring", stiffness: 300 }}
src={`https://skillicons.dev/icons?i=${skill}`}
alt={skill}
className="w-12 h-12"
/>

</div>

{/* TEXT */}
<p className="capitalize text-gray-300 font-medium">
{skill}
</p>

</motion.div>

))}

</div>

</div>

</motion.section>

{/* PROJECTS */}
<motion.section
  id="projects"
  className="py-36 px-6 relative overflow-hidden"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.3,
      },
    },
  }}
>

{/* FLOATING PARTICLES */}
<div className="absolute inset-0 pointer-events-none">
  {[...Array(20)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: [0, 1, 0],
        y: [-40, -120],
        x: [0, Math.random() * 80 - 40],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        delay: i * 0.3,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        bottom: 0,
      }}
    />
  ))}
</div>

{/* BACKGROUND LIGHT */}
<motion.div
  animate={{
    x: [0, 80, -80, 0],
    y: [0, -40, 40, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 top-24 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-[140px] opacity-50"
/>

<div className="max-w-7xl mx-auto relative">

{/* TITLE */}
<motion.h2
  variants={{
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.9 },
    },
  }}
  className="text-4xl md:text-5xl font-bold text-center mb-24 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent flex items-center justify-center gap-3"
>

<motion.span
  animate={{ rotate: [0, 8, -8, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
>
🚀
</motion.span>

My Projects

</motion.h2>

{/* GRID */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

{projects.map((project, index) => (

<motion.div
key={index}
variants={{
hidden: { opacity: 0, y: 90, scale: 0.9 },
show: {
opacity: 1,
y: 0,
scale: 1,
transition: { type: "spring", stiffness: 120 },
},
}}
animate={{
y: [0, -6, 0],
}}
transition={{
duration: 6,
repeat: Infinity,
delay: index * 0.5,
}}
whileHover={{ y: -14, scale: 1.05 }}
className="group relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 shadow-xl"
>

{/* SHINE EFFECT */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none">
  <div className="absolute -left-20 top-0 w-40 h-full bg-white/20 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
</div>

{/* HOVER GLOW */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-2xl"></div>

{/* IMAGE */}
{project.image && (
<div className="overflow-hidden">
<motion.img
src={project.image}
alt={project.title}
whileHover={{ scale: 1.1 }}
transition={{ duration: 0.4 }}
className="w-full h-44 object-cover"
/>
</div>
)}

{/* CONTENT */}
<div className="p-7 relative">

{/* TITLE */}
<h3 className="text-xl font-semibold mb-3 transition bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-purple-400">
{project.title}
</h3>

{/* DESC */}
<p className="text-gray-400 text-sm mb-6 leading-relaxed">
{project.desc}
</p>

{/* TECH STACK */}
<div className="flex flex-wrap gap-2 mb-6">

{project.tech.map((tech, i) => (

<span
key={i}
className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-blue-500/20 hover:border-blue-400/40 transition"
>
{tech}
</span>

))}

</div>

{/* BUTTONS */}
<div className="flex items-center gap-3">

{project.demo && (

<motion.a
whileHover={{ scale: 1.08 }}
whileTap={{ scale: 0.95 }}
href={project.demo}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-sm
shadow-lg shadow-blue-500/20 hover:shadow-purple-500/40 transition-all duration-300"
>

<ExternalLink size={16} />

Live Demo

</motion.a>

)}

{project.github && (

<motion.a
whileHover={{ scale: 1.08 }}
whileTap={{ scale: 0.95 }}
href={project.github}
target="_blank"
rel="noopener noreferrer"
className="flex items-center gap-2 border border-gray-700 px-4 py-2 rounded-lg text-sm
hover:bg-gray-900 hover:border-gray-500 transition-all duration-300"
>

<Github size={16} />

GitHub

</motion.a>

)}

</div>

</div>

</motion.div>

))}

</div>

</div>

</motion.section>

 {/* CONTACT */}
<motion.section
  id="contact"
  className="py-36 px-6 relative overflow-hidden"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }}
>

{/* FLOATING PARTICLES */}
<div className="absolute inset-0 pointer-events-none">
  {[...Array(18)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: [0, 1, 0],
        y: [-40, -120],
        x: [0, Math.random() * 80 - 40],
      }}
      transition={{
        duration: 6 + Math.random() * 3,
        repeat: Infinity,
        delay: i * 0.3,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        bottom: 0,
      }}
    />
  ))}
</div>

{/* BACKGROUND GLOW ANIMATION */}
<motion.div
  animate={{
    x: [0, 60, -60, 0],
    y: [0, -30, 30, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 top-24 -translate-x-1/2 w-[750px] h-[420px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-[140px] opacity-50"
/>

<div className="max-w-5xl mx-auto text-center relative">

{/* TITLE */}
<motion.h2
variants={{
hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
show: {
opacity: 1,
y: 0,
filter: "blur(0px)",
transition: { duration: 0.9 },
},
}}
className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent flex items-center justify-center gap-3"
>

<motion.span
animate={{ rotate: [0, 10, -10, 0] }}
transition={{ duration: 6, repeat: Infinity }}
>
📬
</motion.span>

Contact Me

</motion.h2>

{/* DESCRIPTION */}
<motion.p
variants={{
hidden: { opacity: 0, y: 40 },
show: {
opacity: 1,
y: 0,
transition: { duration: 0.7 },
},
}}
className="text-gray-400 mb-20 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
>
Jika tertarik bekerja sama, membuat project, atau sekadar berdiskusi
tentang web development, jangan ragu untuk menghubungi saya.
</motion.p>

{/* CONTACT GRID */}
<div className="grid md:grid-cols-3 gap-8">

{/* CARD GITHUB */}
<motion.a
variants={{
hidden: { opacity: 0, y: 80 },
show: { opacity: 1, y: 0 },
}}
animate={{ y: [0, -6, 0] }}
transition={{ duration: 6, repeat: Infinity }}
whileHover={{ y: -14, scale: 1.06 }}
whileTap={{ scale: 0.95 }}
href="https://github.com/rryoukou"
target="_blank"
rel="noopener noreferrer"
className="group relative rounded-3xl p-8 flex flex-col items-center gap-4
bg-gradient-to-b from-white/5 to-white/[0.02]
backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
>

{/* SHINE EFFECT */}
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
  <div className="absolute -left-20 top-0 w-40 h-full bg-white/20 blur-2xl rotate-12 group-hover:left-[120%] transition-all duration-1000"></div>
</div>

<Github
size={38}
className="text-blue-400 group-hover:scale-125 transition duration-300"
/>

<h3 className="text-lg font-semibold group-hover:text-blue-400 transition">
GitHub
</h3>

<p className="text-xs text-gray-400">
View my repositories
</p>

</motion.a>

{/* CARD EMAIL */}
<motion.a
variants={{
hidden: { opacity: 0, y: 80 },
show: { opacity: 1, y: 0 },
}}
animate={{ y: [0, -6, 0] }}
transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
whileHover={{ y: -14, scale: 1.06 }}
whileTap={{ scale: 0.95 }}
href="mailto:rryoukou14@gmail.com"
className="group relative rounded-3xl p-8 flex flex-col items-center gap-4
bg-gradient-to-b from-white/5 to-white/[0.02]
backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-indigo-500/20 blur-2xl"></div>

<Mail
size={38}
className="text-purple-400 group-hover:scale-125 transition duration-300"
/>

<h3 className="text-lg font-semibold group-hover:text-purple-400 transition">
Email
</h3>

<p className="text-xs text-gray-400">
Send me a message
</p>

</motion.a>

{/* CARD LINKEDIN */}
<motion.a
variants={{
hidden: { opacity: 0, y: 80 },
show: { opacity: 1, y: 0 },
}}
animate={{ y: [0, -6, 0] }}
transition={{ duration: 6, repeat: Infinity, delay: 1 }}
whileHover={{ y: -14, scale: 1.06 }}
whileTap={{ scale: 0.95 }}
href="#"
className="group relative rounded-3xl p-8 flex flex-col items-center gap-4
bg-gradient-to-b from-white/5 to-white/[0.02]
backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-indigo-500/20 via-blue-500/20 to-purple-500/20 blur-2xl"></div>

<Linkedin
size={38}
className="text-indigo-400 group-hover:scale-125 transition duration-300"
/>

<h3 className="text-lg font-semibold group-hover:text-indigo-400 transition">
LinkedIn
</h3>

<p className="text-xs text-gray-400">
Connect with me
</p>

</motion.a>

</div>

</div>

</motion.section>

{/* FOOTER */}
<motion.footer
  className="relative border-t border-white/10 py-20 px-6 overflow-hidden"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }}
>

{/* FLOATING PARTICLES */}
<div className="absolute inset-0 pointer-events-none">
  {[...Array(16)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute w-1.5 h-1.5 bg-white/30 rounded-full"
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: [0, 1, 0],
        y: [-40, -120],
        x: [0, Math.random() * 80 - 40],
      }}
      transition={{
        duration: 6 + Math.random() * 4,
        repeat: Infinity,
        delay: i * 0.3,
      }}
      style={{
        left: `${Math.random() * 100}%`,
        bottom: 0,
      }}
    />
  ))}
</div>

{/* BACKGROUND GLOW ANIMATION */}
<motion.div
  animate={{
    x: [0, 60, -60, 0],
    y: [0, -30, 30, 0],
  }}
  transition={{
    duration: 18,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute left-1/2 top-0 -translate-x-1/2 w-[750px] h-[300px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-[140px] opacity-50"
/>

{/* TOP BORDER GLOW */}
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-40"></div>

<div className="max-w-6xl mx-auto relative grid md:grid-cols-3 gap-12 text-center md:text-left">

{/* BRAND */}
<motion.div
variants={{
hidden: { opacity: 0, y: 40 },
show: { opacity: 1, y: 0 },
}}
>

<motion.h3
animate={{ y: [0, -4, 0] }}
transition={{ duration: 4, repeat: Infinity }}
whileHover={{ scale: 1.08 }}
className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
>
rryoukou
</motion.h3>

<p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0 leading-relaxed">
Fullstack Developer building modern web applications using
Next.js, React, and Laravel.
</p>

</motion.div>

{/* NAVIGATION */}
<motion.div
variants={{
hidden: { opacity: 0, y: 40 },
show: { opacity: 1, y: 0 },
}}
className="flex flex-col gap-3 text-sm"
>

<span className="font-semibold text-white mb-3">
Navigation
</span>

<a
href="#about"
className="group flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-blue-400 transition"
>
<ArrowRight size={14} className="group-hover:translate-x-1 transition" />
About
</a>

<a
href="#projects"
className="group flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-blue-400 transition"
>
<ArrowRight size={14} className="group-hover:translate-x-1 transition" />
Projects
</a>

<a
href="#contact"
className="group flex items-center justify-center md:justify-start gap-2 text-gray-400 hover:text-blue-400 transition"
>
<ArrowRight size={14} className="group-hover:translate-x-1 transition" />
Contact
</a>

</motion.div>

{/* SOCIAL */}
<motion.div
variants={{
hidden: { opacity: 0, y: 40 },
show: { opacity: 1, y: 0 },
}}
className="flex flex-col gap-4 items-center md:items-start"
>

<span className="font-semibold text-white">
Connect
</span>

<div className="flex gap-4">

<motion.a
animate={{ y: [0, -4, 0] }}
transition={{ duration: 4, repeat: Infinity }}
whileHover={{ y: -6, scale: 1.12 }}
whileTap={{ scale: 0.95 }}
href="https://github.com/rryoukou"
target="_blank"
rel="noopener noreferrer"
className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700
hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300"
>
<Github size={18} />
</motion.a>

<motion.a
animate={{ y: [0, -4, 0] }}
transition={{ duration: 4, repeat: Infinity, delay: 0.4 }}
whileHover={{ y: -6, scale: 1.12 }}
whileTap={{ scale: 0.95 }}
href="mailto:rryoukou14@gmail.com"
className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700
hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
>
<Mail size={18} />
</motion.a>

<motion.a
animate={{ y: [0, -4, 0] }}
transition={{ duration: 4, repeat: Infinity, delay: 0.8 }}
whileHover={{ y: -6, scale: 1.12 }}
whileTap={{ scale: 0.95 }}
href="#"
className="w-11 h-11 flex items-center justify-center rounded-full border border-gray-700
hover:border-indigo-500 hover:bg-indigo-500/10 transition-all duration-300"
>
<Linkedin size={18} />
</motion.a>

</div>

</motion.div>

</div>

{/* BOTTOM */}
<div className="max-w-6xl mx-auto mt-14 border-t border-white/10 pt-6 text-center">

<motion.p
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ delay: 0.6 }}
className="text-gray-500 text-xs flex items-center justify-center gap-1"
>

© 2026 rryoukou — Built with Next.js & Tailwind

<motion.span
animate={{ scale: [1, 1.3, 1] }}
transition={{ duration: 1.5, repeat: Infinity }}
>
<Heart size={14} className="text-red-500" />
</motion.span>

</motion.p>

</div>

</motion.footer>


    </main>
  );
}