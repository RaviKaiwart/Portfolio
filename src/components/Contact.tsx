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
                Let's
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
              Based in India, working worldwide. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </motion.p>
          </div>

          {/* Right Header */}
          <div className="flex flex-col justify-center lg:pt-16">
            <motion.h3
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter max-w-xl"
            >
              Think I'd be a good fit for your team or project? <br />
              <span className="text-accent inline-block mt-4">Let's</span> <br />
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
                Creative Developer, currently crafting digital experiences and high-end interfaces
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
                <img
                  src="/sequence/Memoji.png"
                  alt="Memoji"
                  className="w-full h-full object-contain select-none"
                />
              </div>

              {/* Blue Pill Speech Bubble */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                className="absolute top-[18%] -right-48 md:-right-52 bg-[#007aff] px-6 py-3 rounded-full z-20 shadow-[0_10px_30px_rgba(0,122,255,0.3)] whitespace-nowrap"
              >
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#007aff] rotate-45 rounded-sm" />
                <p className="text-white text-[10px] md:text-[11px] font-black leading-tight relative z-10 uppercase tracking-widest [word-spacing:0.25rem]">
                  Proud Chhattisgarhiya <br /> We Don't say yes We say Haww
                </p>
              </motion.div>
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
                    name: 'Instagram',
                    url: 'https://www.instagram.com/ravi_kaiwart_06/',
                    icon: (
                      <svg className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.668.071-4.947.19-4.353 2.612-6.785 6.967-6.982 1.281-.059 1.689-.073 4.948-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                ].map((link, i) => (
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
