'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Full-Stack Development",
    description: "Building scalable, high-performance web applications using modern frameworks like Next.js, React, and Node.js.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    tags: ["React", "Next.js", "Node.js", "SQL"]
  },
  {
    title: "AI & ML Solutions",
    description: "Integrating intelligent features and predictive modeling into applications using Python and advanced AI APIs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    tags: ["Python", "TensorFlow", "Gemini AI", "Data Analysis"]
  },
  {
    title: "UI/UX Architecture",
    description: "Designing sleek, user-centric interfaces with a focus on motion, accessibility, and visual storytelling.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    tags: ["Figma", "Framer Motion", "Tailwind", "Responsive Design"]
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-4"
          >
            Specialization
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]"
          >
            Core <br /> <span className="text-white/20">Expertise</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover p-10 rounded-[2rem] flex flex-col group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 scale-110">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-[#a1a1aa] leading-relaxed mb-8 flex-grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-white/5 text-white/40 border border-white/5 group-hover:border-accent/20 group-hover:text-accent/60 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
