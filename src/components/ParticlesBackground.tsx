"use client";

import { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: #3b82f6;
        border-radius: 50%;
        pointer-events: none;
        opacity: 0.6;
        z-index: -1;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        animation: float ${5 + Math.random() * 10}s infinite linear;
      `;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 15000);
    };

    // Add CSS animation
    if (!document.getElementById('particles-style')) {
      const style = document.createElement('style');
      style.id = 'particles-style';
      style.textContent = `
        @keyframes float {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }

    // Create particles periodically
    const interval = setInterval(createParticle, 300);

    return () => {
      clearInterval(interval);
      // Clean up existing particles
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return null;
};

export default ParticlesBackground;
