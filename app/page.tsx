"use client";

import CursorGlow from "@/components/CursorGlow";
import { TypeAnimation } from "react-type-animation";

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
      link: "https://github.com/rryoukou/Movie",
    },
    {
      title: "Serbu Computer",
      desc: "Website toko komputer menggunakan Laravel.",
      link: "https://github.com/rryoukou/serbu-computer",
    },
    {
      title: "Football Shopping",
      desc: "Website toko jersey sepak bola menggunakan HTML & CSS.",
      link: "https://github.com/rryoukou/football-shoping",
    },
  ];

  return (
    <main className="relative bg-black text-white overflow-hidden">

      {/* CURSOR GLOW */}
      <CursorGlow />

      {/* AURORA BACKGROUND */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute top-[-200px] left-[20%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[200px] opacity-20"></div>

        <div className="absolute bottom-[-200px] right-[20%] w-[600px] h-[600px] bg-purple-500 rounded-full blur-[200px] opacity-20"></div>

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/60 border-b border-gray-800 z-50">

        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <h1 className="font-bold text-xl tracking-wide">
            rryoukou
          </h1>

          <div className="flex gap-6 text-gray-300 text-sm">

            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center gap-6 pt-20 px-6">

        <img
          src="/profile.jpg"
          alt="Rryoukou profile"
          className="w-40 h-40 rounded-full border-4 border-gray-700 object-cover shadow-lg"
        />

        <h1 className="text-5xl md:text-6xl font-bold">
          Hello I'm <span className="text-blue-500">Rryoukou</span>
        </h1>

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
          className="text-gray-400 text-lg"
        />

        <div className="flex gap-4 mt-4">

          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com/rryoukou"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            GitHub
          </a>

        </div>

      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto py-24 px-6 text-center">

        <h2 className="text-3xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed">
          Saya adalah seorang Fullstack Developer yang memiliki minat
          dalam membangun aplikasi web modern menggunakan Laravel,
          React, dan berbagai teknologi web lainnya. Saya senang
          mempelajari teknologi baru dan terus meningkatkan skill
          development saya.
        </p>

      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 bg-black/40 backdrop-blur-sm">

        <h2 className="text-3xl font-bold text-center mb-14">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto px-6">

          {skills.map((skill) => (

            <div
              key={skill}
              className="bg-black border border-gray-800 p-6 rounded-xl text-center hover:border-blue-500 hover:-translate-y-1 transition"
            >

              <img
                src={`https://skillicons.dev/icons?i=${skill}`}
                alt={skill}
                className="mx-auto mb-2"
              />

              <p className="capitalize">{skill}</p>

            </div>

          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24">

        <h2 className="text-3xl font-bold text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 hover:-translate-y-1 transition"
            >

              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.desc}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400"
              >
                View Project →
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center">

        <h2 className="text-3xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Jika tertarik bekerja sama atau ingin bertanya silakan hubungi saya.
        </p>

        <div className="flex justify-center gap-6">

          <a
            href="https://github.com/rryoukou"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-lg"
          >
            GitHub
          </a>

          <a
            href="mailto:emailkamu@gmail.com"
            className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Email
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-gray-800">

        <p className="text-gray-500 text-sm">
          © 2026 rryoukou — Built with Next.js & Tailwind
        </p>

      </footer>

    </main>
  );
}