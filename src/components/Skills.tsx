'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { category: "Programming Languages", items: "Python, C, C++, JavaScript" },
  { category: "Web Technologies", items: "HTML5, CSS3, Tailwind CSS, Next.js, React" },
  { category: "AI & Data Science", items: "Machine Learning (ML), Neural Networks, NumPy, Pandas" },
  { category: "Backend & Databases", items: "Node.js, SQL, SQLite, REST APIs" },
  { category: "Tools & System", items: "Git/GitHub, UNIX, Windows" },
];

const strengthsData = [
  { title: "Teamwork & Collaboration", description: "Effectively work in team-based hackathons. Orchestrated cross-functional teams." },
  { title: "Problem Solving", description: "Analyze requirements, break down problems, and implement practical solutions." },
  { title: "Learning Agility", description: "Quick to learn new tools and concepts, especially in modern development." },
  { title: "Pressure Handling", description: "Comfortable working under tight deadlines, delivering stable solutions." },
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-[#121212] py-32 px-6 md:px-12 lg:px-24 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-red-500 font-bold tracking-[0.3em] text-xs uppercase mb-4"
            >
              Capabilities
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-[5.5rem] font-black text-white uppercase tracking-tighter leading-none"
            >
              Technical <br /> <span className="text-white/20">Arsenal</span>
            </motion.h2>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#a1a1aa] text-lg max-w-sm md:text-right"
          >
            A diverse toolkit built for rapid development, precise engineering, and scalable solutions.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-[1px] bg-red-500/40 group-hover:w-16 group-hover:bg-red-500 transition-all duration-500" />
                <h4 className="text-red-500 font-bold tracking-[0.2em] text-[10px] uppercase">
                  {skill.category}
                </h4>
              </div>
              
              <div className="space-y-4">
                <p className="text-white text-2xl font-bold tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {skill.items}
                </p>
                <div className="w-full h-[1px] bg-white/5 relative overflow-hidden">
                  <div className="absolute inset-0 bg-red-500/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Strengths - Minimal Grid */}
        <div className="mt-32 pt-24 border-t border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {strengthsData.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <span className="text-white/20 font-mono text-3xl font-black block mb-4 group-hover:text-red-500 transition-colors">
                  0{index + 1}
                </span>
                <h5 className="text-white font-bold text-lg mb-3 tracking-tight">
                  {strength.title}
                </h5>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
