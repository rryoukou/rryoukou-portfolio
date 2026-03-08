export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-xl">rryoukou</h1>

          <div className="flex gap-6 text-gray-300">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>


      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center gap-6 pt-20">

        <img
          src="/profile.jpg"
          alt="profile"
          className="w-40 h-40 rounded-full border-4 border-gray-700 object-cover"
        />

        <h1 className="text-5xl font-bold">
          Hello, I'm Rryoukou 👋
        </h1>

        <p className="text-xl text-gray-400">
          Fullstack Developer | Laravel | React
        </p>

      </section>


      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-gray-400 leading-relaxed">
          Saya adalah seorang Fullstack Developer yang memiliki minat
          dalam membangun aplikasi web modern menggunakan Laravel,
          React, dan berbagai teknologi web lainnya.
        </p>
      </section>


      {/* SKILLS */}
      <section id="skills" className="py-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto px-6">

          <div className="bg-black p-6 rounded-xl text-center hover:scale-105 transition">
            Laravel
          </div>

          <div className="bg-black p-6 rounded-xl text-center hover:scale-105 transition">
            React
          </div>

          <div className="bg-black p-6 rounded-xl text-center hover:scale-105 transition">
            Tailwind CSS
          </div>

          <div className="bg-black p-6 rounded-xl text-center hover:scale-105 transition">
            JavaScript
          </div>

          <div className="bg-black p-6 rounded-xl text-center hover:scale-105 transition">
            PHP
          </div>

          <div className="bg-black p-6 rounded-xl text-center hover:scale-105 transition">
            MySQL
          </div>

        </div>
      </section>


      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Movie App</h3>
            <p className="text-gray-400 mb-4">
              Web aplikasi untuk menampilkan daftar film menggunakan React.
            </p>

            <a
              href="https://github.com/rryoukou/Movie"
              className="text-blue-400"
              target="_blank"
            >
              View Project →
            </a>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Serbu Computer</h3>
            <p className="text-gray-400 mb-4">
              Website toko komputer menggunakan Laravel, Tailwind dan MySQL.
            </p>

            <a
              href="https://github.com/rryoukou/serbu-computer"
              className="text-blue-400"
              target="_blank"
            >
              View Project →
            </a>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Football Shopping</h3>
            <p className="text-gray-400 mb-4">
              Website toko jersey sepak bola menggunakan HTML dan CSS.
            </p>

            <a
              href="https://github.com/rryoukou/football-shoping"
              className="text-blue-400"
              target="_blank"
            >
              View Project →
            </a>
          </div>

        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="py-20 bg-gray-900 text-center">

        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-400 mb-8">
          Jika tertarik bekerja sama atau ingin bertanya, silakan hubungi saya.
        </p>

        <div className="flex justify-center gap-6">

          <a
            href="https://github.com/rryoukou"
            target="_blank"
            className="bg-white text-black px-6 py-3 rounded-lg"
          >
            GitHub
          </a>

          <a
            href="mailto:emailkamu@gmail.com"
            className="border border-white px-6 py-3 rounded-lg"
          >
            Email Me
          </a>

        </div>

      </section>


      {/* FOOTER */}
      <footer className="text-center py-6 border-t border-gray-800">

        <p className="text-gray-500">
          © 2026 rryoukou. Built with Next.js & Tailwind CSS
        </p>

      </footer>


    </main>
  );
}