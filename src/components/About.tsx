"use client";

import { motion } from 'framer-motion';
import { Code, Smartphone, Globe, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Creating responsive and dynamic web applications using modern frameworks like React, Next.js, and Vue.js."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with React Native and Flutter for iOS and Android."
    },
    {
      icon: Code,
      title: "Backend Development",
      description: "Developing robust server-side applications with Node.js, Python, and various databases."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, scalability, and enhanced user experience."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate software engineer with expertise in full-stack development, 
            mobile app creation, and modern web technologies. I love turning complex problems 
            into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center heritage-card">
              <div className="text-center">
                <div className="w-32 h-32 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👨‍💻</span>
                </div>
                <p className="text-gray-400">Profile Image Placeholder</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              With over 3 years of experience in software development, I specialize in 
              creating scalable web applications and mobile solutions. My journey started 
              with a curiosity about how things work, which led me to explore various 
              programming languages and frameworks.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              I believe in writing clean, maintainable code and staying up-to-date with 
              the latest industry trends. When I'm not coding, you can find me contributing 
              to open-source projects or exploring new technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'AWS'].map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm font-medium border border-blue-600/30"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              viewport={{ once: true }}
              className="heritage-card p-6 text-center group hover:heritage-glow transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
