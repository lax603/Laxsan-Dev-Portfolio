"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';
import Image from 'next/image';

export default function About() {
  const experiences = [
    {
      title: "Senior Web Developer",
      company: "TechCorp",
      period: "2021 - Present",
      description: "Led the development of multiple web applications using Next.js and React. Implemented responsive designs and optimized performance."
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions",
      period: "2019 - 2021",
      description: "Built interactive user interfaces with React.js. Worked with REST APIs and implemented state management solutions."
    },
    {
      title: "Junior Developer",
      company: "StartupInc",
      period: "2018 - 2019",
      description: "Developed and maintained websites using JavaScript and CSS. Collaborated with design team to implement UI/UX improvements."
    }
  ];

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="About Me" 
            subtitle="Learn more about my background and experience" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mt-12">
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-muted h-96 rounded-lg overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <span className="text-lg text-muted-foreground italic">
                  <Image src="/profile.jpg" width={400} height={400} alt="Profile" className="w-full h-full object-cover" />
                </span>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#"
                  className="px-6 py-3 text-primary-foreground bg-primary rounded-lg flex items-center justify-center gap-2 font-medium hover:opacity-90 transition-opacity"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </Link>
                <Link 
                  href="/contact"
                  className="px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors flex items-center justify-center gap-2"
                >
                  Contact Me
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-clash-display font-semibold mb-4">
                Passionate Web Developer Bringing Ideas to Life
              </h3>
              
              <div className="space-y-4 text-muted-foreground mb-8">
                <p>
                  Hello! I m Laxsan, a web developer with a passion for creating beautiful, functional 
                  and user-friendly websites. I specialize in modern JavaScript frameworks like Next.js and React.js, 
                  combined with elegant styling solutions like Tailwind CSS.
                </p>
                <p>
                  My journey in web development started several 05 years ago, and since then, I ve been 
                  continuously learning and improving my skills. I enjoy solving complex problems and 
                  turning ideas into reality through code.
                </p>
                <p>
                  When I m not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge with the developer community.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-clash-display font-semibold mb-3">My Approach</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Clean, maintainable code</li>
                    <li>• Responsive, user-friendly designs</li>
                    <li>• Performance optimization</li>
                    <li>• Accessibility-first development</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-clash-display font-semibold mb-3">Personal Interests</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Open-source contribution</li>
                    <li>• Tech community events</li>
                    <li>• UI/UX design principles</li>
                    <li>• Continuous learning</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Experience Timeline */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Experience" 
            subtitle="My professional journey" 
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="absolute -left-[41px] bg-background p-2 rounded-full border-2 border-primary/30">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  
                  <div className="bg-card p-6 rounded-lg shadow-sm border">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                      <h3 className="font-clash-display font-semibold text-lg">
                        {exp.title} at {exp.company}
                      </h3>
                      <div className="flex items-center mt-2 sm:mt-0 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: experiences.length * 0.2 }}
              >
                <div className="absolute -left-[41px] bg-background p-2 rounded-full border-2 border-primary/30">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-sm border">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3">
                    <h3 className="font-clash-display font-semibold text-lg">
                     Self Learning at Home
                    </h3>
                    <div className="flex items-center mt-2 sm:mt-0 text-muted-foreground text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      2020 - 2022
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                  Learning to the basics of Web Development and HTML , CSS and JavaScript.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}