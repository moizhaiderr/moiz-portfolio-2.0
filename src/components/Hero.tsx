"use client";

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let animationId: number;
    let scene: any, camera: any, renderer: any, cube: any;

    const initThreeJS = async () => {
      // Dynamic import to avoid SSR issues
      const THREE = await import('three');

      if (!canvasRef.current) return;

      // Scene setup
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current,
        alpha: true,
        antialias: true 
      });
      
      renderer.setSize(300, 300);
      renderer.setClearColor(0x000000, 0);

      // Create cube
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      const material = new THREE.MeshBasicMaterial({
        color: 0x3b82f6,
        wireframe: true,
        transparent: true,
        opacity: 0.8
      });
      cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      // Animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        
        renderer.render(scene, camera);
      };

      animate();
    };

    initThreeJS();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">Moiz</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 mb-8 font-light"
            >
              Software Engineer & Full-Stack Developer
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg text-gray-400 mb-8 max-w-lg mx-auto md:mx-0"
            >
              Passionate about creating innovative web and mobile applications 
              with modern technologies. I bring ideas to life through clean, 
              efficient code and thoughtful user experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300"
              >
                Contact Me
              </motion.button>
            </motion.div>
            
            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-6 justify-center md:justify-start"
            >
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Mail, href: "#", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right side - 3D Cube */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <canvas
                ref={canvasRef}
                className="w-[300px] h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
