'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-[#0a0a0a] py-32 md:py-48 px-6 md:px-12 lg:px-24 z-20 overflow-hidden">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-64 h-64 bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">

          {/* Text Content */}
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent font-bold tracking-[0.3em] text-xs uppercase mb-8"
            >
              Who I am
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-[5rem] font-black text-white uppercase tracking-tighter leading-[0.9] mb-12"
            >
              Engineering <br /> <span className="text-white/20">Future-Ready</span> <br /> Systems.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-8 max-w-2xl"
            >
              <p className="text-[#a1a1aa] text-lg md:text-xl font-medium leading-relaxed">
                I am a dedicated software developer based in India, specializing in <span className="text-white">Software Engineering</span> and <span className="text-white">Web Development</span>. I build scalable applications with clean architecture and focus on delivering intuitive and efficient user experiences.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                {[
                  { label: "Current Focus", value: "Software & Web Platforms" },
                  { label: "Education", value: "MCA @ BIT Durg (2024-2026)" },
                  { label: "Location", value: "Bhilai, CG, India" },
                  { label: "Availability", value: "Open to Global Impact" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="text-white/20 font-bold uppercase tracking-widest text-[10px]">{item.label}</span>
                    <span className="text-white font-bold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Visual Showcase */}
          <div className="flex-1 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden glass border border-white/10 group bg-white/[0.02]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[25vw] font-black text-white/[0.02] select-none tracking-tighter group-hover:scale-110 transition-transform duration-1000">RAVI</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-12 left-12 right-12">
                <p className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4">Motto</p>
                <p className="text-white text-2xl md:text-3xl font-black leading-tight uppercase tracking-tighter">
                  &quot;Turning complex logic into <span className="text-white/40 italic">fluid motion</span>.&quot;
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
