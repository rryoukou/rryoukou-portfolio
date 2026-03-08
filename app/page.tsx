"use client";
import CursorGlow from "@/components/CursorGlow";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Home() {

  const skills = [
    "laravel",
    "react",
    "tailwind",
    "javascript",
    "php",
    "mysql",
    "git",
    "nodejs",
  ];

  const projects = [
    {
      title: "Movie App",
      desc: "Web aplikasi untuk menampilkan daftar film menggunakan React.",
      github: "https://github.com/rryoukou/Movie",
      demo: "https://final-project-sandy-rho.vercel.app/",
    },
    {
      title: "Serbu Computer",
      desc: "Website toko komputer menggunakan Laravel.",
      github: "https://github.com/rryoukou/serbu-computer",
      demo: null,
    },
    {
      title: "Football Shopping",
      desc: "Website toko jersey sepak bola menggunakan HTML & CSS.",
      github: "https://github.com/rryoukou/football-shoping",
      demo: null,
    },
  ];

  return (
    <main className="relative bg-black text-white overflow-hidden">

      <CursorGlow />

    {/* NAVBAR */}
<motion.nav
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/50 border-b border-gray-800 z-50"
>
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

    {/* LOGO */}
    <motion.h1
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="font-bold text-xl tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
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
            staggerChildren: 0.1
          }
        }
      }}
      className="flex items-center gap-8 text-gray-300 text-sm"
    >

      {/* ABOUT */}
      <motion.a
        variants={{
          hidden: { opacity: 0, y: -10 },
          show: { opacity: 1, y: 0 }
        }}
        whileHover={{ y: -2, scale: 1.08 }}
        href="#about"
        className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        About
      </motion.a>

      {/* SKILLS */}
      <motion.a
        variants={{
          hidden: { opacity: 0, y: -10 },
          show: { opacity: 1, y: 0 }
        }}
        whileHover={{ y: -2, scale: 1.08 }}
        href="#skills"
        className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        Skills
      </motion.a>

      {/* PROJECTS */}
      <motion.a
        variants={{
          hidden: { opacity: 0, y: -10 },
          show: { opacity: 1, y: 0 }
        }}
        whileHover={{ y: -2, scale: 1.08 }}
        href="#projects"
        className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        Projects
      </motion.a>

      {/* CONTACT */}
      <motion.a
        variants={{
          hidden: { opacity: 0, y: -10 },
          show: { opacity: 1, y: 0 }
        }}
        whileHover={{ y: -2, scale: 1.08 }}
        href="#contact"
        className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full"
      >
        Contact
      </motion.a>

      {/* GITHUB BUTTON */}
      <motion.a
        variants={{
          hidden: { opacity: 0, y: -10 },
          show: { opacity: 1, y: 0 }
        }}
        whileHover={{ scale: 1.08, y: -2 }}
        whileTap={{ scale: 0.95 }}
        href="https://github.com/rryoukou"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white text-xs font-medium shadow-lg shadow-blue-500/20 hover:shadow-purple-500/30 transition"
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
        staggerChildren: 0.25
      }
    }
  }}
  className="min-h-screen flex flex-col items-center justify-center text-center gap-8 pt-24 px-6"
>

  {/* PROFILE IMAGE */}
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0.8, y: 40 },
      show: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120 }
      }
    }}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity }}
    className="relative"
  >

    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-40 animate-pulse"></div>

    <img
      src="/Profile.jpg"
      alt="Rryoukou profile"
      className="relative w-40 h-40 rounded-full border-4 border-gray-800 object-cover"
    />

  </motion.div>

  {/* NAME */}
  <motion.h1
    variants={{
      hidden: { opacity: 0, y: 40 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 }
      }
    }}
    className="text-5xl md:text-6xl font-bold leading-tight"
  >
    Hello I'm{" "}
    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      ryoukou
    </span>
  </motion.h1>

  {/* TYPE ANIMATION */}
  <motion.div
    variants={{
      hidden: { opacity: 0 },
      show: { opacity: 1 }
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
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 }
      }
    }}
    className="max-w-xl text-gray-400 text-sm md:text-base"
  >
    I build modern, fast, and scalable web applications using
    Laravel, React, and modern web technologies.
  </motion.p>

  {/* BUTTONS */}
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7 }
      }
    }}
    className="flex gap-4 mt-4 flex-wrap justify-center"
  >

    <motion.a
      whileHover={{ scale: 1.07, y: -2 }}
      whileTap={{ scale: 0.95 }}
      href="#projects"
      className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-500/20 hover:shadow-purple-500/30 transition"
    >
      View Projects
    </motion.a>

    <motion.a
      whileHover={{ scale: 1.07, y: -2 }}
      whileTap={{ scale: 0.95 }}
      href="https://github.com/rryoukou"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition"
    >
      GitHub
    </motion.a>

  </motion.div>

</motion.section>

    {/* ABOUT */}
<motion.section
  id="about"
  className="py-28 px-6"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  }}
>

  <div className="max-w-4xl mx-auto text-center">

    {/* TITLE */}
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }}
      className="text-3xl md:text-4xl font-bold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
    >
      About Me
    </motion.h2>

    {/* CARD */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 80, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            type: "spring",
            stiffness: 90,
          },
        },
      }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-10 shadow-lg hover:border-blue-500/40 transition"
    >

      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

      <p className="relative text-gray-300 leading-relaxed text-sm md:text-base">

        Saya adalah seorang <span className="text-blue-400 font-medium">Fullstack Developer</span> 
        yang memiliki passion dalam membangun aplikasi web modern, cepat, dan scalable.

        <br /><br />

        Saya sering menggunakan teknologi seperti 
        <span className="text-purple-400 font-medium"> Laravel</span>, 
        <span className="text-blue-400 font-medium"> React</span>, 
        dan berbagai tools web modern untuk menciptakan pengalaman pengguna yang baik.

        <br /><br />

        Saat ini saya terus belajar dan mengembangkan skill di dunia web development
        untuk membuat aplikasi yang lebih powerful dan efisien.

      </p>

    </motion.div>

  </div>

</motion.section>
    {/* SKILLS */}
<motion.section
  id="skills"
  className="py-28 px-6"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>

  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
    >
      Skills
    </motion.h2>

    {/* SKILLS GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      {skills.map((skill) => (

        <motion.div
          key={skill}
          variants={{
            hidden: { opacity: 0, y: 60, scale: 0.9 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 120 },
            },
          }}
          whileHover={{
            y: -8,
            scale: 1.05,
            rotate: 1,
          }}
          className="group relative bg-black/40 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl text-center transition hover:border-blue-500/40"
        >

          {/* HOVER GLOW */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

          {/* ICON */}
          <motion.img
            whileHover={{ scale: 1.2, rotate: 5 }}
            src={`https://skillicons.dev/icons?i=${skill}`}
            alt={skill}
            className="relative mx-auto mb-3 w-12 h-12"
          />

          {/* TEXT */}
          <p className="relative capitalize text-gray-300 font-medium">
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
  className="py-28 px-6"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
    >
      Projects
    </motion.h2>

    {/* PROJECT GRID */}
    <div className="grid md:grid-cols-3 gap-8">

      {projects.map((project, index) => (

        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, y: 60, scale: 0.95 },
            show: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: { type: "spring", stiffness: 120 },
            },
          }}
          whileHover={{
            y: -10,
            scale: 1.03,
            rotateX: 2,
            rotateY: -2,
          }}
          className="group relative bg-black/40 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl transition hover:border-blue-500/40"
        >

          {/* GLOW EFFECT */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition"></div>

          <div className="relative">

            {/* TITLE */}
            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition">
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-gray-400 mb-6 text-sm">
              {project.desc}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-3">

              {project.demo && (
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-sm shadow-lg shadow-blue-500/20 hover:shadow-purple-500/30 transition"
                >
                  Live Demo
                </motion.a>
              )}

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-900 transition"
              >
                GitHub
              </motion.a>

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
  className="py-28 px-6"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>

  <div className="max-w-3xl mx-auto text-center">

    {/* TITLE */}
    <motion.h2
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
    >
      Contact Me
    </motion.h2>

    {/* DESCRIPTION */}
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="text-gray-400 mb-12 text-sm md:text-base"
    >
      Jika tertarik bekerja sama, membuat project, atau sekadar berdiskusi
      tentang web development, jangan ragu untuk menghubungi saya.
    </motion.p>

    {/* CONTACT CARD */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { type: "spring", stiffness: 120 },
        },
      }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="relative bg-black/40 backdrop-blur-xl border border-gray-800 rounded-2xl p-10 hover:border-blue-500/40 transition"
    >

      {/* GLOW EFFECT */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 blur-xl transition"></div>

      <div className="relative flex flex-wrap justify-center gap-6">

        {/* GITHUB */}
        <motion.a
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          href="https://github.com/rryoukou"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-500/20 hover:shadow-purple-500/30 transition"
        >
          GitHub
        </motion.a>

        {/* EMAIL */}
        <motion.a
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:rryoukou14@gmail.com"
          className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          Email
        </motion.a>

        {/* LINKEDIN */}
        <motion.a
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          LinkedIn
        </motion.a>

      </div>

    </motion.div>

  </div>

</motion.section>

{/* FOOTER */}
<motion.footer
  className="border-t border-gray-800 py-10 px-6"
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
>

  <div className="max-w-6xl mx-auto text-center">

    {/* LOGO */}
    <motion.h3
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      whileHover={{ scale: 1.05 }}
      className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
    >
      rryoukou
    </motion.h3>

    {/* DESCRIPTION */}
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="text-gray-400 text-sm mb-6"
    >
      Fullstack Developer building modern web applications with
      Next.js, React, and Laravel.
    </motion.p>

    {/* SOCIAL LINKS */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="flex justify-center gap-6 mb-6 text-sm"
    >

      <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        href="https://github.com/rryoukou"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition"
      >
        GitHub
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        href="mailto:emailkamu@gmail.com"
        className="text-gray-400 hover:text-white transition"
      >
        Email
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1, y: -2 }}
        href="#"
        className="text-gray-400 hover:text-white transition"
      >
        LinkedIn
      </motion.a>

    </motion.div>

    {/* COPYRIGHT */}
    <motion.p
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.6 } },
      }}
      className="text-gray-500 text-xs"
    >
      © 2026 rryoukou — Built with Next.js & Tailwind
    </motion.p>

  </div>

</motion.footer>



    </main>
  );
}