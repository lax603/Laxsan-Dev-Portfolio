"use client";

import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/section-heading';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "Next.js", level: 95, color: "bg-blue" },
        { name: "React.js", level: 90, color: "bg-blue" },
        { name: "Tailwind CSS", level: 85, color: "bg-purple-blue" },
        { name: "JavaScript", level: 90, color: "bg-orange" },
        { name: "TypeScript", level: 85, color: "bg-blue" },
        { name: "HTML & CSS", level: 95, color: "bg-purple-blue" },
        { name: "Framer Motion", level: 80, color: "bg-purple-blue" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, color: "bg-dark-purple" },
        { name: "Express.js", level: 80, color: "bg-dark-purple" },
        { name: "MongoDB", level: 75, color: "bg-orange" },
        { name: "RESTful APIs", level: 85, color: "bg-blue" },
        { name: "GraphQL", level: 70, color: "bg-purple-blue" },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "VS Code", level: 90, color: "bg-blue" },
        { name: "Git & GitHub", level: 85, color: "bg-dark-purple" },
        { name: "npm & Yarn", level: 85, color: "bg-orange" },
        { name: "Webpack", level: 75, color: "bg-blue" },
        { name: "Jest", level: 70, color: "bg-purple-blue" },
        { name: "UI/UX Design", level: 75, color: "bg-orange" },
      ]
    }
  ];

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="My Skills" 
            subtitle="Technologies and tools I've mastered through my journey" 
          />
          
          <div className="mt-12 space-y-16">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <motion.h3 
                  className="text-2xl font-clash-display font-semibold mb-6 pb-2 border-b"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {category.title}
                </motion.h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      className="space-y-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div 
                          className={`h-full ${skill.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skill Icons Grid */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Tech Stack" 
            subtitle="The technologies I use for development" 
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12">
            {[...Array(10)].map((_, i) => (
              <motion.div 
                key={i}
                className="bg-card border rounded-lg p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-full mb-4 ${['bg-blue', 'bg-purple-blue', 'bg-dark-purple', 'bg-orange'][i % 4]} opacity-80`} />
                <h3 className="font-medium">Technology {i + 1}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Services" 
            subtitle="What I can do for your projects" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Web Development",
                description: "Building modern, responsive websites using the latest technologies that look great on any device.",
                icon: "bg-blue"
              },
              {
                title: "Frontend Development",
                description: "Creating interactive user interfaces with React and Next.js that deliver outstanding user experiences.",
                icon: "bg-purple-blue"
              },
              {
                title: "Backend Development",
                description: "Developing robust server-side applications with Node.js, Express, and MongoDB.",
                icon: "bg-dark-purple"
              },
              {
                title: "API Development",
                description: "Building RESTful APIs and integrating third-party services to power your applications.",
                icon: "bg-orange"
              },
              {
                title: "Performance Optimization",
                description: "Improving website speed and performance for better user experience and SEO rankings.",
                icon: "bg-blue"
              },
              {
                title: "Code Review & Refactoring",
                description: "Analyzing and improving existing codebases for better maintainability and performance.",
                icon: "bg-purple-blue"
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-card border rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`${service.icon} w-12 h-12 rounded-full mb-6 flex items-center justify-center`} />
                <h3 className="font-clash-display font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}