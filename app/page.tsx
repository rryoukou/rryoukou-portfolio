"use client";
import CursorGlow from "@/components/CursorGlow";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Home() {

  
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
  className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10"
>

  {/* GRADIENT BORDER */}
  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-40"></div>

  <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

    {/* LOGO */}
    <motion.h1
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="font-bold text-xl tracking-wide bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer"
    >
      rryoukou
    </motion.h1>

    {/* MENU */}
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
      className="flex items-center gap-8 text-sm text-gray-300"
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
          whileHover={{ y: -3 }}
          className="relative group"
        >

          <span className="transition group-hover:text-white">
            {item.name}
          </span>

          {/* HOVER UNDERLINE */}
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>

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

  </div>

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

  {/* BACKGROUND GRADIENT */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl opacity-40"></div>
  </div>

  {/* PROFILE IMAGE */}
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
    className="relative mb-8"
  >

    {/* ROTATING RING */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border border-blue-500/40"
    ></motion.div>

    {/* GLOW */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-30"></div>

    <img
      src="/Profile.jpg"
      alt="ryoukou profile"
      className="relative w-40 h-40 rounded-full border-4 border-gray-800 object-cover shadow-xl"
    />
  </motion.div>

  {/* NAME */}
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
    className="text-5xl md:text-6xl font-bold leading-tight"
  >
    Hello I'm{" "}
    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient">
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
    className="max-w-xl text-gray-400 text-sm md:text-base leading-relaxed"
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
    className="flex gap-4 mt-6 flex-wrap justify-center"
  >

    {/* PROJECT BUTTON */}
    <motion.a
      whileHover={{ scale: 1.08, y: -4 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      href="#projects"
      className="relative bg-gradient-to-r from-blue-500 to-purple-500 px-7 py-3 rounded-xl font-medium
      shadow-lg shadow-blue-500/20 hover:shadow-purple-500/40
      transition-all duration-300"
    >
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
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, y: [0, 10, 0] }}
    transition={{ delay: 2, duration: 2, repeat: Infinity }}
    className="absolute bottom-10 text-gray-500 text-sm"
  >
    Scroll Down ↓
  </motion.div>

</motion.section>

{/* ABOUT */}
<motion.section
  id="about"
  className="py-32 px-6 relative overflow-hidden"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.25 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  }}
>

  {/* BACKGROUND GLOW */}
  <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl opacity-30"></div>

  <div className="max-w-6xl mx-auto relative">

    {/* TITLE */}
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8 },
        },
      }}
      className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
    >
      About Me
    </motion.h2>

    <div className="grid md:grid-cols-2 gap-12 items-center">

      {/* LEFT CONTENT */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
          visible: { opacity: 1, x: 0, filter: "blur(0px)" },
        }}
        className="space-y-6 text-gray-300 text-lg leading-relaxed"
      >

        <p>
          Halo! Saya <span className="text-blue-400 font-semibold">Ryoukou Arya Nugroho</span>,
          seorang developer yang memiliki ketertarikan besar dalam dunia
          <span className="text-purple-400 font-semibold"> Web Development</span>.
        </p>

        <p>
          Saya memiliki passion dalam membangun website modern yang
          cepat, interaktif, dan memiliki pengalaman pengguna yang baik.
          Fokus utama saya adalah mengembangkan aplikasi web menggunakan
          teknologi modern seperti
          <span className="text-blue-400 font-semibold"> React</span>,
          <span className="text-purple-400 font-semibold"> Next.js</span>,
          dan
          <span className="text-indigo-400 font-semibold"> Laravel</span>.
        </p>

        <p>
          Selain itu saya juga senang mempelajari teknologi baru,
          meningkatkan kemampuan coding, serta membuat project
          yang dapat membantu menyelesaikan masalah nyata
          melalui solusi digital.
        </p>

        <p>
          Saat ini saya terus mengembangkan kemampuan saya
          di bidang
          <span className="text-blue-400 font-semibold">
            {" "}Frontend Development
          </span>
          ,
          <span className="text-purple-400 font-semibold">
            {" "}Backend Development
          </span>
          ,
          dan juga
          <span className="text-indigo-400 font-semibold">
            {" "}UI/UX Design
          </span>
          untuk menciptakan aplikasi web yang lebih powerful
          dan scalable.
        </p>

      </motion.div>

      {/* RIGHT CARD */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 60, scale: 0.9, filter: "blur(8px)" },
          visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { type: "spring", stiffness: 90 },
          },
        }}
        whileHover={{ scale: 1.03, y: -6 }}
        className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-xl"
      >

        {/* HOVER GLOW */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 hover:opacity-100 blur-2xl transition duration-500"></div>

        <div className="relative grid grid-cols-2 gap-6 text-center">

          <div>
            <h3 className="text-3xl font-bold text-blue-400">10+</h3>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-purple-400">5+</h3>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-indigo-400">2+</h3>
            <p className="text-gray-400 text-sm">Years Learning</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">∞</h3>
            <p className="text-gray-400 text-sm">Ideas</p>
          </div>

        </div>

      </motion.div>

    </div>

  </div>

</motion.section>

 {/* SKILLS */}
<motion.section
  id="skills"
  className="py-32 px-6 relative overflow-hidden"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }}
>

  {/* BACKGROUND GLOW */}
  <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl opacity-40"></div>

  <div className="max-w-6xl mx-auto relative">

    {/* TITLE */}
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8 },
        },
      }}
      className="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
    >
      My Skills
    </motion.h2>

    {/* GRID */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">

      {skills.map((skill) => (

        <motion.div
          key={skill}
          variants={{
            hidden: { opacity: 0, y: 80, scale: 0.85, filter: "blur(10px)" },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              transition: { type: "spring", stiffness: 120, damping: 14 },
            },
          }}
          whileHover={{
            y: -10,
            scale: 1.05,
          }}
          transition={{ type: "spring", stiffness: 250 }}
          className="group relative bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl text-center shadow-xl cursor-pointer"
        >

          {/* HOVER GRADIENT */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

          {/* ICON CONTAINER */}
          <div className="relative flex justify-center mb-4">

            {/* ROTATING RING */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute w-16 h-16 border border-blue-500/30 rounded-full"
            ></motion.div>

            <motion.img
              whileHover={{
                scale: 1.25,
                rotate: 10,
              }}
              transition={{ type: "spring", stiffness: 300 }}
              src={`https://skillicons.dev/icons?i=${skill}`}
              alt={skill}
              className="relative w-12 h-12"
            />

          </div>

          {/* TEXT */}
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="relative capitalize text-gray-300 font-medium"
          >
            {skill}
          </motion.p>

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

  {/* BACKGROUND GLOW */}
  <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl opacity-40"></div>

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
      className="text-4xl md:text-5xl font-bold text-center mb-24 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
    >
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
          whileHover={{ y: -12, scale: 1.03 }}
          className="group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl cursor-pointer"
        >

          {/* HOVER GLOW */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-indigo-500/20 transition duration-500 blur-2xl"></div>

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
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              {project.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">
              {project.desc}
            </p>

            {/* TECH */}
            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-6">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-800 px-3 py-1 rounded-full text-gray-300 hover:bg-blue-500/20 transition"
                  >
                    {tech}
                  </span>
                ))}

              </div>
            )}

            {/* BUTTON */}
            <div className="flex gap-3">

              {project.demo && (
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-sm
                  shadow-lg shadow-blue-500/20 hover:shadow-purple-500/40
                  transition-all duration-300"
                >
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
                  className="border border-gray-700 px-4 py-2 rounded-lg text-sm
                  hover:bg-gray-900 hover:border-gray-500
                  transition-all duration-300"
                >
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
  className="py-32 px-6 relative overflow-hidden"
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

  {/* BACKGROUND GLOW */}
  <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl opacity-40"></div>

  <div className="max-w-4xl mx-auto text-center relative">

    {/* TITLE */}
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.8 },
        },
      }}
      className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent"
    >
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
      className="text-gray-400 mb-16 max-w-xl mx-auto text-sm md:text-base leading-relaxed"
    >
      Jika tertarik bekerja sama, membuat project, atau sekadar berdiskusi
      tentang web development, jangan ragu untuk menghubungi saya.
    </motion.p>

    {/* CONTACT CARD */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 80, scale: 0.9, filter: "blur(8px)" },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: { type: "spring", stiffness: 110, damping: 15 },
        },
      }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-xl"
    >

      {/* HOVER GLOW */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"></div>

      <div className="relative grid md:grid-cols-3 gap-6">

        {/* GITHUB */}
        <motion.a
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="https://github.com/rryoukou"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl
          shadow-lg shadow-blue-500/20 hover:shadow-purple-500/40 transition-all"
        >
          <span className="text-lg font-semibold">GitHub</span>
          <span className="text-xs opacity-80">View my repositories</span>
        </motion.a>

        {/* EMAIL */}
        <motion.a
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="mailto:rryoukou14@gmail.com"
          className="flex flex-col items-center justify-center gap-3 border border-gray-700 p-6 rounded-xl
          hover:bg-gray-900 hover:border-gray-500 transition-all"
        >
          <span className="text-lg font-semibold">Email</span>
          <span className="text-xs text-gray-400">Send me a message</span>
        </motion.a>

        {/* LINKEDIN */}
        <motion.a
          whileHover={{ y: -5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          href="#"
          className="flex flex-col items-center justify-center gap-3 border border-gray-700 p-6 rounded-xl
          hover:bg-gray-900 hover:border-gray-500 transition-all"
        >
          <span className="text-lg font-semibold">LinkedIn</span>
          <span className="text-xs text-gray-400">Connect with me</span>
        </motion.a>

      </div>

    </motion.div>

  </div>

</motion.section>

{/* FOOTER */}
<motion.footer
  className="relative border-t border-white/10 py-16 px-6 overflow-hidden"
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

  {/* BACKGROUND GLOW */}
  <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-indigo-500/20 blur-3xl opacity-40"></div>

  <div className="max-w-6xl mx-auto relative grid md:grid-cols-3 gap-10 text-center md:text-left">

    {/* BRAND */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      }}
    >

      <motion.h3
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        rryoukou
      </motion.h3>

      <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
        Fullstack Developer building modern web applications with
        Next.js, React, and Laravel.
      </p>

    </motion.div>

    {/* QUICK LINKS */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      }}
      className="flex flex-col gap-2 text-sm"
    >

      <span className="font-semibold text-white mb-2">Navigation</span>

      <a href="#about" className="text-gray-400 hover:text-blue-400 transition">
        About
      </a>

      <a href="#projects" className="text-gray-400 hover:text-blue-400 transition">
        Projects
      </a>

      <a href="#contact" className="text-gray-400 hover:text-blue-400 transition">
        Contact
      </a>

    </motion.div>

    {/* SOCIAL */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      }}
      className="flex flex-col gap-4 items-center md:items-start"
    >

      <span className="font-semibold text-white">Connect</span>

      <div className="flex gap-4">

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/rryoukou"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 border border-gray-700 rounded-lg text-sm
          hover:border-blue-500 hover:bg-gray-900 transition"
        >
          GitHub
        </motion.a>

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:emailkamu@gmail.com"
          className="px-4 py-2 border border-gray-700 rounded-lg text-sm
          hover:border-purple-500 hover:bg-gray-900 transition"
        >
          Email
        </motion.a>

        <motion.a
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="px-4 py-2 border border-gray-700 rounded-lg text-sm
          hover:border-indigo-500 hover:bg-gray-900 transition"
        >
          LinkedIn
        </motion.a>

      </div>

    </motion.div>

  </div>

  {/* DIVIDER */}
  <div className="max-w-6xl mx-auto mt-12 border-t border-gray-800 pt-6 text-center">

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="text-gray-500 text-xs"
    >
      © 2026 rryoukou — Built with Next.js & Tailwind
    </motion.p>

  </div>

</motion.footer>


    </main>
  );
}