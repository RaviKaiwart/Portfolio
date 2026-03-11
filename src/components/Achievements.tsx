'use client';

import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: "Hackathon Winner",
    organization: "GDGC-GGV HackXSprint",
    date: "2025",
    description: "Won 1st place for AI-Trainmax, an optimization engine for train traffic management.",
    icon: "🏆"
  },
  {
    title: "SIH Participant",
    organization: "Smart India Hackathon",
    date: "2024",
    description: "Finalist in the prestigious national level hackathon solving real-world problems.",
    icon: "💻"
  },
  {
    title: "Technical Lead",
    organization: "College Tech Club",
    date: "2024 - Present",
    description: "Leading a team of developers to build community-driven projects and workshops.",
    icon: "🚀"
  },
  {
    title: "100+ Live Users",
    organization: "Smart Quiz Platform",
    date: "2023",
    description: "Successfully managed high-concurrency event for 100+ concurrent students.",
    icon: "🔥"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative w-full bg-[#0a0a0a] py-32 px-6 md:px-12 lg:px-24 z-20 overflow-hidden">
      {/* Dynamic Background Polish */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,60,60,0.03)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-4"
            >
              Milestones
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
            >
              Honors <br /> <span className="text-white/20">& Recognition</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#a1a1aa] text-lg max-w-sm md:text-right"
          >
            A track record of excellence in national hackathons and technical leadership.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group glass p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col h-full hover:border-accent/40 transition-all duration-500"
            >
              <div className="text-accent font-black text-4xl mb-8 group-hover:scale-110 transition-transform origin-left">
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              
              <p className="text-accent/60 text-[10px] font-bold uppercase tracking-widest mb-6">
                {item.organization} • {item.date}
              </p>
              
              <p className="text-gray-500 text-sm leading-relaxed mt-auto">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
