"use client";

import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Palette,
  Settings
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 75 },
        { name: "GSAP/Framer Motion", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 85 },
        { name: "GraphQL", level: 70 }
      ]
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        { name: "React Native", level: 85 },
        { name: "Flutter", level: 70 },
        { name: "iOS Development", level: 65 },
        { name: "Android Development", level: 65 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
        { name: "CI/CD", level: 75 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="heritage-card p-6 group hover:heritage-glow transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-600/30 transition-colors duration-300">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'VS Code', 'Figma', 'Postman', 'Jira', 'Slack', 'Notion',
              'Firebase', 'Vercel', 'Netlify', 'GitHub Actions', 'Jest', 'Cypress'
            ].map((tool, index) => (
              <motion.div
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -2 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-full text-sm font-medium border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                {tool}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
