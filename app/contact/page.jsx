"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { SectionHeading } from '@/components/section-heading';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission would be handled here
    console.log(formState);
    // Reset form or show success message
  };

  return (
    <>
      <section className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Contact Me" 
            subtitle="Get in touch for collaborations or inquiries" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mt-12">
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-clash-display font-semibold mb-6">
                Let's Talk
              </h3>
              
              <p className="text-muted-foreground mb-8">
                Have a project in mind or want to discuss potential opportunities? 
                Feel free to reach out through the form or using my contact information.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-blue/10 text-blue mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      New York, NY 10001, USA
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-purple-blue/10 text-purple-blue mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      contact@laxsandev.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 rounded-full bg-orange/10 text-orange mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Availability or additional info */}
              <div className="mt-10 p-6 bg-muted/40 rounded-lg border border-border">
                <h4 className="font-medium text-lg mb-2">Current Availability</h4>
                <p className="text-muted-foreground">
                  I'm currently available for freelance work and project collaborations. 
                  My usual response time is within 24 hours.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-card p-8 rounded-lg border shadow-sm">
                <h3 className="text-2xl font-clash-display font-semibold mb-6">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="johndoe@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="I'm interested in discussing a project..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map or Additional Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card border rounded-lg overflow-hidden h-96 flex items-center justify-center text-muted-foreground">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31465.037672666018!2d80.00782710981656!3d9.66995693682013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe53fd7be66aa5%3A0xc7da0d9203baf512!2sJaffna!5e0!3m2!1sen!2slk!4v1746637712845!5m2!1sen!2slk" width="1200" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>
    </>
  );
}