/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        /* Glitch */
        glitch: {
          "0%":   { "clip-path": "inset(20% 0 50% 0)" },
          "10%":  { "clip-path": "inset(15% 0 55% 0)" },
          "20%":  { "clip-path": "inset(30% 0 40% 0)" },
          "30%":  { "clip-path": "inset(10% 0 60% 0)" },
          "40%":  { "clip-path": "inset(25% 0 35% 0)" },
          "50%":  { "clip-path": "inset(20% 0 50% 0)" },
          "60%":  { "clip-path": "inset(15% 0 55% 0)" },
          "70%":  { "clip-path": "inset(30% 0 40% 0)" },
          "80%":  { "clip-path": "inset(20% 0 50% 0)" },
          "90%":  { "clip-path": "inset(10% 0 60% 0)" },
          "100%": { "clip-path": "inset(30% 0 40% 0)" },
        },
        /* Scanline */
        scanline: {
          "0%":   { top: "0%" },
          "100%": { top: "100%" },
        },
        /* Star border */
        "star-movement-bottom": {
          "0%":   { transform: "translate(0%, 0%)",    opacity: "1" },
          "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
        },
        "star-movement-top": {
          "0%":   { transform: "translate(0%, 0%)",   opacity: "1" },
          "100%": { transform: "translate(100%, 0%)", opacity: "0" },
        },
        /* Float */
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":      { transform: "translateY(-12px) rotate(1deg)" },
          "66%":      { transform: "translateY(-6px) rotate(-1deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-20px)" },
        },
        /* Aurora */
        aurora: {
          "0%":   { transform: "translateX(-20%) translateY(-10%) scale(1.1)", opacity: "0.4" },
          "33%":  { transform: "translateX(10%) translateY(10%) scale(1.3)",   opacity: "0.6" },
          "66%":  { transform: "translateX(-5%) translateY(-5%) scale(0.9)",   opacity: "0.3" },
          "100%": { transform: "translateX(-20%) translateY(-10%) scale(1.1)", opacity: "0.4" },
        },
        /* Glow pulse */
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(120,80,255,0.3), 0 0 40px rgba(120,80,255,0.1)" },
          "50%":      { boxShadow: "0 0 40px rgba(120,80,255,0.6), 0 0 80px rgba(120,80,255,0.2)" },
        },
        /* Shimmer */
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition:  "200% center" },
        },
        /* Gradient-x */
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        /* Fade up */
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        /* Slide right (shimmer sweep) */
        "slide-right": {
          from: { transform: "translateX(-100%)" },
          to:   { transform: "translateX(400%)" },
        },
      },
      animation: {
        "glitch-after":           "glitch var(--after-duration) infinite linear alternate-reverse",
        "glitch-before":          "glitch var(--before-duration) infinite linear alternate-reverse",
        "scanline":               "scanline 4s linear infinite",
        "star-movement-bottom":   "star-movement-bottom linear infinite alternate",
        "star-movement-top":      "star-movement-top linear infinite alternate",
        "float":                  "float 6s ease-in-out infinite",
        "float-slow":             "float-slow 8s ease-in-out infinite",
        "aurora":                 "aurora 12s ease-in-out infinite",
        "glow-pulse":             "glow-pulse 3s ease-in-out infinite",
        "shimmer":                "shimmer 3s linear infinite",
        "gradient-x":             "gradient-x 4s ease infinite",
        "fade-up":                "fade-up 0.6s ease-out forwards",
        "slide-right":            "slide-right 2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
