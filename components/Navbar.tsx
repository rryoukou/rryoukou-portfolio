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
transition={{ duration: 0.7, ease: "easeOut" }}
className="fixed top-0 left-0 w-full backdrop-blur-xl bg-black/50 border-b border-gray-800 z-50"
>

<div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

{/* LOGO */}
<motion.h1
whileHover={{ scale: 1.08 }}
className="font-bold text-xl tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer"
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
transition: { staggerChildren: 0.1 }
}
}}
className="hidden md:flex items-center gap-8 text-gray-300 text-sm"
>

<motion.a
variants={{ hidden:{opacity:0,y:-10}, show:{opacity:1,y:0} }}
whileHover={{ y:-2, scale:1.08 }}
href="#about"
className="hover:text-white transition"
>
About
</motion.a>

<motion.a
variants={{ hidden:{opacity:0,y:-10}, show:{opacity:1,y:0} }}
whileHover={{ y:-2, scale:1.08 }}
href="#skills"
className="hover:text-white transition"
>
Skills
</motion.a>

<motion.a
variants={{ hidden:{opacity:0,y:-10}, show:{opacity:1,y:0} }}
whileHover={{ y:-2, scale:1.08 }}
href="#projects"
className="hover:text-white transition"
>
Projects
</motion.a>

<motion.a
variants={{ hidden:{opacity:0,y:-10}, show:{opacity:1,y:0} }}
whileHover={{ y:-2, scale:1.08 }}
href="#contact"
className="hover:text-white transition"
>
Contact
</motion.a>

<motion.a
variants={{ hidden:{opacity:0,y:-10}, show:{opacity:1,y:0} }}
whileHover={{ scale:1.08 }}
href="https://github.com/rryoukou"
target="_blank"
className="ml-4 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white text-xs"
>
GitHub
</motion.a>

</motion.div>

{/* MOBILE BUTTON */}
<button
onClick={()=>setOpen(!open)}
className="md:hidden text-white"
>
{open ? <X size={28}/> : <Menu size={28}/>}
</button>

</div>

{/* MOBILE MENU */}
{open && (

<motion.div
initial={{ opacity:0, y:-20 }}
animate={{ opacity:1, y:0 }}
className="md:hidden flex flex-col gap-6 px-6 pb-6 text-gray-300"
>

<a href="#about">About</a>
<a href="#skills">Skills</a>
<a href="#projects">Projects</a>
<a href="#contact">Contact</a>

<a
href="https://github.com/rryoukou"
className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-white text-sm w-fit"
>
GitHub
</a>

</motion.div>

)}

</motion.nav>

)

}