"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js, Stripe integration, and modern UI/UX design. Features include user authentication, shopping cart, payment processing, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with React and Firebase.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Firebase", "Material-UI", "Redux", "WebSocket"],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
      featured: true
    },
    {
      id: 3,
      title: "Mobile Fitness Tracker",
      description: "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features. Built with React Native and integrated with health APIs.",
      image: "/api/placeholder/400/250",
      technologies: ["React Native", "Expo", "Redux", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      category: "mobile",
      featured: true
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics. Features real-time data and beautiful visualizations.",
      image: "/api/placeholder/400/250",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
      featured: false
    },
    {
      id: 5,
      title: "Recipe Sharing Platform",
      description: "A social platform for sharing and discovering recipes with features like rating, reviews, meal planning, and shopping list generation.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
      liveUrl: "#",
      githubUrl: "#",
      category: "web",
      featured: false
    },
    {
      id: 6,
      title: "Expense Tracker Mobile App",
      description: "A personal finance mobile app with expense categorization, budget tracking, and financial insights with beautiful charts and reports.",
      image: "/api/placeholder/400/250",
      technologies: ["Flutter", "Dart", "SQLite", "Provider", "Charts"],
      liveUrl: "#",
      githubUrl: "#",
      category: "mobile",
      featured: false
    }
  ];

  const categoryIcons = {
    web: Globe,
    mobile: Smartphone,
    api: Code
  };

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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in 
            web development, mobile apps, and full-stack solutions.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Work</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                viewport={{ once: true }}
                className="heritage-card overflow-hidden group hover:heritage-glow transition-all duration-300"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {categoryIcons[project.category as keyof typeof categoryIcons] && (
                        <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto mb-2 flex items-center justify-center">
                          {(() => {
                            const Icon = categoryIcons[project.category as keyof typeof categoryIcons];
                            return <Icon className="w-8 h-8 text-blue-400" />;
                          })()}
                        </div>
                      )}
                      <p className="text-gray-400 text-sm">Project Preview</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 rounded-lg text-sm font-medium transition-all duration-300"
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -3 }}
                viewport={{ once: true }}
                className="heritage-card p-6 group hover:heritage-glow transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                    {categoryIcons[project.category as keyof typeof categoryIcons] && (
                      (() => {
                        const Icon = categoryIcons[project.category as keyof typeof categoryIcons];
                        return <Icon className="w-6 h-6 text-blue-400" />;
                      })()
                    )}
                  </div>
                  <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-medium border border-blue-600/30">
                    {project.category}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description.substring(0, 120)}...
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.05 }}
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-400 hover:text-gray-300 transition-colors duration-300"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Want to see more of my work? Check out my GitHub profile for additional projects and contributions.
          </p>
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-300"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
