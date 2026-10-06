'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "MCA",
    company: "Bhilai Institute of Technology, Durg",
    period: "2024 - 2026",
    description: "Master of Computer Applications",
    points: [
      "Focusing on computer applications while building core hands-on UI/UX design skills."
    ]
  },
  {
    role: "BCA",
    company: "Indira Gandhi College, Rahoud, CG",
    period: "2021 - 2024",
    description: "Bachelor of Computer Applications",
    points: [
      "Built foundation in computer applications and web development fundamentals."
    ]
  },
  {
    role: "Figma Practice",
    company: "Self-Initiated Projects",
    period: "Ongoing",
    description: "Self-initiated design projects and practical UI exercise",
    points: [
      "UI design, prototyping, components, variants, typography and micro-interactions."
    ]
  },
  {
    role: "Google UX Design Professional Certificate",
    company: "Coursera",
    period: "In Progress",
    description: "Professional UX Certification",
    points: [
      "Developing foundational skills in UX design process, wireframing and prototyping."
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
            Education & Practice
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Learning Journey
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
