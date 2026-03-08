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
<nav className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/50 border-b border-gray-800 z-50">

  <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

    {/* LOGO */}
    <h1 className="font-bold text-xl tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      rryoukou
    </h1>

    {/* MENU */}
    <div className="flex items-center gap-8 text-gray-300 text-sm">

      <a
        href="#about"
        className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
      >
        About
      </a>

      <a
        href="#skills"
        className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
      >
        Skills
      </a>

      <a
        href="#projects"
        className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
      >
        Projects
      </a>

      <a
        href="#contact"
        className="relative hover:text-white transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all hover:after:w-full"
      >
        Contact
      </a>

      {/* GITHUB BUTTON */}
      <a
        href="https://github.com/rryoukou"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white text-xs font-medium hover:opacity-80 transition"
      >
        GitHub
      </a>

    </div>

  </div>

</nav>

     {/* HERO */}
<section className="min-h-screen flex flex-col items-center justify-center text-center gap-8 pt-24 px-6">

  {/* PROFILE IMAGE */}
  <div className="relative">

    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-40"></div>

    <img
      src="/profile.jpg"
      alt="Rryoukou profile"
      className="relative w-40 h-40 rounded-full border-4 border-gray-800 object-cover"
    />

  </div>

  {/* NAME */}
  <h1 className="text-5xl md:text-6xl font-bold leading-tight">
    Hello I'm{" "}
    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      ryoukou
    </span>
  </h1>

  {/* TYPE ANIMATION */}
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

  {/* DESCRIPTION */}
  <p className="max-w-xl text-gray-400 text-sm md:text-base">
    I build modern, fast, and scalable web applications using
    Laravel, React, and modern web technologies.
  </p>

  {/* BUTTONS */}
  <div className="flex gap-4 mt-4 flex-wrap justify-center">

    <a
      href="#projects"
      className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
    >
      View Projects
    </a>

    <a
      href="https://github.com/rryoukou"
      target="_blank"
      rel="noopener noreferrer"
      className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition"
    >
      GitHub
    </a>

  </div>

</section>

      {/* ABOUT */}
<section id="about" className="py-28 px-6">

  <div className="max-w-4xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      About Me
    </h2>

    {/* CARD */}
    <div className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-2xl p-10 shadow-lg">

      <p className="text-gray-300 leading-relaxed text-sm md:text-base">

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

    </div>

  </div>

</section>

      {/* SKILLS */}
<section id="skills" className="py-28 px-6">

  <div className="max-w-6xl mx-auto">

    {/* TITLE */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      Skills
    </h2>

    {/* SKILLS GRID */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      {skills.map((skill) => (

        <div
          key={skill}
          className="group relative bg-black/40 backdrop-blur-md border border-gray-800 p-8 rounded-2xl text-center transition hover:-translate-y-2 hover:border-blue-500"
        >

          {/* HOVER GLOW */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition"></div>

          {/* ICON */}
          <img
            src={`https://skillicons.dev/icons?i=${skill}`}
            alt={skill}
            className="relative mx-auto mb-3 w-12 h-12"
          />

          {/* TEXT */}
          <p className="relative capitalize text-gray-300 font-medium">
            {skill}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {projects.map((project, index) => (

              <div
                key={index}
                className="group relative bg-black/40 backdrop-blur-md border border-gray-800 p-8 rounded-2xl transition hover:-translate-y-2 hover:border-blue-500"
              >

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative">

                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 text-sm">
                    {project.desc}
                  </p>

                  <div className="flex gap-3">

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-sm"
                      >
                        Live Demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-900"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

     {/* CONTACT */}
<section id="contact" className="py-28 px-6">

  <div className="max-w-3xl mx-auto text-center">

    {/* TITLE */}
    <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      Contact Me
    </h2>

    {/* DESCRIPTION */}
    <p className="text-gray-400 mb-12 text-sm md:text-base">
      Jika tertarik bekerja sama, membuat project, atau sekadar berdiskusi
      tentang web development, jangan ragu untuk menghubungi saya.
    </p>

    {/* CONTACT CARD */}
    <div className="bg-black/40 backdrop-blur-md border border-gray-800 rounded-2xl p-10">

      <div className="flex flex-wrap justify-center gap-6">

        {/* GITHUB */}
        <a
          href="https://github.com/rryoukou"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
        >
          GitHub
        </a>

        {/* EMAIL */}
        <a
          href="mailto:rryoukou14@gmail.com"
          className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          Email
        </a>

        {/* LINKEDIN (optional kalau nanti punya) */}
        <a
          href="#"
          className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          LinkedIn
        </a>

      </div>

    </div>

  </div>

</section>

     {/* FOOTER */}
<footer className="border-t border-gray-800 py-10 px-6">

  <div className="max-w-6xl mx-auto text-center">

    {/* LOGO */}
    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
      rryoukou
    </h3>

    {/* DESCRIPTION */}
    <p className="text-gray-400 text-sm mb-6">
      Fullstack Developer building modern web applications with
      Next.js, React, and Laravel.
    </p>

    {/* SOCIAL LINKS */}
    <div className="flex justify-center gap-6 mb-6 text-sm">

      <a
        href="https://github.com/rryoukou"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition"
      >
        GitHub
      </a>

      <a
        href="mailto:emailkamu@gmail.com"
        className="text-gray-400 hover:text-white transition"
      >
        Email
      </a>

      <a
        href="#"
        className="text-gray-400 hover:text-white transition"
      >
        LinkedIn
      </a>

    </div>

    {/* COPYRIGHT */}
    <p className="text-gray-500 text-xs">
      © 2026 rryoukou — Built with Next.js & Tailwind
    </p>

  </div>

</footer>

    </main>
  );
}