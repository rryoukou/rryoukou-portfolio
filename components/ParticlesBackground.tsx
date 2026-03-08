"use client";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = async (engine: Engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          links: { enable: false },
          move: {
            enable: true,
            speed: 0.5
          },
          size: {
            value: { min: 1, max: 3 }
          },
          opacity: {
            value: 0.5
          }
        }
      }}
    />
  );
}