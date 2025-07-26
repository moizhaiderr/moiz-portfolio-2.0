"use client";

import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects Coming Soon</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm currently working on some exciting projects that will be showcased here soon. 
            Stay tuned for updates!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
