"use client";
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';


export default function Home() {
  
  const technoicons = [
    { name: 'Next', icon: '/nextjs-blue.svg' },
    { name: 'React', icon: '/reactjs.svg' },
    { name: 'Node', icon: '/nodejs.svg' },
    { name: 'Express', icon: '/expressjs-g.svg' }, 
    { name: 'MongoDB', icon: '/mongodb.svg' },
    { name: 'Tailwind', icon: '/tailwind.svg' },
    { name: 'TypeScript', icon: '/ts.svg' },
    { name: 'Javascript', icon: '/js.svg' },
  ];
  

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-3"
            >
              <span className="text-accent text-lg md:text-xl font-medium">Hello, I'm</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-clash-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-foreground">Laxsan</span>
              <span className="text-primary"> Dev</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A passionate web developer specializing in creating beautiful, 
              responsive, and user-friendly applications with modern technologies.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link 
                href="/projects"
                className="px-8 py-3 text-primary-foreground bg-primary rounded-lg flex items-center gap-2 font-medium hover:opacity-90 transition-opacity"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Contact Me
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-12 sm:mt-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <ChevronDown className="h-8 w-8 mx-auto animate-bounce text-muted-foreground" />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A selection of my recent work" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                className="bg-card rounded-lg overflow-hidden shadow-lg border group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <Link 
                      href={`/projects/${item}`}
                      className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium"
                    >
                      View Project
                    </Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-clash-display font-semibold text-xl mb-2">Project Title {item}</h3>
                  <p className="text-muted-foreground mb-4">A brief description of the project and what technologies were used.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue/10 text-blue text-xs rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-purple-blue/10 text-purple-blue text-xs rounded-full">Tailwind</span>
                    <span className="px-3 py-1 bg-orange/10 text-orange text-xs rounded-full">MongoDB</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="My Skills" 
            subtitle="Technologies and tools I work with" 
          />
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
          {technoicons.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center p-4 bg-card rounded-lg border shadow-sm             hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img src={tech.icon} alt={tech.name} className="w-10 h-10 mb-3 opacity-90" />
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/skills"
              className="inline-flex items-center gap-2 px-8 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
            >
              See All Skills
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-clash-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Let's Work Together
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Have a project in mind? Let's talk about how we can bring your ideas to life!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/contact"
                className="px-8 py-3 text-primary-foreground bg-primary rounded-lg inline-flex items-center gap-2 font-medium hover:opacity-90 transition-opacity"
              >
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}