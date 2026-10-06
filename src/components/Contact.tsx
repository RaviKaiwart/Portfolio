'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black py-32 md:py-48 px-6 md:px-12 lg:px-24 z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* New Header Section from Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 lg:mb-16">
          {/* Left Header */}
          <div className="flex flex-col justify-start">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-6"
            >
              Get in touch
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col mb-10"
            >
              <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8]">
                Let&apos;s
              </h2>
              <h2
                className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] text-transparent"
                style={{ WebkitTextStroke: '2px rgba(255,255,255,0.1)' }}
              >
                Connect
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#a1a1aa] text-lg font-medium max-w-md leading-relaxed"
            >
              Open to UI/UX internships. Feel free to reach out.
            </motion.p>
          </div>

          {/* Right Header */}
          <div className="flex flex-col justify-center lg:pt-16">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter max-w-xl"
            >
              Looking for a UI/UX internship? <br />
              <span className="text-accent inline-block mt-4">Let&apos;s</span> <br />
              <span className="text-accent">connect.</span>
            </motion.h3>
          </div>
        </div>

        {/* Existing Content - Emoji, Name, Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 pt-16 border-t border-white/5">

          {/* Left Column: Intro & Memoji */}
          <div className="flex flex-col space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-2">
                RAVI KUMAR KAIWART
              </h2>
              <p className="text-[#a1a1aa] text-sm md:text-base font-medium max-w-xs leading-snug">
                UI/UX Design Enthusiast, crafting clean interfaces and user-centered digital experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block self-start"
            >
              {/* Avatar Container */}
              <div className="relative w-64 h-64 md:w-[22rem] md:h-[22rem] z-10 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                  src="/sequence/Memoji.png"
                  alt="Memoji"
                  className="w-full h-full object-contain select-none"
                />
              </div>
            </motion.div>
          </div>

          {/* Right Column: CTA & Socials */}
          <div className="flex flex-col justify-end pt-4 space-y-16 lg:space-y-24">
            {/* Email Section */}
            <div>
              <h4 className="text-[#444] font-black uppercase tracking-[0.3em] text-[10px] mb-8">
                Email
              </h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <a
                  href="mailto:ravikaiwart2004@gmail.com"
                  className="group relative inline-flex items-center px-10 py-5 bg-[#151515] border border-white/5 text-white/90 font-bold text-sm md:text-base rounded-full overflow-hidden transition-all duration-300 hover:bg-[#202020]"
                >
                  <span className="relative z-10 lowercase">ravikaiwart2004@gmail.com</span>
                </a>
              </motion.div>
            </div>

            <div>
              <h4 className="text-[#444] font-black uppercase tracking-[0.3em] text-[10px] mb-8">
                SOCIALS
              </h4>
              <div className="flex flex-wrap gap-x-12 gap-y-6">
                {[
                  {
                    name: 'LinkedIn',
                    url: 'https://www.linkedin.com/in/ravi-kumar-kaiwart-26a158328',
                    icon: (
                      <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    )
                  },
                  {
                    name: 'GitHub',
                    url: 'https://github.com/ravikaiwart',
                    icon: (
                      <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    )
                  },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 text-base font-bold hover:text-white transition-colors flex items-center gap-4 group"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
