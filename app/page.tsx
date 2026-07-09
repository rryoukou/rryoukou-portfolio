"use client";

import Navbar         from "@/components/sections/Navbar";
import Hero           from "@/components/sections/Hero";
import Experience     from "@/components/sections/Experience";
import BentoGrid      from "@/components/sections/BentoGrid";
import Contact        from "@/components/sections/Contact";
import Footer         from "@/components/sections/Footer";
import CursorGlow     from "@/components/CursorGlow";
import MouseFollower  from "@/components/MouseFollower";
import ClickSpark     from "@/components/reactbits/ClickSpark";
import ScrollProgress from "@/components/ui/ScrollProgress";
import SectionDivider from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative bg-[oklch(0.985_0.003_280)] min-h-screen selection:bg-violet-100 selection:text-violet-700 noise-overlay">
      <ScrollProgress />
      <CursorGlow />
      <MouseFollower />

      <ClickSpark
        sparkColor="#7c3aed"
        sparkSize={7}
        sparkRadius={16}
        sparkCount={8}
        duration={420}
        easing="ease-out"
        extraScale={1.1}
      >
        <Navbar />

        {/* Hero → Experience */}
        <Hero />
        <SectionDivider fromColor="oklch(0.985 0.003 280)" toColor="white" />

        {/* Experience → BentoGrid */}
        <Experience />
        <SectionDivider fromColor="white" toColor="oklch(0.975 0.005 280)" />

        {/* BentoGrid → Contact */}
        <BentoGrid />
        <SectionDivider fromColor="oklch(0.975 0.005 280)" toColor="white" />

        {/* Contact → Footer */}
        <Contact />
        <SectionDivider fromColor="white" toColor="oklch(0.975 0.005 280)" />

        <Footer />
      </ClickSpark>
    </main>
  );
}
