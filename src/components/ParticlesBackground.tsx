"use client";

import { useCallback, useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    const loadParticles = async () => {
      try {
        const { tsParticles } = await import("@tsparticles/engine");
        const { loadSlim } = await import("@tsparticles/slim");
        
        await loadSlim(tsParticles);
        
        await tsParticles.load("tsparticles", {
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#3b82f6",
            },
            links: {
              color: "#3b82f6",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 50,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        });
      } catch (error) {
        console.error("Error loading particles:", error);
      }
    };

    loadParticles();
  }, []);

  return (
    <div 
      id="tsparticles" 
      className="absolute inset-0 -z-10"
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
    />
  );
};

export default ParticlesBackground;
