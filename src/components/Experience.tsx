'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Full Stack Developer & AI Engineer",
    company: "Portfolio Projects",
    period: "2024 - Present",
    description: "Developing advanced web applications and AI-driven systems. Focused on performance optimization and user-centric design.",
    points: [
      "Built AI-Trainmax, winning GDGC-GGV HackXSprint 2026.",
      "Engineered high-concurrency quiz platforms for 100+ simultaneous users.",
      "Implemented predictive models using Gemini AI and Python."
    ]
  },
  {
    role: "Experience in Web Development",
    company: "Frontend Specialist",
    period: "2024 - Present",
    description: "Built high-end, responsive frontends for diverse projects, focusing on immersive user interfaces and seamless user flows.",
    points: [
      "Developed premium frontend interfaces using React and Next.js.",
      "Implemented complex animations and smooth scrollytelling experiences.",
      "Optimized web performance and ensured cross-browser compatibility."
    ]
  },
  {
    role: "Portfolio Projects",
    company: "Personal Development",
    period: "2021 - 2024",
    description: "Developed a series of professional-grade portfolio projects and open-source tools, focusing on full-stack architecture and high-performance engineering.",
    points: [
      "Architected and deployed production-ready web applications using modern stacks.",
      "Engineered high-performance utility tools and high-concurrency platforms.",
      "Mastered clean code principles and advanced software design patterns."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 z-20 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-4"
          >
            Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Experience
          </motion.h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
              >
                {/* Dot on Line */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-10 border-4 border-[#0a0a0a] hidden md:block shadow-[0_0_15px_rgba(255,60,60,0.5)]" />

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="glass p-8 md:p-10 rounded-3xl group hover:border-accent/30 transition-all duration-500">
                    <span className="text-accent font-mono text-sm mb-2 block">{exp.period}</span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-[#a1a1aa] font-semibold text-sm mb-6 uppercase tracking-wider">
                      {exp.company}
                    </p>
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-gray-500 text-sm">
                          <span className="text-accent">▹</span> {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for flow */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
