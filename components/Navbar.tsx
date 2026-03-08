"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/50 border-b border-gray-800 z-50"
    >

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          rryoukou
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-gray-300 text-sm">

          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>

          <a
            href="https://github.com/rryoukou"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white text-xs"
          >
            GitHub
          </a>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={26}/> : <Menu size={26}/>}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden flex flex-col gap-6 px-6 pb-6 text-gray-300">

          <a href="#about" onClick={()=>setOpen(false)}>About</a>
          <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>
          <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
          <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>

          <a
            href="https://github.com/rryoukou"
            className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white text-sm w-fit"
          >
            GitHub
          </a>

        </div>
      )}

    </motion.nav>
  )
}