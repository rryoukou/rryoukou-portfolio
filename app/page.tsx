export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-950 to-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/70 border-b border-gray-800 z-50">
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

        <div className="relative">

          <div className="absolute inset-0 blur-3xl opacity-30 bg-blue-500 rounded-full"></div>

          <img
            src="/profile.jpg"
            alt="profile"
            className="relative w-40 h-40 rounded-full border-4 border-gray-700 object-cover"
          />

        </div>

        <h1 className="text-5xl md:text-6xl font-bold">
          Hello, I'm <span className="text-blue-500">Rryoukou</span> 👋
        </h1>

        <p className="text-xl text-gray-400 max-w-xl">
          Fullstack Developer who loves building modern web applications
          using Laravel, React and modern technologies.
        </p>

        <div className="flex gap-4 mt-4">

          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition"
          >
            View Projects
          </a>

          <a
            href="https://github.com/rryoukou"
            target="_blank"
            className="border border-gray-600 hover:bg-gray-800 px-6 py-3 rounded-lg transition"
          >
            GitHub
          </a>

        </div>

      </section>


      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto py-24 px-6">

        <h2 className="text-3xl font-bold mb-6 text-center">
          About Me
        </h2>

        <p className="text-gray-400 leading-relaxed text-center">
          Saya adalah seorang Fullstack Developer yang memiliki minat
          dalam membangun aplikasi web modern menggunakan Laravel,
          React, dan berbagai teknologi web lainnya. Saya senang
          mempelajari teknologi baru dan terus meningkatkan kemampuan
          dalam pengembangan aplikasi web.
        </p>

      </section>


      {/* SKILLS */}
      <section id="skills" className="py-24 bg-gray-950">

        <h2 className="text-3xl font-bold text-center mb-14">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto px-6">

          {[
            "Laravel",
            "React",
            "Tailwind CSS",
            "JavaScript",
            "PHP",
            "MySQL",
          ].map((skill) => (

            <div
              key={skill}
              className="bg-black border border-gray-800 p-6 rounded-xl text-center hover:border-blue-500 hover:-translate-y-1 transition"
            >
              {skill}
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

          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 hover:-translate-y-1 transition">

            <h3 className="text-xl font-semibold mb-2">
              Movie App
            </h3>

            <p className="text-gray-400 mb-4">
              Web aplikasi untuk menampilkan daftar film menggunakan React.
            </p>

            <a
              href="https://github.com/rryoukou/Movie"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
            >
              View Project →
            </a>

          </div>


          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 hover:-translate-y-1 transition">

            <h3 className="text-xl font-semibold mb-2">
              Serbu Computer
            </h3>

            <p className="text-gray-400 mb-4">
              Website toko komputer menggunakan Laravel, Tailwind dan MySQL.
            </p>

            <a
              href="https://github.com/rryoukou/serbu-computer"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
            >
              View Project →
            </a>

          </div>


          <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 hover:-translate-y-1 transition">

            <h3 className="text-xl font-semibold mb-2">
              Football Shopping
            </h3>

            <p className="text-gray-400 mb-4">
              Website toko jersey sepak bola menggunakan HTML dan CSS.
            </p>

            <a
              href="https://github.com/rryoukou/football-shoping"
              className="text-blue-400 hover:text-blue-300"
              target="_blank"
            >
              View Project →
            </a>

          </div>

        </div>

      </section>


      {/* CONTACT */}
      <section id="contact" className="py-24 bg-gray-950 text-center px-6">

        <h2 className="text-3xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Jika tertarik bekerja sama atau ingin bertanya, silakan hubungi saya.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="https://github.com/rryoukou"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          >
            GitHub
          </a>

          <a
            href="mailto:rryoukou14@gmail.com"
            className="border border-gray-500 px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Email Me
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-gray-800">

        <p className="text-gray-500 text-sm">
          © 2026 rryoukou. Built with Next.js & Tailwind CSS
        </p>

      </footer>

    </main>
  );
}