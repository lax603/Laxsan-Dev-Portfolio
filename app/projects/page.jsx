"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Github } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

export default function Projects() {
  const categories = ['All', 'Web App', 'Website', 'Frontend', 'Backend'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment integration.",
      category: ['Web App', 'Frontend', 'Backend'],
      technologies: ['Next.js', 'MongoDB', 'Tailwind CSS'],
      image:'public/projects/project-1.png'
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website for a digital artist to showcase their work with animated transitions.",
      category: ['Website', 'Frontend'],
      technologies: ['React', 'Framer Motion', 'CSS'],
      image: null
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, user roles, and progress tracking.",
      category: ['Web App', 'Frontend', 'Backend'],
      technologies: ['Next.js', 'Express', 'MongoDB'],
      image: null
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather information dashboard with location search, forecast data, and interactive visualization.",
      category: ['Web App', 'Frontend'],
      technologies: ['React', 'TailwindCSS', 'Chart.js'],
      image: null
    },
    {
      id: 5,
      title: "API Service",
      description: "A RESTful API service for managing user authentication and authorization with detailed documentation.",
      category: ['Backend'],
      technologies: ['Node.js', 'Express', 'MongoDB'],
      image: null
    },
    {
      id: 6,
      title: "Blog Platform",
      description: "A feature-rich blogging platform with content management, comments, and analytics.",
      category: ['Web App', 'Frontend', 'Backend'],
      technologies: ['Next.js', 'MongoDB', 'TailwindCSS'],
      image: null
    },
  ];
  
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(activeCategory));

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="My Projects" 
            subtitle="A showcase of my work and experience" 
          />
          
          <motion.div 
            className="flex justify-center flex-wrap gap-3 my-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80 text-foreground/80'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  className="bg-card border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-video bg-muted relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground">Project Image</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-clash-display font-semibold text-xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            i % 3 === 0 ? 'bg-blue/10 text-blue' : 
                            i % 3 === 1 ? 'bg-purple-blue/10 text-purple-blue' : 
                            'bg-orange/10 text-orange'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <a 
                        href="#" 
                        className="flex items-center gap-1 text-muted-foreground hover:text-primary text-sm"
                        aria-label="View project live"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                      <a 
                        href="#" 
                        className="flex items-center gap-1 text-muted-foreground hover:text-primary text-sm"
                        aria-label="View project on GitHub"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                      <Link 
                        href={`/projects/${project.id}`} 
                        className="ml-auto text-sm text-primary hover:text-primary/80"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}