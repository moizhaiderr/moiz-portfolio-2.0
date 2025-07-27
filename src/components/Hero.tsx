"use client";

import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Code, Zap, Palette } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div 
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [-15, 15, -15],
            x: [-5, 5, -5]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
        />
        
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
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
              className="text-lg text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Passionate about creating innovative web and mobile applications 
              with modern technologies. I bring ideas to life through clean, 
              efficient code and thoughtful user experiences.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
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
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/moizhaiderr", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/moizhaider", label: "LinkedIn" },
                { icon: Mail, href: "mailto:moizhaider232@gmail.com", label: "Email" },
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
          
          {/* Right side - 3D Rotating Cube */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative perspective-1000">
              {/* 3D Cube Container */}
              <div className="cube-container">
                <motion.div 
                  animate={{ 
                    rotateX: 360,
                    rotateY: 360 
                  }}
                  transition={{ 
                    duration: 20, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                  className="cube-3d relative w-40 h-40 mx-auto transform-style-preserve-3d"
                >
                  {/* Cube Faces */}
                  <div 
                    className="cube-face absolute w-40 h-40 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg border border-indigo-400/30 rounded-lg"
                    style={{transform: 'rotateY(0deg) translateZ(70px)'}}
                  >
                    Code
                  </div>
                  <div 
                    className="cube-face absolute w-40 h-40 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg border border-purple-400/30 rounded-lg"
                    style={{transform: 'rotateY(90deg) translateZ(70px)'}}
                  >
                    Create
                  </div>
                  <div 
                    className="cube-face absolute w-40 h-40 bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg border border-cyan-400/30 rounded-lg"
                    style={{transform: 'rotateY(180deg) translateZ(70px)'}}
                  >
                    Design
                  </div>
                  <div 
                    className="cube-face absolute w-40 h-40 bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg border border-green-400/30 rounded-lg"
                    style={{transform: 'rotateY(270deg) translateZ(70px)'}}
                  >
                    Build
                  </div>
                  <div 
                    className="cube-face absolute w-40 h-40 bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white font-bold text-lg border border-orange-400/30 rounded-lg"
                    style={{transform: 'rotateX(90deg) translateZ(70px)'}}
                  >
                    Innovate
                  </div>
                  <div 
                    className="cube-face absolute w-40 h-40 bg-gradient-to-br from-violet-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg border border-violet-400/30 rounded-lg"
                    style={{transform: 'rotateX(-90deg) translateZ(70px)'}}
                  >
                    Learn
                  </div>
                </motion.div>
              </div>

              {/* Floating Symbols around cube */}
              <div className="floating-symbols absolute inset-0">
                {['</>','{}','[]','()',';&','$'].map((symbol, index) => (
                  <motion.span
                    key={index}
                    className="absolute text-indigo-400 text-2xl font-mono opacity-60"
                    style={{
                      left: `${20 + (index * 15)}%`,
                      top: `${10 + (index * 20)}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut"
                    }}
                  >
                    {symbol}
                  </motion.span>
                ))}
              </div>
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
